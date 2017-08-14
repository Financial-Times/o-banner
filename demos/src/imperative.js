
import Banner from '../../main';

function initDemos() {
	document.addEventListener('DOMContentLoaded', () => {

		document.getElementById('banner-standard').addEventListener('click', () => {
			new Banner(null, {
				contentLong: 'Try the new compact homepage. A list view of today\'s homepage with fewer images.',
				contentShort: 'Try the new compact homepage.',
				buttonLabel: 'Try it now',
				buttonUrl: '#try-button',
				linkLabel: 'Give feedback',
				linkUrl: '#feedback-link'
			});
		});

		document.getElementById('banner-standard-html').addEventListener('click', () => {
			new Banner(null, {
				contentLong: `
					<h1 class="o-banner__heading">Try the new compact homepage</h1>
					<p>A list view of today's homepage with fewer images.</p>
				`,
				buttonLabel: 'Try it now',
				buttonUrl: '#try-button',
				linkLabel: 'Give feedback',
				linkUrl: '#feedback-link'
			});
		});

		document.getElementById('banner-promo').addEventListener('click', () => {
			new Banner(null, {
				contentLong: `
					<h1 class="o-banner__heading">Come back and save</h1>
					<p>Re-subscribe today and save 25%</p>
					<small>Pay just £3 per week</small>
				`,
				buttonLabel: 'Subscribe now',
				buttonUrl: '#subscribe-button',
				theme: 'promo'
			});
		});

		document.getElementById('banner-promo-html').addEventListener('click', () => {
			new Banner(null, {
				contentLong: `
					<h1 class="o-banner__heading">Come back and save</h1>
					<p>Re-subscribe today and save 25%</p>
					<ul>
						<li>This</li>
						<li>is a</li>
						<li>list</li>
					<ul>
				`,
				buttonLabel: 'Subscribe now',
				buttonUrl: '#subscribe-button',
				theme: 'promo'
			});
		});

		document.getElementById('banner-promo-action').addEventListener('click', () => {
			new Banner(null, {
				contentLong: 'Try the new compact homepage. A list view of today\'s homepage with fewer images.',
				contentShort: 'Try the new compact homepage.',
				buttonLabel: 'Try it now',
				buttonUrl: '#try-button',
				linkLabel: 'Give feedback',
				linkUrl: '#feedback-link',
				theme: 'promo'
			});
		});

		document.getElementById('banner-promo-standout').addEventListener('click', () => {
			new Banner(null, {
				contentLong: `
					<h1 class="o-banner__heading">Come back and save</h1>
					<p>Re-subscribe today and save 25%</p>
					<small>Pay just £3 per week</small>
				`,
				buttonLabel: 'Subscribe now',
				buttonUrl: '#subscribe-button',
				theme: ['promo', 'promo-standout']
			});
		});

		document.getElementById('banner-promo-standout-html').addEventListener('click', () => {
			new Banner(null, {
				contentLong: `
					<h1 class="o-banner__heading">Come back and save</h1>
					<p>Re-subscribe today and save 25%</p>
					<ul>
						<li>This</li>
						<li>is a</li>
						<li>list</li>
					<ul>
				`,
				buttonLabel: 'Subscribe now',
				buttonUrl: '#subscribe-button',
				theme: ['promo', 'promo-standout']
			});
		});

		document.getElementById('banner-promo-standout-action').addEventListener('click', () => {
			new Banner(null, {
				contentLong: 'Try the new compact homepage. A list view of today\'s homepage with fewer images.',
				contentShort: 'Try the new compact homepage.',
				buttonLabel: 'Try it now',
				buttonUrl: '#try-button',
				linkLabel: 'Give feedback',
				linkUrl: '#feedback-link',
				theme: ['promo', 'promo-standout']
			});
		});

	});
}

initDemos();
