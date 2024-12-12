import './skills.scss'
import html5img from '../../icons/html5.svg'
import css3img from '../../icons/css3.svg'
import scssimg from '../../icons/scss.svg'
import jsimg from '../../icons/JS.svg'
import reactimg from '../../icons/React.svg'
import reduximg from '../../icons/redux.svg'
import nodeimg from '../../icons/Node.js.svg'
import expressimg from '../../icons/express.svg'
import mongoimg from '../../icons/Mongo.db.svg'
import mongooseimg from '../../icons/mongoose.svg'
import graphqlimg from '../../icons/graphql.svg'



const Skills = () => {
    return (
        <section className="skills">
        <div className="container">
            <h2 className="title title_fz16 title__section-title">Skills</h2>
            <div className="divider"></div>

            <div className="skills__items">
                <div className="skills__item">
                    <div className="skills__item-img">
                        <img src={html5img} alt="html5"/>
                    </div>
                    <h3 className="title title_fz14">HTML5</h3>
                    <p>It is he who creates the framework of your site or application, and the fifth version will allow me to create a more SEO-optimized structure for your product</p>                </div>
                <div className="skills__item">
                    <div className="skills__item-img">
                        <img src={css3img} alt="css3"/>
                        <img src={scssimg} alt="scss"/>
                    </div>
                    <h3 className="title title_fz14">CSS3 or SCSS</h3>
                    <p>This style language allows to create absolutely any look and feel for your site or application. Everything is limited only by your imagination!</p>
                </div>
                <div className="skills__item">
                    <div className="skills__item-img">
                        <img src={jsimg} alt="java script"/>
                    </div>
                    <h3 className="title title_fz14">Java Script</h3>
                    <p>This programming language allows to bring anything to life: sliders, windows, tooltips, tabs, receiving data from the server and much more</p>
                </div>
                <div className="skills__item">
                    <div className="skills__item-img">
                        <img src={reactimg} alt="React"/>
                    </div>
                    <h3 className="title title_fz14">React with React Hooks</h3>
                    <p> This library allows you to create a web application. We can create the most interactive product as possible for your goals </p>
                </div>
                <div className="skills__item">
                    <div className="skills__item-img">
                        <img src={reduximg} alt="Redux"/>
                    </div>
                    <h3 className="title title_fz14">Redux</h3>
                    <p> A state management library. It centralizes application state in a single store, making state management consistent and easier to debug. </p>
                </div>
                <div className="skills__item">
                    <div className="skills__item-img">
                        <img src={nodeimg} alt="Node.js"/>
                        <img src={expressimg} alt="Express"/>
                    </div>
                    <h3 className="title title_fz14">Node.js with Express.js</h3>
                    <p>This platform allows you to create a backend for your product - “brains” that will perform actions that the user cannot see</p>
                </div>
                <div className="skills__item">
                    <div className="skills__item-img">
                        <img src={mongoimg} alt="Mongo.db"/>
                        <img src={mongooseimg} alt="Mongoose"/>
                    </div>
                    <h3 className="title title_fz14">Mongo.db with Mongoose</h3>
                    <p>This is a non-relational database that will store the data of your website or application</p>
                </div>
                <div className="skills__item">
                    <div className="skills__item-img">
                        <img src={graphqlimg} alt="Graphql"/>
                    </div>
                    <h3 className="title title_fz14">Graphql</h3>
                    <p>A query language for APIs that lets clients request exactly the data they need, improving efficiency and flexibility compared to REST.</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Skills;