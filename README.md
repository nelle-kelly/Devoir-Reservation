# Création d'une API REST avec Express.js pour une Plateforme de Réservation de voyages

<p>
    nous souhaitons développer un programme java permettant de simuler la commande «ls», cette commande est utilisée pour lister les informations sur les fichiers et les répertoires d’un
    répertoire donné.
</p>
<p>
    Nous devons créer une API REST pour gérer une plateforme de réservation de voyages.
    L'API permettre de gérer les destinations, les voyageurs, et les réservations.
</p>
<h4>Modèles<h4>
<p>Voici la structure des modeles et les relation entre elles
<br>
<img src="captures/MLD.png">
</p>
<h4>Dévéloppement des modèles<h4>
<img src="captures/modeles.png">
<p>
   Dans le dossier models, nous allons créer les trois modèles mongoose (Destination, Voyageur et Réservation) <br>
   <h5>Modèle Destination</h5> 
   <img src="captures/destination_model.png"> <br>

   <h5>Modèle Destination</h5> 
   <img src="captures/reservation_model.png"> <br>

   <h5>Modèle Destination</h5> 
   <img src="captures/voyageur_model.png"> <br>
</p>

<h4>Dévéloppement des Services<h4>
 Dans le dossier services, nous allons créer
    pour chaque modèle un service.<br>
<img src="captures/services.png"> <br>

<p>
    <h5>Service Destination</h5> 
    <span>destination_service.js: Pour gérer la création, la mise à jour, la suppression et la recherche de destinations.</span> <br>
    <img src="captures/destination_service.png"> <br>

</p>
<p>
    <h5>Service Voyageur</h5> 
    <span>voyageur_service.js: Pour gérer les voyageurs et leurs informations.</span> <br>
    <img src="captures/voyageur_service.png"> <br>

</p>
<p>
    <h5>Service reservation</h5> 
    <span>reservation_service.js: Pour gérer les reservation, y compris le calcul du prix total basé sur la durée du séjour et le prix par nuit de la destination.</span> <br>
    <img src="captures/reservation_service.png"> <br>

</p>

<h4>Dévéloppement des Contrôleurs<h4>
 Dans le dossier controlleurs, nous allons créer
    pour chaque modèle un contrôlleur qui doit appeler le service correspondants.<br>
<img src="captures/services.png"> <br>

<p>
    <h5>Controlleur destination</h5> 
    <img src="captures/destination_cont.png"> <br>

</p>

<p>
    <h5>Controlleur voyageur</h5> 
    <img src="captures/voyageur_cont.png"> <br>

</p>

<p>
    <h5>Controlleur reservation</h5> 
    <img src="captures/reservation_cont.png"> <br>

</p>