//filter by pulished
const filterByPublished = ( req, res, next) => {
    req.findFilter.state = 'published'
    next()
}

const filterAndSort = (req, res, next) => {
    //filter and sort blogs 
    const 
}
