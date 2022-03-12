import { Header } from './components/Header'
import Mosaic_1 from './components/Mosaics/Mosaic_1'
import Mosaic_2 from './components/Mosaics/Mosaic_2'
import Mosaic_3 from './components/Mosaics/Mosaic_3'
import Paragraph from './components/Paragraph'

export default function App () {
  return (
    <>
      <Header />
      <nav className="flex list-none gap-8 py-4 px-10 font-bold text-sm" >
        <li><a href="#" className="text-[#fd5948]" >About</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Apprenticeship</a></li>
      </nav>
      <main className="w-full m-auto" >
        <section className="w-full h-screen hero-image grid place-items-center">
          <h1 className="text-9xl text-[#fd5948]" >Ableton</h1>
        </section>
        <section className="max-w-2xl py-40 m-auto grid place-items-center gap-8" >
          <p className="font-bold text-3xl" >We make <span className="text-blue-800" >Live</span>, <span className="text-blue-800" >Push</span> and <span className="text-blue-800" >Link</span> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</p>
          <p>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
        </section>
        <Mosaic_1 />
        <Paragraph
          first={ 'Making music isn\'t easy.It takes time, effort, and learning.But when you\'re in the flow, it\'s incredibly rewarding.' }
          second={ 'We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.' }
        />
        <section className='max-w-2xl m-auto grid gap-2 py-4' >
          <img
            src="https://ableton-production.imgix.net/about/poster-juanpe.jpg"
          />
          <small className='font-bold' >Why Ableton - Juanpe Bolivar</small>
        </section>
        <Paragraph
          first={ 'We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.' }
          second={ 'Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.' }
        />
        <Mosaic_2 />
        <Paragraph first={ 'We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.' } second={ 'Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We\'ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don\'t always agree with each other, but opinion and debate are valued and openly encouraged.' } />
        <section className='w-full h-screen grid place-items-center' >
          <img src="https://ableton-production.imgix.net/about/poster-meet-the-makers.jpg?auto=format&fit=crop&fm=jpg&ixjsv=1.1.3&w=1138" />
        </section>
        <Paragraph
          first={ 'We\'re passionate about what we do, but we\'re equally passionate about improving who we are.' }
          second={ 'We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.' }
          third={ 'Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.' }
        />
        <Mosaic_3 />
      </main>
    </>
  )
}
