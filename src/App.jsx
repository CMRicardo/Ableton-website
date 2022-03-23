import { Header } from './components/Header'
import { ParagraphLinks } from './components/ParagraphLinks'
import { Paragraph } from './components/Paragraph'
import { Footer } from './components/Footer'
import { StickyNav } from './components/StickyNav'
import { lazy, Suspense } from 'react'
import { Spinner } from './components/Spinner'

const Mosaic1 = lazy(() => import('./components/Mosaics/Mosaic1'))
const Mosaic2 = lazy(() => import('./components/Mosaics/Mosaic2'))
const Mosaic3 = lazy(() => import('./components/Mosaics/Mosaic3'))
const Mosaic4 = lazy(() => import('./components/Mosaics/Mosaic4'))

export default function App () {
  return (
    <>
      <Header />
      <StickyNav />
      <main className='w-full m-auto'>
        <section className='w-full h-screen hero-image grid place-items-center'>
          <h1 className='text-9xl text-[#fd5948]'>Ableton</h1>
        </section>
        <ParagraphLinks />
        <Suspense fallback={<Spinner />}>
          <Mosaic1 />
        </Suspense>
        <Paragraph
          first={'Making music isn\'t easy.It takes time, effort, and learning.But when you\'re in the flow, it\'s incredibly rewarding.'}
          second='We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.'
        />
        <section className='max-w-2xl m-auto grid gap-2 py-4'>
          <img
            src='https://ableton-production.imgix.net/about/poster-juanpe.jpg'
          />
          <small className='font-bold'>Why Ableton - Juanpe Bolivar</small>
        </section>
        <Paragraph
          first='We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.'
          second='Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.'
        />
        <Suspense fallback={<Spinner />}>
          <Mosaic2 />
        </Suspense>
        <Paragraph first='We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.' second={'Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We\'ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don\'t always agree with each other, but opinion and debate are valued and openly encouraged.'} />
        <section className='w-full h-screen grid place-items-center'>
          <img src='https://ableton-production.imgix.net/about/poster-meet-the-makers.jpg?auto=format&fit=crop&fm=jpg&ixjsv=1.1.3&w=1138' />
        </section>
        <Paragraph
          first={'We\'re passionate about what we do, but we\'re equally passionate about improving who we are.'}
          second='We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.'
          third='Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.'
        />
        <Suspense fallback={<Spinner />}>
          <Mosaic3 />
        </Suspense>
        <Paragraph
          first={'We want our employees to love it here. Since we\'re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.'}
          second={'If you\'re joining us in Berlin, we\'ll help with relocation and paperwork. We\'ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it\'s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.'}
        />
        <Suspense fallback={<Spinner />}>
          <Mosaic4 />
        </Suspense>
        <Footer />
      </main>
    </>
  )
}
