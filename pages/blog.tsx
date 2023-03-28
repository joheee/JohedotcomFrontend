import Head from 'next/head'
import blogPage from '../styles/BlogPage.module.scss'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { RecentPostCard } from './components/RecentPostCard'
import { Variable } from './config/Variable'

export default function Blog() {
    return (
        <div>
            <Head>
                <title>{Variable.APP_NAME} | {Variable.MY_BLOG_PAGE}</title>
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