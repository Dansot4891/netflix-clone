import { Logo } from "../../../../shared/presentation/compoenent/logo/logo";
import { HomeBackground } from "../component/home_background";
import { HomeMainIntro } from "../component/home_main_intro";

export function HomePage() {
    return (
        <div>
            <HomeBackground>
                <Logo />
                <HomeMainIntro />
            </HomeBackground>
        </div>
    )
}