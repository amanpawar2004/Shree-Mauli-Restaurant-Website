import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import FloatingCall from "./components/FloatingCall";
import AIChat from "./components/AIChat";
import ScrollToTopButton from "./components/ScrollToTopButton";

// Public Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import BookTable from "./pages/BookTable";

// Admin Pages
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AddMenu from "./pages/AddMenu";
import EditMenu from "./pages/EditMenu";
import ManageMenu from "./pages/ManageMenu";
import ManageBookings from "./pages/ManageBookings";
import ManageMessages from "./pages/ManageMessages";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* ===========================
            Public Routes
        ============================ */}

        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-table" element={<BookTable />} />

        {/* ===========================
            Admin Routes
        ============================ */}

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="/admin/add-menu" element={<AddMenu />} />

        <Route path="/admin/manage-menu" element={<ManageMenu />} />

        <Route path="/admin/edit-menu/:id" element={<EditMenu />} />

        <Route
          path="/admin/manage-bookings"
          element={<ManageBookings />}
        />

        <Route
          path="/admin/manage-messages"
          element={<ManageMessages />}
        />

      </Routes>

      <Footer />

      <FloatingWhatsApp />
      <FloatingCall />
      <AIChat />
      <ScrollToTopButton />
    </>
  );
}

export default App;