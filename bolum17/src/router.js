import Home from './components/Home';

// import User from './components/user/User';
// import UserStart from './components/user/UserStart';
// import UserEdit from './components/user/UserEdit';
// import UserDetail from './components/user/UserDetail';

// lazy loading olarak degistirildi....

const User = resolve => {
    require.ensure(["./components/user/User.vue"], ()=> {
        resolve(require("./components/user/User.vue"))
    },
    // "User" // <<--- grup halinde lazy load etmek icin toplu yukleme yapar....
    )
};

const UserStart = resolve => {
    require.ensure(["./components/user/UserStart.vue"], ()=> {
        resolve(require("./components/user/UserStart.vue"))
    },
    // "User"
    )
};

const UserEdit = resolve => {
    require.ensure(["./components/user/UserEdit.vue"], ()=> {
        resolve(require("./components/user/UserEdit.vue"))
    },
    // "User"
    )
};

const UserDetail = resolve => {
    require.ensure(["./components/user/UserDetail.vue"], ()=> {
        resolve(require("./components/user/UserDetail.vue"))
    },
    // "User"
    )
};

export const routes = [
    // {path: '', component: Home, name: 'home'},
    
    {path: '', name: 'home', components: {
        default: Home,
        "header-top": UserStart
    }},

    {path: '/user', component: User, name: 'user'},
    {path: '/user/:id', component: User, name: 'user'},
    {
        path: '/users', component: User, name: 'users',
        children: [
            {path: '', component: UserStart, beforeEnter: (to, from, next)=> {
                console.log("Route Level Control......");
                next(); // <--- required or next({path:'/user'}); or next("/user"); possible...
                // next(false); // <-- disable route...
            }},
            {path: ':id', component: UserDetail, name: 'usersDetail' },
            {path: ':id/edit', component: UserEdit, name: 'usersEdit' }
        ]
    },
    { path: '/redirect', redirect: '/user' },
    { path: '/redirectto', redirect: {name: 'users'} },
    { path: '*', redirect: '/' } // wildcard routing...
];