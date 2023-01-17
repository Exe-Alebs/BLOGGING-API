const readingTime = (article) => {
    const noOfWordsRead = article.split('').length
    //  assuming the average person reads 1--
    const wordsPerMinute = noOfWordsRead / 200
    return Math.round(wordsPerMinute) === 0 ? 1 : Math.round(wordsPerMinute)
}


module.exports = { readingTime }