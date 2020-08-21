<template>
    <div id="StudentsViewDiv">
        <div id="student-card" v-for="student in students" v-bind:key="student.studentId">
            <img src alt />
            <span><b>NAME:</b> {{student.name}}</span><br />
            <span><b>GENDER:</b> {{student.gender}}</span><br />
            <span><b>AGE:</b> {{student.age}}</span><br />
            <span><b>ROLE:</b> {{student.role}}</span><br />
            <span><b>NATIONALITY:</b> {{student.nationality}}</span><br />
            <span><b>ADDRESS:</b> {{student.address}}</span><br />
            <span><b>COHORT:</b> {{student.cohort}}</span><br />
            <span><b>INTAKE:</b> {{student.intake}}</span><br />
            <span><b>EMAIL:</b> {{student.email}}</span><br />
            <span><b>CONTACT:</b>  {{student.contact}}</span><br />    
        </div>
    </div>    
</template>

<script>
export default {
    name: 'StudentDetails',
    data(){
        return {
            students: [
                {studentId: 'STD-001', cohort: '005', intake: '001', age: 23, nationality: 'Ugandan', contact: '211 2233', gender: 'Male', name: 'Mike Mwanje', address: 'Nakawa, Kampala', email: 'm.mwanje@student.ciu.ac.ug', role: 'Student'},
                {studentId: 'STD-002', cohort: '005', intake: '001', age: 23, nationality: 'Ugandan', contact: '211 2233', gender: 'Male', name: 'Davies Wabuluka', address: 'Nakawa, Kampala', email: 'm.mwanje@student.ciu.ac.ug', role: 'Developer'},
                {studentId: 'STD-003', cohort: '005', intake: '001', age: 23, nationality: 'Ugandan', contact: '211 2233', gender: 'Female', name: 'Tsumaiya Nabawanuka', address: 'Nakawa, Kampala', email: 'm.mwanje@student.ciu.ac.ug', role: 'Applications Designer'},
                {studentId: 'STD-004', cohort: '005', intake: '001', age: 23, nationality: 'Ugandan', contact: '211 2233', gender: 'Female', name: 'Queen Emily', address: 'Nakawa, Kampala', email: 'm.mwanje@student.ciu.ac.ug', role: 'Class Representative'},
                {studentId: 'STD-005', cohort: '005', intake: '001', age: 23, nationality: 'Ugandan', contact: '211 2233', gender: 'Male', name: 'Isaac Semugenyi', address: 'Nakawa, Kampala', email: 'm.mwanje@student.ciu.ac.ug', role: 'Co-facilitator'},
                {studentId: 'STD-006', cohort: '005', intake: '001', age: 23, nationality: 'Ugandan', contact: '211 2233', gender: 'Male', name: 'Julius Wasajja', address: 'Nakawa, Kampala', email: 'm.mwanje@student.ciu.ac.ug', role: 'Gamer'},
            ]
        }
    }
};
</script>

<style scoped>
#student-card {
        background-color: rgb(243, 244, 245);
        border-radius: 15px;
        box-shadow: inset 1px 1px 2px black;
        min-width: 280px;
        line-height: 1.5;
        padding:10px;
        text-align: left;
        font-size: 1.5rem;
        font-weight: 100;
        margin-bottom: 35px;
    }
    #student-card #name{
        display: flex;
        justify-content:space-around;
        font-weight: bold;
    }
    b{
        color: rgb(243, 244, 245);
        background-color: rgb(58, 184, 173);
        border-radius: 10px;
    }
    #StudentsViewDiv {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>