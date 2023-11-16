import Menu from "./ui/Menu"
import { FaFacebook, FaTwitter,FaInstagram } from 'react-icons/fa'
import { BiGlobe} from 'react-icons/bi'
export default function Footer() {
  const menues = [
    {
      id: 1,
      title: "Getir\'i Keşfedin",
      items: [
        {
          title: 'Hakkımızda',
          link: '',
        },
        {
          title: 'Kariyer',
          link: '',
        },
        {
          title: 'İletişim',
          link: '',
        },
        {
          title: 'Covid-19 Duyuru',
          link: '',
        },
        {
          title: 'Sosyal Sorumluluk',
          link: '',
        }
      ]
    },
    {
      id: 2,
      title: "Yardıma mı ihtiyacınız var?",
      items: [
        {
          title: 'Sıkça Sorulan Sorular',
          link: '',
        },
        {
          title: 'Kişisel Verilerin Korunması',
          link: '',
        },
        {
          title: 'Gizlilik Politikası',
          link: '',
        },
        {
          title: 'Kullanım Koşulları',
          link: '',
        },
        {
          title: 'Çerez Politikası',
          link: '',
        }
      ]
    },
    {
      id: 3,
      title: "İş Ortağımız Olun",
      items: [
        {
          title: 'Bayimiz Olun',
          link: '',
        },
        {
          title: 'Deponuzu Kiralayın',
          link: '',
        },
        {
          title: 'GetirYemek Restoranı Olun',
          link: '',
        },
        {
          title: 'GetirÇarşı İşletmesi Olun',
          link: '',
        },
        {
          title: 'Zincir Restoranlar',
          link: '',
        }
      ]
    }
  ]

  return (
    <div className="bg-white mt-10">
      <div className="container mx-auto  max-w-[1233px]">
        <div className="grid grid-cols-4 pt-10">
          <section>
            <nav className=" grid gap-y-4">
              <h6 className="text-lg text-primary-brand-color">Getiri indirin!</h6>

              <a href="/" className="transition-all hover:scale-105">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
              </a>
              <a href="/" className="transition-all hover:scale-105">
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
              </a>
              <a href="/" className="transition-all hover:scale-105">
                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
              </a>
            </nav>
          </section>
          {menues.map((menu, index) => <Menu key={index} menu={menu} />)}
        </div>
        <div className="flex justify-between items-center borer-t border-gray-200 mt-6 py-6">
          <div className="text-xs text-gray-700 flex gap-x-8">
            &copy; 2021 Getir
            <a href="/" className="text-primary-brand-color hover:underline">
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className="flex gap-x-3">
            <a href="/" className="w-8 h-8 rounded-lg text-gray-700 hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center">
              <FaFacebook size={20}  />
            </a>
            <a href="/" className="w-8 h-8 rounded-lg text-gray-700 hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center">
              <FaTwitter size={20}  />
            </a>
            <a href="/" className="w-8 h-8 rounded-lg text-gray-700 hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center">
              <FaInstagram size={20}  />
            </a>
            <a href="/" className="h-8 flex items-center px-2 text-sm gap-x-2 rounded text-gray-600 border-gray-100 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color hover:border-transparent">
              <BiGlobe size={18}  />
              Türkçe (TR)
            </a>
          </nav>
        </div>

      </div>
    </div>
  )
}
