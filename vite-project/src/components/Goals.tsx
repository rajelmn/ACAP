// import { 
//   FaHands, FaWater, FaSeedling, FaBriefcase, 
//   FaGraduationCap, FaTools, FaAward, FaClinicMedical, 
//   FaBalanceScale, FaPills 
// } from 'react-icons/fa';

// // Goal component with props
// export default function Goal({ title, iconType }: {title: string ,iconType: string}) {
//   // Map of icon types to their components
//   const getIcon = (type: string) => {
//     const iconMap = {
//       food: <FaHands />,
//       water: <FaWater />,
//       agriculture: <FaSeedling />,
//       business: <FaBriefcase />,
//       education: <FaGraduationCap />,
//       craft: <FaTools />,
//       scholarship: <FaAward />,
//       clinic: <FaClinicMedical />,
//       legal: <FaBalanceScale />,
//       health: <FaPills />
//     };
    
//     return iconMap[type] || <FaGraduationCap />;
//   };

//   return (
//     <div className="card p-6 rounded-lg border border-gray-700 hover:border-[#d0940a] transition-all duration-300 bg-[#1a1515]">
//                                 <div className="flex items-start gap-4">
//                                     <div className="p-3 bg-[#1d1818] rounded-lg">
//                                         <span className="text-[#d0940a] text-3xl">
//                                             {getIcon(iconType)}
//                                         </span>
//                                     </div>
//                                     <div className="flex-1">
//                                         <h2 className="text-xl font-semibold text-white mb-2">
//                                             {t("programs.education.title")}
//                                         </h2>
//                                         <p className="text-gray-300 text-sm">
//                                             {t("programs.education.description")}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//   );
// }


