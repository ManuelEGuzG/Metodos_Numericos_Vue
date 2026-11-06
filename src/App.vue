<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const navigation = [
  { label: 'Información', path: '/informacion', icon: 'overview' },
  { label: 'Temario', path: '/temario', icon: 'topics' },
  { label: 'Recursos', path: '/recursos', icon: 'resources' },
  { label: 'Ejercicios', path: '/ejercicios', icon: 'exercises' },
  { label: 'Avisos', path: '/avisos', icon: 'notices' },
]
</script>

<template>
  <div class="app-shell">
    <aside class="sidebar">
      <RouterLink class="brand" to="/informacion" aria-label="MA-0323, información del curso">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 36 36" fill="none">
            <path d="M7 25.5 14.2 18l5.2 5.2L29 12" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.5 12H29v6.5" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="7" cy="25.5" r="2" fill="currentColor" />
          </svg>
        </span>
        <span class="brand-copy">
          <strong>Métodos Numéricos</strong>
          <small>PORTAL DEL CURSO</small>
        </span>
      </RouterLink>

      <div class="sidebar-label">CURSO MA-0323</div>
      <nav class="main-nav" aria-label="Navegación principal">
        <RouterLink
          v-for="item in navigation"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          active-class="is-active"
        >
          <svg v-if="item.icon === 'overview'" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
            <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
            <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
            <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
          </svg>
          <svg v-else-if="item.icon === 'topics'" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 5.5h14M5 12h14M5 18.5h14" />
            <circle cx="3.5" cy="5.5" r=".7" fill="currentColor" />
            <circle cx="3.5" cy="12" r=".7" fill="currentColor" />
            <circle cx="3.5" cy="18.5" r=".7" fill="currentColor" />
          </svg>
          <svg v-else-if="item.icon === 'resources'" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.5 5.5h6l2 2h7v11h-15z" />
            <path d="M4.5 9.5h15" />
          </svg>
          <svg v-else-if="item.icon === 'exercises'" viewBox="0 0 24 24" aria-hidden="true">
            <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14" />
          </svg>
          <svg v-else viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
          </svg>
          <span>{{ item.label }}</span>
          <span v-if="item.icon === 'resources'" class="nav-count">07</span>
          <span v-else-if="item.icon === 'exercises'" class="nav-count">16</span>
          <span v-else-if="item.icon === 'notices'" class="nav-count">04</span>
        </RouterLink>
      </nav>

      <div class="sidebar-bottom">
        <div class="semester-card">
          <span class="semester-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="5.5" width="16" height="15" rx="2" />
              <path d="M8 3.5v4M16 3.5v4M4 10h16" />
            </svg>
          </span>
          <span>
            <small>PERIODO ACADÉMICO</small>
            <strong>II Ciclo 2026</strong>
          </span>
        </div>
        <div class="sidebar-footer">
          <span class="status-dot"></span>
          Universidad de Costa Rica · Liberia
        </div>
      </div>
    </aside>

    <main class="main-content">
      <header class="topbar">
        <div class="breadcrumb">
          <span>MA-0323</span>
          <span class="breadcrumb-separator">/</span>
          <strong>{{ route.meta.title }}</strong>
        </div>
        <div class="topbar-right">
          <span class="course-code">UCR <span class="code-dot">·</span> Recinto de Liberia</span>
          <img
            class="ucr-signature"
            src="/image/firma-ucr-ico.png"
            alt="Universidad de Costa Rica · Facultad de Ciencias"
            width="94"
            height="49"
          />
        </div>
      </header>

      <div class="page-content">
        <RouterView v-slot="{ Component }">
          <div :key="route.path" class="route-page">
            <component :is="Component" />
          </div>
        </RouterView>
        <footer class="page-footer">
          <span>Universidad de Costa Rica <i></i> Facultad de Ciencias</span>
          <span>MA-0323 · II Ciclo 2026</span>
        </footer>
      </div>
    </main>
  </div>
</template>
