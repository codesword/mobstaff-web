const urls = [
  {
    title: 'Navigation',
    items: [
      {
        url: '/dashboards',
        icon: 'dashboard',
        title: 'Dashboard',
        badge: {
          className: 'badge badge-danger badge-sm badge-outline',
          title: 'New'
        },
        items: [],
      },
      {
        url: '/login',
        icon: 'bookmark_border',
        title: 'Login',
        items: [],
      },
    ],
  },
  {
    title: 'Components',
    items: [
      {
        url: '',
        icon: 'label',
        title: 'UI Elements',
        items: [
          {
            url: '/ui-elements/badges',
            icon: '',
            title: 'Badges',
            items: []
          },
          {
            url: '/ui-elements/breadcrumbs',
            icon: '',
            title: 'Breadcrumbs',
            items: []
          },
          {
            url: '/ui-elements/buttons',
            icon: '',
            title: 'Buttons',
            items: []
          },
          //          {
          //            url: '/ui-elements/cards',
          //            icon: '',
          //            title: 'Cards',
          //            items: []
          //          },
          //          {
          //            url: '/ui-elements/dropdowns',
          //            icon: '',
          //            title: 'Dropdowns',
          //            items: []
          //          },
          {
            url: '/ui-elements/images',
            icon: '',
            title: 'Images',
            items: []
          },
          {
            url: '/ui-elements/lists',
            icon: '',
            title: 'Lists',
            items: []
          },
          {
            url: '/ui-elements/pagination',
            icon: '',
            title: 'Pagination',
            items: []
          },
          {
            url: '/ui-elements/progress-bars',
            icon: '',
            title: 'Progress bars',
            items: []
          },
          {
            url: '/ui-elements/social-media-buttons',
            icon: '',
            title: 'Social media buttons',
            items: []
          },
          {
            url: '/ui-elements/tabs',
            icon: '',
            title: 'Tabs',
            items: []
          },
          {
            url: '/ui-elements/typography',
            icon: '',
            title: 'Typography',
            items: []
          }
        ]
      },
      {
        url: '',
        icon: 'assignment',
        title: 'Forms',
        badge: {
          className: 'badge badge-success badge-sm badge-outline',
          title: 'Important'
        },
        items: [
          {
            url: '/forms/default-forms',
            icon: '',
            title: 'Default forms',
            items: []
          },
          {
            url: '/forms/input-groups',
            icon: '',
            title: 'Input groups',
            items: []
          },
          //          {
          //            url: '/forms/steps',
          //            icon: '',
          //            title: 'Form steps',
          //            items: []
          //          },
          {
            url: '/forms/validation',
            icon: '',
            title: 'Form validation',
            items: []
          },
          {
            url: '/forms/sliders',
            icon: '',
            title: 'Sliders',
            items: []
          },
          {
            url: '/forms/react-datetime',
            icon: '',
            title: 'Date picker',
            items: []
          },
          {
            url: '/forms/react-select',
            icon: '',
            title: 'React select',
            items: []
          }
        ]
      },
      {
        url: '',
        icon: 'format_list_bulleted',
        title: 'Tables',
        items: [
          {
            url: '/tables/reactable',
            icon: '',
            title: 'Reactable',
            items: []
          },
          {
            url: '/tables/default-tables',
            icon: '',
            title: 'Default tables',
            items: []
          }
        ]
      },
      {
        url: '',
        icon: 'notifications',
        title: 'Notifications',
        badge: {
          className: 'badge badge-warning badge-sm badge-rounded badge-outline',
          title: '3'
        },
        items: [
          {
            url: '/ui-elements/alerts',
            icon: '',
            title: 'Alerts',
            items: []
          },
          {
            url: '/ui-elements/modals',
            icon: '',
            title: 'Modals',
            items: []
          },
          {
            url: '/notifications/reapop',
            icon: '',
            title: 'Reapop',
            items: []
          }
        ]
      }
    ]
  },
]
export function navigation(state = Array.from(urls), action) {
  switch (action.type) {
    case 'SET_NAVIGATION':
      return Object.assign({}, state, {
        ...action.navigation
      })
    default:
      return state
  }
}
