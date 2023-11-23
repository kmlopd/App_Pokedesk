<template>
    <div class="card">
        <div class="card-title pt-2">
            <h3 class="text-center">
                {{ title }}
            </h3>
        </div>
        <div class="card-body">
            <div v-for="(item, index) in data" :key="index" class="stats">
                <p v-if="showLabel" class="label-stat">
                    {{ item.name }} :
                </p>
                <p class="value-stat">
                    {{ item.value }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardInfo',
    props: {
        title: "",
        data: [],
        showLabel: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style lang="scss" scoped>
.stats {
    display: flex;
    justify-content: flex-start;

    p {
        padding: 0px 2px 0px 2px;
    }

    .label-stat {
        font-weight: bold;
    }
}
</style>