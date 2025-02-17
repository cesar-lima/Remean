import { Coins } from "@phosphor-icons/react";
import Navbar from "../components/Navbar";
import '../styles/home.scss'

export default function Home() {
    return (
        <>
            <Navbar />

            <section id="hero">
                <div className="hero-title">
                    <div>
                        <span>Remɐǝn</span> in one click
                    </div>

                    <div>
                        <Coins size={30} weight="duotone" />
                        <div>
                            Dive in Fast, Accurate, and Up-to-Date Exchange Rates
                        </div>
                        <Coins size={30} weight="duotone" />
                    </div>
                </div>
            </section>
        </>
    )
}