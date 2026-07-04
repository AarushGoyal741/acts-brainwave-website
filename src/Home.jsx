import myLogo from './assets/logos/logo2.png'
import tyre from './assets/stickers/tyre.png'
import spray from './assets/stickers/spray.png'
import spark from './assets/stickers/sparkblaze3.png'
import pose from './assets/stickers/pose.png'
import keepout from './assets/stickers/keepout.png'
import crown from './assets/stickers/crown.png'
import punk from './assets/stickers/punk.png'
import caution from './assets/stickers/caution.png'
import tag from './assets/stickers/green.png'
import register from './assets/images/register.png'
import join from './assets/images/joincomm.png'
import biglogo from './assets/logos/biglogo.png'
import coin from './assets/stickers/coin-half.png'
import smile from './assets/stickers/smile.png'
import lightning from './assets/stickers/lightning.png'
import specialdeal from './assets/stickers/specialdeal.png'
import triangle from './assets/stickers/skull_triangle.png'
import wheel from './assets/stickers/wheel.png'
import spark2 from './assets/stickers/sparkblaze2.png'
import check from './assets/stickers/check.png'
import qrcode from './assets/stickers/QRcode.png'
import timerbg from './assets/images/timerbg.png'
import date from './assets/images/date.png'
import "./index.css"

export default function Home() {
  return (
    <div>
            <div className='relative'>
                <img className='absolute h-27 -right-9 lg:-right-1 lg:h-50 popup' src={wheel}/>
                <img className='absolute h-20 left-31 lg:left-109 lg:h-38 popup' src={specialdeal}/>
                <img className='absolute h-13 lg:left-220 lg:h-28 lg:-top-9 popup' src={lightning}/>
                <img className='absolute h-32 top-214 left-37 lg:left-110 lg:top-175 lg:h-50 popup' src={spark2}/>
                <img className='absolute h-17 top-28 left-18 lg:top-29 lg:left-52 lg:h-27 popup' src={spark}/>
                <img className='absolute h-26 top-190 lg:top-126 lg:h-51 popup' src={check}/>
                <img className='absolute h-22 top-179 -right-8 lg:top-129 lg:-right-1 lg:h-31 popup' src={qrcode}/>
                <img className='absolute h-30 top-36 rotate-6 -right-9 lg:top-63 lg:-rotate-44 lg:-right-20 lg:h-51 popup' src={triangle}/>
                <img className='absolute h-40 top-57 -left-4 lg:top-60 lg:h-57 lg:-left-8 popup' src={coin}/>
                <img className='absolute h-16 top-163 left-35 lg:top-160 lg:left-220 lg:h-22 popup' src={join}/>
                <img className='absolute h-19 top-126 left-11 lg:top-123 lg:left-111 lg:h-39 popup' src={timerbg}/>
                <img className='absolute h-9 top-121 left-40 lg:h-16 lg:top-117 lg:left-172 popup' src={date}/>
                <img className='absolute -rotate-10 top-212 -right-8 h-29 lg:h-60 lg:-right-20 lg:top-165 popup' src={smile}/>
                <img className='absolute top-70 left-90 h-22 lg:top-23 lg:left-298 lg:h-43 popup' src={crown}/>
                <img className='absolute top-84 left-20 w-79 h-34 block lg:hidden fade-in' src={myLogo}/>
                <img className='absolute top-39 left-114 h-72 hidden lg:block fade-in' src={biglogo}/>
                <img className='absolute -rotate-11 top-168 right-2 w-11 lg:top-112 lg:right-19 lg:w-16 popup' src={pose}/>
                <img className='absolute top-148 left-35 h-16 lg:top-160 lg:left-125 lg:h-22 popup' src={register}/>
                <img className='absolute h-36 -top-6 -left-27 lg:-left-30 lg:-top-7 lg:h-65' src={keepout}/>
                <img className='absolute top-201 -left-6 h-41 lg:h-73 lg:-left-11 lg:top-147 popup' src={spray}/>
                <img className='absolute right-1 -top-12 h-34 lg:right-19 lg:-top-31 lg:h-75 popup' src={punk}/>
                <img className='absolute max-w-118 h-13 top-230 block lg:hidden popup' src={caution}/>
                <img className='absolute hidden lg:block lg:top-200 lg:w-450 lg:h-23 popup' src={caution}/>
                <img className='absolute w-13 left-6 top-154 lg:top-114 lg:left-58 lg:w-19 popup' src={tag}/>
            </div>
        </div>
  );
}