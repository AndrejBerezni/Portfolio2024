export const projects = [
  {
    name: 'Flux',
    pageLink: 'https://www.fluxecodrive.com/',
    ghLink: 'https://github.com/AndrejBerezni/Flux',
    mainImage: '/flux.png',
    desktopImages: ['/flux-desktop-1.PNG'],
    mobileImages: ['/flux-mob-1.PNG', '/flux-mob-2.PNG'],
    shortDescription:
      'Full stack application for renting electrical vehicles (cars, bikes, and scooters) in Portugal.',
    description:
      'Flux is a full stack web application for renting electrical vehicles (cars, bikes, and scooters) in Portugal. Apart from renting vehicles, it gives user option to purchase gift cards for spending on this platform, or to subscribe to monthly subscriptions that come with certain benefits when renting vehicles.',
    stack: [
      'Next.js',
      'TypeScript',
      'Redux Toolkit',
      'PostgreSQL',
      'Tailwind CSS',
      'Firebase',
      'Stripe',
      'Resend',
    ],
    features: [
      'Vehicle search - users are able to search, filter, and sort vehicles on different locations and dates',
      'Renting vehicles - users can rent vehicles, cancel bookings, and download booking invoices',
      'Authentication with Firebase',
      'Stripe API integrated for handling payments,subscriptions, and promotion codes and coupons',
      'Searching nearby rent locations using Google Maps API',
      'Gift Cards - users can purchase gift cards and send them to designated email address, adding personalized message in the email. History of gift card purchases is displayed on user/giftcards page.',
      'Subscriptions - users can subscribe to one of three subscription plans on subscriptions page. Users can cancel, renew, or change subscription, on user/subscriptions page.',
      'Contact support - users can submit the form that will send an email to our support address, and support ticket will be created in db.',
    ],
  },
  {
    name: 'Schwarz',
    pageLink: 'https://schwarzluxurywatches.web.app/',
    ghLink: 'https://github.com/AndrejBerezni/Schwarz',
    mainImage: '/schwarz.png',
    desktopImages: ['/schwarz-desktop-1.PNG'],
    mobileImages: ['/schwarz-mob-1.PNG', '/schwarz-mob-2.PNG'],
    shortDescription:
      'E-commerce app selling luxury watches, with admin portal for managing the shop.',
    description:
      'E-commerce app selling luxury watches, integrated with Stripe for easier payments. On top of that, this app comes with admin portal, connected to Firebase and Stripe, that allows administrator to manage the shop (adding, editing, removing products, managing displayed content), add or remove other admin users, and have insight into orders and revenue.',
    stack: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'styled-components',
      'Firebase',
      'Stripe',
    ],
    features: [
      'Browsing product catalogue, with options to filter by brand, collection, or discount',
      'Searching - users can search for products using search in the navbar',
      'Shopping - add products to cart and purchase them through Stripe',
      'Reviews - users can write a review for product. Only one review per product is allowed. New review overwrites the old one',
      'Wishlist - users can add products to wishlist, and remove them later or add to cart from wishlist',
      'Authentication with Firebase',
      'Admin portal - admin can have insights into sales, add, remove, or edit products, view orders, add or remove other admin users, and edit shop page content',
    ],
  },
]
