<script setup>
const exerciseFiles = [
  {
    filename: 'Burden ExSET 1-1.pdf',
    section: 'Sección 1 · Preliminares',
  },
  {
    filename: 'Burden ExSET 2-1.pdf',
    section: 'Sección 2 · Ecuaciones no lineales',
  },
  {
    filename: 'Burden ExSET 2-2.pdf',
    section: 'Sección 2 · Ecuaciones no lineales',
  },
  {
    filename: 'Burden ExSET 2-3.pdf',
    section: 'Sección 2 · Ecuaciones no lineales',
  },
  {
    filename: 'Burden ExSET 2-4.pdf',
    section: 'Sección 2 · Ecuaciones no lineales',
  },
  {
    filename: 'Burden ExSET 3-1.pdf',
    section: 'Sección 3 · Interpolación',
  },
  {
    filename: 'Burden ExSET 3-2.pdf',
    section: 'Sección 3 · Interpolación',
  },
  {
    filename: 'Burden ExSET 3-3.pdf',
    section: 'Sección 3 · Interpolación',
  },
  {
    filename: 'Burden ExSET 3-4.pdf',
    section: 'Sección 3 · Interpolación',
  },
  {
    filename: 'Burden ExSET 3-5.pdf',
    section: 'Sección 3 · Interpolación',
  },
  {
    filename: 'Burden ExSET 4-1.pdf',
    section: 'Sección 4 · Derivación numérica',
  },
  {
    filename: 'Burden ExSET Secciones 1 y 2.pdf',
    section: 'Material combinado · Secciones 1 y 2',
  },
  {
    filename: 'Lectura-Polinomios-de-Taylor.pdf',
    section: 'Lecturas y ejemplos',
    title: 'Polinomios de Taylor y análisis del error',
    description: 'Lectura de apoyo para el repaso de cálculo, las aproximaciones y el análisis del error numérico.',
    url: '/descargas/Lectura-Polinomios-de-Taylor.pdf',
  },
  {
    filename: 'Recopilacion-de-Ejemplos.pdf',
    section: 'Lecturas y ejemplos',
    title: 'Recopilación de Ejemplos',
    description: 'Ejemplos recopilados de la lectura de polinomios de Taylor y análisis del error.',
    url: '/descargas/Recopilacion-de-Ejemplos.pdf',
  },
].map((file) => ({
  ...file,
  url: file.url ?? `/descargas/ejercicios/${encodeURIComponent(file.filename)}`,
}))

const exerciseGuides = [
  {
    number: '01',
    title: 'Ejercicios para el primer examen',
    topics: 'Preliminares, Taylor y ecuaciones no lineales',
    color: 'blue',
    filename: 'Ejercicios-Examen-1.pdf',
    url: '/descargas/Ejercicios-Examen-1.pdf',
    sections: [
      {
        number: '1',
        title: 'Preliminares',
        items: [
          { label: '1-1 · Burden & Faires, Exercise Set 1.1', detail: 'Ejercicios 1, 2 y 3.' },
          { label: '1-2 · Lectura de Taylor', detail: 'Ejemplos recopilados de “Polinomios de Taylor y análisis del error”.' },
          { label: '1-3 · Burden & Faires, Exercise Set 1.1', detail: 'Ejercicios 9 al 15.' },
          { label: '1-4 · Burden & Faires, Exercise Set 1.1', detail: 'Ejercicios 18, 19 y 20.' },
        ],
      },
      {
        number: '2',
        title: 'Solución numérica de ecuaciones no lineales',
        items: [
          { label: '2-1 · Burden & Faires, Exercise Set 2.1', detail: 'Ejercicios 1 al 14.' },
          { label: '2-2 · Burden & Faires, Exercise Set 2.2', detail: 'Ejercicios 1 al 15.' },
          { label: '2-3 · Burden & Faires, Exercise Set 2.3', detail: 'Ejercicios 1 al 13.' },
          { label: '2-4 · Burden & Faires, Exercise Set 2.4', detail: 'Ejercicios 1 y 2.' },
        ],
      },
    ],
  },
  {
    number: '02',
    title: 'Ejercicios para el segundo examen',
    topics: 'Interpolación y derivadas numéricas',
    color: 'purple',
    filename: 'Ejercicios-Parcial-2.pdf',
    url: '/descargas/Ejercicios-Parcial-2.pdf',
    sections: [
      {
        number: '3',
        title: 'Interpolación y derivadas numéricas',
        items: [
          { label: '3-1 · Interpolación de Lagrange', detail: 'Burden & Faires, Exercise Set 3.1: ejercicios 1 al 8.' },
          { label: '3-3 · Diferencias divididas de Newton', detail: 'Burden & Faires, Exercise Set 3.3: ejercicios 1 al 6, 9, 10, 11, 16 y 17.' },
          { label: '3-4 · Interpolación de Hermite', detail: 'Burden & Faires, Exercise Set 3.4: partes a, b y c de los ejercicios 1, 2, 3, 4 y 6.' },
          { label: '3-5 · Trazadores', detail: 'Burden & Faires, Exercise Set 3.5: ejercicios 1 y 2; partes a, b y c de los ejercicios 3 al 10; ejercicios 11 al 14, 26 y 27.' },
        ],
      },
      {
        number: '4',
        title: 'Derivación numérica',
        items: [
          { label: '4-1a · Fórmulas de tres, cuatro y cinco puntos', detail: 'Calcular las fórmulas para f′(x₀), f′(x₁), f′(x₂), f′(x₃) y f′(x₄), según corresponda a cada conjunto de nodos consecutivos, con separación uniforme Δxᵢ = h.' },
          { label: '4-1b · Fórmulas en el punto medio', detail: 'Calcular las fórmulas de tres puntos con {x₀−h, x₀, x₀+h} y de cinco puntos con {x₀−2h, x₀−h, x₀, x₀+h, x₀+2h}, para f′(x₀).' },
          { label: '4-1c · Burden & Faires, Exercise Set 4.1', detail: 'Ejercicios 1 al 8.' },
        ],
      },
    ],
  },
]
</script>

<template>
  <section class="page-intro">
    <div class="eyebrow"><span class="eyebrow-line"></span> PRÁCTICA DEL CURSO</div>
    <h1>Listas de ejercicios</h1>
    <p class="page-subtitle">Descarga las guías de examen, los ejercicios individuales y las lecturas de apoyo.</p>
  </section>

  <section class="exercise-guides" aria-label="Guías descargables">
    <article v-for="guide in exerciseGuides" :key="guide.number" class="exercise-guide-card">
      <span class="practice-icon" :class="`file-icon-${guide.color}`">{{ guide.number }}</span>
      <div class="practice-copy">
        <h2>{{ guide.title }}</h2>
        <span class="unit-label">{{ guide.topics }}</span>
      </div>
      <a class="download-button practice-download" :href="guide.url" :download="guide.filename">
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

  <section class="individual-downloads" aria-labelledby="individual-downloads-title">
    <div class="section-heading">
      <div>
        <div class="eyebrow"><span class="eyebrow-line"></span> ARCHIVOS INDIVIDUALES</div>
        <h2 id="individual-downloads-title">Descarga cada ejercicio</h2>
        <p>Los ejercicios, lecturas y ejemplos descargables, organizados por sección.</p>
      </div>
      <span class="document-count">{{ exerciseFiles.length }} PDF</span>
    </div>

    <div class="individual-file-grid">
      <article v-for="file in exerciseFiles" :key="file.filename" class="individual-file-card">
        <span class="individual-file-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M6 3.5h8l4 4v13H6z" />
            <path d="M14 3.5v5h4M9 13h6M9 16.5h6" />
          </svg>
        </span>
        <div class="individual-file-info">
          <span class="individual-file-section">{{ file.section }}</span>
          <strong>{{ file.title || file.filename }}</strong>
          <small>{{ file.description || file.filename }}</small>
        </div>
        <a
          class="individual-file-download"
          :href="file.url"
          :download="file.filename"
          :aria-label="`Descargar ${file.filename}`"
        >
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M10 3.5v9m0 0 3.5-3.5M10 12.5 6.5 9M4 14.5v2h12v-2" />
          </svg>
          <span>Descargar</span>
        </a>
      </article>
    </div>
  </section>

  <div class="notice-banner exercise-source-note">
    <span class="notice-icon">i</span>
    <p><strong>Sobre el desglose:</strong> las referencias de abajo se transcribieron de las imágenes compartidas. La guía del primer examen está rotulada MA-323, Análisis Numérico, Ciclo 1-2025; confirma con el docente que esa selección también aplica al ciclo actual.</p>
  </div>

  <section v-for="guide in exerciseGuides" :key="`details-${guide.number}`" class="exercise-breakdown">
    <div class="section-heading">
      <div class="exercise-breakdown-title">
        <div class="eyebrow"><span class="eyebrow-line"></span> EXAMEN {{ guide.number }}</div>
        <h2>{{ guide.title }}</h2>
        <p>{{ guide.topics }}</p>
      </div>
      <a class="download-button section-download" :href="guide.url" :download="guide.filename">
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M10 3.5v9m0 0 3.5-3.5M10 12.5 6.5 9M4 14.5v2h12v-2" />
        </svg>
        Descargar {{ guide.filename }}
      </a>
    </div>

    <div class="exercise-section-grid">
      <article v-for="section in guide.sections" :key="section.number" class="exercise-topic-card">
        <div class="exercise-topic-heading">
          <span class="topic-number">{{ section.number }}</span>
          <h3>{{ section.title }}</h3>
        </div>
        <ul class="exercise-reference-list">
          <li v-for="item in section.items" :key="item.label">
            <strong>{{ item.label }}</strong>
            <span>{{ item.detail }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>

  <p class="notices-source">Las guías y materiales de apoyo están publicados en <a href="https://apuntesmiguel.net/MA0323.html" target="_blank" rel="noopener noreferrer">ApuntesMiguel.NeT · MA0323</a>. Los archivos individuales se sirven desde este portal; las referencias de Burden &amp; Faires identifican ejercicios del libro.</p>
</template>
