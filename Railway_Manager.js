// importation des modules 
const prompt = require ('prompt-sync')();
const tickets =[] ;
let nextIdTicket = 1 ;
// données
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

//1st fct menu
function afficheUnTrajet(){
    for(let i=0 ; i<trips.length ; i++ ){
    console.log("#" + trips[i].id + " " + trips[i].departure + "--> " + trips[i].destination);
    console.log("Départ : " + trips[i].departureTime + "| Arrivée : " + trips[i].arrivalTime);
    console.log("Prix : " + trips[i].price + " DH | Places disponibles : " + trips[i].availableSeats);
    console.log("________________________________")
      }
      
      
      return afficherMenuPrincipal();
    }
    
    
    
    // 2nd fct achat de ticket 
function acheterTicket() {
  console.log("=== ACHETER UN TICKET ===");

  let nomPassager = prompt("Nom du passager : ").trim();
      while (nomPassager === "") {
  nomPassager = prompt("Nom invalide ! Veuillez reessayer : ").trim();
}

console.log("Nom valide : " + nomPassager);

const idTrajet = Number(prompt("Identifiant du trajet : "));   

  let trajetTrouve=null;
  for (let i = 0; i < trips.length; i++) {
     if(trips[i].id === idTrajet){
        trajetTrouve =trips[i];
        break;
     }
  } 
    // checher l'existance du trajet 
  if (trajetTrouve===null){
    console.log("Trajet introuvable");
    return;
  }
  
  if (trajetTrouve.availableSeats <= 0){
    console.log("Train complet !!");
    return; 
  }
  
  // les places qui diminuent 
  let PlaceVendue  = 50 - trajetTrouve.availableSeats + 1; // fixer apres affiche tjr " Place : 50 "
  trajetTrouve.availableSeats -= 1;
   
  
// mon objet ticket 
  const nouveauTicket= {
     id : nextIdTicket,
     passengerName :nomPassager,
     tripId : trajetTrouve.id,
     seatNumber : PlaceVendue, 
     price : trajetTrouve.price 
  };
  
 tickets.push(nouveauTicket);
 nextIdTicket++ ;

  console.log("Ticket acheté avec succès.");
  console.log("Ticket #" + nouveauTicket.id);
  console.log("Passager : " + nouveauTicket.passengerName);
  console.log("Trajet : " + trajetTrouve.departure + " --> " + trajetTrouve.destination);
  console.log("Place : " + nouveauTicket.seatNumber);
  console.log("Prix : " + nouveauTicket.price + " DH");
}




//  3rd l'affichage 
   
function afficherTicket() {
    console.log("=== TICKETS ==="); 
     // verif si ticket est vide
    if (tickets.length === 0) {
        console.log("Aucun ticket enregistré.");
        return;
    }
    // On parcourt tous les tickets existants
    for (let i = 0; i < tickets.length; i++) {
        let trajetAssocier = null;

        for (let j = 0; j < trips.length; j++) {
            if (trips[j].id === tickets[i].tripId) {
                trajetAssocier = trips[j];
                break;
            }
        }
        if (trajetAssocier){
        console.log("Ticket #" + tickets[i].id);
        console.log("Passager : " + tickets[i].passengerName);
        console.log("Trajet : " + trajetAssocier.departure + " --> " + trajetAssocier.destination);
        console.log("Place : " + tickets[i].seatNumber);
        console.log("Prix : " + tickets[i].price + " DH");
       
    }  
}
}

// 4rth fct annulation 
function annulerTicket(){
    console.log("===ANNULER UN TICKET===");

   if (tickets.length===0){
    console.log("Aucun ticket à annuler.");
   }
   const idtickets = Number(prompt("Entrez l'identifiant du ticket à annuler :"));
   let indexTicket = -1 ;
   for(let i=0 ; i<tickets.length; i++){
    if(tickets[i].id===idtickets){
        indexTicket = i ;
        break ; // quitte la boucle
     }
   }
   if(indexTicket== -1){
    console.log("ticket introuvable");
    return ;  // quitte la fct 
   }
   const ticketAnnule = tickets[indexTicket];
   for (let j = 0 ; j < trips.length; j++){
    if(trips[j].id===ticketAnnule.tripId){
    trips[j].availableSeats += 1 ;
    break ; 
    }
   }
   tickets.splice(indexTicket,1);
   console.log("Ticket #" + idtickets +" à été annulé avec sucée.");
}



// 5th fct chercher un ticket
function chercherTicket(){
    console.log("====CHERCHER UN TICKET===="); 

     if(tickets.length===0){
        console.log("Aucun ticket trouvé .")
     }
     const nomRecherche = prompt("Nom du passager : ").trim().toLowerCase();
    
     let nombreTrouve = 0 ;
     for(let i=0 ; i<tickets.length ; i++){
        if(tickets[i].passengerName.toLowerCase()===nomRecherche){
            let trajetAssocier = null ;
            for(let j=0 ; j<trips.length;j++){
                if(trips[j].id===tickets[i].tripId){
                    trajetAssocier = trips[i];
                    break ;
                }
            }
     console.log("Ticket #" + tickets[i].id);
     console.log("Passager : " + tickets[i].passengerName);
     console.log("Trajet : " + trajetAssocier.departure + " --> " + trajetAssocier.destination);
     console.log("Place : " + tickets[i].seatNumber);
     console.log("Prix : " + tickets[i].price + " DH");

     nombreTrouve ++ ;
        }
     }
    if (nombreTrouve === 0){
        console.log("Aucun ticket trouvé pour : "+nomRecherche);
    }    
} 


// 6th Filtrer les trajets
function filtrerTrajet (){
    console.log("====FILTRER LES TRAJETS===="); 
    const villeDepart = prompt("ville de départ : ").trim().toLowerCase();
    const trajetFiltre = trips.filter(trajet=>trajet.departure.toLowerCase()===villeDepart);
    
    if(trajetFiltre.length===0){
        console.log("Aucun trajet de la ville : ",villeDepart)
    }
    console.log("Résultat : ");
    for(let i=0;i<trajetFiltre.length ;i++){
        console.log(trajetFiltre[i].departure +" --> " + trajetFiltre[i].destination +" : " +trajetFiltre[i].price +"DH");
    }
    return ;
}
 // 7th fuction Trier les trajets
function trierTrajet (){
    console.log("====TRIER LES TRAJETS====");
    const trajetTrie = [...trips];

    for(let i=0 ; i<trajetTrie.length-1; i++){
        for(let j=0 ; j<trajetTrie.length-i-1; j++){
            if(trajetTrie[j].price>trajetTrie[j+1].price){
                const valeur = trajetTrie[j];
                trajetTrie[j] = trajetTrie[j+1];
                trajetTrie[j+1] = valeur ;
            }
        }

    }
    console.log("Résultat : ");
    for(let i=0;i<trajetTrie.length ;i++){
    console.log(trajetTrie[i].departure +" --> " + trajetTrie[i].destination +" : " +trajetTrie[i].price +"DH");
 }
}

// Boucle du menu principale et choix 
function afficherMenuPrincipal(){
    while(1){
       console.log("=================================");
       console.log("        RAILWAY MANAGER");
       console.log("=================================");
       console.log("1. Afficher les trajets");
       console.log("2. Acheter un ticket");
       console.log("3. Afficher les tickets");
       console.log("4. Annuler un ticket");
       console.log("5. Rechercher un ticket");
       console.log("6. Filtrer les trajets");
       console.log("7. Trier les trajets");
       console.log("0. Quitter");
    
    
    const choix = Number(prompt("Votre choix : "));

    switch(choix){
        case 1 : 
            afficheUnTrajet();
            break ;
        case 2 : 
            acheterTicket();
            break ;
        case 3 : 
            afficherTicket();
          break ;
        case 4 : 
            annulerTicket();
          break ;
        case 5 : 
            chercherTicket();
          break ;
        case 6 : 
            filtrerTrajet ();
          break ;
        case 7 : 
            trierTrajet ();
          break ;
        case 0 :
             return;
        default :
        console.log("Option invalide ! veillez choisir un nombre du menu.")
        
      }
    }
}
afficherMenuPrincipal();
