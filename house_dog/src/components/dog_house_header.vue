<script setup>
import { RouterLink, routerKey  } from 'vue-router';
</script>


<template>


  <header>


    <nav class="conteiner">


      <div class="branding">
        
        <img src="../assets/Vue_Logo_Black.png" alt=""/>
        <img src="../assets/amicao_logo.png" alt=""/>
        <h1>Vue-Amicão</h1>
               
      </div>


      <ul class="nav-routes">
    
        <RouterLink to="/">Home </RouterLink>
        <RouterLink to="/about">About </RouterLink>
        <RouterLink to="/contacts">Contatos</RouterLink>
    
      </ul>


    </nav>


  </header>


</template>


<style lang="scss" scoped>
header {
  background-color: #f1f1f1;
  nav {
    display: flex;
    align-items: center;
    padding: 25px 16px;

    .branding {
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        max-width: 50px;
      }

      h1 {
        font-size: 24px;
      }
    }

    .nav-routes {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;
      list-style: none;

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
</style>