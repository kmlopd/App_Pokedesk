<template>
    <div class="row">
        <div class="col pr-3">
            <card-info v-if="moves.length > 0" :showLabel="showLabel" title="Movimientos" :data="data" />
        </div>
    </div>
</template>
<script>
import { useRoute } from 'vue-router';
import PokemonServices from '@/services/PokeServices';
import CardInfo from '@/components/CardInfo.vue';
export default {
    name: 'MovesView',
    components: {
        CardInfo
    },
    data() {
        return {
            name: '',
            moves: [],
            data: [],
            showLabel: false
        }
    },
    async created() {
        const route = useRoute()
        this.name = route.params.name
        this.pokemon = await PokemonServices.getPokemonDetail(this.name)
        console.log(this.pokemon)
        this.moves = this.pokemon.moves
        this.moves.forEach(element => {
            let item = {
                name: "",
                value: element.move.name
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