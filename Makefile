install: 
	npm install

start:
	npx babel-node src/bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint src/**

even:
	npx babel-node src/bin/brain-even.js

calc:
	npx babel-node src/bin/brain-calc.js
