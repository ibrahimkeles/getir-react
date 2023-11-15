import { useState } from 'react';
import Slider from 'react-slick'
import ReactFlagsSelect from "react-flags-select";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function HeroSection() {
  const [selected, setSelected] = useState("TR");
  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+22'
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,  // Autoplay özelliği ekleniyor
    autoplaySpeed: 2000,  // Autoplay hızı (örneğin 2 saniye)
  }
  return (

    <div className='
    
    relative
    h-[500px]
    before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent
    before:absolute before:inset-0  
    before:w-full 
    before:h-full  
    before:z-10'>
      <Slider {...settings}>
        <div>
          <img className='w-full h-[500px] object-cover ' src='/getir-mainpage-1.jpg' alt='slider görsel ' />
        </div>
        <div>
          <img className='w-full h-[500px] object-cover ' src='/getir-mainpage-2.jpg' alt='slider görsel ' />
        </div>
        <div>
          <img className='w-full h-[500px] object-cover ' src='/getir-mainpage-4.jpg' alt='slider görsel ' />
        </div>

      </Slider>
      <div className='container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20 max-w-[1233px]'>
        <div >
          <img src='/bimutluluk.svg' alt='bi mutluluk' />
          <h3 className='mt-8 text-4xl font-semibold text-white'>Dakikalar içinde <br /> kapınızda </h3>
        </div>
        <div className='w-[400px] rounded-lg bg-gray-50 p-6'>
          <h4 className='text-primary-brand-color font-semibold text-center mb-4'>Giriş yap veya Kayıt ol</h4>
          <div className='grid gap-y-3'>
            <div className='flex gap-x-2'>
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={code => setSelected(code)}
                selected={selected}
                className='flag-select'
              />
              <label className='flex-1 relative block'>

                <input className='h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color focus:border-primary-brand-color  outline-none text-sm pt-2 peer' required />
                <span className='absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 select-none transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 
              peer-valid:text-primary-brand-color peer-valid:text-xs'>
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button className='bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 text-center flex items-center justify-center rounded-md w-full text-sm font-semibold '>
              Telefon numarası ile devam et
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
