
var app = new Vue({
  el: "#app",
  data:{

    //   CONTATORE
    active: 0,
    messaggioInserito : "",
    //  UTENTE PROFILO
    utente:{
      immagine: "img/avatar_5.jpg",
      nome: "Andrea"
    },

    //   TUTTE LE CHAT CON I MESSAGGI
    chat:[

      // PRIMA CHAT
      {
        immagine: "img/avatar_1.jpg",
        nome: "Mario",
        testo:"ok",
        ultimo_accesso:"20 11 2020 13:52:38",
        messaggi: [
          {
            type: 'send',
            text: "Lo sai che ho aperto una nuova pizzeria?",
            time: 'oggi alle 22.36'
          },
          {
            type: 'rec',
            text : "Si, ma preferirei andare al cinema",
            time: 'oggi alle 22.35'
          },
          {
            type: 'send',
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            time: 'oggi alle 22.34'
          },
          {
            type: 'rec',
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            time: 'oggi alle 22.33'
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
            type: 'send',
            text: "Ciao come stai?",
            time: 'oggi alle 22.34'
          },
          {
            type: 'rec',
            text : "Bene te?",
            time: 'oggi alle 22.34'
          },
          {
            type: 'send',
            text : "Bene",
            time: 'oggi alle 22.34'
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
            type: 'send',
            text: "Hei",
            time: 'oggi alle 22.34'
          },
          {
            type: 'rec',
            text : "Hei",
            time: 'oggi alle 22.34'
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
            type: 'rec',
            text: "Ciao",
            time: 'oggi alle 22.34'
          },
          {
            type: 'send',
            text : "Ciao",
            time: 'oggi alle 22.34'
          }
        ]
      }
    ]
  },

  //   FUNZIONE PER CAMBIO CHAT AL CLICK
  methods:{
    chatActive : function(i){
      this.active = i
    },

    //   INVIO MESSAGGIO
    addMessage : function(){
      this.chat[this.active].messaggi.push(
        {
          text:this.messaggioInserito,
          type: 'send',
          time: this.orario(),
        }
      ),
      this.messaggioInserito = "",

      //   RISPOSTA AUTOMATICA MESSAGGIO DOPO 1 SECONDOs
      setTimeout(() => {
        this.chat[this.active].messaggi.push(
          {
            text: 'ok',
            type: 'rec',
            time: this.orario()
          }
        )

        //  CAMBIO ORA ULTIMO ACCESSO
        this.chat[this.active].ultimo_accesso = this.orario()
      } ,1000)
    },

    //   METTO L'ORARIO ATTUALE
    orario: function() {
      let today = new Date();
      let ora = today.getHours();
      let minuti = today.getMinutes();
      if(minuti < 10) minuti="0"+minuti;
      if(ora <10) ora="0"+ora;
      let data = `oggi alle ${ora}:${minuti}`;
      return data;
    },

  }
})
