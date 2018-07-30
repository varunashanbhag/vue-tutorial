new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGameRunning: false,
        log: [],
    },
    methods: {
        startNewGame: function() {
            this.playerHealth=100;
            this.monsterHealth=100;
            this.isGameRunning=true;
            this.log=[];
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
            var heal = Math.min(this.playerHealth+7,100);
            this.playerHealth=heal;
            this.log.unshift("Player Healed "+heal+"xp Damage");
        },
        giveUp: function() {
            this.isGameRunning=false;
        },
        calculateDamage: function(min,max) {
            var damage = Math.max(Math.floor(Math.random()*max)+1,min);
            this.monsterHealth -= damage;
            this.log.unshift("Player Caused "+damage+"xp Damage");
            if(this.checkHealth()) {
                return true;
            }
        },
        monsterDamage: function() {
            var damage = Math.max(Math.floor(Math.random()*12)+1,5);
            this.playerHealth -= damage;
            this.log.unshift("Monster Caused "+damage+"xp Damage");
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
                this.checkDecision("Lost.");
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