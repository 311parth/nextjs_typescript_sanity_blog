
function Banner() {
    return (
        <div className="px-10 flex flex-col space-y-4 lg:flex-row lg:space-x-5 justify-between mb-10 ">
            <div>
                <span className="text-5xl font-bold"> 
                    Parth's Daily Blog
                </span>  
                <h2 className="space-x-1">
                    Welcome to your {" "}
                    <span className="underline decoration-2 decoration-[#F7AB0A]">
                        favourite developer{" "}
                    </span>
                    Daily blog
                </h2> 
            </div>
        
            <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
                New product features | New technologies | Weekly debugging 
            </p>

        </div>
    )
}

export default Banner
