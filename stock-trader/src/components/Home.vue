<template>
	<div>
		<h1>Trade or View Portfilio</h1>
		<h5>You may Save or Load your Data</h5>
		<h5>Click on 'End Day' to begin a New Day</h5>
		<hr>
		<p>Your Funds: {{ funds | currency }}</p>
	</div>
</template>
<script>
	export default {
		computed: {
			funds() {
				return this.$store.getters.funds;
			}
		}
	}
</script>