function abrirModal() {
  document.getElementById("modal").classList.add("activo");
}

function cerrarModal() {
  document.getElementById("modal").classList.remove("activo");
}

function confirmarReserva() {
  var nombre = document.getElementById("input-nombre").value;
  var email = document.getElementById("input-email").value;

  document.getElementById("msg-gracias").innerHTML = "¡Gracias, <strong style='font-weight: 900;'>" + nombre + "</strong>! Tu reserva fue guardada con éxito.";
  document.getElementById("msg-correo").textContent = "Te enviamos los detalles por correo a " + email;

  document.getElementById("modal").classList.remove("activo");
  document.getElementById("modal-feedback").classList.add("activo");
}

function cerrarFeedback() {
  document.getElementById("modal-feedback").classList.remove("activo");
}
