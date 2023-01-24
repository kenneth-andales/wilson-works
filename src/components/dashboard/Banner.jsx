import Image1 from '../../assets/image1.png'

function Banner() {
    return (
        <section id='banner' className='relative'>
            <div className='ribbon'></div>
            <div className="w-full max-container lg:px-desktopspacing">
                <div className='px-mobilespacing min-h-bannerheight md:px-desktopspacing md:h-half-screen bg-right bg-contain bg-no-repeat flex items-center' style={{ backgroundImage: `url(${Image1})` }}>
                    <div className="md:px-mobilespacing lg:px-16">
                        <h1 className="heading1 2xl:text-desktoph1 mb-2 md:mb-6">DELIVERING A <span className='block'></span>SMARTER AND <span className='block'></span>SAFER PHILIPPINES</h1>
                        <a href="#" className='btn md:ml-3'>learn more</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner