export default function Mosaic4() {
  return (
    <section className='grid grid-cols-2 px-[10%]'>
      <img
        src='https://ableton-production.imgix.net/about/photo-8.jpg?fit=crop&crop=right'
        className='h-full'
      />
      <div className='grid bg-[#b1c5ff] p-[20%] gap-8'>
        <p className='text-3xl'>
          We're really proud of the work we've done so far. But there's so much
          more to come. If you'd like to be a part of it, please join us.
        </p>
        <span className='font-bold text-3xl text-blue-800'>
          See latest jobs &gt;
        </span>
      </div>
    </section>
  )
}
