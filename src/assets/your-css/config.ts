const defaultConfig: Record<string, string | number> = {
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
};

const baseTheme: Record<string, string | number> = {
    '--primary-color-0': 'rgb(var(--base-color-0))',
    '--primary-color-1': 'rgb(var(--base-color-1))',
    '--primary-color-2': 'rgb(var(--base-color-2))',

    '--primary-transparent-0': 'rgba(var(--base-color-0), 0.75)',
    '--primary-transparent-1': 'rgba(var(--base-color-0), 0.5)',
    '--primary-transparent-2': 'rgba(var(--base-color-0), 0.25)',

    '--text-color-on-solid': 'white',
};

const lightTheme: Record<string, string | number> = {
    '--base-color-0': 'var(--blue-500)',
    '--base-color-1': 'var(--blue-600)',
    '--base-color-2': 'var(--blue-700)',

    '--text-color-0': 'rgb(var(--black))',
    '--text-color-1': 'rgb(var(--gray-900))',
    '--text-color-2': 'rgb(var(--gray-800))',
    '--text-gray-0': 'rgb(var(--gray-400))',
    '--text-gray-1': 'rgb(var(--gray-500))',
    '--text-gray-2': 'rgb(var(--gray-600))',
    '--text-reverse-0': 'rgb(var(--white))',
    '--text-reverse-1': 'rgb(var(--gray-100))',
    '--text-reverse-2': 'rgb(var(--gray-200))',

    '--background-color-0': 'rgb(var(--white))',
    '--background-color-1': 'rgb(var(--gray-100))',
    '--background-color-2': 'rgb(var(--gray-200))',
    '--background-gray-0': 'rgb(var(--gray-500))',
    '--background-gray-1': 'rgb(var(--gray-400))',
    '--background-gray-2': 'rgb(var(--gray-300))',
    '--background-reverse-0': 'rgb(var(--black))',
    '--background-reverse-1': 'rgb(var(--gray-900))',
    '--background-reverse-2': 'rgb(var(--gray-800))'
};

const darkTheme: Record<string, string | number> = {
    '--base-color-0': 'var(--blue-500)',
    '--base-color-1': 'var(--blue-400)',
    '--base-color-2': 'var(--blue-300)',

    '--text-color-0': 'rgb(var(--white))',
    '--text-color-1': 'rgb(var(--gray-100))',
    '--text-color-2': 'rgb(var(--gray-200))',
    '--text-gray-0': 'rgb(var(--gray-600))',
    '--text-gray-1': 'rgb(var(--gray-500))',
    '--text-gray-2': 'rgb(var(--gray-400))',
    '--text-reverse-0': 'rgb(var(--black))',
    '--text-reverse-1': 'rgb(var(--gray-900))',
    '--text-reverse-2': 'rgb(var(--gray-800))',

    '--background-color-0': 'rgb(var(--black))',
    '--background-color-1': 'rgb(var(--gray-900))',
    '--background-color-2': 'rgb(var(--gray-800))',
    '--background-gray-0': 'rgb(var(--gray-500))',
    '--background-gray-1': 'rgb(var(--gray-600))',
    '--background-gray-2': 'rgb(var(--gray-700))',
    '--background-reverse-0': 'rgb(var(--white))',
    '--background-reverse-1': 'rgb(var(--gray-100))',
    '--background-reverse-2': 'rgb(var(--gray-200))'
};

function changeCSSVariable(name: string, value: string | null) {
    document.documentElement.style.setProperty(name, value);
}

function loadConfig(config: Record<string, string | number>) {
    for (const prop in config)
        if (prop)
            changeCSSVariable(prop, config[prop].toString());
}

function modifyConfig(
        config: Record<string, string | number>,
        modConfig: Record<string, string | number>) {
    for (const prop in modConfig)
        config[prop] = modConfig[prop];
}

function setSystemThemeListener(reloadFunction: () => void) {
    window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', reloadFunction);
}

function isSystemThemeDark(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export {
    defaultConfig, baseTheme, lightTheme, darkTheme,
    changeCSSVariable, loadConfig, modifyConfig,
    setSystemThemeListener, isSystemThemeDark
};
