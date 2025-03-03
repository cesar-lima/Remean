import { Coins } from "@phosphor-icons/react";
import MoneyType1 from '../assets/money-type-1.jpg'
import MoneyType2 from '../assets/money-type-2.jpg'
import MoneyType3 from '../assets/money-type-3.png'

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
                        <div className="card-title">Fast Processing</div>
                        <div className="card-content">complete your conversions in seconds with minimal delays.</div>
                    </div>
                    <div className="card">
                        <div className="card-title">Real-time Updates</div>
                        <div className="card-content">so you always have access to the most accurate market rates.</div>
                    </div>
                </div>
            </section>

            <section id="currencies">
                <div className="currencies-text-container">
                    <div className="currencies-subtitle">
                        Currencies
                    </div>

                    <div className="currencies-title">
                        Support for over 50 currencies
                    </div>

                    <p>
                        With Remɐǝn, you have access to a vast selection of currencies, covering hundreds of options from around the world.
                        Our platform provides accurate, real-time exchange rates, allowing you to track both popular and rare currencies with ease,
                        ensuring convenience for trading, investing, or international transactions.
                    </p>
                </div>

                <div className="currencies-images-container">
                    <div>
                        <img src={MoneyType1} alt="Money image" />    
                    </div>

                    <div>
                        <img src={MoneyType2} alt="Money image" />    
                    </div>

                    <div>
                        <img src={MoneyType3} alt="Money image" />    
                    </div>
                </div>
            </section>
        </>
    )
}