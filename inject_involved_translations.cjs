const fs = require('fs');

const enInvolved = {
  "nav.get_involved": "Get Involved",
  "nav.events": "Events",
  "seo.involved.title": "Get Involved with Project Dignity",
  "seo.involved.desc": "Volunteer your time or become a corporate partner with Project Dignity Hobbs. See our available roles and sign up today.",
  "involved.title": "Get Involved",
  "involved.intro": "Change starts with you. Whether you have a few hours a month to volunteer or represent a business looking to make a systemic impact, we need your partnership.",
  
  "involved.volunteer.title": "Volunteer Roles",
  "involved.volunteer.role1.title": "Food Pantry Assistant",
  "involved.volunteer.role1.desc": "Help sort donations, pack emergency food boxes, and assist with distribution on weekends.",
  "involved.volunteer.role2.title": "Youth Mentor",
  "involved.volunteer.role2.desc": "Commit 4 hours a month to mentor a local student. Background check required.",
  "involved.volunteer.role3.title": "Event Support",
  "involved.volunteer.role3.desc": "Assist with setup, registration, and logistics at our community events and block parties.",
  
  "involved.form.title": "Volunteer Application",
  "involved.form.name": "Full Name",
  "involved.form.email": "Email Address",
  "involved.form.phone": "Phone Number",
  "involved.form.role": "Role Preference",
  "involved.form.availability": "General Availability",
  "involved.form.bgcheck": "I consent to a standard background check (Required for Youth Mentorship).",
  "involved.form.submit": "Submit Application",
  "involved.form.success": "Thank you! Our volunteer coordinator will be in touch within 48 hours.",
  
  "involved.corporate.title": "Corporate Partnerships",
  "involved.corporate.desc": "Invest in the future of Hobbs. We partner with local and regional businesses to sponsor programs, host employee volunteer days, and drive systemic community growth.",
  "involved.corporate.form.company": "Company Name",
  "involved.corporate.form.contact": "Contact Name",
  "involved.corporate.form.email": "Corporate Email",
  "involved.corporate.form.message": "How would you like to partner with us?",
  "involved.corporate.form.submit": "Request Partnership Packet",

  "seo.events.title": "Community Events Calendar",
  "seo.events.desc": "View upcoming events, workshops, and volunteer days hosted by Project Dignity Hobbs.",
  "events.title": "Upcoming Events",
  "events.intro": "Join us at our upcoming community events, educational workshops, and volunteer drives. Use the keyboard-accessible calendar list below to find and RSVP for an event.",
  "events.a11y_note": "(Accessibility Note: This event list is structured using semantic headings and ARIA lists for screen readers. Focus management ensures keyboard users can easily tab through events and RSVP buttons.)",
  
  "events.list.1.title": "Summer Community Block Party",
  "events.list.1.date": "July 15, 2026 • 11:00 AM - 3:00 PM",
  "events.list.1.location": "City Park, Hobbs, NM",
  "events.list.1.desc": "Join us for our annual summer block party! Free food, music, and community resource sharing. Everyone is welcome.",
  "events.list.2.title": "Youth Mentorship Orientation",
  "events.list.2.date": "August 5, 2026 • 6:00 PM - 7:30 PM",
  "events.list.2.location": "Project Dignity HQ",
  "events.list.2.desc": "Required orientation for all new youth mentors. We will cover program guidelines, child safety protocols, and relationship building strategies.",
  "events.list.3.title": "Housing Rights Workshop",
  "events.list.3.date": "August 12, 2026 • 5:30 PM - 7:00 PM",
  "events.list.3.location": "Hobbs Public Library",
  "events.list.3.desc": "A free workshop led by local legal advocates covering tenant rights, eviction prevention, and emergency rental assistance.",
  "events.button.rsvp": "RSVP Now",

  "seo.event_detail.title": "Event RSVP",
  "seo.event_detail.desc": "RSVP for an upcoming Project Dignity event.",
  "event_detail.back": "Back to Calendar",
  "event_detail.about": "About This Event",
  "event_detail.rsvp.title": "RSVP for this Event",
  "event_detail.rsvp.guests": "Number of Guests",
  "event_detail.rsvp.submit": "Confirm RSVP",
  "event_detail.rsvp.microcopy": "You will receive a confirmation email shortly, and a reminder 24 hours before the event.",
  "event_detail.rsvp.success": "Your RSVP is confirmed! We look forward to seeing you there."
};

const esInvolved = {
  "nav.get_involved": "Involúcrate",
  "nav.events": "Eventos",
  "seo.involved.title": "Involúcrate con Proyecto Dignidad",
  "seo.involved.desc": "Ofrezca su tiempo como voluntario o conviértase en un socio corporativo con Proyecto Dignidad Hobbs. Vea nuestros roles disponibles y regístrese hoy.",
  "involved.title": "Involúcrate",
  "involved.intro": "El cambio comienza contigo. Ya sea que tengas unas horas al mes para ser voluntario o representes a una empresa que busca tener un impacto sistémico, necesitamos tu asociación.",
  
  "involved.volunteer.title": "Roles de Voluntariado",
  "involved.volunteer.role1.title": "Asistente de Despensa de Alimentos",
  "involved.volunteer.role1.desc": "Ayude a clasificar donaciones, empacar cajas de alimentos de emergencia y asistir con la distribución los fines de semana.",
  "involved.volunteer.role2.title": "Mentor de Jóvenes",
  "involved.volunteer.role2.desc": "Comprométase 4 horas al mes para ser mentor de un estudiante local. Se requiere verificación de antecedentes.",
  "involved.volunteer.role3.title": "Apoyo de Eventos",
  "involved.volunteer.role3.desc": "Ayude con la configuración, registro y logística en nuestros eventos comunitarios.",
  
  "involved.form.title": "Solicitud de Voluntariado",
  "involved.form.name": "Nombre Completo",
  "involved.form.email": "Correo Electrónico",
  "involved.form.phone": "Número de Teléfono",
  "involved.form.role": "Preferencia de Rol",
  "involved.form.availability": "Disponibilidad General",
  "involved.form.bgcheck": "Doy mi consentimiento para una verificación de antecedentes (Requerido para la Mentoría de Jóvenes).",
  "involved.form.submit": "Enviar Solicitud",
  "involved.form.success": "¡Gracias! Nuestro coordinador de voluntarios se pondrá en contacto dentro de las 48 horas.",
  
  "involved.corporate.title": "Asociaciones Corporativas",
  "involved.corporate.desc": "Invierta en el futuro de Hobbs. Nos asociamos con empresas locales y regionales para patrocinar programas, organizar días de voluntariado para empleados e impulsar el crecimiento.",
  "involved.corporate.form.company": "Nombre de la Empresa",
  "involved.corporate.form.contact": "Nombre del Contacto",
  "involved.corporate.form.email": "Correo Corporativo",
  "involved.corporate.form.message": "¿Cómo le gustaría asociarse con nosotros?",
  "involved.corporate.form.submit": "Solicitar Paquete de Asociación",

  "seo.events.title": "Calendario de Eventos Comunitarios",
  "seo.events.desc": "Vea los próximos eventos, talleres y días de voluntariado organizados por Proyecto Dignidad Hobbs.",
  "events.title": "Próximos Eventos",
  "events.intro": "Únase a nosotros en nuestros próximos eventos, talleres y campañas. Utilice la lista de calendario accesible para encontrar y confirmar su asistencia a un evento.",
  "events.a11y_note": "(Nota de Accesibilidad: Esta lista de eventos está estructurada utilizando encabezados semánticos y listas ARIA para lectores de pantalla. La gestión del enfoque garantiza que los usuarios de teclado puedan tabular fácilmente a través de los eventos y los botones de confirmación de asistencia.)",
  
  "events.list.1.title": "Fiesta Comunitaria de Verano",
  "events.list.1.date": "15 de julio de 2026 • 11:00 AM - 3:00 PM",
  "events.list.1.location": "Parque de la Ciudad, Hobbs, NM",
  "events.list.1.desc": "¡Únase a nosotros para nuestra fiesta anual de verano! Comida gratis, música y recursos compartidos. Todos son bienvenidos.",
  "events.list.2.title": "Orientación de Mentoría Juvenil",
  "events.list.2.date": "5 de agosto de 2026 • 6:00 PM - 7:30 PM",
  "events.list.2.location": "Sede de Proyecto Dignidad",
  "events.list.2.desc": "Orientación obligatoria para todos los nuevos mentores jóvenes. Cubriremos pautas del programa, protocolos de seguridad infantil y más.",
  "events.list.3.title": "Taller de Derechos de Vivienda",
  "events.list.3.date": "12 de agosto de 2026 • 5:30 PM - 7:00 PM",
  "events.list.3.location": "Biblioteca Pública de Hobbs",
  "events.list.3.desc": "Un taller gratuito dirigido por defensores legales locales que cubre los derechos de los inquilinos, la prevención de desalojos y más.",
  "events.button.rsvp": "Confirmar Asistencia",

  "seo.event_detail.title": "Confirmación de Asistencia",
  "seo.event_detail.desc": "Confirme su asistencia a un próximo evento de Proyecto Dignidad.",
  "event_detail.back": "Volver al Calendario",
  "event_detail.about": "Sobre este Evento",
  "event_detail.rsvp.title": "Confirmar Asistencia para este Evento",
  "event_detail.rsvp.guests": "Número de Invitados",
  "event_detail.rsvp.submit": "Confirmar",
  "event_detail.rsvp.microcopy": "Recibirá un correo electrónico de confirmación en breve y un recordatorio 24 horas antes del evento.",
  "event_detail.rsvp.success": "¡Su asistencia está confirmada! Esperamos verle allí."
};

let content = fs.readFileSync('src/i18n.js', 'utf8');

const enIndex = content.indexOf('"donate.webhook.note":');
if (enIndex !== -1) {
  // Find the end of this line (comma or newline)
  const endOfLineEn = content.indexOf('"', enIndex + 23) + 1;
  const insertEn = ',\n      ' + Object.entries(enInvolved).map(([k, v]) => `"${k}": ${JSON.stringify(v)}`).join(',\n      ');
  content = content.substring(0, endOfLineEn) + insertEn + content.substring(endOfLineEn);
}

const esIndex = content.indexOf('"donate.webhook.note":', content.indexOf('es: {'));
if (esIndex !== -1) {
  const endOfLineEs = content.indexOf('"', esIndex + 23) + 1;
  const insertEs = ',\n      ' + Object.entries(esInvolved).map(([k, v]) => `"${k}": ${JSON.stringify(v)}`).join(',\n      ');
  content = content.substring(0, endOfLineEs) + insertEs + content.substring(endOfLineEs);
}

fs.writeFileSync('src/i18n.js', content, 'utf8');
console.log('Involved/Events translations injected successfully.');
