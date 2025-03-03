import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
export const videos = [
    {
        title: 'TFL TOPOGRAPHICAL SKILLS TEST- HANNAH CLOSE',
        description: 'TFL TOPOGRAPHICAL SKILLS TEST',
        src: "https://player.vimeo.com/video/1061914609?h=904763b972",
    },
    {
        title: 'TFL SERU - Section 1_ London PHV Driver Licensing',
        description: 'To work as a London PHV driver, you will need to be licensed by TfL.  ',
        src: 'https://player.vimeo.com/video/1061917088?h=8ce549e275',
    },
    {
        title: 'TFL Topographical skills Test 2024 - Real Exam Question December 2023 ,sa pco',
        description: 'Master the TFL Topographical Skills Test 2024 with real exam questions from December 2023.',
        src: 'https://player.vimeo.com/video/1061917556?h=6b7fbacb0b',
    },
    {
        title: 'Real-Time Tracking Technology',
        description: 'Explore how our tracking systems provide transparency.',
        src: 'https://www.youtube.com/embed/9vtqkHMOBeE?si=L_Lyd21hwgkN2JeI',
    },
    {
        title: 'Customer Success Stories',
        description: 'Hear from our clients about their success with our services.',
        src: 'https://www.youtube.com/embed/wjHbs9TBZs8?si=ooYWN4Vcorltcv-C',
    },
    {
        title: 'Epic Motorcycle Ride',
        description: 'Join an exhilarating mountain ride on a sports bike.',
        src: 'https://www.youtube.com/embed/7qgBJj8l4N0?si=wnQzU-8Q6sMyitFH',
    },
    {
        title: 'Motorbike Adventure Vlog',
        description: 'Follow the journey of a motorbike enthusiast exploring the countryside.',
        src: 'https://www.youtube.com/embed/7qgBJj8l4N0?si=hdoCoQ33oAc-p7Ji',
    },
    {
        title: 'Motorcycle Customization',
        description: 'Watch a stunning motorcycle transformation process.',
        src: 'https://www.youtube.com/embed/9vtqkHMOBeE?si=L_Lyd21hwgkN2JeI',
    },
    {
        title: 'Motorbike Gear Review',
        description: 'An in-depth review of the latest motorcycle gear and accessories.',
        src: 'https://www.youtube.com/embed/XeLF1kapxMM?si=sUM0uMU4b7sqUL7E',
    },
    {
        title: 'Road Trip on Two Wheels',
        description: 'Experience a road trip through scenic landscapes on a motorbike.',
        src: 'https://www.youtube.com/embed/XeLF1kapxMM?si=sUM0uMU4b7sqUL7E',
    },
];



const VideoSection = () => {
  const t = useTranslations();
   const videoData = videos.slice(0,3)
  
    return (
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-10">
           {t('video.allVideo.OurVideos')} 
          </h2>
          <p className="text-black mb-10">
          {t('video.allVideo.Watch')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoData.map((video, index) => (
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

          <div className="mt-8">
          <Link
            href="/videoAll"
            className="px-4 py-2 bg-blue-200 text-black shadow-md hover:bg-blue-500 transition hover:text-white"
          >
            VIEW MORE
          </Link>
        </div>

        </div>
      </section>
    );
  };
  
  export default VideoSection;
  