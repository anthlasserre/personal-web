module.exports = {
  siteTitle: 'Anthony Lasserre | Software Engineer',
  siteDescription:
    'Anthony Lasserre is a software engineer based in Bordeaux, FR who specializes in developing and designing, high-quality websites and applications.',
  siteKeywords:
    'Anthony Lasserre, Anthony, Lasserre, anth.lasserre, software engineer, front-end engineer, web developer, javascript, sud ouest, mobile, applications mobile, bordeaux, bayonne, landes, dax, biarritz, pays basque',
  siteUrl: 'https://anthonylasserre.me',
  siteLanguage: 'fr_FR',
  googleAnalyticsID: 'UA-157499679-1',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Anthony Lasserre',
  location: 'Bordeaux, FR',
  email: 'lasserre.anthony@gmail.com',
  github: 'https://github.com/anthlasserre',
  twitterHandle: '@anthlasserre',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/anthlasserre',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/anthonylasserre',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/anthlasserre',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/anthonylasserre',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/anthlasserre',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
