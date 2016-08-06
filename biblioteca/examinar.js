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

var asDiretivasObrigatorias = {

/* @Diretiva {armazenamento} O nosso sistema de armazenamento. */
  "armazenamento.usuario":  {tipo: 'texto', min: 2, max: 30}
, "armazenamento.senha":    {tipo: 'texto', min: 2, max: 30}
, "armazenamento.database": {tipo: 'texto', min: 2, max: 30}
  
/* @Diretiva {servidor} O nosso servidor http. */
, "servidor.porta":   {tipo: 'numero', min: 100, max: 600 }
};

var continuar = {
  "ok": true
, "erro": false
};

var exame = function(configuracao) {
  
  if (!configuracao) {
    throw new Error('É necessário informar o objeto de configuração jsconfig.');
  }

  this.cfg = configuracao;
};

exame.prototype.verificarOsObrigatorios = function() {
  var esteObjeto = this;

  _.deepMapValues(this.cfg, function(valor, propriedade) {
    console.log('obrigatorios');
    return 0;
    
    if (asDiretivasObrigatorias[propriedade] !== undefined) {
      var oTipoDaPropriedade = asDiretivasObrigatorias[propriedade].tipo;
      var min = asDiretivasObrigatorias[propriedade].min;
      var max = asDiretivasObrigatorias[propriedade].max;

      switch (oTipoDaPropriedade) {
        case "texto":
          if (_.isString(valor)) {
            var seAlcanceCorreto = esteObjeto._seAlcanceEstaCorreto(_.toLength(valor), min, max);
            if (seAlcanceCorreto) {
              // Tudo ok!
            } else {
              throw new Error('A propriedade (' + propriedade + ') não foi configurada corretamente.');
            }
          } else {
            throw new Error('A propriedade (' + propriedade + ') não foi configurada corretamente.');
          }
        break;
        case "numero":
          if (_.isNumber(valor)) {
            var seAlcanceCorreto = esteObjeto._seAlcanceEstaCorreto(valor, min, max);
            if (seAlcanceCorreto) {
              // Tudo ok!
            } else {
              throw new Error('A propriedade (' + propriedade + ') não foi configurada corretamente.');
            }
            
          } else {
            throw new Error('A propriedade (' + propriedade + ') não foi configurada corretamente.');
          }
        break;
        default: 
      }
    }
  });

}

exame.prototype._seAlcanceEstaCorreto = function(tamanho, min, max) {
   
  if (min >= 0 && max <= 9999 && max > min) {
    var seAlcanceCorreto = _.inRange(valor, min, max);
    if (seAlcanceCorreto) {
      // Tudo perfeito!
      return continuar.ok;
    } else {
      // Não está na extenção permitido
      return continuar.erro;
    }
  } else {
    // Min ou Max estão incorretos ou não definidos. Apenas continuar.
    return continuar.ok;
  }
}

module.exports = exame;