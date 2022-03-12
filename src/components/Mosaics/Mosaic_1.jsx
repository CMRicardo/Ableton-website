export default function Mosaic_1 () {
  return (
    <section className="grid grid-cols-12 h-screen relative" >
      <div
        className="w-full h-full py-[10%] grid row-start-1 place-items-center col-start-2 col-span-5 z-10"
      >
        <img
          className="min-h-full"
          src="https://ableton-production.imgix.net/about/photo-1.jpg"
        />
      </div>
      <div
        className="bg-[#fbffa7] w-full h-full place-items-center grid row-start-1 col-start-6 col-span-7 py-[10%]"
      >
        <img
          className="max-w-md"
          src="https://ableton-production.imgix.net/about/photo-2.jpg"
        />
      </div>
    </section>
  )
}
