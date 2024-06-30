import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Jiwan Seo',
  subtitle: 'Portfolio',
  lang: 'en', // 'en', 'zh_CN', 'zh_TW', 'ja'
  themeColor: {
    hue: 50, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false, // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/banner.png', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center', // Equivalent to object-position, defaults center
  },
  favicon: [
    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ],
}

export const navBarConfig: NavBarConfig = {
  links: [],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.jpeg', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Jiwan Seo',
  bio: '남들과 다른 길을 걸어가는 개발자',
  links: [
    {
      name: 'Github',
      icon: 'fa6-brands:github',
      url: 'https://github.com/xixn2',
    },
    {
      name: 'Instagram',
      icon: 'fa6-brands:instagram',
      url: 'https://github.com/xixn2',
    },
    {
      name: 'Email',
      icon: 'material-symbols:mail-outline-sharp',
      url: 'mailto:ssbkh0802@naver.com',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
