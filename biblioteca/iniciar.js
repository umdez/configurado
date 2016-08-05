'use strict';

/*******************************************************************
 * Configurado é de (C) propriedade da Devowly Sistemas 2015-2016 *
 *                 https://github.com/devowly                      *
 *******************************************************************
 * 
 * $Id iniciar.js, criado em 05/08/2016 às 15:21 por Leo Felippe $
 *
 * Versão atual 0.0.1-Beta
 */

var configuracao = require('jsconfig');
var Ambiente = require('./ambiente'); 
var IELC = require('./ielc'); 
var Exame = require('./examinar'); 

exports.iniciar = function(pastaDeConfiguracaoPadrao, registrador, pronto) {
  var esteObjeto = {};
  
  registrador.debug('Carregando o arquivo de configuração do servidor.');

  if (!pastaDeConfiguracaoPadrao) {
    throw new Error('É necessário uma pasta de configuração padrão.');
  } else if (!registrador) {
    throw new Error('É necessário informar o registrador.');
  }

  esteObjeto.ambiente = new Ambiente(configuracao);
  esteObjeto.ielc = new IELC(configuracao, pastaDeConfiguracaoPadrao);
  esteObjeto.exame = new Exame();

  esteObjeto.ambiente.carregar()
  .then(function (amb) {
    esteObjeto.amb = amb;  
  })
  .then(function () {
    return esteObjeto.ielc.carregar();
  })
  .then(function () {

    // Aqui carregamos o arquivo de configuração padrão.
    configuracao.defaults(pastaDeConfiguracaoPadrao);
    
    /* Aqui nós carregamos assincronamente a nossa configuração e prosseguimos.
     *
     * @Parametro {Objeto} [args] Argumento passados
     * @Parametro {Objeto} [opcs] As opções dos argumentos.
     */
    configuracao.load(function(args, opcs) {

      // Armazenamos aqui o endereço e nome do arquivo de configuração por meio dos
      // argumentos informados.
      if(args.length > 0) {
        opcs.ARQUIVO_DE_CONFIGURACAO = args[args.length - 1];
      }

      // Faz a união ou substituição da configuração padrão com a configuração
      // informada.
      if(opcs.ARQUIVO_DE_CONFIGURACAO !== pastaDeConfiguracaoPadrao) {
        configuracao.merge(require(opcs.ARQUIVO_DE_CONFIGURACAO));
      }

      // Examinaremos aqui se a configuração dos obrigatórios confere.
      esteObjeto.exame.obrigatorios(configuracao)
      .then(function () {
        pronto(configuracao);
      }).catch(function (erro) {
        registrador.error(erro); 
      });
      
    });
    
  }).catch(function (erro) {
    registrador.error(erro);
  });

};