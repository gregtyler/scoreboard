# Scoreboard

## Feedback

- Images are a faff — could they be auto-searched, or generated like avatars?
  - Just optional for now
- Games should have (more) stats
- Players should have stats
- Need an import/export tool at least, if not full sync
  - Maybe atproto?
- Transition animations
- Show an error message when fields are missing (e.g. board name)
- Adding rounds to a game template defaults them to white?

### Ideas

- Review design
- New architecture?

## Architecture

- Component thingy + Preact signals
- Thoughts on remote storage:
  - Could use [at protocol](https://atproto.com/guides/writing-data)?
  - Public client OAuth for authentication ([example in oauth4webapi](https://github.com/panva/oauth4webapi/blob/main/examples/public.ts))
