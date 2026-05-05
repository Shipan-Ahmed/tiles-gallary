'use client'
import Link from 'next/link';

import Marquee from 'react-fast-marquee';
import { LuSparkles } from 'react-icons/lu';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const Banner = () => {
    return (
        <div className=' w-full h-[400px] relative'>

            <div className='flex mb-4 bg-slate-100 items-center overflow-hidden rounded-lg border border-gray-200'>
                {/* Label with a "Flash" effect */}
                <div className='bg-red-600 text-white px-6 py-3 font-bold text-sm uppercase tracking-wider whitespace-nowrap z-10 shadow-lg'>
                    New Arrivals
                </div>

                <Marquee speed={60} pauseOnHover={true} gradient={true} gradientColor="white" gradientWidth={50}>
                    <div className="flex gap-8 items-center py-2">
                        <span className="flex items-center gap-2 font-medium text-gray-700">
                            <LuSparkles className="text-yellow-500" /> Ceramic
                        </span>
                        <div className="badge badge-outline badge-warning font-semibold">Premium Marble</div>

                        <span className="flex items-center gap-2 font-medium text-gray-700">
                            <LuSparkles className="text-yellow-500" /> Modern Designs
                        </span>
                        <div className="badge badge-outline badge-info font-semibold">Limited Edition</div>

                        <span className="flex items-center gap-2 font-medium text-gray-700">
                            <LuSparkles className="text-yellow-500" /> Best Quality Tiles
                        </span>
                        <div className="badge badge-outline badge-success font-semibold">Eco-Friendly</div>
                    </div>
                </Marquee>
            </div>
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 3000, // 3 seconds
                    disableOnInteraction: false,
                }}
                loop={true}
                className="h-full"
                pagination={{
                    clickable: true,
                }}
                // modules={[Autoplay]}
                // autoplay={{ delay: 3000 }}
                // loop={true}
                // className="h-full"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    {/* h-full bg-cover bg-center */}
                    <div className=" h-full bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co.com/93Zd6pmV/scandinavian-living-room-with-sofas-fireplace-and-natural-wood-accents.jpg)"
                        }}>
                        <h1 className="text-white text-4xl font-bold bg-black/50 px-4 py-2 rounded">
                            Premium Indoor Tiles
                        </h1>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className=" h-full bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co.com/wF1BFhyM/1000-F-1119915638-ud-Ya-Xwd-LCSX0z-Ul-E7-Qt-OMRZa-CUk8-DHKt.jpg)"
                        }}>
                        <h1 className="text-white text-4xl font-bold bg-black/50 px-4 py-2 rounded">
                            Modern Wood Floor Designs
                        </h1>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className=" h-full bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co.com/jPRdNxpS/240-F-900154080-b-Iek-VMvq-K8-Lf5u5ze-Ma5n0-Pug1mmvhdg.jpg)"
                        }}>
                        <h1 className="text-white text-4xl font-bold bg-black/50 px-4 py-2 rounded">
                            Kitchen Marble Collection
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" h-full bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co.com/vxr9J5m7/elegantslab-crop-c0-5-0-5-1600x775.png)"
                        }}>
                        <h1 className="text-white text-4xl font-bold bg-black/50 px-4 py-2 rounded">
                            Luxury Marble Collection
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" h-full bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co.com/27yyGJCK/Classicsuperamb-crop-c0-5-0-5-1600x775-70.jpg)"
                        }}>
                        <h1 className="text-white text-4xl font-bold bg-black/50 px-4 py-2 rounded">
                            Golden Marble Collection
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" h-full bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co.com/rRmKCmp3/Ambience-crop-c0-5-0-5-1600x775-70.jpg)"
                        }}>
                        <h1 className="text-white text-4xl font-bold bg-black/50 px-4 py-2 rounded">
                            Premium Floor Tiles Collection
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" h-full bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co.com/cS8q2SK3/HDTAmb-crop-c0-5-0-5-1600x775-70.jpg)"
                        }}>
                        <h1 className="text-white text-4xl font-bold bg-black/50 px-4 py-2 rounded">
                            Premium Outdoor Collection
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" h-full bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage:
                                "url(https://i.ibb.co.com/VW0q1jgP/treadcollection-crop-c0-5-0-5-1600x775-70.jpg)"
                        }}>
                        <h1 className="text-white text-4xl font-bold bg-black/50 px-4 py-2 rounded">
                            Gray Tiles Collection
                        </h1>
                    </div>
                </SwiperSlide>

            </Swiper>
            <section className=" py-4 absolute left-1/2 transform -translate-x-1/2 bottom-10 z-10 text-center">
                <Link href="/tiles" >
                    <button className=" btn  bg-yellow-500 text-white  px-6 py-3 rounded">
                        Browse Now
                    </button>
                </Link>
            </section>
            {/* <h1 className="text-4xl text-white left-1/2 transform -translate-x-1/2 bg-yellow/50 px-4 py-2 rounded font-bold top-20 absolute z-10 text-center mt-6">
                Discover Your Perfect Aesthetic
            </h1> */}

        </div>
    );
};

export default Banner;