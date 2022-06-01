export type TMegasena = {
  acumulado: boolean;
  dataApuracao: string;
  dataProximoConcurso: string;
  dezenasSorteadasOrdemSorteio: number[];
  exibirDetalhamentoPorCidade: true;
  id?: number;
  indicadorConcursoEspecial: number;
  listaDezenas: number[];
  listaDezenasSegundoSorteio?: number[];
  listaMunicipioUFGanhadores: string[];
  listaRateioPremio: [
      {
          descricaoFaixa: string;
          faixa: number;
          numeroDeGanhadores: number;
          valorPremio: number
      }
  ];
  listaResultadoEquipeEsportiva?: null;
  localSorteio: string;
  nomeMunicipioUFSorteio: string;
  nomeTimeCoracaoMesSorte: string;
  numero: number;
  numeroConcursoAnterior: number;
  numeroConcursoFinal_0_5: number;
  numeroConcursoProximo: number;
  numeroJogo: number;
  observacao?: string;
  premiacaoContingencia?: null;
  tipoJogo: string;
  tipoPublicacao: number;
  ultimoConcurso: boolean;
  valorArrecadado: number;
  valorAcumuladoConcurso_0_5: number;
  valorAcumuladoConcursoEspecial: number;
  valorAcumuladoProximoConcurso: number;
  valorEstimadoProximoConcurso: number;
  valorSaldoReservaGarantidora: number;
  valorTotalPremioFaixaUm: number
}