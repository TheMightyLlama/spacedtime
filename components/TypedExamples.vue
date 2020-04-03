<script>
import { VueTyper } from 'vue-typer';

export default {
  components: { VueTyper },

  data() {
    return {
      texts: [
        'When is my anniversary?',
        'What is my wifi password?',
        'What is my driver license #?',
        'When did I watch Forrest Gump?',
        'Who did I watch the Matrix with?',
        'Who is my first grade teacher?',
        'When was by daugther born?'
      ]
    };
  }
};
</script>

<template>
  <div class="typed-examples">
    <vue-typer :text="texts" />
  </div>
</template>

<style scoped>
.typed-examples {
  margin: 4rem 0;
  line-height: 1;
  font-size: 1.5rem;
}

@media only screen and (max-width: 600px) {
  .typed-examples {
    margin: 2rem 0;
  }
}
</style>
