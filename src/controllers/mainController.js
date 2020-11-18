const path = require('path')

const mainController = {
     homeAr : function (req, res) {
          return res.render('home-ar')
         },
     homeEn: function (req, res) {
          return res.render('home-en')
         },
}


module.exports = mainController