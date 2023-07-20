import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from "react-redux";

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
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Layout>
      {/* <BrowserRouter>
      <Routes> */}
        
        {/* <Route path="/home" element={<HomePage/>}/> */}
        <HomePage/>
        {/* <Routes>

        <Route path="/listings" exact element={<Listings />}/>
        <Route path=":listingId" element={<ListingDetail />} />
        </Routes>
        
        <Route path="/agent" element={<Agent />}/>
        
        <Routes>
        <Route path="/blog" exact element={ <Blog />}/>
        <Route path=":blogId" element={ <Blog />}/>
        </Routes>
  
        
        <Routes>
        <Route path="/signup" exact element={ <Signup />}/>
          
          {!isAuthenticated && <Signup />}
          {isAuthenticated && <Redirect to="/" />}
        </Routes>
        
        <Routes>
        <Route path="/login" exact element={ <Login />}/>
          
          {!isAuthenticated && <Login />}
          {isAuthenticated && <Redirect to="/" />}
        </Routes> */}
        
        {/* <Route path="*"  element= {<NotFound/>}/>
        </Routes>
      </BrowserRouter> */}
    </Layout>
  );
}

export default App;
