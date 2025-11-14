const eventos = {
  "2025-10-01": { tipo: "receita" },
  "2025-10-06": { tipo: "despesa" },
  "2025-10-12": { tipo: "despesa" },
  "2025-10-18": { tipo: "receita" },
  "2025-10-28": { tipo: "receita" }
};

function gerarCalendario(ano, mes) {
  const calendario = document.getElementById("calendario-grid");
  calendario.innerHTML = "";
  calendario.className = "calendario";

  const data = new Date(ano, mes, 1);
  const primeiroDiaSemana = data.getDay();
  const totalDias = new Date(ano, mes + 1, 0).getDate();

  for (let i = 0; i < primeiroDiaSemana; i++) {
    calendario.innerHTML += `<div></div>`;
  }

  for (let dia = 1; dia <= totalDias; dia++) {
    const dataStr = `${ano}-${String(mes+1).padStart(2,'0')}-${String(dia).padStart(2,'0')}`;
    const evento = eventos[dataStr];

    let classe = "dia";
    if (evento) classe += " " + evento.tipo;

    calendario.innerHTML += `
      <div class="${classe}" onclick="selecionarData('${dataStr}')">
        ${dia}
      </div>
    `;
  }
}

function selecionarData(data) {
  console.log("Data selecionada:", data);
}

gerarCalendario(2025, 9);
