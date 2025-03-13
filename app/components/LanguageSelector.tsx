//  import { useTranslation } from "react-i18next";

// const LanguageSelector = () => {
//   const { i18n } = useTranslation();

//   const languages = [
//     {
//       code: "en",
//       title: "English",
//       img: "/flags/United-states_flag_icon_round.png",
//     },
//     {
//       code: "bn",
//       title: "Bengali",
//       img: "/flags/circle-flag-of-bangladesh.webp",
//     },
//     {
//       code: "ar",
//       title: "Arabic",
//       img: "/flags/sa-circle-flag.png",
//     },
//     {
//       code: "ja",
//       title: "Japanese",
//       img: "/flags/japan-flat-rounded-national-flag-icon.jpg",
//     },
//   ];

//    const handleLanguageChange = (lang) => {
//      i18n.changeLanguage(lang);
//   };

//   return (
//     <div className="flex items-center gap-3">
//       {languages.map((lang) => (
//         <label
//           key={lang.code}
//           className={`flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-full ${
//             i18n.language === lang.code
//               ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-black"
//               : ""
//           }`}
//           title={lang.title}
//         >
//           <input
//             type="radio"
//             name="language"
//             className="appearance-none"
//             checked={i18n.language === lang.code}
//             onChange={() => handleLanguageChange(lang.code)}
//           />
//           <img
//             src={lang.img}
//             className="rounded-full shadow-md transition-transform hover:scale-105"
//             alt={lang.title}
//           />
//         </label>
//       ))}
//     </div>
//   );
// };

// export default LanguageSelector;
