/**
 * ============================================================================
 * Tarteaucitron
 * ============================================================================
 */

const googleIdentifier = 'UA-38249160-1';

/**
 * Inspired from https://github.com/AmauriC/tarteaucitron.js/blob/bdff0c5dcf435a5654380be38a1bb0736d6b8cd1/tarteaucitron.services.js#L1727
 * See example into https://github.com/AmauriC/tarteaucitron.js/wiki/Custom-service-init-EN
 * google analytics
 */
// eslint-disable-next-line no-undef
tarteaucitron.services.gtagCustom = {
  key: 'gtagCustom',
  type: 'analytic',
  name: 'Google Analytics (gtag.js)',
  uri: 'https://policies.google.com/privacy',
  needConsent: true,
  // eslint-disable-next-line func-names
  cookies: (function () {
    // eslint-disable-next-line no-undef
    let tagUaCookie = `_gat_gtag_${googleIdentifier}`,
      tagGCookie = `_ga_${googleIdentifier}`;

    // eslint-disable-next-line require-unicode-regexp
    tagUaCookie = tagUaCookie.replace(/-/g, '_');
    // eslint-disable-next-line require-unicode-regexp
    tagGCookie = tagGCookie.replace(/G-/g, '');

    return [
      '_ga',
      '_gat',
      '_gid',
      '__utma',
      '__utmb',
      '__utmc',
      '__utmt',
      '__utmz',
      tagUaCookie,
      tagGCookie,
    ];
  })(),
  js() {
    'use strict';
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line no-undef
    tarteaucitron.addScript(
      `https://www.googletagmanager.com/gtag/js?id=${googleIdentifier}`,
      '',
      // eslint-disable-next-line func-names
      function () {
        window.gtag = function gtag() {
          // eslint-disable-next-line prefer-rest-params,no-undef
          dataLayer.push(arguments);
        };
        // eslint-disable-next-line no-undef
        gtag('js', new Date());
        // eslint-disable-next-line no-undef
        gtag(
          'config',
          googleIdentifier,
          // eslint-disable-next-line camelcase
          { anonymize_ip: true },
          {
            /**
             * https://support.google.com/analytics/answer/7476333?hl=en
             * https:// developers.google.com/analytics/devguides/collection/gtagjs/cross-domain
             */
            linker: {
              domains: ['blog.sogilis.fr', 'sogilis.fr', 'sogilis.com'],
            },
          }
        );
      }
    );
  },
  fallback() {
    // eslint-disable-next-line no-console
    console.error('Google Analytics is not loaded.');
  },
};

/**
 * See https://github.com/AmauriC/tarteaucitron.js/
 */
// eslint-disable-next-line no-undef
tarteaucitron.init({
  /* Privacy policy url */
  privacyUrl: '',

  /* Open the panel with this hashtag */
  hashtag: '#tarteaucitron',
  /* Cookie name */
  cookieName: 'tarteaucitron',

  /* Banner position (top - bottom - middle - popup) */
  orientation: 'bottom',

  /* Group services by category */
  groupServices: false,

  /* Show the small banner on bottom right */
  showAlertSmall: false,
  /* Show the cookie list */
  cookieslist: true,

  /* Show cookie icon to manage cookies */
  showIcon: false,

  /* Optionnal: URL or base64 encoded image */
  // "iconSrc": "",

  /*
   * Position of the icon between BottomRight, BottomLeft, TopRight and TopLeft
   */
  iconPosition: 'BottomRight',

  /* Show a Warning if an adblocker is detected */
  adblocker: true,

  /* Show the deny all button */
  DenyAllCta: true,
  /* Show the accept all button when highPrivacy on */
  AcceptAllCta: true,
  /* HIGHLY RECOMMANDED Disable auto consent */
  highPrivacy: true,

  /* If Do Not Track == 1, disallow all */
  handleBrowserDNTRequest: false,

  /* Remove credit link */
  removeCredit: true,
  /* Show more info link */
  moreInfoLink: true,
  /* If false, the tarteaucitron.css file will be loaded */
  useExternalCss: false,

  /* Shared cookie for subdomain website */
  // "cookieDomain": ".my-multisite-domaine.fr",

  /* Change the default readmore link pointing to tarteaucitron.io */
  readmoreLink: '',

  /* Show a message about mandatory cookies */
  mandatory: true,
});

/**
 * If we use Google Analytics (and not Google Manager) with
 * tarteaucitron.user.analyticsAnonymizeIp` set to true, it is not blocked by
 * uBlock
 */
// eslint-disable-next-line no-undef
(tarteaucitron.job = tarteaucitron.job || []).push('gtagCustom');
