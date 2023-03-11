import { useState } from 'react';
import Cat from '../data/cat';
import { v4 as uuidv4 } from 'uuid';

interface FormProps {
    cats: Cat[];
    setCats: (cats:Cat[])=>void;
}

// components are functions that return JSX.Element
// i.e. a React.FC IS a function that returns JSX.Element
const Form: React.FC<FormProps> = ({cats, setCats}) => {
    // function Form(FormProps): JSX.Element {
    const [ catNameTextInputValue, setCatNameTextInputValue ] = useState<string>('');
    const [ speciesTextInputValue, setSpeciesTextInputValue ] = useState<string>('');
    const [ favFoodsTextInputValue, setFavFoodsNameTextInputValue ] = useState<string>('');
    const [ birthYearTextInputValue, setBirthYearNameTextInputValue ] = useState<string>('');

    const handleSubmit = () => {
        const cat : Cat = {name: catNameTextInputValue,
            species: speciesTextInputValue,
            favFoods: [favFoodsTextInputValue],
            birthYear: parseInt(birthYearTextInputValue, 10)};

        const newCatData = [...cats, ...[cat]];
        newCatData.forEach(cat => cat.id = uuidv4());

        setCats(newCatData);
    }
      
    return (
        <form className="form__container card card__text">
            <label>Enter cat's name:
            <input className = "input" type="text" value={catNameTextInputValue} onChange={(event) => { setCatNameTextInputValue(event.target.value)}}/>
            </label>
            <label>Enter cat's species:
            <input className = "input" type="text" value={speciesTextInputValue} onChange={(event) => { setSpeciesTextInputValue(event.target.value)}}/>
            </label>
            <label>Enter cat's favourite foods:
            <input className = "input" type="text" value={favFoodsTextInputValue} onChange={(event) => { setFavFoodsNameTextInputValue(event.target.value)}}/>
            </label>
            <label>Enter cat's birth year:
            <input className = "input" type="text" value={birthYearTextInputValue} onChange={(event) => { setBirthYearNameTextInputValue(event.target.value)}}/>
            </label>
            <input className = "button" type="button" value="Submit" onClick={(event) => {handleSubmit()}}/>
        </form>
    );
}

export default Form;
