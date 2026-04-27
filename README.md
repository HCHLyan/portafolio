<section class="videos-section">

  <!-- Video izquierda -->
  <div class="video-box">
    <iframe src="https://www.youtube.com/embed/VIDEO1"></iframe>
  </div>

  <!-- Video derecha -->
  <div class="video-box">
    <iframe src="https://www.youtube.com/embed/VIDEO2"></iframe>
  </div>

</section>
🎨 CSS
/* Contenedor principal */
.videos-section {
  display: grid;

  /* 2 columnas iguales */
  grid-template-columns: repeat(2, 1fr);

  gap: 30px; /* separación entre videos */

  padding: 40px; /* separación de los bordes */
}

/* Cada video */
.video-box iframe {
  width: 100%;
  height: 300px;
  border-radius: 10px;
  border: none;
}
📱 Responsive (CLAVE)
@media (max-width: 768px) {
  .videos-section {
    grid-template-columns: 1fr; /* se apilan */
  }
}
⚡ ¿Se podría con Flexbox?

Sí, pero sería menos limpio:

.videos-section {
  display: flex;
  gap: 30px;
}

.video-box {
  flex: 1;
}
