<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="utf-8">
    <title><?php wp_title('|', true, 'right'); ?></title>
    <meta name="viewport" content="width=device-width">
    <link href="http://fonts.googleapis.com/css?family=The+Girl+Next+Door|Lato:300,400,300italic" rel="stylesheet" type="text/css">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <div id="container">
        <div id="sidebar">
            <header>
                <a id="logo" href="<?php echo home_url('/'); ?>"><?php bloginfo('name'); ?></a>
                <div class="description"><?php bloginfo('description'); ?></div>
            </header>

            <nav id="main-nav">
                <?php wp_nav_menu(array('theme_location' => 'primary')); ?>
            </nav>

            <?php get_sidebar(); ?>
        </div>
