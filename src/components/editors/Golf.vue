<template>
  <div class="canvas">
    <div class="c-row">
      <input
        v-for="(name, id) in players"
        :key="id"
        class="c-row__cell c-row__cell--input"
        :value="name"
        @change="(e) => changePlayer(id, e.currentTarget.value)"
      />
      <button class="c-row__cell c-row__cell--button" @click="addPlayer">
        👤
      </button>
    </div>

    <ol class="scoreboard">
      <template v-for="(round, key) in rounds" class="scoreboard__entry">
        <li :key="`round-${key}`"><hr class="scoreboard__round" /></li>
        <li :key="`score-${key}`" class="c-row">
          <template v-for="score in roundScores(round)">
            <div class="c-row__cell" :key="`score-${key}-${score.playerId}`">
              <span class="scoreboard__running-total">{{ score.running }}</span>
              ({{ score.value }})
            </div>
            <div
              class="c-row__cell c-row__cell--center"
              v-if="score.diff"
              :key="`score-diff-${key}-${score.playerId}`"
            >
              <span class="scoreboard__diff">
                {{ score.diff }}
              </span>
            </div>
          </template>
        </li>
      </template>
    </ol>

    <form @submit.prevent="addScore">
      <div class="c-row">
        <button
          class="c-row__cell c-row__cell--button"
          @click.prevent="undo"
          type="button"
        >
          ⏪
        </button>
        <input
          class="c-row__cell c-row__cell--input"
          v-for="(name, id) in players"
          :key="id"
          v-model="currentScores[id]"
          @focus="selectAll"
          inputmode="numeric"
        />
        <button class="c-row__cell c-row__cell--button">▶️</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    players: Object,
    rounds: Array,
  },
  methods: {
    changePlayer(id, name) {
      this.$set(this.players, id, name);
      this.$emit("change");
    },
    roundScores(round) {
      const scores = Object.keys(this.players).reduce(
        (scores, id) => ({
          ...scores,
          [id]: {
            playerId: id,
            value: 0,
            running: 0,
          },
        }),
        {}
      );

      const roundIndex = this.rounds.indexOf(round);
      round.events.forEach((event) => {
        scores[event.playerId].value += event.amount;
        scores[event.playerId].running =
          (roundIndex > 0
            ? this.roundScores(this.rounds[roundIndex - 1])[event.playerId]
                .running
            : 0) + event.amount;
      });

      if (Object.keys(scores).length === 2) {
        const diff =
          scores[Object.keys(scores)[1]].running -
          scores[Object.keys(scores)[0]].running;

        scores[Object.keys(scores)[0]].diff =
          diff > 0
            ? `‹ ${Math.abs(diff)}`
            : diff < 0
            ? `${Math.abs(diff)} ›`
            : `=`;
      }

      return scores;
    },
    selectAll(e) {
      e.currentTarget.select();
    },
    addPlayer() {
      const playerName = prompt("Enter player name");

      if (playerName) {
        let id = playerName.substr(0, 1);
        while (this.players[id]) {
          id =
            playerName.substr(0, 1) + Math.random().toString(36).substr(2, 2);
        }
        this.$set(this.players, id, playerName);
        this.$set(this.currentScores, id, 0);
      }

      this.$emit("change");
    },
    addScore() {
      this.rounds.push({
        events: Object.entries(this.currentScores).map(
          ([playerId, amount]) => ({
            playerId,
            amount: parseInt(amount, 10),
          })
        ),
      });

      this.resetScores();
      this.$emit("change");
    },
    resetScores() {
      for (let id in this.players) {
        this.$set(this.currentScores, id, 0);
      }
    },
    undo() {
      const lastRound = this.rounds.pop();

      lastRound.events.forEach((event) => {
        this.$set(this.currentScores, event.playerId, event.amount);
      });
    },
  },
  data: () => ({
    currentScores: {},
  }),
  mounted() {
    this.resetScores();
  },
};
</script>

<style scoped>
.canvas {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.title {
  margin: 0;
  padding: 0.5rem;
  text-align: center;
}

.c-row {
  display: flex;
}

.c-row__cell {
  flex: 1;
  min-width: 0;
  padding: 0.5rem 0;
  border: 0;
  color: inherit;
  font-family: inherit;
  text-align: center;
}

.c-row__cell--input {
  background-color: hsla(0, 0%, 0%, 0.1);
  font-size: 1.4rem;
}

.c-row__cell--input + .c-row__cell--input {
  border-left: solid 1px hsla(0, 0%, 0%, 0.3);
}

.c-row__cell--button {
  min-width: 50px;
  flex-grow: 0;
}

.c-row__cell--button {
  background-color: hsla(0, 0%, 100%, 0.4);
  cursor: pointer;
}

.c-row__cell--center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.scoreboard {
  flex: 1;
  margin: 0;
  padding: 0;
  list-style-type: none;

  counter-reset: round;
}

.scoreboard__entry {
  display: flex;
}

.scoreboard__round {
  position: relative;
  flex: 1;
  margin: 1em 0;
  border-bottom: none;
  border-top-color: hsla(0, 0%, 0%, 0.3);
}

.scoreboard__round::after {
  counter-increment: round;
  content: "Hole " counter(round);
  position: absolute;
  top: -0.7em;
  left: 50%;
  width: 100px;
  margin-left: -50px;
  text-align: center;
  background-color: #efedea;
}

.scoreboard__running-total {
  font-size: 1.6rem;
  font-weight: bold;
}

.scoreboard__diff {
  padding: 0 0.5rem;
  border-radius: 1em;
  background-color: #57452b;
  color: #efedea;
  font-weight: bold;
  text-align: center;
}
</style>
