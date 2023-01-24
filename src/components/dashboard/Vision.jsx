import Image3 from '../../assets/image3.png'

function Vision() {
    return (
        <section id='vision' className='h-sectionimage relative bg-center bg-cover bg-no-repeat flex items-center' style={{ backgroundImage: `url(${Image3})` }}>
            <h3 className="w-full max-container vision-description p-mobilespacing lg:px-28">OUR MISSION IS TO CONTINUOUSLY PROVIDE <span className='md:block'></span>AND IMPLEMENT ADVANCED SYSTEMS THAT <span className='md:block'></span>CONTRIBUTE TO THE ROAD SAFETY AND <span className='md:block'></span>SECURITY OF THE COUNTRY.</h3>
        </section>
    )
}

export default Vision