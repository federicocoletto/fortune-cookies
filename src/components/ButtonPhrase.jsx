/* eslint-disable react/prop-types */
import getRandomFromArray from "../utils/getRandomFromArray";
import phrases from '../utils/phrases.json' 


const ButtonPhrase = ({setRandomPhrase, setRandomBG, setRandomAuthor}) => {

    const bgArr = [1, 2, 3, 4];

    const handleClick = () => {
        const newPhrase = getRandomFromArray(phrases).phrase;
        setRandomPhrase(newPhrase)

        const newBG = getRandomFromArray(bgArr)
        setRandomBG(newBG)

        const newAuthor = getRandomFromArray(phrases).author;
        setRandomAuthor(newAuthor)
    }

    return (
        <div className="phrase-btn">
            <button 
                className="phrase-btn"
                onClick={handleClick} 
                type="button"
            >Probar mi suerte</button>
        </div>
    )
}

export default ButtonPhrase