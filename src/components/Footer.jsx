import FooterLogo from '../assets/footerlogo.svg'

function Footer() {
    return (
        <footer className=''>
            <div className="max-container md:py-12 2xl:py-desktopspacing px-mobilespacing lg:px-28 font-albert flex p-mobilespacing relative">
                <ul className="hidden md:flex md:flex-col gap-1 md:w-1/4">
                    <li><a className='footer-link' href="#aboutus">About Us</a></li>
                    <li><a className='footer-link' href="#vision">Our Vision</a></li>
                    <li><a className='footer-link' href="#solution">Our Solution</a></li>
                    <li><a className='footer-link' href="#services">Services</a></li>
                </ul>
                <ul className="w-1/2 md:w-1/4 flex flex-col gap-1">
                    <li><a className='hidden md:block footer-link' href="#contact">Contact</a></li>
                    <li><a className='footer-link' href="#">Terms & Conditions</a></li>
                    <li><a className='footer-link' href="">Privacy Policy</a></li>
                </ul>
                <div className='w-1/2 flex justify-end'>
                    <img className='opacity-50 md:opacity-100 w-1/4 md:w-2/12 min-w-mobilelogofooter max-w-mobilefooterlogo' src={FooterLogo} alt="logo" />
                </div>
                <p className="copyright">2022 All rights reserved, Wilson Works</p>
            </div>
        </footer>
    )
}

export default Footer