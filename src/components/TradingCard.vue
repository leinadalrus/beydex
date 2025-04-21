<script setup lang="ts"></script>

<template>
    <article>
        <h1>
            <slot name="title"></slot>
        </h1>
        <section>
            <slot name="image"></slot>
        </section>

        <span>
            <i>
                <slot name="description"></slot>
            </i>
        </span>

        <div>
            <li>
                <slot name="information"></slot>
            </li>
        </div>
    </article>
</template>
