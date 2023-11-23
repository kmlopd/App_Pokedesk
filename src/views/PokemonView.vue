<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div v-for="pokemon in pokemons" :key="pokemon.name" class="col-sm-3 mt-3 pt-3 pb-3 d-flex justify-content-center">
                <router-link :to="{ name: 'pokemon-detail', params: { name: pokemon.name } }">
                    <div class="flip-card">
                      <div class="flip-card-inner">
                          <div class="flip-card-front">
                              <img src="@/assets/RPoke.jpg" alt="/" width="190" height="280" />
                          </div>
                          <div class="flip-card-back">
                                <h2 class="title"> <strong>{{ pokemon.name }}</strong> </h2>
                                <p>Descripcion del Pokemons</p>
                          </div>
                      </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import PokemosService from '@/services/PokeServices'
export default {
    name: 'PokemonView',
    data() {
        return {
            pokemons: []
        }
    },
    async created() {
        this.pokemons = await PokemosService.getPokemons()
        console.log(this.pokemons)
    }
}
</script>

<style scoped>
.flip-card {
  background-color: transparent;
  width: 193px;
  height: 285px;
  perspective: 1000px;
  font-family: sans-serif;
}

strong {
  text-transform: uppercase;
}
.title {
  font-size: 1.5em;
  font-weight: 900;
  color: blueviolet;
  text-align: center;
  margin: 0;
}

p {
  display: flex;
  flex-wrap: wrap;
  margin-top: 14px;
  font-size: 18px;
}

p:hover {
  color: aqua;
  font-size: 20px;
  text-transform: uppercase;
  transition: all ease-in-out 0.3s;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  display: flex;
  flex-wrap: wrap;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid coral;
  border-radius: 1rem;
}
.flip-card-back {
  background-color: rgb(14, 14, 26);
  --lightness: 80%;
  outline: 1px solid rgb(255, 255, 255);
  color: white;
  transform: rotateY(180deg);
}
</style>