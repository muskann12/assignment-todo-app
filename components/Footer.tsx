// components/Footer.tsx

const Footer = () => {
    return (
      <footer className="bg-gray-300 text-center py-4 mt-8">
        <p className="text-gray-700 text-sm">
          &copy; {new Date().getFullYear()} MyApp. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  