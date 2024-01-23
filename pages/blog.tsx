import Head from 'next/head'
import blogPage from '../styles/BlogPage.module.scss'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import RecentPostCard from './components/RecentPostCard'
import { FooterController } from './controller/footer'
import { blogViewInterface } from './config/interface'
import { BlogController } from './controller/blog'

export default function Blog(prop:blogViewInterface) {
    const APP_NAME = 'johedotcom'
    const CONTACT_ME_PAGE = 'contact me'
    const MY_BLOG_PAGE = 'my blog'
    const MY_WORK_PAGE = 'my work'

    if(prop.blog === undefined) return <div className=""></div>

    return (
        <div>
            <Head>
                <title>{APP_NAME} | {MY_BLOG_PAGE}</title>
            </Head>

            <Navbar/>
            
            <div className={blogPage.navbarHeight}></div>
            <div className={blogPage.blogPageTitle}>My Blog</div>
            <div className={blogPage.blogCardOuterContainer}>
                {
                    prop.blog.map((item, i) => (
                        <RecentPostCard {...item} key={i}/>
                    ))
                }
            </div>
            <Footer footers={prop.footer!}/>
        </div>
    )
}

export async function getServerSideProps() {
   
    const footerData = await FooterController.GetFooter()
    const blogData = await BlogController.GetBlogByDate()

    return {props:{
        footer:footerData,
        blog:blogData
    }}
}