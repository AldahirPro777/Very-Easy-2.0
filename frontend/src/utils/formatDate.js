function formatDate(isoDate) {
  const date = new Date(isoDate);

  // Opciones para el formato de la fecha
  const dateOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  // Obtener la fecha formateada
  const formattedDate = date.toLocaleDateString("es-ES", dateOptions);

  return formattedDate;
}

export default formatDate;
