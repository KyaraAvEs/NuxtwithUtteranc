<script>
export default {
  data() {
    return {
      movie: null  // Inicializamos la propiedad 'movie' para que sea reactiva
    };
  },
  async asyncData({ $content, params }) {
    const movie = await $content('movies', params.slug).fetch();
    return { movie };  // Devolvemos el objeto 'movie'
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

  <div class="container" v-if="movie"> <!-- Se asegura de que 'movie' existe antes de acceder -->
    <HeaderView />

    <div class="row">
      <div class="five columns">
        <img class="u-max-full-width" :src="'/images/' + movie.image" alt="Movie Image">

      </div>
      <div class="seven columns">
        <h1>{{ movie.title }}</h1>
        <p>{{ movie.description }}</p>
        <p>Duración: {{ movie.duration }}</p>
        <p>Género: {{ movie.genre }}</p> <!-- Mostramos el género -->
        <p>Rating: {{ movie.rating }}</p> <!-- Mostramos la calificación -->
        <p>Estudio: <NuxtLink :to="'/studios/' + movie.studio.slug">{{ movie.studio.name }}</NuxtLink>
        </p>
        <p>Director: <NuxtLink :to="'/directors/' + movie.director.slug">{{ movie.director.name }}</NuxtLink>
        </p>
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