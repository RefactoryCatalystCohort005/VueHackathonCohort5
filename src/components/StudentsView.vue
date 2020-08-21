<template>
    <div id="StudentsViewDiv">
        <div id="student-card" v-for="student in students" v-bind:key="student.studentId">
            <img alt="Student Image" src="../../public/avatar.jpeg">
            <h4 id="name">{{student.name}}</h4>
            <span><i>{{student.role}}</i></span><br/><br />
            <button>
                <router-link to='/details'>VIEW PROFILE</router-link>
            </button>
        </div> 
    </div>   
</template>

<script>
export default {
    name: 'StudentsView',
    data(){
        return {
            students: [
                {studentId: 'STD-001', name: 'Mike Mwanje', role: 'Student'},
                {studentId: 'STD-005', name: 'Isaac Semugenyi', role: 'Co-facilitator'},
                {studentId: 'STD-002', name: 'Davies Wabuluka', role: 'Developer'},
                {studentId: 'STD-003', name: 'Tsumaiya Nabawanuka', role: 'Applications Designer'},
                {studentId: 'STD-004', name: 'Queen Emily', role: 'Class Representative'},
                {studentId: 'STD-006', name: 'Julius Wasajja', role: 'Gamer'},
            ]
        }
    }
}
</script>

<style scoped>
    #student-card {
        background-color: rgb(243, 244, 245);
        border-radius: 15px;
        box-shadow: inset 1px 1px 2px black;
        min-width: 400px;
        line-height: 1.5;
        padding:10px;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 100;
        margin-bottom: 35px;
    }
    #student-card #name{
        color: rgb(112, 172, 228);
        display: flex;
        justify-content:space-around;
        font-weight: bold;
    }
    button {
        border-radius: 15px;
        font-weight: bold;
        color: rgb(243, 244, 245);
        background-color: rgb(58, 184, 173);
        margin-bottom: 50px;
    }
    span {
        color: rgb(112, 172, 228);
        font-family: Verdana;
        font-weight: thin;
    }
    #StudentsViewDiv {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>