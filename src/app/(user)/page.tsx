import Image from 'next/image';
import { headers ,cookies} from 'next/headers';

import { groq} from "next-sanity";
import { client } from '../../../sanity/lib/client';
import BlogList from '@/components/BlogList';

const query = groq
`
  *[_type=='post']{ 
    ...,
    author->,
    categories[]->,
  } | order(_createdAt desc)

`;

export default async function Home() {

  const previewData = cookies().get("__next_preview_data");
  
  if(previewData){ 
    return(
      <>
        <h3>Preview mode</h3>
      </>
    )
  }

  const posts = await client.fetch(query);
  return ( 
    <BlogList posts={posts}/>
  )
}
