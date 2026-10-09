# Evaluación del visualizador y propuesta de experiencia
9 de octubre de 2026

## Recomendación
Conservar una experiencia interactiva, pero orientarla a decidir por calor, claridad y restricciones, con dos herramientas independientes. Un auto 3D rotatorio ofrece espectáculo pero no valida tono, rechazo solar ni cumplimiento legal. Para esta web conviene un selector 2D de ventanas y un comparador de películas basado en fichas verificadas; para vivienda, una calculadora de escenarios de ahorro y recuperación de la inversión.

La hipótesis SEO sobre el calor viene del usuario. No se recibió el análisis SEO original ni un informe de consultas; no se afirma que se hayan validado volúmenes de búsqueda.

## Lo que funciona
La separación auto/vivienda, el control interactivo y la salida hacia una cotización tienen sentido. La marca se reconoce y la comparación es inmediata. Estas ideas pueden mantenerse.

## Problemas comprobados en el HTML suministrado
- `glassOpacity()` limita la opacidad a un mínimo de 0.34. Valores de VLT de 66% a 90% reciben la misma opacidad; no pueden distinguirse en ese render.
- El material es una malla negra transparente bajo luces magenta y azul, no un modelo óptico calibrado. VLT es transmisión luminosa, no opacidad CSS. Un monitor no garantiza el aspecto exacto de un vidrio real.
- Todos los vidrios comparten un solo VLT. No se pueden escoger niveles distintos delante y detrás.
- No se incorpora el vidrio original. Como aproximación educativa, vidrio 75% × película 35% produce alrededor de 26.25% VLT combinado. Esto no sustituye la medición; fichas que ya reportan vidrio más película no deben multiplicarse otra vez.
- `heatRejection()` usa `0.55 + 0.40 * darkness` para cerámica y `0.10 + 0.55 * darkness` para estándar. No usa un producto concreto ni una ficha técnica. El 81% mostrado a 35% VLT es el resultado de esa fórmula, no una medición.
- Las afirmaciones de cumplimiento se basan solo en VLT. Falta reflectividad, parabrisas, clasificación del vehículo, excepciones y medición del conjunto instalado.
- El ahorro de vivienda usa recibo × 55% de aire acondicionado × 30% de carga por ventanas × el rechazo inventado; después redondea y multiplica por nueve meses. No hay costo instalado, orientación, área acristalada, SHGC, aislamiento ni datos energéticos de la casa. No es una estimación personalizada.
- El botón de cotización muestra un alert o llama a sendPrompt; no lleva al formulario de la web.
- La guía legal enlaza a un competidor y presenta multas específicas sin fuente oficial.
- El contenido y la interfaz están en español mientras la web está dirigida a búsquedas en inglés.
- El canvas, el layout fijo y overflow:hidden reducen la accesibilidad y dificultan mostrar todos los controles en pantallas pequeñas. Los segmentos no comunican su selección con aria-pressed y la pestaña carece de roles/estado completos. No hay un fallback útil si WebGL o la importación externa falla.

## Camino recomendado: auto
Ubicar el módulo en la página de auto y enlazarlo desde portada y guía legal. Encabezado propuesto: “Less heat. The right tint. A clearer choice.”
1. Preguntar prioridad: heat / glare / privacy / visibility; tipo de vehículo y ventana.
2. Ofrecer películas y tonos que realmente instala el negocio, usando nombres exactos de producto y fichas del mercado aplicable.
3. Mostrar VLT, TSER (Total Solar Energy Rejected), UV y reflectividad por producto y condición de ensayo. No equiparar IRR con TSER. No traducir TSER directamente a grados de temperatura dentro del auto.
4. Mostrar un auto de perfil con ventanas seleccionables y una aproximación visual neutra, sin luces magenta sobre el vidrio. Permitir tonos distintos delante y detrás. Explicar que es una comparación relativa, no una reproducción exacta.
5. Evaluar límites como orientación inicial sobre VLT combinado; cerca del umbral, pedir medición en vez de prometer legalidad. Mantener reflectividad y parabrisas visibles en el resultado.
6. Comparar dos películas de claridad similar para enseñar que oscurecer más no es la única forma de reducir calor.
7. CTA “Get a quote for this setup”, llevando la selección al formulario sin enviar datos hasta que el usuario lo solicite.

Si faltan fichas verificadas, mostrar beneficios cualitativos y solicitar asesoría, sin inventar porcentajes. Para reproducir tonos con más precisión hacen falta fotografías controladas o muestras físicas de películas reales; imágenes IA sirven para contexto visual, no para calibración.

## Camino recomendado: vivienda
Ubicar el módulo en Residential, separado de las leyes vehiculares. Encabezado propuesto: “Could window film lower your cooling costs?”
Inputs: gasto eléctrico anual (preferiblemente últimos 12 meses), costo instalado, proporción del gasto atribuible a climatización y un rango explícito de reducción de climatización. Añadir orientación y superficie de ventanas para cualificar la solicitud; no convertir esas respuestas en predicciones físicas sin un modelo validado.

Modelo transparente de escenarios:
- ahorro anual = gasto eléctrico anual × proporción de climatización × reducción de climatización;
- ahorro acumulado simple en N años = ahorro anual × N;
- recuperación simple = costo instalado / ahorro anual; si el ahorro es cero, no hay recuperación finita.

Mostrar tres escenarios elegidos y explicados, no probabilidades ni promesas. Sin evidencia para fijar el rango, pedir que el usuario elija supuestos y dejar claro que explora escenarios. El resultado no debe derivarse del tono, del TSER o de un porcentaje de rayos solares dibujados.

Ejemplo puramente aritmético: gasto anual $2,400, climatización 40%, reducción de climatización 15% => $144/año. Costo instalado $1,200 => recuperación simple 8.3 años. Estos supuestos no son una recomendación de ahorro para Florida. Excluye variaciones de tarifa, mantenimiento, degradación y descuento financiero.

Mostrar también comodidad, control del deslumbramiento y protección interior como beneficios independientes del retorno financiero. Comprobar compatibilidad del film con el vidrio antes de recomendar una instalación.

## SEO y medición
Conservar explicaciones y respuestas en HTML renderizado; el canvas no debe ser el único contenido informativo. Enlazar Home → Auto → comparador → guía legal, y Home → Residential → escenarios de ahorro. No crear páginas separadas por cada porcentaje sin contenido distinto y útil.

Google Search Console: consultas, impresiones, clics, CTR y posición por URL y grupo de intención. La metaetiqueta verifica propiedad; no registra movimientos del slider ni conversiones.

Medición del módulo requeriría configurar GA4 u otra analítica aparte, con eventos como tool_started, film_compared, savings_scenario_viewed y quote_clicked. No se añadió analítica ni se registran datos personales con la metaetiqueta. Medir leads reales requeriría verificar recepción y conversión de formularios.

## Cambios realizados ahora
- Metaetiqueta google-site-verification en BaseLayout, que incluye todas las páginas.
- Corrección de la guía legal y tabla de auto: 6% mínimo detrás del conductor para vehículos multipropósito que califican, en lugar de “any darkness”.
- Aclaración sobre vidrio más película y límites de reflectividad.
- El visualizador suministrado no se publicó ni se integró: primero se define el catálogo y los datos que respaldarán sus salidas.

## Fuentes
- Florida 316.2953: https://www.flsenate.gov/Laws/Statutes/2026/316.2953 — VLT delantero al menos 28%, reflectividad máximo 25%, probado en el vidrio instalado.
- Florida 316.2954: https://www.flsenate.gov/Laws/Statutes/2026/316.2954 — detrás del conductor 15% o 6% para multipropósito, reflectividad máximo 35%.
- Florida 316.2952: https://www.flsenate.gov/Laws/Statutes/2026/316.2952 — reglas del parabrisas.
- 3M ficha Ceramic IM, usada como ejemplo de métricas separadas; no se presume que sea el producto o mercado del cliente: https://multimedia.3m.com/mws/media/2641104O/anz-ceramic-im-technical-data-sheet-dec-2025.pdf
- DOE, selección de ventanas: https://www1.eere.energy.gov/buildings/publications/pdfs/building_america/measure_guide_windows.pdf
- Google verificación: https://support.google.com/webmasters/answer/9008080
- Google rendimiento: https://support.google.com/webmasters/answer/7576553

## Implementación posterior
Se añadieron AutoTintExplorer y HomeSavingsExplorer en las páginas Auto y Residential, con accesos desde Home y los encabezados de servicio. Auto usa objetivos de VLT combinado, límites de referencia y vista 2D relativa; no muestra cifras de rendimiento sin catálogo verificado. Residential permite tres escenarios, ahorro acumulado, saldo tras instalación, recuperación simple y gráfica temporal. Los botones conservan la selección en sessionStorage y rellenan el formulario únicamente cuando el usuario abre la cotización; no envían solicitudes automáticamente. No se añadieron scripts de analítica.

Validación: límites 28/15/6, cálculos de escenarios, ahorro cero y entradas inválidas; compilación de 17 páginas; controles de auto y traspaso al formulario probados en navegador; calculadora residencial comprobada en escritorio y móvil.
