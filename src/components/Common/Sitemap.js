const SitemapGenerator = require('sitemap').SitemapGenerator;

// Set the base URL of your website
const baseURL = 'https://metarealtors.in';

// Set the list of URLs to include in the sitemap
const urls = [
  '/',
  '/home',
  '/brands',
  '/invest',
  '/plots',
  '/flats',
  '/kothi-villas',
  '/listings',
  '/blog',
  '/home-loan',
  '/buy',
  '/sell',
  '/contact-us',
  '/about-us',
  '/signup',
  '/login',
  
];

// Create a new sitemap generator instance
const generator = SitemapGenerator(baseURL, {
  stripQuerystring: false, // Set to true if you want to ignore query parameters
});

// Add the URLs to the sitemap
urls.forEach(url => {
  generator.addURL(url);
});

// Generate the sitemap and save it to a file
generator.save('public/sitemap.xml', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Sitemap generated successfully!');
  }
});


