const getRandomElmnt = (arr) => {
    const randomId = Math.floor(Math.random() * arr.length);
    return arr[randomId]
}

export default getRandomElmnt