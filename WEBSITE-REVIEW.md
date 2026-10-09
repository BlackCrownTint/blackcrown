# Revisión de Black Crown Tint — 9 de octubre de 2026

## Hallazgos
El repositorio contenía únicamente dos imágenes de marca. La portada, los servicios, la galería, el equipo y la página de Jacksonville Beach usaban gráficos provisionales o etiquetas de edición. La portada y la página de reseñas mostraban contenido y calificaciones de ejemplo. Ambos formularios interceptaban el envío, mostraban una confirmación y borraban los datos sin enviarlos.

## Mejoras implementadas
- Tres imágenes creadas con IA para auto, vivienda y comercio, identificadas como ilustrativas. No se presentan como trabajos realizados.
- Versiones WebP de 480, 960 y 1440 px, con srcset, dimensiones reservadas, carga diferida y prioridad alta en la portada.
- Portada y servicios con imágenes; galería convertida en inspiración de servicios hasta tener proyectos reales.
- Logo ligero, favicon de 48 px e imagen de redes sociales de 1200 × 630 px.
- Eliminados testimonios de ejemplo y comparación simulada con temperaturas. Enlace real para dejar una reseña en Google.
- Formularios preparados para Netlify Forms con envío POST, campo anti-spam y página de agradecimiento. Eliminadas las confirmaciones ficticias.
- Etiquetas accesibles, campos telefónicos, autocompletado y foco de teclado visible.
- El contenido permanece visible si no carga el módulo de animaciones.

## Validación
Compilación correcta de 17 páginas. Revisadas la portada y el menú móvil a 390 px y la portada en escritorio. Verificados todos los archivos referidos por src y srcset. Comprobado el marcado de ambos formularios. No se envió ninguna solicitud real.

## Pendientes antes de publicar
1. Activar la detección de formularios y notificaciones en Netlify; después del despliegue, probar la recepción de una solicitud. El archivo netlify.toml indica Netlify, pero no se verificó la configuración de la cuenta de alojamiento.
2. Sustituir mapas provisionales de Contact y Service Areas por un mapa real de cobertura de servicio móvil.
3. Conseguir fotos auténticas del equipo y proyectos; incluir pares de antes/después solo cuando existan fotos reales del mismo trabajo.
4. Verificar las afirmaciones ya existentes sobre autorización 3M, garantías, rendimiento y experiencia antes de publicarlas.
5. Revisar y actualizar dependencias: npm audit reportó 11 alertas (1 crítica, 9 altas y 1 baja). El alcance real depende de las funciones usadas. Se mantuvo Astro 5; la actualización mayor requiere revisión independiente.
6. La URL pública no fue accesible mediante la herramienta web. La auditoría se basa en el repositorio y su compilación local; no se presenta como medición de rendimiento del sitio en producción.

## Recursos
Imágenes creadas con la herramienta ImageGen. Versiones listas para web en public/images. No hay una medición de Lighthouse antes/después; los tamaños son de archivos, no tiempos de carga.
