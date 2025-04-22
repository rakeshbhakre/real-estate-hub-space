
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PropertyList } from "@/components/property/PropertyList";
import { PropertyCard } from "@/components/property/PropertyCard";
import { useAuth } from "@/context/AuthContext";
import { getAllProperties } from "@/data/propertyData";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const allProperties = getAllProperties();
  
  useEffect(() => {
    // If user is not logged in, redirect to login
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);
  
  if (!user) {
    return null;
  }
  
  // Admin Dashboard
  if (user.role === 'admin') {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Properties
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{allProperties.length}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Featured Properties
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {allProperties.filter(p => p.featured).length}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0
                  }).format(allProperties.reduce((sum, p) => sum + p.price, 0))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Manage Properties</h2>
            <Link to="/properties/add">
              <Button>Add New Property</Button>
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium">Property</th>
                    <th className="px-4 py-3 text-left font-medium">Price</th>
                    <th className="px-4 py-3 text-left font-medium">Type</th>
                    <th className="px-4 py-3 text-left font-medium">Location</th>
                    <th className="px-4 py-3 text-left font-medium">Featured</th>
                    <th className="px-4 py-3 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {allProperties.map(property => (
                    <tr key={property.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0 mr-3">
                            <img 
                              src={property.images[0]} 
                              alt={property.title} 
                              className="h-10 w-10 rounded-md object-cover"
                            />
                          </div>
                          <div className="truncate max-w-xs">
                            {property.title}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                          maximumFractionDigits: 0
                        }).format(property.price)}
                      </td>
                      <td className="px-4 py-3 capitalize">{property.type}</td>
                      <td className="px-4 py-3">{property.city}, {property.state}</td>
                      <td className="px-4 py-3">
                        {property.featured ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Featured
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            Not Featured
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex space-x-2">
                          <Link to={`/properties/${property.id}`}>
                            <Button variant="ghost" size="sm">View</Button>
                          </Link>
                          <Link to={`/properties/${property.id}/edit`}>
                            <Button variant="ghost" size="sm">Edit</Button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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
  }
  
  // Broker Dashboard
  if (user.role === 'broker') {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6">Broker Dashboard</h1>
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">My Listings</h2>
            <Link to="/properties/add">
              <Button>Add New Property</Button>
            </Link>
          </div>
          
          <PropertyList 
            properties={allProperties.filter(p => p.createdBy === user.id)} 
          />
          
          {allProperties.filter(p => p.createdBy === user.id).length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">No properties listed yet</h3>
              <p className="text-gray-600 mb-4">Start adding properties to your portfolio</p>
              <Link to="/properties/add">
                <Button>Add Your First Property</Button>
              </Link>
            </div>
          )}
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
  }
  
  // Visitor Dashboard
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome, {user.name}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Saved Properties</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">You haven't saved any properties yet.</p>
              <Link to="/properties">
                <Button>Browse Properties</Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Searches</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Your recent searches will appear here.</p>
              <Link to="/properties">
                <Button variant="outline">Start Searching</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Recommended Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allProperties.slice(0, 3).map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
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

export default Dashboard;
