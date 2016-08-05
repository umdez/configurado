'use strict';

/*******************************************************************
 * Configurado é de (C) propriedade da Devowly Sistemas 2015-2016 *
 *                 https://github.com/devowly                      *
 *******************************************************************
 * 
 * $Id examinar.js, criado em 02/08/2016 às 10:35 por Leo Felippe $
 *
 * Versão atual 0.0.1-Beta
 */

/* Realiza uma exame das diretivas obrigatórias. */

var Promessa = require('bluebird');
var _ = require("lodash");

_.mixin(require("lodash-deep"));

 /*
var Promessa = require('bluebird');

var propriedade = function(opcoes) {
  this.tipo = opcoes.tipo;
  this.min = opcoes.min;
  this.max = opcoes.max;
};

var asDiretivasObrigatorias = {

  //asDiretivasObrigatorias["armazenamento"]["dialeto"].tipo === 'texto'
  
  "armazenamento.dialeto":  new propriedade({tipo: 'texto', min: 3, max: 12})
, "armazenamento.usuario":  new propriedade({tipo: 'texto', min: 3, max: 12})
, "armazenamento.senha":    new propriedade({tipo: 'texto', min: 3, max: 12})
, "armazenamento.database": new propriedade({tipo: 'texto', min: 3, max: 12})
  
, "servidor.porta":   new propriedade({tipo: 'numero', min: 300, max: 400 })
  
, "servidor.cors.origem":  new propriedade({tipo: 'matriz' })
  
, "servidorRest.base":    new propriedade({tipo: 'texto', min: 5, max: 45})    
};
*/

var exame = function() { };

exame.prototype.obrigatorios = function(configuracao) {
  var esteObjeto = this;

  return new Promessa(function (deliberar, recusar) {
    _.deepMapValues(configuracao, function(value, path){
        console.log( path + ' is ' + value);
    });

    console.log(_.get(configuracao, 'servidor.cors'));
    console.log(_.get(configuracao, 'servidor.certificados.certificado'));

    deliberar(esteObjeto);
  });
}

module.exports = exame;