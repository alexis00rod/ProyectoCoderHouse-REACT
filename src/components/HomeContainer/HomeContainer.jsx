import { Banner } from "./Banner"
import { Slide } from "./Slide"

export const HomeContainer = () => {

    return (
        <>
        <Banner />
        <section>
            <ul className="slide-list">
                <Slide category={"ps2"} />
                <Slide category={"ps3"} />
                <Slide category={"xbox360"} />
            </ul>
        </section>
        </>
    )
}
