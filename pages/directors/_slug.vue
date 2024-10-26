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
    <FooterView />
  </div>
  <div class="container" v-else>
    <HeaderView />

    <p>Cargando...</p> <!-- Muestra un mensaje mientras se cargan los datos -->
    <FooterView />

  </div>

</template>