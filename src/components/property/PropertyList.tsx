
import { Property } from "@/data/propertyData";
import { PropertyCard } from "./PropertyCard";

interface PropertyListProps {
  properties: Property[];
  title?: string;
}

export const PropertyList = ({ properties, title }: PropertyListProps) => {
  if (properties.length === 0) {
    return (
      <div className="py-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-500">No properties found</h2>
      </div>
    );
  }
  
  return (
    <div className="py-8">
      {title && (
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};
