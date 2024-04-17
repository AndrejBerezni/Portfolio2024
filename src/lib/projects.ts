export const projects = [
  {
    name: 'Flux',
    mainImage: '/flux.png',
    desktopImages: ['/flux-desktop-1.PNG'],
    mobileImages: ['/flux-mob-1.PNG', '/flux-mob-2.PNG'],
    shortDescription:
      'Full stack application for renting electrical vehicles (cars, bikes, and scooters) in Portugal.',
    description:
      'Full stack application for renting electrical vehicles (cars, bikes, and scooters) in Portugal. Apart from renting vehicles, it gives user option to purchase gift cards for spending on this platform, or to subscribe to monthly subscriptions that come with certain benefits when renting vehicles.',
    stack: [
      'Next.js',
      'TypeScript',
      'Redux Toolkit',
      'PostgreSQL',
      'Tailwind CSS',
      'Firebase',
      'Stripe',
    ],
  },
  {
    name: 'Schwarz',
    mainImage: '/schwarz.png',
    desktopImages: ['/schwarz-desktop-1.PNG'],
    mobileImages: ['/schwarz-mob-1.PNG', '/schwarz-mob-2.PNG'],
    shortDescription:
      'E-commerce app selling luxury watches, with admin portal for managing the shop.',
    description:
      'E-commerce app selling luxury watches, integrated with Stripe for easier payments. On top of that, this app comes with admin portal, connected to Firebase and Stripe, that allows administrator to manage the shop (adding, editing, removing products, managing displayed content), add or remove other admin users, and have insight into orders and revenue',
    stack: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'styled-components',
      'Firebase',
      'Stripe',
    ],
  },
]
