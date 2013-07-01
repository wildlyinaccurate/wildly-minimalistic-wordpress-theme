<?php
/**
 * The template used for displaying post meta information
 *
 * @package wildly-minimalistic
 * @since wildly-minimalistic 2.5
 */
?>

<div class="meta">
    Posted in <?php the_category(', '); ?>
    <?php the_tags('and tagged ', ', ', ''); ?>
    on <span class="date"><?php the_time('j F Y'); ?></span>
    by <span class="author"><?php the_author(); ?></span>
</div>
