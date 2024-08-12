# Madokashakalaka keyboard guide generator

![Left hand](/screenshots/Left%20hand%20(A4).png)
![Right hand](/screenshots/Right%20hand%20(A4).png)
![Keyboard Guide](/screenshots/Keyboard%20guide.png)

## Getting started

Run the following command to start building your widget

```bash
npm run dev
```

1. Log in to your account and open the Figma desktop app
2. You can open any existing FigJam document or create a new one.
3. Go to Menu > Widgets > Development > "Import widget from manifest..."
4. Select the manifest.json in this folder

## Organization

This widget uses:

- [esbuild](https://esbuild.github.io/) for bundling
- [vite](https://vitejs.dev/) and [react](https://reactjs.org/) for the iframe
- [typescript](https://www.typescriptlang.org/) for typechecking

| file/folder   | description                                                                      |
| ------------- | -------------------------------------------------------------------------------- |
| manifest.json | The widget's [manifest.json](https://www.figma.com/widget-docs/widget-manifest/) |
| widget-src/   | Contains the widget code                                                         |
| ui-src/       | Contains the iframe code                                                         |

### `npm run dev`

This is the only command you need to run in development. It will start the following processes for you:

- bundling (both widget and iframe code)
- typechecking (both widget and iframe code)
- vite dev server (for iframe development)

## Workflow

Everytime you update [defaultHands](/widget-src/code.tsx#L316), Make sure to right click and reset state on the widget

## Export

Pages are in A4 dimensions, suitable for print. To export to PDF, CTRL + click a page to select. Scroll down right side panel and hit export to PDF