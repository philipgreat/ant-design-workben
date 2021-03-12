// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/y',
      component: '../layouts/index',
      routes: [
        {
          path: '/',
          component: '../pages/index',
        },
        {
          path: '/list',
          component: '../pages/index',
        },
      ],
    },
    {
      path: '/supplyList',
      component: '../layouts/index',
      routes: [
        {
          path: '/supplyList/',
          component: '../pages/index',
        },
        {
          path: '/supplyList/list',
          component: '../pages/index',
        },
      ],
    },
    {
      path: '/richedit',
      component: './richedit',
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: {
          webpackChunkName: true,
        },
        title: 'ant-design-workben',
        dll: true,
        locale: {
          enable: true,
          default: 'en-US',
        },
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
