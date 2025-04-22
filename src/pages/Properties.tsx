
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { PropertyList } from "@/components/property/PropertyList";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { getAllProperties } from "@/data/propertyData";

const Properties = () => {
  const allProperties = getAllProperties();
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState<string>("all");
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  
  // Calculate max price for slider
  const maxPrice = Math.max(...allProperties.map(p => p.price), 1000000);
  
  // Filter properties based on search criteria
  const filteredProperties = allProperties.filter(property => {
    // Search term filter
    const matchesSearch = 
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.state.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Property type filter
    const matchesType = propertyType === "all" || property.type === propertyType;
    
    // Price range filter
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    
    return matchesSearch && matchesType && matchesPrice;
  });
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gray-50 py-6">
        <div className="container">
          <h1 className="text-3xl font-bold mb-6">Browse Properties</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <Input
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger>
                  <SelectValue placeholder="Property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Price Range: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
              </label>
              <Slider
                defaultValue={[0, maxPrice]}
                max={maxPrice}
                step={10000}
                value={priceRange}
                onValueChange={setPriceRange}
                className="my-4"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container py-8">
        <div className="mb-4">
          <p className="text-gray-600">
            {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
          </p>
        </div>
        
        <PropertyList properties={filteredProperties} />
        
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No properties match your search</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
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
};

export default Properties;
