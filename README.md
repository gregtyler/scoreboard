# Scoreboard

## Feedback

- [x] "Location" should at least be optional
  - Its only purpose is to remember particular games, which you could get from the title
  - Replace it with a freetext "description" field
- [x] End date/time is pointless
- Images are a faff — could they be auto-searched, or generated like avatars?
- Games should have stats
- Players should have stats
- Players should be an autocomplete, not a dropdown
  - And you should be able to freetext it rather than linking them to an existing person
- Scoreboards and games should be separated:
  - You should be able to pull up the scoreboard that you want freely
  - ...and later be able to attach a game for stats reasons
  - Or do them in a one-r. i.e. select the game OR select the board
- Need an import/export tool at least, if not full sync
- Make rounds smoother:
  - Need to be able to edit round names
  - When you add a new round, default the name to "#" where # is 1 unless there's a previous round with a number
  - Only allow deleting empty rounds
- Default browser "back" action from "Edit game" doesn't work
- [x] Scores should be numeric input
- Screen should stay on
- The board should be landscape-able
  - It is, but need sticky headers and less padding on fields and footer
- Long-press round row to edit/delete

### Ideas

- Right-align scores?
- Review design
- Database -> settings
- New architecture?

## Architecture

- Component thingy + Preact signals
