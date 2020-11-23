
var app = new Vue({
  el: "#app",
  data:{
    chat_attiva: [""],
    utente:{
      'immagine': "img/avatar_5.jpg",
      'nome': "Andrea"
    },
    chat:[

      // PRIMA CHAT
      {
        'immagine': "img/avatar_1.jpg",
        'nome': "Mario",
        'testo':"ok",
        'ultimo_accesso':"20 11 2020 13:52:38",
        'messaggi': [
          {
            'messaggi_inviati': "Lo sai che ho aperto una nuova pizzeria?"
          },
          {
            'messaggi_ricevuti' : "Si, ma preferirei andare al cinema"
          },
          {
            'messaggi_inviati' : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            'messaggi_ricevuti' : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        ]
      },

      //   SECONDA CHAT
      {
        'immagine': "img/avatar_2.jpg",
        'nome': "Paolo",
        'testo':"ok",
        'ultimo_accesso':"20 11 2020 10:55:38",
        'messaggi': [
          {
            'messaggi_inviati': "Ciao come stai?"
          },
          {
            'messaggi_ricevuti' : "Bene te?"
          },
          {
            'messaggi_inviati' : "Bene"
          }
        ]
      },

      // TERZA CHAT
      {
        'immagine': "img/avatar_3.jpg",
        'nome': "Marco",
        'testo':"ok",
        'ultimo_accesso':"20 11 2020 09:12:28",
        'messaggi': [
          {
            'messaggi_inviati': "Hei"
          },
          {
            'messaggi_ricevuti' : "Hei"
          },
        ]
      },


      // QUARTA CHAT
      {
        'immagine': "img/avatar_4.jpg",
        'nome': "Giacomo",
        'testo':"ok",
        'ultimo_accesso':"20 11 2020 08:32:38",
        'messaggi': [
          {
            'messaggi_inviati': "Ciao"
          },
          {
            'messaggi_ricevuti' : "Ciao"
          },
        ]
      }
    ]
  }


})
