import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getHomePage() {
  const entries = await client.getEntries({ content_type: 'homePage', limit: 1 });
  return entries.items[0]?.fields ?? null;
}
