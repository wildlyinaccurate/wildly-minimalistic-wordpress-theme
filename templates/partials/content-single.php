<?php
/**
 * The template used for displaying page content in single.php
 *
 * @package wildly-minimalistic
 * @since wildly-minimalistic 2.5
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <h1><?php the_title(); ?></h1>

    <?php get_template_part('templates/partials/inc', 'meta'); ?>

    <div class="entry">
        <?php the_content(); ?>

        <?php wp_link_pages(array(
            'before' => 'Pages: ',
            'next_or_number' => 'number',
        )); ?>

        <?php the_tags('Tags: ', ', ', ''); ?>
    </div>
</article>
