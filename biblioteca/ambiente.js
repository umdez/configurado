'use strict';

/*******************************************************************
 * Configurado é de (C) propriedade da Devowly Sistemas 2015-2016 *
 *                 https://github.com/devowly                      *
 *******************************************************************
 * 
 * $Id ambiente.js, criado em 05/08/2016 às 14:40 por Leo Felippe $
 *
 * Versão atual 0.0.1-Beta
 */
 
var Promessa = require('bluebird');

var ambiente = function(configuracao) {

  if (!configuracao) {
    throw new Error('É necessário informar o objeto de configuração jsconfig.');
  } 

  this.minhaConfiguracao = configuracao;
};

/* @Método carregar(). Carrega as variáveis globais do ambiente.
 */
ambiente.prototype.carregar = function () {
  
  var esteObjeto = this;

  return new Promessa(function (deliberar, recusar) {

   /* Define todos as nossas variaveis do ambiente que devem ser incluidas na
    * nossa configuração padrão. Isso faz reescrever os valores do arquivo de
    * configuração (arquivos padrões tambem serão reescritos).
    *
    * Para mais informações @veja https://github.com/dodo/node-jsconfig#configset
    */
    esteObjeto.minhaConfiguracao.set('env', {
    
    });

    deliberar(esteObjeto);
  });

};

module.exports = ambiente;