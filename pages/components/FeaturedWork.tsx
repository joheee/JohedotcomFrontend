import feature from '../../styles/FeaturedWork.module.scss'
import FeaturedWorkCard from './FeaturedWorkCard'

interface FeaturedWorkInterface {
    title:string
}

export default function FeaturedWork({title}:FeaturedWorkInterface){
    return  <div className={feature.featuredWorkContainer}>
                <div className={feature.featureWorkTitle}>
                    {title}
                </div>
                
                <div className={feature.featureWorkCardContainer}>
                    <FeaturedWorkCard/>
                    <FeaturedWorkCard/>
                    <FeaturedWorkCard/>
                    <FeaturedWorkCard/>
                    <FeaturedWorkCard/>
                    <FeaturedWorkCard/>
                    <FeaturedWorkCard/>
                    <FeaturedWorkCard/>
                    <FeaturedWorkCard/>
                </div>
            </div>
}