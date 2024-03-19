import fetchAPI from '@/utils/fetchAPI'
import getSpotifyPeriod from '@/utils/getSpotifyPeriod'
import {NextRequest, NextResponse} from "next/server"
import {getServerSession} from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"

export async function GET(req:NextRequest) {
    const period = req.nextUrl.searchParams.get("period") || ""
    const p = getSpotifyPeriod(period)

    const session:any = await getServerSession(authOptions)

    if(!session)
        return NextResponse.json([], {status:200})

    const accessToken = session.accessToken

    const {items} = await fetchAPI(`/me/top/artists?limit=50&time_range=${p}`, accessToken)

    const response = items.map((artist:any) => ({
        name: artist.name,
        artistUrl: artist.external_urls.spotify,
        popularity: artist.popularity,
        followers: artist.followers.total,
        image: artist.images[0].url
    }))

    return NextResponse.json(response, { status: 200 })
}
