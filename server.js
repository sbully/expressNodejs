var express = require('express');

var app = express();
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('vous etes à l\'accueil');
});
/**Route Statique
 */
app.get('/sous-sol', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('vous etes dans la cave');
});
/**Route Dynamique
 * declaration de  :etage qui devient un parametre accessible dans req 
 * ainsi etage/3/chambre ou etage/4/chambre sont des url correct
 */
/* app.get('/etage/:etage/chambre', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('vous etes dans la chambre à l étage ' + req.params.etage);
}); */

/**Route avec template EJS */
app.get('/etage/:etage/chambre', function(req, res) {
    res.render('chambre.ejs', { etage: req.params.etage });
});

app.get('/compter/:nombre', function(req, res) {
    var noms = ['Robert', 'Jacques', 'David', 'Alain', 'Paul', 'Toto']
    res.render('compter.ejs', { nombre: req.params.nombre, noms: noms });
});

app.use(function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Erreur 404 : page introuvable');
});


app.listen(8080);