<script setup>
const notices = [
  {
    type: 'Material de apoyo',
    title: 'Carta y documentos del curso disponibles',
    description: 'La carta, el formulario de cuadraturas y las referencias a Burden en inglés y español están en Recursos. Las guías, ejercicios individuales, la lectura de Taylor y la recopilación de ejemplos están en Ejercicios.',
    tone: 'info',
  },
  {
    type: 'Confirmación necesaria',
    title: 'Verificar fecha del Parcial 3',
    description: 'La tabla de evaluación de la carta indica el 27 de octubre a las 09:00 para el Parcial 3. Sin embargo, el Parcial 2 aparece el 28 de octubre y el cronograma ubica el Parcial 3 en la semana del 23 al 28 de noviembre.',
    tone: 'warning',
  },
  {
    type: 'Revisión del cronograma',
    title: 'Fecha de la semana 13',
    description: 'El cronograma de la carta muestra “02/10 al 06/11” para la semana 13. Se conserva la fecha tal como fue publicada y se recomienda confirmarla con el docente.',
    tone: 'info',
  },
  {
    type: 'Evaluaciones',
    title: 'Uso de herramientas de inteligencia artificial',
    description: 'Según la carta al estudiantado, el uso de herramientas o modelos de IA para completar las evaluaciones del curso está prohibido.',
    tone: 'important',
  },
]
</script>

<template>
  <section class="page-intro">
    <div class="eyebrow"><span class="eyebrow-line"></span> COMUNICADOS DEL CURSO</div>
    <h1>Avisos</h1>
    <p class="page-subtitle">Recordatorios y datos que conviene tener presentes durante el ciclo.</p>
  </section>

  <section class="notices-list" aria-label="Avisos importantes">
    <article v-for="notice in notices" :key="notice.title" class="notice-card" :class="`notice-${notice.tone}`">
      <span class="notice-mark" aria-hidden="true">{{ notice.tone === 'important' ? '!' : 'i' }}</span>
      <div>
        <span class="notice-type">{{ notice.type }}</span>
        <h2>{{ notice.title }}</h2>
        <p>{{ notice.description }}</p>
      </div>
    </article>
  </section>

  <p class="notices-source">Fuente de materiales y comunicados: <a href="https://apuntesmiguel.net/MA0323.html" target="_blank" rel="noopener noreferrer">ApuntesMiguel.NeT · MA0323</a> y la carta al estudiantado.</p>
</template>
