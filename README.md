# 🎮 Pokemon Static

Aplicación web estática para explorar y gestionar una colección de Pokémon, construida con **Astro 6** y **SolidJS**. Consume la API pública de [PokeAPI](https://pokeapi.co/) para mostrar información detallada de cada Pokémon, incluyendo imágenes oficiales, audios y sistema de favoritos con persistencia local.

---

## ✨ Características

### 🚀 Navegación Moderna
- **View Transitions** nativas de Astro para transiciones suaves entre páginas
- **Lifecycle Events** registrados para debugging del ciclo de navegación
- **ClientRouter** integrado para SPA-like experience

### 🎯 Funcionalidades Principales
- **Listado de Pokémon**: Muestra los primeros 20 Pokémon con paginación
- **Detalle de Pokémon**: Vista completa con imagen oficial, audio del grito y botón de favoritos
- **Sistema de Favoritos**: 
  - Persistencia con `localStorage`
  - Componente SolidJS hidratado solo cuando es necesario (`client:only="solid-js"`)
  - Gestión reactiva del estado con señales de SolidJS
- **Paginación**: Navegación por páginas de resultados
- **SEO Optimizado**: Meta tags dinámicos por página (Open Graph, descripción, imagen)

### 🎨 Diseño y Estilos
- **Tailwind CSS 4** con Vite plugin
- **Diseño responsive** mobile-first
- **Dark mode** por defecto (tema oscuro con clases de Tailwind)
- **Iconos SVG** con `astro-icon`

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|---|---|---|
| **Astro** | 6.2.1 | Framework SSG/SSR |
| **SolidJS** | 1.9.13 | Framework reactivo para islas interactivas |
| **Tailwind CSS** | 4.2.4 | Utility-first CSS |
| **TypeScript** | 6.0.3 | Tipado estático |
| **astro-icon** | 1.1.5 | Gestión de iconos SVG |
| **Node.js** | >= 22.12.0 | Runtime |

### Integraciones de Astro
- `@astrojs/solid-js` - Soporte para componentes SolidJS
- `@tailwindcss/vite` - Plugin de Tailwind para Vite
- `astro-icon` - Sistema de iconos

---

## 📁 Estructura del Proyecto

```
02-pokemon-static/
├── public/                      # Archivos estáticos (favicon, imágenes)
├── src/
│   ├── assets/                  # Imágenes y recursos del proyecto
│   ├── components/
│   │   ├── pokemons/           # Componentes específicos de Pokémon
│   │   │   ├── FavoritePokemons.tsx      # Lista de favoritos (SolidJS)
│   │   │   ├── FavoritePokemonCard.tsx   # Card de favorito (SolidJS)
│   │   │   ├── PokemonCard.astro         # Card de Pokémon
│   │   │   ├── PokemonHeader.astro       # Header con botón de favoritos
│   │   │   ├── PokemonAudio.astro        # Reproductor de audio
│   │   │   └── PokemonsContainer.astro   # Contenedor de lista
│   │   └── shared/             # Componentes compartidos
│   │       ├── NavBar.astro              # Navegación principal
│   │       ├── Title.astro               # Título reutilizable
│   │       ├── Counter.tsx               # Counter demo (SolidJS)
│   │       └── Video.astro               # Reproductor de video
│   ├── config/                 # Configuraciones
│   │   └── base-project.ts             # Base URL del proyecto
│   ├── consts/                 # Constantes
│   │   └── site-info.ts                # Info del sitio (título, descripción)
│   ├── icons/                  # Iconos SVG personalizados
│   ├── interfaces/             # Tipos TypeScript
│   │   ├── favorite-pokemon.ts         # Interface de favoritos
│   │   └── pokemon-list.response.ts    # Respuesta de PokeAPI
│   ├── layouts/                # Layouts de página
│   │   ├── Layout.astro                # Layout principal
│   │   ├── Layout404.astro             # Layout para 404
│   │   └── LayoutWelcome.astro         # Layout de bienvenida
│   ├── pages/                  # Rutas de la aplicación
│   │   ├── index.astro                 # Home (listado de Pokémon)
│   │   ├── 404.astro                   # Página de error
│   │   ├── pokemons/
│   │   │   ├── [name].astro            # Detalle por nombre
│   │   │   └── [page].astro            # Paginación
│   │   ├── favorites/
│   │   │   └── index.astro             # Página de favoritos
│   │   └── ...                         # Otras páginas demo
│   ├── scripts/                # Lógica del lado del cliente
│   │   ├── life-cicle-events.ts        # Listeners de View Transitions
│   │   └── favorites-button.ts         # Lógica del botón de favoritos
│   └── styles/                 # Estilos globales
│       ├── global.css                  # Estilos base + Tailwind
│       └── 404.css                     # Estilos específicos de 404
├── astro.config.mjs            # Configuración de Astro
├── tsconfig.json               # Configuración de TypeScript
├── package.json                # Dependencias y scripts
└── README.md                   # Este archivo
```

---

## 🗺️ Rutas y Páginas

| Ruta | Descripción | Tipo |
|---|---|---|
| `/` | Listado de Pokémon (primeros 20) | Estática |
| `/pokemons/[name]` | Detalle de un Pokémon específico | Estática (SSG) |
| `/pokemons/[page]` | Paginación de resultados | Estática (SSG) |
| `/favorites` | Lista de Pokémon favoritos | Híbrida (SolidJS) |
| `/404` | Página de error personalizada | Estática |

---

## 🚀 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo (abre en localhost:4321)
pnpm dev

# Compilar para producción
pnpm build

# Previsualizar build de producción
pnpm preview

# Verificar tipos y errores
pnpm astro check
```

---

## 🔧 Configuración

### Aliases de Importación

El proyecto usa aliases configurados en `astro.config.mjs` y `tsconfig.json`:

```typescript
import Component from '@components/Component.astro';
import Layout from '@layouts/Layout.astro';
import { siteInfo } from '@consts/site-info';
import { base } from '@config/base-project';
import '@scripts/life-cicle-events';
import '@styles/global.css';
```

### Variables de Entorno

El proyecto usa `.env` para configurar la base URL:

```env
PUBLIC_BASE_URL=/01-astro-framework-web-orientado-al-contenido/02-pokemon-static
```

---

## 🎯 Características Técnicas

### View Transitions
El proyecto implementa **View Transitions** de Astro para transiciones suaves entre páginas. Los eventos del ciclo de vida están registrados en `src/scripts/life-cicle-events.ts`:

- `astro:before-preparation` - Inicio de la navegación
- `astro:after-preparation` - Contenido cargado
- `astro:before-swap` - Antes del intercambio de DOM
- `astro:after-swap` - Después del intercambio
- `astro:page-load` - Página completamente cargada

### Islands Architecture con SolidJS
Los componentes interactivos usan **SolidJS** como framework reactivo:

- `FavoritePokemons.tsx` - Lista reactiva de favoritos
- `FavoritePokemonCard.tsx` - Card individual con eliminación
- `Counter.tsx` - Componente demo

Estos componentes se hidratan solo cuando es necesario con `client:only="solid-js"`.

### Sistema de Favoritos
- **Persistencia**: `localStorage` con clave `favorites-pokemons`
- **Estructura de datos**:
  ```typescript
  interface FavoritePokemon {
    name: string;
    id: number;
  }
  ```
- **Gestión de estado**: Señales de SolidJS (`createSignal`)

---

## 🌐 API Externa

El proyecto consume la **[PokeAPI](https://pokeapi.co/)**:

- **Listado**: `GET https://pokeapi.co/api/v2/pokemon`
- **Detalle**: `GET https://pokeapi.co/api/v2/pokemon/{id}`
- **Imágenes**: Sprites oficiales de Pokémon
- **Audios**: Gritos de Pokémon (formato `.ogg`)

---

## 📝 Notas de Desarrollo

### Paginación Estática
El proyecto genera **316 páginas estáticas** en build time usando `getStaticPaths()`:
- 151 páginas de detalle de Pokémon
- Páginas de paginación
- Páginas de favoritos e islas

### Optimizaciones
- **Zero JavaScript** por defecto (solo se hidratan componentes SolidJS)
- **Image optimization** automática de Astro
- **CSS purging** con Tailwind
- **Code splitting** automático

---

## 👨‍💻 Autor

**AntonyDev**

- Repositorio: [GitHub](https://github.com/AntoniCut/02-devtalles--01-astro-framework-web-orientado-al-contenido--02-pokemon-static)

---

## 📄 Licencia

ISC

---

## 🔗 Recursos

- [Documentación de Astro](https://docs.astro.build)
- [Documentación de SolidJS](https://www.solidjs.com)
- [Documentación de Tailwind CSS](https://tailwindcss.com)
- [PokeAPI](https://pokeapi.co)
- [Discord de Astro](https://astro.build/chat)
