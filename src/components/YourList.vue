<script lang="ts">
    import Tag from './Tag.vue';

    export default {
        components: {
            Tag,
        },
        
        props: {
            items: {
                type: Object,
                required: true,
            },
        },
    }
</script>

<template>
    <section>
        <span class="subtitulo-lg your-list-text">
            Sua lista:
        </span>

        <ul v-if="items.length" class="items-your-list">
            <li v-for="item in items" :key="item">
                <Tag :text="item" active/>
            </li>
        </ul>
    
        <p v-else class="paragrafo empty-list">
            <img src="@images/icones/lista-vazia.svg" alt="Ícone de Pesquisa">
            Sua lista está vazia, selecione ingredientes para iniciar.
        </p>
    </section>
</template>

<style scoped>
    .your-list-text {
        color: var(--coral, #F0633C);
        display: block;
        text-align: center;
        margin-bottom: 1.5rem;
    }

    .items-your-list {
        display: flex;
        justify-content: center;
        gap: 1rem 1.5rem;
        flex-wrap: wrap;
    }

    .empty-list {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.25rem;

        color: var(--coral, #F0633C);
        text-align: center;
    }
</style>