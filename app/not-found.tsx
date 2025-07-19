import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 max-w-md text-center mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/" className="bg-primary text-on-primary px-6 py-3 rounded-lg hover:bg-primary-dark transition">
          Return to Homepage
        </Link>
      </div>
      
      <Footer />
    </>
  );
}