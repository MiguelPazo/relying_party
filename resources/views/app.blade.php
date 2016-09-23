<!DOCTYPE HTML>
<html ng-app="RelyingParty">
<head>
    <title>Relying Party</title>
    <link rel="stylesheet" href="{{ asset('/js/libs/bootstrap/dist/css/bootstrap.min.css') }}"/>
</head>
<body>

@yield('content')

<script src="{{ asset('/js/libs/angular/angular.min.js') }}"></script>
<script src="{{ asset('/js/libs/ngstorage/ngStorage.min.js') }}"></script>
<script src="{{ asset('/js/app.js') }}"></script>

@yield('scripts')

</body>
</html>