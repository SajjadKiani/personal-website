import Image from 'next/image'
import authorImage from '@/public/images/authors/sajad.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Saji.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
        and i&#39;m a Frontend Devloper
        who loves blockchain technology and research. I enjoy building easy-to-use web3 solutions that combine advanced technology with good design.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 grayscale rounded-full shadow-lg'
          src={authorImage}
          alt='Sajad Kiani'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
