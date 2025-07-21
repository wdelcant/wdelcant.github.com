# Wilson Del Canto - Portfolio

Un portafolio moderno y responsive desarrollado con **Astro** y **Tailwind CSS**.

## 🚀 Características

- ⚡ **Astro** - Framework moderno para sitios web ultrarrápidos
- 🎨 **Tailwind CSS** - Framework de CSS utility-first
- 📱 **Responsive Design** - Adaptado para todos los dispositivos
- 🌙 **Modo Oscuro** - Diseño elegante con tema oscuro
- ✨ **Animaciones Fluidas** - Transiciones y efectos visuales atractivos
- 🎯 **TypeScript** - Desarrollo tipado y más robusto
- 📝 **Formulario de Contacto** - Sistema de contacto funcional
- � **SEO Optimizado** - Meta tags y estructura optimizada

## � Estructura del Proyecto

```
/
├── public/
│   ├── images/           # Imágenes del portfolio
│   └── cv_wdelcanto.pdf  # Curriculum Vitae
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── Projects.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── data/            # Datos del portfolio
│   │   ├── skills.ts
│   │   └── projects.ts
│   ├── layouts/         # Layouts base
│   │   └── Layout.astro
│   ├── pages/           # Páginas del sitio
│   │   └── index.astro
│   └── styles/          # Estilos globales
│       └── global.css
└── package.json
```

## 🛠️ Tecnologías Utilizadas

- **Astro** - Framework principal
- **TypeScript** - Lenguaje de programación
- **Tailwind CSS** - Framework de CSS
- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **JavaScript** - Interactividad

## 🚀 Comandos

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                        |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/` |
| `npm run preview`         | Vista previa del build local antes de deploy    |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro como `astro add`, `astro check` |

## 🎨 Características de Diseño

### Paleta de Colores
- **Primario**: Gradientes de púrpura a cian
- **Fondo**: Grises oscuros (900-800)
- **Texto**: Blanco y grises claros
- **Acentos**: Púrpura, cian, rosa

### Tipografía
- **Principal**: Raleway
- **Secundaria**: Inter

### Animaciones
- Efectos de flotación (float)
- Gradientes animados
- Transiciones suaves
- Efectos de hover interactivos

## 📋 Secciones

1. **Hero/Inicio** - Presentación principal con animación de typing
2. **Sobre Mí** - Información personal y profesional
3. **Habilidades** - Skills técnicas y blandas con barras de progreso
4. **Proyectos** - Portfolio de trabajos realizados
5. **Contacto** - Formulario de contacto y redes sociales

## � Configuración

### Personalización de Contenido

1. **Información Personal**: Edita `src/components/Hero.astro` y `src/components/About.astro`
2. **Habilidades**: Modifica `src/data/skills.ts`
3. **Proyectos**: Actualiza `src/data/projects.ts`
4. **Imágenes**: Coloca tus imágenes en `public/images/`

### Configuración de Tailwind

La configuración de Tailwind está en `tailwind.config.mjs` donde puedes:
- Personalizar la paleta de colores
- Agregar nuevas animaciones
- Modificar fuentes
- Extender utilidades

## 📱 Responsive Design

El portfolio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🌐 Deployment

### GitHub Pages
1. Instala `@astrojs/static`
2. Configura el adaptador en `astro.config.mjs`
3. Haz build y deploy

### Netlify/Vercel
1. Conecta tu repositorio
2. Build command: `npm run build`
3. Output directory: `dist`

## 📞 Contacto

- **Email**: wilson@wilsondelcanto.dev
- **LinkedIn**: [wilsondelcanto](https://www.linkedin.com/in/wilsondelcanto)
- **GitHub**: [wdelcant](https://github.com/wdelcant)
- **Ubicación**: Coquimbo, Chile

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

⭐ Si te gusta este proyecto, ¡no dudes en darle una estrella!
