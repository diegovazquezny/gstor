## Tech stack
- Front-end
  + React with Redux for state management
  + Vanilla CSS for styling

- Back-end
  + NodeJS with Express

## Specs

1. When a user navigates to the app for the first time, the app downloads the games data (from games.json). While the game data is being fetched, an indication of progress is displayed.

2. Upon the completion of the games data download, a listing of games is displayed on screen. The order of the listing is determined by the `Order` field in the games data. Each item in the listing displays the following:

- Game icon
- Game name
- Whether the game supports addons
- Whether the game supports voice

3. When a user clicks on an item in the listing, the app displays a view which shows the details of the game. The game detail view includes all the data from the item in the listing and the following additions:

- Game slug
- List of game file names
- List of category section names

4. Game search functionality is implemented.