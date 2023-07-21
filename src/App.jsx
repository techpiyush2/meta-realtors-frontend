import { Routes, Route } from 'react-router-dom';
// import { useSelector } from "react-redux";

import HomePage from "./pages/HomePage";
import Listings from "./pages/Listings";
import ListingDetail from "./pages/ListingDetail";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Agent from "./pages/Agent";
import Layout from "./components/Layout/Layout";

function App() {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Layout>
      <Routes>
        
        <Route path="/home" element={<HomePage/>}/>

        <Route path="/listings" exact element={<Listings />}/>
        <Route path="/listings/:listingId" element={<ListingDetail />} />
        
        <Route path="/agent" element={<Agent />}/>
        
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
