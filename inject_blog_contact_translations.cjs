const fs = require('fs');

const enNew = {
  "nav.blog": "News",
  "nav.contact": "Contact",
  "seo.blog.title": "Latest News & Impact Stories",
  "seo.blog.desc": "Read the latest updates, community stories, and announcements from Project Dignity Hobbs.",
  "blog.title": "Community Voices & News",
  "blog.intro": "Stay updated on our initiatives, read stories from the people we serve, and learn how we're making a systemic impact in Hobbs.",
  "blog.categories": "Categories",
  "blog.tags": "Popular Tags",
  "blog.read_more": "Read Full Story",
  "blog.author": "By",
  "blog.related": "Related Stories",
  "blog.back": "Back to all news",
  
  "blog.post1.title": "Expanding Our Emergency Food Pantry for Winter",
  "blog.post1.summary": "As temperatures drop, food insecurity rises. We're proud to announce a major expansion to our weekend food distribution network.",
  "blog.post1.body": "Winter in Hobbs brings unique challenges for vulnerable families. Thanks to a generous grant and community support, we have successfully expanded our emergency food pantry capacity by 40%. This means we can now provide weekend nutrition boxes to an additional 150 families every single week. If you need assistance or want to volunteer to pack boxes, please reach out.",
  "blog.post1.date": "November 2, 2026",
  "blog.post1.author": "Elena Ramirez",

  "blog.post2.title": "Success Story: David's New Career Path",
  "blog.post2.summary": "After completing our Workforce Pathways bootcamp, David secured a full-time position with comprehensive benefits. Read his inspiring journey.",
  "blog.post2.body": "When David first came to Project Dignity, he was struggling to find stable employment after a sudden layoff. Through our 6-week Workforce Pathways bootcamp, he refined his resume, practiced interviewing, and learned new technical skills. Today, we are thrilled to announce that David has accepted a full-time role at a local energy firm, complete with health benefits for his family. 'This program didn't just give me a job; it gave me my confidence back,' David shared.",
  "blog.post2.date": "October 15, 2026",
  "blog.post2.author": "Marcus Johnson",

  "blog.post3.title": "Housing Rights: What Every Tenant in Hobbs Should Know",
  "blog.post3.summary": "Navigating housing issues can be overwhelming. Here is a breakdown of your rights and how our advocacy team can help prevent eviction.",
  "blog.post3.body": "Eviction is a community crisis, not just an individual failure. In this guide, our legal advocacy team breaks down the essential rights every tenant in Hobbs, NM possesses. From understanding notice periods to knowing when a landlord can enter your home, knowledge is power. If you are facing an unlawful eviction or living in unsafe conditions, contact our Community Care team immediately for free support.",
  "blog.post3.date": "September 28, 2026",
  "blog.post3.author": "Sarah Lin",

  "blog.post4.title": "Highlights from the 2026 Summer Block Party",
  "blog.post4.summary": "Over 500 community members joined us for a day of celebration, resource sharing, and connection. View the photo gallery.",
  "blog.post4.body": "Our annual Summer Block Party was an incredible success! Over 500 neighbors gathered at City Park to share meals, connect with local resources, and celebrate the resilience of Hobbs. We distributed 200 backpacks filled with school supplies and connected 45 individuals to mental health services. A huge thank you to our corporate partners and volunteers who made this day possible.",
  "blog.post4.date": "July 20, 2026",
  "blog.post4.author": "Elena Ramirez",

  "blog.post5.title": "Why Mental Health Access is a Grassroots Issue",
  "blog.post5.summary": "We believe mental wellness is a basic human right. Discover how we're breaking down barriers to accessible care in our community.",
  "blog.post5.body": "In many marginalized communities, mental health care is viewed as a luxury. At Project Dignity, we recognize it as a fundamental right. We are launching a new initiative to connect uninsured residents with pro-bono counseling services. By de-stigmatizing mental health and removing financial barriers, we are building a stronger, healthier Hobbs.",
  "blog.post5.date": "June 10, 2026",
  "blog.post5.author": "Sarah Lin",

  "seo.contact.title": "Contact Us",
  "seo.contact.desc": "Get in touch with Project Dignity Hobbs. Reach out via email, phone, or visit our local office.",
  "contact.title": "Get In Touch",
  "contact.intro": "We're here to listen, support, and collaborate. Reach out to us with questions, partnership ideas, or if you need assistance.",
  "contact.form.title": "Send us a Message",
  "contact.form.name": "Your Name",
  "contact.form.email": "Email Address",
  "contact.form.subject": "Subject",
  "contact.form.message": "Your Message",
  "contact.form.submit": "Send Message",
  "contact.form.spam_note": "This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.",
  "contact.form.success": "Your message has been sent. We will respond shortly.",
  "contact.info.title": "Office Information",
  "contact.info.address": "Headquarters",
  "contact.info.address_val": "123 Community Way, Hobbs, NM 88240",
  "contact.info.hours": "Office Hours",
  "contact.info.hours_val": "Mon - Fri: 9am - 5pm | Sat: Pantry 10am - 2pm",
  "contact.info.staff_link": "Looking for someone specific? Visit our Staff Directory.",
  
  "seo.privacy.title": "Privacy Policy",
  "seo.privacy.desc": "Read Project Dignity's Privacy Policy to learn how we protect your data.",
  "privacy.title": "Privacy Policy",
  "privacy.body1": "At Project Dignity Hobbs, your privacy is a priority. We are committed to protecting the personal information of our community members, volunteers, and donors.",
  "privacy.body2": "Donor Data Handling: We collect basic contact and payment information solely for processing donations and issuing tax receipts. All online transactions are encrypted and processed securely via Stripe. We do not store full credit card numbers on our servers.",
  "privacy.body3": "No Sale of Data: Project Dignity will never sell, trade, or share your personal data, including email addresses and phone numbers, with third parties for marketing purposes.",
  
  "seo.accessibility.title": "Accessibility Statement",
  "seo.accessibility.desc": "Project Dignity is committed to ensuring digital accessibility for people with disabilities.",
  "accessibility.title": "Accessibility Statement",
  "accessibility.body1": "Project Dignity Hobbs is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.",
  "accessibility.body2": "Conformance Status: We strive to ensure our website conforms to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. This includes semantic HTML, keyboard navigation support, and ARIA landmarks.",
  "accessibility.body3": "Feedback: We welcome your feedback on the accessibility of our site. If you encounter accessibility barriers, please contact us immediately so we can address the issue."
};

const esNew = {
  "nav.blog": "Noticias",
  "nav.contact": "Contacto",
  "seo.blog.title": "Últimas Noticias e Impacto",
  "seo.blog.desc": "Lea las últimas actualizaciones y anuncios de Proyecto Dignidad Hobbs.",
  "blog.title": "Voces de la Comunidad y Noticias",
  "blog.intro": "Manténgase actualizado sobre nuestras iniciativas, lea historias de las personas a las que servimos.",
  "blog.categories": "Categorías",
  "blog.tags": "Etiquetas Populares",
  "blog.read_more": "Leer Historia Completa",
  "blog.author": "Por",
  "blog.related": "Historias Relacionadas",
  "blog.back": "Volver a todas las noticias",
  
  "blog.post1.title": "Expandiendo Nuestra Despensa de Alimentos para el Invierno",
  "blog.post1.summary": "A medida que bajan las temperaturas, la inseguridad alimentaria aumenta. Expandimos nuestra red.",
  "blog.post1.body": "El invierno en Hobbs trae desafíos. Hemos ampliado nuestra capacidad de despensa de alimentos de emergencia en un 40%.",
  "blog.post1.date": "2 de noviembre de 2026",
  "blog.post1.author": "Elena Ramirez",

  "blog.post2.title": "Historia de Éxito: La Nueva Carrera de David",
  "blog.post2.summary": "Después de completar nuestro campamento, David consiguió un puesto a tiempo completo.",
  "blog.post2.body": "Cuando David llegó por primera vez a Proyecto Dignidad, estaba luchando por encontrar un empleo estable. A través de nuestro campamento, consiguió un gran trabajo.",
  "blog.post2.date": "15 de octubre de 2026",
  "blog.post2.author": "Marcus Johnson",

  "blog.post3.title": "Derechos de Vivienda en Hobbs",
  "blog.post3.summary": "Aquí hay un desglose de sus derechos y cómo nuestro equipo puede ayudar a prevenir el desalojo.",
  "blog.post3.body": "El desalojo es una crisis comunitaria. Nuestro equipo de defensa legal desglosa los derechos esenciales. Contáctenos si enfrenta un desalojo.",
  "blog.post3.date": "28 de septiembre de 2026",
  "blog.post3.author": "Sarah Lin",

  "blog.post4.title": "Lo más destacado de la Fiesta Comunitaria de Verano",
  "blog.post4.summary": "Más de 500 miembros de la comunidad se unieron a nosotros. Ver galería.",
  "blog.post4.body": "¡Nuestra Fiesta de Verano anual fue un éxito! Más de 500 vecinos se reunieron en el Parque de la Ciudad. Distribuimos útiles escolares y conectamos a las personas.",
  "blog.post4.date": "20 de julio de 2026",
  "blog.post4.author": "Elena Ramirez",

  "blog.post5.title": "Por qué la Salud Mental es Vital",
  "blog.post5.summary": "Creemos que el bienestar mental es un derecho humano básico.",
  "blog.post5.body": "En muchas comunidades, la atención de la salud mental se considera un lujo. Estamos lanzando una nueva iniciativa para servicios gratuitos.",
  "blog.post5.date": "10 de junio de 2026",
  "blog.post5.author": "Sarah Lin",

  "seo.contact.title": "Contáctenos",
  "seo.contact.desc": "Póngase en contacto con Proyecto Dignidad Hobbs.",
  "contact.title": "Ponerse en Contacto",
  "contact.intro": "Estamos aquí para escuchar y colaborar. Comuníquese con nosotros.",
  "contact.form.title": "Envíenos un Mensaje",
  "contact.form.name": "Su Nombre",
  "contact.form.email": "Correo Electrónico",
  "contact.form.subject": "Asunto",
  "contact.form.message": "Su Mensaje",
  "contact.form.submit": "Enviar Mensaje",
  "contact.form.spam_note": "Este sitio está protegido por reCAPTCHA.",
  "contact.form.success": "Su mensaje ha sido enviado. Responderemos en breve.",
  "contact.info.title": "Información de la Oficina",
  "contact.info.address": "Sede",
  "contact.info.address_val": "123 Community Way, Hobbs, NM 88240",
  "contact.info.hours": "Horario de Oficina",
  "contact.info.hours_val": "Lun - Vie: 9am - 5pm | Sáb: Despensa 10am - 2pm",
  "contact.info.staff_link": "¿Busca a alguien específico? Visite nuestro Directorio de Personal.",
  
  "seo.privacy.title": "Política de Privacidad",
  "seo.privacy.desc": "Lea nuestra Política de Privacidad.",
  "privacy.title": "Política de Privacidad",
  "privacy.body1": "En Proyecto Dignidad Hobbs, su privacidad es una prioridad.",
  "privacy.body2": "Manejo de Datos de Donantes: Recopilamos información básica solo para procesar donaciones. Procesado de forma segura a través de Stripe.",
  "privacy.body3": "No Venta de Datos: Nunca venderemos ni compartiremos sus datos personales.",
  
  "seo.accessibility.title": "Declaración de Accesibilidad",
  "seo.accessibility.desc": "Comprometidos a garantizar la accesibilidad digital.",
  "accessibility.title": "Declaración de Accesibilidad",
  "accessibility.body1": "Proyecto Dignidad Hobbs se compromete a garantizar la accesibilidad digital para personas con discapacidades.",
  "accessibility.body2": "Estado de Conformidad: Nos esforzamos por cumplir con WCAG 2.1 Nivel AA.",
  "accessibility.body3": "Comentarios: Agradecemos sus comentarios. Contáctenos si encuentra barreras."
};

let content = fs.readFileSync('src/i18n.js', 'utf8');

const enIndex = content.indexOf('"events.list.3.desc":');
if (enIndex !== -1) {
  const endOfLineEn = content.indexOf('"', enIndex + 22) + 1;
  const insertEn = ',\n      ' + Object.entries(enNew).map(([k, v]) => `"${k}": ${JSON.stringify(v)}`).join(',\n      ');
  content = content.substring(0, endOfLineEn) + insertEn + content.substring(endOfLineEn);
}

const esIndex = content.indexOf('"events.list.3.desc":', content.indexOf('es: {'));
if (esIndex !== -1) {
  const endOfLineEs = content.indexOf('"', esIndex + 22) + 1;
  const insertEs = ',\n      ' + Object.entries(esNew).map(([k, v]) => `"${k}": ${JSON.stringify(v)}`).join(',\n      ');
  content = content.substring(0, endOfLineEs) + insertEs + content.substring(endOfLineEs);
}

fs.writeFileSync('src/i18n.js', content, 'utf8');
console.log('Blog/Contact/Legal translations injected successfully.');
