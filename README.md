# Pokemon GO Client for pokeapi.co

This is a simple web application to access and display information about Pokemon using the [pokeapi.co](https://pokeapi.co/) API. It includes a list view, a detailed view, and the ability to load more Pokemon. The application also allows filtering by Pokemon type.

## Features

- **Index View**: Displays a list of Pokemon with basic information.
- **Pokemon Selected View**: Shows detailed information about a selected Pokemon.
- **Load More**: Loads more Pokemon as you will click on the button "Load more".
- **Filter by Type**: Filter Pokemon by their types.
- **Adaptive Styling**: The application is designed to work on various screen widths by Tailwind.

## API Endpoints

1. [List of Pokemon](https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=12)
2. [Pokemon Details](https://pokeapi.co/api/v2/pokemon/)
3. [List of Pokemon Types](https://pokeapi.co/api/v2/type/)

## Getting Started

To run this client app, follow these steps:

1. Clone this repository to your local machine.
2. Open the project folder.
3. Install NPM.
4. Start the project by "npm start".
3. Open the project using a development server.

## Technologies Used

1. React
2. Redux Toolkit
3. Tailwind CSS

## Deployment

You can deploy the app to GitHub Pages by following these steps:

1. Push your code to a `gh-pages` branch of the repository.
2. Go to the repository's settings on GitHub.
3. Scroll down to the GitHub Pages section.
4. Select the `gh-pages` branch as the source.
5. Your app will be available at `https://<username>.github.io/<repository-name>`.