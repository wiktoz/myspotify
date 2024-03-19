'use client'

import useSWR from 'swr'
import {fetcher} from "@/utils/fetcher"
import { motion, AnimatePresence } from 'framer-motion';

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

export default function Tracks({period}:{period:string}) {
    const { data, error } = useSWR(`/api/spotify/getTopTracks?period=${period}`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
    <AnimatePresence>
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {
            data.map((track:any, i:number) =>{
                return (
                    <motion.div className="py-2" key={i} variants={item}>
                        <div className="flex flex-row justify-left items-center">
                            <img 
                                className="w-20 md:w-30 lg:w-36"
                                src={track.image}
                                alt={track.name}
                            />
                            <div className="flex flex-col px-5">
                                <p className="text-stone-300 font-semibold md:text-2xl">
                                    <span className="pr-2">{i+1}. {track.artist} - {track.title}</span>
                                    {track.explicit &&
                                        <span className="text-stone-400 text-sm">Explicit</span>
                                    }
                                </p>
                                <p className="text-stone-400">
                                    <a target="_blank" rel="noreferrer" href={track.songUrl}>Listen</a>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )
            })
            }
        </motion.div>
    </AnimatePresence>
    )
}