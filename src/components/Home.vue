<template>
    <div>
        <h1 id="app-headers">
            <img alt="Vue logo" src="../assets/logo.png">
            Cohort005 Student Profiling System<br />
            <a class="btn btn-small">
                <router-link to='/summary'> Summary </router-link>
            </a>
            <a class="btn btn-small">
                <router-link to='/details'> Details </router-link>
            </a>
        </h1>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {
    }
}
</script>

<style scoped>

</style>