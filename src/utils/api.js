import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"
const params = {
    key: import.meta.env.VITE_GOOGLE_SEARCH_API_KEY,
    cx: import.meta.env.VITE_GOOGLE_CX_KEY
}
export const fetchDataFromApi = async (payload) => {
    const {data} = await axios.get(BASE_URL, {
        params: {...params,...payload}
    });
    return data;

};

export const SEARCH_SUGGESTIONS_API = "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

