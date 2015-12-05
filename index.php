<?php get_header(); ?>

<section id="content" class="p_content">
<ul id="article_ctn">
<?php if ( have_posts() ) : ?>
<?php while ( have_posts() ) : the_post(); ?>

	<?php get_template_part('content'); ?>

<?php endwhile; ?>
</ul>
<nav id="page_nav">
    <?php can_pagenavi(); ?>
</nav>
<?php else : ?>

	<?php get_template_part('404'); ?>

<?php endif; ?>

</section>
<?php get_footer(); ?>