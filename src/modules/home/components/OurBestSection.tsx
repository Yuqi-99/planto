/* eslint-disable @typescript-eslint/no-unused-vars */
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { OUR_BEST_PLANT_DATA } from '../../../shared/constants/plantData';
import { LongCard } from './LongCard';
import { SectionTitle } from './SectionTitle';
// import Swiper styles
// import 'swiper/css';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect } from 'react';

export const OurBestSection = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel();
	const carouselId = 'embla-carousel';

	console.log(emblaRef, 'emblaRef');

	const updateSlidesVisibility = useCallback(() => {
		if (!emblaApi) return 'no embla APi';

		const viewport = document.getElementById(carouselId);
		if (!viewport) return 'no viewport found';

		const viewportRect = viewport.getBoundingClientRect();
		const slideNodes = emblaApi.slideNodes();

		const tolerance = 200;

		slideNodes.forEach((slide) => {
			const slideRect = slide.getBoundingClientRect();
			const isVisible =
				slideRect.left >= viewportRect.left - tolerance &&
				slideRect.right <= viewportRect.right + tolerance;

			console.log(isVisible, 'isVisible');

			slide.classList.toggle('opacity-0', !isVisible);
			slide.classList.toggle('opacity-100', isVisible);
			slide.classList.toggle('pointer-events-none', !isVisible);
		});
	}, [emblaApi, carouselId]);

	useEffect(() => {
		if (!emblaApi) return;

		const timer = setTimeout(() => {
			updateSlidesVisibility();
			console.log('updateSlidesVisibility');
		}, 50);

		emblaApi.on('scroll', updateSlidesVisibility);
		emblaApi.on('reInit', updateSlidesVisibility);
		emblaApi.on('select', updateSlidesVisibility);
		emblaApi.on('settle', updateSlidesVisibility);

		return () => {
			clearTimeout(timer);
			emblaApi.off('scroll', updateSlidesVisibility);
			emblaApi.off('reInit', updateSlidesVisibility);
			emblaApi.off('select', updateSlidesVisibility);
			emblaApi.off('settle', updateSlidesVisibility);
		};
	}, [emblaApi, updateSlidesVisibility]);

	return (
		<div className='flex flex-col items-center justify-center'>
			<SectionTitle title='Our Best o2' />
			<div className='mt-20' id={carouselId}>
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={8}
					slidesPerView={1}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
					loop
					className='relative h-full w-screen max-w-[1440px] rounded-t-lg'
					pagination={{ clickable: true }}
					slideVisibleClass='swiper-slide-visible'
				>
					{OUR_BEST_PLANT_DATA.map((item) => {
						return (
							<SwiperSlide className='mb-5 w-full text-white'>
								<LongCard
									direction='left'
									img={item.img}
									name={item.name}
									subtitle={item.subtitle}
									buttonTitle='Explore'
									showAddToCart={false}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
				{/* <div className='embla' ref={emblaRef}>
					<div className='embla__container relative h-full w-screen max-w-[1440px] rounded-t-lg'>
						{OUR_BEST_PLANT_DATA.map((item) => {
							return (
								<div className='embla__slide mb-5 w-full text-white'>
									<LongCard
										direction='left'
										img={item.img}
										name={item.name}
										subtitle={item.subtitle}
										buttonTitle='Explore'
										showAddToCart={false}
									/>
								</div>
							);
						})}
					</div>
				</div> */}
			</div>
		</div>
	);
};
