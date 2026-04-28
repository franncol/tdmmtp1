function abrirModal() {
  document.getElementById("modal").classList.add("activo");
}

function cerrarModal() {
  document.getElementById("modal").classList.remove("activo");
}

function confirmarReserva() {
  document.getElementById("modal").classList.remove("activo");
  document.getElementById("modal-feedback").classList.add("activo");
}

function cerrarFeedback() {
  document.getElementById("modal-feedback").classList.remove("activo");
}
