export const menuItemsData = [
  { name: 'Home', url: '/' },
  {
    name: 'about',
    url: '/about',
    submenu: [
      { name: 'Journal', url: 'journal' },
      { name: 'Editorial Board', url: 'editorial-board' },
      { name: 'Peer Review', url: 'peer-review' },
      { name: 'Reviewers Guide', url: 'reviewers-guide' },
    ],
  },
  {
    name: 'policy',
    url: '/policy',
    submenu: [
      // { name: 'Open Access', url: 'open-access' },
      // { name: 'Copyright', url: 'copyright' },
      // { name: 'Plagiarism', url: 'plagiarism' },
      { name: 'Terms', url: 'terms' },
      { name: 'Editorial Process', url: 'editorial-process' },
      { name: 'Publication Ethics', url: 'publication-ethics' },
    ],
  },
  {
    name: 'journal',
    url: '/journal',
    submenu: [
      { name: 'Current', url: 'current' },
      { name: 'Archive', url: 'archive' },
      { name: 'Authors Guide', url: 'authors-guide' },
      { name: 'Submission Guide', url: 'submission-guide' },
      { name: 'Manuscript Format', url: 'manuscript-format' },
      { name: 'Publication Fee', url: 'publication-fee' },
    ],
  },
  { name: 'contact', url: '/contact' },
]
