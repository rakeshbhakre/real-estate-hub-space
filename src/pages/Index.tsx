
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PropertyList } from '@/components/property/PropertyList';
import { Navbar } from '@/components/layout/Navbar';
import { getFeaturedProperties } from '@/data/propertyData';

const Index = () => {
  const featuredProperties = getFeaturedProperties();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-estate-dark">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')" 
          }}
        ></div>
        
        <div className="container relative z-20 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Dream Property
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Discover the perfect home with our extensive property listings
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/properties">
                <Button size="lg" className="bg-estate-primary hover:bg-estate-primary/90">
                  Browse Properties
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Properties</h2>
            <Link to="/properties" className="text-estate-primary hover:underline">
              View All Properties
            </Link>
          </div>
          
          <PropertyList properties={featuredProperties} />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-estate-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-estate-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Wide Range of Properties</h3>
              <p className="text-gray-600">Find properties in the most desired locations across the country</p>
            </div>
            
            <div className="text-center">
              <div className="bg-estate-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-estate-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast & Efficient</h3>
              <p className="text-gray-600">Our streamlined process makes property transactions quick and hassle-free</p>
            </div>
            
            <div className="text-center">
              <div className="bg-estate-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-estate-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Agents</h3>
              <p className="text-gray-600">Work with experienced and highly rated real estate professionals</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-estate-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your property journey today with PropertyHub
          </p>
          <Link to="/properties">
            <Button size="lg" className="bg-white text-estate-primary hover:bg-white/90">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-estate-dark text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">PropertyHub</h3>
              <p className="max-w-xs text-gray-400">
                Your trusted platform for finding and managing real estate properties.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-3">Navigation</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/" className="hover:text-white">Home</Link></li>
                  <li><Link to="/properties" className="hover:text-white">Properties</Link></li>
                  <li><Link to="/login" className="hover:text-white">Login</Link></li>
                  <li><Link to="/register" className="hover:text-white">Register</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Property Types</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Houses</a></li>
                  <li><a href="#" className="hover:text-white">Apartments</a></li>
                  <li><a href="#" className="hover:text-white">Condos</a></li>
                  <li><a href="#" className="hover:text-white">Townhouses</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>info@propertyhub.com</li>
                  <li>+1 (123) 456-7890</li>
                  <li>123 Main St, Suite 100<br />New York, NY 10001</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} PropertyHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
