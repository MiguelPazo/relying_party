@extends('app')

@section('content')
    <div class="container" ng-controller="homeController">
        <div class="row">
            <div class="col-sm-12">
                <span id="message"></span>
            </div>
            <div class="col-sm-6 col-sm-offset-3">
                <button id="btn_send" class="btn btn-success btn-lg">
                    Enviar mensaje
                </button>

            </div>
            <div class="row">
                <div class="col-sm-12">
                    <iframe id="receiver" src="http://oprovider.dev/frame" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="{{ asset('/js/home.js') }}"></script>
@endsection