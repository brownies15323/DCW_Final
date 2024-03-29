import Link from 'next/link'

const Navbar = () => (
    <div class= "head">
        <div>
        <Link href="/"><a> Home </a></Link> |
        <Link href="/profile"><a> Profile </a></Link> |  
        <Link href="/register"><a> Register </a></Link>  |
        <Link href="/login"><a> Login </a></Link> |
        <Link href="/logout"><a> Logout </a></Link> 
        </div>
    </div>
)

export default Navbar