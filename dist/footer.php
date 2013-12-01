        <div id="sidebar">
            <?php get_sidebar(); ?>
        </div> <!-- /#sidebar -->

        <footer id="footer">
            <?php dynamic_sidebar('Footer'); ?>
        </footer> <!-- /#footer -->

        <?php wp_footer(); ?>

        <script src="<?php bloginfo('template_directory'); ?>/scripts/main.js"></script>
    </body>
</html>
