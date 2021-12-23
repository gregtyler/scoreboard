<template>
	<div :class="{ card: true, 'card--clickable': clickable }" v-on="$listeners">
    <slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		clickable: Boolean
	}
}
</script>

<style lang="scss">
.card {
  padding: .5rem;
  border: 1px solid #ccc;
}

.card--clickable {
	cursor: pointer;
}

.card + .card {
  margin-top: 1rem;
}
</style>
