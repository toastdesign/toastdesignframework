<?php
if ( ! is_active_sidebar( 'sidebar-2' ) ) {
	return;
}
?>

<div id="supplementary">
	<div id="footer-widgets" class="footer-widgets widget-area" role="complementary">
		<div class="grid-sizer"></div>
		<?php dynamic_sidebar( 'sidebar-2' ); ?>
	</div><!-- #secondary -->
</div>
