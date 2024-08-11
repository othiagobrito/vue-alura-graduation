<template>
    <footer class="footer paragrafo">
        Desenvolvido por Alura | 2024 - Projeto fictício sem fins comerciais.
    </footer>
</template>

<style scoped>
    .footer {
        background: var(--verde-escuro, #263A29);
        padding: 1.5rem 7.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 1300px) {
        .footer {
            padding: 1.5rem 3.75rem;
        }
    }

    @media only screen and (max-width: 767px) {
        .footer {
            padding: 1.5rem;
        }
    }
</style>