import './header.scss'
import Education from '../education/education'


const Header = () => {
    return(
        <section className="promo">
            <div className="hamburger">
                <span></span>
                <span className="long"></span>
                <span></span>
            </div>
            <div className="container">
                <div className="title title_fz16 promo__subtitle">My name is Nataliia Pohorenko</div>
                <h1 className="title title_fz36 promo__title">I am a junior Full-Stack developer</h1>
                <Education/>
            </div>
        </section>
    )
}

export default Header