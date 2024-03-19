import querystring from 'query-string'

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const basic = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')

const getRefreshToken = async (refresh_token:string) => {
    const response = await fetch(TOKEN_ENDPOINT,
    {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        }),
    })

    return await response.json()
}

export default getRefreshToken