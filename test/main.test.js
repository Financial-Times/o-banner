/* eslint-env mocha, sinon, proclaim */

const Banner = require('./../main');
const BannerSrc = require('./../src/js/banner');
const assert = require('proclaim');
const sinon = require('sinon/pkg/sinon');

sinon.assert.expose(assert, {
	includeFail: false,
	prefix: ''
});

describe('main', () => {

	beforeEach(() => {
		sinon.stub(Banner, 'init');
		sinon.spy(document, 'removeEventListener');
	});

	afterEach(() => {
		Banner.init.restore();
		document.removeEventListener.restore();
	});

	it('exports the Banner class', () => {
		assert.isFunction(Banner);
		assert.strictEqual(Banner, BannerSrc);
	});

	it('should auto-initialize banners', done => {
		document.addEventListener('o.DOMContentLoaded', () => {
			assert.calledOnce(Banner.init);
			assert.calledWithExactly(Banner.init);
			assert.calledOnce(document.removeEventListener);
			assert.calledWith(document.removeEventListener, 'o.DOMContentLoaded');
			done();
		});
		document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
	});

});
