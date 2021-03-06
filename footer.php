<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package toastdesign
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<?php get_sidebar('footer'); ?>

		<div class="container">
			<div class="site-info">
				<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'toast-design' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'toast-design' ), 'WordPress' ); ?></a>
				<span class="sep"> | </span>
				<?php printf( esc_html__( 'Theme: %1$s by %2$s.', 'toast-design' ), 'toast-design', '<a href="http://www.toastdesign.nl" rel="designer">Toast Design</a>' ); ?>
			</div><!-- .site-info -->
			
			<?php if (has_nav_menu('social')) { ?>
				<?php toast_design_social_menu(); ?>
			<?php } ?>
		</div>
		
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
