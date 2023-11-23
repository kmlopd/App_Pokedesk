<template>
    <div class="row">
        <div class="col pr-3">
            <card-info v-if="abilities.length > 0" :showLabel="showLabel" title="Habilidades" :data="data" />
        </div>
    </div>
</template>
<script>
import { useRoute } from 'vue-router';
import PokemonServices from '@/services/PokeServices';
import CardInfo from '@/components/CardInfo.vue';
export default {
    name: 'AbilitiesView',
    components: {
        CardInfo
    },
    data() {
        return {
            name: '',
            abilities: [],
            data: [],
            showLabel: false
        }
    },
    async created() {
        const route = useRoute()
        this.name = route.params.name
        this.pokemon = await PokemonServices.getPokemonDetail(this.name)
        console.log(this.pokemon)
        this.abilities = this.pokemon.abilities
        this.abilities.forEach(element => {
            let item = {
                name: "",
                value: element.ability.name
            }
            this.data.push(item)
        });
    }
}
</script>
<style lang="scss" scoped>
.stats {
    display: flex;
    justify-content: flex-start;

    p {
        padding: 10px;
    }

    .label-stat {
        font-weight: bold;
    }
}
</style>