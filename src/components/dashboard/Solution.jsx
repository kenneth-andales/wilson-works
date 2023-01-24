import Image4 from '../../assets/image4.png'

function Solution() {
    return (
        <section id="solution" className='about-solution max-container'>
            <div className="flex flex-col gap-5 lg:order-last lg:w-2/5">
                <h2 className="heading1">Solution</h2>
                <p className="description">The Non-Contact Apprehension Program is a full-stack traffic violation system powered by Artificial Intelligence (AI) and Big Data technology</p>
                <p className="description">The whole system is composed of a front-end system, data center, and a command center</p>
            </div>
            <div className="lg:w-1/2 md:pt-2">
                <img className="w-full" src={Image4} alt="" />
            </div>
        </section>
    )
}

export default Solution