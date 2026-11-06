<script setup>
const resources = [
  {
    title: 'Carta al Estudiante · Ciclo II-2026',
    description: 'Documento oficial del curso con objetivos, contenidos, cronograma, evaluación y datos de atención.',
    category: 'Documento oficial',
    type: 'PDF',
    icon: 'document',
    color: 'blue',
    filename: 'Carta-MA0323-II-2026.pdf',
    url: '/descargas/Carta-MA0323-II-2026.pdf',
  },
  {
    title: 'Burden 2010 · Inglés',
    description: 'Referencia bibliográfica en inglés de Richard L. Burden, J. Douglas Faires y Annette M. Burden.',
    category: 'Libro de texto',
    type: 'Referencia bibliográfica',
    icon: 'document',
    color: 'purple',
    external: true,
    filename: '',
    url: 'https://sibdi.ucr.ac.cr/',
  },
  {
    title: 'Burden 2017 · Español',
    description: 'Referencia bibliográfica en español de Richard L. Burden, J. Douglas Faires y Annette M. Burden.',
    category: 'Libro de texto',
    type: 'Referencia bibliográfica',
    icon: 'document',
    color: 'green',
    external: true,
    filename: '',
    url: 'https://sibdi.ucr.ac.cr/',
  },
  {
    title: 'Fórmulas Rutinarias · Cuadraturas',
    description: 'Formulario de fórmulas rutinarias de cuadratura numérica.',
    category: 'Material de consulta',
    type: 'PDF',
    icon: 'document',
    color: 'green',
    filename: 'Fórmulas Rutinarias - Cuadraturas.pdf',
    url: '/descargas/Fórmulas%20Rutinarias%20-%20Cuadraturas.pdf',
  },
  {
    title: 'Análisis Numérico I · Notas del curso',
    description: 'Notas de MA0501 preparadas por Juan Gabriel Calvo en 2023.',
    category: 'Notas de curso',
    type: 'PDF',
    icon: 'document',
    color: 'blue',
    filename: 'Calvo - MA0501 Análisis Numérico.pdf',
    url: '/descargas/Calvo%20-%20MA0501%20An%C3%A1lisis%20Num%C3%A9rico.pdf',
  },
  {
    title: 'Analysis of Numerical Methods',
    description: 'Eugene Isaacson y Herbert B. Keller. Edición Dover, 1994.',
    category: 'Libro de texto',
    type: 'PDF',
    icon: 'document',
    color: 'blue',
    filename: 'Keller - Analysis of Numerical Methods - 1994.pdf',
    url: '/descargas/Keller%20-%20Analysis%20of%20Numerical%20Methods%20-%201994.pdf',
  },
  {
    title: 'An Introduction to Numerical Analysis',
    description: 'Endre Süli y David F. Mayers. Cambridge University Press, 2003.',
    category: 'Libro de texto',
    type: 'PDF',
    icon: 'document',
    color: 'blue',
    filename: 'Suli Mayers 2003.pdf',
    url: '/descargas/Suli%20Mayers%202003.pdf',
  },
]
</script>

<template>
  <section class="page-intro">
    <div class="eyebrow"><span class="eyebrow-line"></span> BIBLIOTECA DEL CURSO</div>
    <h1>Recursos</h1>
    <p class="page-subtitle">Carta, material de consulta, notas del curso y bibliografía de análisis numérico.</p>
  </section>

  <section class="resource-grid resource-grid-page" aria-label="Materiales del curso">
    <article v-for="resource in resources" :key="resource.title" class="resource-card">
      <div class="resource-topline">
        <span class="file-icon" :class="`file-icon-${resource.color}`">
          <svg v-if="resource.icon === 'document'" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 3.5h8l4 4v13H6z" />
            <path d="M14 3.5v5h4M9 13h6M9 16.5h6" />
          </svg>
          <svg v-else viewBox="0 0 24 24" aria-hidden="true">
            <rect x="4" y="4" width="6" height="6" rx="1" />
            <rect x="14" y="4" width="6" height="6" rx="1" />
            <rect x="4" y="14" width="6" height="6" rx="1" />
            <rect x="14" y="14" width="6" height="6" rx="1" />
          </svg>
        </span>
        <span class="resource-category">{{ resource.category }}</span>
      </div>
      <div class="resource-body">
        <span class="unit-label">{{ resource.type }} · MA-0323</span>
        <h2>{{ resource.title }}</h2>
        <p>{{ resource.description }}</p>
      </div>
      <a
        v-if="resource.external"
        class="download-button resource-download"
        :href="resource.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        Consultar en el SIBDI
        <svg class="download-arrow" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M4 10h12m-5-5 5 5-5 5" />
        </svg>
      </a>
      <a v-else class="download-button resource-download" :href="resource.url" :download="resource.filename">
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 3.5v9m0 0 3.5-3.5M10 12.5 6.5 9M4 14.5v2h12v-2" />
        </svg>
        Descargar PDF
        <svg class="download-arrow" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M4 10h12m-5-5 5 5-5 5" />
        </svg>
      </a>
    </article>
  </section>

  <div class="notice-banner resource-copyright-note">
    <span class="notice-icon">i</span>
    <p><strong>Libros Burden:</strong> las referencias llevan al catálogo del SIBDI para consultar el acceso institucional; sus copias completas no se distribuyen desde este portal.</p>
  </div>

  <p class="notices-source">Material publicado originalmente por Miguel Walker U. en <a href="https://apuntesmiguel.net/MA0323.html" target="_blank" rel="noopener noreferrer">ApuntesMiguel.NeT</a>.</p>
</template>
