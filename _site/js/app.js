/*
 * Calaca - Search UI for Elasticsearch
 * https://github.com/romansanchez/Calaca
 * http://romansanchez.me
 * @rooomansanchez
 * 
 * v1.2.0
 * MIT License
 */

/* Module */
window.Calaca = angular.module('calaca', ['elasticsearch', 'ngAnimate'],
    ['$locationProvider', function($locationProvider){
        $locationProvider.html5Mode(true);
    }]
);