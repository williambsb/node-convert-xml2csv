const {LISTEPA} = require('../../app')
// vente , info_general , agence , commentaire 
function getType(params){
  

}
const fs = require('fs')
let myData = []  

  for(let i =0 ;i<LISTEPA.BIEN.length;i++){

    let t
   console.log( typeof LISTEPA.BIEN[i].COMMENTAIRES )
   //console.log( typeof LISTEPA.BIEN[i].APPARTEMENT, )

   //,LISTEPA.BIEN[i].APPARTEMENT.SURFACE_HABITABLE)
   //console.log(LISTEPA.BIEN[i].APPARTEMENT)//,LISTEPA.BIEN[i].APPARTEMENT.SURFACE_HABITABLE)

  
    
    
    myData.push(
  
    {
  
  'AFF_ID':`${LISTEPA.BIEN[i].INFO_GENERALES.AFF_ID._text}`, 
  'AFF_NUM':`${LISTEPA.BIEN[i].INFO_GENERALES.AFF_NUM._text}`, 
  //'ACHAT':"",
  'TYPE_ANNONCE':`${LISTEPA.BIEN[i].LOCATION=='undefined'?'':''}`,
  'CATEGORIE_MERE' :`${LISTEPA.BIEN[i].APPARTEMENT=='undefined'|| LISTEPA.BIEN[i].APPARTEMENT==null?"": LISTEPA.BIEN[i].APPARTEMENT.CATEGORIE_MERE._text }`, 
  'CATEGORIE':`${LISTEPA.BIEN[i].APPARTEMENT=='undefined'|| LISTEPA.BIEN[i].APPARTEMENT==null?"": LISTEPA.BIEN[i].APPARTEMENT.CATEGORIE_MERE._text }`,
     'CODE_POSTAL':`${LISTEPA.BIEN[i].LOCALISATION.CODE_POSTAL._text}`, 
     'VILLE':`${LISTEPA.BIEN[i].LOCALISATION?LISTEPA.BIEN[i].LOCALISATION.VILLE._cdata:''}`,
     'PAYS':`${LISTEPA.BIEN[i].LOCALISATION.PAYS == 'undefined'|| LISTEPA.BIEN[i].LOCALISATION.PAYS==null?"": LISTEPA.BIEN[i].LOCALISATION.PAYS._cdata}`,
     'PRIX':`${LISTEPA.BIEN[i].VENTE.PRIX._text}`,
     //'LOYER':`${LISTEPA.BIEN[i].VENTE.LOYER=='undefined'||LISTEPA.BIEN[i].VENTE.LOYER ==null?"":LISTEPA.BIEN[i].VENTE.LOYER._text}`,
     'CHARGES':`${LISTEPA.BIEN[i].ALUR.CHARGES_ANNUELLES=='undefined'|| LISTEPA.BIEN[i].ALUR.CHARGES_ANNUELLES._text==null?"":LISTEPA.BIEN[i].ALUR.CHARGES_ANNUELLES._text}`,
     'MONTANT_HONO_ACQ':`${LISTEPA.BIEN[i].VENTE.MONTANT_HONO_ACQ==undefined||LISTEPA.BIEN[i].VENTE.MONTANT_HONO_ACQ==null?"":LISTEPA.BIEN[i].VENTE.MONTANT_HONO_ACQ._text}`,
     //'FRAIS_AGENCE':`${LISTEPA.BIEN[i].LOCATION}`, // not exist 
     'NOM_FRANCAIS':"",// not exist 
     'DESCRIPTION':`${LISTEPA.BIEN[i].COMMENTAIRES.FR._cdata}`,
     'LIBRELE':`${LISTEPA.BIEN[i].INFO_GENERALES.LIBRELE._text?LISTEPA.BIEN[i].INFO_GENERALES.LIBRELE._text:''}`,
    'SURFACE_HABITABLE':`${LISTEPA.BIEN[i].APPARTEMENT==null||LISTEPA.BIEN[i].APPARTEMENT==undefined?'':LISTEPA.BIEN[i].APPARTEMENT.SURFACE_HABITABLE._text}`,
     'SURFACE_TERRAIN':`${LISTEPA.BIEN[i].APPARTEMENT==undefined?'':LISTEPA.BIEN[i].APPARTEMENT.SURFACE_TERRAIN._text}`,
     'NBRE_PIECES':`${LISTEPA.BIEN[i].APPARTEMENT==undefined?'':LISTEPA.BIEN[i].APPARTEMENT.NBRE_PIECES._text}`,
     'NBRE_CHAMBRES':`${LISTEPA.BIEN[i].APPARTEMENT==undefined?'':LISTEPA.BIEN[i].APPARTEMENT.NBRE_CHAMBRES._text}`,
     'NUM_ETAGE':`${LISTEPA.BIEN[i].APPARTEMENT==undefined|| LISTEPA.BIEN[i].APPARTEMENT.NUM_ETAGE==undefined?  '':LISTEPA.BIEN[i].APPARTEMENT.NUM_ETAGE._text}`,
     'NUM_DERNIER_ETAGE':`${LISTEPA.BIEN[i].APPARTEMENT==undefined|| LISTEPA.BIEN[i].APPARTEMENT.NUM_DERNIER_ETAGE==undefined?  '':LISTEPA.BIEN[i].APPARTEMENT.NUM_DERNIER_ETAGE._text}`,
     'MEUBLE':`${LISTEPA.BIEN[i].APPARTEMENT==undefined|| LISTEPA.BIEN[i].APPARTEMENT.MEUBLE==undefined?  '':LISTEPA.BIEN[i].APPARTEMENT.MEUBLE._text}`,
     'NBRE_SALLE_BAIN':`${LISTEPA.BIEN[i].APPARTEMENT==undefined|| LISTEPA.BIEN[i].APPARTEMENT.NBRE_SALLE_BAIN==undefined?  '':LISTEPA.BIEN[i].APPARTEMENT.NBRE_SALLE_BAIN._text}`,
     'NBRE_SALLE_EAU':`${LISTEPA.BIEN[i].APPARTEMENT==undefined|| LISTEPA.BIEN[i].APPARTEMENT.NBRE_SALLE_EAU==undefined?  '':LISTEPA.BIEN[i].APPARTEMENT.NBRE_SALLE_EAU._text}`,
     'NBRE_WC':`${LISTEPA.BIEN[i].APPARTEMENT==undefined|| LISTEPA.BIEN[i].APPARTEMENT.NBRE_WC==undefined?  '':LISTEPA.BIEN[i].APPARTEMENT.NBRE_WC._text}`,
     'CHAUFFAGE':`${LISTEPA.BIEN[i].APPARTEMENT==undefined|| LISTEPA.BIEN[i].APPARTEMENT.CHAUFFAGE==undefined?  '':LISTEPA.BIEN[i].APPARTEMENT.CHAUFFAGE._cdata}`,
     'CUISINE':`${LISTEPA.BIEN[i].APPARTEMENT==undefined|| LISTEPA.BIEN[i].APPARTEMENT.CUISINE==undefined?  '':LISTEPA.BIEN[i].APPARTEMENT.CUISINE._cdata}`,
     'NBRE_BALCON':`${LISTEPA.BIEN[i].APPARTEMENT==undefined|| LISTEPA.BIEN[i].APPARTEMENT.NBRE_BALCON==undefined?  '':LISTEPA.BIEN[i].APPARTEMENT.NBRE_BALCON._text}`,
     'ASCENSEUR':`${LISTEPA.BIEN[i].APPARTEMENT==undefined|| LISTEPA.BIEN[i].APPARTEMENT.ASCENSEUR==undefined?  '':LISTEPA.BIEN[i].APPARTEMENT.ASCENSEUR._text}`,
     'NBRE_CAVES':`${LISTEPA.BIEN[i].APPARTEMENT==undefined|| LISTEPA.BIEN[i].APPARTEMENT.NBRE_CAVES==undefined?  '':LISTEPA.BIEN[i].APPARTEMENT.NBRE_CAVES._text}`,
     'NBRE_PARKING':`${LISTEPA.BIEN[i].APPARTEMENT==undefined|| LISTEPA.BIEN[i].APPARTEMENT.NBRE_PARKING==undefined?  '':LISTEPA.BIEN[i].APPARTEMENT.NBRE_PARKING._text}`,
     'NBRE_GARAGE':`${LISTEPA.BIEN[i].APPARTEMENT==undefined|| LISTEPA.BIEN[i].APPARTEMENT.NBRE_GARAGE==undefined?  '':LISTEPA.BIEN[i].APPARTEMENT.NBRE_GARAGE._text}`,
     'DIGICODE':`${LISTEPA.BIEN[i].APPARTEMENT==undefined|| LISTEPA.BIEN[i].APPARTEMENT.DIGICODE==undefined?  '':LISTEPA.BIEN[i].APPARTEMENT.DIGICODE._text}`,
     'INTERPHONE':`${LISTEPA.BIEN[i].APPARTEMENT==undefined|| LISTEPA.BIEN[i].APPARTEMENT.INTERPHONE==undefined?  '':LISTEPA.BIEN[i].APPARTEMENT.INTERPHONE._text}`,
     'GARDIEN':`${LISTEPA.BIEN[i].APPARTEMENT==undefined|| LISTEPA.BIEN[i].APPARTEMENT.INTERPHONE==undefined?  '':LISTEPA.BIEN[i].APPARTEMENT.INTERPHONE._text}`,
     'NBRE_TERRASSE':`${LISTEPA.BIEN[i].APPARTEMENT==undefined|| LISTEPA.BIEN[i].APPARTEMENT.NBRE_TERRASSE==undefined?  '':LISTEPA.BIEN[i].APPARTEMENT.NBRE_TERRASSE._text}`,
     'ALARME':`${LISTEPA.BIEN[i].MAISON}`,
     'CALME':`${LISTEPA.BIEN[i].APPARTEMENT==undefined|| LISTEPA.BIEN[i].APPARTEMENT.CALME==undefined?  '':LISTEPA.BIEN[i].APPARTEMENT.CALME._text}`,
     'CLIMATISATION':`${LISTEPA.BIEN[i].APPARTEMENT==undefined|| LISTEPA.BIEN[i].APPARTEMENT.CLIMATISATION==undefined?  '':LISTEPA.BIEN[i].APPARTEMENT.CLIMATISATION._text}`,// back
     'PISCINE':`${LISTEPA.BIEN[i].APPARTEMENT==undefined|| LISTEPA.BIEN[i].APPARTEMENT.PISCINE==undefined?  '':LISTEPA.BIEN[i].APPARTEMENT.PISCINE._text}`,
     'ACCES_HANDICAPES':`${LISTEPA.BIEN[i].MAISON==undefined|| LISTEPA.BIEN[i].MAISON.ACCES_HANDICAPES==undefined?  '':LISTEPA.BIEN[i].MAISON.ACCES_HANDICAPES._text}`,
     'CHEMINEE':`${LISTEPA.BIEN[i].MAISON==undefined|| LISTEPA.BIEN[i].MAISON.CHEMINEE==undefined?  '':LISTEPA.BIEN[i].MAISON.CHEMINEE._text}`,
     'URL_360':"",
     'VISITE_VIRTUELLE':`${LISTEPA.BIEN[i].INFO_GENERALES.VISITE_VIRTUELLE._cdata}`,
     'NUM_MANDAT':`${LISTEPA.BIEN[i].VENTE.NUM_MANDAT?LISTEPA.BIEN[i].VENTE.NUM_MANDAT._text:''}`,
     'AGENCE_ADRESSE':`${LISTEPA.BIEN[i].AGENCE.AGENCE_ADRESSE._cdata}`,
     'AGENCE_CP':`${LISTEPA.BIEN[i].AGENCE.AGENCE_CP._text}`,
     'AGENCE_VILLE':`${LISTEPA.BIEN[i].AGENCE.AGENCE_VILLE._cdata}`,
     'AGENCE_TELEPHONE':`${LISTEPA.BIEN[i].AGENCE.AGENCE_TELEPHONE._text}`,
     'AGENCE PORTABLE ':"",
     'AGENCE_NOM':`${LISTEPA.BIEN[i].AGENCE.AGENCE_NOM == undefined?'':LISTEPA.BIEN[i].AGENCE.AGENCE_NOM._cdata}`, //c_datata
     'LATITUDE':"",
     'LONGITUDE':"",
    }
  
    )
}
exports.myData= myData
  