import { BiGlobe } from 'react-icons/bi'
import { RiUserFill, RiUserAddFill } from 'react-icons/ri'
export default function Header() {
    return (
        <div className="bg-brand-color px-8">
            <div className="container mx-auto h-11 flex items-center justify-between max-w-[1233px]">
                <div className='mt-1 bg-primary-brand-color rounded-t-md pointer-events-none'>
                    <div className='h-full flex items-center'>
                        <figure className='flex justify-center items-center w-ful h-full'>
                            <a href="/" className='py-3 px-5'>
                                <img src="/logo.svg" alt="logo" className='h-[16px] w-auto' />
                            </a>
                        </figure>
                    </div>

                </div>

                <nav className="flex gap-x-8 text-sm font-semibold">
                    <a href="/" className=" flex items-center gap-x-2 text-white text-opacity-80 hover:text-opacity-100 transition-all">
                        <BiGlobe size={20} />
                        Türkçe (TR)
                    </a>
                    <a href="/" className=" flex items-center gap-x-2 text-white text-opacity-80 hover:text-opacity-100 transition-all">
                        <RiUserFill size={20} />
                        Giriş Yap
                    </a>
                    <a href="/" className=" flex items-center gap-x-2 text-white text-opacity-80 hover:text-opacity-100 transition-all">
                        <RiUserAddFill size={20} />
                        Kayıt Ol
                    </a>
                </nav>

            </div>
        </div>
    )
}
