<!-- 文章列表 -->
<li class="artic_li">
    <!-- 文章内容 -->
    <article class="p_a<?php if ( !has_post_thumbnail() ) { echo ' p_lt'; };?>">
        <!-- 分类 -->
        <div class="category_div">
            <h1><?php the_category(' ') ?>>
            </h1>
        </div>
        <div class="dividing">
            <div class="b_dividing"></div>
        </div>
        
        <div class="art_con">
            <!-- 特色图像 -->
            <a href="<?php the_permalink(); ?>">
            <div class="img_div">
                <?php 
                    if(has_post_thumbnail()){
                ?>
                <?php the_post_thumbnail(); ?>
                <?php } else{ ?>
                    <img src="<?php bloginfo('template_url');?>/images/upload/bg_one.jpg">
                <?php } ?>
                <span class="title_bg"></span>  
                <h1 class="art_title"><?php the_title(); ?></h1>
                <h2 class="art_author">Author : <?php the_author(); ?></h2>
            </div>
            </a>
            
            <div class="art_info">
                <h2 class="article_title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                <div class="art_summary">
                    <a href="<?php the_permalink(); ?>">
                    <?php the_excerpt(); ?>
                    </a>
                </div>
                
                <!-- 标签 -->
                <div class="lable_div">
                    <?php the_tags('','',''); ?>
                </div>
                
                <!-- author -->
                <div class="author_div">
                    <span class="p_i_a"><a><?php the_author(); ?></a></span>
                    <span class="p_i_r"><a href="<?php comments_link(); ?>" ><?php comments_number( __('无回复','dpt') , __('落单的回复','dpt') , __('% 回复','dpt') ); ?></a></span>
                    <span class="p_i_s"><a href="<?php the_permalink(); ?>"><?php if ( function_exists('the_views') ){ the_views(); } ?></a></span>
                    <span class="p_i_d"><?php echo edit_post_link( __('编辑','dpt') ); ?></span>
                </div>
                
                <div class="read_more clearfix">
                    <a href="<?php the_permalink(); ?>">阅读全文</a>
                </div>
            </div>  
            
            <div class="clearfix"></div>
        </div>
        
        <div class="dividing dividing_bottom">
            <div class="b_dividing"></div>
        </div>
        
        <!-- 发表日期 -->
        <div class="time_div">
            <h1>><?php the_date_xml(); ?></h1>
        </div>
        
    </article>
</li>