import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import Image from 'next/image'
import navbar from '../../styles/Navbar.module.scss';
import { faBlog, faCode, faContactBook, faXmark } from '@fortawesome/free-solid-svg-icons';

interface NavbarMobileInterface {
    isMobile:boolean,
    setIsMobile:(e:boolean) => void
}

export default function NavbarMobile ({isMobile,setIsMobile}:NavbarMobileInterface){
    return  (
        <div className={navbar.navbarMobileContainer}>
            <div className={navbar.navbarMobileExitLogoContainer}>
                <Link href='/' className={navbar.navbarButton} onClick={()=>setIsMobile(!isMobile)}>
                        <Image src="/favicon.ico" width={60} height={60} className={navbar.navbarLogoSetup} alt='johedotcom logo'/>
                </Link>

                <button className={` ${navbar.navbarMobileExitButton}`}>
                    <FontAwesomeIcon icon={faXmark} size='2x' onClick={()=>setIsMobile(!isMobile)}/>
                </button>
            </div>

            <div className={navbar.navbarMobileOtherButtonContainer}>
                <Link href='/work' className={navbar.navbarButton} onClick={()=>setIsMobile(!isMobile)}>
                        <FontAwesomeIcon className={navbar.navbarIconSetup} size='lg' icon={faCode}/>
                        work
                </Link>
                <Link href='/blog' className={navbar.navbarButton} onClick={()=>setIsMobile(!isMobile)}>
                    <FontAwesomeIcon className={navbar.navbarIconSetup} size='lg' icon={faBlog}/>
                    blog
                </Link>
                <Link href='/contact' className={navbar.navbarButton} onClick={()=>setIsMobile(!isMobile)}>
                    <FontAwesomeIcon className={navbar.navbarIconSetup} size='lg' icon={faContactBook}/>
                    contact
                </Link>
            </div>
        </div>
    )
}