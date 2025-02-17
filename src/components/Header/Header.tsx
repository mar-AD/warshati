import Image from "next/image"
import Link from "next/link"
import warshati_logo from "/public/images/warshati_logo.png"
import Navbar from "./Navbar"
import AuthButton from "./AuthButton"

const Header = () => {
    return (
        <div className="flex items-center justify-between px-14 py-10">
            {/* Logo Section */}
            <Link href={"/"} className="w-44">
                <Image priority src={warshati_logo} alt="warshati_logo" />
            </Link>
            {/* Navigation Bar */}
            <Navbar />
            {/* Authentication Button */}
            <AuthButton />
        </div>
    )
}

export default Header