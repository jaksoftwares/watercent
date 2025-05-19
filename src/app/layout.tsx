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
      <meta name="description" content={pageDescription || 'We deliver water, gas refills, and accessories fast and reliably.'} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle ? `${pageTitle} | WaterCent` : 'WaterCent'} />
      <meta property="og:description" content={pageDescription || 'We deliver water, gas refills, and accessories fast and reliably.'} />
      <meta property="og:image" content="https://www.watercent.com/og-preview.jpg" /> {/* Replace with your real image URL */}
      <meta property="og:url" content="https://www.watercent.com" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle ? `${pageTitle} | WaterCent` : 'WaterCent'} />
      <meta name="twitter:description" content={pageDescription || 'We deliver water, gas refills, and accessories fast and reliably.'} />
      <meta name="twitter:image" content="https://www.watercent.com/og-preview.jpg" /> {/* Same image as above */}

      <link rel="icon" href="/favicon.ico" />
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
