import Image from 'next/image'
import FeatureCard from '../../styles/FeaturedWorkCard.module.scss'
import { workInterface } from '../config/interface'

export default function FeaturedWorkCard(prop:workInterface){
    return  <div className={FeatureCard.featuredWorkCard}>
                <Image src={prop.picture} width='250' height='180' alt=''/>

                <div className={FeatureCard.featureWorkTextContainer}>
                    <div className={FeatureCard.featureWorkTextYearContainer}>
                        <div className={FeatureCard.featureWorkTextTitle}>
                            {prop.title}
                        </div>

                        <div className={FeatureCard.featureWorkTextYearTitleContainer}>
                            <div className={FeatureCard.featureWorkTextYearTitleItem}>
                                {prop.time}
                            </div>
                            <div className={FeatureCard.featureWorkTextYearTitleItem}>
                                code
                            </div>
                        </div>
                    </div>
 
                    <div className={FeatureCard.featureWorkTextDescription}>{prop.description}</div>
                </div>
            </div>
}