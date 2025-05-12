function mostrarConexao() {
  const mensagem = "O campo produz alimentos, fibras e energia. A cidade consome, transforma e apoia com tecnologia e comércio. Juntos, campo e cidade formam um ciclo de cooperação!";
  document.getElementById("mensagem").innerText = mensagem;
}

const curiosidades = [
  "O Brasil é um dos maiores produtores de alimentos do mundo.",
  "A agricultura familiar representa mais de 70% dos alimentos consumidos no país.",
  "Tecnologias como drones e sensores estão modernizando a agricultura.",
  "O campo também é responsável pela produção de biocombustíveis como o etanol.",
  "A feira da sua cidade é um elo direto com os produtores rurais locais."
];

function mostrarCuriosidade() {
  const index = Math.floor(Math.random() * curiosidades.length);
  document.getElementById("curiosidade").innerText = curiosidades[index];
}
