import workPage from '../styles/WorkPage.module.scss'
import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FeaturedWork from './components/FeaturedWork';
import { collection, getDocs, query } from 'firebase/firestore/lite';
import firebase from './config/firebase';
import { footerInterface, workInterface } from './config/interface';

export default function Work(prop:workInterface){
    const APP_NAME = 'johedotcom'
    const CONTACT_ME_PAGE = 'contact me'
    const MY_BLOG_PAGE = 'my blog'
    const MY_WORK_PAGE = 'my work'
    return  (
        <div>
            <Head>
                <title>{APP_NAME} | {MY_WORK_PAGE}</title>
            </Head>

            <Navbar/>
            
            <div className={workPage.navbarHeight}></div>
            
            <FeaturedWork title={`My Work`}/>
            <Footer footers={prop.footer}/>
        </div>
    )
} 

export async function getServerSideProps() {
    const { db, storage } = firebase;
    
    // PART OF FOOTER
    const docFooterCol = query(collection(db, 'footer'))
    let footerSnapshot = await getDocs(docFooterCol)
    let footerData:footerInterface[] = []
    footerSnapshot.forEach(snap => {
        footerData.push({
        media:snap.id,
        username:snap.data().username
        })
    })

    return {props:{
        footer:footerData
    }}
}