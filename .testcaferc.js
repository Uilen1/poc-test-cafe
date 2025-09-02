function validateMeta(excludeMeta, meta) {
	for (let key of Object.keys(excludeMeta)) {
		if (meta[key] === excludeMeta[key])
			return false;
	}

	return true;
}

module.exports = {
	browsers: ['chrome --no-sandbox --disable-save-password-bubble --disable-notifications --disable-infobars --incognito --window-size=1920,1080'],
	// browsers: ["chrome:headless --no-sandbox --disable-gpu --window-size=1920,1080"],
	src: ['tests/'],
	screenshots: {
		takeOnFails: true,
		fullPage: true
	},
	reporter: {
		name: 'json',
		output: 'reports/test-results.json'
	},
	speed: 1,
	selectorTimeout: 10000,
	assertionTimeout: 7000,
	pageLoadTimeout: 30000,
	timeout: {
		pageLoad: 10000,
		ajaxRequest: 5000
	},
	concurrency: 1,
	filter: (testName, fixtureName, fixturePath, testMeta, fixtureMeta) => {
		const excludeFixtureMeta = {
			severity: 'low',
			repeatDaily: false,
		}

		const excludeTestMeta = {
			device: 'mobile',
			skip: true,
		}

		return validateMeta(excludeFixtureMeta, fixtureMeta) && validateMeta(excludeTestMeta, testMeta);
	}
}
