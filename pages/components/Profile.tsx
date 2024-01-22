import Index from '../../styles/Profile.module.scss'
import Image from 'next/image'
import { profileInterface } from '../config/interface'

export const Profile=(prop:profileInterface)=>{
    return  <div className={Index.homeContainer}>
            
                <div className={Index.homeInnerContainer}>
                
                    <div className={Index.homeInnerProfileContainer}>

                        <div className={Index.homeNameWebContainer}>
                        <div className={Index.homeProfileBoldText}>{prop.title}</div>
                        <div className={Index.homeProfileBoldText}>{prop.subtitle}</div>
                        </div>

                        <div className={Index.homeProfileDescription}>{prop.description}</div>

                        <button className={Index.resumeButton}>
                        download resume
                        </button>

                    </div>

                    <Image src={prop.picture} alt={prop.title} width="243" height="243" className={Index.homeSelfImageContainer}/>
                </div>
            
            </div>
}