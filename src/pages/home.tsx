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

            <section id="about">
                <div className="about-subtitle">
                    About
                </div>

                <div className="about-title">
                    A tool designed to simplify conversion worldwide
                </div>

                <p>
                    With Remɐǝn, converting currencies is as fast and intuitive as conducting an online search.
                    Our platform provides accurate and real-time exchange rates,
                    serving users across all continents for travel, business, or international transfers.
                </p>

                <div className="about-cards-container">
                    <div className="card">
                        <div className="card-title">Many Conversions</div>
                        <div className="card-content">performed daily, ensuring accuracy and speed in exchange rates.</div>
                    </div>
                    <div className="card">
                        <div className="card-title">99.99%</div>
                        <div className="card-content">service availability so you can convert at any time.</div>
                    </div>
                    <div className="card">
                        <div className="card-title">Support for over 50</div>
                        <div className="card-content">currencies for instant and hassle-free conversions.</div>
                    </div>
                    <div className="card">
                        <div className="card-title">Real-time Updates</div>
                        <div className="card-content">so you always have access to the most accurate market rates.</div>
                    </div>
                </div>

            </section>
        </>
    )
}