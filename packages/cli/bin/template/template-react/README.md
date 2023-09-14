### babel

babel-loader：使用 Babel 和 webpack 来转译 JavaScript 文件。
@babel/core：babel 的核心模块
@babel/preset-env：转译 ES2015+的语法
@babel/preset-react：转译 react 的 JSX
@babel/plugin-proposal-class-properties：用来编译类(class)
@babel/plugin-transform-runtime：防止污染全局，代码复用和减少打包体积

### react

1. import 时省略文件后缀

```js
resolve: {
  extensions: ['.ts', '.tsx' ,'.js', '.json', '.less'],
},
```

### css

1. 模块化

```js
{
  test: /\.less$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: {
          localIdentName: '[path][name]__[local]--[hash:base64:5]',
        },
      },
    },
    'less-loader'
  ]
}
```
1. ts

```js
// typings.d.ts
declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}

// tsconfig.json
"include": [
  "./src/**/*",
  "typings.d.ts"
]
```
1. 集成tailwindcss步骤
  1. 安装tailwindcss, postcss-loader postcss, postcss-preset-env
  2. 配置postcss.config.js
    ```js
    const tailwindcss = require('tailwindcss');
    module.exports = {
      plugins: [
        'postcss-preset-env',
        tailwindcss
      ],
    };
    ```
  3. 配置 tailwindcss.config.js
    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```
  4. 配置webpack
    ```js
    {
      module: {
        rules: [
          {
            test: /\.module\.less$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[path][name]__[local]--[hash:base64:5]',
                  },
                },
              },
              'postcss-loader',
              'less-loader',
            ]
          },
          {
            test: /^((?!\.module).)*\.less$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
          },
        ]
      }
    }
    ```
