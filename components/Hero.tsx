import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 bg-white ">
        
        <h1 className="bold-52 lg:bold-88">BLessings</h1>
        <h1 className='bold-40 lg:bold-70'> Event Planner</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We strive to be a part of every milestone you celebrate, crafting unforgettable moments with ease and elegance. From weddings to corporate events, our dedicated team brings your vision to life. Let us create lasting memories, all through the convenience of a single app        
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="regular-16 lg:regular-20 ml-1">Excellent Reviews</p>
          
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Download App" 
            variant="btn_green" 
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Event</p>
              <Image src="/close.png" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Wedding.</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Date</p>
              <p className="bold-20 text-white">27-Nov-2024</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Time Remaining</p>
              <p className="bold-20 text-white">1 month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero