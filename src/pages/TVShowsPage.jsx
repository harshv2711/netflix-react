import Navbar from "../components/Navbar"
import HeroVideoPlayer from "../components/HeroVideoPlayer"
import CollectionWrapper from "../components/CollectionWrapper"

function TVShowsPage() {
    return <>
        <Navbar/>
        <HeroVideoPlayer 
            videoLink="./suit-video.mp4" 
            titleImage="https://occ-0-3209-2186.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABRXh8nkp6VsXjEa6FQe6hjaMTAcRpgD3pZY1l-76_bTmsbod9OhIOJhjsq33NSjVGaySD4FPfLSB7kxwlEJLTlD_Bo9jrgQLqw.webp?r=861" 
            year="2019" 
            totalSeason="9 Seasons" 
            adultRating="U/A 16+" 
            genre="Drama"
            synopsis="After impressing a slick lawyer with his razor-sharp mind, a college dropout scores a coveted associate job, even though he has no legal credentials.."
        />
        <CollectionWrapper/>
    </>
}

export default TVShowsPage;