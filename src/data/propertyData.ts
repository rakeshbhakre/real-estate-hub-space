
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  images: string[];
  type: 'house' | 'apartment' | 'condo' | 'townhouse';
  yearBuilt: number;
  featured: boolean;
  createdAt: string;
  createdBy: string;
}

// Mock properties data for demonstration
export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    description: 'Beautiful modern apartment in the heart of downtown with stunning city views. Recently renovated with high-end finishes and appliances. Walking distance to shops, restaurants, and public transit.',
    price: 425000,
    address: '123 Main Street',
    city: 'Austin',
    state: 'TX',
    zipCode: '78701',
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    ],
    type: 'apartment',
    yearBuilt: 2018,
    featured: true,
    createdAt: '2023-01-15T10:00:00Z',
    createdBy: '3' // broker id
  },
  {
    id: '2',
    title: 'Luxury Suburban Home',
    description: 'Spacious family home in a quiet suburban neighborhood. Features a large backyard, updated kitchen, and a two-car garage. Close to excellent schools and parks.',
    price: 750000,
    address: '456 Oak Avenue',
    city: 'Denver',
    state: 'CO',
    zipCode: '80210',
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2800,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    ],
    type: 'house',
    yearBuilt: 2010,
    featured: true,
    createdAt: '2023-02-20T14:30:00Z',
    createdBy: '3' // broker id
  },
  {
    id: '3',
    title: 'Waterfront Condo',
    description: 'Stunning waterfront condo with panoramic views. Open floor plan with floor-to-ceiling windows. Building amenities include a pool, fitness center, and 24-hour concierge.',
    price: 550000,
    address: '789 Harbor Blvd',
    city: 'Miami',
    state: 'FL',
    zipCode: '33101',
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1800,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    ],
    type: 'condo',
    yearBuilt: 2015,
    featured: false,
    createdAt: '2023-03-10T09:15:00Z',
    createdBy: '3' // broker id
  },
  {
    id: '4',
    title: 'Historic Downtown Townhouse',
    description: 'Charming historic townhouse with original architectural details. Completely renovated interior with modern amenities. Private courtyard and rooftop deck.',
    price: 625000,
    address: '321 Elm Street',
    city: 'Charleston',
    state: 'SC',
    zipCode: '29401',
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 2200,
    images: [
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1568092775154-7fa176a29c0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    ],
    type: 'townhouse',
    yearBuilt: 1920,
    featured: true,
    createdAt: '2023-04-05T16:45:00Z',
    createdBy: '3' // broker id
  },
  {
    id: '5',
    title: 'Mountain View Cabin',
    description: 'Cozy cabin with stunning mountain views. Perfect for a vacation home or year-round living. Features a wood-burning fireplace, updated kitchen, and large deck.',
    price: 385000,
    address: '567 Pine Road',
    city: 'Asheville',
    state: 'NC',
    zipCode: '28801',
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 1100,
    images: [
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    ],
    type: 'house',
    yearBuilt: 2005,
    featured: false,
    createdAt: '2023-05-12T11:20:00Z',
    createdBy: '3' // broker id
  }
];

// State management for properties
let properties = [...MOCK_PROPERTIES];

// Get all properties
export const getAllProperties = () => {
  return [...properties];
};

// Get featured properties
export const getFeaturedProperties = () => {
  return properties.filter(property => property.featured);
};

// Get property by ID
export const getPropertyById = (id: string) => {
  return properties.find(property => property.id === id) || null;
};

// Add new property
export const addProperty = (property: Omit<Property, 'id' | 'createdAt'> & { createdBy: string }) => {
  const newProperty: Property = {
    ...property,
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  };
  
  properties = [...properties, newProperty];
  return newProperty;
};

// Update property
export const updateProperty = (id: string, updates: Partial<Property>) => {
  const propertyIndex = properties.findIndex(property => property.id === id);
  
  if (propertyIndex >= 0) {
    properties[propertyIndex] = {
      ...properties[propertyIndex],
      ...updates
    };
    return properties[propertyIndex];
  }
  
  return null;
};

// Delete property
export const deleteProperty = (id: string) => {
  const propertyIndex = properties.findIndex(property => property.id === id);
  
  if (propertyIndex >= 0) {
    const deletedProperty = properties[propertyIndex];
    properties = properties.filter(property => property.id !== id);
    return deletedProperty;
  }
  
  return null;
};
