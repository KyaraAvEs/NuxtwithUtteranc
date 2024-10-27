<script>
export default {
  data() {
    return {
      director: null  // Inicializamos la propiedad 'director' para que sea reactiva
    };
  },
  async asyncData({ $content, params }) {
    const director = await $content('directors', params.slug).fetch();
    return { director };  // Devolvemos el objeto 'director'
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

  <div class="container" v-if="director"> <!-- Se asegura de que 'movie' existe antes de acceder -->
    <HeaderView />
    <div class="row">
      <div class="five columns">
        <img class="u-max-full-width" :src="'/images/' + director.image" alt="Movie Image">

      </div>
      <div class="seven columns">
        <h1>{{ director.name }}</h1>
        <p>País de origen: {{ director.country }}</p>
        <p>Fecha de nacimiento: {{ director.birthdate }}</p>
        <p>Películas:</p>
        <div v-for="movie in director.movies" :key="movie.slug">
          <NuxtLink :to="'/movies/' + movie.slug">{{ movie.name }}</NuxtLink>
        </div>
      </div>
    </div>
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