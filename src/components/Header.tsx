import Link from "next/link"
import Image from "next/image"

function Header() {
    return (
        <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
            <div className="flex items-center space-x-2">
                <Link href="/" className="flex items-center "> 
                    <Image className="rounded-full" src="http://localhost:3000/temp_logo.jpg" alt="" width={50} height={50} />
                    <h1 className="mx-2"> XYZ Blog</h1>
                </Link>
            </div>
            <div >
                <Link 
                href="/"
                className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
                >

                    Some important link
                    
                </Link>

            </div>
        </header>
    )
}

export default Header
