// App.js
import { useState, useEffect } from 'react';
import Layout from "./layout/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Admin from "./pages/admin/Admin";
import Dashboard from "./pages/admin/Dashborad";
import Lookbook from "./pages/Lookbook";
import Loader from "./Loaders/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  // This effect will run only once when the component mounts (i.e., on page refresh)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust this duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='lookbook' element={<Lookbook />} />
        <Route path="admin" element={<Admin />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
