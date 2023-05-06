// Base de données
let Utilisateurs = [
    ['ahere', 'Hère', 'Axel', 'axel.here@betuf.fr', 'abcde', 'Directeur', ''],
    ['vroule', 'Roule', 'Vanessa', 'vanessa.roule@betuf.fr', 'abcde', 'Directeur recherche', ''],
    ['vsunnick', 'Sunnick', 'Vincent', 'vincent.sunnick@betuf.fr', 'abcde', 'Secrétaire général', ''],
    ['gtaie', 'Taie', 'Gilbert', 'gilbert.taie@betuf.fr', 'abcde', 'Chef de pôle', 'Constructio, Marchés, Exécution'],
    ['jvoilbout', 'Voilbout', 'Jean', 'jean.voilbout@betuf.fr', 'abcde', 'Chef de pôle', 'Géologie, Géothermie'],
    ['lvragedar', 'Vragedar', 'Louis', 'louis.vragedar@betuf.fr', 'abcde', 'Chef de pôle', 'Matériaux, structure'],
    ['athinerairebis', 'Thinérairebis', 'Ali', 'ali.thinerairebis@betuf.fr', 'abcde', 'Chef de pôle', 'Ventilation et Environnement'],
    ['adoublesens', 'Doublesens', 'Angela', 'angela.doublesens@betuf.fr', 'abcde', 'Chef de pôle', 'Sécurité'],
    ['ofour', 'Four', 'Oscar', 'oscar.four@betuf.fr', 'abcde', 'Chef de pôle', 'Exploitation'],
    ['rtaurout', 'Taurout', 'Roméo', 'romeo.taurout@betuf.fr', 'abcde', 'Chef de pôle', 'Equipements électriques et gestion'],
    ['atoutdroit', 'Toudroit', 'Alphonse', 'alphonse.toudroit@betuf.fr', 'abcde', 'Chargé de missions', ''],
    ['apartemental', 'Partemental', 'Amédée', 'amedee.partemental@betuf.fr', 'abcde', 'Chargé de missions', ''],
    ['afrastructure', 'Frastructure', 'Alain', 'alain.frastructure@betuf.fr', 'abcde', 'Chargé de missions', ''],
    ['vdevaux', 'Devaux', 'Valérie', 'valerie.devaux@betuf.fr', 'abcde', 'Chargé de missions', ''],
    ['ajohn', 'John', 'Aline', 'aline.john@betuf.fr', 'abcde', 'Chargé de missions', ''],
    ['lrection', 'Rection', 'Lydie', 'lydie.rection@betuf.fr', 'abcde', 'Chargé de missions', ''],
    ['jdoe', 'Doe', 'Jane', 'jane.doe@betuf.fr', 'abcde', 'Technicien', 'Sécurité']
]

ids = []
mdps = []

indice_co = 0
for (let i = 0 ; i < Utilisateurs.length ; i++){
    ids.push(Utilisateurs[i][0]);
    mdps.push(Utilisateurs[i][4]);
}

function login(){
    open('login.html');
}


function connexion(){
    var form = document.forms['form'];
    id = document.form.user_name.value;
    mdp = document.form.user_mdp.value;
    if ((ids.indexOf(id) == mdps.indexOf(mdp)) & ids.indexOf(id) != -1){
        indice_co = ids.indexOf(id);
        open('home2.html');

    }else{
        alert("Identifiant ou mot de passe inconnu");
    }
    
}


// AUTORISATION DE CRÉER, SUPPRIMER OU MODIFIER DES EVENTS
var auto_totale = false;
var auto_partielle = false;
var role = Utilisateurs[indice_co][5];
if (role.indexOf('Directeur') != -1){
    auto_totale = true;
    auto_partielle = true;
}else{
    if (role.indexOf('Chef') != -1){
        auto_partielle = true;
    }
}

