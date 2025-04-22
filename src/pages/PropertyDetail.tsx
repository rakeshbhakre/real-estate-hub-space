
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { PropertyDetail as PropertyDetailComponent } from "@/components/property/PropertyDetail";
import { getPropertyById } from "@/data/propertyData";
import { useAuth } from "@/context/AuthContext";

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const property = id ? getPropertyById(id) : null;
  
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <p className="mb-6">The property you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => navigate('/properties')}
            className="text-estate-primary hover:underline"
          >
            Back to Properties
          </button>
        </div>
      </div>
    );
  }
  
  const handleEditProperty = () => {
    navigate(`/properties/${id}/edit`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PropertyDetailComponent 
        property={property} 
        onEdit={user?.role === 'admin' ? handleEditProperty : undefined}
      />
      
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

export default PropertyDetail;
