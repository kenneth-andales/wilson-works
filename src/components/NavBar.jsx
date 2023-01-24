import { useState } from 'react'
import Logo from '../assets/logo.svg'
import Burger from '../assets/burger.svg'

function NavBar() {
    const [navigation, setnavigation] = useState('')
    const [navShow, setnavShow] = useState(false);
    const onNav = () => setnavShow(state => !state)
    const goTo = navigate => {
        setnavigation(navigate)
        onNav()
    }

    return (
        <header className='max-container flex justify-between p-mobilespacing 2xl:pt-desktopspacing lg:px-28 items-center'>
            <a href="/">
                <img className='block min-w-mobilelogo md:h-full w-mobilelogo md:w-full max-w-desktoplogo' src={Logo} alt="wilson works logo" />
            </a>
            <button className="md:hidden" onClick={onNav}>
                <img src={Burger} alt="nav icon" />
            </button>
            <div className={ navShow ? 'navmobile-container translate-x-0' : 'navmobile-container'}>
                <div className="nav-container w-1/2 bg-primary md:bg-dark absolute md:relative inset-y-0 right-0  p-mobilespacing">
                    <button className="md:hidden mb-10" onClick={onNav}>
                        <img src={Burger} alt="nav icon" />
                    </button>
                    <ul className="md:font-albert text-mobileh1 md:text-base 2xl:text-navigation flex flex-col md:flex-row gap-4 md:gap-10 navigation">
                        <li>
                            <a href="#aboutus" onClick={() => goTo('aboutus')} className={navigation == 'aboutus' ? 'link active': 'link'}>About</a>
                        </li>
                        <li className="hidden md:block">
                            <a href="#vision" onClick={() => goTo('vision')} className={navigation == 'vision' ? 'link active': 'link'}>Vision</a>
                        </li>
                        <li>
                            <a href="#solution" onClick={() => goTo('solution')} className={navigation == 'solution' ? 'link active': 'link'}>Solution</a>
                        </li>
                        <li>
                            <a href="#services" onClick={() => goTo('services')} className={navigation == 'services' ? 'link active': 'link'}>Services</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => goTo('contact')} className={navigation == 'contact' ? 'link active': 'link'}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default NavBar