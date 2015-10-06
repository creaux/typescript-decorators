System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "module": "commonjs",
    "emitDecoratorMetadata": true
  },	
  paths: {
    "npm:*": "packages/npm/*"
  },
  packages: {
	  "app": {
		  "main": "main",
		  "defaultExtension": "ts"
	  }
  },
	
  map: {
    "typescript": "npm:typescript@1.6.2"
  }
});
