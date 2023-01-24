function Services() {
    return (
        <section id='services' className="max-container px-mobilespacing lg:px-28 flex flex-col gap-5 md:gap-8">
            <h2 className="heading1">Services</h2>
            <div className="flex flex-col md:flex-row gap-10 md:gap-40">
                <div className="md:w-2/5">
                    <h4 className="heading4 mb-5">IMPLEMENTATION <span className='block'></span>& CONFIGURATION</h4>
                    <p className="description">We provide installation, configuration, and consultation for the technology that we provide. Our engineering teams have years of experience when it comes to handling the latest technologies.</p>
                </div>
                <div className="md:w-2/5">
                    <h4 className="heading4 mb-5">MAINTENANCE <span className='block'></span>& REPAIRS</h4>
                    <p className="description">Our team of experts can take over the maintenance and repairs off your hands. We conduct routine visits to make sure that all equipment and systems are working efficiently.</p>
                </div>
            </div>
        </section>
    )
}

export default Services