<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>HeavyStone</title>
    <link rel='icon' href='favicon.ico' type='image/x-icon'>
</head>
<body>
<div id="application"></div>

<script src="{{ asset('js/application.js') }}"></script>


<script>
    config = {};
    config.entities_latin = false;
    config.language = "vi";
    CKEDITOR.replace("body_edit_post", config);
</script>

</body>
</html>
