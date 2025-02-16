import { CurrencyDollar, CurrencyEur, CurrencyGbp, CurrencyJpy } from "@phosphor-icons/react";
import Navbar from "../components/Navbar";
import '../styles/home.scss'

export default function Home() {
    return (
        <>
            <Navbar />

            <section id="hero">
                <div className="currency-dots">
                    <div>
                        <CurrencyDollar size={32} weight="fill" color="#ffffffb6" />
                    </div>

                    <div>
                        <CurrencyJpy size={32} weight="fill" color="#ffffffb6" />
                    </div>
                </div>

                <div className="hero-title">
                    <div><span>Remɐǝn</span> in one click</div>
                    <div>Dive in Fast, Accurate, and Up-to-Date Exchange Rates</div>
                </div>

                <div className="currency-dots">
                    <div>
                        <CurrencyEur size={32} weight="fill" color="#ffffffb6" />
                    </div>

                    <div>
                        <CurrencyGbp size={32} weight="fill" color="#ffffffb6" />
                    </div>
                </div>
            </section>
        </>
    )
}