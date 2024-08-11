<script lang="ts">
    import Tag from './Tag.vue';

    export default {
        components: {
            Tag,
        },
        
        props: {
            item: {
                type: String,
                required: true,
            },
        },

        data() {
            return {
                selected: false,
            }
        },

        methods: {
            selectItemListener() {
                this.selected = ! this.selected;

                if (this.selected) {
                    this.$emit('addItem', this.item);
                }
            },
        },

        emits: [
            'addItem',
        ],
    }
</script>

<template>
    <button class="item" @click="selectItemListener" :aria-pressed="selected">
        <Tag :text="item" :active="selected"/>
    </button>
</template>

<style scoped>
    .item {
        cursor: pointer;
    }
</style>