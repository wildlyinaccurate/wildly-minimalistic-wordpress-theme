        <footer id="footer">
            <?php dynamic_sidebar('Footer'); ?>
        </footer>

        <?php wp_footer(); ?>

        <!-- build:js(.tmp) scripts/main.js -->
        <script src="../src/assets/scripts/vendor/highlight.pack.js"></script>
        <script src="assets/scripts/highlight.js"></script>
        <!-- endbuild -->

        <script>
          var _gaq = _gaq || [];
          _gaq.push(['_setAccount', 'UA-20744182-3']);
          _gaq.push(['_trackPageview']);

          (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
          })();
        </script>
    </body>
</html>
