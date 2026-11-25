# 🌍 Wanderlust Explorer — App Interactiva con React y Next.js

Wanderlust Labs es una startup de travel-tech que está construyendo una plataforma para descubrir y guardar experiencias únicas alrededor del mundo. Este proyecto es el **MVP del explorador de experiencias**: una aplicación multipágina con React y Next.js donde los usuarios pueden explorar, buscar y filtrar experiencias sin recargar la página.

---

## 🚀 Tecnologías

| Tecnología | Versión |
|------------|---------|
| [Next.js](https://nextjs.org) (App Router) | 16.4.6 |
| [React](https://react.dev) | 19.3.0 |
| [TypeScript](https://www.typescriptlang.org) | ^5 |
| [Tailwind CSS](https://tailwindcss.com) | 4.3.3 |
| [ESLint](https://eslint.org) | ^9 |

---

## 📁 Estructura del proyecto

```
nextjs-wanderlust-explorer/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globales (Tailwind)
│   │   ├── layout.tsx           # Layout raíz con Navbar
│   │   └── page.tsx             # Home /
│   ├── components/
│   │   ├── Navbar.tsx           # Barra de navegación con enlace activo
│   │   ├── HeroSearch.tsx       # Hero con buscador
│   │   ├── DestinationCard.tsx  # Tarjeta de destino
│   │   ├── ExperienceCard.tsx   # Tarjeta de experiencia
│   │   └── ValueBand.tsx        # Banda de valor añadido
│   └── data/
│       └── experiences.ts       # Dataset: 100 experiencias + interface Experience
├── public/
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🧱 Componentes creados

| Componente | Descripción |
|------------|-------------|
| `Navbar` | Barra de navegación sticky con enlace activo (`usePathname`), responsiva con versión móvil |
| `HeroSearch` | Sección hero con imagen de fondo, título y formulario de búsqueda que navega a `/experiences` |
| `DestinationCard` | Tarjeta de destino con imagen, nombre y contador de actividades |
| `ExperienceCard` | Tarjeta de experiencia con imagen, título, destino, precio, rating y soporte para favoritos |
| `ValueBand` | Banda informativa con ítems de valor añadido (cancelación flexible, actividades verificadas, soporte) |

---

## 🗺️ Rutas planificadas

| Ruta | Página | Estado |
|------|--------|--------|
| `/` | Home — Hero + cuadrícula de destinos + experiencias destacadas | ✅ Completado |
| `/experiences` | Explorador — Listado completo con búsqueda y filtros | ⬜ Pendiente |
| `/experiences/[id]` | Detalle — Información completa de una experiencia | ⬜ Pendiente |
| `/favorites` | Favoritos — Experiencias marcadas como favoritas | ⬜ Pendiente |
| `/profile` | Perfil — Perfil de usuario simulado con contador de favoritos | ⬜ Pendiente |

---

## 🎨 Design References

Las siguientes interfaces reales han inspirado el diseño visual del proyecto:

| Referencia | Descripción |
|------------|-------------|
| **GetYourGuide** — Home | Hero con buscador prominente, tarjetas de destino y experiencias destacadas |
| **Klook** — Home | Diseño limpio con categorías visuales y navegación clara |
| **Klook** — Discover | Cuadrícula de experiencias con filtros y barra de búsqueda |
| **Viator** — Home | Sistema de tarjetas con precios, ratings y llamadas a la acción |

> 📸 Las capturas de referencia están disponibles en la carpeta `Design_References/`.

---

## 💾 Dataset

El archivo `src/data/experiences.ts` contiene:

- **Interface `Experience`** con los campos: `id`, `title`, `description`, `category`, `destination`, `price`, `rating`, `imageUrl`
- **100 experiencias** generadas con IA, distribuidas en 5 categorías:
  - 🏔️ Adventure
  - 🏛️ Culture
  - 🍽️ Food
  - 🧘 Wellness
  - 🌿 Nature
- Destinos en más de 30 países

---

## 🛠️ Cómo empezar

```bash
cd nextjs-wanderlust-explorer
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

### Comandos disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Compila la aplicación para producción
npm run start    # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

---

## 📝 Licencia

Proyecto académico — 4Geeks Academy