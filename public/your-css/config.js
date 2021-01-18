const defaultConfig = {
    '--base-font-size': '16px',

    '--small-spacing': '0.25rem',
    '--default-spacing': '0.5rem',
    '--large-spacing': '0.6rem',

    '--default-line-height': 1.8,
    '--block-line-height': 2.4,

    '--small-border-radius': '0.125rem',
    '--default-border-radius': '0.125rem',
    '--large-border-radius': '0.5rem',
    '--rounded-border-radius': '50vmin',

    '--thin-thickness': '0.0625rem',
    '--default-thickness': '0.125rem',
    '--bold-thickness': '0.25rem',

    '--thin-font-weight': 300,
    '--normal-font-weight': 400,
    '--semibold-font-weight': 500,
    '--bold-font-weight': 600,
    '--heavy-font-weight': 700,

    '--fast-transition-duration': '0.15s',
    '--normal-transition-duration': '0.2s',
    '--slow-transition-duration': '0.4s',

    '--default-transition-function': 'ease-in-out',
    '--default-transition-duration': 'var(--normal-transition-duration)',

    '--fast-animation-duration': '0.4s',
    '--normal-animation-duration': '0.7s',
    '--slow-animation-duration': '1s'
}

const baseTheme = {
    // Primary color

    '--primary-color': 'rgb(var(--base-color))',
    '--primary-color-1': 'rgb(var(--base-color-1))',
    '--primary-color-2': 'rgb(var(--base-color-2))',

    '--primary-transparent': 'rgba(var(--base-color), 0.75)',
    '--primary-transparent-1': 'rgba(var(--base-color), 0.5)',
    '--primary-transparent-2': 'rgba(var(--base-color), 0.25)',

    '--text-color-on-solid': 'white',
}

const lightTheme = {
    // Base color

    '--base-color': 'var(--blue-500)',
    '--base-color-1': 'var(--blue-600)',
    '--base-color-2': 'var(--blue-700)',

    // Text color

    '--text-color': 'rgb(var(--gray-900))',
    '--text-color-1': 'rgb(var(--gray-800))',
    '--text-color-2': 'rgb(var(--gray-700))',

    '--text-gray': 'rgb(var(--gray-400))',
    '--text-gray-1': 'rgb(var(--gray-500))',
    '--text-gray-2': 'rgb(var(--gray-600))',

    '--text-reverse': 'rgb(var(--gray-100))',
    '--text-reverse-1': 'rgb(var(--gray-200))',
    '--text-reverse-2': 'rgb(var(--gray-300))',

    // Background color

    '--background-color': 'rgb(var(--gray-100))',
    '--background-color-1': 'rgb(var(--gray-200))',
    '--background-color-2': 'rgb(var(--gray-300))',

    '--background-gray': 'rgb(var(--gray-600))',
    '--background-gray-1': 'rgb(var(--gray-500))',
    '--background-gray-2': 'rgb(var(--gray-400))',

    '--background-reverse': 'rgb(var(--gray-900))',
    '--background-reverse-1': 'rgb(var(--gray-800))',
    '--background-reverse-2': 'rgb(var(--gray-700))'
}

const darkTheme = {
    // Base color

    '--base-color': 'var(--blue-500)',
    '--base-color-1': 'var(--blue-400)',
    '--base-color-2': 'var(--blue-300)',

    // Text color

    '--text-color': 'rgb(var(--gray-100))',
    '--text-color-1': 'rgb(var(--gray-200))',
    '--text-color-2': 'rgb(var(--gray-300))',

    '--text-gray': 'rgb(var(--gray-600))',
    '--text-gray-1': 'rgb(var(--gray-500))',
    '--text-gray-2': 'rgb(var(--gray-400))',

    '--text-reverse': 'rgb(var(--gray-900))',
    '--text-reverse-1': 'rgb(var(--gray-800))',
    '--text-reverse-2': 'rgb(var(--gray-700))',

    // Background color

    '--background-color': 'rgb(var(--gray-900))',
    '--background-color-1': 'rgb(var(--gray-800))',
    '--background-color-2': 'rgb(var(--gray-700))',

    '--background-gray': 'rgb(var(--gray-400))',
    '--background-gray-1': 'rgb(var(--gray-500))',
    '--background-gray-2': 'rgb(var(--gray-600))',

    '--background-reverse': 'rgb(var(--gray-100))',
    '--background-reverse-1': 'rgb(var(--gray-200))',
    '--background-reverse-2': 'rgb(var(--gray-300))'
}

function changeCSSVariable(name, value) {
    document.documentElement.style.setProperty(name, value);
}

function loadConfig(config) {
    for (const prop in config)
        changeCSSVariable(prop, config[prop]);
}

function modifyConfig(config, modConfig) {
    for (const prop in modConfig)
        config[prop] = modConfig[prop];
}
