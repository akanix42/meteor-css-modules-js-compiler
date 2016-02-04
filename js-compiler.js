JsCompiler = class JsCompiler {
	processFilesForTarget(files) {
		files.forEach(processFile);
		new BabelCompiler().processFilesForTarget(files);
	}
}

function processFile(file) {
	let filePath = ImportPathHelpers.getImportPathInPackage(file);
	let source = file.getContentsAsString();
	let content = source.replace(/import (.*?) from (.*\.mss['"]?);?/g, (match, names, p2) => {
		let path = ImportPathHelpers.getImportPathRelativeToFile(p2, filePath);
		names = parseImportNames(names);
		return `var ${names} = CssModules.import('${path}');`;
	});
	file.getContentsAsString = () => content;
}

function parseImportNames(names) {
	if (names[0] === '*') {
		var match = names.match(/\* as (.*)/);
		if (match.length)
			return match[1];
		else
			throw `'invalid import statement: ${match}`;
	}
	return names;
}

