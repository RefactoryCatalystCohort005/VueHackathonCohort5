<template>
    <div id="app">
        <div id="StudentsViewDiv">
            <StudentView/>
            <StudentView/>
            <StudentView/>
            <StudentDetails/>
            <StudentDetails/>
            <StudentDetails/>
        </div>
    </div>
</template>

<script>

import StudentView from './components/StudentsView.vue'
import StudentDetails from './components/StudentDetails.vue'

export default {
  name: 'App',
  components: {
    StudentView,
    StudentDetails,
  }
}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    #StudentsViewDiv {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>
