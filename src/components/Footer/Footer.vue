<style scoped lang="scss" src="./Footer.scss"></style>

<script setup lang="ts">
    import { svgService } from '../../services/svg.service';
    import { footerNavLinks } from '../../database/footer.data';

    const iconsNames = ['youtube', 'x', 'whatsapp', 'tiktok',
     'facebook', 'linkedin', 'instagram']

</script>

<template>
    <div class="footer-layout">

        <!-- top area -->
        <div class="top-area">
            <div class="icons">
                <div class="icon" v-for="icon in iconsNames">
                    <i :class="`fa-brands fa-${icon}`"></i>
                </div>
            </div>
            <div class="nadav-logo" v-html="svgService.getSvg('nadlan-full-logo')"></div>
        </div>

        <!-- middle area -->
        <div class="nav-area">
            <div class="nav-lists" v-for="list in footerNavLinks">
                <h1>{{list.title}}</h1>
                <a v-for="link in list.links" :href="`${link}`">{{link}}</a>
                <div class="read-more-layout">
                    <i class="fa-solid fa-angle-down"></i>
                    <a class="read-more" href="/read-more">קרא עוד</a>
                </div>
            </div>
        </div>

        <!-- bottom area -->
        <footer>
            <div class="footer-context">
                <p class="rights-statement">© כל הזכויות שמורות למרכז הנדל"ן ישראל - סקאלה ד.מ בע"מ Scala Group D.M</p>

                <div class="wizzo-footer">
                    <div v-html="svgService.getSvg('wizzo-logo')"></div>
                    <p>פיתוח האתר</p>
                </div>

                <div class="eden-jarmon-footer">
                    <div v-html="svgService.getSvg('eden-jarmon-logo')"></div>
                    <p>אפיון ועיצוב האתר</p>
                </div>
            </div>
        </footer>


    </div>
</template>