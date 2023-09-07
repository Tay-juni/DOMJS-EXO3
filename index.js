// // Récupere la case "masquer les paroles"
// const checkboxParoles = null; // à compléter, ce code ne fonctionne pas

// // Récupère le div contenant les paroles
// const divParoles = null; //

// // Attache une fonction à l'évènement "click" sur checkboxParoles
// checkboxParoles.addEventListener('click', function (event) {
//   // cette fonction est executée lorsque l'utilisateur clique sur checkboxParoles

//   // event.target contient l'élément cliqué (ici checkboxParoles dans notre cas)
//   if (event.target.checked) {
//     // la case vient d'être cochée

//   } else {
//     // la case vient d'être decochée

//   }
// });

// 1. 
// Récupere la case "masquer les paroles"
 const checkboxParoles = document.getElementById("masquer-paroles");
 const paroles = document.getElementById('paroles');
 const parolesTest = checkboxParoles.nextSibling;
 const ref = document.querySelector("hr");

 checkboxParoles.addEventListener('click',function() {
  // cette fonction est executée lorsque l'utilisateur clique sur checkboxParoles
   // event.target contient l'élément cliqué (ici checkboxParoles dans notre cas)
  if (checkboxParoles.checked) {
    // la case vient d'être cochée
    paroles.style.display ="none";
     parolesTest.textContent = 'Afficher les paroles';
     ref.style.display ="none"
    
    } else {
   // la case vient d'être decochée
    paroles.style.display ="block";
     parolesTest.textContent = 'Masquer les paroles';
     ref.style.display ="block";
   }
 });

// 2.,3.

const checkboxRefrains = document.getElementById('masquer-refrains');
const refrains = document.getElementsByClassName('refrain');
const RefrainsNewText = checkboxRefrains.nextSibling;
const spanDF = document.querySelectorAll('.definition');
const conteChange = document.querySelectorAll('.contenu');

checkboxRefrains.addEventListener('click', function(event) {
  for (let i = 1; i < refrains.length; i++) {
    if (event.target.checked) {
      conteChange[i].classList.add('hidden');
      spanDF[i].classList.remove('hidden');
      RefrainsNewText.textContent = 'Afficher les refrains';

      spanDF[i].addEventListener('mouseenter', function() {
          conteChange[i].classList.remove('hidden');
          });
      spanDF[i].addEventListener('mouseleave', function() {
        conteChange[i].classList.add('hidden');
        });
    } else {
      conteChange[i].classList.remove('hidden');
      spanDF[i].classList.add('hidden');
      RefrainsNewText.textContent = 'Masquer les refrains';
    }
    
  }
})


// 4. Effacement des espaces blancs entre les  paragraphe

 const paragraphEspace = document.querySelectorAll('p');
 console.log(paragraphEspace);
 paragraphEspace.forEach(element => {
   element.setAttribute('style', 'margin: 9px;');
 });


