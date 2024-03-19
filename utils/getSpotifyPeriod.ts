const getSpotifyPeriod = (period:string) => {
    switch(period){
        case "4-weeks": 
            return "short_term"
        case "6-months":
            return "medium_term"
        case "lifetime":
            return "long_term"
        default:
            return "short_term"
    }
}

export default getSpotifyPeriod