
import Navbar from "../components/Navbar"
import HeroVideoPlayer from "../components/HeroVideoPlayer"
import CollectionWrapper from "../components/CollectionWrapper"
function HomePage() {
    return <>
        <Navbar/>
        <HeroVideoPlayer 
            videoLink="./formula-2.mp4" 
            titleImage="./title-images/formula-title-img.webp" 
            year="2025" 
            totalSeason="7 Seasons" 
            adultRating="U/A 16+" 
            genre="Documentary"
            synopsis=" Drivers, managers and team owners live life in the fast lane both on and off the track during each cutthroat season of Formula 1 racing."
        />
        <CollectionWrapper/>
    </> 
   
}

export default HomePage;