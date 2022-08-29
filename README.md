# Open Source Slides

### Slides

Website: https://akinncar.github.io/talk-open-source/#0

### Run

Install Dependencies
```
yarn
```

Start localhost
```
yarn start
```

### Build and publish

To build and publish to Github Pages:

```sh
yarn build
```

```sh
yarn publish:deck
```

### Generate PDF

To export a deck as PDF, use the website-pdf CLI. Start the MDX Deck dev server, then run the following command to create a PDF:

```sh
npx website-pdf http://localhost:8080 -o deck.pdf
```
