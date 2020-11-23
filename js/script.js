
var app = new Vue({
  el: "#app",
  data:{
    active: 0,
    utente:{
      immagine: "img/avatar_5.jpg",
      nome: "Andrea"
    },

    chat:[

      // PRIMA CHAT
      {
        immagine: "img/avatar_1.jpg",
        nome: "Mario",
        testo:"ok",
        ultimo_accesso:"20 11 2020 13:52:38",
        messaggi: [
          {
            text_send: "Lo sai che ho aperto una nuova pizzeria?"
          },
          {
            text_rec : "Si, ma preferirei andare al cinema"
          },
          {
            text_send : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            text_rec : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        ]
      },

      //   SECONDA CHAT
      {
        immagine: "img/avatar_2.jpg",
        nome: "Paolo",
        testo:"ok",
        ultimo_accesso:"20 11 2020 10:55:38",
        messaggi: [
          {
            text_send: "Ciao come stai?"
          },
          {
            text_rec : "Bene te?"
          },
          {
            text_send : "Bene"
          }
        ]
      },

      // TERZA CHAT
      {
        immagine: "img/avatar_3.jpg",
        nome: "Marco",
        testo:"ok",
        ultimo_accesso:"20 11 2020 09:12:28",
        messaggi: [
          {
            text_send: "Hei"
          },
          {
            text_rec : "Hei"
          },
        ]
      },


      // QUARTA CHAT
      {
        immagine: "img/avatar_4.jpg",
        nome: "Giacomo",
        testo:"ok",
        ultimo_accesso:"20 11 2020 08:32:38",
        messaggi: [
          {
            text_rec: "Ciao"
          },
          {
            text_send : "Ciao"
          }
        ]
      }
    ]
  },
  methods:{
    chatActive : function(i){
      this.active = i
    }
  }


})
