import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen gap-4 p-4'>
      <div className='font-medium'>Afta Business</div>
      <div className='max-w-lg text-3xl font-bold text-center'>
        Exciting Developments Underway!
      </div>

      <div className='max-w-lg text-center'>
        Our website is currently undergoing enhancements to offer you an even
        better experience. We appreciate your patience and look forward to
        unveiling our upgraded platform soon.
      </div>
      <div className='max-w-lg text-sm text-center opacity-70'>
        Stay tuned for a new and improved journey.
      </div>
    </main>
  )
}
