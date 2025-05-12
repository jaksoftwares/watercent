import Head from 'next/head'; // Import Next.js Head component
import Header from './components/Header';
import Footer from './components/Footer'; 
import "./globals.css"; 

const Layout = ({ children, pageTitle, pageDescription }: { 
  children: React.ReactNode; 
  pageTitle?: string; 
  pageDescription?: string; 
}) => {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
    <div className="flex flex-col min-h-screen">
      {/* Head for SEO meta tags */}
      <Head>
        <title>{pageTitle ? `${pageTitle} | WaterCent` : 'WaterCent'}</title>
        <meta name="description" content={pageDescription || 'We provide water, gas refills, and related accessories for your convenience.'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle ? `${pageTitle} | WaterCent` : 'WaterCent'} />
        <meta property="og:description" content={pageDescription || 'We provide water, gas refills, and related accessories for your convenience.'} />
        <meta property="og:url" content="https://www.watercent.com" />
        <meta property="og:image" content="/path-to-image.jpg" /> {/* Replace with an actual image URL */}
      </Head>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
    </body>
    </html>
  );
};

export default Layout;
