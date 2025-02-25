import Navbar from "../components/Navbar";
import Footer from './../components/Footer';

const AboutPage = () => {
    return (
      
        <>
        <Navbar/>
        <div className="bg-white text-gray-900">
      {/* Who We Are Section */}
      <section className="text-center py-16 px-6">
        <h2 className="text-4xl font-extrabold">Who We Are</h2>
        <p className="text-lg font-medium mt-4 max-w-3xl mx-auto">
          Accelerating the private hire licence application process and delivering high-quality training to ensure first-time exam success.
        </p>
        <div className="max-w-6xl mx-auto mt-8 grid md:grid-cols-2 gap-8 text-left">
          <p>
            At London PCO Licence and Training Centre, we have supported over 500 individuals in obtaining their PHV drivers’ licence.
            Our 5+ years of expertise ensure a smooth and guided process tailored to each applicant’s needs.
          </p>
          <p>
            A private hire driver licence offers flexibility and independence. However, obtaining one requires navigating a complex application
            process, and we provide structured assistance to simplify this journey.
          </p>
          <p>
            Our comprehensive training programs align with TFL assessments, ensuring a streamlined learning experience that maximizes success rates.
          </p>
          <p>
            We leverage cutting-edge training methodologies and real-world simulations to prepare candidates effectively for TFL exams and beyond.
          </p>
        </div>
      </section>

      {/* Our Aim Section */}
      <section className="bg-orange-100 py-16 px-6 text-center">
        <h2 className="text-4xl font-extrabold">Our Aim</h2>
        <p className="text-lg mt-4 max-w-3xl mx-auto">Our commitment to excellence and what sets us apart.</p>
        <div className="max-w-6xl mx-auto mt-8 grid md:grid-cols-2 gap-8 text-left">
          <p><span className="font-bold text-orange-500">1.</span> Expediting licence applications with meticulous document processing and follow-ups.</p>
          <p><span className="font-bold text-orange-500">2.</span> Delivering an individualized learning experience tailored to different needs and skill levels.</p>
          <p><span className="font-bold text-orange-500">3.</span> Offering unlimited access to our advanced SERU software for comprehensive test preparation.</p>
          <p><span className="font-bold text-orange-500">4.</span> Providing career guidance post-licensing, helping candidates secure roles with top industry employers.</p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <h2 className="text-4xl font-extrabold">Why Choose Us?</h2>
        <div className="flex justify-center space-x-12 mt-8">
          <div className="text-orange-500 font-extrabold text-2xl">82+<br /><span className="text-lg text-gray-800">Trainees for Topographical Test</span></div>
          <div className="text-orange-500 font-extrabold text-2xl">81+<br /><span className="text-lg text-gray-800">First-Time Passes</span></div>
          <div className="text-orange-500 font-extrabold text-2xl">1+<br /><span className="text-lg text-gray-800">Expert Trainers</span></div>
          <div className="text-orange-500 font-extrabold text-2xl">0+<br /><span className="text-lg text-gray-800">Years on Market</span></div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-extrabold">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
          <div className="bg-yellow-100 p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg">Fast-Track PCO Licence Processing</h3>
            <p>Comprehensive support covering all TFL requirements under one streamlined package.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg">Personalized Digital Training</h3>
            <p>One-on-one computer-based training with real TFL exam simulations.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg">Topographical Training</h3>
            <p>Customized individual and group training sessions to master topographical skills.</p>
          </div>
          <div className="bg-red-100 p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg">Guaranteed Exam Success</h3>
            <p>Comprehensive coaching to ensure topographical test success on the first attempt.</p>
          </div>
          <div className="bg-purple-100 p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg">Expert Guidance</h3>
            <p>Highly experienced trainers guiding you through every step of the process.</p>
          </div>
          <div className="bg-pink-100 p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg">SERU Exam Training</h3>
            <p>Advanced TFL-guided software ensuring structured and effective learning.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-orange-500 text-white text-center py-16 px-6">
        <h2 className="text-4xl font-extrabold">Get in Touch</h2>
        <p className="max-w-3xl mx-auto mt-6 text-lg">
          We offer tailored guidance and efficient processing for private hire driver licences. Book your consultation today.
        </p>
        <button className="mt-6 px-8 py-3 bg-black text-white rounded-lg text-lg font-semibold">Schedule an Appointment</button>
      </section>
    </div>
      <Footer/>
      </>
    );
  };
  
  export default AboutPage;
  