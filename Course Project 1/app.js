new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGameRunning: false,
    },
    methods: {
        startNewGame: function() {
            this.playerHealth=100;
            this.monsterHealth=100;
            this.isGameRunning=true;
        },
        attack: function() {
            if(this.calculateDamage(3,10)) {
                return;
            }
            this.monsterDamage();
        },
        specialAttack: function() {
            if(this.calculateDamage(6,14)) {
                return;
            }
            this.monsterDamage();
        },
        heal: function () {
            this.monsterDamage();
            this.playerHealth=Math.min(this.playerHealth+10,100)
        },
        giveUp: function() {
            this.playerHealth=100;
            this.monsterHealth=100;
            this.isGameRunning=false;
        },
        calculateDamage: function(min,max) {
            this.monsterHealth -= Math.max(Math.floor(Math.random()*max)+1,min);
            if(this.checkHealth()) {
                return true;
            }
        },
        monsterDamage: function() {
            this.playerHealth -= Math.max(Math.floor(Math.random()*12)+1,5);
            if(this.checkHealth()) {
                return true;
            }
        },
        checkHealth: function() {
            if(this.monsterHealth<=0) {
                this.checkDecision("Won!");
                return true;
            }
            if(this.playerHealth<=0) {
                this.checkDecision("Lost");
            }
        },
        checkDecision: function(msg) {
            if (confirm('You '+msg+' Start New Game?')) {
                this.startNewGame();
                return;
            }
            this.isGameRunning=false;

        },
    },
});