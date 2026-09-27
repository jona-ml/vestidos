/**
 * Catálogo de vestidos de Princesitas Vestidos.
 * Agrega o edita productos aquí sin tocar el HTML.
 *
 * categoria: debe coincidir con una de las claves de `categorias`.
 * tallas: lista de tallas disponibles.
 * galeria: varias fotos para la página de detalle (la primera es la portada).
 * video: (OPCIONAL) ID de YouTube. Ej: "aqz-KE-bpKQ". Si se omite, no se
 *        muestra la sección de video en la página del vestido.
 * destacado: si aparece en la sección de destacados del inicio.
 */

export interface ColorProducto {
  nombre: string;
  hex: string;
}

export interface DetallesProducto {
  tela: string;
  forro: string;
  cierre: string;
  cuidados: string;
  origen: string;
}

export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  descripcionLarga: string;
  precio: number;
  categoria: string;
  tallas: string[];
  colores: ColorProducto[];
  imagen: string;
  galeria: string[];
  detalles: DetallesProducto;
  /** ID del video de YouTube. Opcional. */
  video?: string;
  destacado?: boolean;
  nuevo?: boolean;
}

export const categorias = [
  {
    slug: "fiesta",
    nombre: "Fiesta",
    descripcion: "Brillos y encaje para ocasiones especiales",
    icono: "✨",
  },
  {
    slug: "princesa",
    nombre: "Princesa",
    descripcion: "Faldas voluminosas y detalles de cuento",
    icono: "👑",
  },
  {
    slug: "casual",
    nombre: "Casual",
    descripcion: "Cómodos y frescos para todos los días",
    icono: "🌸",
  },
  {
    slug: "temporada",
    nombre: "Temporada",
    descripcion: "Los modelos nuevos de la colección",
    icono: "🍂",
  },
] as const;

export const productos: Producto[] = [
  {
    id: "vestido-princesa-rosalia",
    nombre: "Vestido Princesa Rosalía",
    descripcion:
      "Tul en capas con detalles bordados y cintura con moño. El favorito de las fiestas.",
    descripcionLarga:
      "El Vestido Princesa Rosalía es pura magia: varias capas de tul vaporoso sobre una falda amplia que gira con cada paso. El corpiño está bordado a mano con pequeñas flores en tonos rosados y remata en un moño de satén al frente. Es el modelo soñado para cumpleaños, casamientos y sesiones de fotos.",
    precio: 28900,
    categoria: "princesa",
    tallas: ["2", "4", "6", "8"],
    colores: [
      { nombre: "Rosa", hex: "#de859b" },
      { nombre: "Blanco perla", hex: "#f4ede6" },
      { nombre: "Verde salvia", hex: "#849a88" },
    ],
    imagen: "https://picsum.photos/seed/vestido1/700/900",
    galeria: [
      "https://picsum.photos/seed/vestido1/900/1200",
      "https://picsum.photos/seed/vestido1-b/900/1200",
      "https://picsum.photos/seed/vestido1-c/900/1200",
      "https://picsum.photos/seed/vestido1-d/900/1200",
    ],
    detalles: {
      tela: "Tul de poliéster y satén",
      forro: "Algodón 100% transpirable",
      cierre: "Cierre invisible en la espalda",
      cuidados: "Lavado a mano con agua fría. No usar secadora.",
      origen: "Confeccionado en Argentina",
    },
    video: "aqz-KE-bpKQ",
    destacado: true,
    nuevo: true,
  },
  {
    id: "vestido-fiesta-estrella",
    nombre: "Vestido de Fiesta Estrella",
    descripcion:
      "Encaje con lentejuelas y falda de vuelo. Ideal para cumpleaños y eventos.",
    descripcionLarga:
      "Un vestido de fiesta que brilla con luz propia. El corpiño de encaje está salpicado de lentejuelas que reflejan la luz, y la falda de vuelo en capas le da un movimiento delicado al caminar. Perfecto para eventos de noche y celebraciones especiales.",
    precio: 32500,
    categoria: "fiesta",
    tallas: ["4", "6", "8", "10"],
    colores: [
      { nombre: "Dorado rosa", hex: "#d9a86c" },
      { nombre: "Rosa", hex: "#de859b" },
    ],
    imagen: "https://picsum.photos/seed/vestido2/700/900",
    galeria: [
      "https://picsum.photos/seed/vestido2/900/1200",
      "https://picsum.photos/seed/vestido2-b/900/1200",
      "https://picsum.photos/seed/vestido2-c/900/1200",
    ],
    detalles: {
      tela: "Encaje bordado con lentejuelas",
      forro: "Satén suave",
      cierre: "Cierre en la espalda con botón forrado",
      cuidados: "Lavado a mano. No planchar las lentejuelas.",
      origen: "Confeccionado en Argentina",
    },
    destacado: true,
  },
  {
    id: "vestido-casual-florencia",
    nombre: "Vestido Casual Florencia",
    descripcion:
      "Algodón suave con estampado floral. Comodidad para el jardín y el día a día.",
    descripcionLarga:
      "El Vestido Casual Florencia está pensado para el día a día: algodón liviano que deja respirar la piel, estampado floral exclusivo y un corte suelto que no aprieta. Ideal para el jardín, paseos y tardes de juego.",
    precio: 15900,
    categoria: "casual",
    tallas: ["2", "4", "6", "8", "10", "12"],
    colores: [
      { nombre: "Crema floral", hex: "#f0e4d6" },
      { nombre: "Rosa pálido", hex: "#e8b8c2" },
    ],
    imagen: "https://picsum.photos/seed/vestido3/700/900",
    galeria: [
      "https://picsum.photos/seed/vestido3/900/1200",
      "https://picsum.photos/seed/vestido3-b/900/1200",
      "https://picsum.photos/seed/vestido3-c/900/1200",
      "https://picsum.photos/seed/vestido3-d/900/1200",
    ],
    detalles: {
      tela: "Algodón peinado",
      forro: "Sin forro (tela simple)",
      cierre: "Botones frontales",
      cuidados: "Apto para lavarropas en ciclo suave. Planchar a baja temperatura.",
      origen: "Confeccionado en Argentina",
    },
    destacado: true,
  },
  {
    id: "vestido-temporada-olivia",
    nombre: "Vestido Temporada Olivia",
    descripcion:
      "Nuevo modelo en tonos salvia con mangas de gasa. Suave y elegante.",
    descripcionLarga:
      "Recién llegado de nuestra colección de temporada, el Vestido Olivia combina una base en tono salvia con mangas largas de gasa translúcida. Elegante sin perder comodidad, ideal para eventos de día y reuniones familiares.",
    precio: 24900,
    categoria: "temporada",
    tallas: ["6", "8", "10"],
    colores: [
      { nombre: "Verde salvia", hex: "#849a88" },
      { nombre: "Crema", hex: "#faf5f0" },
    ],
    imagen: "https://picsum.photos/seed/vestido4/700/900",
    galeria: [
      "https://picsum.photos/seed/vestido4/900/1200",
      "https://picsum.photos/seed/vestido4-b/900/1200",
      "https://picsum.photos/seed/vestido4-c/900/1200",
    ],
    detalles: {
      tela: "Gasa y crepé",
      forro: "Forro interior en la falda",
      cierre: "Cierre lateral oculto",
      cuidados: "Lavado a mano. Planchar con vapor.",
      origen: "Confeccionado en Argentina",
    },
    video: "aqz-KE-bpKQ",
    nuevo: true,
  },
  {
    id: "vestido-fiesta-luna",
    nombre: "Vestido de Fiesta Luna",
    descripcion:
      "Satinado perlado con pedrería en el corpiño. Brilla en cada movimiento.",
    descripcionLarga:
      "El Vestido Luna es elegancia pura. Su tela satinada de acabado perlado refleja la luz con suavidad, mientras la pedrería del corpiño le aporta ese toque de brillo que enamora. Un clásico moderno para las ocasiones más importantes.",
    precio: 35900,
    categoria: "fiesta",
    tallas: ["4", "6", "8"],
    colores: [
      { nombre: "Perla", hex: "#eae0d5" },
      { nombre: "Rosa palo", hex: "#d9a5b0" },
    ],
    imagen: "https://picsum.photos/seed/vestido5/700/900",
    galeria: [
      "https://picsum.photos/seed/vestido5/900/1200",
      "https://picsum.photos/seed/vestido5-b/900/1200",
      "https://picsum.photos/seed/vestido5-c/900/1200",
    ],
    detalles: {
      tela: "Satén perlado",
      forro: "Forro completo de satén",
      cierre: "Cierre invisible en la espalda",
      cuidados: "Lavado a mano. No usar secadora.",
      origen: "Confeccionado en Argentina",
    },
  },
  {
    id: "vestido-princesa-sofia",
    nombre: "Vestido Princesa Sofía",
    descripcion:
      "Diseño de cuento con falda amplia y lazo al frente. Pura magia.",
    descripcionLarga:
      "Un vestido de cuento de hadas. La falda amplia en varias capas de tul crea un volumen espectacular, y el lazo de satén al frente remata un diseño pensado para que tu princesa se sienta la protagonista de su propia historia.",
    precio: 29900,
    categoria: "princesa",
    tallas: ["2", "4", "6", "8", "10"],
    colores: [
      { nombre: "Rosa palo", hex: "#e8b8c2" },
      { nombre: "Lila", hex: "#c9b6da" },
      { nombre: "Blanco", hex: "#faf7f2" },
    ],
    imagen: "https://picsum.photos/seed/vestido6/700/900",
    galeria: [
      "https://picsum.photos/seed/vestido6/900/1200",
      "https://picsum.photos/seed/vestido6-b/900/1200",
      "https://picsum.photos/seed/vestido6-c/900/1200",
      "https://picsum.photos/seed/vestido6-d/900/1200",
    ],
    detalles: {
      tela: "Tul y satén",
      forro: "Algodón 100%",
      cierre: "Cierre invisible en la espalda",
      cuidados: "Lavado a mano con agua fría.",
      origen: "Confeccionado en Argentina",
    },
  },
  {
    id: "vestido-casual-margarita",
    nombre: "Vestido Casual Margarita",
    descripcion:
      "Relajado y fresco con detalles de encaje. Perfecto para el verano.",
    descripcionLarga:
      "Liviano, fresco y con ese detalle de encaje que lo hace especial. El Vestido Margarita es el compañero ideal del verano: cómodo para jugar, lindo para cualquier foto.",
    precio: 13900,
    categoria: "casual",
    tallas: ["2", "4", "6", "8", "10"],
    colores: [
      { nombre: "Blanco", hex: "#fbf7f2" },
      { nombre: "Celeste", hex: "#b9d0dd" },
    ],
    imagen: "https://picsum.photos/seed/vestido7/700/900",
    galeria: [
      "https://picsum.photos/seed/vestido7/900/1200",
      "https://picsum.photos/seed/vestido7-b/900/1200",
      "https://picsum.photos/seed/vestido7-c/900/1200",
    ],
    detalles: {
      tela: "Voile de algodón",
      forro: "Sin forro",
      cierre: "Cierre lateral oculto",
      cuidados: "Apto para lavarropas en ciclo suave.",
      origen: "Confeccionado en Argentina",
    },
  },
  {
    id: "vestido-temporada-amapola",
    nombre: "Vestido Temporada Amapola",
    descripcion:
      "Estampado exclusivo de temporada con mangas largas y cinturón.",
    descripcionLarga:
      "Con un estampado exclusivo de temporada y mangas largas con puño elástico, el Vestido Amapola es abrigado y coqueto. El cinturón al tono marca la silueta sin incomodar. Ideal para los días frescos.",
    precio: 26900,
    categoria: "temporada",
    tallas: ["4", "6", "8", "10", "12"],
    colores: [
      { nombre: "Rojo suave", hex: "#c9736f" },
      { nombre: "Crema", hex: "#f3e9dd" },
    ],
    imagen: "https://picsum.photos/seed/vestido8/700/900",
    galeria: [
      "https://picsum.photos/seed/vestido8/900/1200",
      "https://picsum.photos/seed/vestido8-b/900/1200",
      "https://picsum.photos/seed/vestido8-c/900/1200",
    ],
    detalles: {
      tela: "Crepé con estampado exclusivo",
      forro: "Forro parcial en el corpiño",
      cierre: "Botones frontales",
      cuidados: "Lavado a mano. Planchar del revés.",
      origen: "Confeccionado en Argentina",
    },
    nuevo: true,
  },
  {
    id: "vestido-fiesta-victoria",
    nombre: "Vestido de Fiesta Victoria",
    descripcion:
      "Gasas superpuestas con aplicación de flores. Un sueño hecho vestido.",
    descripcionLarga:
      "El Vestido Victoria es la definición de un sueño hecho vestido: capas de gasa que se superponen creando un efecto etéreo, y aplicaciones de flores bordadas que recorren el corpiño y la falda. Una pieza artesanal para las ocasiones más memorables.",
    precio: 38900,
    categoria: "fiesta",
    tallas: ["6", "8", "10", "12"],
    colores: [
      { nombre: "Durazno", hex: "#e6b393" },
      { nombre: "Rosa", hex: "#de859b" },
    ],
    imagen: "https://picsum.photos/seed/vestido9/700/900",
    galeria: [
      "https://picsum.photos/seed/vestido9/900/1200",
      "https://picsum.photos/seed/vestido9-b/900/1200",
      "https://picsum.photos/seed/vestido9-c/900/1200",
      "https://picsum.photos/seed/vestido9-d/900/1200",
    ],
    detalles: {
      tela: "Gasa de seda y tul",
      forro: "Forro completo de satén",
      cierre: "Cierre invisible en la espalda",
      cuidados: "Lavado a mano o tintorería recomendada.",
      origen: "Confeccionado en Argentina",
    },
  },
];

/**
 * Guía de talles orientativa (medidas aproximadas en centímetros).
 */
export const guiaTallas = [
  { talle: "2", edad: "2 años", pecho: 54, cintura: 52, largo: 48 },
  { talle: "4", edad: "3-4 años", pecho: 58, cintura: 54, largo: 54 },
  { talle: "6", edad: "5-6 años", pecho: 62, cintura: 56, largo: 60 },
  { talle: "8", edad: "7-8 años", pecho: 66, cintura: 58, largo: 66 },
  { talle: "10", edad: "9-10 años", pecho: 70, cintura: 60, largo: 72 },
  { talle: "12", edad: "11-12 años", pecho: 74, cintura: 62, largo: 78 },
];

export const tallasDisponibles = ["2", "4", "6", "8", "10", "12"];

/** Formatea un precio en pesos argentinos. */
export function formatoPrecio(valor: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(valor);
}
