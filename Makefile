JSHINT=./node_modules/jshint/bin/jshint
MOCHA_PHANTOM=./node_modules/mocha-phantomjs/bin/mocha-phantomjs
UGLIFY=./node_modules/uglify-js/bin/uglifyjs

.SILENT:

jshint:
	$(JSHINT) src/*.js

test_js:
	$(MOCHA_PHANTOM) test/SpecRunner.html

minify:
	$(UGLIFY) src/ajax.js src/page-accelerator.js --mangle --output dist/page-accelerator.min.js
	echo "minified!"

deploy: jshint minify
	echo "deployed!"
