<template>
    <div>
    	<h1>The User Page</h1>
    	<hr>
    	<button @click="NavigateToHome" class="btn btn-primary">Go to Home</button>
    	<hr>
    	<router-view></router-view>
	</div>
</template>
<script>
	export default {
		methods: {
			NavigateToHome() {
				this.$router.push({ name:"home" });
			}
		}
	}
</script>