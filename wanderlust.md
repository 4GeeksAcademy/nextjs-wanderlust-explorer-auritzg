# Wanderlust Explorer — App Interactiva con React y Next.js

---

## 🎯 Tu reto

Wanderlust Labs es una startup de travel-tech que está construyendo una plataforma para descubrir y guardar experiencias únicas alrededor del mundo: desde tours gastronómicos en Bangkok hasta rutas de vela por el Adriático. Su diseñadora de producto ya ha preparado referencias visuales, y el equipo de ingeniería necesita un desarrollador frontend que dé vida al MVP del explorador.

Tu misión es construir el **explorador de experiencias**: una aplicación multipágina con React y Next.js donde los usuarios puedan explorar, buscar y filtrar experiencias sin recargar la página. Antes de escribir un solo componente, busca 2 o 3 interfaces reales que admires y que encajen con la estética esperada: una UI de descubrimiento limpia con tarjetas, una barra de búsqueda y un sistema de filtros. Úsalas como referencia de diseño y documéntalas en tu README bajo una sección "Design References".

Tu dataset será un array de 100 experiencias generadas con IA. La PM quiere que la búsqueda y los filtros vivan en la URL para que los usuarios puedan compartir enlaces como `/experiences?search=vela&category=adventure&destination=Croatia` y aterrizar directamente en una vista prefiltrada.

> Tu PM, Lea Moreau, te envió la siguiente spec por Slack:
>
> **Páginas requeridas**
> * `/` — Home: sección hero con un botón que navega a `/experiences`
> * `/experiences` — Explorador: listado completo de tarjetas con barra de búsqueda y al menos dos filtros (categoría y destino). La búsqueda y los filtros activos deben reflejarse en la URL como query parameters y deben prerrellenar los inputs al cargar la página
> * `/experiences/[id]` — Detalle: información completa de una experiencia, obtenida del dataset local por su ID
> * `/favorites` — Favoritos: lista de experiencias que el usuario ha marcado como favoritas (guardadas en estado de componente por ahora)
> * `/profile` — Perfil: página estática con un perfil de usuario simulado y un resumen con el número de favoritos guardados
>
> **Comportamiento de la búsqueda**
> La búsqueda debe filtrar las experiencias cuyo título coincida con el término buscado. Usa una regex case-insensitive para esto: algo como `/term/i`. El filtro por categoría y destino debe funcionar de forma independiente y combinarse con la búsqueda.
>
> **Dataset**
> Usa un asistente de código con IA para generar un array de 100 objetos de experiencia. Cada objeto debe tener como mínimo: `id`, `title`, `description`, `category` (una de: Adventure, Culture, Food, Wellness, Nature), `destination` (ciudad + país), `price`, `rating` e `imageUrl` (cualquier placeholder). Guárdalo como un fichero TypeScript local.
>
> **Favoritos**
> Un icono de corazón en cada tarjeta debe activar o desactivar la experiencia en la lista de favoritos del usuario. Los favoritos se guardan en un `useState` de nivel superior y se pasan hacia abajo como props donde sea necesario. No se requiere persistencia por ahora.

Este es el tipo de funcionalidad que aparece en sprints reales de producto: filtros compartibles por URL, estado manejado desde la URL y composición de componentes. Constrúyelo como algo que pondrías en tu portfolio — porque deberías.

---

## 🌱 Cómo iniciar el proyecto

Este proyecto empieza **desde cero** — no hay ningún template que forkear. Tú crearás tu propia app de Next.js desde el principio.

1. Crea un nuevo proyecto con el CLI oficial de Next.js (con TypeScript y el App Router):

```bash
npx create-next-app@latest nextjs-wanderlust-explorer --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

2. Crea un **repositorio público** en tu cuenta de GitHub con el nombre `nextjs-wanderlust-explorer`.
3. Conecta tu proyecto local a ese repositorio:

```bash
git remote add origin https://github.com/TU_USUARIO/nextjs-wanderlust-explorer.git
git push -u origin main
```

4. Abre el proyecto en GitHub Codespaces o en tu editor local y empieza a construir.

> 📗 ¿Necesitas repasar el flujo? Cómo iniciar un proyecto de código

---

## 💻 Qué debes hacer

### 📁 Setup y dataset
- [x] Inicializa el proyecto desde cero con `create-next-app` (TypeScript + Tailwind + App Router)
- [x] Usa un asistente de código con IA para generar el array de 100 experiencias y guárdalo como `src/data/experiences.ts`
- [x] Define una `interface Experience` en TypeScript con la forma de los datos y úsala en todo el proyecto
- [x] Añade una sección `## Design References` en tu `README.md` con enlaces o capturas de 2-3 UIs reales que hayan inspirado tu diseño

### 🏠 Páginas y enrutamiento
- [x] Crea la **Home** ( `/` ) con una sección hero y un botón que navega a `/experiences`
- [x] Crea el **Explorador** ( `/experiences` ) con las 100 tarjetas de experiencias en una cuadrícula
- [x] Crea la página de **Detalle** ( `/experiences/[id]` ) que lee el ID desde la URL y muestra el contenido completo de esa experiencia
- [x] Crea la página de **Favoritos** ( `/favorites` ) que muestra solo las experiencias marcadas como favoritas
- [x] Crea la página de **Perfil** ( `/profile` ) con un perfil de usuario simulado y el contador de favoritos guardados

### 🔍 Búsqueda y filtros
- [x] Añade una **barra de búsqueda** en el Explorador que filtre experiencias por título
- [x] Usa una **regex case-insensitive** para comparar el término con el título de cada experiencia (ej. `new RegExp(term, 'i').test(experience.title)` )
- [x] Añade un **filtro de categoría** (dropdown o grupo de botones) con las cinco categorías disponibles
- [x] Añade un **filtro de destino** (dropdown o búsqueda) que filtre por ciudad o país de destino
- [x] Los filtros activos y el término de búsqueda deben almacenarse como **query parameters en la URL** usando `useSearchParams` y `usePathname` de Next.js
- [x] Al cargar la página con query params existentes en la URL, los inputs de búsqueda y filtros deben **prerrellenarse** con esos valores

### ❤️ Favoritos
- [x] Añade un icono de corazón (toggle) a cada tarjeta de experiencia
- [x] Guarda la lista de IDs favoritos en un `useState` a nivel compartido y pásala hacia abajo como props
- [x] El icono de corazón debe reflejar visualmente si la experiencia está en favoritos o no

### 🧩 Componentes y hooks
- [x] Crea como mínimo los componentes: `ExperienceCard`, `SearchBar`, `FilterBar`, `Navbar`
- [x] Usa `useEffect` en al menos un componente (ej. para sincronizar los resultados filtrados cuando cambien los query params, o para actualizar el título del documento en la página de detalle)
- [x] Crea al menos un **custom hook** (ej. `useExperiences` o `useFilters` ) que encapsule la lógica de filtrado

### 🎨 UI y calidad
- [x] La app debe ser **responsiva** (móvil + escritorio)
- [x] El explorador debe mostrar un mensaje **"No se encontraron resultados"** cuando los filtros no devuelvan ningún resultado
- [x] La Navbar debe estar presente en todas las páginas y mostrar estilos de enlace activo usando `usePathname`

⚠️ **IMPORTANTE:** No uses ninguna librería externa de gestión de estado (Redux, Zustand, etc.). Todo el estado debe vivir en el `useState` nativo de React y pasarse mediante props o custom hooks.

---

## ✅ Qué vamos a evaluar

- [x] La app tiene al menos 5 páginas distintas con navegación del lado del cliente (sin recargas completas de página entre rutas)
- [x] La búsqueda filtra resultados por título usando una coincidencia con regex
- [x] Los filtros de categoría y destino funcionan de forma independiente y se combinan correctamente con la búsqueda
- [x] Los filtros activos y el término de búsqueda se reflejan en la URL como query params
- [x] Al cargar la página con query params existentes, los inputs están prerrellenados y los resultados ya están filtrados
- [x] `useEffect` se usa correctamente con arrays de dependencias adecuados (sin bucles infinitos ni dependencias faltantes)
- [x] `useState` se usa para gestionar favoritos y se pasa correctamente como props
- [x] Existe al menos un custom hook que encapsula lógica con significado
- [x] Los componentes están divididos de forma lógica — ningún fichero contiene toda la app
- [x] Los tipos e interfaces de TypeScript están definidos y se usan de forma consistente
- [x] La app es responsiva y visualmente coherente entre páginas
- [x] Las referencias de diseño están documentadas en el README

> **Nota:** La persistencia de favoritos entre recargas de página **no** se evalúa. El uso de `localStorage` está fuera del alcance de este proyecto.