// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function MySwiper() {
    return (
        <div className="px-[57px] m-auto mb-12">
            <h1 className='text-white font-semibold text-xl my-3'>US TV Shows</h1>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={6}
                slidesPerView={6}
                navigation={false}
                pagination={false}
                autoplay={false}
                loop={true}
            >
                <SwiperSlide>
                    <figure className='swiperTitleCard'>
                        <img src="https://occ-0-3209-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRfr4c2zAcbcrUBPSYy3sigtabktDbJ2aQglchPVW-ASoFOwSY6GqPNHaaHFB03IaNpsMo7PSFO3mSYKRU6-KDQpCU3obgESas4.webp?r=46d" alt="The Office Poster" />
                        <figcaption className='hidden'>
                            <div className="menu-wrapper flex items-center gap-2 my-3">
                                {/* Play Button */}
                                <button className="playSelectionBtn border rounded-full border-white p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>

                                {/* Add to My List (Plus Icon) */}
                                <button className="addToMyListBtn border rounded-full border-white p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
                                    </svg>
                                </button>

                                {/* Thumbs Up */}
                                <button className="thumbsUpBtn ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="22"
                                        height="22"
                                    >
                                        <path d="M1 21h4V9H1v12zM23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32
                   c0-.41-.17-.79-.44-1.06L14.17 2 7.59 
                   8.59C7.21 8.95 7 9.45 7 10v9c0 
                   1.1.9 2 2 2h9c.83 0 1.54-.5 
                   1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
                                    </svg>
                                </button>
                            </div>

                            <ul className='flex items-center gap-2'>
                                <li><span className='border-1 px-1 text-sm'>U/A 13+</span></li>
                                <li>9 Seasons</li>
                                <li><span className='border-1 px-1 text-sm'>HD</span></li>
                            </ul>

                            <ul>
                                <li>Mockumentary</li>
                                <li>Sharp Dialogue</li>
                                <li>Workplace</li>
                            </ul>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className='swiperTitleCard'>
                        <img src="https://occ-0-3209-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdMYiTS-9dAAhfH4yUt3wWVss5_MnbvoLah81tuUNZ7K8AXZ6m8v1Spj29AF1ZIHTu9_J1S3Kmnbt30EtD9L4Awt7Dd4-41r-Xc1IKZDQ-d9ewQro23gfNW6xqObPJ0yHuuTraAb-qKsH9j7aiyVNVqocXDRX0mKXVLEUarGk4drYXG8qCDZAAQrF3vBL_yS3K97NkRVUPyoFJFclj10i1DlSTjYVkMum0-f9Yz2FoZJ-bs_MeClx8ITSNP-3iKg.jpg?r=0c1" alt="The Office Poster" />
                        <figcaption className='hidden'>
                            <div className="menu-wrapper flex items-center gap-2 my-3">
                                {/* Play Button */}
                                <button className="playSelectionBtn border rounded-full border-white p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>

                                {/* Add to My List (Plus Icon) */}
                                <button className="addToMyListBtn border rounded-full border-white p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
                                    </svg>
                                </button>

                                {/* Thumbs Up */}
                                <button className="thumbsUpBtn ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="22"
                                        height="22"
                                    >
                                        <path d="M1 21h4V9H1v12zM23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32
                   c0-.41-.17-.79-.44-1.06L14.17 2 7.59 
                   8.59C7.21 8.95 7 9.45 7 10v9c0 
                   1.1.9 2 2 2h9c.83 0 1.54-.5 
                   1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
                                    </svg>
                                </button>
                            </div>

                            <ul className='flex items-center gap-2'>
                                <li><span className='border-1 px-1 text-sm'>U/A 13+</span></li>
                                <li>9 Seasons</li>
                                <li><span className='border-1 px-1 text-sm'>HD</span></li>
                            </ul>

                            <ul>
                                <li>Mockumentary</li>
                                <li>Sharp Dialogue</li>
                                <li>Workplace</li>
                            </ul>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className='swiperTitleCard'>
                        <img src="https://occ-0-3209-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYW_biw5qDbRciaUARr869zigCAlT4BEUJEkdsVEHSdE5nVXfWe0LMsl8LX6nhRlKdJhmVoYALI2Qz5Xu933fknR96goptGJrie4_aPD1TP0VT-k2fiT7YJ0Wzw0-zGutXYE.jpg?r=e60" alt="The Office Poster" />
                        <figcaption className='hidden'>
                            <div className="menu-wrapper flex items-center gap-2 my-3">
                                {/* Play Button */}
                                <button className="playSelectionBtn border rounded-full border-white p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>

                                {/* Add to My List (Plus Icon) */}
                                <button className="addToMyListBtn border rounded-full border-white p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
                                    </svg>
                                </button>

                                {/* Thumbs Up */}
                                <button className="thumbsUpBtn ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="22"
                                        height="22"
                                    >
                                        <path d="M1 21h4V9H1v12zM23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32
                   c0-.41-.17-.79-.44-1.06L14.17 2 7.59 
                   8.59C7.21 8.95 7 9.45 7 10v9c0 
                   1.1.9 2 2 2h9c.83 0 1.54-.5 
                   1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
                                    </svg>
                                </button>
                            </div>

                            <ul className='flex items-center gap-2'>
                                <li><span className='border-1 px-1 text-sm'>U/A 13+</span></li>
                                <li>9 Seasons</li>
                                <li><span className='border-1 px-1 text-sm'>HD</span></li>
                            </ul>

                            <ul>
                                <li>Mockumentary</li>
                                <li>Sharp Dialogue</li>
                                <li>Workplace</li>
                            </ul>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className='swiperTitleCard'>
                        <img src="https://occ-0-3209-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSrNl2Ec6I3RS-2p2_gyYBBOY3L370nKLAEnoeB3lSiLIRvEIETYZaLlH3PKXQjlqhV9T1y7fhiN4gHbrCO6_U-Q49jrrQYbKzg.webp?r=202" alt="The Office Poster" />
                        <figcaption className='hidden'>
                            <div className="menu-wrapper flex items-center gap-2 my-3">
                                {/* Play Button */}
                                <button className="playSelectionBtn border rounded-full border-white p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>

                                {/* Add to My List (Plus Icon) */}
                                <button className="addToMyListBtn border rounded-full border-white p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
                                    </svg>
                                </button>

                                {/* Thumbs Up */}
                                <button className="thumbsUpBtn ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="22"
                                        height="22"
                                    >
                                        <path d="M1 21h4V9H1v12zM23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32
                   c0-.41-.17-.79-.44-1.06L14.17 2 7.59 
                   8.59C7.21 8.95 7 9.45 7 10v9c0 
                   1.1.9 2 2 2h9c.83 0 1.54-.5 
                   1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
                                    </svg>
                                </button>
                            </div>

                            <ul className='flex items-center gap-2'>
                                <li><span className='border-1 px-1 text-sm'>U/A 13+</span></li>
                                <li>9 Seasons</li>
                                <li><span className='border-1 px-1 text-sm'>HD</span></li>
                            </ul>

                            <ul>
                                <li>Mockumentary</li>
                                <li>Sharp Dialogue</li>
                                <li>Workplace</li>
                            </ul>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className='swiperTitleCard'>
                        <img src="https://occ-0-3209-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfv7dIilvxdZBOVNMXRg-32u41cEu_EYyKC-mI6V3Ye4MswfSCFfKXc-6JIJ3h8AGFsLe12H4Zu5yRVTE-65ndQK5EotMXizmQDfIgX7ZZfNr1nlfI-pIjCanURWOqAEhQOi.jpg?r=cee" alt="The Office Poster" />
                        <figcaption className='hidden'>
                            <div className="menu-wrapper flex items-center gap-2 my-3">
                                {/* Play Button */}
                                <button className="playSelectionBtn border rounded-full border-white p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>

                                {/* Add to My List (Plus Icon) */}
                                <button className="addToMyListBtn border rounded-full border-white p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
                                    </svg>
                                </button>

                                {/* Thumbs Up */}
                                <button className="thumbsUpBtn ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="22"
                                        height="22"
                                    >
                                        <path d="M1 21h4V9H1v12zM23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32
                   c0-.41-.17-.79-.44-1.06L14.17 2 7.59 
                   8.59C7.21 8.95 7 9.45 7 10v9c0 
                   1.1.9 2 2 2h9c.83 0 1.54-.5 
                   1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
                                    </svg>
                                </button>
                            </div>

                            <ul className='flex items-center gap-2'>
                                <li><span className='border-1 px-1 text-sm'>U/A 13+</span></li>
                                <li>9 Seasons</li>
                                <li><span className='border-1 px-1 text-sm'>HD</span></li>
                            </ul>

                            <ul>
                                <li>Mockumentary</li>
                                <li>Sharp Dialogue</li>
                                <li>Workplace</li>
                            </ul>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className='swiperTitleCard'>
                        <img src="https://occ-0-3209-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYOSv2XJhtOOxZoDqYpV6u0SCSDe7-CoptcE7d7C-mQG1S8zXfN-XNDIqKk76UVniPM5fHO6rSQJLwK7GURCu11d0Tgv7JKu4NM.webp?r=722" alt="The Office Poster" />
                        <figcaption className='hidden'>
                            <div className="menu-wrapper flex items-center gap-2 my-3">
                                {/* Play Button */}
                                <button className="playSelectionBtn border rounded-full border-white p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>

                                {/* Add to My List (Plus Icon) */}
                                <button className="addToMyListBtn border rounded-full border-white p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
                                    </svg>
                                </button>

                                {/* Thumbs Up */}
                                <button className="thumbsUpBtn ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="22"
                                        height="22"
                                    >
                                        <path d="M1 21h4V9H1v12zM23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32
                   c0-.41-.17-.79-.44-1.06L14.17 2 7.59 
                   8.59C7.21 8.95 7 9.45 7 10v9c0 
                   1.1.9 2 2 2h9c.83 0 1.54-.5 
                   1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
                                    </svg>
                                </button>
                            </div>

                            <ul className='flex items-center gap-2'>
                                <li><span className='border-1 px-1 text-sm'>U/A 13+</span></li>
                                <li>9 Seasons</li>
                                <li><span className='border-1 px-1 text-sm'>HD</span></li>
                            </ul>

                            <ul>
                                <li>Mockumentary</li>
                                <li>Sharp Dialogue</li>
                                <li>Workplace</li>
                            </ul>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className='swiperTitleCard'>
                        <img src="https://occ-0-3209-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABanNO1oRC_cwOOXKjSDWbVZz4v2HDW2OmZyhhGoZenM47rGdYoCVaZsQjfIr2zTshAClttKt0FZxt7pDrxyDl2-5Vg2kRECeRGSoacE69Qy8hWUa5JXYLTiQTKLCqJ7sQ4z9.jpg?r=f0f" alt="The Office Poster" />
                        <figcaption className='hidden'>
                            <div className="menu-wrapper flex items-center gap-2 my-3">
                                {/* Play Button */}
                                <button className="playSelectionBtn border rounded-full border-white p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>

                                {/* Add to My List (Plus Icon) */}
                                <button className="addToMyListBtn border rounded-full border-white p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
                                    </svg>
                                </button>

                                {/* Thumbs Up */}
                                <button className="thumbsUpBtn ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="22"
                                        height="22"
                                    >
                                        <path d="M1 21h4V9H1v12zM23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32
                   c0-.41-.17-.79-.44-1.06L14.17 2 7.59 
                   8.59C7.21 8.95 7 9.45 7 10v9c0 
                   1.1.9 2 2 2h9c.83 0 1.54-.5 
                   1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
                                    </svg>
                                </button>
                            </div>

                            <ul className='flex items-center gap-2'>
                                <li><span className='border-1 px-1 text-sm'>U/A 13+</span></li>
                                <li>9 Seasons</li>
                                <li><span className='border-1 px-1 text-sm'>HD</span></li>
                            </ul>

                            <ul>
                                <li>Mockumentary</li>
                                <li>Sharp Dialogue</li>
                                <li>Workplace</li>
                            </ul>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className='swiperTitleCard'>
                        <img src="https://occ-0-3209-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSOj8C4FL3T6FoFZUIYIVMMrELRqBY2kJYbY5x00YP7GGmGKApdtu-1QOT_iZ_LhJsNOU3GrtCf5k96FBS6Gv7841BJ2U8RvJYo.webp?r=844" alt="The Office Poster" />
                        <figcaption className='hidden'>
                            <div className="menu-wrapper flex items-center gap-2 my-3">
                                {/* Play Button */}
                                <button className="playSelectionBtn border rounded-full border-white p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>

                                {/* Add to My List (Plus Icon) */}
                                <button className="addToMyListBtn border rounded-full border-white p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
                                    </svg>
                                </button>

                                {/* Thumbs Up */}
                                <button className="thumbsUpBtn ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="22"
                                        height="22"
                                    >
                                        <path d="M1 21h4V9H1v12zM23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32
                   c0-.41-.17-.79-.44-1.06L14.17 2 7.59 
                   8.59C7.21 8.95 7 9.45 7 10v9c0 
                   1.1.9 2 2 2h9c.83 0 1.54-.5 
                   1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
                                    </svg>
                                </button>
                            </div>

                            <ul className='flex items-center gap-2'>
                                <li><span className='border-1 px-1 text-sm'>U/A 13+</span></li>
                                <li>9 Seasons</li>
                                <li><span className='border-1 px-1 text-sm'>HD</span></li>
                            </ul>

                            <ul>
                                <li>Mockumentary</li>
                                <li>Sharp Dialogue</li>
                                <li>Workplace</li>
                            </ul>
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className='swiperTitleCard'>
                        <img src="https://occ-0-3209-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcYMu_PISslWjfBBVbTtwOr-Lz7ZHBRkHjsg2nlHZxKwv7coJlTIvjdjyHS2BQMZ1t5Nex9WfnGNoNUA6VLkzmwRRaD3PtIX6X36r2SpmMvy4WHLD1QBthDEbggdH_Eid-G4YJlIN6H_D6thHWZNKf0QZ4MYrEnGk2RLvPwx57qEaQXpeKJctkmdyHZcJ6FBLstWxvHgkJ2N31X3-I1wVXAB4h2wfBfUXj0.jpg?r=3f0" alt="The Office Poster" />
                        <figcaption className='hidden'>
                            <div className="menu-wrapper flex items-center gap-2 my-3">
                                {/* Play Button */}
                                <button className="playSelectionBtn border rounded-full border-white p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>

                                {/* Add to My List (Plus Icon) */}
                                <button className="addToMyListBtn border rounded-full border-white p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
                                    </svg>
                                </button>

                                {/* Thumbs Up */}
                                <button className="thumbsUpBtn ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        width="22"
                                        height="22"
                                    >
                                        <path d="M1 21h4V9H1v12zM23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32
                   c0-.41-.17-.79-.44-1.06L14.17 2 7.59 
                   8.59C7.21 8.95 7 9.45 7 10v9c0 
                   1.1.9 2 2 2h9c.83 0 1.54-.5 
                   1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
                                    </svg>
                                </button>
                            </div>

                            <ul className='flex items-center gap-2'>
                                <li><span className='border-1 px-1 text-sm'>U/A 13+</span></li>
                                <li>9 Seasons</li>
                                <li><span className='border-1 px-1 text-sm'>HD</span></li>
                            </ul>

                            <ul>
                                <li>Mockumentary</li>
                                <li>Sharp Dialogue</li>
                                <li>Workplace</li>
                            </ul>
                        </figcaption>
                    </figure>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default MySwiper;
