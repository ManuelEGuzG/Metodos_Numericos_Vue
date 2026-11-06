<script setup>
const exams = [
  {
    name: 'Parcial 1',
    weight: '33 %',
    date: '16 de septiembre · 09:00',
    scope: 'Contenidos de las semanas 1–5.',
  },
  {
    name: 'Parcial 2',
    weight: '34 %',
    date: '28 de octubre · 09:00',
    scope: 'Contenidos de las semanas 6–11.',
  },
  {
    name: 'Parcial 3',
    weight: '33 %',
    date: '27 de octubre · 09:00',
    scope: 'Contenidos de las semanas 12–15.',
  },
]
</script>

<template>
  <section class="welcome-row">
    <div>
      <div class="eyebrow"><span class="eyebrow-line"></span> UNIVERSIDAD DE COSTA RICA · RECINTO DE LIBERIA</div>
      <h1>MA-0323 Métodos Numéricos</h1>
      <p class="page-subtitle">Facultad de Ciencias · Sede Regional de Guanacaste · II Ciclo 2026</p>
    </div>
    <div class="updated-pill"><span class="status-dot"></span> Presencial · 4 créditos</div>
  </section>

  <section class="hero-card" aria-label="Descripción del curso">
    <div class="hero-decoration hero-decoration-one"></div>
    <div class="hero-decoration hero-decoration-two"></div>
    <div class="hero-copy">
      <span class="hero-kicker">CURSO TEÓRICO-PRÁCTICO</span>
      <h2>Algoritmos numéricos<br />para problemas reales.</h2>
      <p>Estudio de aproximaciones, errores y métodos para resolver ecuaciones, integrar y modelar problemas matemáticos.</p>
      <RouterLink class="hero-button" to="/temario">
        Explorar el temario
        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5" /></svg>
      </RouterLink>
    </div>
    <div class="math-art" aria-hidden="true">
      <span class="math-label">f(x)</span>
      <svg viewBox="0 0 290 188" fill="none">
        <path class="graph-grid" d="M20 20v148M65 20v148M110 20v148M155 20v148M200 20v148M245 20v148M20 38h250M20 78h250M20 118h250M20 158h250" />
        <path class="graph-axis" d="M20 118h250M155 20v148" />
        <path class="graph-curve" d="M26 148c24-3 27-27 46-37 18-10 26 6 43-4 18-11 20-40 42-45 21-5 30 18 49 14 19-4 25-35 47-42 9-3 17 0 24 4" />
        <circle cx="114" cy="107" r="4.5" class="graph-point" />
        <circle cx="157" cy="62" r="4.5" class="graph-point" />
        <circle cx="206" cy="76" r="4.5" class="graph-point" />
      </svg>
      <span class="math-formula">x<sub>n+1</sub> = x<sub>n</sub> − <span>f(x<sub>n</sub>)</span>/<span>f′(x<sub>n</sub>)</span></span>
    </div>
    <div class="hero-index">II <span>/</span> 2026</div>
  </section>

  <section class="stats-grid" aria-label="Resumen del curso">
    <article class="stat-card">
      <span class="stat-icon stat-icon-blue">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4.5h9l5 5v10H5z" /><path d="M14 4.5v5h5M8.5 14h7M8.5 17h7" /></svg>
      </span>
      <div class="stat-copy"><span>Créditos</span><strong>04 <small>créditos</small></strong></div>
      <span class="stat-note">del curso</span>
    </article>
    <article class="stat-card">
      <span class="stat-icon stat-icon-purple">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 6.5h15v12h-15z" /><path d="M8 10h8M8 14h5" /></svg>
      </span>
      <div class="stat-copy"><span>Contenidos</span><strong>05 <small>bloques</small></strong></div>
      <span class="stat-note">temáticos</span>
    </article>
    <article class="stat-card">
      <span class="stat-icon stat-icon-green">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" /></svg>
      </span>
      <div class="stat-copy"><span>Evaluación</span><strong>03 <small>parciales</small></strong></div>
      <span class="stat-note">33 % · 34 % · 33 %</span>
    </article>
  </section>

  <section class="quick-access" aria-label="Acceso rápido">
    <RouterLink class="quick-access-card" to="/recursos">
      <span class="quick-access-icon quick-access-blue">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5h8l4 4v13H6z" /><path d="M14 3.5v5h4M9 13h6M9 16.5h6" /></svg>
      </span>
      <span class="quick-access-copy"><strong>Recursos</strong><small>Carta, cuadraturas, notas y libros de análisis numérico</small></span>
      <span class="quick-access-arrow" aria-hidden="true">→</span>
    </RouterLink>
    <RouterLink class="quick-access-card" to="/ejercicios">
      <span class="quick-access-icon quick-access-purple">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14" /></svg>
      </span>
      <span class="quick-access-copy"><strong>Ejercicios y lecturas</strong><small>Guías, ejercicios individuales, Taylor y ejemplos</small></span>
      <span class="quick-access-arrow" aria-hidden="true">→</span>
    </RouterLink>
    <RouterLink class="quick-access-card" to="/avisos">
      <span class="quick-access-icon quick-access-amber">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></svg>
      </span>
      <span class="quick-access-copy"><strong>Avisos importantes</strong><small>Fechas del curso y recordatorios</small></span>
      <span class="quick-access-arrow" aria-hidden="true">→</span>
    </RouterLink>
  </section>

  <section class="content-section">
    <div class="section-heading">
      <div>
        <div class="eyebrow"><span class="eyebrow-line"></span> DATOS DEL CURSO</div>
        <h2>Información general</h2>
        <p>Modalidad, horario y requisitos según la carta al estudiantado.</p>
      </div>
    </div>
    <div class="course-facts">
      <article class="fact-card">
        <span class="fact-label">HORARIO Y AULA</span>
        <strong>Lunes · 9:00–11:50</strong>
        <span>Viernes · 10:00–11:50</span>
        <small>Aula 10 · Recinto de Liberia</small>
      </article>
      <article class="fact-card">
        <span class="fact-label">MATRÍCULA</span>
        <strong>Requisitos</strong>
        <span>MA-0321 y MA-0322</span>
        <small>Correquisitos: ninguno</small>
      </article>
      <article class="fact-card">
        <span class="fact-label">ENFOQUE</span>
        <strong>Teórico-práctico</strong>
        <span>Modalidad presencial</span>
        <small>Uso de software especializado en actividades prácticas</small>
      </article>
    </div>
  </section>

  <section class="content-section">
    <div class="section-heading">
      <div>
        <div class="eyebrow"><span class="eyebrow-line"></span> EVALUACIÓN</div>
        <h2>Tres exámenes parciales</h2>
        <p>La carta distribuye el porcentaje de evaluación de la siguiente manera.</p>
      </div>
    </div>
    <div class="exam-grid">
      <article v-for="exam in exams" :key="exam.name" class="exam-card">
        <div class="exam-topline"><span>{{ exam.name }}</span><strong>{{ exam.weight }}</strong></div>
        <p class="exam-date">{{ exam.date }}</p>
        <p>{{ exam.scope }}</p>
      </article>
    </div>
    <p class="document-note document-warning"><strong>Fecha por verificar:</strong> la carta indica el Parcial 3 el 27 de octubre, aunque el Parcial 2 figura el 28 de octubre y el cronograma ubica el Parcial 3 en noviembre. Confirma la fecha con el docente.</p>
    <p class="policy-note">La carta establece que el uso de herramientas de inteligencia artificial está prohibido para completar las evaluaciones del curso.</p>
  </section>

  <section class="content-section">
    <div class="instructor-card">
      <div class="instructor-avatar">MW</div>
      <div class="instructor-info">
        <div class="eyebrow"><span class="eyebrow-line"></span> ATENCIÓN A ESTUDIANTES</div>
        <h2>Miguel Beltran Walker Ureña</h2>
        <a href="mailto:miguel.walkerurena@ucr.ac.cr">miguel.walkerurena@ucr.ac.cr</a>
      </div>
      <div class="office-hours">
        <span class="fact-label">HORAS DE CONSULTA</span>
        <strong>Lunes · 8:00–10:00</strong>
        <strong>Jueves · 7:00–9:00</strong>
        <small>Cubículo 3 · Recinto de Liberia</small>
      </div>
    </div>
  </section>
</template>
