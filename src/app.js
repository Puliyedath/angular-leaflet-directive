var app = angular.module('app', ['ngNewRouter', 'app.home']);
var controller = app.controller('AppController', [ '$router', AppController ]);

AppController.$routeConfig = [
    { path: '/', component: 'home' },
    { path: '/documentation', component: 'documentation' }
];

function AppController ($router) {}
