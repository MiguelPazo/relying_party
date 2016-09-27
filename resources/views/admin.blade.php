@extends('app')

@section('content')
    <div class="container" ng-controller="adminController">
        <div class="row">
            <div class="col-sm-12">
                <h1>[[ data ]]</h1>
                <a ng-click="logout()" class="btn btn-lg btn-danger">
                    Logout
                </a>
            </div>
        </div>

        <iframe id="receiver" src="{{ env('IDP_URL') }}frame_slo" frameborder="0"></iframe>
    </div>

@endsection

@section('scripts')
    <script src="{{ asset('/js/admin.js') }}"></script>
@endsection