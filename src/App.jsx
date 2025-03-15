import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";
import Settings from "./components/settings";
import Logout from "./components/logout";
import Navbar from "./components/navbar";
import LoginForm from "./components/login";
import FirAcess from "./components/firacess";
import TransferedProperty from "./components/transferedproperty";
import SignupForm from "./components/signup";
import FileUploadPage from "./components/uploadfile";
import SearchFilePage from "./components/viewfilessearch";
import Financials from "./components/financials";
import Homes from "./components/homes";
import Commericals from "./components/commericals";
import HomeTransfered from "./components/hometransfered";
import HomesRented from "./components/homerented";
import FirPrint from "./components/firprint";
import FirConfirm from "./components/firconfirm";
import FIRAccessFile from "./components/firverify";
import LandTransfered from "./components/landtransfered";
import FileDevelopmentCharges from "./components/filedevelopmentcharges";
import AddLegelHeirs from './components/addlegelheir'
import FileMutation from "./components/filemutation";
import FilePossession from "./components/filepossessian";
import Fileleased from "./components/fileleased";
import FileDemaracation from "./components/filedemaraction";




function App() {
  return (
    <Router>
      
      <Navbar />
      <Routes>
        {/* Main Dashboard Route */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Dashboard Sub-Routes */}
        <Route path="/dashboard/firacess" element={<FirAcess />} />
        <Route path="/dashboard/transferedproperty" element={<TransferedProperty />} />
        <Route path="/dashboard/signup" element={<SignupForm />} />
        <Route path="/dashboard/uploadfile" element={<FileUploadPage />} />
        <Route path="/dashboard/viewfilessearch" element={<SearchFilePage />} />
        <Route path="/dashboard/financials" element={<Financials />} />
        <Route path="/dashboard/homes" element={<Homes />} />
        <Route path="/dashboard/commericals" element={<Commericals />} />
        <Route path="/dashboard/hometransfered" element={<HomeTransfered />} />
        <Route path="/dashboard/homerented" element={<HomesRented />} />
        <Route path="/dashboard/firprint" element={<FirPrint />} />
        <Route path="/dashboard/firconfirm" element={<FirConfirm />} />
        <Route path="/dashboard/firverify" element={<FIRAccessFile />} />
        <Route path="/dashboard/login" element={<LoginForm />} />
        <Route path="/dashboard/addlegelheir" element={<AddLegelHeirs />} />
        <Route path="/dashboard/filedemaraction" element={<FileDemaracation />} />
        <Route path="/dashboard/filedevelopmentcharges" element={<FileDevelopmentCharges />} />
        <Route path="/dashboard/fileleased" element={<Fileleased />} />
        <Route path="/dashboard/filemutation" element={<FileMutation />} />
        <Route path="/dashboard/filepossessian" element={<FilePossession />} />
        <Route path="/dashboard/landtransfered" element={<LandTransfered />} />
        <Route path="/dashboard/addlegelheir" element={<AddLegelHeirs />} />


        {/* Other Routes */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;