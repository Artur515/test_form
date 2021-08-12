import axios from "axios";

const baseURL = `https://jordan.ashton.fashion/api/goods/30/comments?page=`


export const getAllComment = (page = 1) => {
    return axios.get(baseURL + page)
}


