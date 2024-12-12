import './education.scss'
import courses from '../../icons/Courses.svg'
import university from '../../icons/University.svg'


const Education = () => {
    return(
        <div className="education">
            <h3 className="title title_fz20 education__title">Education</h3>
                <ul className='education__list'> 
                    <li className='education__list-item'>
                        <div className="education__item">
                            <div className="education__item-head">
                                <div className="education__item-icon">
                                    <img src={university} alt="university"/>
                                </div>
                                <h4 className="title title_fz14">Kharkiv сomputer technology college</h4>
                                <div className="education__item-location">Junior specialist | Kharkiv (2015-2019)</div>
                            </div>
                            <p className="education__item-body">
                            Software development specialty. Red diploma 
                            </p>
                        </div>
                    </li>
                    <li className='education__list-item'>
                        <div className="education__item">
                            <div className="education__item-head">
                                <div className="education__item-icon">
                                    <img src={courses} alt="courses"/>
                                </div>
                                <h4 className="title title_fz14">Udemy</h4>
                                <div className="education__item-location">Courses </div>
                            </div>
                            <div className="education__item-body">
                                <ul>
                                    <li>Web-developer</li>
                                    <li>Full course on JavaScript + React - from scratch to result</li>
                                    <li>Next.js & React - The Complete Guide</li>
                                    <li>Understanding TypeScript</li>
                                    <li>NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)</li>
                                    <li>Microservices with Node JS and React</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
        </div>
    )
}

export default Education