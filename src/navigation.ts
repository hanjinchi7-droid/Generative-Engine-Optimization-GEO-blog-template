import { getPermalink, getBlogPermalink } from './utils/permalinks';
import { SITE } from 'astrowind:config';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getBlogPermalink(),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Archive',
      href: getPermalink('/tags'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Pages',
      links: [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
      ],
    },
    {
      title: 'Explore',
      links: [{ text: 'Archive', href: '/tags' }],
    },
    {
      title: 'Connect',
      links: [
        { text: 'GitHub', href: 'https://github.com/recomby-ai' },
        { text: 'Reddit', href: 'https://www.reddit.com/r/recomby_ai/' },
        { text: 'Email', href: 'mailto:contact@recomby.ai' },
      ],
    },
  ],

  secondaryLinks: [],

  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/recomby-ai' },
    { ariaLabel: 'Reddit', icon: 'tabler:brand-reddit', href: 'https://www.reddit.com/r/recomby_ai/' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:contact@recomby.ai' },
  ],

  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="${SITE.site}"> ${SITE.name}</a> · All rights reserved.
  `,
};