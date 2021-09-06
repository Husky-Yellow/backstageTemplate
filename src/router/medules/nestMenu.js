export default [{
  path: '/nestMenu',
  name: 'NestMenu',
  component: () => import('@/views/nestMenu/index.vue'),
  meta: {
    title: 'nestMenu',
    icon: '',
    auth: ['admin', 'normal'],
    // noHidden: true,
    noBreadcrumbLink: true, //面包屑导航，显示为普通文本
  },
  children: [
    {
      path: '/nestMenu/page1',
      name: 'Page1',
      component: () => import('@/views/nestMenu/page1/index.vue'),
      meta: {
        title: 'page1',
        icon: '',
        auth: ['admin', 'normal'],
        // noHidden: false,
      },
    },
    {
      path: '/page2',
      name: 'Page2',
      component: () => import('@/views/nestMenu/page2/index.vue'),
      meta: {
        title: 'page2',
        icon: '',
        auth: ['admin', 'normal'],
        // noHidden: false,
        noBreadcrumbLink: true,
      },
      children: [
        {
          path: '/page2-1',
          name: 'Page2-1',
          component: () => import('@/views/nestMenu/page2/page2-1.vue'),
          meta: {
            title: 'page2_1',
            icon: '',
            auth: ['admin', 'normal'],
            // noHidden: false,
          },
        },
        {
          path: '/page2-2',
          name: 'Page2-2',
          component: () => import('@/views/nestMenu/page2/page2-2.vue'),
          meta: {
            title: 'page2_2',
            icon: '',
            auth: ['admin', 'normal'],
            // noHidden: false,
          },
        },
      ],
    },
    {
      path: '/page3',
      name: 'Page3',
      component: () => import('@/views/nestMenu/page3/index.vue'),
      meta: {
        title: 'page3',
        icon: '',
        auth: ['admin', 'normal'],
        // noHidden: false,
      },
      children: [
        {
          path: '/page3-1',
          name: 'Page3-1',
          component: () => import('@/views/nestMenu/page3/page3-1.vue'),
          meta: {
            title: 'page3_1',
            icon: '',
            auth: ['admin', 'normal'],
            // noHidden: false,
            noBreadcrumbLink: true,
          },
        },
        {
          path: '/page3-2',
          name: 'Page3-2',
          component: () => import('@/views/nestMenu/page3/page3-2/index.vue'),
          meta: {
            title: 'page3_2',
            icon: '',
            auth: ['admin', 'normal'],
            // noHidden: false,
          },
          children: [
            {
              path: '/page3-2-1',
              name: 'Page3-2-1',
              component: () =>
                import('@/views/nestMenu/page3/page3-2/page3-2-1.vue'),
              meta: {
                title: 'page3_2_1',
                icon: '',
                auth: ['admin', 'normal'],
                // noHidden: false,
                noBreadcrumbLink: true,
              },
            },
          ],
        },
      ],
    },
  ],
}]