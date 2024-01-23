import feature from '../../styles/FeaturedWork.module.scss'
import { workViewInterface } from '../config/interface'
import FeaturedWorkCard from './FeaturedWorkCard'

export default function FeaturedWork(prop:workViewInterface){

    if(prop.work === undefined) return <div className=""></div>

    return  <div className={feature.featuredWorkContainer}>
                <div className={feature.featureWorkTitle}>
                    {prop.title}
                </div>
                
                <div className={feature.featureWorkCardContainer}>
                    {
                        prop.work.map((item, i) => (
                            <FeaturedWorkCard {...item} key={i}/>
                        ))
                    }
                </div>
            </div>
}