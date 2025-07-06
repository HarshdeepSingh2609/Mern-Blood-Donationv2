const  mongoose = require("mongoose");
const inventoryModel = require("../models/inventoryModel");
const userModel= require("../models/userModel");

//post a new record

// const createInventory = async(req, res) => {
//     try {
//         //validate user
//         const {email} = req.body;
//         const user = await userModel.findOne({email});
//         if(!user) {
//             throw new Error("User not exist");
          
//         }
//         // if(inventoryType==="in" &&  user.role!=="donar") {
//         //     throw new Error("Not a donar")
//         // }
//         // if(inventoryType==="out" &&  user.role!=="hospital") {
//         //     throw new Error("Not a hospital")
//         // }

//         if(req.body.inventoryType=="out") {

//             const reqBloodGroup=req.body.bloodGroup;
//             const reqQuantity=req.body.quantity;
//             const organisation=new mongoose.Types.ObjectId(req.body.userId);

//             //CALCULATED IN BLOOD OF BLOOD GRP
//             console.log(organisation)
//             const totalIn= await inventoryModel.aggregate([
//                 {$match:{
//                     organisation,
//                     inventoryType:"in",
//                     bloodGroup:reqBloodGroup
//                 }},
//                 { $group:{
//                         _id:"$bloodGroup",
//                         total:{$sum:"$quantity"}

//                     }
//                 }
//             ])
//             console.log("total in of requested blood grp ",totalIn);
//             const inBlood=totalIn[0]?.total||0;


//             //calculated total out
//             const totalOut=await inventoryModel.aggregate([
//                 {$match:{
//                     organisation,
//                     inventoryType:"out",
//                     bloodGroup:reqBloodGroup
//                 }},
//                 { $group:{
//                         _id:"$bloodGroup",
//                         total:{$sum:"$quantity"}

//                     }
//                 }
//             ])
//             console.log("total in of requested blood grp ",totalOut);
//             const outBlood=totalOut[0]?.total||0;

//             const availableBlood=inBlood-outBlood;
//             if(availableBlood<reqQuantity) {
//                 return res.status(500).send({
//                     success:false,
//                     message:`${availableBlood}ml is present for blood group ${reqBloodGroup}`
//                 })
//             }
//             req.body.hospital=user?._id;

//         }
//         else {
//             req.body.donar=user?._id;
//         }
       


//         const inventory= new inventoryModel(req.body);
//         await inventory.save();
//         res.status(200).send({
//             success:true,
//             message:"New blood record added"
//         });
//     } catch (error) {
//         console.log(error);
//       return (res.status(500).send({
//             success:false,
//             message:"ERROR IN CREATE INVENTORY",
//             error
//         }));
//     }
// };


const createInventory = async (req, res) => {
  try {
    console.log("🔁 Inventory creation request received");

    const { email, inventoryType, bloodGroup, quantity, organisation: loggedInOrgId } = req.body;

    console.log("📦 Incoming request data:", {
      email,
      inventoryType,
      bloodGroup,
      quantity,
      loggedInOrgId
    });

    // --- Step 1: Validate loggedInOrganisation (This should pass if your org is valid) ---
    const loggedInOrganisation = await userModel.findById(loggedInOrgId);
    if (!loggedInOrganisation || loggedInOrganisation.role !== 'organisation') {
      console.log("❌ Unauthorized: Logged-in user is not a valid organisation or not found.");
      return res.status(403).send({ success: false, message: "Unauthorized: Only organisations can create inventory records." });
    }
    console.log("✅ Request initiated by valid organisation:", loggedInOrganisation.email, "| ID:", loggedInOrgId);

    // --- Step 2: Validate the 'email' user (the donor or hospital) ---
    const transactionParty = await userModel.findOne({ email });
    if (!transactionParty) {
      console.log("❌ No user (donor/hospital) found with the provided email:", email);
      return res.status(404).send({ success: false, message: "No user found with the provided email for this transaction." });
    }

    // --- DEBUGGING START ---
    console.log("\n--- DEBUGGING ROLE CHECK ---");
    console.log("1. Email provided in request:", email);
    console.log("2. transactionParty found by email:", transactionParty.email);
    console.log("3. inventoryType from request:", inventoryType);
    console.log("4. Role of transactionParty (from DB):", transactionParty.role);
    console.log("5. Type of transactionParty.role:", typeof transactionParty.role); // Important for subtle type issues
    console.log("6. Does transactionParty.role === 'hospital'?", transactionParty.role === 'hospital');
    console.log("7. Does transactionParty.role === 'donar'?", transactionParty.role === 'donar');
    console.log("--- END DEBUGGING ROLE CHECK ---\n");
    // --- DEBUGGING END ---


    // --- Step 3: Role validation for the 'transactionParty' based on inventoryType ---
    let newInventoryData = {
      inventoryType,
      bloodGroup,
      quantity,
      organisation: loggedInOrgId
    };

    if (inventoryType === "in") {
      if (transactionParty.role !== "donar") {
        console.log("❌ Role mismatch: For 'IN' inventory, the provided email must belong to a 'donar'.");
        return res.status(403).send({ success: false, message: "For 'IN' inventory, the provided email must belong to a donor." });
      }
      newInventoryData.donar = transactionParty._id;
      console.log("✅ Valid IN request with donor:", transactionParty.email);

    } else if (inventoryType === "out") {
      // This is the block that should be stopping it!
      if (transactionParty.role !== "hospital") {
        console.log("❌ Role mismatch: For 'OUT' inventory, the provided email must belong to a 'hospital'.");
        return res.status(403).send({ success: false, message: "For 'OUT' inventory, the provided email must belong to a hospital." });
      }
      newInventoryData.hospital = transactionParty._id;
      console.log("✅ Valid OUT request with hospital:", transactionParty.email);

      // --- Step 4: Check availability for OUT requests (ONLY if inventoryType is 'out') ---
      // ... (rest of your stock check logic) ...
      const orgIdForAggregation = new mongoose.Types.ObjectId(loggedInOrgId);
      const totalIn = await inventoryModel.aggregate([
        { $match: { organisation: orgIdForAggregation, inventoryType: "in", bloodGroup } },
        { $group: { _id: "$bloodGroup", total: { $sum: "$quantity" } } }
      ]);
      const inBlood = totalIn[0]?.total || 0;

      const totalOut = await inventoryModel.aggregate([
        { $match: { organisation: orgIdForAggregation, inventoryType: "out", bloodGroup } },
        { $group: { _id: "$bloodGroup", total: { $sum: "$quantity" } } }
      ]);
      const outBlood = totalOut[0]?.total || 0;

      const availableBlood = inBlood - outBlood;
      if (availableBlood < quantity) {
        console.log("❌ Not enough blood available for OUT transaction.");
        return res.status(400).send({ success: false, message: `Only ${availableBlood}ml of ${bloodGroup} blood available with your organisation. Cannot fulfill ${quantity}ml request.` });
      }

    } else {
      console.log("❌ Invalid inventory type provided.");
      return res.status(400).send({ success: false, message: "Invalid inventory type provided. Must be 'in' or 'out'." });
    }

    // --- Step 5: Save inventory record ---
    const inventory = new inventoryModel(newInventoryData);
    await inventory.save();

    console.log("✅ Inventory record created successfully:", inventory._id, "by Org:", loggedInOrganisation.email);
    return res.status(200).send({ success: true, message: "New blood record added successfully" });

  } catch (error) {
    console.error("❌ Server Error in createInventory:", error);
    return res.status(500).send({ success: false, message: "Server error while creating inventory", error: error.message || error });
  }
};
//get all records
const getInventory=async(req,res)=>{
    try {
        const inventory = await inventoryModel.find({organisation:req.body.userId}).populate("donar").populate("hospital");
        res.status(200).send({
            success:true,
            message:"SUCCESSFULLY GOT ALL RECORDS",
            inventory
        })

    } catch (error) {
        console.log(error);
       return  res.status(500).send({
            success:false,
            message:"ERROR IN GET all records ",
            error
        })
    }
};

//get hospital all blood records
const getInventoryHosp=async(req,res)=>{
    try {
        const inventory = await inventoryModel.find(req.body.filters)
        .populate("donar").populate("hospital").populate("organisation");

        res.status(200).send({
            success:true,
            message:"SUCCESSFULLY GOT ALL HOSPITAL CONSUMER RECORDS",
            inventory
        })

    } catch (error) {
        console.log(error);
       return  res.status(500).send({
            success:false,
            message:"ERROR IN GET all HOSP records ",
            error
        })
    }
};


//GET DONAR RECORD INFO
const getDonars=async(req,res)=>{
    try {
        const organisation=req.body.userId;
        //find donars
        const donarId=await inventoryModel.distinct("donar",{organisation});
        // console.log(donarId);
        const donars=await userModel.find({_id :{$in:donarId}});
        return res.status(200).send({
            success:true,
            message:"DONAR RECORD FETCH SUCCESS",
            donars
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"ERROR IN GET DONARS",
            error
        })
    }
}


//GET HOSPITAL RECORDS
const getHospitals=async(req,res)=>{
    try {
        const organisation=req.body.userId;
        //find donars
        const hospitalId=await inventoryModel.distinct("hospital",{organisation});
        // console.log(hospitalId);
        const hospitals=await userModel.find({_id :{$in:hospitalId}});
        return res.status(200).send({
            success:true,
            message:"HOSPITAL RECORD FETCH SUCCESS",
            hospitals
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"ERROR IN GET HOSPITALS",
            error
        })
    }
}

//GET ALL Organisations for donars

const getOrganisation=async(req,res)=>{
        try {
            const donar=req.body.userId;
            // console.log("Donor ID:", donar);
            const orgId=await inventoryModel.distinct("organisation",{donar});
            // console.log(orgId);
            const organisations=await userModel.find({_id :{$in:orgId}});
            
            return res.status(200).send({
                success:true,
                message:"ORGANISATION RECORD FETCH SUCCESS",
                organisations
            })
            
        } catch (error) {
            console.log(error);
        return res.status(500).send({
            success:false,
            message:"ERROR IN GET ORG",
            error
        })
        }
}

//GET ALL Organisations for hospitals

const getOrganisationHosp=async(req,res)=>{
    try {
        const hospital=req.body.userId;
        const orgId=await inventoryModel.distinct("organisation",{hospital});
        console.log(orgId);
        const organisations=await userModel.find({_id :{$in:orgId}});
        
        return res.status(200).send({
            success:true,
            message:"HOSPITAL ORGANISATION RECORD FETCH SUCCESS",
            organisations
        })
        
    } catch (error) {
        console.log(error);
    return res.status(500).send({
        success:false,
        message:"ERROR IN GET ORG HOSP",
        error
    })
    }
}

module.exports = { createInventory,getInventory,getDonars,getHospitals,getOrganisation,getOrganisationHosp,getInventoryHosp };