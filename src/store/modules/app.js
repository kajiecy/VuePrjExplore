import {routers,appRouter} from '@/router/router';
import Util from '@/libs/util'
import Cookies from 'js-cookie';

const app = {
    state: {
      menuTheme: 'dark', // 主题
      openedSubmenuArr: [], // 要展开的菜单数组
      menuList: [],
    },
    mutations: {

    }
};

export default app;
