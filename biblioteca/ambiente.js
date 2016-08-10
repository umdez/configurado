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

/* @Função carregar(). Carrega as variáveis globais do ambiente.
 */
exports.carregar = function (configuracao) {

 /* Define todos as nossas variaveis do ambiente que devem ser incluidas na
  * nossa configuração padrão. Isso faz reescrever os valores do arquivo de
  * configuração (arquivos padrões tambem serão reescritos).
  *
  * Para mais informações @veja https://github.com/dodo/node-jsconfig#configset
  */
  configuracao.set('env', {
  
  });

};
