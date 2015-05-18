 var app = angular.module('citaSalud', ['ngMaterial', 'users']);
 
 app.config(function($mdThemingProvider, $mdIconProvider){
	$mdIconProvider
		.iconSet("action", "assets/components/svg-material-icons/svg-sprite-action.svg", 24)
		.iconSet("alert", "assets/components/svg-material-icons/svg-sprite-alert.svg", 24)
		.iconSet("av", "assets/components/svg-material-icons/svg-sprite-av.svg", 24)
		.iconSet("communication", "assets/components/svg-material-icons/svg-sprite-communication", 24)
		.iconSet("content", "assets/components/svg-material-icons/svg-sprite-content.svg", 24)
		.iconSet("device", "assets/components/svg-material-icons/svg-sprite-device.svg", 24)
		.iconSet("editor", "assets/components/svg-material-icons/svg-sprite-editor.svg", 24)
		.iconSet("file", "assets/components/svg-material-icons/svg-sprite-file.svg", 24)
		.iconSet("hardware", "assets/components/svg-material-icons/svg-sprite-hardware.svg", 24)
		.iconSet("image", "assets/components/svg-material-icons/svg-sprite-image.svg", 24)
		.iconSet("maps", "assets/components/svg-material-icons/svg-sprite-maps.svg", 24)
		.iconSet("navigation", "assets/components/svg-material-icons/svg-sprite-navigation.svg", 24)
		.iconSet("notification", "assets/components/svg-material-icons/svg-sprite-notification.svg", 24)
		.iconSet("social", "assets/components/svg-material-icons/svg-sprite-social", 24)
		.iconSet("toggle", "assets/components/svg-material-icons/svg-sprite-toggle.svg", 24);
	
	$mdThemingProvider.theme('default')
		.primaryPalette('indigo')
    	.accentPalette('blue');
});

//app.config(['$httpProvider', function ($httpProvider) {
//    // Intercept POST requests, convert to standard form encoding
//    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
//    $httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) {
//        var key, result = [];
//        for (key in data) {
//            if (data.hasOwnProperty(key)) {
//                result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
//            }
//        }
//        return result.join("&");
//    });
//}])

var ipc = require('ipc');
var messenger = {
	send : function(event, action) {
		ipc.send(event, action);
	}
};