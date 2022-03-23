export default function Mosaic3 () {
  return (
    <section className='w-full h-screen grid place-items-center grid-cols-12 relative'>
      <img
        src='https://ableton-production.imgix.net/about/photo-6-a.jpg'
        className='col-start-2 col-span-4 row-start-1 z-10'
      />
      <div
        className='w-full h-full bg-[#d5b3ff] row-start-1 col-start-3 col-span-8 py-8'
      />
      <img
        src='https://ableton-production.imgix.net/about/photo-7.jpg'
        className='col-start-8 col-span-5 row-start-1 z-10 h-full py-[10%]'
      />
    </section>
  )
}
