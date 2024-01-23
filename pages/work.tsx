import workPage from '../styles/WorkPage.module.scss'
import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FeaturedWork from './components/FeaturedWork';
import { workInterface } from './config/interface';
import { FooterController } from './controller/footer';

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

    const footerData = await FooterController.GetFooter()

    return {props:{
        footer:footerData
    }}
}