
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { PropertyForm } from "@/components/property/PropertyForm";
import { useAuth } from "@/context/AuthContext";

const AddProperty = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  useEffect(() => {
    // If user is not broker or admin, redirect
    if (user?.role !== 'broker' && user?.role !== 'admin') {
      navigate('/login');
    }
  }, [user, navigate]);
  
  if (user?.role !== 'broker' && user?.role !== 'admin') {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container py-8">
        <PropertyForm />
      </div>
      
      {/* Footer */}
      <footer className="bg-estate-dark text-white py-8 mt-auto">
        <div className="container">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} PropertyHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AddProperty;
