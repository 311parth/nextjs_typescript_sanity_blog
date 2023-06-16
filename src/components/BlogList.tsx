import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
type Props = {
  posts: Post[];
};
function BlogList({ posts }: Props) {
  console.log(posts.length);
  return (
    <div>
      <hr className="border-black mb-10" />
      {/* BlogList */}
      <br />
      {/* Post Titles: */}
      <div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center px-2 md:px-4">
        
      {posts.map((post) => {

        return(
        <div key={post._id} className="bg-green-200  mx-5 mb-7 md:mx-5  border-2 border-[#F7AB0A] " >
          <div className="relative w-full h-80">
              <Image
                className="object-cover object-left lg:object-center  w-full h-full"
                src={urlForImage(post.mainImage).url()}
                alt={post.author.name}
                fill 
              />
          </div>

              <div className="flex flex-row  my-2   gap-y-2  items-center md:gap-x-2  ">
                <p className="font-bold text-lg px-2 w-4/5 md:w-full">{post.title} </p>
                <p className="text-sm">
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              <div className="mx-auto min-w-fit mr-5">
                {post.categories?.map((category) => {
                   return (
                     <div className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                       <p>{category.title}</p>
                     </div>
                   );
                 })}
              </div>
            </div>
        </div>);
      })}
      </div>

      </div>

    </div>
  );
}

export default BlogList;
