import { useRef, useState, useEffect } from "react";
import TitleDetailsCard from "./TitleDetailsCard"

function HeroVideoPlayer() {
    const videoRef = useRef(null);
    const [muted, setMuted] = useState(true);

    const [audioAllowed, setAudioAllowed] = useState(false);

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !videoRef.current.muted;
        setMuted(videoRef.current.muted);
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Autoplay muted initially
        video.muted = true;
        video.play().catch(() => {
            // Autoplay might fail if not muted
            console.log("Autoplay failed, probably no user interaction yet.");
        });

        // Listen for user interaction to enable audio
        function enableAudio() {
            setAudioAllowed(true);
            video.muted = false;
            video.play();
            window.removeEventListener("click", enableAudio);
        }

        window.addEventListener("click", enableAudio);

        return () => window.removeEventListener("click", enableAudio);
    }, []);

    return <>
        <section className="">
            <div className="m-auto">
                <div className="media-wrapper">
                    <figure className="mediaFigure m-0 p-0 relative">
                        <div className="video-wrapper relative">
                            <video
                                width="100%"
                                height="auto"
                                preload="metadata"
                                playsInline
                                loop
                                ref={videoRef}
                            >
                                <source src="./formula-2.mp4" type="video/mp4" />
                                {/* <source src="/movie.ogg" type="video/ogg" /> */}
                                {/* Fallback text */}
                                Your browser does not support the HTML5 video tag.
                            </video>
                            {/* <!-- Overlay: first 80px transparent, then black --> */}
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent from-[80px] to-black"></div>
                        </div>

                        <figcaption className="px-[57px] h-[810px] mediaFigcaption absolute top-0 left-0 right-0 flex items-center justify-between">
                            <div className="content h-[400px">
                                <img src="./title-images/formula-title-img.webp" alt="" srcset="" />
                                <h1 className="mt-3 text-white font-bold text-2xl"></h1>
                                <ul className="flex items-center gap-2 my-2">
                                    <li className="text-white">2025</li>
                                    <li className="h-1 w-1 bg-gray-300 rounded"></li>
                                    <li className="text-white">7 Seasons</li>
                                    <li className="h-1 w-1 bg-gray-300 rounded"></li>
                                    <li className="text-white">U/A 16+</li>
                                    <li className="h-1 w-1 bg-gray-300 rounded"></li>
                                    <li className="text-white">Documentary</li>
                                </ul>
                                <p className="text-white w-[50%]">
                                    Drivers, managers and team owners live life in the fast lane both on and off the track during each cutthroat season of Formula 1 racing.
                                </p>
                            </div>

                        </figcaption>
                        <div className="media-controller-wrapper absolute top-[60%] right-0">
                            <div className="media-contoller flex items-center gap-3">
                                <button
                                    onClick={toggleMute}
                                    className="mute-btn border-1 p-2 border-white rounded-full bg-[rgba(20,20,20,.6)] hover:bg-[rgba(35,35,35,.85)] transition"
                                >
                                    {muted ? (
                                        // Muted Icon
                                        <svg className="text-white " viewBox="0 0 24 24" width="24" height="24" data-icon="VolumeOffMedium" data-icon-id=":ra:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z" fill="currentColor"></path>
                                        </svg>
                                    ) : (
                                        // Unmuted Icon
                                        <svg className="text-white" viewBox="0 0 24 24" width="24" height="24" data-icon="VolumeHighMedium" data-icon-id=":rd:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 8.28693 22.525 4.72597 19.8995 2.10046L18.4853 3.51468C20.7357 5.76511 22 8.81736 22 12C22 15.1826 20.7357 18.2348 18.4853 20.4852L19.8995 21.8995C22.525 19.2739 24 15.713 24 12ZM11 3.99995C11 3.59549 10.7564 3.23085 10.3827 3.07607C10.009 2.92129 9.57889 3.00685 9.29289 3.29285L4.58579 7.99995H1C0.447715 7.99995 0 8.44767 0 8.99995V15C0 15.5522 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0786 10.3827 20.9238C10.7564 20.7691 11 20.4044 11 20V3.99995ZM5.70711 9.70706L9 6.41417V17.5857L5.70711 14.2928L5.41421 14H5H2V9.99995H5H5.41421L5.70711 9.70706ZM16.0001 12C16.0001 10.4087 15.368 8.88254 14.2428 7.75732L12.8285 9.17154C13.5787 9.92168 14.0001 10.9391 14.0001 12C14.0001 13.0608 13.5787 14.0782 12.8285 14.8284L14.2428 16.2426C15.368 15.1174 16.0001 13.5913 16.0001 12ZM17.0709 4.92889C18.9462 6.80426 19.9998 9.3478 19.9998 12C19.9998 14.6521 18.9462 17.1957 17.0709 19.071L15.6567 17.6568C17.157 16.1565 17.9998 14.1217 17.9998 12C17.9998 9.87823 17.157 7.8434 15.6567 6.34311L17.0709 4.92889Z" fill="currentColor"></path>

                                        </svg>
                                    )}
                                </button>
                                <div className="maturity-rating w-fit bg-[rgba(51,51,51,.6)] pl-4 pr-18 border-l-2 h-[38px] border-white flex items-center">
                                    <h1 className="text-white text-base">U/A 16+</h1>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
        {/* <TitleDetailsCard /> */}
    </>
}
export default HeroVideoPlayer;