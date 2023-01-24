import Image2 from '../../assets/image2.png'

function AboutUs() {
    return (
        <section id='aboutus' className='about-solution max-container'>
            <div className="flex flex-col gap-5 lg:order-last lg:w-2/5">
                <h2 className='heading1'>about us</h2>
                <p className='description'>Wilson Works Inc., established in 2019, is a full-service systems integrator and technology provider. We provide and implement road safety devices that aim to modernize cities, communities, highways, and government agencies</p>
                <p className="description">Our core business is in the trading, implementing, configuring, and operating the Non-Contact Apprehension (NCAP) system. We use the latest AI and Big Data technology in order to improve traffic safety and provide extensive traffic data analytics.</p>
            </div>
            <div className="lg:w-1/2 md:pt-2">
                <img className='block w-full' src={Image2} alt="" />
            </div>
        </section>
    )
}

export default AboutUs