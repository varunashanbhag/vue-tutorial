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
    		this.isGameRunning=true;
    		this.monsterHealth=100;
    	},
    },
});