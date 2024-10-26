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

    <FooterView />
  </div>

  <div class="container" v-else>
    <HeaderView />
    <p>Cargando...</p> <!-- Muestra un mensaje mientras se cargan los datos -->
    <FooterView />
  </div>

</template>
