<!DOCTYPE html>
<!--[if IE 8]>
<html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" <?php language_attributes(); ?>> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <title><?php wp_title(''); ?></title>
    <meta name="viewport" content="width=device-width">
    <link href="http://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" type="text/css">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <div id="container">
        <header>
            <a id="logo" href="<?php echo home_url('/'); ?>"><?php bloginfo('name'); ?></a>
            <div class="description"><?php bloginfo('description'); ?></div>
        </header>

        <nav>
            <?php wp_nav_menu(array('theme_location' => 'primary')); ?>
        </nav>
