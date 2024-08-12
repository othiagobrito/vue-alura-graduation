<script lang="ts">
    import MainButton from './MainButton.vue';
    import RecipeCard from './RecipeCard.vue';
    import type IRecipe from '@/interfaces/IRecipe';
    import { getRecipes } from '@http/index';

    export default {
        data() {
            return {
                recipes: [] as IRecipe[],
            }
        },

        async created() {
            this.recipes = (await getRecipes()).slice(0, 8);
        },

        components: {
            MainButton,
            RecipeCard,
        },

        emits: [
            'editIngredients',
        ],
    }
</script>

<template>
    <section class="show-recipes">
        <h1 class="cabecalho recipe-titles">Receitas</h1>
    
        <p class="paragrafo-lg results-found">
          Resultados encontrados: {{ recipes.length }}
        </p>
    
        <div v-if="recipes.length" class="recipes-wrapper">
          <p class="paragrafo-lg information">
            Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
          </p>
    
          <ul class="recipes">
            <li v-for="recipe of recipes" :key="recipe.nome">
              <RecipeCard :recipe="recipe" />
            </li>
          </ul>
        </div>
    
        <div v-else class="recipes-not-found">
          <p class="paragrafo-lg recipes-not-found__info">
            Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?
          </p>
    
          <img src="@assets/imagens/sem-receitas.png"
            alt="Desenho de um ovo quebrado. A gema tem um rosto com uma expressão triste.">
        </div>
    
        <MainButton text="Editar Lista" @click="$emit('editIngredients')" />
    </section>
</template>

<style scoped>
    .show-recipes {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .recipe-titles {
        color: var(--verde-medio, #3D6D4A);
        margin-bottom: 1.5rem;
    }

    .results-found {
        color: var(--verde-medio, #3D6D4A);
        margin-bottom: 0.5rem;
    }

    .recipes-wrapper {
        margin-bottom: 3.5rem;
    }

    .information {
        margin-bottom: 2rem;
    }

    .recipes {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        flex-wrap: wrap;
    }

    .recipes-not-found {
        margin-bottom: 2rem;
    }

    .recipes-not-found__info {
        margin-bottom: 0.5rem;
    }

    @media only screen and (max-width: 767px) {
        .recipes-wrapper {
            margin-bottom: 2rem;
        }
    }
</style>