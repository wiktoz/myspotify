import Link from "next/link"

export default function PeriodButtons({type, period}:{type:string, period:string}){
    return(
        <div className="flex flex-row gap-2 text-sm my-6">
            <Link href={"/top/" + type + "/lifetime"} >
                <div className={"rounded-full border-2 border-gray-400 px-4 py-1 hover:cursor-pointer " + (period == "lifetime" ? "bg-gray-400 text-white font-medium" : "text-gray-300")}>
                    <p>Lifetime</p>
                </div>
            </Link>
            <Link href={"/top/" + type + "/6-months"} >
                <div className={"rounded-full border-2 border-gray-400 px-4 py-1 hover:cursor-pointer " + (period == "6-months" ? "bg-gray-400 text-white font-medium" : "text-gray-300")}>
                    <p>6 months</p>
                </div>
            </Link>
            <Link href={"/top/" + type + "/4-weeks"} >
                <div className={"rounded-full border-2 border-gray-400 px-4 py-1 hover:cursor-pointer " + (period == "4-weeks" ? "bg-gray-400 text-white font-medium" : "text-gray-300")}>
                    <p>4 weeks</p>
                </div>
            </Link>
        </div>
    )
}