<?php get_header(); ?>

<section id="main" role="main">

    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

        <article class="post" id="post-<?php the_ID(); ?>">

            <h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>

            <div class="entry">

                <?php the_content(); ?>

                <?php wp_link_pages(array('before' => 'Pages: ', 'next_or_number' => 'number')); ?>

            </div>

        </article>

    <?php endwhile; endif; ?>

</section> <!-- /#main -->

<?php get_footer();
