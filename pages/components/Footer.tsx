import footer from '../../styles/Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { footerInterface } from '../config/interface'

interface footerViewInterface {
    footers:footerInterface[]
}
export default function Footer({footers}:footerViewInterface){

    return  <div className={footer.footerContainer}>
                <div className={footer.footerComponentContainer}>
                    {
                        footers.map(item => {
                            if(item.media === 'github') return (
                                <Link href={item.username}>
                                    <FontAwesomeIcon icon={faGithub} size='lg' className={footer.navbarButton}/>
                                </Link>
                            )
                            if(item.media === 'instagram') return (
                                <Link href={item.username}>
                                    <FontAwesomeIcon icon={faInstagram} size='lg' className={footer.navbarButton}/>
                                </Link>
                            )
                            if(item.media === 'linkedin') return (
                                <Link href={item.username}>
                                    <FontAwesomeIcon icon={faLinkedin} size='lg' className={footer.navbarButton}/>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className={footer.footerCopyrightText}>
                    Copyright ©2023 by Johevin Blesstowi 
                </div>
            </div>
}