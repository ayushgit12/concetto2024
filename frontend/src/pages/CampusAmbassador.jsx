import React from 'react'

const CampusAmbassador = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">

 {/* Hero Section */}
 <section className="flex flex-col-reverse md:flex-row w-full mt-2 pt-2 ">
        <div className="md:w-3/4 w-full bg-opacity-50 flex flex-col items-center justify-center p-4">
          <div className="w-full md:w-3/4 flex flex-col justify-center p-2">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 text-center md:text-left">Lead the Way:</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-orange-500 mb-4 text-center md:text-left">Become a Campus Ambassador</h3>
            <p className="text-white text-base md:text-lg mb-6 text-center md:text-left">Join the most exciting college fest of the year and represent your campus. Gain leadership skills, expand your network, and enjoy exclusive perks as a Campus Ambassador!</p>
          </div>
        </div>
        <div className="md:w-1/4 w-full flex items-center justify-center p-4">
          <div className="relative w-full md:w-auto">
            <img src="https://www.logixhunt.com/assets/imgs/ambassador1.png" alt="Smartphone" className="w-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-12 px-4 text-center ">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Why Become a Campus Ambassador?</h3>
        <p className="text-lg md:text-xl text-orange-500">
          Are you passionate about making a difference on your campus? Our Campus Ambassador Program offers a unique opportunity to showcase your leadership abilities, connect with like-minded peers, and be the face of our college fest. As an ambassador, you’ll promote events, engage with students, and gain valuable experience that will set you apart. Ready to lead your campus to greatness? Join us today!
        </p>
      </section>
      

      {/* Apply Section */}
      <section id="apply" className="container mx-auto py-12 px-4 text-center">
        <h3 className="text-2xl font-semibold mb-4">How to Apply</h3>
        <p className="text-lg text-gray-300 mb-8">
          Ready to join us? Fill out the application form to become a Campus Ambassador today!
        </p>
        <a href="/apply-for-ca" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
          Apply Now
        </a>
      </section>


    </div>
  )
}

export default CampusAmbassador