import contactPage from '../styles/ContactPage.module.scss'
import Head from 'next/head'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { collection, getDocs, query } from 'firebase/firestore/lite'
import { db } from './config/firebase'
import { contactInterface, footerInterface } from './config/interface'

export default function Contact(prop:contactInterface){
    const APP_NAME = 'johedotcom'
    const CONTACT_ME_PAGE = 'contact me'
    const MY_BLOG_PAGE = 'my blog'
    const MY_WORK_PAGE = 'my work'
    return (
        <>
        <Head>
            <title>{APP_NAME} | {CONTACT_ME_PAGE}</title>
        </Head>

        <Navbar/>
        <div className={contactPage.contactPageParentContainer}>
            <div className={contactPage.navbarHeight}></div>

            <div className={contactPage.formContactContainer}>
                <div className={contactPage.formContactTitle}>
                    Contact Me
                </div>

                <div className={contactPage.ContactInput}>
                    first name
                    <input type="text"/>
                </div>
                <div className={contactPage.ContactInput}>
                    last name
                    <input type="text"/>
                </div>
                <div className={contactPage.ContactInput}>
                    email
                    <input type="text"/>
                </div>
                <div className={contactPage.ContactInput}>
                    phone number
                    <input type="text"/>
                </div>        

                <div className={contactPage.ContactInput}>
                    message
                    <textarea name="" id="" cols={30} rows={10}>

                    </textarea>
                </div>   

                <button className={contactPage.resumeButton}>
                    send
                </button>
            </div>

        </div>
        <Footer footers={prop.footer}/>
        </>
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