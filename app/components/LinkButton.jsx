import Link from "next/link"
import {CgArrowRight} from 'react-icons/cg'

export default function LinkButton(props){
    return(
            <Link href={props.href}>
                <div className="flex flex-row justify-between items-center my-2 p-3 px-8 text-gray-200 bg-gray-800 rounded-3xl hover:cursor-pointer hover:opacity-80">
                    <div className="text-lg">{props.title}</div>
                    <div><CgArrowRight/></div>
                </div>
            </Link>
    )
}