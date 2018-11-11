<template>
    <div class="container">
        <form v-if="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->

                    <appFullName v-model="fullName"></appFullName>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input v-model="email" type="email" class="form-control" name="email" value="" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model="password" type="password" class="form-control" name="password" value="" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for=""><input type="radio" value="Yes" v-model="storeData">Yes</label>
                        <label for=""><input type="radio" value="No" v-model="storeData">No</label>
                    </div>
                    <button type="submit" @click.prevent="submitted=!submitted" class="btn btn-primary">Submit</button>  
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullName}}</p>
                        <p>Mail: {{email}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{storeData}}</p>
                        <button @click.prevent="submitted=!submitted" class="btn btn-primary">Back</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from "./FullName.vue";
    export default {
        data() {
            return {
                fullName: 'Varun Shanbhag',
                email: '',
                password: '',
                storeData: "Yes",
                submitted: false,
            }
        },
        components: {
            appFullName: FullName,
        }
    }
</script>

<style>
</style>
