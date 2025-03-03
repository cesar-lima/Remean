import { Link } from 'react-router'
import '../styles/navbar.scss'
import { ArrowCircleUpRight } from '@phosphor-icons/react'

export default function Navbar() {
    return (
        <nav>
            <div className="nav-logo">
                <svg className="svg-standalone-icon" viewBox="204.78245017044992 115.00000000000003 140.43509965910016 146.73905924390013">
                    <defs>
                        <linearGradient id="color" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#A294F9', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#E5D9F2', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <g data-paper-data="{&quot;isIcon&quot;:&quot;true&quot;,&quot;iconType&quot;:&quot;icon&quot;,&quot;rawIconId&quot;:&quot;57265408-69df-486c-bf1c-9d13cd842f11&quot;,&quot;source&quot;:&quot;inline&quot;,&quot;selectedEffects&quot;:{&quot;container&quot;:&quot;&quot;,&quot;transformation&quot;:&quot;&quot;,&quot;pattern&quot;:&quot;&quot;},&quot;isDetailed&quot;:false,&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;bounds&quot;:{&quot;x&quot;:204.78245017044992,&quot;y&quot;:115.00000000000003,&quot;width&quot;:140.43509965910016,&quot;height&quot;:146.73905924390013},&quot;iconStyle&quot;:&quot;standalone&quot;,&quot;suitableAsStandaloneIcon&quot;:true}" fill-rule="nonzero">
                        <g data-paper-data="{&quot;isPathIcon&quot;:true}">
                            <path
                                d="M345.21755,169.81265c0,8.74094 -1.93499,16.98089 -5.87596,24.79084c-3.79698,7.52295 -9.02794,13.82791 -15.7629,18.91588l0.002,0.002l0.002,0.002c1.50199,1.50199 2.21699,2.21699 2.21699,2.14499c5.23097,5.23097 7.80995,11.60693 7.80995,19.13088c0,7.45095 -2.57898,13.82791 -7.80995,19.05888c-5.22997,5.22997 -11.60693,7.88095 -18.98688,7.88095c-6.94996,0 -13.04092,-2.36398 -18.12788,-7.16495c-2.93698,-2.79398 -13.03992,-12.82492 -30.37981,-30.02081v10.31693c0,7.37995 -2.57898,13.75691 -7.80895,18.98788c-5.23097,5.22997 -11.46493,7.88095 -18.84488,7.88095c-7.16495,0 -13.32691,-2.50698 -18.55688,-7.52295c-5.08697,-5.01597 -7.80995,-11.10593 -8.09695,-18.19888c-0.143,-0.358 -0.215,-31.7408 -0.215,-94.1484c0,-7.23695 2.50798,-13.39891 7.52395,-18.62888c5.01497,-5.23097 11.10593,-8.02495 18.27088,-8.23995h60.25761c14.9749,0 27.79982,5.37397 38.47575,16.0499c10.60393,10.74693 15.9069,23.64385 15.9069,38.76275zM211.08841,229.21027c3.94064,-6.01863 10.8906,-9.45794 20.84987,-10.31793c5.44497,-0.43 25.07784,-0.645 58.89662,-0.645c13.25492,0 24.57584,-4.72797 33.96178,-14.25791c9.38594,-9.45794 14.11491,-20.84987 14.11491,-34.17678c0,-11.96592 -3.86898,-22.49886 -11.67893,-31.5978c-7.66595,-8.95694 -17.33889,-14.40191 -28.87481,-16.2649c7.80995,5.23097 12.89692,12.32392 15.1179,21.27986c2.14999,8.66994 1.14699,16.76689 -2.93698,24.28984c-4.37097,8.02495 -11.32093,12.39492 -20.77887,13.03992l-53.73766,0.072c-6.66296,0 -11.75092,0.716 -15.3329,2.07799c-5.58896,2.22099 -8.81294,6.37696 -9.60094,12.32392zM293.62888,166.94667c-0.78799,-0.85999 -1.79099,-1.28999 -3.00898,-1.28999h-29.16181l0.072,8.66994c0,0 4.72897,0 14.25791,-0.072h14.32991c1.57699,0 2.79498,-0.43 3.65398,-1.36099c0.78899,-0.78899 1.14699,-1.79199 1.14699,-2.93798c0,-1.14599 -0.43,-2.14999 -1.28999,-3.00898z"
                                fill="url(#color)"
                            />
                        </g>
                    </g>
                </svg>
            </div>

            <div className="nav-items">
                <div>
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/how-it-works">CURRENCIES</Link>
                </div>

                <a className='source-code' href="https://www.github.com/cesar-lima/Remean" target="_blank">
                    <span>Source code</span>
                    <ArrowCircleUpRight size={28} color="#ffffff" weight="thin" />
                </a>
            </div>

            <div className="nav-getstarted-container">
                <Link className="getstarted-button" to="/convert">
                    <span className="top-key"></span>
                    <span className="text">Get started</span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                </Link>
            </div>
        </nav>
    )
}
