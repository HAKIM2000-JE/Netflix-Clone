import axios from 'axios'
// base url to make request to the movie database

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3"
});
// instance.get()

export default instance