const API_ENDPOINT = "https://jsonplaceholder.typicode.com/"
const POSTS_ENDPOINT = `${API_ENDPOINT}posts`
const USERS_ENDPOINT = `${API_ENDPOINT}users`
const COMMENTS_ENDPOINT = `${API_ENDPOINT}comments`

const getPosts = () => {
    return fetch(POSTS_ENDPOINT)
    .then(resp => resp.json())
}

export default { getPosts }