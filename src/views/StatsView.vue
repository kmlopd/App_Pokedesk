<template>
    <div class="row">
        <div class="col pr-3">
            <card-info v-if="stats.length > 0" :showLabel="showLabel" title="Estadísticas" :data="data" />
        </div>
    </div>
</template>
<script>
import { useRoute } from 'vue-router';
import PokemonServices from '@/services/PokeServices';
import CardInfo from '@/components/CardInfo.vue';
export default {
    name: 'StatsView',
    components: {
        CardInfo
    },
    data() {
        return {
            name: '',
            stats: [],
            data: [],
            showLabel: true
        }
    },
    async created() {
        const route = useRoute()
        this.name = route.params.name
        this.pokemon = await PokemonServices.getPokemonDetail(this.name)
        console.log(this.pokemon)
        this.stats = this.pokemon.stats
        this.stats.forEach(element => {
            let item = {
                name: element.stat.name,
                value: element.base_stat
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