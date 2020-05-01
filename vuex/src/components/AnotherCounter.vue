<template>
    <div>
        <button class="btn btn-primary" @click="asyncincrement({by: 50, duration:500})">Increment</button>
        <button class="btn btn-primary" @click="asyncdecrement({by: 50, duration:500})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'asyncincrement',
                'asyncdecrement'
            ])
        }
    }
</script>