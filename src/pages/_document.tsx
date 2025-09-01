import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Khoubaib Benzayed - Full Stack Developer with 3+ years of experience building fast, scalable, and reliable solutions. Specialized in modern web technologies and startup environments." />
        <meta name="keywords" content="Full Stack Developer, React, Node.js, TypeScript, Next.js, Web Development, Software Engineer" />
        <meta name="author" content="Khoubaib Benzayed" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Khoubaib Benzayed - Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer with 3+ years of experience building fast, scalable, and reliable solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Khoubaib Benzayed - Full Stack Developer" />
        <meta name="twitter:description" content="Full Stack Developer with 3+ years of experience building fast, scalable, and reliable solutions." />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}