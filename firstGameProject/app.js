new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function () {
      var max = 15;
      var min = 4;
      var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.monsterHealth -= damage;
      if (this.monsterHealth <= 0) {
        alert("Hurray");
        this.gameIsRunning = false;
        this.playerHealth = 100;
        this.monsterHealth = 100;
        return;
      }

      var max = 16;
      var min = 5;
      var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.playerHealth -= damage;
      if (this.playerHealth <= 0) {
        alert("Oh! No😢😢😢");
        this.gameIsRunning = false;
        this.playerHealth = 100;
        this.monsterHealth = 100;
        return;
      }
    },
    specialAttack: function () {},
    heal: function () {},
    giveUp: function () {},
  },
});
