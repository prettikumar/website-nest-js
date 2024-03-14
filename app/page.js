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
          src='/land.png'
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
      <div className='flex flex-col w-full max-w-5xl gap-8 px-8 pt-16'>
        <div className='text-2xl font-bold md:text-3xl lg:text-4xl'>
          What We're Good At !!
        </div>
      </div>
      <div className='flex flex-col w-full max-w-5xl grid-cols-5 gap-4 px-8 py-16 md:grid'>
        <div
          key={services[6].service}
          className={`relative group flex flex-col sm:flex-row gap-2 p-4 md:p-6  bg-slate-100 border-slate-200 border shadow-sm rounded-xl overflow-hidden col-span-5`}
        >
          <div className='flex flex-col flex-1 gap-2'>
            <div className='text-xl font-medium'>{services[6].service}</div>
            <div className={`text-sm md:w-1/2 mb-2 md:mb-24`}>
              {services[6].description}
            </div>
          </div>
          <img
            className={`flex-1 md:absolute transition-all right-0 md:rotate-12 rounded-lg md:max-w-72 -bottom-10 md:group-hover:-bottom-5 md:group-hover:rotate-6 md:group-hover:scale-110`}
            src={'/' + '7' + '.png'}
            alt={services[6].service}
          />
        </div>
        {services.slice(0, services.length - 1).map((ser, index) => (
          <div
            key={ser.service}
            className={`relative group flex flex-col sm:flex-row gap-2 p-4 md:p-6  bg-slate-100 border-slate-200 border shadow-sm rounded-xl overflow-hidden
              ${
                Math.floor(index / 2) % 2 === 0
                  ? index % 2 === 0
                    ? 'col-span-3'
                    : 'col-span-2'
                  : index % 2 === 0
                  ? 'col-span-2'
                  : 'col-span-3'
              }`}
          >
            <div className='flex flex-col flex-1 gap-2'>
              <div className='text-xl font-medium'>{ser.service}</div>
              <div
                className={`text-sm mb-2 md:mb-0 ${
                  Math.floor(index / 2) % 2 === 0
                    ? index % 2 === 0
                      ? 'md:max-w-80'
                      : 'md:max-w-44'
                    : index % 2 === 0
                    ? 'md:max-w-44'
                    : 'md:max-w-80'
                }`}
              >
                {ser.description}
              </div>
            </div>
            <img
              className={`flex-1 md:absolute transition-all bottom-0 right-0 md:rotate-12 rounded-lg ${
                Math.floor(index / 2) % 2 === 0
                  ? index % 2 === 0
                    ? 'md:max-w-48 -bottom-10 md:group-hover:-bottom-5 md:group-hover:rotate-6 md:group-hover:scale-110'
                    : 'md:max-w-36 -bottom-10 md:group-hover:-bottom-0 md:group-hover:rotate-6 md:group-hover:scale-110'
                  : index % 2 === 0
                  ? 'md:max-w-36 -bottom-10 md:group-hover:-bottom-0 md:group-hover:rotate-6 md:group-hover:scale-110'
                  : 'md:max-w-48 -bottom-10 md:group-hover:-bottom-5 md:group-hover:rotate-6 md:group-hover:scale-110'
              }`}
              src={'/' + (index + 1) + '.png'}
              alt={ser.service}
            />
          </div>
        ))}
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
