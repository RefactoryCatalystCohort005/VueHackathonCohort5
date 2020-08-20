<template>
    <div>
        <div id="student-card" v-for="student in students" v-bind:key="student.studentId">
            <img src alt />
            <!-- <span><b>NAME:</b> Mwanje Mike</span><br />
            <span><b>GENDER:</b> Male</span><br />
            <span><b>AGE:</b> 23</span><br />
            <span><b>NATIONALITY:</b> Ugandan</span><br />
            <span><b>ADDRESS:</b> Nakawa, Kampala</span><br />
            <span><b>COHORT:</b> 005</span><br />
            <span><b>INTAKE:</b> 001</span><br />
            <span><b>EMAIL:</b> m.mwanje@student.ciu.ac.ug</span><br />
            <span><b>CONTACT:</b>  211 2233</span><br />  -->
            <span><b>NAME:</b> {{student.name}}</span><br />
            <span><b>GENDER:</b> {{student.name}}</span><br />
            <span><b>AGE:</b> {{student.name}}</span><br />
            <span><b>NATIONALITY:</b> {{student.name}}</span><br />
            <span><b>ADDRESS:</b> {{student.name}}</span><br />
            <span><b>COHORT:</b> {{student.name}}</span><br />
            <span><b>INTAKE:</b> {{student.name}}</span><br />
            <span><b>EMAIL:</b> {{student.name}}</span><br />
            <span><b>CONTACT:</b>  {{student.name}}</span><br />    
        </div>
    </div>    
</template>

<script>
export default {
    name: 'StudentDetails',
    data(){
        return {
            students: [
                {studentId: 'STD-001', name: 'Mike Mwanje', institute: 'Refactory', role: 'Student'},
                {studentId: 'STD-002', name: 'Davies Wabuluka', institute: 'Refactory', role: 'Developer'},
                {studentId: 'STD-003', name: 'Tsumaiya Nabawanuka', institute: 'Refactory', role: 'Applications Designer'},
                {studentId: 'STD-004', name: 'Queen Emily', institute: 'Refactory', role: 'Class Representative'},
                {studentId: 'STD-005', name: 'Isaac Semugenyi', institute: 'Refactory', role: 'Co-facilitator'},
                {studentId: 'STD-006', name: 'Julius Wasajja', institute: 'Refactory', role: 'Gamer'},
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
</style>