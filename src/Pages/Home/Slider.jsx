import { Button, Carousel } from "flowbite-react";
import slider3 from "../../assets/sliders-3.jpg"
import slider2 from "../../assets/sliders-2.jpg"
import slider1 from "../../assets/sliders-4.jpeg"
import { Link } from "react-router-dom";
const Slider = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-96 2xl:h-[600px]">
            <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className="relative w-full h-full">
                        <div className="w-full h-full py-12 lg:py-24 absolute text-center ">
                            <h2 className="text-white font-bold text-center text-2xl md:text-4xl lg:text-6xl">Welcome to GoldGYm</h2>
                            <p className="text-white py-5">Welcome here, we are providing some interesting classes with our best trainer according to your choice </p>
                            <Link to="/all&trainer">
                                <Button className="mx-auto">All Trainer</Button>
                            </Link>
                        </div>
                        <img className="w-full h-full" src={slider3} alt="" />
                    </div>
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className="relative w-full h-full">
                        <div className="w-full h-full py-12 lg:py-24 absolute text-center"><h2 className="text-white font-bold text-center text-2xl md:text-4xl lg:text-6xl">Book Now</h2>
                            <p className="text-white py-5">Welcome here, we are providing some interesting classes with our best trainer according to your choice </p>
                            <Link to="/all&classes">
                                <Button className="mx-auto">All Classes</Button>
                            </Link>
                        </div>
                        <img className="w-full h-full" src={slider2} alt="" />
                    </div>
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className="relative w-full h-full">
                        <div className="w-full h-full py-12 lg:py-24 absolute text-center"><h2 className="text-white font-bold text-center text-2xl md:text-4xl lg:text-6xl">Be A Trainer</h2>
                            <p className="text-white py-5">Welcome here, we are providing some interesting classes with our best trainer according to your choice </p>
                            <Link to="/be&trainer">
                                <Button className="mx-auto">Be A Trainer</Button>
                            </Link>
                        </div>
                        <img className="w-full h-full" src={slider1} alt="" />
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default Slider;