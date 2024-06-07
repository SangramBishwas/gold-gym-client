import About from "./About";
import Feature from "./Feature";
import FeaturedClass from "./Featured Class/FeaturedClass";
import Reviews from "./Reviews/Reviews";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <About></About>
            <Feature></Feature>
            <FeaturedClass></FeaturedClass>
            <Reviews></Reviews>
            this is homepages
        </div>
    );
};

export default Home;