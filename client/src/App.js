import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import PublicRoute from './components/Routes/PublicRoute';
import Donar from './pages/Dashboard/Donar';
import Hospital from './pages/Dashboard/Hospital';
import Organisation from './pages/Dashboard/Organisation';
import Consumer from './pages/Dashboard/Consumer';
import Donation from './pages/Donation';
import Analytics from './pages/Dashboard/Analytics';
import DonarList from './pages/Admin/DonarList';
import HospitalList from './pages/Admin/HospitalList';
import OrganizationList from './pages/Admin/OrganizationList';
import AdminHome from './pages/Admin/AdminHome';
import Mainpage from './pages/Mainpage';
// import About from './components/Shared/MainpageContent/About';


function App() {
  return (
    <div>
    <ToastContainer />
      <Routes>

     
      <Route path="/mainpage" element={<PublicRoute><Mainpage /></PublicRoute>} />
      <Route path='/login' element={ <PublicRoute><Login /></PublicRoute>} />
        <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />

        <Route path="/" element = {   <ProtectedRoute><Home /></ProtectedRoute> } />
        <Route path="/donar" element = {   <ProtectedRoute><Donar /></ProtectedRoute> } />
        <Route path="/hospital" element = {   <ProtectedRoute><Hospital /></ProtectedRoute> } />
        <Route path="/organisation" element = {   <ProtectedRoute><Organisation /></ProtectedRoute> } />
        <Route path="/consumer" element = {   <ProtectedRoute><Consumer /></ProtectedRoute> } />
        <Route path="/donation" element = {   <ProtectedRoute><Donation /></ProtectedRoute> } />

        <Route path="/analytics" element = {   <ProtectedRoute><Analytics /></ProtectedRoute> } />

        <Route path="/donar-list" element = {   <ProtectedRoute><DonarList /></ProtectedRoute> } />
        <Route path="/hospital-list" element = {   <ProtectedRoute><HospitalList /></ProtectedRoute> } />
        <Route path="/org-list" element = {   <ProtectedRoute><OrganizationList /></ProtectedRoute> } />
        <Route path="/admin" element = {   <ProtectedRoute><AdminHome/></ProtectedRoute> } />
        
       
      </Routes>
    </div>
  );
}

export default App;
