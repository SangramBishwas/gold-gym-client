import aboutImg from "../../assets/aboutImg.jpg"
const About = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row my-10 md:items-center mx-5 md:mx-10 lg:mx-20 bg-gray-100">
            <div className="p-5 md:p-10 w-full md:1/2 lg:w-2/3 space-y-3">
                <h5 className="text-gray-500 text-lg my-3 text-center md:text-left">About Us</h5>
                <h2 className="text-3xl font-bold text-center md:text-left">Our Journey</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                <div className="flex gap-10">
                    <div>
                        <div className="border-t-2 border-lime-300 py-3 space-y-3">
                            <h4 className="text-xl font-bold">50+ Exprience</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="border-t-2 border-lime-300 py-3 space-y-3">
                            <h4 className="text-xl font-bold">50+ Exprience</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>
                    <div>
                        <div className="border-t-2 border-lime-300 py-3 space-y-3">
                            <h4 className="text-xl font-bold">50+ Exprience</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="border-t-2 border-lime-300 py-3 space-y-3">
                            <h4 className="text-xl font-bold">50+ Exprience</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:1/2 lg:w-1/3 md:p-10"> 
                <img src={aboutImg} alt="" />
            </div>
        </div>
    );
};

export default About;