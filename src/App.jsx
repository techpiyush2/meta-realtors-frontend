import { Routes, Route } from 'react-router-dom';
// import { useSelector } from "react-redux";

import HomePage from "./pages/HomePage";
import Listings from "./pages/Listings";
import ListingDetail from "./pages/ListingDetail";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Brand from "./pages/Brand"
import Layout from "./components/Layout/Layout";
import Plot from "./pages/Plot"
import Invest from './pages/Invest';
import AgentsList from './components/Layout/AgentsList';
import Flat from "./pages/Flat"
import AboutUs from "./pages/AboutUs"
import HomeLoan from "./pages/HomeLoan"
import Kothi from "./pages/Kothi"
import BuyPage from './pages/BuyPage';
import SellPage from './pages/SellPage';
function App() {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Layout>
      <Routes>
        
        <Route path="/home" element={<HomePage/>}/>

        <Route path="/listings" exact element={<Listings />}/>
        <Route path="/listings/:propertyId" element={<ListingDetail />} />
        
        <Route path="/brands" element={<Brand />}/>
        
        <Route path="/flats" element={<Flat />}/>
        <Route path="/plots" element={<Plot />}/>
        <Route path="/kothi-villas" element={<Kothi/>}/>
        
        <Route path="/buy" element={<BuyPage/>}/>
        <Route path="/sell" element={<SellPage/>}/>
        
        <Route path="/home-loan" element={<HomeLoan />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/contact-us" element={<Invest />}/>
        
        <Route path="/invest" element={<Invest />}/>
        <Route path="/agentsList" element={<AgentsList />}/>
        
        <Route path="/blog" exact element={ <Blog />}/>
        <Route path="/blog/:blogId" element={ <Blog />}/>
  
        <Route path="/signup" exact element={ <Signup />}/>
        <Route path="/login" exact element={ <Login />}/>

        
     <Route path="*"  element= {<NotFound/>}/>
        </Routes>
    </Layout>
  );
}

export default App;
