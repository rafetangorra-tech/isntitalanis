const useBasePath = import.meta.env.BASE_URL !== '/';
const envSiteUrl = import.meta.env.PUBLIC_SITE_URL as string | undefined;
const fallbackUrl = useBasePath
  ? 'https://rafetangorra-tech.github.io/isntitalanis'
  : 'https://isntitalanistribute.com';

export const SITE = {
  name: "Isn't It Alanis?",
  fullName: "Isn't It Alanis? — The Music of Alanis Morissette",
  tagline: 'Feel everything again — a live Alanis Morissette experience.',
  url: envSiteUrl || fallbackUrl,
  email: 'isnt.it.alanis.tribute@gmail.com',
  defaultDescription:
    "Isn't It Alanis? is a Long Island-based Alanis Morissette tribute band fronted by Sarah Glen. All live, no tracks — hits, deep cuts, and the spirit of the 90s alternative era.",
  basedIn: 'Long Island, NY',
  socials: {
    instagram: 'https://www.instagram.com/isnt_it_alanis',
    facebook: 'https://www.facebook.com/share/1GsuSChtMg/?mibextid=wwXIfr',
  },
  igHandle: '@isnt_it_alanis',
  youtube: [
    { id: 'juHQwce4pQU', label: 'Live promo' },
    { id: 'wwWPCTg9wLQ', label: 'Live performance' },
  ],
} as const;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/band', label: 'The Band' },
  { href: '/songs', label: 'Songs' },
  { href: '/booking', label: 'Booking' },
] as const;

export const MEMBERS = [
  { slug: 'sarah-glen', name: 'Sarah Glen', role: 'Lead Vocals', file: 'sarah.jpg' },
  { slug: 'dan-keller', name: 'Dan Keller', role: 'Guitar & Vocals', file: 'dan.jpg' },
  { slug: 'james-erickson', name: 'James Erickson', role: 'Guitar', file: 'james.jpg' },
  { slug: 'bill-burns', name: 'Bill Burns', role: 'Bass', file: 'bill.jpg' },
  { slug: 'william-schroeder', name: 'William Schroeder', role: 'Keys', file: 'william.jpg' },
  { slug: 'justin-scheidling', name: 'Justin Scheidling', role: 'Drums', file: 'justin.jpg' },
] as const;

export const SONGS = [
  'All I Really Want',
  'Eight Easy Steps',
  'Right Through You',
  'Hand In My Pocket',
  'Excuses',
  'Head Over Feet',
  'Hands Clean',
  'Ironic',
  'You Learn',
  'Your House',
  'Uninvited',
  'Thank U',
  'You Oughta Know',
] as const;

export const DIFFERENTIATORS = [
  {
    title: 'Thoroughness',
    body: 'Not just the hits — deep cuts and fan favorites get the same care.',
  },
  {
    title: 'Creativity',
    body: 'Song arrangements are embellished for an enhanced live experience.',
  },
  {
    title: 'Integrity',
    body: 'Every vocal and instrument is performed live. No backing tracks.',
  },
  {
    title: 'Immersiveness',
    body: 'Background visuals, high energy, and a fashionable stage presence.',
  },
  {
    title: 'Professionalism',
    body: 'Experienced musicians who keep the show fun, flexible, and interactive.',
  },
] as const;

export const bookingMailto = (subject = "Isn't It Alanis? — Booking Inquiry") =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
