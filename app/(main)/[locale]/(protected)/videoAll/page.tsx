"use client";
import { videos } from '../../../../components/Video';


const VideoAll = () => {
   
  
    return (
      <section className="py-16 bg-gray-300 text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-10">
            All Videos  
          </h2>
          <p className="text-black mb-10">
          Watch our expert-led video lessons to master the UK PCO Licence Exam. Gain in-depth knowledge, practical tips, and step-by-step guidance to help you succeed!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="text-center">
                <div className="relative w-full aspect-w-16 aspect-h-9">
                  <iframe
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
                <h3 className="text-2xl font-bold text-black mt-4">{video.title}</h3>
                <p className="text-black mt-2">{video.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    );
  };
  
  export default VideoAll;
  