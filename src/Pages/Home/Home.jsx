import About from "./About";
import Feature from "./Feature";
import FeaturedClass from "./Featured Class/FeaturedClass";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Feature></Feature>
            <About></About>
            <FeaturedClass></FeaturedClass>
            this is homepages
        </div>
    );
};

export default Home;