import photo1 from '../../../assets/g-1.jpg';
import photo2 from '../../../assets/g-2.jpg';
import photo3 from '../../../assets/g-3.jpg';
import photo4 from '../../../assets/g-4.jpg';
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img data-aos="zoom-in-up" className='h-60 w-full' src={photo1} alt="" />
            <img data-aos="zoom-in-up" className='h-60 w-full' src={photo2} alt="" />
            <img data-aos="zoom-in-up" className='h-60 w-full' src={photo3} alt="" />
            <img data-aos="zoom-in-up" className='h-60 w-full' src={photo4} alt="" />
        </div>
    );
};

export default PhotoGallery;