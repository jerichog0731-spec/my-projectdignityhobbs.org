const fs = require('fs');

const enPrograms = {
  "nav.programs": "Programs",
  "seo.programs.title": "Our Programs",
  "seo.programs.desc": "Discover Project Dignity's core initiatives in community care, workforce development, and youth empowerment.",
  "programs.title": "Our Programs",
  "programs.intro": "At Project Dignity, our programs are designed to meet immediate community needs while building long-term resilience. By centering the voices of those most impacted, we ensure our initiatives in community care, workforce development, and youth empowerment create lasting, systemic change in Hobbs, NM.",
  "programs.community.title": "Community Care",
  "programs.community.desc": "Providing immediate, essential resources and case management to residents facing crisis.",
  "programs.community.link": "View Details",
  "programs.workforce.title": "Workforce Pathways",
  "programs.workforce.desc": "Equipping residents with vocational skills and connecting them to local career opportunities.",
  "programs.workforce.link": "View Details",
  "programs.youth.title": "Youth & Family",
  "programs.youth.desc": "Empowering the next generation through mentorship, tutoring, and comprehensive family support.",
  "programs.youth.link": "View Details",

  "seo.community.title": "Community Care Program",
  "seo.community.desc": "Learn about our emergency food pantry, housing advocacy, and utility assistance funds.",
  "community.title": "Community Care",
  "community.desc": "Project Dignity's Community Care program is a comprehensive initiative focused on providing immediate, essential resources to Hobbs residents facing crisis. We understand that stable, basic needs are the foundation for thriving families. Our services include an emergency food pantry, housing advocacy, utility assistance funds, and mental health resource navigation. Eligibility is open to any resident of Lea County experiencing temporary or prolonged financial hardship. There are no strict income thresholds, as we believe in barrier-free access to human dignity. By addressing immediate food and housing insecurities, we help families stabilize and begin the journey toward long-term security. Our dedicated case managers work one-on-one with community members to ensure they receive empathetic, confidential support tailored to their unique circumstances. This program not only delivers direct aid but also fosters a culture of mutual support and neighborhood resilience. We are committed to building a safety net that catches our neighbors before they fall into deeper crisis, ensuring that everyone in Hobbs has the foundational support needed to lead a healthy, stable life. Outcomes include reduced eviction rates, improved food security, and stronger community bonds.",
  "community.outcomes.title": "Program Outcomes",
  "community.outcomes.1": "Provided over 5,000 emergency meals to local families in 2025.",
  "community.outcomes.2": "Prevented 45 evictions through rapid housing advocacy and rental relief.",
  "community.outcomes.3": "Connected 120 individuals to accessible mental health and wellness services.",
  "community.outcomes.4": "Reduced utility shut-offs for vulnerable households by 30%.",
  "community.testimonial": "\"The Community Care team didn't just help me pay my electric bill; they treated me with absolute respect and connected me to a food network that kept my family fed during a really tough month.\" - Maria G.",
  "community.form.title": "Request Assistance",
  "community.form.name": "Full Name",
  "community.form.phone": "Phone Number",
  "community.form.email": "Email Address",
  "community.form.need_type": "Primary Need (Food, Housing, Utilities, Other)",
  "community.form.privacy": "Your information is strictly confidential and will only be used to connect you with our support team.",
  "community.form.consent": "I consent to being contacted by Project Dignity Hobbs regarding my request.",
  "community.form.submit": "Submit Request",

  "seo.workforce.title": "Workforce Pathways Program",
  "seo.workforce.desc": "Equipping Hobbs residents with the hard and soft skills necessary to secure high-quality, sustainable employment.",
  "workforce.title": "Workforce Pathways",
  "workforce.desc": "The Workforce Pathways program equips Hobbs residents with the hard and soft skills necessary to secure high-quality, sustainable employment. We recognize that economic empowerment is vital to community resilience. This program offers specialized vocational training, resume building workshops, interview preparation, and direct job placement services. We have cultivated strong partnerships with local businesses and regional employers across the energy, healthcare, and retail sectors. These partnerships allow us to align our training curriculum directly with local labor demands, creating a seamless pipeline from education to employment. Program participants receive personalized career coaching, access to professional attire, and ongoing mentorship even after job placement. Our goal is not just to find our clients a job, but to help them launch a career that provides a living wage, comprehensive benefits, and pathways for future advancement. By investing in our local workforce, we are driving systemic economic growth and breaking cycles of poverty in our city.",
  "workforce.outcomes.title": "Program Outcomes",
  "workforce.outcomes.1": "Graduated 85 participants from our vocational skills bootcamp.",
  "workforce.outcomes.2": "Maintained a 78% job placement rate within 3 months of completion.",
  "workforce.outcomes.3": "Partnered with 15 leading local businesses to create direct hiring pipelines.",
  "workforce.outcomes.4": "Increased average starting wages for program alumni by 22%.",
  "workforce.testimonial": "\"The career coaching gave me the confidence to apply for roles I thought were out of reach. Today, I have a stable career with benefits for my family.\" - David L.",
  "workforce.form.title": "Join the Program",
  "workforce.form.name": "Full Name",
  "workforce.form.email": "Email Address",
  "workforce.form.skills": "Current Skills or Industry Interest",
  "workforce.form.availability": "Availability (Full-time, Part-time, Evenings)",
  "workforce.form.submit": "Submit Interest",
  "workforce.employer.title": "Become an Employer Partner",
  "workforce.employer.desc": "Are you a local business looking for skilled, dedicated talent? Partner with us to access our pipeline of trained professionals and support community economic growth.",
  "workforce.employer.button": "Contact Employer Relations",

  "seo.youth.title": "Youth & Family Program",
  "seo.youth.desc": "Empowering young people through after-school initiatives, mentorship, and family workshops.",
  "youth.title": "Youth & Family",
  "youth.desc": "Our Youth & Family program focuses on nurturing the next generation of Hobbs leaders while providing comprehensive support to parents and caregivers. We believe that empowering young people requires a holistic approach that includes their families and environment. This program features a robust after-school initiative offering academic tutoring, STEM enrichment, and creative arts workshops. In addition, our one-on-one mentorship pairs at-risk youth with dedicated local professionals who provide guidance, inspiration, and positive role modeling. For families, we host monthly workshops covering topics such as financial literacy, positive parenting strategies, and navigating the local education system. Our safe, inclusive spaces ensure that every child feels valued, heard, and encouraged to reach their full potential. We are deeply committed to breaking generational cycles of disadvantage by fostering a love of learning and building strong, supportive family units within the community.",
  "youth.outcomes.title": "Program Outcomes",
  "youth.outcomes.1": "Provided 4,000+ hours of free after-school academic tutoring.",
  "youth.outcomes.2": "Matched 50 local youth with dedicated professional mentors.",
  "youth.outcomes.3": "Hosted 12 family workshops with over 300 total attendees.",
  "youth.outcomes.4": "Reported a 40% improvement in school attendance among active participants.",
  "youth.testimonial": "\"The mentorship program completely changed my son's trajectory. He's more confident, his grades have improved, and he finally feels like he belongs.\" - Sarah T.",
  "youth.form.title": "Enroll Your Family",
  "youth.form.name": "Parent/Guardian Name",
  "youth.form.email": "Email Address",
  "youth.form.children": "Number of Children Enrolling",
  "youth.form.programs": "Programs of Interest (Mentorship, Tutoring, Workshops)",
  "youth.form.privacy": "Project Dignity prioritizes child safety. All mentors pass rigorous background checks. We never share family or minor information with third parties.",
  "youth.form.consent": "I am the legal guardian and consent to Project Dignity contacting me regarding youth enrollment.",
  "youth.form.submit": "Submit Enrollment Request"
};

const esPrograms = {
  "nav.programs": "Programas",
  "seo.programs.title": "Nuestros Programas",
  "seo.programs.desc": "Descubra las iniciativas principales de Proyecto Dignidad en cuidado comunitario, desarrollo de la fuerza laboral y empoderamiento juvenil.",
  "programs.title": "Nuestros Programas",
  "programs.intro": "En Proyecto Dignidad, nuestros programas están diseñados para satisfacer las necesidades inmediatas de la comunidad mientras se construye resiliencia a largo plazo. Al centrar las voces de los más afectados, aseguramos que nuestras iniciativas creen un cambio sistémico duradero en Hobbs, NM.",
  "programs.community.title": "Cuidado Comunitario",
  "programs.community.desc": "Proporcionando recursos esenciales e inmediatos y gestión de casos a residentes en crisis.",
  "programs.community.link": "Ver Detalles",
  "programs.workforce.title": "Caminos Laborales",
  "programs.workforce.desc": "Equipando a los residentes con habilidades vocacionales y conectándolos con oportunidades profesionales locales.",
  "programs.workforce.link": "Ver Detalles",
  "programs.youth.title": "Juventud y Familia",
  "programs.youth.desc": "Empoderando a la próxima generación a través de mentoría, tutoría y apoyo familiar integral.",
  "programs.youth.link": "Ver Detalles",

  "seo.community.title": "Programa de Cuidado Comunitario",
  "seo.community.desc": "Conozca nuestra despensa de alimentos de emergencia, defensa de la vivienda y fondos de asistencia para servicios públicos.",
  "community.title": "Cuidado Comunitario",
  "community.desc": "El programa de Cuidado Comunitario de Proyecto Dignidad es una iniciativa integral enfocada en proporcionar recursos esenciales e inmediatos a los residentes de Hobbs que enfrentan crisis. Entendemos que las necesidades básicas estables son la base para familias prósperas. Nuestros servicios incluyen una despensa de alimentos de emergencia, defensa de la vivienda, fondos de asistencia para servicios públicos y navegación de recursos de salud mental. La elegibilidad está abierta a cualquier residente del Condado de Lea que experimente dificultades financieras temporales o prolongadas. No hay umbrales de ingresos estrictos, ya que creemos en el acceso sin barreras a la dignidad humana. Al abordar las inseguridades inmediatas de alimentos y vivienda, ayudamos a las familias a estabilizarse. Nuestros trabajadores de casos dedicados trabajan uno a uno con los miembros de la comunidad para asegurar que reciban apoyo empático y confidencial adaptado a sus circunstancias únicas.",
  "community.outcomes.title": "Resultados del Programa",
  "community.outcomes.1": "Se proporcionaron más de 5,000 comidas de emergencia a familias locales en 2025.",
  "community.outcomes.2": "Se previnieron 45 desalojos a través de la defensa rápida de la vivienda y el alivio del alquiler.",
  "community.outcomes.3": "Se conectó a 120 personas a servicios accesibles de salud mental y bienestar.",
  "community.outcomes.4": "Se redujeron los cortes de servicios públicos para hogares vulnerables en un 30%.",
  "community.testimonial": "\"El equipo de Cuidado Comunitario no solo me ayudó a pagar mi factura de electricidad; me trataron con absoluto respeto y me conectaron a una red de alimentos que mantuvo a mi familia alimentada durante un mes muy difícil.\" - Maria G.",
  "community.form.title": "Solicitar Asistencia",
  "community.form.name": "Nombre Completo",
  "community.form.phone": "Número de Teléfono",
  "community.form.email": "Correo Electrónico",
  "community.form.need_type": "Necesidad Principal (Alimentos, Vivienda, Servicios Públicos, Otros)",
  "community.form.privacy": "Su información es estrictamente confidencial y solo se utilizará para conectarlo con nuestro equipo de apoyo.",
  "community.form.consent": "Doy mi consentimiento para ser contactado por Proyecto Dignidad Hobbs con respecto a mi solicitud.",
  "community.form.submit": "Enviar Solicitud",

  "seo.workforce.title": "Programa de Caminos Laborales",
  "seo.workforce.desc": "Equipando a los residentes de Hobbs con las habilidades necesarias para asegurar un empleo sostenible de alta calidad.",
  "workforce.title": "Caminos Laborales",
  "workforce.desc": "El programa de Caminos Laborales equipa a los residentes de Hobbs con las habilidades duras y blandas necesarias para asegurar un empleo sostenible de alta calidad. Reconocemos que el empoderamiento económico es vital para la resiliencia comunitaria. Este programa ofrece formación vocacional especializada, talleres de creación de currículums, preparación para entrevistas y servicios directos de colocación laboral. Hemos cultivado fuertes asociaciones con empresas locales y empleadores regionales en los sectores de energía, salud y comercio minorista. Estas asociaciones nos permiten alinear nuestro plan de estudios de capacitación directamente con las demandas laborales locales, creando una canalización fluida desde la educación hasta el empleo. Los participantes del programa reciben entrenamiento profesional personalizado, acceso a vestimenta profesional y tutoría continua.",
  "workforce.outcomes.title": "Resultados del Programa",
  "workforce.outcomes.1": "Se graduaron 85 participantes de nuestro campamento de habilidades vocacionales.",
  "workforce.outcomes.2": "Se mantuvo una tasa de colocación laboral del 78% dentro de los 3 meses posteriores a la finalización.",
  "workforce.outcomes.3": "Nos asociamos con 15 empresas locales líderes para crear vías de contratación directa.",
  "workforce.outcomes.4": "Se incrementaron los salarios iniciales promedio para los exalumnos del programa en un 22%.",
  "workforce.testimonial": "\"El asesoramiento profesional me dio la confianza para postularme a puestos que pensé estaban fuera de mi alcance. Hoy, tengo una carrera estable con beneficios para mi familia.\" - David L.",
  "workforce.form.title": "Únete al Programa",
  "workforce.form.name": "Nombre Completo",
  "workforce.form.email": "Correo Electrónico",
  "workforce.form.skills": "Habilidades Actuales o Interés en la Industria",
  "workforce.form.availability": "Disponibilidad (Tiempo completo, Medio tiempo, Tardes)",
  "workforce.form.submit": "Enviar Interés",
  "workforce.employer.title": "Conviértete en un Socio Empleador",
  "workforce.employer.desc": "¿Es usted una empresa local que busca talento capacitado y dedicado? Asóciese con nosotros para acceder a nuestra red de profesionales capacitados y apoyar el crecimiento económico de la comunidad.",
  "workforce.employer.button": "Contactar a Relaciones con Empleadores",

  "seo.youth.title": "Programa de Juventud y Familia",
  "seo.youth.desc": "Empoderando a los jóvenes a través de iniciativas extracurriculares, mentoría y talleres familiares.",
  "youth.title": "Juventud y Familia",
  "youth.desc": "Nuestro programa de Juventud y Familia se enfoca en nutrir a la próxima generación de líderes de Hobbs al tiempo que proporciona apoyo integral a los padres y cuidadores. Creemos que empoderar a los jóvenes requiere un enfoque holístico que incluya a sus familias y su entorno. Este programa cuenta con una sólida iniciativa extracurricular que ofrece tutoría académica, enriquecimiento STEM y talleres de artes creativas. Además, nuestra mentoría uno a uno empareja a jóvenes en riesgo con profesionales locales dedicados que brindan orientación, inspiración y modelos positivos. Para las familias, organizamos talleres mensuales que cubren temas como educación financiera y estrategias de crianza positiva.",
  "youth.outcomes.title": "Resultados del Programa",
  "youth.outcomes.1": "Se proporcionaron más de 4,000 horas de tutoría académica extracurricular gratuita.",
  "youth.outcomes.2": "Se emparejaron a 50 jóvenes locales con mentores profesionales dedicados.",
  "youth.outcomes.3": "Se organizaron 12 talleres familiares con más de 300 asistentes en total.",
  "youth.outcomes.4": "Se informó de una mejora del 40% en la asistencia escolar entre los participantes activos.",
  "youth.testimonial": "\"El programa de tutoría cambió completamente la trayectoria de mi hijo. Tiene más confianza, sus calificaciones han mejorado y finalmente siente que pertenece.\" - Sarah T.",
  "youth.form.title": "Inscriba a su Familia",
  "youth.form.name": "Nombre del Padre/Tutor",
  "youth.form.email": "Correo Electrónico",
  "youth.form.children": "Número de Niños a Inscribir",
  "youth.form.programs": "Programas de Interés (Mentoría, Tutoría, Talleres)",
  "youth.form.privacy": "Proyecto Dignidad prioriza la seguridad infantil. Todos los mentores pasan por rigurosas verificaciones de antecedentes. Nunca compartimos información sobre menores con terceros.",
  "youth.form.consent": "Soy el tutor legal y doy mi consentimiento para que Proyecto Dignidad me contacte con respecto a la inscripción juvenil.",
  "youth.form.submit": "Enviar Solicitud de Inscripción"
};

let content = fs.readFileSync('src/i18n.js', 'utf8');

// very naive replacement to inject into resources
const enIndex = content.indexOf('"donate.disclaimer": "100% of your donations go towards our local grassroots initiatives.",');
if (enIndex !== -1) {
  const insertEn = Object.entries(enPrograms).map(([k, v]) => `"${k}": ${JSON.stringify(v)},`).join('\n      ');
  content = content.substring(0, enIndex) + insertEn + '\n      ' + content.substring(enIndex);
}

const esIndex = content.indexOf('"donate.disclaimer": "El 100% de tus donaciones se destinan a nuestras iniciativas de base locales.",');
if (esIndex !== -1) {
  const insertEs = Object.entries(esPrograms).map(([k, v]) => `"${k}": ${JSON.stringify(v)},`).join('\n      ');
  content = content.substring(0, esIndex) + insertEs + '\n      ' + content.substring(esIndex);
}

fs.writeFileSync('src/i18n.js', content, 'utf8');
console.log('Translations injected successfully.');
