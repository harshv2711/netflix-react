// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function MySwiper() {
    return (
       <div className=" m-auto w-full">
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={6}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true} 
        >
            <SwiperSlide>
                <figure className='swiperTitleCard'>
                    <img src="./title-images/the-office.webp" alt="" srcset="" />
                    <figcaption>
                        <ul className='flex items-center gap-2'>
                            <li><span className='border-1 px-1 text-sm'>U/A 13+</span></li>
                            <li>9 Seasons</li>
                            <li><span className='border-1 px-1 text-sm'>HD</span></li>
                        </ul>
                    </figcaption>
                </figure>
            </SwiperSlide>
        </Swiper>
       </div>
    );
}

export default MySwiper;
