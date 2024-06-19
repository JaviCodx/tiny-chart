# Test Tinybird

This is a test project for Tinybird

## Description

I first did check the implementation of the charts that you recently announced and check the docs, the implementation is pretty neat and good looking so I have decided to expand on the same charts library but from another perspective.

Instead of a wrap with React I think it would be better to make web components since they can be used in all major [browsers](https://caniuse.com/custom-elementsv1) and [frameworks](https://custom-elements-everywhere.com/), as all things in software it has it's own caveats , advanced features are not very well suported in React until version 19 releases, fortunately the library ([Lit](https://lit.dev/docs/)) I have used to build de web component has a [wrapper](https://lit.dev/docs/frameworks/react/) for that.

For the data analyzed, the charts are mostly time framed, you can check de demo for more details.

With a web component I dont see the uue case for an iframe, you can copy&paste the web component anywhere installing the lib from a cdn, also if you have lots of charts It would be much more performant since each iframe is a separate browser window.

## Going forward

Some of the thing I would expand on:

- Bundle the widget lib with rollup and upload it to npm for public use
- Treeshake echarts, it is preatty heavy
- Types
- Improve testing, it is basic
- Test other frameworks
- Custom style
- Resize the charts to make them responsive with ResizeObserver

### npx

```sh
npm run dev
```

to the test

```sh
npm run tes
```
