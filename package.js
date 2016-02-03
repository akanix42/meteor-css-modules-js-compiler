Package.describe({
	name: 'nathantreid:css-modules-js-compiler',
	version: '1.0.0-beta.1',
	// Brief, one-line summary of the package.
	summary: 'JS 2015 processor for nathantreid:css-modules',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/nathantreid/meteor-css-modules-js-compiler.git',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function (api) {
	//api.versionsFrom('1.2.0.1');
	api.use([
		'babel-compiler@6.4.0-modules.5',
		'ecmascript@0.4.0-modules.5',
		'nathantreid:css-modules-import-path-helpers@0.0.1'
	]);

	// pass on implies from ecmascript package
	api.imply('modules@0.5.0-modules.5');
	api.imply('ecmascript-runtime@0.2.7-modules.5');
	api.imply('babel-runtime@0.1.5-modules.5');
	api.imply('promise@0.5.2-modules.5');

	api.export('ECMAScript');
	api.imply('nathantreid:css-modules-import-path-helpers@0.0.1');

	api.addFiles('js-compiler.js', 'server');

	api.export("JsCompiler");
});
