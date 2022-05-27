import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'jiityan',
    apiKey: process.env.API_KEY,
});