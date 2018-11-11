<template>
	<div>
		<div class="form-group">
		    <label for="first_name">First Name</label>
		    <input type="text" class="form-control" name="first_name" :value="firstName" placeholder="" @input="nameChanged(true, $event)">
		</div>
		<div class="form-group">
		    <label for="last_name">Last Name</label>
		    <input type="text" class="form-control" name="last_name" :value="lastName" placeholder="" @input="nameChanged(false, $event)">
		</div>
	</div>
</template>
<script>
	export default {
		props: ["value"],
		methods: {
			nameChanged(isFirst, event) {
				let name='';
				if(isFirst) {
					name= event.target.value + ' ' + this.lastName;
				} else {
					name= this.firstName + ' ' + event.target.value;
				}
				this.value=name; 
				this.$emit('input', this.value)
			}
		},
		computed: {
			firstName() {
				return this.value.split(" ")[0];
			},
			lastName() {
				return this.value.split(" ")[1];
			}
		}
	}
</script>
<style></style>