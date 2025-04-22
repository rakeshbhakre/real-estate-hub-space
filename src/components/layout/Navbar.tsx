
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

export const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-estate-primary">PropertyHub</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-sm font-medium hover:text-estate-primary">
              Home
            </Link>
            <Link to="/properties" className="text-sm font-medium hover:text-estate-primary">
              Properties
            </Link>
            {isAuthenticated && (
              <Link to="/dashboard" className="text-sm font-medium hover:text-estate-primary">
                Dashboard
              </Link>
            )}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <div className="text-sm font-medium">
                <span className="mr-2">
                  {user?.name}
                </span>
                <span className="text-xs px-2 py-1 rounded bg-estate-light text-estate-muted">
                  {user?.role}
                </span>
              </div>
              <Button variant="outline" onClick={logout}>Logout</Button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register" className="hidden md:block">
                <Button>Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
