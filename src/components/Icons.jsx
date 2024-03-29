export const CheckedCircle = (props) => (
  <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
      stroke='currentColor'
      strokeWidth={3}
      strokeLinecap='round'
      strokeLinejoin='round'
      // fill='currentColor'
    />
  </svg>
)

export const OpenAccess = (props) => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
    fill='currentColor'
  >
    <path d='M18.972 13.487a7.56 7.56 0 0 0-.54-1.043V6.416a6.376 6.376 0 0 0-1.88-4.536A6.375 6.375 0 0 0 12.016 0h-.002a6.375 6.375 0 0 0-4.536 1.878 6.376 6.376 0 0 0-1.88 4.538v.877h2.57v-.877c0-1.027.4-1.993 1.127-2.72a3.822 3.822 0 0 1 2.72-1.126 3.852 3.852 0 0 1 3.847 3.846v3.508A7.52 7.52 0 0 0 12 8.866a7.54 7.54 0 0 0-5.35 2.216 7.54 7.54 0 0 0-2.217 5.35 7.54 7.54 0 0 0 2.216 5.35A7.54 7.54 0 0 0 12 24.002a7.54 7.54 0 0 0 5.35-2.216 7.54 7.54 0 0 0 2.217-5.351c0-1.021-.2-2.012-.595-2.946zM12 21.43c-2.755 0-4.997-2.242-4.997-4.997S9.245 11.436 12 11.436s4.997 2.241 4.997 4.997S14.755 21.43 12 21.43zm2.145-4.974a2.12 2.12 0 1 1-4.24 0 2.12 2.12 0 0 1 4.24 0z' />
  </svg>
)

export const Book = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={64}
    height={64}
    viewBox='0 0 30.812 30.812'
    xmlSpace='preserve'
    fill='currentColor'
    {...props}
  >
    <path d='M24.577 27.374c-1.069-.431-2.302-.648-3.664-.648-3.343 0-6.523 1.281-7.48 1.703V22.31l.446.49v-9.191c1.688-1.419 3.734-2.181 6.1-2.273l.459-.773c-2.779.003-5.179.853-7.13 2.527-1.955-1.678-4.358-2.528-7.148-2.528-2.605 0-4.558.759-4.639.791l-.24.094v1.539c-.79.146-1.281.41-1.281.841v15.859h11.68c.405.361.995.592 1.656.592s1.252-.23 1.655-.592h11.388V13.843l-1.802 3.729v9.802zm-11.396 1.063c-.97-.398-4.31-1.67-7.654-1.67-1.321 0-2.492.205-3.49.604v-15.4a13.58 13.58 0 0 1 4.122-.652c2.568 0 4.775.776 6.578 2.291v9.192l.444-.49v6.125z' />
    <path d='m3.534 13.995.157.593c3.944-1.046 7.494.889 7.529.909l.298-.536c-.152-.083-3.795-2.076-7.984-.966zM3.534 15.731l.157.592c3.944-1.047 7.494.891 7.529.909l.298-.535c-.152-.085-3.795-2.077-7.984-.966zM3.534 17.361l.157.593c3.944-1.045 7.494.891 7.529.91l.298-.535c-.152-.087-3.795-2.078-7.984-.968zM3.534 19.149l.157.592c3.944-1.046 7.494.891 7.529.909l.298-.535c-.152-.084-3.795-2.077-7.984-.966zM3.534 20.806l.157.592c3.944-1.045 7.494.89 7.529.908l.298-.535c-.152-.084-3.795-2.075-7.984-.965zM3.534 22.507l.157.592c3.944-1.047 7.494.89 7.529.91l.298-.537c-.152-.084-3.795-2.075-7.984-.965zM3.534 24.211l.157.593c3.944-1.047 7.494.889 7.529.908l.298-.533c-.152-.086-3.795-2.078-7.984-.968zM26.348.534l-1.849 3.801.009.003-5.717 11.774-.499 6.193 4.894-3.951L28.96 6.499l.008.005 1.845-3.801L26.348.534zm-3.494 17.494-2.793 2.253-1.107-.535.273-3.471.258-.537.513 1.817 1.133-.729.222 1.385 1.69-.571-.189.388zm6.041-13.489-2.804-1.361.683-1.406 2.803 1.362-.682 1.405z' />
  </svg>
)

export const Mouse = (props) => (
  <svg
    width={64}
    height={64}
    viewBox='0 0 512 512'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M213.304 128h42.654V42.667h-42.654V128ZM42.688 256h85.308v-42.667H42.688V256Zm101.466-81.675L83.84 113.973l30.156-30.165 60.313 60.352-30.156 30.165Zm-30.159 211.188-30.156-30.166 60.312-60.352 30.157 30.166-60.313 60.352ZM325.12 174.325l-30.157-30.165 60.313-60.352 30.157 30.165-60.313 60.352Zm3.156 178.042 59.588 59.605 24.142-24.15-59.609-59.604 42.932-42.923-150.612-40.683 40.67 150.656 42.89-42.901Zm-62.659 116.97-75.39-279.21 279.128 75.392-62.66 62.699 59.61 59.605-78.441 78.443-59.588-59.606-62.659 62.678Z'
      fill='currentColor'
      fillRule='evenodd'
    />
  </svg>
)

export const CreativeCommonGeneral = (props) => (
  <svg
    width={64}
    height={64}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
    fill='currentColor'
  >
    <path fill='none' d='M0 0h24v24H0z' />
    <path d='m11.89 10.34-1.34.7a1.34 1.34 0 0 0-.52-.63 1.21 1.21 0 0 0-.58-.18c-.9 0-1.34.59-1.34 1.77a2.17 2.17 0 0 0 .34 1.29 1.13 1.13 0 0 0 1 .48 1.23 1.23 0 0 0 1.23-.86l1.23.63a2.95 2.95 0 0 1-2.62 1.57 2.93 2.93 0 0 1-2.17-.82A3.1 3.1 0 0 1 6.3 12a3.08 3.08 0 0 1 .83-2.26 2.85 2.85 0 0 1 2.1-.84 2.78 2.78 0 0 1 2.66 1.44m5.77 0-1.32.7a1.48 1.48 0 0 0-.53-.63 1.21 1.21 0 0 0-.6-.18c-.89 0-1.34.59-1.34 1.77a2.32 2.32 0 0 0 .34 1.29 1.15 1.15 0 0 0 1 .48 1.24 1.24 0 0 0 1.24-.86l1.25.63a3.14 3.14 0 0 1-1.11 1.15 2.9 2.9 0 0 1-1.52.42 2.91 2.91 0 0 1-2.17-.82 3.09 3.09 0 0 1-.81-2.29 3.08 3.08 0 0 1 .83-2.26A2.8 2.8 0 0 1 15 8.9a2.75 2.75 0 0 1 2.66 1.44M12 3.5A8.5 8.5 0 1 1 3.5 12 8.51 8.51 0 0 1 12 3.5M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z' />
  </svg>
)

export const CreativeCommonBy = (props) => (
  <svg
    width={64}
    height={64}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
    fill='currentColor'
  >
    <path fill='none' d='M0 0h24v24H0z' />
    <path d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm2 6a1 1 0 0 1 1 1v4h-1.5v4h-3v-4H9v-4a1 1 0 0 1 1-1h4zm-2-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z' />
  </svg>
)

export const OpenInNewWindow = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
    />
  </svg>
)

export const UnderConstruction = (props) => (
  <svg
    viewBox='0 0 200 200'
    data-name='Layer 1'
    id='Layer_1'
    xmlns='http://www.w3.org/2000/svg'
    fill='#000'
    {...props}
  >
    <g id='SVGRepo_iconCarrier'>
      <defs>
        <style>{'.cls-3{fill:#fff}.cls-4{fill:#ffc861}'}</style>
      </defs>
      <path
        transform='rotate(-45 85.778 85.82)'
        style={{
          fill: '#223244',
        }}
        d='M81.77 19.2h8v133.25h-8z'
      />
      <path
        style={{
          fill: '#b7b7b7',
        }}
        d='m20.34 14.59-5.8 5.8L28.39 37l7.44 4.54 5.66-5.66-4.54-7.43-16.61-13.86z'
      />
      <path
        className='cls-3'
        d='M137.13 117.36a6.38 6.38 0 0 0 5.45 5 7.06 7.06 0 0 1 4.32 2l33.38 33.38c5.77 5.77 6.75 14.42 2.81 20.69a15.19 15.19 0 0 1-2.67 3.17c-6.39 5.79-16.64 4.9-23.1-1.57l-33-33a7.06 7.06 0 0 1-2-4.32 6.38 6.38 0 0 0-5-5.45 11.12 11.12 0 0 1-5.75-2.94l-4.46-4.46 22.63-22.63 4.46 4.46a11.12 11.12 0 0 1 2.93 5.67Z'
      />
      <path
        className='cls-4'
        d='M137.13 117.36a6.38 6.38 0 0 0 5.45 5 7.06 7.06 0 0 1 4.32 2l33.38 33.38c5.77 5.77 6.75 14.42 2.81 20.69-6.38 4-15.25 2.7-21.06-3.11l-33-33a7.06 7.06 0 0 1-2-4.32 6.36 6.36 0 0 0-5-5.44 11.11 11.11 0 0 1-5.75-2.95l-4.46-4.46 17.91-17.91 4.46 4.46a11.12 11.12 0 0 1 2.94 5.66Z'
      />
      <rect
        height={36.03}
        rx={2.33}
        ry={2.33}
        transform='rotate(-45 159.187 148.612)'
        width={4.66}
        x={156.85}
        y={130.59}
        style={{
          fill: '#bf9649',
        }}
      />
      <rect
        height={43.18}
        rx={2.33}
        ry={2.33}
        transform='rotate(-45 156.394 156.45)'
        width={4.66}
        x={154.07}
        y={134.86}
        style={{
          fill: '#fff4df',
        }}
      />
      <path
        d='m134.18 111.61-4.46-4.46-22.62 22.62 4.46 4.46a11.16 11.16 0 0 0 5.75 2.94 6.36 6.36 0 0 1 5 5.45 7.09 7.09 0 0 0 2 4.32l33 33c6.47 6.47 16.72 7.35 23.1 1.57 6.82-6.17 6.69-17-.14-23.86l-33.37-33.33a7.09 7.09 0 0 0-4.32-2 6.36 6.36 0 0 1-5.45-5 11.16 11.16 0 0 0-2.95-5.71Z'
        style={{
          strokeWidth: '6.18px',
          fill: 'none',
          stroke: '#2f4360',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }}
      />
      <path
        className='cls-3'
        d='M123.28 93.47 58.35 158.4a19.7 19.7 0 1 1-16.76-16.76l64.93-64.93c19.7-19.7 20.2-22 19.41-24.09a24.61 24.61 0 0 1 33.83-30.95c.39.19.8.39 1.18.61l-15.56 15.58a6.42 6.42 0 0 0 0 9l7.72 7.72a6.41 6.41 0 0 0 6.3 1.6 6.27 6.27 0 0 0 2.74-1.61l15.56-15.52a24.27 24.27 0 0 1 2.52 6.55c.06.28.12.56.16.85a24.58 24.58 0 0 1-33 27.62c-2.06-.78-4.38-.3-24.1 19.4Z'
      />
      <path
        className='cls-4'
        d='M123.28 93.47 58.35 158.4a19.71 19.71 0 0 1-30.67 19 19.68 19.68 0 0 1 18.95-30.68l64.93-64.93c19.7-19.7 20.2-22 19.41-24.09a24.59 24.59 0 0 1 27.61-33l-13.2 13.2a6.42 6.42 0 0 0 0 9l12.76 12.76a6.41 6.41 0 0 0 6.3 1.6 6.27 6.27 0 0 0 2.74-1.61l13.2-13.2a24.58 24.58 0 0 1-33 27.62c-2.06-.78-4.38-.3-24.1 19.4Z'
      />
      <path
        style={{
          fill: '#2f4360',
        }}
        d='m46.39 153.61 2.76 10.31-7.55 7.55-10.3-2.77-2.76-10.3 7.54-7.55 10.31 2.76z'
      />
      <path
        d='M147.37 74.07a24.62 24.62 0 0 0 30.33-35l-15.56 15.55a6.41 6.41 0 0 1-9 0l-7.71-7.71a6.41 6.41 0 0 1 0-9l15.51-15.61a24.62 24.62 0 0 0-35 30.33c.79 2.06.3 4.39-19.4 24.09l-64.95 64.93a19.72 19.72 0 1 0 16.76 16.76l64.93-64.93c19.72-19.7 22.03-20.19 24.09-19.41Z'
        style={{
          strokeWidth: 6,
          fill: 'none',
          stroke: '#2f4360',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }}
      />
    </g>
  </svg>
)

export const ChevronLeft = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15.75 19.5 8.25 12l7.5-7.5'
    />
  </svg>
)

export const CogIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z'
    />
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
    />
  </svg>
)
