//calc total pages
export const getPerPageCount = (totalPage, limit) => {
    return Math.ceil(totalPage / limit)
}


export const getPagesOnArray = (totalPages) => {
    const result = []
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)
    }
    return result
}