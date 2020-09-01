import axios from "axios";
import IDs from "./imdb.js";

export default class ImdbService {
  _key = "&apikey=d87188b2";

  async getResource() {
    const requests = IDs.map((id) =>
      axios.get(`https://www.omdbapi.com/?i=${id}${this._key}`)
    );
    const response = await Promise.all(requests);
    const movies = this._serializeResponse(response);
    console.log(movies);
    return movies;
  }

  async getSearch(query) {
    const requests = await axios.get(
      `https://www.omdbapi.com/?s=${query}${this._key}`
    );
    console.log(requests.data.Search);
    return requests.data.Search;
  }

  _serializeResponse = (response) => {
    return response.reduce((acc, response) => {
      return [...acc, { ...response.data }];
    }, []);
  };
}
