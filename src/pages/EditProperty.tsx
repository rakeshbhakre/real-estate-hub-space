
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { PropertyForm } from "@/components/property/PropertyForm";
import { getPropertyById } from "@/data/propertyData";
import { useAuth } from "@/context/AuthContext";

const EditProperty = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const property = id ? getPropertyById(id) : null;
  
  useEffect(() => {
    // If user is not admin, redirect
    if (user?.role !== 'admin') {
      navigate('/login');
    }
    
    // If property doesn't exist, redirect
    if (!property) {
      navigate('/properties');
    }
  }, [user, property, navigate]);
  
  if (!property || user?.role !== 'admin') {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container py-8">
        <PropertyForm property={property} isEdit={true} />
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

export default EditProperty;
