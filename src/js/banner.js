
/**
 * Represents a banner.
 */
class Banner {

	/**
	 * Class constructor.
	 * @param {HTMLElement} [bannerElement] - The banner element in the DOM
	 * @param {Object} [options={}] - An options object for configuring the banner
	 */
	constructor (bannerElement, options) {
		this.bannerElement = bannerElement;

		// Default the options
		const bannerClass = (options && options.bannerClass ? options.bannerClass : 'o-banner');
		this.options = Object.assign({}, {
			autoOpen: true,

			bannerClass: bannerClass,
			bannerClosedClass: `${bannerClass}--closed`,
			innerClass: `${bannerClass}__inner`,
			contentClass: `${bannerClass}__content`,
			contentLongClass: `${bannerClass}__content--long`,
			contentShortClass: `${bannerClass}__content--short`,
			actionsClass: `${bannerClass}__actions`,
			actionClass: `${bannerClass}__action`,
			actionSecondaryClass: `${bannerClass}__action--secondary`,
			buttonClass: `${bannerClass}__button`,
			linkClass: `${bannerClass}__link`,
			closeButtonClass: `${bannerClass}__close`,

			contentLong: '&hellip;',
			contentShort: '&hellip;',
			buttonLabel: 'OK',
			buttonUrl: '#',
			linkLabel: 'More info',
			linkUrl: '#',
			closeButtonLabel: 'Close'

		}, options || Banner.getOptionsFromDom(bannerElement));

		// Render the banner
		this.render();

		if (this.options.autoOpen) {
			this.open();
		} else {
			this.close();
		}
	}

	/**
	 * Render the banner.
	 */
	render () {
		// If the banner element is not an HTML Element, build one
		if (!(this.bannerElement instanceof HTMLElement)) {
			this.bannerElement = this.buildBannerElement();
			document.body.appendChild(this.bannerElement);
		}

		// Select all the elements we need
		this.innerElement = this.bannerElement.querySelector('[data-o-banner-inner]');

		// Build the close button
		this.closeButtonElement = this.buildCloseButtonElement();
		this.innerElement.appendChild(this.closeButtonElement);
	}

	/**
	 * Open the banner.
	 */
	open () {
		this.bannerElement.classList.remove(this.options.bannerClosedClass);
		this.bannerElement.dispatchEvent(new CustomEvent('o.bannerOpened'));
	}

	/**
	 * Close the banner.
	 */
	close () {
		this.bannerElement.classList.add(this.options.bannerClosedClass);
		this.bannerElement.dispatchEvent(new CustomEvent('o.bannerClosed'));
	}

	/**
	 * Build a full banner element. This is used when no banner exists in the DOM.
	 * @returns {HTMLElement} Returns the new banner element
	 */
	buildBannerElement () {
		const bannerElement = document.createElement('div');
		bannerElement.className = this.options.bannerClass;
		bannerElement.setAttribute('data-o-component', 'o-banner');
		bannerElement.innerHTML = `
			<div class="${this.options.innerClass}" data-o-banner-inner="">
				<div class="${this.options.contentClass} ${this.options.contentLongClass}">
					${this.options.contentLong}
				</div>
				<div class="${this.options.contentClass} ${this.options.contentShortClass}">
					${this.options.contentShort}
				</div>
				<div class="${this.options.actionsClass}">
					<div class="${this.options.actionClass}">
						<a href="${this.options.buttonUrl}" class="${this.options.buttonClass}">${this.options.buttonLabel}</a>
					</div>
					<div class="${this.options.actionClass} ${this.options.actionSecondaryClass}">
						<a href="${this.options.linkUrl}" class="${this.options.linkClass}">${this.options.linkLabel}</a>
					</div>
				</div>
			</div>
		`;
		return bannerElement;
	}

	/**
	 * Build a close button element.
	 * @returns {HTMLElement} Returns the new close button element
	 */
	buildCloseButtonElement () {
		const closeButton = document.createElement('a');
		closeButton.className = this.options.closeButtonClass;
		closeButton.setAttribute('role', 'button');
		closeButton.setAttribute('href', '#void');
		closeButton.setAttribute('aria-label', this.options.closeButtonLabel);
		closeButton.setAttribute('title', this.options.closeButtonLabel);

		// Add event listeners
		closeButton.addEventListener('click', event => {
			this.close();
			event.preventDefault();
		});

		return closeButton;
	}

	/**
	 * Get the data attributes from the bannerElement. If the banner is being set up
	 * declaratively, this method is used to extract the data attributes from the DOM.
	 * @param {HTMLElement} bannerElement - The banner element in the DOM
	 */
	static getOptionsFromDom (bannerElement) {
		if (!(bannerElement instanceof HTMLElement)) {
			return {};
		}
		return Object.keys(bannerElement.dataset).reduce((options, key) => {

			// Ignore data-o-component
			if (key === 'oComponent') {
				return options;
			}

			// Build a concise key and get the option value
			const shortKey = key.replace(/^oBanner(\w)(\w+)$/, (m, m1, m2) => m1.toLowerCase() + m2);
			const value = bannerElement.dataset[key];

			// Try parsing the value as JSON, otherwise just set it as a string
			try {
				options[shortKey] = JSON.parse(value.replace(/\'/g, '"'));
			} catch (error) {
				options[shortKey] = value;
			}

			return options;
		}, {});
	}

	/**
	 * Initialise banner components.
	 * @param {(HTMLElement|String)} rootElement - The root element to intialise banners in, or a CSS selector for the root element
	 * @param {Object} [options={}] - An options object for configuring the banners
	 */
	static init (rootElement, options) {
		if (!rootElement) {
			rootElement = document.body;
		}

		// If the rootElement isnt an HTMLElement, treat it as a selector
		if (!(rootElement instanceof HTMLElement)) {
			rootElement = document.querySelector(rootElement);
		}

		// If the rootElement is an HTMLElement (ie it was found in the document anywhere)
		// AND the rootElement has the data-o-component=o-banner then initialise just 1 banner (this one)
		if (rootElement instanceof HTMLElement && /\bo-banner\b/.test(rootElement.getAttribute('data-o-component'))) {
			return new Banner(rootElement, options);
		}

		// If the rootElement wasn't itself a banner, then find ALL of the child things that have the data-o-component=oBanner set
		return Array.from(rootElement.querySelectorAll('[data-o-component="o-banner"]'), rootElement => new Banner(rootElement, options));
	}

}

// Exports
export default Banner;
