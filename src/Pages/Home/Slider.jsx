import { Carousel } from "flowbite-react";
import slider3 from "../../assets/sliders-3.jpg"
const Slider = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-96 2xl:h-[600px]">
            <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className="relative w-full h-full">
                        <div className="w-full h-full py-10 absolute text-center"><h2 className="text-white font-bold text-center text-6xl">Welcome to GoldGYm</h2></div>
                        <img className="w-full h-full" src={slider3} alt="" />
                    </div>
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className="relative w-full h-full">
                        <div className="w-full h-full py-10 absolute text-center"><h2 className="text-white font-bold text-center text-6xl">Book Now</h2></div>
                        <img className="w-full h-full" src={slider3} alt="" />
                    </div>
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className="relative w-full h-full">
                        <div className="w-full h-full py-10 absolute text-center"><h2 className="text-white font-bold text-center text-6xl">Be A Trainer</h2></div>
                        <img className="w-full h-full" src={slider3} alt="" />
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default Slider;