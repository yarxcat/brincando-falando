function mostrarAtividade(tipo) {
  let conteudo = document.getElementById("conteudo");
  if (tipo === "historia") {
    conteudo.innerHTML = "<h3>📖 Histórias</h3><p>Era uma vez... Aqui você pode contar histórias que incentivam a fala das crianças.</p>";
  } else if (tipo === "musica") {
    conteudo.innerHTML = "<h3>🎵 Músicas</h3><p>Cante músicas com gestos, sons repetidos e rimas divertidas para estimular a comunicação.</p>";
  } else if (tipo === "roda") {
    conteudo.innerHTML = "<h3>🗣️ Roda de Conversa</h3><p>Promova uma roda de conversa para que as crianças pratiquem ouvir e falar em grupo.</p>";
  }
}
