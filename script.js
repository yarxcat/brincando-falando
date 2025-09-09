function mostrarAtividade(tipo) {
  let resultado = document.getElementById("resultado");
  if (tipo === "historia") {
    resultado.innerHTML = "<h3>📖 Histórias</h3><p>Era uma vez... um recurso para professores contarem histórias que incentivam as crianças a falarem mais.</p>";
  } else if (tipo === "musica") {
    resultado.innerHTML = "<h3>🎵 Músicas</h3><p>Cante músicas com gestos e rimas fáceis, estimulando fala, ritmo e socialização.</p>";
  } else if (tipo === "roda") {
    resultado.innerHTML = "<h3>🗣️ Roda de Conversa</h3><p>Atividade em grupo para desenvolver habilidades de escuta, respeito e diálogo.</p>";
  }
}
