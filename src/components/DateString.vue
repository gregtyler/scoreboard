<template>
  <span>{{ value }}</span>
</template>

<script>
export default {
  props: {
    date: Number,
    dateStyle: {
      type: String,
      default: "medium",
    },
    timeStyle: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    value() {
      return new Intl.DateTimeFormat(navigator.language, {
        dateStyle: this.dateStyle,
        timeStyle: this.timeStyle,
      }).format(new Date(this.date));
    },
  },
};
</script>
