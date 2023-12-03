
import './App.css'
import {useState} from "react";
import FruitList from "./componenten/fruitlist/FruitList.jsx";

function App() {
    const [strawberryCount, setStrawberryCount] = useState(0);
    const [bananenCount, setBananenCount] = useState(0);
    const [appleCount, setAppleCount] = useState(0);
    const [kiwisCount, setKiwisCount] = useState(0)
    const [formName, setFormName] = useState('');
    const [formLastName, setFormLastName] = useState('')
    const [formAge, setFormAge] = useState(0)
    const [formPostalCode, setFormPostalCode]= useState('')
    const [formDeliveryValue, toggleFormDeliveryValue]= useState(false)
    const [formNightDeliveryValue, toggleFormNightDeliveryValue] = useState(false)
    const [messageValue, setMessageValue] = useState('')
    const [termsAndConditionsValue, toggleTermsAndConditionsValue] = useState(false)


    const handleNameChange = (e) => setFormName(e.target.value);
    const handleLastNameChange = (e) => setFormLastName(e.target.value);
    const handleAgeChange = (e) => setFormAge(e.target.value);
    const handlePostalCodeChange = (e) => setFormPostalCode(e.target.value);
    const handleDeliveryChange = () => toggleFormDeliveryValue(!formDeliveryValue);
    const handleNightDeliveryChange = () => toggleFormNightDeliveryValue(!formNightDeliveryValue);
    const handleMessageChange = (e) => setMessageValue(e.target.value);
    const handleTermsAndConditionsChange = () => toggleTermsAndConditionsValue(!termsAndConditionsValue);

    const handleSubmit = (e) => {
        e.preventDefault();
    console.log('Formulier ingediend:', {
        formName,
        formLastName,
        formAge,
        formPostalCode,
        formDeliveryValue,
        formNightDeliveryValue,
        messageValue,
        termsAndConditionsValue,
    });
};
    function resetCounts() {
        setStrawberryCount(0)
        setBananenCount(0)
        setAppleCount(0)
        setKiwisCount(0)
    }
return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <FruitList
            emoji = '🍓'
            name = 'Aardbeien'
            count = {strawberryCount}
            setCount = {setStrawberryCount}
        />

        <FruitList
            emoji = '🍌'
            name = 'Bananen'
            count = {bananenCount}
            setCount = {setBananenCount}
        />

        <FruitList
            emoji = '🍎'
            name = 'Appels'
            count = {appleCount}
            setCount = {setAppleCount}
        />

        <FruitList
            emoji = '🥝'
            name ="Kiwi's"
            count = {kiwisCount}
            setCount = {setKiwisCount}
        />

        <button className= 'container' type = 'button'
                onClick={()=> resetCounts()}
        >
            Reset

        </button>

        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Bestelformulier</legend>


                <label htmlFor= 'firstname'>
                    Voornaam:
                    <input
                        type='text'
                        name= 'name'
                        id= 'firstname'
                        value = {formName}
                        onChange = {handleNameChange}
                    />
                </label>

                <label htmlFor= 'lastname'>
                    Achternaam:
                    <input
                        type='text'
                        name= 'last-name'
                        id= 'lastname'
                        value={formLastName}
                        onChange = {handleLastNameChange}

                    />
                </label>
                <label htmlFor= 'age'>
                    Leeftijd:
                    <input
                        type='number'
                        name= 'age'
                        id= 'age'
                        value={formAge}
                        onChange={handleAgeChange}
                    />
                </label>
                <label htmlFor= 'postal-code-field'>
                    Postcode:
                    <input
                        type='text'
                        name= 'postal-code'
                        id= 'postal-code-field'
                        value={formPostalCode}
                        onChange={handlePostalCodeChange}
                    />
                </label>

                <label htmlFor= 'delivery-frequency'>Bezorgfrequentie</label>
                <select name= 'frequency' id = 'frequency'>
                    <option value= 'iedere-week'> Iedere week</option>
                    <option value= 'om-de-week'> Om de week</option>
                    <option value= 'iedere-maand'> Iedere maand</option>
                </select>


                <label htmlFor= 'option-day'>
                    <input
                        type = 'radio'
                        id= 'option-day'
                        name= 'delivery-day'
                        checked= {formDeliveryValue}
                        onChange={handleDeliveryChange}
                    />
                    Overdag
                </label>



                <label htmlFor='option-night'>
                    <input
                        type = 'radio'
                        id= 'option-night'
                        name= 'option-night'
                        checked={formNightDeliveryValue}
                        onChange={handleNightDeliveryChange}

                    />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    's Avonds
                </label>
            </fieldset>

            <label htmlFor= 'form-mesaage'>
                Opmerking
                <input
                    type='text'
                    id= 'form-message'
                    name= 'message'
                    value = {messageValue}
                    onChange={ handleMessageChange}
                />
            </label>

            <label htmlFor= 'form-terms-and-conditions'>
                <input
                    type= 'checkbox'
                    id= 'form-terms-and-conditions'
                    name= 'terms-and-conditions'
                    checked={termsAndConditionsValue}
                    onChange={ handleTermsAndConditionsChange}
                />
                Ik ga akkoord met de voorwaarden
            </label>
           <button type= 'submit'>Verzenden</button>

        </form>
    </>
    )

}

export default App
