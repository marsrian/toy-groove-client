import photo1 from '../../../assets/g-1.jpg';
import photo2 from '../../../assets/g-2.jpg';
import photo3 from '../../../assets/g-3.jpg';
import photo4 from '../../../assets/g-4.jpg';

const PhotoGallery = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img className='h-60 w-full' src={photo1} alt="" />
            <img className='h-60 w-full' src={photo2} alt="" />
            <img className='h-60 w-full' src={photo3} alt="" />
            <img className='h-60 w-full' src={photo4} alt="" />
        </div>
    );
};

export default PhotoGallery;