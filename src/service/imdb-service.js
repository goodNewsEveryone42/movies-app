import axios from "axios";
import IDs from "./imdb.js";

export default class ImdbService {
  _key = "&apikey=d87188b2";

  async getResource() {
    const requests = IDs.map((id) =>
      axios.get(`http://www.omdbapi.com/?i=${id}${this._key}`)
    );
    const response = await Promise.all(requests);
    // const movies = this._serializeResponse(response);
    console.log(response[0].data);
    return response[0].data;
  }

  _serializeResponse = (response) => {
    return response.reduce((acc, response) => {
      acc[response.imdbID] = response;
      return acc;
    }, {});
  };
}
