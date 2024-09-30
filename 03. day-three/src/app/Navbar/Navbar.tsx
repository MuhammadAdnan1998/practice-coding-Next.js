import Link from "next/link";

function Navbar(){
    return(
        <div>
            <h5>logo</h5>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/prodcuts"}>Products</Link>
        </div>
    )
}

export default Navbar;