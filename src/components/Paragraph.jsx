export function Paragraph ({ first = '', second = '', third = '' }) {
  return (
    <section className='max-w-2xl py-40 m-auto grid place-items-center gap-8 text-lg'>
      {first && <p className='font-bold text-3xl'>{first}</p>}
      {second && <p>{second}</p>}
      {third && <p>{third}</p>}
    </section>
  )
}
