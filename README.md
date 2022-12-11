# Test Weather UI

## Setup ENV variables

1. Create a new file names `.env.local`, for example like this `cp .env.example .env.local`.
2. Update the variables with the right values.

## Commands

```bash
# Install deps
yarn

# Run development server, starting on http://localhost:3000
yarn dev

# Check ESLint errors
yarn lint

# Check for prettier errors
yarn format:check

# Fix the prettier errors
yarn format

# Build the app, checking TS issues
yarn build

# Check you code (ESLint + prettier + TS)
yarn check:all
```

## Resources

### Documentation

- [Next.js](https://nextjs.org/docs/getting-started)
- [React](https://reactjs.org/docs/getting-started.html)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Material-UI](https://mui.com/getting-started/usage/)
- [Google Map with React](https://developers.google.com/maps/documentation/javascript/react-map)

### Misc

- Cities data imported from [here](https://simplemaps.com/data/canada-cities)

## Instructions

```
Build a simple ReactJS App using Google Maps SDK in TypeScript showing the current weather
for the cities in Canada on the map as pins and when pins are clicked it should display the
weather data info window on the map.

You can use the following API documentation to get the weather Observation data:
https://weatherapi.pelmorex.com/api/v1/documentation/

API Example:
https://weatherapi.pelmorex.com/v1/observation?lat=43.5100092&long=-79.8976626

Please create a list of lat and long values for top cities in Canada.
The simple app should be responsive and should work on both mobile and desktop browsers.
```
