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

export const OrchidId = (props) => (
  <svg
    id='Layer_1'
    xmlns='http://www.w3.org/2000/svg'
    x={0}
    y={0}
    viewBox='0 0 256 256'
    style={{
      enableBackground: 'new 0 0 256 256',
    }}
    xmlSpace='preserve'
    {...props}
  >
    <style>{'.st1{fill:#fff}'}</style>
    <path
      d='M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z'
      style={{
        fill: '#a6ce39',
      }}
    />
    <path
      className='st1'
      d='M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7C191.7 111.2 178 93 148 93h-23.7v79.4zM88.7 56.8c0 5.5-4.5 10.1-10.1 10.1s-10.1-4.6-10.1-10.1c0-5.6 4.5-10.1 10.1-10.1s10.1 4.6 10.1 10.1z'
    />
  </svg>
)

export const SVGComponent = (props) => (
  <svg
    height={200}
    width={200}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 58 58'
    xmlSpace='preserve'
    {...props}
  >
    <path d='m50.95 12.187-.771-.771L40.084 1.321 39.313.55A1.891 1.891 0 0 0 37.985 0H8.963C7.777 0 6.5.916 6.5 2.926V56c0 .837.842 1.653 1.838 1.91.05.013.098.032.15.042.156.031.315.048.475.048h40.074c.16 0 .319-.017.475-.048.052-.01.1-.029.15-.042.996-.257 1.838-1.073 1.838-1.91V13.978c0-.767-.092-1.333-.55-1.791zM47.935 12H39.5V3.565L47.935 12zM8.963 56c-.071 0-.135-.026-.198-.049a.458.458 0 0 1-.265-.414V41h41v14.537a.46.46 0 0 1-.265.414c-.063.023-.127.049-.198.049H8.963zM8.5 39V2.926c0-.217.033-.926.463-.926h28.595a1.54 1.54 0 0 0-.058.391V14h11.609c.135 0 .264-.025.39-.058l.001.036V39h-41z' />
    <path d='M22.042 44.744a3.438 3.438 0 0 0-1.128-.615 4.067 4.067 0 0 0-1.271-.205h-2.898V54h1.641v-3.637h1.217c.528 0 1.012-.077 1.449-.232s.811-.374 1.121-.656c.31-.282.551-.631.725-1.046.173-.415.26-.877.26-1.388 0-.483-.103-.918-.308-1.306s-.475-.717-.808-.991zm-.622 3.329c-.101.278-.232.494-.396.649a1.499 1.499 0 0 1-.54.335 1.808 1.808 0 0 1-.595.103h-1.504v-3.992h1.23c.419 0 .756.066 1.012.198.255.132.453.296.595.492.141.196.234.401.28.615a2.8 2.8 0 0 1 .068.567c0 .411-.05.755-.15 1.033zM31.954 45.4c-.424-.446-.957-.805-1.6-1.073s-1.388-.403-2.235-.403h-3.035V54h3.814c.127 0 .323-.016.588-.048.264-.032.556-.104.875-.219.319-.114.649-.285.991-.513s.649-.54.923-.937.499-.889.677-1.477.267-1.297.267-2.126a5.06 5.06 0 0 0-.314-1.757 4.436 4.436 0 0 0-.951-1.523zm-1.196 6.33c-.492.711-1.294 1.066-2.406 1.066h-1.627v-7.629h.957c.784 0 1.422.103 1.914.308s.882.474 1.169.807.48.704.581 1.114c.1.41.15.825.15 1.244 0 1.349-.246 2.38-.738 3.09zM35.598 54h1.668v-4.539h4.211V48.34h-4.211v-3.172H41.9v-1.244h-6.302zM38.428 22.961c-.919 0-2.047.12-3.358.358-1.83-1.942-3.74-4.778-5.088-7.562 1.337-5.629.668-6.426.373-6.802-.314-.4-.757-1.049-1.261-1.049-.211 0-.787.096-1.016.172-.576.192-.886.636-1.134 1.215-.707 1.653.263 4.471 1.261 6.643-.853 3.393-2.284 7.454-3.788 10.75-3.79 1.736-5.803 3.441-5.985 5.068-.066.592.074 1.461 1.115 2.242.285.213.619.326.967.326.875 0 1.759-.67 2.782-2.107.746-1.048 1.547-2.477 2.383-4.251 2.678-1.171 5.991-2.229 8.828-2.822 1.58 1.517 2.995 2.285 4.211 2.285.896 0 1.664-.412 2.22-1.191.579-.811.711-1.537.39-2.16-.385-.749-1.334-1.115-2.9-1.115zm-17.892 9.673c-.468-.359-.441-.601-.431-.692.062-.556.933-1.543 3.07-2.744-1.62 2.992-2.49 3.389-2.639 3.436zm8.2-22.922c.043-.014 1.045 1.101.096 3.216-1.426-1.459-.194-3.183-.096-3.216zm-2.067 16.026a71.291 71.291 0 0 0 2.674-7.564c1.123 2.018 2.472 3.976 3.822 5.544a49.812 49.812 0 0 0-6.496 2.02zm12.901-.479c-.308.431-.976.441-1.21.441-.533 0-.732-.317-1.547-.944a14.395 14.395 0 0 1 1.811-.108c.889 0 1.052.131 1.175.197-.022.071-.08.205-.229.414z' />
  </svg>
)

export const HomeIconOutline = (props) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g
      stroke='currentColor'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12 18v-3M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01Z' />
    </g>
  </svg>
)

export const HomeIconFill = (props) => (
  <svg
    viewBox='0 0 24 24'
    // fill='none'
    className='w-5 fill-orange-700 hover:fill-current'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='m20.83 8.01-6.55-5.24C13 1.75 11 1.74 9.73 2.76L3.18 8.01c-.94.75-1.51 2.25-1.31 3.43l1.26 7.54C3.42 20.67 4.99 22 6.7 22h10.6c1.69 0 3.29-1.36 3.58-3.03l1.26-7.54c.18-1.17-.39-2.67-1.31-3.42ZM12.75 18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3Z'
      fill='currentColor'
    />
  </svg>
)

export const UsersIconOutline = (props) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g stroke='currentColor' strokeWidth={1.5}>
      <circle cx={9} cy={6} r={4} />
      <path d='M15 9a3 3 0 1 0 0-6' strokeLinecap='round' />
      <ellipse cx={9} cy={17} rx={7} ry={4} />
      <path
        d='M18 14c1.754.385 3 1.359 3 2.5 0 1.03-1.014 1.923-2.5 2.37'
        strokeLinecap='round'
      />
    </g>
  </svg>
)

export const UsersIconFill = (props) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g fill='currentColor'>
      <circle cx={9.001} cy={6} r={4} />
      <ellipse cx={9.001} cy={17.001} rx={7} ry={4} />
      <path d='M21 17c0 1.657-2.036 3-4.521 3 .732-.8 1.236-1.805 1.236-2.998 0-1.195-.505-2.2-1.239-3.001C18.962 14 21 15.344 21 17ZM18 6a3 3 0 0 1-4.029 2.82A5.688 5.688 0 0 0 14.714 6c0-1.025-.27-1.987-.742-2.819A3 3 0 0 1 18 6.001Z' />
    </g>
  </svg>
)

export const AdminIcon = (props) => (
  <svg
    width={64}
    height={64}
    viewBox='0 0 192 192'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M276.941 440.584v565.722c0 422.4 374.174 625.468 674.71 788.668l8.02 4.292 8.131-4.292c300.537-163.2 674.71-366.268 674.71-788.668V440.584l-682.84-321.657L276.94 440.584Zm682.73 1479.529c-9.262 0-18.523-2.372-26.993-6.89l-34.9-18.974C588.095 1726.08 164 1495.906 164 1006.306V404.78c0-21.91 12.65-41.788 32.414-51.162L935.727 5.42c15.134-7.228 32.866-7.228 48 0l739.313 348.2c19.765 9.374 32.414 29.252 32.414 51.162v601.525c0 489.6-424.207 719.774-733.779 887.943l-34.899 18.975c-8.47 4.517-17.731 6.889-27.105 6.889Zm467.158-547.652h-313.412l-91.595-91.482v-83.803H905.041v-116.78h-83.69l-58.503-58.504c-1.92.113-3.84.113-5.76.113-176.075 0-319.285-143.21-319.285-319.285 0-176.075 143.21-319.398 319.285-319.398 176.075 0 319.285 143.323 319.285 319.398 0 1.92 0 3.84-.113 5.647l350.57 350.682v313.412Zm-266.654-112.941h153.713v-153.713L958.462 750.155l3.953-37.27c1.017-123.897-91.595-216.621-205.327-216.621S550.744 588.988 550.744 702.72c0 113.845 92.612 206.344 206.344 206.344l47.21-5.309 63.811 63.7h149.873v116.78h116.781v149.986l25.412 25.299Zm-313.4-553.57c0 46.758-37.949 84.706-84.706 84.706-46.758 0-84.706-37.948-84.706-84.706s37.948-84.706 84.706-84.706c46.757 0 84.706 37.948 84.706 84.706'
      fillRule='evenodd'
    />
  </svg>
)

export const VolumeIcon = (props) => (
  <svg
    width={64}
    height={64}
    fill='currentColor'
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M30.156 26.492 23.945 3.308a2.76 2.76 0 0 0-3.386-1.94l.019-.004-2.897.776a2.714 2.714 0 0 0-.86.42l.008-.005a2.747 2.747 0 0 0-2.33-1.306h-2.998c-.789.001-1.5.337-1.998.873l-.002.002a2.73 2.73 0 0 0-2-.874h-3A2.754 2.754 0 0 0 1.751 4v24a2.754 2.754 0 0 0 2.75 2.75h3a2.729 2.729 0 0 0 1.998-.873l.002-.002a2.73 2.73 0 0 0 2 .875h2.998a2.754 2.754 0 0 0 2.75-2.75V11.152l4.699 17.54a2.761 2.761 0 0 0 2.656 2.037h.005c.251 0 .494-.034.725-.098l-.019.005 2.898-.775a2.757 2.757 0 0 0 1.938-3.386l.005.019zM18.415 9.708l5.31-1.423 3.753 14.007-5.311 1.422zm-.347-6.118 2.896-.776a1.25 1.25 0 0 1 1.529.875l.002.009.841 3.139-5.311 1.423-.778-2.905V4.3c.153-.347.449-.607.812-.708l.009-.002zM11.5 2.75h2.998c.69.001 1.249.56 1.25 1.25v3.249l-5.498.001V4c.001-.69.56-1.249 1.25-1.25zm-2.75 20.5h-5.5V8.75l5.5-.001zm1.5-14.5 5.498-.001V23.25H10.25zm-5.75-6h3c.69.001 1.249.56 1.25 1.25v3.249l-5.5.001V4c.001-.69.56-1.249 1.25-1.25zm3 26.5h-3A1.252 1.252 0 0 1 3.25 28v-3.25h5.5V28a1.252 1.252 0 0 1-1.25 1.25zm6.998 0H11.5A1.252 1.252 0 0 1 10.25 28v-3.25h5.498V28a1.252 1.252 0 0 1-1.25 1.25zm14.082-1.424c-.164.285-.43.495-.747.582l-.009.002-2.898.775a1.255 1.255 0 0 1-1.527-.874l-.002-.009-.841-3.14 5.311-1.422.841 3.14a1.225 1.225 0 0 1-.131.951l.003-.006z' />
  </svg>
)

export const IssuesIcon = (props) => (
  <svg
    height={64}
    width={64}
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 56 56'
    xmlSpace='preserve'
    {...props}
  >
    <path d='M45.713 3H10.287L0 32.833v16.541C0 51.374 1.626 53 3.625 53h48.749c2 0 3.626-1.626 3.626-3.625V32.83L45.713 3zm-34 2h32.574l9.311 27H40.486A2.486 2.486 0 0 0 38 34.486v4.028a.487.487 0 0 1-.486.486H18.486a.487.487 0 0 1-.486-.486v-4.028A2.486 2.486 0 0 0 15.514 32H2.403l9.31-27zM54 49.375c0 .896-.729 1.625-1.625 1.625H3.625A1.627 1.627 0 0 1 2 49.375V34h13.514c.268 0 .486.218.486.486v4.028A2.486 2.486 0 0 0 18.486 41h19.027A2.487 2.487 0 0 0 40 38.514v-4.028c0-.268.218-.486.486-.486H54v15.375z' />
    <path d='M46 30h2v-6H8v6h2v-4h36zM13 18h30v4h2v-6H11v6h2zM16 10h24v4h2V8H14v6h2z' />
  </svg>
)

export const ArticlesIcon = (props) => (
  <svg
    width={64}
    height={64}
    viewBox='-5.5 0 61.432 61.432'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g data-name='Group 56'>
      <path
        data-name='Path 42'
        d='M49.191 11.903h-5.417v-5a1.25 1.25 0 0 0-1.25-1.25h-4.746v-4.4a1.25 1.25 0 0 0-1.25-1.25H1.252a1.249 1.249 0 0 0-1.25 1.25v47.028a1.25 1.25 0 0 0 1.25 1.25h4.747v4.4a1.25 1.25 0 0 0 1.25 1.25h5.416v5a1.25 1.25 0 0 0 1.25 1.25h35.278a1.25 1.25 0 0 0 1.25-1.25V13.153a1.25 1.25 0 0 0-1.252-1.25ZM2.5 47.028V2.5h32.778v3.15H7.252a1.25 1.25 0 0 0-1.25 1.25v40.128Zm6 5.651V8.15h32.777v3.753H13.913a1.25 1.25 0 0 0-1.25 1.25v39.526Zm39.444 6.253H15.163V14.403h32.778Z'
      />
      <path
        data-name='Path 43'
        d='M19.045 42.493a1.25 1.25 0 0 0 0 2.5h25.014a1.25 1.25 0 0 0 0-2.5Z'
      />
      <path
        data-name='Path 44'
        d='M44.059 47.303H19.045a1.25 1.25 0 0 0 0 2.5h25.014a1.25 1.25 0 0 0 0-2.5Z'
      />
      <path
        data-name='Path 45'
        d='M44.059 52.115H19.045a1.25 1.25 0 0 0 0 2.5h25.014a1.25 1.25 0 0 0 0-2.5Z'
      />
      <path data-name='Rectangle 34' d='M19.045 17.834H44.06V38.81H19.045z' />
    </g>
  </svg>
)

export const LinkIcon = (props) => (
  <svg
    width='64px'
    height='64px'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    fill='#000000'
    {...props}
  >
    <g id='SVGRepo_bgCarrier' strokeWidth={0} />
    <g
      id='SVGRepo_tracerCarrier'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <g id='SVGRepo_iconCarrier'>
      <g>
        <path fill='none' d='M0 0h24v24H0z' />
        <path d='M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z' />
      </g>
    </g>
  </svg>
)

export const TimePastIcon = (props) => (
  <svg
    width={64}
    height={64}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1Zm11.812 4.132A12 12 0 0 0 3.578 3.415V1a1 1 0 0 0-2 0v4a2 2 0 0 0 2 2h4a1 1 0 0 0 0-2H4.827a9.99 9.99 0 1 1-2.835 7.878A.982.982 0 0 0 1 12a1.007 1.007 0 0 0-1 1.1 12 12 0 1 0 23.808-2.969Z' />
  </svg>
)

export const ArrowRight = (props) => (
  <svg
    width={64}
    height={64}
    viewBox='0 -2 32 32'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M28 0H8a4 4 0 0 0-4 4v4h2V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4H4v4a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4ZM17.343 20.243a1 1 0 0 0 1.415 1.414l6.899-6.899A.992.992 0 0 0 25.94 14a.988.988 0 0 0-.283-.757l-6.899-6.899a1 1 0 1 0-1.415 1.414L22.586 13H1a1 1 0 1 0 0 2h21.586l-5.243 5.243Z'
      fill='#000'
      fillRule='evenodd'
    />
  </svg>
)

export const AddToIssueIcon = (props) => (
  <svg
    height={64}
    width={64}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 60 60'
    xmlSpace='preserve'
    {...props}
  >
    <path d='M46 34c-7.168 0-13 5.832-13 13s5.832 13 13 13 13-5.832 13-13-5.832-13-13-13zm0 24c-6.065 0-11-4.935-11-11s4.935-11 11-11 11 4.935 11 11-4.935 11-11 11z' />
    <path d='M52 46h-5v-5a1 1 0 1 0-2 0v5h-5a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2zM55 2.832A2.836 2.836 0 0 0 52.168 0H3.833A2.836 2.836 0 0 0 1 2.832V29h54V2.832zM37 14.495A3.508 3.508 0 0 1 33.496 18H22.505A3.509 3.509 0 0 1 19 14.495V13a1 1 0 1 1 2 0v1.495c0 .83.675 1.505 1.505 1.505h10.991c.829 0 1.504-.675 1.504-1.505V13a1 1 0 1 1 2 0v1.495z' />
    <path d='M30 47h-7.495A3.509 3.509 0 0 1 19 43.495V42a1 1 0 1 1 2 0v1.495c0 .83.675 1.505 1.505 1.505h7.634c.989-7.88 7.717-14 15.861-14H1v26.168A2.836 2.836 0 0 0 3.833 60h32.876C32.655 57.094 30 52.356 30 47z' />
  </svg>
)

export const AddUserIcon = (props) => (
  <svg
    width='64px'
    height='64px'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g id='SVGRepo_bgCarrier' strokeWidth={0} />
    <g
      id='SVGRepo_tracerCarrier'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <g id='SVGRepo_iconCarrier'>
      <g id='Iconly/Curved/Add User'>
        <g id='Add User'>
          <path
            id='Stroke 1'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M9.92234 21.8083C6.10834 21.8083 2.85034 21.2313 2.85034 18.9213C2.85034 16.6113 6.08734 14.5103 9.92234 14.5103C13.7363 14.5103 16.9943 16.5913 16.9943 18.9003C16.9943 21.2093 13.7573 21.8083 9.92234 21.8083Z'
            stroke='currentColor'
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 3'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M9.92231 11.2159C12.4253 11.2159 14.4553 9.1859 14.4553 6.6829C14.4553 4.1789 12.4253 2.1499 9.92231 2.1499C7.41931 2.1499 5.38931 4.1789 5.38931 6.6829C5.38031 9.1769 7.39631 11.2069 9.89031 11.2159H9.92231Z'
            stroke='currentColor'
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 5'
            d='M19.1313 8.12891V12.1389'
            stroke='currentColor'
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 7'
            d='M21.1776 10.1338H17.0876'
            stroke='currentColor'
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>
    </g>
  </svg>
)

export const GlobeIcon = (props) => (
  <svg
    width={64}
    height={64}
    xmlns='http://www.w3.org/2000/svg'
    strokeWidth={3}
    stroke='#000'
    fill='none'
    {...props}
  >
    <circle cx={32} cy={32} r={24.86} />
    <path d='M32 6.84a34.09 34.09 0 0 1 11.66 25.47c0 16.19-7.28 21-11.66 24.24M32 6.84a34.09 34.09 0 0 0-11.69 25.47c0 16.19 7.28 21 11.66 24.24M10.37 19.75h43.38M32 6.84v49.71M11.05 45.33h41.93M7.14 32.31l49.72-.62' />
  </svg>
)

export const HomePageIcon = (props) => (
  <svg
    height={64}
    width={64}
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 254.182 254.182'
    xmlSpace='preserve'
    {...props}
  >
    <path d='M211.655 137.102a7.5 7.5 0 0 0-7.5 7.5v77.064h-41.373v-77.064a7.5 7.5 0 0 0-7.5-7.5H98.903a7.5 7.5 0 0 0-7.5 7.5v77.064H50.026v-77.064a7.5 7.5 0 0 0-7.5-7.5 7.5 7.5 0 0 0-7.5 7.5v84.564a7.5 7.5 0 0 0 7.5 7.5h169.129a7.5 7.5 0 0 0 7.5-7.5v-84.564a7.5 7.5 0 0 0-7.5-7.5zm-105.252 84.564v-69.564h41.379v69.564h-41.379z' />
    <path d='M251.985 139.298 132.389 19.712a7.501 7.501 0 0 0-10.607 0L2.197 139.298a7.5 7.5 0 0 0 10.607 10.606L127.086 35.622l114.293 114.283a7.477 7.477 0 0 0 5.303 2.196 7.5 7.5 0 0 0 5.303-12.803z' />
  </svg>
)

export const AddIssuesIcon = (props) => (
  <svg
    width={64}
    height={64}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g fill='currentColor'>
      <path d='M12 18.25a1 1 0 0 1-1-1V16H9.75a1 1 0 1 1 0-2H11v-1.25a1 1 0 1 1 2 0V14h1.25a1 1 0 1 1 0 2H13v1.25a1 1 0 0 1-1 1Z' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7 5V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1a2 2 0 0 1 2 2v1c0 .057-.002.113-.007.168A3.001 3.001 0 0 1 21 11v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8c0-1.309.838-2.422 2.007-2.832A2.027 2.027 0 0 1 5 8V7a2 2 0 0 1 2-2Zm2-1h6v1H9V4Zm8 3v1H7V7h10ZM6 10h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z'
      />
    </g>
  </svg>
)

export const EyeIcon = (props) => (
  <svg
    width={64}
    height={64}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g stroke='currentColor' strokeWidth={2}>
      <path d='M20.188 10.934a1.66 1.66 0 0 1 0 2.132C18.768 14.79 15.636 18 12 18c-3.636 0-6.768-3.21-8.188-4.934a1.66 1.66 0 0 1 0-2.132C5.232 9.21 8.364 6 12 6c3.636 0 6.768 3.21 8.188 4.934Z' />
      <path d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
    </g>
  </svg>
)

export const PublishIcon = (props) => (
  <svg
    width={64}
    height={64}
    viewBox='0 0 512 512'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='m213.333 85.333 85.334 85.334v256h-256V85.333h170.666ZM195.66 128H85.333v256H256V188.34L195.66 128ZM384 33.83l89.752 89.752-30.17 30.17-38.25-38.239.001 140.487c0 45.7-35.924 83.01-81.074 85.229l-4.259.104v-42.666c22.493 0 40.92-17.406 42.55-39.483l.117-3.184-.001-140.486-38.248 38.238-30.17-30.17L384 33.83Z'
      fill='currentColor'
      fillRule='evenodd'
    />
  </svg>
)

export const HourGlassIcon = (props) => (
  <svg
    width={64}
    height={64}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M4.75 2a.75.75 0 0 0 0 1.5h.75v2.982a4.75 4.75 0 0 0 2.215 4.017l2.044 1.29a.25.25 0 0 1 0 .422l-2.044 1.29A4.75 4.75 0 0 0 5.5 17.518V20.5h-.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5h-.75v-2.982a4.75 4.75 0 0 0-2.215-4.017l-2.044-1.29a.25.25 0 0 1 0-.422l2.044-1.29A4.75 4.75 0 0 0 18.5 6.482V3.5h.75a.75.75 0 0 0 0-1.5H4.75zM17 3.5H7v2.982A3.25 3.25 0 0 0 8.516 9.23l2.044 1.29a1.75 1.75 0 0 1 0 2.96l-2.044 1.29A3.25 3.25 0 0 0 7 17.518V20.5h10v-2.982a3.25 3.25 0 0 0-1.516-2.748l-2.044-1.29a1.75 1.75 0 0 1 0-2.96l2.044-1.29A3.25 3.25 0 0 0 17 6.482V3.5z'
      fill='CurrentColor'
    />
  </svg>
)

export const StackIcon = (props) => (
  <svg
    width={64}
    height={64}
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M8.984 9.047V6.031h19v13.953h-3.016l.062 3.031h-3.078v2.953H3.016V12h2.969V8.984l2.999.063zM26.953 7h-17v2.047l15.078-.062-.062 10.031h1.984V7zM24 10.016H6.953V12h15v9.984H24V10.016zM3.984 12.969V25h17V12.969h-17z'
      fill='CurrentColor'
    />
  </svg>
)

export const ApprovedIcon = (props) => (
  <svg
    width={64}
    height={64}
    viewBox='0 0 32 32'
    xmlSpace='preserve'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M30 1H2a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 28H3V3h26v26z'
      fill='currentColor'
    />
    <path
      d='M12.629 21.73a.997.997 0 0 0 1.366 0l10.688-10a1 1 0 0 0-1.366-1.46l-10.004 9.36-4.629-4.332a1 1 0 0 0-1.366 1.46l5.311 4.972z'
      fill='currentColor'
    />
  </svg>
)

export const IdeasIcon = (props) => (
  <svg
    width={64}
    height={64}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    stroke='currentColor'
    strokeWidth={0.96}
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M23 5v2a1 1 0 1 0 2 0V5a1 1 0 1 0-2 0Zm3.887 24.979h-5.764c-1.71 0-3.118 1.33-3.118 3v8.37c0 1.433 1.204 2.572 2.664 2.572h6.66c1.46 0 2.666-1.139 2.666-2.572l.007-5.81A13.007 13.007 0 0 0 37 24.002c0-7.178-5.822-13-13-13-7.18 0-13 5.821-13 13 0 3.156 1.129 6.138 3.146 8.48a1 1 0 1 0 1.516-1.304A10.952 10.952 0 0 1 13 24.002c0-6.074 4.925-11 11-11 6.074 0 11 4.926 11 11 0 3.844-1.979 7.251-4.995 9.22v-.24c0-1.673-1.408-3.003-3.118-3.003Zm1.116 4.274.002-1.272c0-.541-.488-1.002-1.118-1.002h-5.764c-.63 0-1.118.46-1.118 1v8.37c0 .303.285.572.664.572h6.66c.38 0 .666-.27.666-.574l.006-4.97c-.908.292-1.861.488-2.847.575a1 1 0 1 1-.176-1.992 10.949 10.949 0 0 0 3.025-.707ZM41 23h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM7 23H5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2Zm3-14.414L11.414 10A1 1 0 0 1 10 11.414L8.586 10A1 1 0 0 1 10 8.586Zm28 2.828L39.414 10A1 1 0 0 0 38 8.586L36.586 10A1 1 0 0 0 38 11.414Z'
      fill='currentColor'
    />
  </svg>
)

export const UsersIcon = (props) => (
  <svg
    width={64}
    height={64}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g stroke='currentColor' strokeWidth={2}>
      <path
        d='M15.631 7.155a2.5 2.5 0 1 1 0 4.69M3 19c.691-2.307 2.47-3 6.5-3 4.03 0 5.809.693 6.5 3M17 15c2.403.095 3.53.638 4 2'
        strokeLinecap='round'
      />
      <path d='M13 9.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z' />
    </g>
  </svg>
)

export const PasswordIcon = (props) => (
  <svg
    width={64}
    height={64}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g fill='currentColor'>
      <path d='M12.75 10a.75.75 0 0 0-1.5 0v.701l-.607-.35a.75.75 0 0 0-.75 1.298l.607.35-.607.351a.75.75 0 1 0 .75 1.3l.607-.351V14a.75.75 0 0 0 1.5 0v-.7l.607.35a.75.75 0 0 0 .75-1.3L13.5 12l.607-.35a.75.75 0 0 0-.75-1.3l-.607.35V10ZM6.733 9.25a.75.75 0 0 1 .75.75v.7l.606-.35a.75.75 0 0 1 .75 1.3l-.607.35.607.35a.75.75 0 1 1-.75 1.3l-.606-.35v.7a.75.75 0 0 1-1.5 0v-.701l-.608.35a.75.75 0 0 1-.75-1.298L5.232 12l-.607-.35a.75.75 0 1 1 .75-1.3l.608.351V10a.75.75 0 0 1 .75-.75ZM18.018 10a.75.75 0 0 0-1.5 0v.701l-.607-.35a.75.75 0 0 0-.75 1.298l.607.35-.608.351a.75.75 0 0 0 .75 1.3l.608-.351V14a.75.75 0 0 0 1.5 0v-.7l.607.35a.75.75 0 0 0 .75-1.3l-.607-.35.607-.35a.75.75 0 0 0-.75-1.3l-.607.35V10Z' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.944 3.25c-1.838 0-3.294 0-4.433.153-1.172.158-2.121.49-2.87 1.238-.748.749-1.08 1.698-1.238 2.87-.153 1.14-.153 2.595-.153 4.433v.112c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h4.112c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433v-.112c0-1.838 0-3.294-.153-4.433-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238-1.14-.153-2.595-.153-4.433-.153H9.944ZM3.702 5.702c.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.138 1.028.14 2.382.14 4.289 0 1.907-.002 3.261-.14 4.29-.135 1.005-.389 1.585-.812 2.008-.423.423-1.003.677-2.009.812-1.027.138-2.382.14-4.289.14h-4c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812-.423-.423-.677-1.003-.812-2.009-.138-1.028-.14-2.382-.14-4.289 0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008Z'
      />
    </g>
  </svg>
)

export const DownloadIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='size-6'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
    />
  </svg>
)

export const BackNavigationIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='size-6'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
    />
  </svg>
)

export const plusIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='size-6'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M12 4.5v15m7.5-7.5h-15'
    />
  </svg>
)

export const PDFIcon = (props) => (
  <svg
    width='24px'
    height='24px'
    viewBox='-0.32 0 3.2 3.2'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M2.054 2.088c-0.039 0.012 -0.096 0.013 -0.158 0.004a0.752 0.752 0 0 1 -0.199 -0.059c0.118 -0.017 0.209 -0.012 0.287 0.016 0.018 0.007 0.049 0.024 0.069 0.04m-0.657 -0.108 -0.014 0.004c-0.032 0.009 -0.063 0.017 -0.092 0.024l-0.04 0.01c-0.081 0.02 -0.163 0.041 -0.244 0.066 0.031 -0.075 0.06 -0.15 0.088 -0.224 0.021 -0.055 0.042 -0.11 0.064 -0.165q0.017 0.028 0.035 0.055a1.08 1.08 0 0 0 0.204 0.229m-0.205 -0.841c0.005 0.092 -0.015 0.181 -0.044 0.265 -0.036 -0.105 -0.053 -0.221 -0.008 -0.315 0.012 -0.024 0.021 -0.037 0.027 -0.044 0.009 0.015 0.022 0.047 0.024 0.093m-0.421 1.166q-0.03 0.054 -0.062 0.102c-0.051 0.077 -0.134 0.159 -0.177 0.159 -0.004 0 -0.009 -0.001 -0.017 -0.009 -0.005 -0.005 -0.006 -0.009 -0.005 -0.014 0.001 -0.028 0.039 -0.078 0.093 -0.125a0.912 0.912 0 0 1 0.168 -0.114m1.419 -0.213c-0.007 -0.094 -0.165 -0.154 -0.166 -0.155 -0.061 -0.022 -0.128 -0.032 -0.203 -0.032 -0.081 0 -0.168 0.012 -0.28 0.038a0.976 0.976 0 0 1 -0.25 -0.257c-0.028 -0.043 -0.054 -0.086 -0.076 -0.128 0.054 -0.13 0.103 -0.269 0.094 -0.426 -0.007 -0.125 -0.064 -0.209 -0.14 -0.209 -0.053 0 -0.098 0.039 -0.135 0.116 -0.066 0.137 -0.048 0.313 0.051 0.523a7.36 7.36 0 0 0 -0.102 0.257c-0.04 0.106 -0.082 0.214 -0.129 0.318 -0.131 0.052 -0.239 0.115 -0.329 0.192 -0.059 0.05 -0.13 0.128 -0.134 0.208 -0.002 0.038 0.011 0.073 0.037 0.101 0.028 0.03 0.063 0.045 0.102 0.045 0.128 0 0.252 -0.176 0.275 -0.212 0.047 -0.071 0.091 -0.15 0.134 -0.242 0.109 -0.039 0.225 -0.069 0.337 -0.097l0.04 -0.01a5.44 5.44 0 0 0 0.094 -0.025c0.034 -0.009 0.069 -0.019 0.105 -0.028 0.115 0.073 0.24 0.121 0.361 0.139 0.102 0.015 0.192 0.006 0.254 -0.026 0.055 -0.029 0.058 -0.073 0.057 -0.091m0.248 0.808c0 0.172 -0.152 0.183 -0.182 0.183H0.3c-0.171 0 -0.182 -0.153 -0.182 -0.183V0.3c0 -0.172 0.152 -0.183 0.182 -0.183h1.321l0.001 0.001v0.516c0 0.104 0.063 0.299 0.3 0.299h0.512l0.004 0.004zm-0.122 -2.084h-0.395c-0.171 0 -0.182 -0.152 -0.182 -0.182v-0.398zm0.239 2.084V0.889L1.739 0.07V0.066h-0.004L1.67 0H0.3C0.196 0 0 0.063 0 0.301v2.599C0 3.003 0.063 3.2 0.3 3.2H2.256c0.104 0 0.3 -0.063 0.3 -0.301'
      fill='currentColor'
    />
  </svg>
)
