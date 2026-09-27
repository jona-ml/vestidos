# Princesitas Vestidos 👑

Sitio web para una tienda de vestidos de niñas, construido con **Astro** y **Tailwind CSS 4**.

## 🎨 Paleta de colores

| Rol | Hex | Uso |
| --- | --- | --- |
| Primario | `#de859b` | Botones, títulos, acentos |
| Secundario | `#e8b8c2` | Fondos suaves, bordes |
| Terciario | `#849a88` | Acentos verdes, badges "Nuevo" |
| Neutro | `#faf5f0` | Fondo general |

Definidos como tokens en `src/styles/global.css`.

## 🚀 Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo (http://localhost:4321)
npm run build     # compilar para producción (carpeta dist/)
npm run preview   # previsualizar la versión compilada
```

## 📝 Personalización

### Datos de contacto, WhatsApp y marca
Editá **`src/data/config.ts`**:
- `whatsapp`: número real con formato internacional, sin `+` ni espacios (ej: `5491123456789`).
- `direccion`, `email`, `telefonoVisible`, `horarios` y `redes` (Instagram, Facebook, TikTok).
- `tagline`: frase principal del sitio.

> Todos los botones de WhatsApp del sitio leen de este archivo.

### Productos
Editá **`src/data/productos.ts`**:
- Agregá/quitá productos del arreglo `productos`.
- `categoria` debe ser una de las claves en `categorias`: `fiesta`, `princesa`, `casual`, `temporada`.
- `tallas`: lista de talles disponibles.
- `colores`: lista de `{ nombre, hex }` que se muestran como círculos de color.
- `imagen`: portada que se ve en las tarjetas del catálogo y el inicio.
- `galeria`: lista de fotos para la página de detalle (la primera es la imagen grande inicial).
- `descripcionLarga`: texto extendido de la página de detalle.
- `detalles`: `{ tela, forro, cierre, cuidados, origen }` que se muestran en la tabla de detalles.
- `destacado: true` lo muestra en la página de inicio.
- `nuevo: true` le pone el badge "Nuevo".
- `video`: **(OPCIONAL)** ID de video de YouTube. Si se omite, la sección de video no aparece.

> Reemplazá las URLs de placeholder (`picsum.photos`) por fotos reales en `public/img/`, ej: `/img/vestido1.jpg`.

### 🎬 Videos (opcional por producto)
Los videos se manejan con **YouTube** (recomendado: gratis, hosting ilimitado, no afecta la velocidad porque se carga solo al hacer click, y aporta visibilidad en Google).

1. Subí el video (ideal: clip corto de 10–30 seg del vestido girando, buena luz natural).
2. Copiá el **ID** de la URL de YouTube:
   - URL: `https://www.youtube.com/watch?v=`**`aqz-KE-bpKQ`**
   - ID: `aqz-KE-bpKQ`
3. Pegalo en el producto: `video: "aqz-KE-bpKQ"`.

El reproductor usa una **miniatura con botón de play** (no carga el iframe hasta el click) y `youtube-nocookie.com` para mayor privacidad. El ID de ejemplo `aqz-KE-bpKQ` es un video de muestra: reemplazalo por el tuyo.

## 📄 Páginas

- `/` — Inicio: hero, categorías, destacados, ventajas, testimonios y CTA.
- `/catalogo` — Catálogo con filtros por colección y talle (funciona también con `/catalogo?categoria=fiesta`).
- `/vestidos/[id]` — Detalle del vestido: galería de fotos, video opcional, selector de talle, guía de talles, tabla de detalles, productos relacionados y CTA de WhatsApp con el talle elegido.
- `/contacto` — Datos de contacto, horarios y CTAs de WhatsApp.

## 🧩 Estructura

```
src/
├── components/     # Header, Hero, Categorias, Productos, ProductCard,
│                   # GaleriaProducto, VideoPlayer, GuiaTallas, Footer, WhatsAppFloat, etc.
├── data/           # config.ts (marca/contacto) y productos.ts (catálogo + guía de talles)
├── layouts/        # Layout.astro (base con header/footer y fuentes)
├── pages/          # index, catalogo, contacto y vestidos/[id]
└── styles/         # global.css (paleta + componentes)
```
