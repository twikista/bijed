export const menuItemsData = [
  { name: 'Home', url: '/' },
  {
    name: 'about',
    url: '/about',
    submenu: [
      { name: 'About us', url: 'about-us' },
      { name: 'Editorial Board', url: 'editorial-board' },
      { name: 'Peer Review', url: 'peer-review' },
    ],
  },
  {
    name: 'policy',
    url: '/policy',
    submenu: [
      // { name: 'Open Access', url: 'open-access' },
      // { name: 'Copyright', url: 'copyright' },
      { name: 'Terms', url: 'terms' },
      { name: 'Publication Ethics', url: 'publication-ethics' },
      { name: 'Authors Guide', url: 'authors-guide' },
      { name: 'Reviewers Guide', url: 'reviewers-guide' },
      { name: 'Plagiarism Policy', url: 'plagiarism-policy' },
    ],
  },
  {
    name: 'journal',
    url: '/journal',
    submenu: [
      { name: 'Current', url: 'current' },
      { name: 'Archive', url: 'archive' },
      { name: 'Editorial Process', url: 'editorial-process' },
      { name: 'Submission Guide', url: 'submission-guide' },
      { name: 'Manuscript Format', url: 'manuscript-format' },
      { name: 'Publication Fee', url: 'publication-fee' },
    ],
  },
  { name: 'contact', url: '/contact' },
]
