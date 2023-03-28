import { FeaturedWork } from "./components/FeaturedWork";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import workPage from '../styles/WorkPage.module.scss'
import { Variable } from "./config/Variable";
import Head from "next/head";

export default function Work(){
    return  (
        <div>
            <Head>
                <title>{Variable.APP_NAME} | {Variable.MY_WORK_PAGE}</title>
            </Head>

            <Navbar/>
            
            <div className={workPage.navbarHeight}></div>
            
            <FeaturedWork title={`My Work`}/>
            <Footer/>
        </div>
    )
} 