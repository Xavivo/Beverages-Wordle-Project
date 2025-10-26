import drinks from '../drinks.json';

/**
 * Build bilingual descriptions array from drinks.json.
 * Each item: { id, nombre_en, nombre_es, descripcion_en, descripcion_es }
 */
export const generateDescriptions = () => {
  return (drinks || []).map((d, idx) => {
    const id = d.id ?? idx + 1;
    const nombre_en = d.nombre_en ?? d.nombre ?? `Drink #${id}`;
    const nombre_es = d.nombre_es ?? d.nombre ?? `Bebida #${id}`;

    const partsEn = [];
    const partsEs = [];

    if (d.tipo_en ?? d.tipo) partsEn.push(`${d.tipo_en ?? d.tipo}`);
    if (d.tipo_es ?? d.tipo) partsEs.push(`${d.tipo_es ?? d.tipo}`);

    if (d.pais_origen_en ?? d.pais_origen) partsEn.push(`from ${d.pais_origen_en ?? d.pais_origen}`);
    if (d.pais_origen_es ?? d.pais_origen) partsEs.push(`de ${d.pais_origen_es ?? d.pais_origen}`);

    if (d.graduacion_alcohol !== undefined && d.graduacion_alcohol !== null) {
      partsEn.push(`~${d.graduacion_alcohol}% ABV`);
      partsEs.push(`~${d.graduacion_alcohol}% ABV`);
    }

    if (d.ingrediente_principal_en ?? d.ingrediente_principal) partsEn.push(`main ingredient: ${d.ingrediente_principal_en ?? d.ingrediente_principal}`);
    if (d.ingrediente_principal_es ?? d.ingrediente_principal) partsEs.push(`ingrediente principal: ${d.ingrediente_principal_es ?? d.ingrediente_principal}`);

    if (d.fecha_creacion_año) {
      partsEn.push(`created in ${d.fecha_creacion_año}`);
      partsEs.push(`creada en ${d.fecha_creacion_año}`);
    }

    if (d.precio_dolares !== undefined && d.precio_dolares !== null) {
      partsEn.push(`typical price: $${d.precio_dolares}`);
      partsEs.push(`precio típico: $${d.precio_dolares}`);
    }

    const descripcion_en = partsEn.length ? partsEn.join('; ') + '.' : 'No detailed metadata available for this drink.';
    const descripcion_es = partsEs.length ? partsEs.join('; ') + '.' : 'No hay metadatos detallados para esta bebida.';

    return { id, nombre_en, nombre_es, descripcion_en, descripcion_es };
  });
};

const lang = localStorage.getItem('alcoholdle_lang') || 'en';
const displayName = drink[`nombre_${lang}`] || drink.nombre || drink.nombre_en;