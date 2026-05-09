const fs = require('fs');

const enDonate = {
  "seo.donate.title": "Donate to Project Dignity",
  "seo.donate.desc": "Support Project Dignity Hobbs with a secure online donation. Your contribution directly funds local community initiatives.",
  "donate.headline": "Invest in Our Community",
  "donate.intro": "Your generous contribution directly empowers our grassroots initiatives in Hobbs, NM. All transactions are securely processed through Stripe, ensuring your payment information remains completely private and protected.",
  "donate.freq.onetime": "One-time",
  "donate.freq.monthly": "Monthly",
  "donate.amounts.other": "Other Amount",
  "donate.tiers.title": "Monthly Donor Tiers",
  "donate.tiers.bronze.title": "Bronze Supporter ($25/mo)",
  "donate.tiers.bronze.desc": "Provides emergency food relief for one family each month. Includes a quarterly impact newsletter.",
  "donate.tiers.silver.title": "Silver Advocate ($75/mo)",
  "donate.tiers.silver.desc": "Funds after-school tutoring materials. Includes VIP invitations to our annual block party.",
  "donate.tiers.gold.title": "Gold Champion ($200/mo)",
  "donate.tiers.gold.desc": "Supports comprehensive housing advocacy for a family facing eviction. Includes special recognition in our annual report.",
  "donate.tribute.checkbox": "Dedicate this donation in honor or memory of someone",
  "donate.tribute.type": "Tribute Type",
  "donate.tribute.honor": "In Honor Of",
  "donate.tribute.memory": "In Memory Of",
  "donate.tribute.name": "Honoree's Name",
  "donate.fee.checkbox": "I'd like to cover the processing fee (approx. 2.9% + $0.30) so 100% of my donation goes to the mission.",
  "donate.recognition.note": "We recognize our supporters in our annual report. If you prefer to remain anonymous, please check the box below.",
  "donate.recognition.anon": "Make my donation anonymous",
  "donate.form.name": "Full Name",
  "donate.form.email": "Email Address",
  "donate.form.amount_placeholder": "Enter amount",
  "donate.form.submit": "Proceed to Secure Checkout",
  "donate.validation.amount": "Please select or enter a valid donation amount.",
  "donate.validation.email": "Please provide a valid email address.",
  "donate.privacy.snippet": "We are committed to donor privacy. We will not sell, share or trade our donors' names or personal information with any other entity. Read our full ",
  "donate.privacy.link": "Privacy Policy",
  "donate.success.title": "Thank You for Your Generosity!",
  "donate.success.msg": "Your contribution makes a tangible difference in the lives of Hobbs residents. You will receive an email receipt shortly.",
  "donate.webhook.note": "(Developer Note: The integration below uses Stripe Checkout. In production, listen for the 'checkout.session.completed' webhook event to fulfill the donation and trigger automated thank-you emails.)"
};

const esDonate = {
  "seo.donate.title": "Donar a Proyecto Dignidad",
  "seo.donate.desc": "Apoye a Proyecto Dignidad Hobbs con una donación en línea segura. Su contribución financia directamente iniciativas comunitarias locales.",
  "donate.headline": "Invierta en Nuestra Comunidad",
  "donate.intro": "Su generosa contribución empodera directamente nuestras iniciativas de base en Hobbs, NM. Todas las transacciones se procesan de forma segura a través de Stripe, asegurando que su información de pago permanezca completamente privada y protegida.",
  "donate.freq.onetime": "Una vez",
  "donate.freq.monthly": "Mensual",
  "donate.amounts.other": "Otra Cantidad",
  "donate.tiers.title": "Niveles de Donantes Mensuales",
  "donate.tiers.bronze.title": "Patrocinador Bronce ($25/mes)",
  "donate.tiers.bronze.desc": "Proporciona ayuda alimentaria de emergencia para una familia cada mes. Incluye un boletín de impacto trimestral.",
  "donate.tiers.silver.title": "Defensor Plata ($75/mes)",
  "donate.tiers.silver.desc": "Financia materiales de tutoría extracurriculares. Incluye invitaciones VIP a nuestra fiesta comunitaria anual.",
  "donate.tiers.gold.title": "Campeón Oro ($200/mes)",
  "donate.tiers.gold.desc": "Apoya la defensa integral de la vivienda para una familia que enfrenta desalojo. Incluye reconocimiento especial en nuestro informe anual.",
  "donate.tribute.checkbox": "Dedicar esta donación en honor o en memoria de alguien",
  "donate.tribute.type": "Tipo de Tributo",
  "donate.tribute.honor": "En Honor De",
  "donate.tribute.memory": "En Memoria De",
  "donate.tribute.name": "Nombre del Homenajeado",
  "donate.fee.checkbox": "Me gustaría cubrir la tarifa de procesamiento (aprox. 2.9% + $0.30) para que el 100% de mi donación se destine a la misión.",
  "donate.recognition.note": "Reconocemos a nuestros seguidores en nuestro informe anual. Si prefiere permanecer en el anonimato, marque la casilla a continuación.",
  "donate.recognition.anon": "Hacer mi donación anónima",
  "donate.form.name": "Nombre Completo",
  "donate.form.email": "Correo Electrónico",
  "donate.form.amount_placeholder": "Ingrese la cantidad",
  "donate.form.submit": "Proceder al Pago Seguro",
  "donate.validation.amount": "Seleccione o ingrese una cantidad de donación válida.",
  "donate.validation.email": "Proporcione una dirección de correo electrónico válida.",
  "donate.privacy.snippet": "Estamos comprometidos con la privacidad de los donantes. No venderemos, compartiremos ni intercambiaremos los nombres o la información personal de nuestros donantes con ninguna otra entidad. Lea nuestra ",
  "donate.privacy.link": "Política de Privacidad completa",
  "donate.success.title": "¡Gracias por su Generosidad!",
  "donate.success.msg": "Su contribución hace una diferencia tangible en las vidas de los residentes de Hobbs. Recibirá un recibo por correo electrónico en breve.",
  "donate.webhook.note": "(Nota para desarrolladores: La integración a continuación utiliza Stripe Checkout. En producción, escuche el evento de webhook 'checkout.session.completed' para cumplir con la donación y activar los correos electrónicos automáticos de agradecimiento.)"
};

let content = fs.readFileSync('src/i18n.js', 'utf8');

const enIndex = content.indexOf('"donate.disclaimer": "100% of your donations go towards our local grassroots initiatives.",');
if (enIndex !== -1) {
  const insertEn = Object.entries(enDonate).map(([k, v]) => `"${k}": ${JSON.stringify(v)},`).join('\n      ');
  content = content.substring(0, enIndex) + insertEn + '\n      ' + content.substring(enIndex);
}

const esIndex = content.indexOf('"donate.disclaimer": "El 100% de tus donaciones se destinan a nuestras iniciativas de base locales.",');
if (esIndex !== -1) {
  const insertEs = Object.entries(esDonate).map(([k, v]) => `"${k}": ${JSON.stringify(v)},`).join('\n      ');
  content = content.substring(0, esIndex) + insertEs + '\n      ' + content.substring(esIndex);
}

fs.writeFileSync('src/i18n.js', content, 'utf8');
console.log('Donate translations injected successfully.');
