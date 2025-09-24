import Navbar from "../components/Navbar"
import MovieHeroMediaPlayer from "../components/MovieHeroMediaPlayer"
import CollectionWrapper from "../components/CollectionWrapper"

function MoviesPage() {
    return <>
        <Navbar/>
         <MovieHeroMediaPlayer 
            videoLink="./animal.mp4" 
            titleImage="https://occ-0-3209-2186.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABa52UqpFgYhkPqw6I7XELab1V0VYLVSxhzGseQ7Sk3cItlBUznRU-l6nGtKNLvXRWaqFCcAfkTqkaEFZdr_v-aQGR8-5Z5rCIiw.webp?r=c8b" 
            year="2023" 
            totalSeason="" 
            adultRating="A" 
            genre="Action"
            synopsis="The hardened son of a powerful industrialist returns home after years abroad and vows to take bloody revenge on those threatening his father's life."
        />
        <CollectionWrapper/>
    </>
}

export default MoviesPage;