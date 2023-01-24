function Contact() {
    const tel = '(+63) 917 858 0788'
    const email = 'cslorenzo@wilsonworksph.com'

    return (
        <section id='contact' className="bg-primary">
            <div className="max-container p-mobilespacing md:py-12 lg:px-28 2xl:py-desktopspacing w-full flex flex-col gap-5 md:gap-8">
                <h2 className="heading1">Get in Touch</h2>
                <div className='font-albert flex flex-col gap-4 md:flex-row md:justify-between'>
                    <div className="flex flex-col gap-2">
                        <p className='heading4'>TELEPHONE</p>
                        <a href={`tel:${tel}`} className='description hover:text-primarylight transition-all'>{tel}</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className='heading4'>EMAIL</p>
                        <a href={`mailto:${email}`} className='description hover:text-primarylight transition-all'>{email}</a>
                    </div>
                    <div className="flex flex-col gap-2 md:order-first">
                        <p className='heading4'>Address</p>
                        <p className="description">152 Wilson Street,<br /> Maytunas, San Juan City</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact