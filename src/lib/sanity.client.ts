import { createClient } from 'next-sanity'

export const apiVersion= process.env.NEXT_PUBLIC_SANITY_APIVERSION;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const useCdn:boolean =  process.env.NEXT_PUBLIC_SANITY_USECDN==="true"? true : false;
export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
