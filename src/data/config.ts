/**
 * Configuración global del sitio "Princesitas Vestidos".
 * Edita aquí los datos de contacto, marca y redes sociales.
 * Todo el sitio lee de este archivo.
 */

export const config = {
  marca: "Princesitas",
  marcaCompleta: "Princesitas Vestidos",
  tagline: "Vestidos de ensueño para tus pequeñas princesas",

  // IMPORTANTE: reemplaza por el número real (formato internacional, sin + ni espacios).
  // Ejemplo para Argentina: 5491123456789
  whatsapp: "5491123456789",
  whatsappMensajeDefault:
    "¡Hola Princesitas! 👑 Quisiera consultar por sus vestidos.",

  email: "hola@princesitasvestidos.com",
  telefonoVisible: "+54 9 11 2345-6789",

  direccion: "Av. de las Princesas 123, Buenos Aires",
  horarios: [
    { dia: "Lunes a Viernes", hora: "10:00 – 19:00" },
    { dia: "Sábados", hora: "10:00 – 14:00" },
    { dia: "Domingos y feriados", hora: "Cerrado" },
  ],

  redes: {
    instagram: "https://instagram.com/princesitasvestidos",
    facebook: "https://facebook.com/princesitasvestidos",
    tiktok: "https://tiktok.com/@princesitasvestidos",
  },
};

/** Construye un enlace de WhatsApp con mensaje prellenado. */
export function waLink(mensaje?: string): string {
  const texto = encodeURIComponent(mensaje ?? config.whatsappMensajeDefault);
  return `https://wa.me/${config.whatsapp}?text=${texto}`;
}
