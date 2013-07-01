<?php
/**
 * The template used for displaying content
 *
 * @package wildly-minimalistic
 * @since wildly-minimalistic 2.5
 */
?>

<article <?php post_class() ?> id="post-<?php the_ID(); ?>">

    <h1><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h1>

    <div class="entry">
        <?php the_content(); ?>
    </div>

    <?php get_template_part('templates/partials/inc', 'meta'); ?>
    <?php get_template_part('templates/partials/inc', 'comments-link'); ?>

</article>
