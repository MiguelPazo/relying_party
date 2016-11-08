<!DOCTYPE HTML>
<html ng-app="RelyingParty">
<head>
    <title>Relying Party</title>
    <link rel="stylesheet" href="js/libs/bootstrap/dist/css/bootstrap.min.css"/>
    <meta name="gsslo.federationId" content="5995a3c9"/>
    <script>
        var BASE_URL = '{{ env('BASE_URL')}}';
    </script>
</head>
<body>

@yield('content')
<script src="js/libs/angular/angular.min.js"></script>
<script src="js/libs/ngstorage/ngStorage.min.js"></script>
<script src="js/app.js"></script>

@yield('scripts')

<script>
    //    function gssloLogued(jwt, user) {
    //        console.log(jwt);
    //    }
    //    function gssloLogout() {
    //        console.log('logout');
    //    }
</script>
{{--<script src="{{ env('IDP_URL') . 'js/service/gsslo.js' }}"></script>--}}
<script src="http://oprovider.dev/js/service/gsslo.js"></script>
</body>
</html>