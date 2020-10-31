export function maxLenght(text) {
  var maxCaracters = 63;

  return text.slice(0, maxCaracters) + (text.length > maxCaracters ? "..." : "");
}

export function randomToken(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const textLabels = {
  body: {
    noMatch: 'Nenhum registro foi encontrado',
    toolTip: 'Ordenar',
  },
  pagination: {
    next: 'Próxima Página',
    previous: 'Página Anterior',
    rowsPerPage: 'Linhas por Página:',
    displayRows: 'de',
  },
  toolbar: {
    search: 'Buscar',
    downloadCsv: 'Download CSV',
    print: 'Imprimir',
    viewColumns: 'Ver Colunas',
    filterTable: 'Filtrar Tabela',
  },
  filter: {
    all: 'Todos',
    title: 'FILTROS',
    reset: 'LIMPAR',
  },
  viewColumns: {
    title: 'Mostrar Columas',
    titleAria: 'Mostrar/Ocultar Colunas',
  },
  selectedRows: {
    text: 'Linha(s) Selecionada',
    delete: 'Deletar',
    deleteAria: 'Deletar linhas selecionadas',
  },
};
