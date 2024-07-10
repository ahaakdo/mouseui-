<script setup lang="ts">
// packages/button/src/button.vue
import { hello } from '@mouseui/shared';
import { withDefaults } from 'vue';

const props = withDefaults(defineProps<{
  text?: string;
}>(), {
  text: 'World',
});

function clickHandler() {
  hello(props.text);
}
</script>

<template>
  <button class="openx-button" @click="clickHandler">
    <slot></slot>
  </button>
</template>