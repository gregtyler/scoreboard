<template>
	<div>
    <select type="text" v-model="type">
      <option v-for="(label, type) in boardTypes" :key="type" :value="type">{{ label }}</option>
    </select>
    <button @click="e => createBoard()">Create board</button>
  </div>
</template>

<script>
import boardTypes from '../data/boardTypes'
import Card from './Card.vue'

export default {
	components: {
		Card,
	},
	data: () => ({
    boardTypes,
		type: null,
	}),
	methods: {
		createBoard() {
      if (!this.type) {
        alert('You must select a type');
        return;
			}

      this.$emit('save', { type: this.type });

			this.type = null;
		}
	}
}
</script>

<style lang="scss" scoped>
select { display: block; }
</style>
