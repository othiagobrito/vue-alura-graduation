<script lang="ts">
    import YourList from './YourList.vue';
    import SelectIngredients from './SelectIngredients.vue';
    import ShowRecipes from './ShowRecipes.vue';

    type Page = 'SelectIngredients' | 'ShowRecipes';

    export default {
        data() {
            return {
                ingredients: [] as string[],
                content: 'SelectIngredients' as Page,
            }
        },

        components: {
            YourList,
            SelectIngredients,
            ShowRecipes,
        },

        methods: {
            addItem(item: string): void {
                this.ingredients.push(item);
            },

            removeItem(item: string): void {
                this.ingredients.splice(this.ingredients.indexOf(item), 1);
            },

            navigate(page: Page): void {
                this.content = page;
            },
        },
    }
</script>

<template>
    <main class="conteudo-principal">
        <YourList :items="ingredients"/>

        <SelectIngredients v-if="content === 'SelectIngredients'"
            @add-item="addItem($event)"
            @remove-item="removeItem($event)"
            @search-recipes="navigate('ShowRecipes')"
        />

        <ShowRecipes v-else-if="content === 'ShowRecipes'"
            @edit-ingredients="navigate('SelectIngredients')"
        />
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