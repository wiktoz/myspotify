import getRefreshToken from './getRefreshToken'

const fetchAPI = async (url:string, refreshToken:string) => {
    const { access_token } = await getRefreshToken(refreshToken)

    const response = await fetch(process.env.SPOTIFY_API_URL + url, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
    })

    return await response.json();
}

export default fetchAPI;