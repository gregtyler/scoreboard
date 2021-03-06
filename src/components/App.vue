<template>
  <div id="app">
    <div v-if="activeId" class="c-canvas">
      <board-info :board="activeBoard" @save="(e) => save()"></board-info>
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
        <strong style="font-weight: bold">{{ boardTypes[board.type] }}</strong>
        <button @click.stop="(e) => deleteBoard(board.id)">❌</button>
        <div style="float: right">
          <date-string :date="board.updated" />
        </div>
      </card>
    </div>
    <div class="c-footer">
      <menu class="c-footer__nav">
        <li class="c-footer__nav-item">
          <button class="c-footer__button c-footer__button--disabled">
            Settings
          </button>
        </li>
        <li class="c-footer__nav-item">
          <button
            class="c-footer__button c-footer__button--active"
            @click="(e) => (activeId = null)"
          >
            Scores
          </button>
        </li>
        <li class="c-footer__nav-item">
          <button class="c-footer__button c-footer__button--disabled">
            Rules
          </button>
        </li>
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
import serializeBoard from "../lib/serializeBoard";

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
      activeId: null,
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
          boards: this.boards.map(serializeBoard),
        })
      );
    },
    createBoard(e) {
      this.boards.unshift({
        id: Date.now().toString(36),
        type: e.type,
        players: {},
        rounds: [],
        created: Date.now(),
        updated: Date.now(),
      });

      this.save();
    },
    deleteBoard(id) {
      if (confirm("Are you sure you want to delete this board?")) {
        const index = this.boards.findIndex((b) => b.id === id);
        this.boards.splice(index, 1);
      }

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
  color: #57452b;
  font-weight: 300;
  background-color: #efedea;
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
  background-color: hsla(0, 0%, 0%, 0.05);
  box-shadow: 0 0 10px -3px hsla(0, 0%, 0%, 0.4);
  list-style: none;
}

.c-footer__nav-item {
  flex: 1;
}

.c-footer__button {
  width: 100%;
  padding: 1rem;
  border: none;
  background-color: inherit;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
}

.c-footer__button--disabled {
  cursor: not-allowed;
}

.c-footer__button--active {
  background-color: hsla(0, 0%, 100%, 0.5);
  font-weight: bold;
}
</style>
