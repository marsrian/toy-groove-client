import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PhotoGallery = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: true, // Animation only once
          easing: 'ease-in-out', // Easing function
        });
      }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:p-0">
            <img data-aos="zoom-in-up" className='h-60 w-full' src="https://i.ibb.co/jh906bg/g-5.jpg" alt="" />
            <img data-aos="zoom-in-up" className='h-60 w-full' src="https://i.ibb.co/j4mV6t7/g-7.jpg" alt="" />
            <img data-aos="zoom-in-up" className='h-60 w-full' src="https://i.ibb.co/D8rPDwR/g-9.jpg" alt="" />
            <img data-aos="zoom-in-up" className='h-60 w-full' src="https://i.ibb.co/k8DF5S8/g-4.jpg" alt="" />
            <img data-aos="zoom-in-up" className='h-60 w-full' src="https://i.ibb.co/Nxrv749/g-2.jpg" alt="" />
            <img data-aos="zoom-in-up" className='h-60 w-full' src="https://i.ibb.co/THr14Ly/g-8.jpg" alt="" />
        </div>
    );
};

export default PhotoGallery;