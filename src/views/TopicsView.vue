<script setup>
const topics = [
  {
    number: '01',
    title: 'Cálculo y aproximaciones',
    description: 'Repaso de cálculo. Aproximaciones usando polinomios de Taylor y análisis del error en aproximaciones numéricas.',
    details: ['Polinomios de Taylor', 'Error en aproximaciones numéricas'],
  },
  {
    number: '02',
    title: 'Solución de ecuaciones no lineales',
    description: 'Métodos numéricos para hallar soluciones y estudiar su convergencia.',
    details: ['Bisección', 'Newton', 'Secante', 'Orden de convergencia'],
  },
  {
    number: '03',
    title: 'Interpolación',
    description: 'Representación e interpolación de datos y aproximación de derivadas.',
    details: ['Lagrange y Hermite', 'Interpolación a trozos', 'Polinomios de Chebyshev', 'Coordenadas baricéntricas'],
  },
  {
    number: '04',
    title: 'Diferenciación e integración numérica',
    description: 'Aproximación numérica de derivadas e integrales mediante distintas cuadraturas.',
    details: ['Diferenciación numérica', 'Newton-Cotes', 'Cuadratura de Gauss', 'Variaciones de cuadraturas'],
  },
  {
    number: '05',
    title: 'Álgebra lineal numérica',
    description: 'Factorización y solución de sistemas, aproximación de datos y análisis espectral de matrices.',
    details: ['Sistemas de ecuaciones y factorización', 'Mínimos cuadrados y splines', 'Valores y vectores propios', 'Métodos de Sturm, Jacobi y potencias'],
  },
]

const schedule = [
  { week: 1, dates: '10–14 ago', topic: 'Repaso de cálculo y polinomios de Taylor' },
  { week: 2, dates: '17–21 ago', topic: 'Polinomios de Taylor y error en aproximaciones' },
  { week: 3, dates: '24–28 ago', topic: 'Ecuaciones no lineales' },
  { week: 4, dates: '31 ago–4 sep', topic: 'Ecuaciones no lineales' },
  { week: 5, dates: '7–11 sep', topic: 'Ecuaciones no lineales' },
  { week: 6, dates: '14–19 sep', topic: 'Interpolación · Parcial 1' },
  { week: 7, dates: '21–25 sep', topic: 'Interpolación' },
  { week: 8, dates: '28 sep–2 oct', topic: 'Interpolación' },
  { week: 9, dates: '5–9 oct', topic: 'Interpolación' },
  { week: 10, dates: '12–16 oct', topic: 'Diferenciación numérica' },
  { week: 11, dates: '19–23 oct', topic: 'Integración numérica' },
  { week: 12, dates: '26–30 oct', topic: 'Integración numérica · Parcial 2' },
  { week: 13, dates: '02/10–06/11*', topic: 'Integración numérica' },
  { week: 14, dates: '9–13 nov', topic: 'Álgebra lineal numérica' },
  { week: 15, dates: '16–20 nov', topic: 'Álgebra lineal numérica' },
  { week: 16, dates: '23–28 nov', topic: 'Repaso · Parcial 3' },
]
</script>

<template>
  <section class="page-intro">
    <div class="eyebrow"><span class="eyebrow-line"></span> CONTENIDOS OFICIALES</div>
    <h1>Temario del curso</h1>
    <p class="page-subtitle">Los cinco bloques temáticos y el cronograma publicados para MA-0323.</p>
  </section>

  <section class="topic-grid topic-grid-page">
    <article v-for="topic in topics" :key="topic.number" class="topic-card topic-card-page">
      <span class="topic-number">{{ topic.number }}</span>
      <div>
        <h2>{{ topic.title }}</h2>
        <p>{{ topic.description }}</p>
        <ul class="topic-details">
          <li v-for="detail in topic.details" :key="detail">{{ detail }}</li>
        </ul>
      </div>
    </article>
  </section>

  <section class="content-section">
    <div class="section-heading">
      <div>
        <div class="eyebrow"><span class="eyebrow-line"></span> II CICLO 2026</div>
        <h2>Cronograma semanal</h2>
        <p>Plan de actividades transcrito de la carta al estudiantado.</p>
      </div>
    </div>
    <div class="schedule-list">
      <article v-for="item in schedule" :key="item.week" class="schedule-row">
        <span class="schedule-week">SEM {{ item.week.toString().padStart(2, '0') }}</span>
        <span class="schedule-dates">{{ item.dates }}</span>
        <strong>{{ item.topic }}</strong>
      </article>
    </div>
    <p class="document-note"><strong>Fecha por revisar:</strong> la carta indica “02/10 al 06/11” para la semana 13; se muestra como aparece en el documento.</p>
  </section>
</template>
