'use strict';

const person = {
  firstName: 'John',
  lastName: 'Doe'
}

export default person // exp. d. csak egy lehet egyfájlban!

//Vagy: 
// export default {
//   firstName: 'John',
//   lastName: 'Doe'
// }
// Ekkor az importban bármilyen nevet kaphat.