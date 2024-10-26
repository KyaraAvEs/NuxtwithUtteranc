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
    <FooterView />
  </div>
  <div class="container" v-else>
    <HeaderView />

    <p>Cargando...</p> <!-- Muestra un mensaje mientras se cargan los datos -->
    <FooterView />

  </div>

</template>