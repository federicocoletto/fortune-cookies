/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import phrases from '../utils/phrases.json'

const PhraseCard = ({randomPhrase}) => {
    
    return (
        <div className="phrase-card">
            <p className='phrase-p'>{randomPhrase}</p>
        </div>
    )
}

export default PhraseCard