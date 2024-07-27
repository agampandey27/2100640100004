import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2">
          I hope you like this site. Looking forward to your selection.
        </p>
        <p className="text-sm mb-2">
          - Agam Pandey 2100640100004
        </p>
        <p className="text-sm mb-2">
          Contact: <a href="tel:+917453043798" className="underline">7453043798</a>
        </p>
        <p className="text-sm">
          Email: <a href="mailto:agampandey705@gmail.com" className="underline">agampandey705@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;