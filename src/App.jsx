import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HeroSlider from './components/hero/HeroSlider';
import Connect from './components/howWorks/Connect';
import Members from './components/members/Member';
import AboutUs from './components/Aboutus/AboutUs';
import Privacy from './components/privecy/Privacy';
import ContactUs from './components/contactus/ContactUs';
import AdminDashboard from './components/Admin/AdminDashboard';
import UserTable from './components/Admin/UserManagement/UserTable';
import UserData from './components/Admin/userData/UserData';
import Dashboard from './components/Admin/dashboard/Dashboard';
import RenewalsData from './components/Admin/renewalsdata/RenewalsData';
import ResetPassword from './components/Admin/resetpassword/ResetPassword';
import ImageVerificationData from './components/Admin/imageVarify/ImageVerificationdata';
import PendingData from './components/Admin/pendinData/PendingData';
import SuccessData from './components/Admin/successData/SuccessData';
import PromotersUsersData from './components/Admin/PromotersUserData/PromotersUserData';
import PayToPromoterData from './components/Admin/PromoterManagement/PayToPromoterData';
import PromotersEarningsData from './components/Admin/PromotersEarnings/PromotersEarningsData';
import PromotersData from './components/Admin/PromoterData/PromotersData';
import PromotersUsers from './components/Admin/PromotersUsers/PromotersUsers';
import OnlineTransactionData from './components/Admin/Receipts/OnlineTransactiondata';
import AssistanceOnlineTransactionData from './components/Admin/Receipts/AssistanceOnlineTransactionData';
import ReceiptVoucher from './components/Admin/Receipts/ReceiptVocher';
import UserReports from './components/Admin/Reports/UserReports';
import RenewalsReportsData from './components/Admin/Reports/RenewalsReportsData';
import ReceiptsReportsData from './components/Admin/Reports/ReceiptsReportsData';
import UserNavBar from './components/Userprofile/User/UserNavBar';
import NotificationData from './components/Admin/notificationDta/NotificationData';
// import UserDashboard from './components/Userprofile/userdDashboard/UserDashboard';
import Servieces from './components/servieces/Servieces';
import Profile from './components/Userprofile/Profile/Profile';
import MyMatches from './components/Userprofile/myMatches/MyMatches';
import MyInterest from './components/Userprofile/myIntrest/MyIntrest';
import ViewAll from './components/Userprofile/viewAll/ViewAll';
// import UserDashboard from './components/Userprofile/userdDashboard/UserDashboard';
const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    // Check sessionStorage for admin status on initial render
    const adminStatus = sessionStorage.getItem('isAdmin');
    const loginStatus = sessionStorage.getItem('islogged');
    setIsAdmin(adminStatus === 'true'); // Ensure boolean value
    setIsLogged(loginStatus === 'true'); // Ensure boolean value
  }, []);

  return (
    <Router>
      {/* Show Navbar and Footer on non-admin, non-logged-in pages */}
      {/* {!(isAdmin || isLogged) && } */}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<><HeroSlider /><Connect /><Members /></>} />
        <Route path="/service" element={<Servieces />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={ <AdminDashboard /> }
        >
          {/* Nested Admin Routes */}
          <Route path="user-table" element={<UserTable />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="userData" element={<UserData />} />
          <Route path="renewals" element={<RenewalsData />} />
          <Route path="resetpass" element={<ResetPassword />} />
          <Route path="pendingdata" element={<PendingData />} />
          <Route path="successdata" element={<SuccessData />} />
          <Route path="promotersdata" element={<PromotersUsersData />} />
          <Route path="paytopromoters" element={<PayToPromoterData />} />
          <Route path="promoterearn" element={<PromotersEarningsData />} />
          <Route path="imageverify" element={<ImageVerificationData />} />
          <Route path="promoters" element={<PromotersData />} />
          <Route path="promotersusers" element={<PromotersUsers />} />
          <Route path="onlinetransaction" element={<OnlineTransactionData />} />
          <Route path="assistance" element={<AssistanceOnlineTransactionData />} />
          <Route path="receiptsvocher" element={<ReceiptVoucher />} />
          <Route path="userreports" element={<UserReports />} />
          <Route path="renewalreports" element={<RenewalsReportsData />} />
          <Route path="receiptsreports" element={<ReceiptsReportsData />} />
          <Route path="notification" element={<NotificationData />} />
        </Route>

        {/* User Routes */}
        <Route
          path="/user"
          element={ <UserNavBar /> }
        >
          <Route path='profile' element={<Profile/>}/>
          <Route path='MyMatches' element={<MyMatches/>}/>
          <Route path='myintrest' element={<MyInterest/>}/>
          <Route path='viewAll' element={<ViewAll/>}/>
        </Route>
       
      </Routes>

    </Router>
  );
};

export default App;