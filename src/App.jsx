/* eslint-disable no-unused-vars */
import './App.css'
import phrases from './utils/phrases.json' 
import getRandomFromArray from "./utils/getRandomFromArray";
import PhraseCard from './components/PhraseCard';
import { useState } from 'react';
import ButtonPhrase from './components/ButtonPhrase';
import AuthorPhrase from './components/AuthorPhrase';


function App() {

	const initialPhrase = getRandomFromArray(phrases)
	const [randomPhrase, setRandomPhrase] = useState(initialPhrase.phrase)
	const [randomAuthor, setRandomAuthor] = useState(initialPhrase.author)

	const bgArr = [1, 2, 3, 4]
	const initialBG = getRandomFromArray(bgArr)
	const [randomBG, setRandomBG] = useState(initialBG)
	const styleBG = {
		backgroundImage: `url('/images/fondo${randomBG}.jpg')`
	}

    return (
        <div className='app' style={styleBG}>
			<h1 className='title'>Galletas de la fortuna</h1>
			<PhraseCard randomPhrase={randomPhrase} />
			<ButtonPhrase 
				setRandomPhrase={setRandomPhrase} 
				setRandomBG={setRandomBG} 
				setRandomAuthor={setRandomAuthor} />
			<AuthorPhrase randomAuthor={randomAuthor} />
        </div>
    )
}

export default App
