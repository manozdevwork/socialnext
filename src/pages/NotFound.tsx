
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-gray-800">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <Link to="/dashboard" className="text-sky-500 hover:text-sky-700 underline">
            Return to Dashboard
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
