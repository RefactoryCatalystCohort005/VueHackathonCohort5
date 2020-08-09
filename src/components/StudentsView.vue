<template>
    <div id="student-card">
        <img src="" alt="">
        <h4 id="name">Julius Wasajja</h4>
        <span><i>Guild President At Refactory</i></span><br/><br />
        <a href="StudentDetails">
            <button>VIEW PROFILE</button>
        </a>
    </div>
    
</template>

<script>
export default {
    name: 'StudentsView'
}
</script>

<style scoped>
    #student-card {
        background-color: rgb(243, 244, 245);
        border-radius: 15px;
        box-shadow: inset 1px 1px 2px black;
        min-width: 280px;
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
        display: flex;
        justify-content:space-around;
        border-radius: 15px;
        font-weight: bold;
        color: rgb(243, 244, 245);
        background-color: rgb(58, 184, 173);
        margin-left: 25%;
        margin-bottom: 50px;
    }
    span {
        color: rgb(112, 172, 228);
        font-family: Verdana;
        font-weight: thin;
    }
</style>