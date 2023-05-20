/* eslint-disable react/prop-types */
const AuthorPhrase = ({randomAuthor}) => {
    return (
        <div className="phrase-author">
            <p className="author-p">{randomAuthor}</p>
        </div>
    )
}

export default AuthorPhrase