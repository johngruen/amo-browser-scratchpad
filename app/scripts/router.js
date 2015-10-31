// Main App Navigation View
import App from './app';

// Route Views
import AddOnStore from './components/add-on-store.js';
import AddOnList from './components/add-on-list.js';
import ThemeList from './components/theme-list.js';
import SearchBox from './components/search-box.js';

const routeConfig = [
  { path: '/',
    component: App,
    location: 'history',
    indexRoute: { component: AddOnStore },
    childRoutes: [
      { 
        path: 'my-add-ons', 
        component: AddOnList
      },
      {
        path: 'my-add-ons/testing',
        components: SearchBox
      },
      { 
        path: 'my-themes', 
        component: ThemeList 
      }
    ]
  }
];

export default routeConfig;
