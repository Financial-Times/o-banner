export default Banner;
/**
 * Represents a banner.
 */
declare class Banner {
    /**
     * Get the data attributes from the bannerElement. If the banner is being set up
     * declaratively, this method is used to extract the data attributes from the DOM.
     * @param {HTMLElement} bannerElement - The banner element in the DOM
     */
    static getOptionsFromDom(bannerElement: HTMLElement): {};
    /**
     * Initialise banner components.
     * @param {(HTMLElement|String)} rootElement - The root element to intialise banners in, or a CSS selector for the root element
     * @param {Object} [options={}] - An options object for configuring the banners
     */
    static init(rootElement: (HTMLElement | string), options?: any): any;
    /**
     * Class constructor.
     * @param {HTMLElement} [bannerElement] - The banner element in the DOM
     * @param {Object} [options={}] - An options object for configuring the banner
     * @property {HTMLElement} bannerElement
     */
    constructor(bannerElement?: HTMLElement, options?: any);
    bannerElement: HTMLElement;
    options: any;
    /**
     * Render the banner.
     */
    render(): void;
    innerElement: Element;
    closeButtonElement: HTMLElement;
    /**
     * Open the banner.
     */
    open(): void;
    /**
     * Close the banner.
     */
    close(): void;
    /**
     * Build a full banner element. This is used when no banner or a partial banner exists in the DOM.
     * @param {HTMLElement} [bannerElement] - The banner element to build around
     * @returns {HTMLElement} Returns the new banner element
     */
    buildBannerElement(bannerElement?: HTMLElement): HTMLElement;
    /**
     * Build a close button element.
     * @returns {HTMLElement} Returns the new close button element
     */
    buildCloseButtonElement(): HTMLElement;
}
declare namespace Banner {
    const _bannerInstances: any[];
}
