import $ from 'jquery';

class MobileMenu {
	//selects elements to manipulate
	constructor() {
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events();
	}
	//points to what should be done when clicked
	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}
	//toggles certain actions on and off
	toggleTheMenu() {
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

module.exports = MobileMenu;