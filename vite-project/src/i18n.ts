import i18n from "i18next";
import { initReactI18next } from "react-i18next";
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


interface PharmacySection {
  title: string;
  treatmentTitle: string;
  preventionTitle: string;
  additionalServicesTitle: string;
  treatment: string[];
  prevention: string[];
  additionalServices: string[];
}

const resources = {
  en: {
    translation: {
      header: {
        home: "home",
        blog: "blog",
        aboutUs: "About us",
        contact: "Contact us"
      },
      aboutUsPage: {
        goals: {
          title: "Association goals",
          description: `The Chinguetti Organization seeks to improve the lives of needy jurists by providing food, health, and educational support,
                        and by fostering greater empowerment through sustainable development projects based on the values of solidarity and
                        social responsibility, for comprehensive and sustainable development.`
        },
        education: {
          title: "education",
          description: "Our educational association is dedicated to taking advantage of the modern scientific revolution by including topics such as human development through supervised training courses led by internationally accredited trainers."
        },
        mahadra: {
          "header": "Association's Mahadra",
          "title": "This school will teach the following:",
          "services": [
            "Teach the Holy Quran such as memorization of its text and reading with proper intonation, as well as the ability to draw meaning, exercise control, and offer an interpretation.",
            "Teach the Hadith with the memorization of its text, understanding its terminology, and being able to provide explanations.",
            "As part of our educational program, we provide access to the Holy Quran and Hadiths for both male and female students.",
            "Additionally, we teach other Islamic books."
          ]
        },

        traning: {
          header: "Formation and Technology",
          title: `Our organization aims to establish a training center to offer free courses. These courses include training on managing institutions and projects, as well as in specific trades such as decoration, embroidery, sewing, dyeing, informatics, and foreign languages like English and French. Efforts to combat poverty :
We have several interventions in place. This includes :`,
          services: [
            `distributing food baskets to the poorest families, providing clean drinking water through campaigns, digging artesian and regular wells for rural residents, and supplying food and drink to travelers. Additionally, we provide new and used clothing for children and distribute blankets during the winter season to low-income families.`,
            `Organizing funds to collect aid and distribute it to those in need, supporting agricultural cooperatives, pastoral cooperatives, and creating and supporting cooperatives in the fishing industry.`,
            `Additionally, supporting women's cooperatives that specialize in producing sweets and juices, cooperatives that cater to children and individuals with special needs, as well as women's cooperatives that provide services related to household chores`,
          ]
        },
        pharmacy: {
          title: "Treatment Aspect",
          treatmentTitle: "Medication Provision",
          preventionTitle: "Preventive Aspect",
          additionalServicesTitle: "Additional Services",
          treatment: [
            "Providing medication for common chronic diseases like diabetes",
            "Medication for high blood pressure (diuretics, beta-blockers, ARBs, ACE inhibitors, calcium channel blockers)",
            "Treatment for anemia and malnutrition, especially in children: iron, vitamins, and nutritional supplements"
          ],
          prevention: [
            "Fall: Raising awareness about malaria and the necessity of using mosquito nets, hemorrhagic diseases and avoiding contact with infected animals, and diseases transmitted through contaminated water",
            "Winter: Raising awareness about respiratory diseases and allergies, particularly asthma",
            "Summer: Raising awareness about the dangers of heat exposure, dehydration, and malnutrition, especially among children and the elderly",
            "Educating people about sexually transmitted diseases such as AIDS, syphilis, and hepatitis, and working on family planning through health education and distribution of preventive resources"
          ],
          additionalServices: [
            "Distribution of wheelchairs to people with special needs",
            "Distribution of wheelchairs to emergency departments in some dispensaries",
            "Establishing a pharmacy to sell medications for other diseases at very symbolic prices, with the association supplying its pharmacy through its own resources and donations received from time to time from partners at home and abroad",
            "Our awareness work is continuous throughout the year according to a pre-prepared quarterly schedule, but this does not prevent participation in activities and campaigns of the Ministry of Health such as vaccination campaigns and distribution of mosquito nets",
            "Working on opening recreational centers for children with special needs"
          ]
        },
        president: {
          name: "Engineer Mohammed Ahmed Ammar",
          title: "President of Chinguetti Organization for Helping the Poor",
          organization: "Chinguetti Organization for Helping the Poor",
          accreditationNumber: "FA 010000210901202305551",
          previousPositions: [
            "Former Head of Energy Rationalization Department at the Ministry of Energy, Oil and Minerals",
            "Former Assistant Director of Electricity at the Ministry of Oil, Energy and Minerals",
            "General Director of Future Company",
            "Former Director at Maghreb Arab Limited Company for International Trade",
            "Former Director of Widyan Al-Kharoub Trading Company",
            "Certified judicial expert in institution and project management, Accreditation number: 2022/75",
            "Deputy Director of Al-Sawab Media Agency, Accreditation number: 62/2023",
            "Professional local trainer in human development"
          ]
        }

      },
      home: {
        mainMessage: "A world of possibilities in every",
        smallText: "child's hands",
        definition: "Helping children shape their own future through education and support",
        donationButton: "Support our case"
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
          vision: {
            title: "Our Vision",
            definition: "To be the leading organization in Mauritania in the field of poverty alleviation, by providing humanitarian and sustainable support to needy groups, and contributing to building a more inclusive and socially just society."
          }
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

      aboutUsPage: {
        goals: {
          title: "le but de l'association",
          description: `L'Organisation Chinguetti cherche à améliorer la vie des pauvres et des nécessiteux en fournissant un soutien alimentaire, sanitaire et éducatif, et en autonomisant les familles pauvres à travers des projets de développement durable, basés sur les valeurs de solidarité et de solidarité sociale, pour parvenir à un développement global et durable.`
        },
        // mahadra: "Mahadra de l'Association"
        mahadra: {
          "header": "Mahadra de l'Association",
          "title": "Cette école enseignera ce qui suit:",
          "services": [
            "Mémoriser le texte et le lire en termes d’intonation, d’orthographe, de contrôle et d’interprétation.",
            "Et enseigner le HADITH : Mémoriser son texte, connaitre son interprétation et étudier sa terminologie.",
            "Fournir le Saint Coran à chaque élève.",
            "Fournir les quarante hadiths ENNEWEWI pour chaque élève.",
            "Fournir une copie de TOUHFETOU EL ETFAL, SOULEMOU EL OUSSOUL et El JEZERIYAH pour chaque élève.",
            "Notez que tous les services de la MAHDHARA sont fournis pour l’amour de DIEU TOUT-PUISSANT."
          ]
        },
        education: {
          title: "Éducation",
          description: `Profitant de la révolution scientifique moderne, nous adoptons l'inclusion de certaines matières comme le développement personnel par le biais de sessions de formation supervisées par des formateurs internationaux certifiés dans ce domaine.`
        },
        // education: ``,
        traning: {
          header: "Formation et Éducation",
          title: `Dans le domaine de la formation et de l'éducation :
          L'organisation travaille à l'ouverture d'un centre de formation au profit de l'organisation.`,
          services: [
            'Formations dans le domaine de la gestion des institutions et des projets',
            'Formation à certains métiers comme la décoration',
            'La broderie, la couture et la teinture',
            "L'informatique et les langues étrangères comme l'anglais et le français",
            "Toutes les formations proposées par l'association sont gratuites "
          ]
        },
        pharmacy: {
          title: "Aspect thérapeutique",
          treatmentTitle: "Fourniture de médicaments",
          preventionTitle: "Aspect préventif",
          additionalServicesTitle: "Autres aspects",
          treatment: [
            "Fourniture de médicaments pour les personnes atteintes de maladies chroniques courantes comme le diabète",
            "Hypertension artérielle (les diurétiques, les bêtabloquants, ARA2, IEC, IC)",
            "Anémie et malnutrition, particulièrement chez les enfants: fer et vitamines (fer, polyvitamines, compléments alimentaires)"
          ],
          prevention: [
            "Automne: Sensibilisation au paludisme et à la nécessité d'utiliser des moustiquaires, aux maladies hémorragiques et à éviter le contact avec les animaux infectés, ainsi qu'aux maladies transmises par l'eau contaminée",
            "Hiver: Sensibilisation aux maladies respiratoires et aux allergies, en particulier l'asthme",
            "Été: Sensibilisation aux dangers de l'exposition à la chaleur, de la déshydratation et de la malnutrition, particulièrement chez les enfants et les personnes âgées",
            "Sensibilisation aux dangers des maladies sexuellement transmissibles comme le SIDA, la syphilis et l'hépatite, et travail sur la planification familiale à travers l'éducation sanitaire et la distribution de moyens préventifs"
          ],
          additionalServices: [
            "Distribution de fauteuils roulants aux personnes à besoins spécifiques",
            "Distribution de fauteuils roulants à certains services d'urgence dans plusieurs dispensaires",
            "Création d'une pharmacie pour vendre des médicaments pour d'autres maladies à des prix très symboliques, l'association approvisionnant sa pharmacie par ses propres ressources et par les dons et subventions qu'elle reçoit périodiquement de ses partenaires nationaux et internationaux",
            "Le travail de sensibilisation que nous effectuons est permanent et continu tout au long de l'année selon un plan trimestriel préétabli, mais cela n'empêche pas la participation aux activités et campagnes du Ministère de la Santé comme les campagnes de vaccination et la distribution de moustiquaires",
            "Travail sur l'ouverture de centres de loisirs pour les enfants à besoins spécifiques"
          ]
        },
        president: {
          name: "Ingénieur Mohammed Ahmed Ammar",
          title: "Président de l'Organisation Chinguetti d'Aide aux Pauvres",
          organization: "Organisation Chinguetti d'Aide aux Pauvres",
          accreditationNumber: "FA 010000210901202305551",
          previousPositions: [
            "Ancien chef du service de rationalisation de l'énergie au Ministère de l'Énergie, du Pétrole et des Mines",
            "Ancien directeur adjoint de l'électricité au Ministère du Pétrole, de l'Énergie et des Mines",
            "Directeur général de la Société Future",
            "Ancien directeur à la Société Maghreb Arabe Limitée pour le Commerce International",
            "Ancien directeur de la Société Widyan Al-Kharoub pour le Commerce",
            "Expert judiciaire agréé dans le domaine de la gestion des institutions et des projets, numéro d'accréditation: 2022/75",
            "Directeur adjoint de l'Agence Médiatique Al-Sawab, numéro d'accréditation: 62/2023",
            "Formateur professionnel local en développement humain"
          ]
        },
        
      },

      home: {
        mainMessage: "Le pouvoir de choisir dans",
        smallText: "les mains d'un enfant",
        definition: "Aider les enfants à façonner leur propre avenir grâce à l'éducation et au soutien",
        donationButton: "soutenez notre cas"
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
          vision: {
            title: "notre vision",
            definition: "Être l'organisation leader en Mauritanie dans le domaine de la lutte contre la pauvreté, en apportant un soutien humanitaire et durable aux groupes dans le besoin, et en contribuant à la construction d'une société plus interdépendante et socialement juste."
          },
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
      aboutUsPage: {
        goals: {
          title: "هدف الجمعية",
          description: `تسعى منظمة شنقيط إلى تحسين حياة الفقراء والمحتاجين عبر توفير الدعم الغذائي والصحي والتعليمي، وتمكين الأسر الفقيرة من خلال مشاريع تنموية مستدامة، مستندة إلى قيم التضامن والتكافل الاجتماعي، لتحقيق تنمية شاملة ومستدامة.
`
        },
        mahadra: {
          header: "محظرة الجمعية",
          // header: "",
          title: "ستقوم هذه المدرسة بتدريس ما يلي:",
          services: [
            "حفظ نص وقراءة تجويدا ورسما وضبطا وتفسيرا.",
            "وتعليم الحديث الشريف: حفظ متن، وشرحا ودراسة مصطلحه.",
            "توفير المصحف الشريف لكل طالب و طالبة.",
            "توفير الأربعين حديثًا النووية لكل طالب وطالبة.",
            "توفير تحفة الأطفال، سلم الأصول والجزرية لكل طالب وطالبة.",
            "علما بأن كل خدمات المحظرة لوجه الله تعالى."
          ]
        },
        education: {
          title: "التعليم",
          description: `الاستفادة من الثورة العلمية الحديثة فان اعتماد ادراج بعض المواد 
  كالتنمية البشرية وذالك عن طريق دورات تكوينية يشرف عليها مدربين
   دوليين معتمدين في المجال.`
        },
        // education: ``,
        traning: {
          header: "التدريب والتعليم",
          title: `اما في مجال التكوين والتدريب :
   تعمل المنظمة علي فتح مركز تدريب لصالح المنظمة.`,

          services: [
            'تكوينات في مجال تسير المؤسسات والمشاريع',
            'التدريب علي بعض المهن كالزخرفة',
            'والتطريزوالخياطة والصباغة',
            'والمعلوماتية و اللغات الأجنبية كالإنجليزية والفرنسية',
            'جميع التكوينات المقدمة من طرف الجمعية مجانية'
          ]
        },
        pharmacy: {
          title: "الجانب العلاجي",
          treatmentTitle: "توفير الدواء",
          preventionTitle: "الجانب الوقائي",
          additionalServicesTitle: "جوانب أخرى",
          treatment: [
            "توفير الدواء لأصحاب الأمراض المزمنة الأكثر انتشار مثل السكري",
            "الضغط الدموي (les diurétiques, les bêtabloquants, ARA2, IEC, IC)",
            "فقر الدم و سوء التغذيه خاصة عند الأطفال: الحديد و الفيتامنات (fer, polyvitamines, complètements alimentaire) و المكملات الغذائية"
          ],
          prevention: [
            "الخريف: التحسيس حول حمى الملاريا وضرورة استخدام الناموسيات، و الأمراض النزيفيه و عدم الاحتكاك بالحيوانات المصابة، و الأمراض المعديه عن طريق المياه الملوثه",
            "الشتاء: التحسيس حول الأمراض التنفسية و الحساسيه و خاصة الربو",
            "الصيف: التحسيس حول خطورة التعرض للحراره و فقد السوائل و سوء التغذيه خاصة لدى الأطفال و المسنين",
            "التحسيس حول خطورة الأمراض المنتقله جنسيا كالسيدا و الزهري والكبد و تعمل على التنظيم الأسري من خلال التثقيف الصحي و توزيع وسائل وقائيه"
          ],
          additionalServices: [
            "توزيع بعض الكراسي المتحركة لذوي الاحتياجات الخاصة",
            "توزيع الكراسي المتحركة لبعض اقسام الحالات المستعجلة في بعض المستوصفات",
            "إنشاء صيدليه لبيع أدوية الأمراض الاخرى بأسعار رمزية جدا، و تعمل الجمعية على تغذية صيدليتها بمواردها الخاصة وعن طريق التبرعات والهبات التي تتلقاها من الحين لآخر عن طريق شركائها في الداخل والخارج",
            "العمل التوعوي الذي نقوم به هو عمل دائم ومتواصل طيلة أيام العام وفق مسطرة فصلية معدة مسبقا لكن ذالك لايمنع من الدخول في نشاطات وحملات وزارة الصحة التي تقوم بها من الحين الاخر كحملات التلقيح وتوزيع الناموسيات",
            "العمل على فتح مراكز تسلية للاطفال ذوي الاحتياجات الخاصة"
          ]
        },
        president: {
          name: "المهندس محمد أحمد عمار",
          title: "رئيس منظمة شنقيط مساعدة الفقراء",
          organization: "منظمة شنقيط مساعدة الفقراء",
          accreditationNumber: "FA 010000210901202305551",
          previousPositions: [
            "رئيس مصلحة ترشيد الطاقة بوزارة الطاقة والنفط والمعادن سابقا",
            "المدير المساعد للكهرباء بوزارة النفط والطاقة والمعادن سابقا",
            "المدير العام لشركة المستقبل",
            "مدير في شركة المغرب العربي المحدودة للتجارة الدولية سابقا",
            "مدير شركة وديان الخروب للتجارة سابقا",
            "خبير قضائي معتمد في مجال تسيير المؤسسات والمشاريع رقم الاعتماد: 2022/75",
            "المدير النائب لوكالة الصواب ميديا انفوا رقم الاعتماد: 62/2023",
            "مدرب محترف للتنمية البشرية"
          ]
        },
      },
      home: {
        mainMessage: "عالم من الفرص بين ",
        smallText: "يدي كل طفل",
        definition: "مساعدة الأطفال على تشكيل مستقبلهم من خلال التعليم والدعم",
        donationButton: "ادعم قضيتنا"
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
          vision: {
            title: "رؤيتنا",
            definition: "أن تكون المنظمة الرائدة في موريتانيا في مجال مكافحة الفقر، من خلال تقديم الدعم الإنساني والمستدام للفئات المحتاجة، والمساهمة في بناء مجتمع أكثر تكافلًا وعدالة اجتماعية."
          },
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