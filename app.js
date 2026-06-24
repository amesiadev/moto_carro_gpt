const WHATSAPP_NUMBER = "573001112233";

document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const servicio = document.getElementById("servicio").value;
  const detalle = document.getElementById("detalle").value.trim();

  const mensaje = `
*Nueva solicitud de servicio*

*Nombre completo:* ${nombre}
*Dirección:* ${direccion}
*Teléfono:* ${telefono}
*Servicio requerido:* ${servicio}
*Detalle:* ${detalle || "No especificado"}

Deseo recibir información para negociar el servicio.
`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
});
