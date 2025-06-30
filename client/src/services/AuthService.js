import { userLogin, userRegister} from "../redux/features/auth/authAction";
import store from "../redux/store"

export const HandleLogin =(e,email,password,role)=>{
    e.preventDefault();
    try {
        if(!role ||!email ||!password) { return alert("Fill all fields")}
        // console.log("login =>" ,e,email,password,role)
        store.dispatch(userLogin({email,password,role}));
    } catch (error) {
        console.log(error);
    }
}
export const HandleRegister =(  e,
    name,
    role,
    email,
    password,
    phone,
    organisationName,
    address,
    hospitalName,
    website)=>{
    e.preventDefault();
    try {
        // console.log("register =>" ,e,email,password,name,hospitalName,organisationName,role,website,phone,address)
        store.dispatch(userRegister({
            name,
            role,
            email,
            password,
            phone,
            organisationName,
            address,
            hospitalName,
            website}));
    } catch (error) {
        console.log(error);
    }
}
