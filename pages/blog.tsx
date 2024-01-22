import Head from 'next/head'
import blogPage from '../styles/BlogPage.module.scss'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import RecentPostCard from './components/RecentPostCard'
import { collection, getDocs, query } from 'firebase/firestore/lite'
import { db } from './config/firebase'
import { blogInterface, footerInterface } from './config/interface'

export default function Blog(prop:blogInterface) {
    const APP_NAME = 'johedotcom'
    const CONTACT_ME_PAGE = 'contact me'
    const MY_BLOG_PAGE = 'my blog'
    const MY_WORK_PAGE = 'my work'

    return (
        <div>
            <Head>
                <title>{APP_NAME} | {MY_BLOG_PAGE}</title>
            </Head>

            <Navbar/>
            
            <div className={blogPage.navbarHeight}></div>
            
            <div className={blogPage.blogPageTitle}>
                My Blog
            </div>
            <div className={blogPage.blogCardOuterContainer}>
                <RecentPostCard/>
                <RecentPostCard/>
                <RecentPostCard/>
                <RecentPostCard/>
            </div>
            <Footer footers={prop.footer}/>
        </div>
    )
}

export async function getServerSideProps() {
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