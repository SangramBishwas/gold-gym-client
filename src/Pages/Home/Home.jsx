import About from "./About";
import Feature from "./Feature";
import FeaturedClass from "./Featured Class/FeaturedClass";
import NewsLetter from "./NewsLetter";
import Posts from "./Posts";
import Reviews from "./Reviews/Reviews";
import Slider from "./Slider";
import Team from "./Team";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Feature></Feature>
            <About></About>
            <FeaturedClass></FeaturedClass>
            <Reviews></Reviews>
            <Posts></Posts>
            <NewsLetter></NewsLetter>
            <Team></Team>
            this is homepages
        </div>
    );
};

export default Home;