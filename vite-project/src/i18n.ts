import i18n from "i18next";
import { initReactI18next} from "react-i18next";
// ls
// import LanguageDetector from "i18next-browser-languagedetector";


// const resources = {
//   fr: {
//     home: {
//       message: "testing this shit"
//     }
//   },
//   en: {
//     translation: {
//       message: "test"
//     }
//   },
//   ar: {
//     home: {
//       message: "hey bro"
//     }
//   }
// }

const resources = {
    en: {
      translation: {
        header: {
          home: "home",
          blog: "blog",
          aboutUs: "About us",
          contact: "Contact us"
        },
        home: {
          mainMessage: "The power to Choose in a",
          smallText: "child's hands",
        },
        project: "Our projects",
        donation: {
          button: "Donate",
          header: "Donate now",
        },
        
        programs: {
          education: {
            title: "Education",
            description: "We provide high-quality education resources for children in need.",
          },
          mentorship: {
            title: "Mentorship",
            description: "Our mentorship programs guide children towards a brighter future.",
          },
          resources: {
            title: "Resources",
            description: "A library of materials to support children's learning and development.",
          },
          aboutUs: {
            title: "Who we are",
            definition:
              "A.C.A.P (Association Chinguitii Aide pour les Pauvres) is a non-profit organization dedicated to improving the lives of those in need. Our mission is to bring hope and support to underprivileged communities by providing essential services such as education, healthcare, clean water, and sustainable development projects. At A.C.A.P, we believe that everyone deserves access to basic necessities, quality education, and proper medical care. That’s why we work tirelessly to build schools, pharmacies, and water supply systems, ensuring that vulnerable communities have the resources they need to thrive. Our team is committed to creating a better future, one project at a time. Through collaboration with local and international partners, we aim to make a lasting impact and uplift those who need it most. Join us in making a difference—together, we can build a brighter future for all.",
          },
        },
      },
      },
  
    fr: {
      translation: {
        header: {
          home: "Accueil",
          blog: "Blog",
          aboutUs: "À propos de nous",
          contact: "Contactez-nous"
        },
        
        home: {
          mainMessage: "Le pouvoir de choisir dans",
          smallText: "les mains d'un enfant",
        },
        projects: "Nos projets",
        donation: {
          button: "Faire un don",
          header: "Faites un don maintenant",
        },
        programs: {
          education: {
            title: "Éducation",
            description: "Nous fournissons des ressources éducatives de haute qualité aux enfants dans le besoin.",
          },
          mentorship: {
            title: "Mentorat",
            description: "Nos programmes de mentorat guident les enfants vers un avenir meilleur.",
          },
          resources: {
            title: "Ressources",
            description: "Une bibliothèque de matériaux pour soutenir l’apprentissage et le développement des enfants.",
          },
          aboutUs: {
            title: "Qui nous sommes",
            definition:
            "A.C.A.P (Association Chinguitii Aide pour les Pauvres) est une organisation à but non lucratif dédiée à l'amélioration de la vie des personnes dans le besoin. Notre mission est d'apporter espoir et soutien aux communautés défavorisées en fournissant des services essentiels tels que l'éducation, les soins de santé, l'eau potable et des projets de développement durable. Chez A.C.A.P, nous croyons que tout le monde mérite un accès aux besoins de base, à une éducation de qualité et à des soins médicaux appropriés. C'est pourquoi nous travaillons sans relâche pour construire des écoles, des pharmacies et des systèmes d'approvisionnement en eau, garantissant que les communautés vulnérables disposent des ressources nécessaires pour prospérer. Notre équipe est déterminée à créer un avenir meilleur, un projet à la fois. Grâce à la collaboration avec des partenaires locaux et internationaux, nous visons à avoir un impact durable et à élever ceux qui en ont le plus besoin. Rejoignez-nous pour faire la différence – ensemble, nous pouvons bâtir un avenir plus radieux pour tous.",
          },
        },
      },
    },
    
    ar: {
      translation: {
        
        header: {
          home: "الرئيسية",
          blog: "المدونة",
          aboutUs: "معلومات عنا",
          contact: "اتصل بنا"
        },
        home: {
          mainMessage: "القوة للاختيار في",
          smallText: "يد الطفل",
        },
        projects: "مشاريعنا",
        donation: {
          button: "تبرع",
          header: "تبرع الآن",
        },
        programs: {
          education: {
            title: "التعليم",
            description: "نوفر موارد تعليمية عالية الجودة للأطفال المحتاجين.",
          },
          mentorship: {
            title: "الإرشاد",
            description: "برامج الإرشاد لدينا توجه الأطفال نحو مستقبل أكثر إشراقًا.",
          },
          resources: {
            title: "الموارد",
            description: "مكتبة من المواد لدعم تعلم الأطفال وتطورهم.",
          },
          aboutUs: {
            title: "من نحن",
            definition:
              "A.C.A.P (جمعية شنقيط للمساعدة للفقراء) هي منظمة غير ربحية مكرسة لتحسين حياة المحتاجين. مهمتنا هي جلب الأمل والدعم للمجتمعات المحرومة من خلال توفير الخدمات الأساسية مثل التعليم والرعاية الصحية والمياه النظيفة ومشاريع التنمية المستدامة. نحن في A.C.A.P نؤمن بأن للجميع الحق في الوصول إلى الضروريات الأساسية والتعليم الجيد والرعاية الطبية المناسبة. لذلك نعمل بلا كلل لبناء المدارس والصيدليات وأنظمة إمداد المياه، مما يضمن أن المجتمعات الضعيفة لديها الموارد التي تحتاجها للازدهار. يلتزم فريقنا بخلق مستقبل أفضل، مشروعًا واحدًا في كل مرة. من خلال التعاون مع شركاء محليين ودوليين، نسعى إلى تحقيق تأثير دائم ورفع مستوى من هم في أمس الحاجة. انضم إلينا في صنع الفرق – معًا، يمكننا بناء مستقبل أكثر إشراقًا للجميع.",
          },
        },
      },
    }
  };
    
i18n.init({
  resources,
  debug: true,
  fallbackLng: 'en',  // Add fallback language
  lng: 'en',
  interpolation: {
      escapeValue: false,
  }
})
export default i18n