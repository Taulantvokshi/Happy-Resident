import React from 'react'

export const Calendar = ({color, size}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size || '20'}
      height={size || '20'}
      fill={color || 'black'}
      viewBox="0 0 20 20"
    >
      <title>calendar</title>
      <path d="M1 4c0-1.1 0.9-2 2-2h14c1.105 0 2 0.895 2 2v0 14c0 1.105-0.895 2-2 2v0h-14c-1.105 0-2-0.895-2-2v0-14zM3 6v12h14v-12h-14zM5 0h2v2h-2v-2zM13 0h2v2h-2v-2zM5 9h2v2h-2v-2zM5 13h2v2h-2v-2zM9 9h2v2h-2v-2zM9 13h2v2h-2v-2zM13 9h2v2h-2v-2zM13 13h2v2h-2v-2z" />
    </svg>
  )
}

export const Folder = ({color, size}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size || '20'}
      height={size || '20'}
      fill={color || 'black'}
      viewBox="0 0 20 20"
    >
      <title>folder</title>
      <path d="M0 4c0-1.1 0.9-2 2-2h7l2 2h7c1.105 0 2 0.895 2 2v0 10c0 1.105-0.895 2-2 2v0h-16c-1.105 0-2-0.895-2-2v0-12z" />
    </svg>
  )
}

export const Home = ({color, size}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size || '20'}
      height={size || '20'}
      fill={color || 'black'}
      viewBox="0 0 20 20"
    >
      <title>home</title>
      <path d="M8 20h-5v-10h-3l10-10 10 10h-3v10h-5v-6h-4v6z" />
    </svg>
  )
}

export const Card = ({color, size}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size || '20'}
      height={size || '20'}
      fill={color || 'black'}
      viewBox="0 0 32 32"
    >
      <title>Pay the rent</title>
      <path d="M29 4h-26c-1.65 0-3 1.35-3 3v18c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-18c0-1.65-1.35-3-3-3zM3 6h26c0.542 0 1 0.458 1 1v3h-28v-3c0-0.542 0.458-1 1-1zM29 26h-26c-0.542 0-1-0.458-1-1v-9h28v9c0 0.542-0.458 1-1 1zM4 20h2v4h-2zM8 20h2v4h-2zM12 20h2v4h-2z" />
    </svg>
  )
}

export const Wrench = ({color, size}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size || '20'}
      height={size || '20'}
      fill={color || 'black'}
      viewBox="0 0 20 20"
    >
      <title>Raport a damage</title>
      <path d="M6.47 9.8c-0.485 0.172-1.043 0.272-1.625 0.272-2.761 0-5-2.239-5-5 0-0.667 0.131-1.303 0.368-1.885l-0.012 0.033 3.95 3.95 2.82-2.83-3.94-3.93c0.542-0.219 1.171-0.347 1.829-0.347 2.761 0 5 2.239 5 5 0 0.734-0.158 1.43-0.442 2.058l0.013-0.031 10 10-2.83 2.83-10.13-10.12z" />
    </svg>
  )
}

export const User = ({color, size}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size || '20'}
      height={size || '20'}
      fill={color || 'black'}
      viewBox="0 0 32 32"
    >
      <title>user</title>
      <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z" />
    </svg>
  )
}

export const Menu = ({color, size}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size || '20'}
      height={size || '20'}
      fill={color || 'black'}
      viewBox="0 0 20 20"
    >
      <title>cheveron-down</title>
      <path d="M9.293 12.95l0.707 0.707 5.657-5.657-1.414-1.414-4.243 4.242-4.243-4.242-1.414 1.414z" />
    </svg>
  )
}

export const Search = ({color, size}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size || '20'}
      height={size || '20'}
      fill={color || 'black'}
      viewBox="0 0 32 32"
    >
      <title>search</title>
      <path d="M19.427 20.427c-1.39 0.99-3.090 1.573-4.927 1.573-4.694 0-8.5-3.806-8.5-8.5s3.806-8.5 8.5-8.5c4.694 0 8.5 3.806 8.5 8.5 0 1.837-0.583 3.537-1.573 4.927l5.585 5.585c0.55 0.55 0.546 1.431-0 1.976l-0.023 0.023c-0.544 0.544-1.431 0.546-1.976 0l-5.585-5.585zM14.5 20c3.59 0 6.5-2.91 6.5-6.5s-2.91-6.5-6.5-6.5c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5v0z" />
    </svg>
  )
}

export const Test = () => {
  return (
    <svg
      width="70"
      height="70"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1920"
    >
      <path
        className="st0"
        d="M1404.3 359.9v554.9h-234.5V405.7z"
        id="Layer_4"
      />
      <path
        className="st0"
        d="M1495.6 216.9V1703l-414-182.2V311.5l113.7-26 300.3-68.6zm-91.3 697.9V359.9l-234.5 45.8v509.1h234.5z"
        id="Layer_5"
      />
      <path
        className="st0"
        d="M1195.1 284.9l.1.6-113.7 26h-549v1209.4h-108v-1304h770.6z"
        id="Layer_6"
      />
      <g id="STROKES">
        <g id="XMLID_1_">
          <path
            className="st1"
            d="M1081.5 311.5l113.7-26 300.4-68.6v1486.2l-414.1-182.2"
          />
          <path
            className="st1"
            d="M1081.5 1520.9V311.5h-549v1209.4h-108v-1304h770.6v68"
          />
          <path className="st1" d="M1404.3 914.8h-234.5V405.7l234.5-45.8z" />
          <path
            className="st1"
            d="M1387.1 1235.2c-35.6 0-64.5-42-64.5-93.8s28.9-93.8 64.5-93.8"
          />
        </g>
      </g>
    </svg>
  )
}

export const AddIcon = ({color, size}) => {
  return (
    <svg
      width={size || '20'}
      height={size || '20'}
      fill={color || 'black'}
      viewBox="0 0 448 448"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" />
    </svg>
  )
}

export const RemoveIcon = ({color, size}) => {
  return (
    <svg
      width={size || '20'}
      height={size || '20'}
      fill={color || 'black'}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 95.939 95.939"
      style={{enableBackground: 'new 0 0 95.939 95.939'}}
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M62.819,47.97l32.533-32.534c0.781-0.781,0.781-2.047,0-2.828L83.333,0.586C82.958,0.211,82.448,0,81.919,0
     c-0.53,0-1.039,0.211-1.414,0.586L47.97,33.121L15.435,0.586c-0.75-0.75-2.078-0.75-2.828,0L0.587,12.608
     c-0.781,0.781-0.781,2.047,0,2.828L33.121,47.97L0.587,80.504c-0.781,0.781-0.781,2.047,0,2.828l12.02,12.021
     c0.375,0.375,0.884,0.586,1.414,0.586c0.53,0,1.039-0.211,1.414-0.586L47.97,62.818l32.535,32.535
     c0.375,0.375,0.884,0.586,1.414,0.586c0.529,0,1.039-0.211,1.414-0.586l12.02-12.021c0.781-0.781,0.781-2.048,0-2.828L62.819,47.97
     z"
        />
      </g>
    </svg>
  )
}

export const UpIcon = ({color, size}) => {
  return (
    <svg
      width={size || '20'}
      height={size || '20'}
      fill={color || 'black'}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 284.929 284.929"
      style={{enableBackground: 'new 0 0 284.929 284.929'}}
      xmlSpace="preserve"
    >
      <title>More</title>
      <g>
        <path
          d="M282.082,195.285L149.028,62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,195.285
     C0.95,197.191,0,199.378,0,201.853c0,2.474,0.953,4.664,2.856,6.566l14.272,14.271c1.903,1.903,4.093,2.854,6.567,2.854
     c2.474,0,4.664-0.951,6.567-2.854l112.204-112.202l112.208,112.209c1.902,1.903,4.093,2.848,6.563,2.848
     c2.478,0,4.668-0.951,6.57-2.848l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.566
     C284.929,199.378,283.984,197.188,282.082,195.285z"
        />
      </g>
    </svg>
  )
}

export const DownIcon = ({color, size}) => {
  return (
    <svg
      width={size || '20'}
      height={size || '20'}
      fill={color || 'black'}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsxlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 284.929 284.929"
      style={{enableBackground: 'new 0 0 284.929 284.929'}}
      xmlspace="preserve"
    >
      <title>Less</title>
      <g>
        <path
          d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
		L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
		c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
		c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"
        />
      </g>
    </svg>
  )
}
