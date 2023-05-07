// Base de données
var Utilisateurs = [
    ['ahere', 'Hère', 'Axel', 'axel.here@betuf.fr', 'abcde', 'Directeur', ''],
    ['vroule', 'Roule', 'Vanessa', 'vanessa.roule@betuf.fr', 'abcdef', 'Directeur recherche', ''],
    ['vsunnick', 'Sunnick', 'Vincent', 'vincent.sunnick@betuf.fr', 'abcdefg', 'Secrétaire général', ''],
    ['gtaie', 'Taie', 'Gilbert', 'gilbert.taie@betuf.fr', 'abcdefgh', 'Chef de pôle', 'Constructio, Marchés, Exécution'],
    ['jvoilbout', 'Voilbout', 'Jean', 'jean.voilbout@betuf.fr', 'abcdefghi', 'Chef de pôle', 'Géologie, Géothermie'],
    ['lvragedar', 'Vragedar', 'Louis', 'louis.vragedar@betuf.fr', 'abcdefghij', 'Chef de pôle', 'Matériaux, structure'],
    ['athinerairebis', 'Thinérairebis', 'Ali', 'ali.thinerairebis@betuf.fr', 'kkkk', 'Chef de pôle', 'Ventilation et Environnement'],
    ['adoublesens', 'Doublesens', 'Angela', 'angela.doublesens@betuf.fr', 'jjjj', 'Chef de pôle', 'Sécurité'],
    ['ofour', 'Four', 'Oscar', 'oscar.four@betuf.fr', 'iiii', 'Chef de pôle', 'Exploitation'],
    ['rtaurout', 'Taurout', 'Roméo', 'romeo.taurout@betuf.fr', 'hhhh', 'Chef de pôle', 'Equipements électriques et gestion'],
    ['atoutdroit', 'Toudroit', 'Alphonse', 'alphonse.toudroit@betuf.fr', 'gggg', 'Chargé de missions', ''],
    ['apartemental', 'Partemental', 'Amédée', 'amedee.partemental@betuf.fr', 'ffff', 'Chargé de missions', ''],
    ['afrastructure', 'Frastructure', 'Alain', 'alain.frastructure@betuf.fr', 'eeee', 'Chargé de missions', ''],
    ['vdevaux', 'Devaux', 'Valérie', 'valerie.devaux@betuf.fr', 'dddd', 'Chargé de missions', ''],
    ['ajohn', 'John', 'Aline', 'aline.john@betuf.fr', 'cccc', 'Chargé de missions', ''],
    ['lrection', 'Rection', 'Lydie', 'lydie.rection@betuf.fr', 'bbbb', 'Chargé de missions', ''],
    ['jdoe', 'Doe', 'Jane', 'jane.doe@betuf.fr', 'aaaa', 'Technicien', 'Sécurité']
]

// let Events = [];

ids = []
mdps = []

var indice_co;
for (let i = 0 ; i < Utilisateurs.length ; i++){
    ids.push(Utilisateurs[i][0]);
    mdps.push(Utilisateurs[i][4]);
}

function login(){
    open('login.html');
}

if (sessionStorage.getItem("indice_co")) {
    // Restore the contents of the text field
    indice_co = sessionStorage.getItem("indice_co");
  }

function connexion(){
    var form = document.forms['form'];
    id = document.form.user_name.value;
    mdp = document.form.user_mdp.value;
    if ((ids.indexOf(id) == mdps.indexOf(mdp)) & ids.indexOf(id) != -1){
        indice_co = ids.indexOf(id);
        sessionStorage.setItem('indice_co', indice_co);
        open('home2.html');
    }else{
        alert("Identifiant ou mot de passe inconnu");
    }
}

var nom = Utilisateurs[indice_co][1];
var prenom = Utilisateurs[indice_co][2];


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

function openAgenda(){
    if (auto_totale){
        open('calandarG.html');
    }else{
        if (auto_partielle){
            open('calandarC.html');
        }else{
            open('calandarM.html');
        }
    }
}

function ajouter(){
    auto_totale = autorisation(indice_co)[0]
    auto_partielle = autorisation(indice_co)[1]
    
    if (auto_partielle){
        open('ajouter.html');
    }else{
        alert("Vous n'êtes pas autorisé.e à aujouter des événements");
    }
}

// function addEvt(){
//     if (auto_partielle){
//         if (document.getElementById('pole').value == Utilisateurs[indice_co][6] | auto_totale){
//             evt = [];
//             id_evt = Date.now.toString(36) + Math.random().toString(36).substring(2);
//             evt.push(id_evt);
//             url = 'modification.html?id='+id_evt;
//             evt.push(url);
//             evt.push(document.getElementById('titre').value);
//             evt.push(document.getElementById('date').value);
//             evt.push(document.getElementById('pole').value);
//             evt.push(document.getElementById('ouvrage').value);
//             evt.push(document.getElementById('heureDebut').value);
//             evt.push(document.getElementById('heureFin').value);
//             Events.push(evt);
//         }else{
//             alert("Vous n'êtes pas autorisé à créer une réunion.")
//         }
//     }
    
// }



function logout(){
    open('home.html');
}
