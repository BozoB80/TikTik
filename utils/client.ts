import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '7p69rgbg',
  dataset: 'production',
  apiVersion: '2022-11-20',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
