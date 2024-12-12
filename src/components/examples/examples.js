import './examples.scss';
import JokeExample from './jokeExample';
import NumbersExample from './numbersExample';

const Examples = () => {

    

    return(
        <section className="examples">
            <div className="container">
                <h2 className="title title_fz16 title__section-title">Example of using free API</h2>
                <div className="divider"></div>
                <JokeExample/>
            </div>
        </section>
    )
}


export default Examples;