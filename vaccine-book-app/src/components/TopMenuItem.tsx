import styles from './topmenu.module.css'
import Link from 'next/link'

export default function TopMenuItem({title,pageRef}:{title:string,pageRef:string}){
    return(
        <Link className  = "text-2xl content-center font-semibold my-auto mr-10 text-gray-900 dark:text-white" 
        href ={pageRef}>
        {title}
        </Link>
    );
}