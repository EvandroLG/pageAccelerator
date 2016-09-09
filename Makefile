JSHINT=./node_modules/jshint/bin/jshint
UGLIFY=./node_modules/uglify-js/bin/uglifyjs

.SILENT:

jshint:
	$(JSHINT) src/*.js

minify:
	$(UFLIFY) src/ajax.js src/page-accelerator.js -c -m page-accelerator.min.js
	echo "minified!"

deploy: jshint minify
	echo "deployed!"
