 <template>
  <div id="student-card">
    <img src alt />
    <span><b>NAME:</b> Mwanje Mike</span><br />
    <span><b>GENDER:</b> Male</span><br />
    <span><b>AGE:</b> 23</span><br />
    <span><b>NATIONALITY:</b> Ugandan</span><br />
    <span><b>ADDRESS:</b> Nakawa, Kampala</span><br />
    <span><b>COHORT:</b> 005</span><br />
    <span><b>INTAKE:</b> 001</span><br />
    <span><b>EMAIL:</b> m.mwanje@student.ciu.ac.ug</span><br />
    <span><b>CONTACT:</b>  211 2233</span><br />    
  </div>
</template>

<script>
export default {
  name: "StudentDetails",
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
        font-weight: bold;
        border-radius: 10px;
    }
</style>