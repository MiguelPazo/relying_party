@extends('app')

@section('content')
    <div class="container" ng-controller="homeController">
        <div class="row">
            <div class="col-sm-12">
                <span id="message"></span>
            </div>
            <div class="col-sm-6 col-sm-offset-3 text-center">
                <a href="{{ env('IDP_URL" id="btn_send" class="btn btn-success btn-lg">
                    INGRESAR
                </a>

            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="js/home.js"></script>
@endsection