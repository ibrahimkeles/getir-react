import Slider from 'react-slick'
import Banners from '../api/banners.json'
import { useState, useEffect } from 'react'



export default function Campaigns() {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    setBanners(Banners);
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

  }
  return (
    <div className='container mx-auto max-w-[1233px]'>
      <h3 className="text-sm font-semibold my-3">Kampanyalar</h3>

      <Slider {...settings} className='-mx-2'>
        {banners.length && banners.map((banner, index) => (
          <div key={banner.id}>
            <picture className='px-2 block'>
              <img src={banner.image} alt='kampanya görseli' className='rounded' />
            </picture>
          </div>
        ))}

      </Slider>
    </div>
  )
}
