import { useState, useEffect } from "react";
import NumbersService from "../../services/NumbersService";


const NumbersExample = () => {
    const {getFact} = NumbersService();
    const [enteredNumber, setEnteredNumber] = useState('');
    const [enteredMonthNumber, setEnteredMonthNumber] = useState('');
    const [numberType, setNumberType] = useState('math');
    const [fact, setFact] = useState('');
    const [numForSearch, setNumForSearch] = useState('');
    const buttons = ['math', 'trivia', 'year', 'date'];

    useEffect(() => {
        updateFact();
    }, [numForSearch, numberType])

    const updateFact = () => {
        if(numForSearch === '') {
            setFact('');
            return
        };
        getFact(numForSearch, numberType)
            .then(setFact);
    }


    const inputChange = (event) => {
        setEnteredNumber(event.target.value);
    }

    const inputMonthChange = (event) => {
        setEnteredMonthNumber(event.target.value);
    }

    const searchNumber = (event) => {
        event.preventDefault();
        if(numberType !== 'date') {
            setNumForSearch(enteredNumber);
            console.log(numForSearch);
        } 
        else{
            setNumForSearch(enteredMonthNumber + '/' + enteredNumber);
            console.log(numForSearch)
        }
    }

    const clicked = (value) => {
        setNumberType(value);
    }

    function createButtons (buttons) {
        return buttons.map((item, i)=>
            <button key={i} className={ numberType===item ? 'button button-active' : 'button'} onClick={()=>clicked(item)}>{item}</button>)
    }

    function switchLabel (numberType) {
        switch(numberType) {
            case 'year':
              return 'year';
            case 'date':
                return 'day';
            default:
              return 'number';
          }
    }

    return (
        <div className='examples__numbers'>
            <div className='title title_fz16 examples-title'> Numbers API</div>
            <div className=' title_fz14 examples__numbers-subtitle'>Select the type of facts about numbers:</div>
            <div>
                {createButtons(buttons)}
            </div>
            <form className='examples__numbers-form' onSubmit={searchNumber}>
                <label className='title_fz14 examples__numbers-label' htmlFor="number">Enter {switchLabel(numberType)}</label>
                <input className='examples__numbers-input' type='number' id="number" name="number" value={enteredNumber} onChange={inputChange}/>
                {numberType === 'date' ? <>
                <label className='title_fz14 examples__numbers-label' htmlFor="month">Enter month</label>
                <input className='examples__numbers-input' type='number' id="month" name="month" value={enteredMonthNumber} onChange={inputMonthChange}/>
                </> : null}
                <input className='button button-search' type="submit" value="Submit"/>
            </form>
            <div className="title_fz14"><b>Fact:</b> {fact}</div>
        </div>
    )
} 

export default NumbersExample;

