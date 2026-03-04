/* 
Planilha usada para configurar o calendário disponível em: https://docs.google.com/spreadsheets/d/1RBVOdw8O2wAPKhs2fktp60CcFam7eUT09dMbl47_RHM/edit?usp=sharing

Para que outros eventos e datas fiquem disponíveis na página principal é necessário remover as linhas de datas passadas

Limitei para aparecerem apenas 4 datas, caso queira mais, altere o slice
*/

const ID_PLANILHA = "1RBVOdw8O2wAPKhs2fktp60CcFam7eUT09dMbl47_RHM";
const NOME_ABA = "Calendario";

const url = `https://opensheet.elk.sh/${ID_PLANILHA}/${NOME_ABA}`;

async function carregarCalendario() {
  try {
    const resposta = await fetch(url);
    const todosEventos = await resposta.json();
    const eventos = todosEventos.slice(0, 4); // Limite de datas
    const container = document.getElementById("lista-calendario");
    container.innerHTML = "";
    eventos.forEach((evento, index) => {
      const eOUltimoItem = index === eventos.length - 1;
      const itemHTML = `
        <div class="flex gap-3">
          <div class="flex flex-col items-center">
            <div class="w-3 h-3 bg-[#A6192E] rounded-full shrink-0 mt-1"></div>
            ${!eOUltimoItem ? `<div class="w-0.5 bg-white/30 grow my-1"></div>` : ""}
          </div>
          <div class="${!eOUltimoItem ? "pb-4" : ""}">
            <p class="text-[13px] font-normal leading-tight text-white">
              ${evento.Data} - ${evento.Evento}
            </p>
          </div>
        </div>
      `;

      container.innerHTML += itemHTML;
    });
    if (eventos.length === 0) {
      container.innerHTML =
        '<p class="text-white/70 text-[13px] mt-2">Nenhum evento próximo.</p>';
    }
  } catch (erro) {
    document.getElementById("lista-calendario").innerHTML =
      '<p class="text-white/70 text-[13px]">Erro ao carregar calendário.</p>';
  }
}

carregarCalendario();
