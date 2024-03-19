import useSWR from 'swr'
import {fetcher} from "@/utils/fetcher"
import {motion} from "framer-motion"

interface ArtistInterface {
    name: string,
    artistUrl: string,
    popularity: number,
    followers: number,
    image: string,
}

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 10, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

export default function Artists({period}:{period:string}) {
    const { data, error } = useSWR(`/api/spotify/getTopArtists?period=${period}`, fetcher)

    function splitNumber(number:number){
        const num = number.toString()

        let helper = ''
        for(let i=num.length; i>0; i--){
            if((num.length - i)%3==0) helper = " "+helper
            helper = num[i-1]+helper
        }
        return helper
    }

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {
            data.map((artist:ArtistInterface, i:number) =>{
                return (
                    <motion.div className="py-2" key={i} variants={item}>
                        <div className="flex flex-row justify-left items-center">
                            <img 
                                className="w-20 md:w-30 lg:w-36"
                                src={artist.image}
                                alt={artist.name}
                            />
                            <div className="flex flex-col px-5">
                                <p className="text-stone-300 font-semibold md:text-2xl">
                                    <span className="pr-2">{i+1}. {artist.name}</span>
                                </p>
                                <p className="text-stone-400">
                                    {splitNumber(artist.followers)} followers
                                </p>
                                <p className="text-stone-400">
                                    <a target="_blank" rel="noreferrer" href={artist.artistUrl}>See</a>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )
            })
            }
        </motion.div>
    )
}