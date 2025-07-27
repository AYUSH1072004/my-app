import React from 'react'
import hero_img from '../assets/hero.png'
import collection1 from '../assets/collection-1.png'
import collection2 from '../assets/collection-2.png'
import collection3 from '../assets/collection-3.png'
import p1 from '../assets/popular-1.png'
import p2 from '../assets/popular-2.png'
import about from '../assets/about.png'
import Image from 'next/image'
import 'remixicon/fonts/remixicon.css';

const Home = () => {
  return (
    <>
      {/* home-header  */}
      <div id="hero" className='section container relative mt-16 sm:mt-20 py-10 xl:min-h-screen'>

        <div className='absolute top-[40%] sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 md:top-[45%] lg:top-1/2'>

          <p className='text-[124px] leading-none sm:text-[170px] font-black text-[#241826] opacity-50'>
            FRA <br />
            GRA <br />
            NCE
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='text-[45px] sm:text-[70px] md:text-[90px] lg:text-[120px] xl:text-[180px] font-bold uppercase'>Celestia.</div>
        </div>

        <div className='relative -mt-16 sm:-mt-24 md:-mt-30 lg:mt-[-8rem]'>
          <Image src={hero_img} alt="" className='w-full mx-auto md:w-[450px] lg:w-[500px]' />
          <p className='absolute bottom-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-DancingScript text-[15px] sm:text-[20px] md:text-[25px] lg:text-[50px]'>made of stardust</p>
        </div>
        <div className='flex flex-col items-center w-full gap-5 md:justify-between md:gap-2 md:flex-row'>
          <p className='max-w-80'>
            Celestia is a unique perfume, drawn from the rarest meteorites, and is the only one to be sourced from the stars
          </p>
          <button className='btn'>TRY NOW</button>
          <p className='max-w-80 md:text-right'>
            Celestia is a unique perfume, drawn from the rarest meteorites, and is the only one to be sourced from the stars
          </p>
        </div>
      </div>

      {/* home-collection  */}
      <section id='collection' className='section bg-sectionColor'>
        <div className='container'>
          <div className='flex flex-col items-center gap-3 text-center mb-20 md:mb-28'>
            <h2 className='title text-titleColor'>Collection</h2>
            <p className='subtitle max-w-2xl'>Things you need to know</p>
          </div>

          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-8 px-3'>
            {/* card-1  */}
            <div className='relative bg-cardColor rounded-xl px-10 py-20'>
              <Image src={collection1} alt="collection1" className='w-40 absolute -top-20 left-0 cursor-pointer img' />
              <div>
                <h2 className='cardtitle'>Real Stardust</h2>
                <p>We've sourced the finest meteorites and have extracted the very essence of the universe.</p>
              </div>
              <div className='bg-titleColor w-20 h-20 rounded-full flex items-center justify-center text-2xl border-8 border-sectionColor
                        absolute -right-3 -bottom-3 cursor-pointer'>
                <i className='ri-arrow-right-line'></i>
              </div>
            </div>


            {/* card-2 */}
            <div className='relative bg-cardColor rounded-xl px-10 py-20'>
              <Image src={collection2} alt="collection1" className='w-40 absolute -top-20 left-0 cursor-pointer img' />
              <div>
                <h2 className='cardtitle'>Real Stardust</h2>
                <p>We've sourced the finest meteorites and have extracted the very essence of the universe.</p>
              </div>
              <div className='bg-titleColor w-20 h-20 rounded-full flex items-center justify-center text-2xl border-8 border-sectionColor
                        absolute -right-3 -bottom-3 cursor-pointer'>
                <i className='ri-arrow-right-line'></i>
              </div>
            </div>


            {/* card-3  */}
            <div className='relative bg-cardColor rounded-xl px-10 py-20'>
              <Image src={collection3} alt="collection1" className='w-40 absolute -top-20 left-0 cursor-pointer img' />
              <div>
                <h2 className='cardtitle'>Real Stardust</h2>
                <p>We've sourced the finest meteorites and have extracted the very essence of the universe.</p>
              </div>
              <div className='bg-titleColor w-20 h-20 rounded-full flex items-center justify-center text-2xl border-8 border-sectionColor
                        absolute -right-3 -bottom-3 cursor-pointer '>
                <i className='ri-arrow-right-line'></i>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* home-popular  */}
      <section id="popular">
        <div className='section container'>
          <div className='flex flex-col items-center gap-3 text-center mb-20 md:mb-28'>
            <h2 className='title text-titleColor'>Popular</h2>
            <p className='subtitle max-w-2xl'>Things you need to know</p>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-5 lg:gap-10'>
            <div className='bg-cardColor w-full py-5 px-3 md:py-8 md:px-10 xl:py-10 xl:px-12 flex justify-between items-center
                        md:w-1/2'>
              <div className='w-3/5'>
                <div className='max-w-56 xl:max-w-full'>
                  <p className='text-xs xl:text-base pb-2'>TOP STAFF PICK</p>
                  <p className='cardtitle2'>Best Collection</p>
                  <div className='my-3 md:my-5'>
                    Use code: LIGHTCODE Get <br />
                    25% Off for all items!
                  </div>
                  <button className='btn2 mt-5'>Shop now</button>
                </div>
              </div>

              <div className="w-2/5">
                <Image src={p1} alt="" className='p-img' />
              </div>

            </div>

            <div className='bg-cardColor w-full py-5 px-3 md:py-8 md:px-10 xl:py-10 xl:px-12 flex justify-between items-center
                        md:w-1/2'>
              <div className='w-3/5'>
                <div className='max-w-56 xl:max-w-full'>
                  <p className='text-xs xl:text-base pb-2'>TOP STAFF PICK</p>
                  <p className='cardtitle2'>Best Collection</p>
                  <div className='my-3 md:my-5'>
                    Use code: LIGHTCODE Get <br />
                    25% Off for all items!
                  </div>
                  <button className='btn2 mt-5'>Shop now</button>
                </div>
              </div>

              <div className="w-2/5">
                <Image src={p2} alt="" className='p-img' />
              </div>

            </div>
          </div>

          <div className="bg-cardColor text-center mt-5 lg:mt-10 py-10 px-5 w-full" id='card3'>

            <div className='sm:max-w-72 mx-auto'>
              <p className='cardtitle2'>Collection Arrived</p>
              <p>You have no items & Are you ready to use? come & shop with us!</p>
              <p>Price from: <span className="text-2xl font-bold">$45.00</span></p>
              <button className="btn2 mt-10">Shop now</button>
            </div>
          </div>
        </div>
      </section>

      {/* home-banner  */}
      <section id="banner" className='section  bg-cardColor'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row justify-between gap-10'>

            <div className='flex-1 flex gap-5 max-w-md'>
              <div className='text-5xl'>
                <i className='ri-plane-line'></i>
              </div>
              <div className='space-y-4'>
                <p className='uppercase font-bold'>EU Free Delivery</p>

                <p className='leading-relaxed'>Free Delivery on all order from EU
                  with price more than $90.00</p>
              </div>
            </div>

            <div className='flex-1 flex gap-5 max-w-md'>
              <div className='text-5xl'>
                <i className='ri-arrow-go-back-line'></i>
              </div>
              <div className='space-y-4'>
                <p className='uppercase font-bold'>Money Guarantee</p>

                <p className='leading-relaxed'>30 Days money back guarantee
                  no question asked!</p>
              </div>
            </div>

            <div className='flex-1 flex gap-5 max-w-md'>
              <div className='text-5xl'>
                <i className='ri-lock-2-line'></i>
              </div>
              <div className='space-y-4'>
                <p className='uppercase font-bold'>Online Support 24/7</p>

                <p className='leading-relaxed'>We're here to support to you.
                  Let's shopping now!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {home-about} */}
      <section id="about" className='section bg-sectionColor'>
        <div className='container'>
          <div className='flex flex-col items-center gap-3 text-center mb-20 md:mb-28'>
            <h2 className='title text-titleColor'>About Celestia</h2>
            <p className='subtitle max-w-2xl'>Things you need to know</p>
          </div>
          <div className='flex flex-col md:flex-row items-start xl:items-center gap-5 lg:gap-10 mt-20'>
            <div className='w-full md:w-1/2'>
              <Image src={about} alt="" />
            </div>
            <div className='w-full md:w-1/2'>
              <div>
                <p className='text-xs xl:text-base'>TOP STAFF PICK</p>
                <p className='cardtitle2'>Best Collection</p>
                <p className='mt-3 md:mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus magnam, consequuntur atque, deserunt commodi eos et dolores totam repudiandae incidunt mollitia quis neque consectetur dolorum aut officiis blanditiis, maxime saepe.</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus magnam, consequuntur atque, deserunt commodi</p>
                <button className='btn2 mt-5 lg:mt-10'>Shop now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer  */}
      <footer className="section container py-10">
        <div className="flex flex-col md:flex-row items-center gap-8 ">
          <div className="w-full md:w-1/2 ">
            <p className="cardtitle">Newsletter</p>
            <p>Sign up and get exclusive offers and promotions</p>
          </div>

          <div className="w-full md:w-1/2 ">
            <div className="flex flex-col md:flex-row gap-1 ">
              <input type="email" placeholder="Your email letter" className="w-full px-5 py-3 text-bodyColor outline-none
                            " />
              <button className='btn2'>Submite</button>
            </div>
          </div>
        </div>

        <p className='text-center bottom-[-50px] relative opacity-50'>Copyright &copy; 2025 Code_With_Ayush. All rights reserved.</p>
      </footer>

    </>
  )
}

export default Home