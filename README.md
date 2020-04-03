## Run project

In the project directory, you can run:

### `npm start`

If you wish to see a complete build you can run the command

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Features

- AWS (currently using netlify lamba too keep everything together) Node endpoint to serve buildings
- Implements Google Maps embedded, with a couple of custom pins.
- Replicated design. Build is replicated as best as can be based on the Zeplin designs and stated guidelines.
- Routing added, although it just shows a extra page.
- Fully componentize build. Uses react components for the relevant sections.

## Improvements I would like to make if time permitted

- Fully responsiveness - The app is responsive to tablet, however for truly mobile, I would have moved the sidebar to a hidden state, then added a hamburger type icon, then toggled a full width sidebar as the menu.
- Loading and error state for buildings - The app fails gracefully however I would be been good to build an error component to show the errors fully to the user
- Accessibility - Would have liked to fully made the page accessible
- Redux - I was unsure as to what you wanted to store in the state, I could have stored the buildings however, to get the page finished in time I didnt implement redux, however I can add this in if you wish to see how this would have been added.
