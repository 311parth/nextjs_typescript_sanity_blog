import { client } from "@/lib/sanity.client";
import {groq} from "next-sanity"
import Image from "next/image";
import { urlForImage } from "../../../../../sanity/lib/image";
import {PortableText} from  "@portabletext/react"
import {RichTextComponent} from "../../../../components/RichTextComponent";
type Props ={
    params : {
        slug: string,
    };
};
async function Post({params:{slug}}: Props) {
    const query = groq`
        *[_type=='post' && slug.current == $slug][0]{
            ...,
            author->,
            categories[]->
        }
    `

    const post: Post = await client.fetch(query,{slug});

    // console.log(post)
    return (
        <article className="px-2 md:px-8 pb-10 ">
            <section className="space-y-2 border border-[#F7AB0A] text-white ">
                <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                    <div className="absolute top-0 w-full opacity-10 blur-sm p-10 ">
                    <Image
                        className="object-cover object-left lg:object-center  w-full h-full"
                        src={urlForImage(post.mainImage).url()}
                        alt={post.author.name}
                        fill 
                    />
                    </div>
                </div>
            </section>

            <section className="p-5 bg-[#F7AB0A] w-full">
                <div className="flex flex-col md:flex-row justify-between gap-y-5">
                    <div>
                        <h1 className="text-4xl font-extrabold ">{post.title}</h1>
                        <p>
                            {new Date(post._createdAt).toLocaleDateString("en-US", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Image
                            className="rounded-full"
                            src={urlForImage(post.author.image).url()}
                            alt={post.author.name}
                            width={40}
                            height={40}
                        /> 

                        <div className="w-64">
                            <h3>{post.author.name}</h3>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="italic pt-10 ">{post.description} </h2>
                    <div className="flex items-center justify-end mt-auto space-x-2">
                        {post.categories.map((category)=>(
                            <p
                                key={category._id}
                                className="bg-gray-800 text-white px-3 py-1 rounded-full"
                            >
                                {category.title}
                            </p>    
                            
                        ))}

                    </div>
                </div>
            </section>

            <PortableText value={post.body} components={RichTextComponent}/>
        </article>
    )
}

export default Post
