<?php

/****************************************
Theme Setup
 *****************************************/

require_once(get_template_directory() . '/lib/init.php');
require_once(get_template_directory() . '/lib/theme-helpers.php');
require_once(get_template_directory() . '/lib/theme-functions.php');
require_once(get_template_directory() . '/lib/theme-comments.php');

/****************************************
Misc Theme Functions
 *****************************************/

/**
 * Define custom post type capabilities for use with Members
 */
function mb_add_post_type_caps()
{
    // mb_add_capabilities( 'portfolio' );
}

/**
 * Creates a nicely formatted and more specific title element text
 * for output in head of document, based on current view.
 *
 * Taken with thanks from the "Twenty Twelve" theme.
 *
 * @param string $title Default title text for current view.
 * @param string $sep Optional separator.
 * @return string Filtered title.
 */
function wildly_minimalistic_wp_title($title, $sep)
{
    global $paged, $page;

    if (is_feed()) {
        return $title;
    }

    // Add the site name.
    $title .= get_bloginfo('name');

    // Add the site description for the home/front page.
    $site_description = get_bloginfo('description', 'display');

    if ($site_description && (is_home() || is_front_page())) {
        $title = "$title $sep $site_description";
    }

    // Add a page number if necessary.
    if ($paged >= 2 || $page >= 2) {
        $title = "$title $sep " . sprintf(__('Page %s', 'wildly-minimalistic'), max($paged, $page));
    }

    return $title;
}

add_filter('wp_title', 'wildly_minimalistic_wp_title', 10, 2);
