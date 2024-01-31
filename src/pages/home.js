import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Farms from "../components/farms";
import Planes from "../components/planes";
import About from "../components/about";

export default function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Farms />
            <Planes />
            <About />
            <Footer />
        </div>
    )
}