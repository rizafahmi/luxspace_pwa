import { useState } from 'react';

import Modal from './Modal.js';

function Hero() {
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal(!showModal);
  }

  return (
    <section className="flex items-center hero">
      <div
        className="w-full absolute z-20 inset-0 md:relative md:w-1/2 text-center flex flex-col justify-center hero-caption"
      >
        <h1 className="text-3xl md:text-5xl leading-tight font-semibold">
          The Room <br className="" />You've Dreaming
        </h1>
        <h2 className="px-8 text-base md:px-0 md:text-lg my-6 tracking-wide">
          Kami menyediakan furniture berkelas yang
          <br className="hidden lg:block" />membuat ruangan terasa homey
        </h2>
        <div>
          <a
            href="#browse-the-room"
            className="bg-pink-400 text-black hover:bg-black hover:text-pink-400 rounded-full px-8 py-3 mt-4 inline-block flex-none transition duration-200"
          >Explore Now</a
          >
        </div>
      </div>
      <div className="w-full inset-0 md:relative md:w-1/2">
        <div className="relative hero-image">
          <div className="overlay inset-0 bg-black opacity-35 z-10"></div>
          <div className="overlay right-0 bottom-0 md:inset-0">
            <button
              className="video hero-cta focus:outline-none z-30 modal-trigger"
              onClick={handleShowModal}
            ></button>
          </div>
          <img
            src="images/content/image-section-1.png"
            alt="hero 1"
            className="absolute inset-0 md:relative w-full h-full object-cover object-center"
          />
        </div>
      </div>
      { showModal && <Modal handleShowModal={handleShowModal} />}
    </section>
  )
}

export default Hero;