System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "npm:*": "packages/npm/*",
    "app": "main"
  },
  packages: {
    app: {
      defaultExtensions: 'ts'
    }
  },

  map: {
    "typescript": "npm:typescript@1.6.2"
  }
});
