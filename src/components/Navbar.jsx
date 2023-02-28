import logo from "../assets/bits-logo.png";

const Navbar = () => {
    return (
        <div className="z-50 bg-[#f6f6f6]">
            <div className="flex justify-between items-center p-4 z-50">
                <a href=""><img src={logo} alt="logo" width={120} height={120} /></a>
                <div className="w-52 flex justify-between">
                    <button className="links">Home</button>
                    <button className="links">About</button>
                    <button className="links">Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar