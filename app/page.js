import Image from "next/image";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main>
<section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
  <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
    <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
      A <span className="font-semibold">Crafting Visuals</span>,Curating Content, Coding Solutions <br className="hidden lg:block" /> Where Creativity Meets Innovation using <span className="font-semibold underline decoration-primary motion">Sharma&apos;sWEB</span>
    </h1>
    <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
    Bringing ideas to life with stunning designs.<br className="hidden lg:block" />Let&apos;s create digital experiences that inspire and innovate!&quot;</p>
    <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
      <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
        <input type="search" name="query" placeholder="Search Components" required="required" className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />
        <button type="submit" className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>
    </div>
  </div>
  <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
    <Image src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
  </div>
</section><section>
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800">Pricing Plans</h2>
          <p className="mt-4 text-lg text-gray-600">Choose the plan that suits you best</p>
        </div>
        <div className="flex flex-wrap justify-center">
          {/* Basic Plan */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800">Basic</h3>
              <p className="mt-4 text-gray-600">$10/month</p>
              <ul className="mt-6">
                <li className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Video Course
                </li>
                <li className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Notes
                </li>
                <li className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  One Free Domain
                </li>
              </ul>
              <button className="mt-6 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/70 transition duration-300">Choose Plan</button>
            </div>
          </div>
          {/* Standard Plan */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800">Standard</h3>
              <p className="mt-4 text-gray-600">$20/month</p>
              <ul className="mt-6">
                <li className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                 Video Course
                </li>
                <li className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  2 Free Domains
                </li>
                <li className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  1 Project
                </li>
              </ul>
              <button className="mt-6 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/70 transition duration-300">Choose Plan</button>
            </div>
          </div>
          {/* Premium Plan */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800">Premium</h3>
              <p className="mt-4 text-gray-600">$30/month</p>
              <ul className="mt-6">
                <li className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Video Course
                </li>
                <li className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Live Doubt Solving
                </li>
                <li className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  5 Amazing Projects
                </li>
              </ul>
              <button className="mt-6 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/70 transition duration-300">Choose Plan</button>
            </div>
          </div>
        </div>
      </div>
    </section>
</section>

<section><section className="bg-slate-950 py-12">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-semibold text-white animate-bounce">Welcome to Our Service</h2>
      <p className="mt-4 text-lg text-white animate-fade-in">We provide the best solutions for your needs</p>
    </div>
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-800">Graphic Designing</h3>
          <p className="mt-4 text-gray-600">This feature is amazing and will greatly benefit your experience on our website. </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-800">Content Creation</h3>
          <p className="mt-4 text-gray-600">Our users love this feature for its efficiency and ease of use. Imporve Thinking and Explore creativity. </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-800">Genrative AI</h3>
          <p className="mt-4 text-gray-600">This feature sets us apart from the competition with its unique capabilities. </p>
        </div>
      </div>
    </div>
  </div>
</section>
</section><section className="bg-gray-800 py-12">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-semibold text-white animate-pulse">Top YouTube Channel Videos</h2>
      <p className="mt-4 text-lg text-white animate-fade-in">Check out our latest and greatest video content</p>
    </div>
    <div className="flex justify-center space-x-4">
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <iframe className="w-full h-64 md:h-96" src="https://www.youtube.com/embed/PjQ73zlMRhI?si=lTLuTziXzi-XiECe" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <iframe className="w-full h-64 md:h-96" src="https://www.youtube.com/embed/xycPZ94C6lk?si=6mQLfhQx7vC_drqV" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <iframe className="w-full h-64 md:h-96" src="https://www.youtube.com/embed/yRL09WCkDwo?si=v0pLLZaJd9VicxKd" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}