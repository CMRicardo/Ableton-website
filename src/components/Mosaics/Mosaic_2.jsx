export default function Mosaic_2 () {
  return (
    <section className='grid grid-cols-12 relative' >
      <div className='w-full h-full py-[10%] grid place-items-center gap-32 col-span-7 row-start-1 col-start-1 bg-[#b6ffc0]' >
        <img
          src="https://ableton-production.imgix.net/about/photo-3.jpg"
          className='w-[60%]'
        />
        <img
          src="https://ableton-production.imgix.net/about/photo-4.jpg"
          className='w-[60%]'
        />
      </div>
      <div className='w-full h-full grid place-items-center col-span-5 z-10 col-start-7 row-start-1' >
        <img
          src="https://ableton-production.imgix.net/about/photo-5.jpg"
          className='w-full'
        />
      </div>
    </section>
  )
}
