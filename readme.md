#### Add Package to workspace

```
yarn workspace @sky/balko add -D qrcode.react
```

#### Workflow for adding anoter internal package

````
yarn create react-app PACKAGENAME --template typescript
create components folder
remove uncessary files
configure index.tsx to import new component
configure package.json
"main": "./src/index/tsx"
lerna bootstrap
config craco to add path
packages.push(path.join(__dirname, '../PACKAGENAME'));

```


#### Generate new package file

```
yarn create react-app piccaso --template typescript
```

#### root settings

```
// .prettierrc

{
  "semi": true,
  "tabWidth": 4,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "none",
  "jsxBracketSameLine": true
}
```

#### ES Lint setup

```
yarn add -W -D eslint-config-prettier eslint-plugin-prettier prettier

```

#### linter startup

```
yarn eslint --init
yarn add -W -D eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest
```

#### .eslintrc.json

```
//
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
};


```

#### Tailwind Installer

```
install -D tailwindcss postcss autoprefixer
yarn tailwindcss init -p

```

remember to add the external library to the tailwind path of the consuming package directory

```
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', '../piccaso/src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {}
    },
    plugins: []
};

```


#### Netlify Monorepo Deploy

```
In

```
````
