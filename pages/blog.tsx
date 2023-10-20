import Head from 'next/head'
import blogPage from '../styles/BlogPage.module.scss'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import RecentPostCard from './components/RecentPostCard'

export default function Blog() {
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
            <Footer/>
        </div>
    )
}