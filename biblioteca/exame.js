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

exports.verificar = function(configuracao) {
  var esteObjeto = this;

  _.deepMapValues(configuracao, function(valor, propriedade) {
    
    if (asDiretivasObrigatorias.hasOwnProperty(propriedade)) {
      var oTipoDaPropriedade = asDiretivasObrigatorias[propriedade].tipo;
      var min = asDiretivasObrigatorias[propriedade].min;
      var max = asDiretivasObrigatorias[propriedade].max;

      /*
      switch (oTipoDaPropriedade) {
        case "texto":
          if (_.isString(valor)) {
            var seAlcanceCorreto = esteObjeto.seAlcanceEstiverCorreto(_.toLength(valor), min, max);
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
            var seAlcanceCorreto = esteObjeto.seAlcanceEstiverCorreto(valor, min, max);
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
      */
    }
  });

}

var seAlcanceEstiverCorreto = function(tamanho, min, max) {
   
  if (min >= 0 && max <= 9999 && max > min) {
    var seAlcanceCorreto = _.inRange(tamanho, min, max);
    if (seAlcanceCorreto) {
      // Tudo perfeito!
      return true;
    } else {
      // Não está na extenção permitido
      return false;
    }
  } else {
    // Min ou Max estão incorretos ou não definidos. Apenas continuar.
    return true;
  }
}