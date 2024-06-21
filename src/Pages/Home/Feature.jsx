import SectionTitle from "../../Shared/SectionTitle";
import { Card } from "flowbite-react";
import image from "../../assets/sliders-3.jpg";
import image2 from "../../assets/sliders-2.jpg";
import image1 from "../../assets/sliders-1.jpg";
const Feature = () => {
    return (
        <div>
            <SectionTitle
                heading={"Our Feature"}
                subHeading={"We are providing some great feature including"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-10 lg:px-20 gap-8 lg:gap-16">
                <Card className="w-full space-y-4">
                    <div className="flex flex-col items-center pb-10">
                        <img className="rounded-full w-24 h-24" src={image1} alt="" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Fitness Tracking</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Fitness tracking uses devices and apps to monitor health metrics like steps, heart rate, and sleep. It aids goal-setting, tracks progress, and motivates users, promoting better fitness habits and overall well-being.</p>
                    </div>
                </Card>
                <Card className="w-full space-y-4">
                    <div className="flex flex-col items-center pb-10">
                        <img className="rounded-full w-24 h-24" src={image} alt="" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Body Building</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Bodybuilding involves intense strength training to develop muscle mass and definition, combined with strict nutrition and discipline, aiming for a sculpted physique and enhanced physical performance.</p>
                    </div>
                </Card>
                <Card className="w-full space-y-4">
                    <div className="flex flex-col items-center pb-10">
                        <img className="rounded-full w-24 h-24" src={image2} alt="" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Yoga</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Yoga combines physical postures, breathing exercises, and meditation to enhance flexibility, strength, and mental clarity. It promotes relaxation, stress relief, and overall well-being through mindful movement and inner focus.</p>
                    </div>
                </Card>
                <Card className="w-full space-y-4">
                    <div className="flex flex-col items-center pb-10">
                        <img className="rounded-full w-24 h-24" src={image1} alt="" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Weight Lifting</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Weight lifting involves lifting heavy weights to build strength and muscle mass, improving overall fitness. It requires proper technique, consistent practice, and balanced nutrition to achieve optimal results and prevent injury.</p>
                    </div>
                </Card>
                <Card className="w-full space-y-4">
                    <div className="flex flex-col items-center pb-10">
                        <img className="rounded-full w-24 h-24" src={image2} alt="" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Boxing</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Boxing is a combat sport involving skillful striking, footwork, and defense. It enhances physical fitness, mental discipline, and strategic thinking through rigorous training and competitive matches.</p>
                    </div>
                </Card>
                <Card className="w-full space-y-4">
                    <div className="flex flex-col items-center pb-10">
                        <img className="rounded-full w-24 h-24" src={image} alt="" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Competitive Fitness</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Competitive fitness involves structured physical contests like CrossFit, bodybuilding, or obstacle races. It tests strength, endurance, and skill, driving athletes to peak performance through rigorous training and disciplined lifestyle choices.</p>
                    </div>
                </Card>
            </div>

        </div>
    );
};

export default Feature;