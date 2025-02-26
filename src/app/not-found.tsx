import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-violet-500 to-indigo-600 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4 animate-bounce">404</h1>
        <p className="text-2xl font-semibold mb-2">Oops! Page Not Found</p>
        <p className="text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className='btn btn-violet gap-x-4'>
        <ArrowLeft className='' />
            Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Custom404;