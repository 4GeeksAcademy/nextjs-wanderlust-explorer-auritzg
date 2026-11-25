La Product Manager nos ha facilitado las siguientes specs

Páginas requeridas
/ — Home: sección hero con un botón que navega a /experiences
/experiences — Explorador: listado completo de tarjetas con barra de búsqueda y al menos dos filtros (categoría y destino). La búsqueda y los filtros activos deben reflejarse en la URL como query parameters y deben prerrellenar los inputs al cargar la página
/experiences/[id] — Detalle: información completa de una experiencia, obtenida del dataset local por su ID
/favorites — Favoritos: lista de experiencias que el usuario ha marcado como favoritas (guardadas en estado de componente por ahora)
/profile — Perfil: página estática con un perfil de usuario simulado y un resumen con el número de favoritos guardados
Comportamiento de la búsqueda
La búsqueda debe filtrar las experiencias cuyo título coincida con el término buscado. Usa una regex case-insensitive para esto: algo como /term/i. El filtro por categoría y destino debe funcionar de forma independiente y combinarse con la búsqueda.

Dataset
Usa un asistente de código con IA para generar un array de 100 objetos de experiencia. Cada objeto debe tener como mínimo: id, title, description, category (una de: Adventure, Culture, Food, Wellness, Nature), destination (ciudad + país), price, rating e imageUrl (cualquier placeholder). Guárdalo como un fichero TypeScript local.

Favoritos
Un icono de corazón en cada tarjeta debe activar o desactivar la experiencia en la lista de favoritos del usuario. Los favoritos se guardan en un useState de nivel superior y se pasan hacia abajo como props donde sea necesario. No se requiere persistencia por ahora.