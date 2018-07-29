new Vue({
  el: '#exercise',
  data: {
		effect: false,
  },
  methods: {
    startEffect: function() {
    	setInterval(function() {
				this.effect=!this.effect;
			},1000);
    }
  }
});
Vue.config.devtools = true;