<script>
export default {
  data() {
    return {
      studio: null  // Inicializamos la propiedad 'studio' para que sea reactiva
    };
  },
  async asyncData({ $content, params }) {
    const studio = await $content('studios', params.slug).fetch();
    return { studio };  // Devolvemos el objeto 'studio'
  },
  mounted() {
    const script = document.createElement('script');
    script.src = "https://utteranc.es/client.js";
    script.setAttribute('repo', "KyaraAvEs/NuxtwithUtteranc");
    script.setAttribute('issue-term', "pathname");
    script.setAttribute('theme', "github-dark");
    script.setAttribute('crossorigin', "anonymous");
    script.async = true;
    document.getElementById('comments-section').appendChild(script); // Agrega el script al DOM
  }
};
</script>

<template>

  <div class="container" v-if="studio"> <!-- Se asegura de que 'movie' existe antes de acceder -->
    <HeaderView />
    <div class="row">
      <div class="five columns">
        <img class="u-max-full-width" :src="'/images/' + studio.image" alt="Movie Image">

      </div>
      <div class="seven columns">
        <h1>{{ studio.name }}</h1>
        <p>País: {{ studio.country }}</p>
        <p>Fecha de fundación: {{ studio.founded_year }}</p>
        <p>Películas:</p>
        <div v-for="movie in studio.movies" :key="movie.slug">
          <NuxtLink :to="'/movies/' + movie.slug">{{ movie.name }}</NuxtLink>
        </div>
      </div>
    </div>
     <!-- Sección de comentarios -->
     <div id="comments-section" class="comments-section"></div>
     <script src="https://utteranc.es/client.js"
             repo="KyaraAvEs/NuxtwithUtteranc"
             issue-term="pathname"
             theme="github-dark"
             crossorigin="anonymous"
             async>
     </script>
    <FooterView />
    
  </div>
  <div class="container" v-else>
    <HeaderView />

    <p>Cargando...</p> <!-- Muestra un mensaje mientras se cargan los datos -->
    <FooterView />

  </div>

</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el contenido principal */
  padding: 20px;
}
.content {
  width: 100%;
  max-width: 800px;
}
.comments-section {
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
}
</style>