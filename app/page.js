import { services } from '@/constants'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-start min-h-screen overflow-x-hidden max-w-screen'>
      <div className='relative flex flex-col items-center justify-start w-full max-h-[90vh] min-h-[90vh] px-4 overflow-hidden text-white'>
        <div className='relative z-0 flex flex-col justify-between flex-1 w-full max-w-5xl'>
          <div className='flex flex-col justify-between gap-4 py-8 pb-4 border-b-2 lg:flex-row border-b-white/20'>
            <div className=''>
              <span className='text-3xl font-bold'>Afta</span>{' '}
              <span className='opacity-75'>Business</span>
            </div>
            {/* <div className='flex items-center justify-between w-full gap-4 lg:justify-end'>
              <div>About</div>
              <div>Services</div>
              <div>Contact</div>
            </div> */}
          </div>
          <div className='flex flex-col items-start justify-end flex-1 w-full max-w-5xl gap-4 pb-36 lg:pb-48'>
            <div className='text-4xl font-bold md:text-5xl lg:text-6xl'>
              Discover Limitless Possibilities with Afta !!
            </div>
            <div className='text-base font-medium opacity-75 md:text-lg lg:text-xl lg:w-3/4'>
              Your Gateway to Elevated Living - From Exclusive Residences to
              Seamless Travel, Afta Redefines Excellence in Every Experience.
            </div>
          </div>
          <div className='absolute bottom-0 right-0 mb-4 ml-auto origin-bottom-right scale-50 lg:scale-100 w-52 aspect-square'>
            <Image
              src='/mark.png'
              alt='landing'
              className='-z-[2] absolute top-0 left-0 object-cover w-full h-full animate-spin-slow'
              fill
            />
            <Image
              src='/arrow.png'
              alt='landing'
              className='-z-[2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              width={36}
              height={36}
            />
          </div>
        </div>
        <Image
          src='/landing.png'
          fill
          alt='landing'
          className='-z-[2] absolute top-0 left-0 object-cover w-full h-full'
        />
      </div>
      <div className='flex flex-col w-full max-w-5xl gap-8 px-8 py-16'>
        <div className='flex flex-col gap-4 md:flex-row'>
          <div className='flex-[0.3] text-2xl font-bold md:text-3xl lg:text-4xl'>
            About
          </div>
          <div className='flex-[0.7] md:text-lg flex flex-col gap-4'>
            <span>
              At Afta, we embark on a mission to transform ordinary moments into
              extraordinary memories. Rooted in a commitment to excellence, we
              seamlessly weave together the realms of travel, residential,
              corporate real estate, property interiors and exteriors, farm
              management, horticulture, landscaping, and premium car services.
            </span>
            <span>
              With a foundation built on trust, innovation, and a profound
              understanding of diverse lifestyles, Afta stands as a beacon of
              sophistication. Join us in this transformative adventure, where
              every detail is crafted to exceed expectations and elevate your
              lifestyle to new heights. Welcome to Afta – Where Extraordinary
              Begins.
            </span>
          </div>
        </div>
        <div
          className='flex flex-col grid-cols-1 grid-rows-2 gap-4 lg:grid lg:h-56 lg:grid-rows-1 lg:grid-cols-3'
          style={{ aspectRatio: '4/1' }}
        >
          <div className='flex flex-col col-span-2 gap-2 font-medium'>
            <img
              src='/corporate.jpg'
              alt=''
              className='object-cover w-full h-48 lg:h-full rounded-xl'
            />
            <div>Corporate</div>
          </div>
          <div className='flex flex-col items-end gap-2 font-medium'>
            <img
              src='/plane.jpg'
              alt=''
              className='object-cover w-full h-48 lg:h-full rounded-xl'
            />
            <div>Travel</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full max-w-5xl gap-8 px-8 py-16'>
        <div className='text-2xl font-bold md:text-3xl lg:text-4xl'>
          What We're Good At !!
        </div>
        <div className='flex flex-col divide-y'>
          {services.map((ser, index) => (
            <div className='flex flex-col grid-cols-1 gap-2 py-8 lg:gap-8 lg:grid place-content-center lg:grid-cols-layout'>
              <div className='text-xl font-medium rounded-full opacity-50 place-items-center'>
                0{index + 1}
              </div>
              <div className='text-2xl font-medium md:text-3xl'>
                {ser.service}
              </div>
              <div className='md:text-lg opacity-80'>{ser.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex flex-col items-center justify-start w-full min-h-[50vh] px-4 overflow-hidden text-white'>
        <div className='flex flex-col items-start justify-between flex-1 w-full max-w-5xl gap-4 py-16'>
          <div className='text-4xl font-bold md:text-5xl lg:text-6xl'>
            Let's Grow Together..
          </div>
          <div className='flex flex-col gap-4'>
            <div className='text-base font-medium md:text-lg lg:text-xl lg:w-3/4'>
              Afta Business
            </div>
            <div>
              Contact Us at <b>prettisk@aftabusiness.com</b> or{' '}
              <b>ashokk@aftabusiness.com</b>
            </div>
            <div>© Afta Business 2024</div>
          </div>
        </div>
        <Image
          src='/footer.png'
          fill
          alt='landing'
          className='-z-[2] absolute top-0 left-0 object-cover w-full h-full'
        />
      </div>
    </main>
  )
}
