<template>
  <div class="c-board">
    <h2 class="c-board__header">
      {{ boardTypes[board.type] }}
      <small style="font-size: 1rem">{{ board.id }}</small>
    </h2>

    <div class="c-board__meta">
      <div class="c-board__meta-item">
        ⭐️
        <span class="o-visually-hidden">Created</span>
        <date-string
          :date="board.created"
          dateStyle="medium"
          timeStyle="short"
        />
      </div>
      <div class="c-board__meta-item">
        <span class="o-visually-hidden">Updated</span>
        ⏱
        <date-string
          :date="board.updated"
          dateStyle="medium"
          timeStyle="short"
        />
      </div>
    </div>

    {{ board.players.join(",") }}
    <ol>
      <li v-for="(event, key) in board.events" :key="key">
        {{ event.dir }}{{ event.amount }} for {{ board.players[event.playerId] }}
      </li>
    </ol>

    <EditorGolf v-if="type === 'golf9'" />
  </div>
</template>

<script>
import boardTypes from "../data/boardTypes";
import DateString from "./DateString.vue";

export default {
  components: {
    DateString,
  },
  props: {
    board: Object,
  },
  data: () => ({
    boardTypes,
  }),
};
</script>

<style type="text/css">
.c-board__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 1rem;
}

.c-board__header small {
  font-size: 1rem;
}

.c-board__meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #ccc;
}

.c-board__meta-item {
  padding: 0.5rem;
  text-align: center;
}

.c-board__meta-item + .c-board__meta-item {
  border-left: 1px solid #ccc;
}

.o-visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
</style>
