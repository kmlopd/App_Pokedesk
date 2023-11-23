<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-sm-9">
                <div class="card">
                    <div class="card-title">
                        <h3 class="text-center">
                            {{ pokemon.name }}
                        </h3>
                    </div>
                    <div class="card-body card">
                        <div class="card-content">
                            <img v-if="image" :src="image" alt="" width="380" height="380">
                            <div class="d-flex aligm-items-bottom">
                                <p>
                                    <stong>Tipo: </stong>
                                </p>
                                <p style="margin-right: 5px; margin-left: 2px;" v-for="(type, index) in types" :key="index">
                                    <strong>{{ type.type.name }}</strong>
                                </p>
                            </div>
                            <div class="d-flex">
                                <button @click="goToStats()" class="button">
                                    <span>Ver Estadísticas</span>
                                </button>
                                <button @click="goToAbilities()" class="button2">
                                    Ver habilidades
                                </button>
                                <button @click="goToMoves()" class="btn btn-success m-3 mb-4 ">
                                    Ver movimientos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-sm-9 mt-3 pt-3 pb-3">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import { useRoute } from 'vue-router'
import PokeService from '@/services/PokeServices'
export default {
    name: 'PokemonDetail',
    data() {
        return {
            name: '',
            pokemon: {},
            types: [],
            image: null,

        }
    },
    async created() {
        const route = useRoute()
        this.name = route.params.name
        this.pokemon = await PokeService.getPokemonDetail(this.name)
        this.types = this.pokemon.types
        this.image = this.pokemon.sprites.other.dream_world.front_default
    },
    methods: {
        goToStats() {
            this.$router.push({
                name: 'stats'
            })
        },
        goToAbilities() {
            this.$router.push({
                name: 'abilities'
            })
        },
        goToMoves() {
            this.$router.push({
                name: 'moves'
            })
        }
    }
}
</script>

<style scoped>

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

h3 {
    text-transform: uppercase;
    color: blueviolet;
}

strong {
    text-transform: uppercase;
}

.card {
  width: 700px;
  height: 650px;
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  border-radius: 8px;
  color: white;
  overflow: hidden;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  cursor: pointer;
}

.card-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
}

.card:hover {
  transform: rotateY(10deg) rotateX(10deg) scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.1));
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  z-index: 1;
}

.card:hover:before {
  transform: translateX(-100%);
}

.card:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.1));
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  z-index: 1;
}

.card:hover:after {
  transform: translateX(100%);
}

 /* //---------botones------- */
.button {
  font-family: inherit;
  font-size: 18px;
  background: linear-gradient(to bottom, #4dc7d9 0%,#66a6ff 100%);
  color: white;
  padding: 0.8em 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 25px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
}

.button:hover {
  transform: translateY(-3px);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
}

.button:active {
  transform: scale(0.95);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}

.button span {
  display: block;
  margin-left: 0.4em;
  transition: all 0.3s;
}

.button2 {
 padding: 15px 25px;
 border: unset;
 border-radius: 15px;
 color: #212121;
 z-index: 1;
 background: #e8e8e8;
 position: relative;
 font-weight: 1000;
 font-size: 17px;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms;
 overflow: hidden;
}

.button2::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 0;
 border-radius: 15px;
 background-color: #212121;
 z-index: -1;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms
}

.button2:hover {
 color: #e8e8e8;
}

.button2:hover::before {
 width: 100%;
}

</style>