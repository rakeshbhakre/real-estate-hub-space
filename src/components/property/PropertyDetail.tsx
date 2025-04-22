
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/context/AuthContext";
import { Property } from "@/data/propertyData";
import { useNavigate } from "react-router-dom";

interface PropertyDetailProps {
  property: Property;
  onEdit?: () => void;
}

export const PropertyDetail = ({ property, onEdit }: PropertyDetailProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const isAdmin = user?.role === 'admin';
  
  const { 
    title, 
    description, 
    price, 
    address, 
    city, 
    state, 
    zipCode,
    bedrooms, 
    bathrooms, 
    squareFeet, 
    images, 
    type,
    yearBuilt
  } = property;
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  return (
    <div className="container max-w-6xl py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <div>
          {/* Property Images */}
          <div className="mb-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <img 
                src={images[0]} 
                alt={title} 
                className="object-cover w-full h-full"
              />
              <Badge className="absolute top-4 right-4 bg-estate-primary">{type}</Badge>
            </div>
            
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2 mt-2">
                {images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-[4/3] overflow-hidden rounded-md">
                    <img
                      src={image}
                      alt={`${title} ${index + 2}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Property Info */}
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="text-xl mt-1">{address}, {city}, {state} {zipCode}</p>
              </div>
              {isAdmin && (
                <Button onClick={onEdit}>Edit Property</Button>
              )}
            </div>
            
            <div className="flex gap-6 mt-6">
              <div className="text-center">
                <p className="text-2xl font-semibold">{bedrooms}</p>
                <p className="text-sm text-gray-500">Bedrooms</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold">{bathrooms}</p>
                <p className="text-sm text-gray-500">Bathrooms</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold">{squareFeet.toLocaleString()}</p>
                <p className="text-sm text-gray-500">Sq Ft</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold">{yearBuilt}</p>
                <p className="text-sm text-gray-500">Year Built</p>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div>
              <h2 className="text-xl font-semibold mb-4">About This Property</h2>
              <p className="text-gray-700 whitespace-pre-line">{description}</p>
            </div>
          </div>
        </div>
        
        <div>
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <p className="text-3xl font-bold text-estate-primary">{formatPrice(price)}</p>
              
              <Separator className="my-4" />
              
              <div className="space-y-4">
                <Button className="w-full" size="lg">Contact Agent</Button>
                <Button variant="outline" className="w-full" size="lg">Schedule Tour</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
