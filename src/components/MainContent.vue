<script lang="ts">
    import SelectIngredients from './SelectIngredients.vue';
    import YourList from './YourList.vue';

    export default {
        data() {
            return {
                ingredients: [] as string[],
            }
        },

        components: {
            SelectIngredients,
            YourList,
        },

        methods: {
            addItem(item: string) {
                this.ingredients.push(item);
            },

            removeItem(item: string) {
                this.ingredients.splice(this.ingredients.indexOf(item), 1);
            },
        },
    }
</script>

<template>
    <main class="conteudo-principal">
        <YourList :items="ingredients"/>

        <SelectIngredients @add-item="addItem($event)" @remove-item="removeItem($event)" />
    </main>
</template>

<style scoped>
    .conteudo-principal {
        padding: 6.5rem 7.5rem;
        border-radius: 3.75rem 3.75rem 0rem 0rem;
        background: var(--creme, #FFFAF3);
        color: var(--cinza, #444);

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5rem;
    }

    @media only screen and (max-width: 1300px) {
        .conteudo-principal {
            padding: 5rem 3.75rem;
            gap: 3.5rem;
        }
    }

    @media only screen and (max-width: 767px) {
        .conteudo-principal {
            padding: 4rem 1.5rem;
            gap: 4rem;
        }
    }
</style>