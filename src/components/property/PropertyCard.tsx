
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Property } from "@/data/propertyData";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const { id, title, price, address, city, state, bedrooms, bathrooms, squareFeet, images, type } = property;
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <Link to={`/properties/${id}`}>
        <div className="relative aspect-[16/9] overflow-hidden">
          <img 
            src={images[0]} 
            alt={title} 
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
          <Badge className="absolute top-2 right-2 bg-estate-primary">{type}</Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold truncate">{title}</h3>
          <p className="text-xl font-bold text-estate-primary mt-1">{formatPrice(price)}</p>
          <p className="text-sm text-gray-500 mt-1 truncate">{address}, {city}, {state}</p>
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="font-medium">{bedrooms}</span>
              <span className="ml-1">bd</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">{bathrooms}</span>
              <span className="ml-1">ba</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium">{squareFeet.toLocaleString()}</span>
              <span className="ml-1">sqft</span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};
