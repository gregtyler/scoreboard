<template>
  <div id="app">
    <div v-if="activeId" class="c-canvas">
      <board-info :board="activeBoard"></board-info>
    </div>
    <div v-else class="c-canvas c-card__list">
      <card>
        <draft-editor @save="(e) => createBoard(e)" />
      </card>
      <card
        v-for="board in boards"
        :key="board.id"
        @click="(e) => (activeId = board.id)"
        clickable
      >
        <strong>{{ boardTypes[board.type] }}</strong>
        <div style="float: right">
          <date-string :date="board.updated" />
        </div>
      </card>
    </div>
    <div class="c-footer">
      <menu class="c-footer__nav">
        <li><button class="c-footer__button">Settings</button></li>
        <li>
          <button class="c-footer__button" @click="(e) => (activeId = null)">
            Scores
          </button>
        </li>
        <li><button class="c-footer__button">Rules</button></li>
      </menu>
    </div>
  </div>
</template>

<script>
import boardTypes from "../data/boardTypes";
import BoardInfo from "./BoardInfo.vue";
import Card from "./Card.vue";
import DateString from "./DateString.vue";
import DraftEditor from "./DraftEditor.vue";
import parseBoard from "../lib/parseBoard";

export default {
  components: {
    Card,
    BoardInfo,
    DateString,
    DraftEditor,
  },
  data: () => {
    const data = JSON.parse(localStorage.getItem("data")) ?? {
      boards: [],
    };

    return {
      boards: data.boards.map(parseBoard).sort((a, b) => b.updated - a.updated),
      activeId: "kwz57u3m",
      boardTypes,
    };
  },
  computed: {
    activeBoard() {
      return this.boards.find((b) => b.id === this.activeId);
    },
  },
  methods: {
    save() {
      localStorage.setItem(
        "data",
        JSON.stringify({
          boards: this.boards,
        })
      );
    },
    createBoard(e) {
      this.boards.unshift({
        id: Date.now().toString(36),
        type: e.type,
        data: "",
        created: Date.now(),
        updated: Date.now(),
      });

      this.save();
    },
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.4;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: blue;
}

.c-canvas {
  flex: 1;
}

.c-card__list {
  padding: 1rem;
}

.c-footer__nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  box-shadow: 0 0 10px -3px hsla(0, 0%, 0%, 0.4);
  list-style: none;
}

.c-footer__button {
  padding: 0.5rem;
  margin: 0.5rem;
}
</style>
