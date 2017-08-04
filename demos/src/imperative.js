
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

		document.getElementById('banner-small').addEventListener('click', () => {
			new Banner(null, {
				contentLong: `
					<h1 class="o-banner__heading">Come back and save</h1>
					<p>Re-subscribe today and save 25%</p>
					<small>Pay just £3 per week</small>
				`,
				buttonLabel: 'Subscribe now',
				buttonUrl: '#subscribe-button',
				theme: 'small'
			});
		});

		document.getElementById('banner-small-html').addEventListener('click', () => {
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
				theme: 'small'
			});
		});

		document.getElementById('banner-small-action').addEventListener('click', () => {
			new Banner(null, {
				contentLong: 'Try the new compact homepage. A list view of today\'s homepage with fewer images.',
				contentShort: 'Try the new compact homepage.',
				buttonLabel: 'Try it now',
				buttonUrl: '#try-button',
				linkLabel: 'Give feedback',
				linkUrl: '#feedback-link',
				theme: 'small'
			});
		});

		document.getElementById('banner-small-bright').addEventListener('click', () => {
			new Banner(null, {
				contentLong: `
					<h1 class="o-banner__heading">Come back and save</h1>
					<p>Re-subscribe today and save 25%</p>
					<small>Pay just £3 per week</small>
				`,
				buttonLabel: 'Subscribe now',
				buttonUrl: '#subscribe-button',
				theme: ['small', 'bright']
			});
		});

		document.getElementById('banner-small-bright-html').addEventListener('click', () => {
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
				theme: ['small', 'bright']
			});
		});

		document.getElementById('banner-small-bright-action').addEventListener('click', () => {
			new Banner(null, {
				contentLong: 'Try the new compact homepage. A list view of today\'s homepage with fewer images.',
				contentShort: 'Try the new compact homepage.',
				buttonLabel: 'Try it now',
				buttonUrl: '#try-button',
				linkLabel: 'Give feedback',
				linkUrl: '#feedback-link',
				theme: ['small', 'bright']
			});
		});

	});
}

initDemos();
