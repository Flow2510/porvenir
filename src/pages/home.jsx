import Hero from "../components/hero/hero";
import Info from "../components/info/info";
import Intro from "../components/intro/intro";
import Presentation from "../components/presentation/presentation";
import Reviews from "../components/reviews/reviews";
import Stats from "../components/stats/stats";
import Banner from "../components/banner/banner"
import Features from "../components/features/features";
import Brand from "../components/brand/brand";
import Location from "../components/location/location";
import Cta from "../components/cta/cta";

export default function Home(){
    return(
        <main>
            <Hero />
            <Stats />
            <Intro />
            <Presentation />
            <Info />
            <Reviews />
            <Banner />
            <Features />
            <Brand />
            <Location />
            <Cta />
        </main>
    )
}