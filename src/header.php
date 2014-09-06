<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="utf-8">
    <title><?php wp_title('|', true, 'right'); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="//fonts.googleapis.com/css?family=Source+Sans+Pro:600,300,300italic|The+Girl+Next+Door" rel="stylesheet" type="text/css">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <header id="header">
        <a id="logo" href="<?php echo home_url('/'); ?>"><?php bloginfo('name'); ?></a>
        <div class="description"><?php bloginfo('description'); ?></div>
    </header>

    <nav id="main-nav">
        <?php wp_nav_menu(array('theme_location' => 'primary')); ?>
    </nav>
