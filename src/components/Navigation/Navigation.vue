<style scoped lang="scss" src="./Navigation.scss"></style>

<script setup lang="ts">
    import { svgService } from '../../services/svg.service'

    const topNavTexts = ['נדל”ן למגורים' , 'התחדשות עירונית',
        'נדל”ן מניב השקעות', 'דעות וניתוחים', 'חדשות הענף',
        'עיצוב ואדריכלות', 'נדל”ן TV', 'פודקאסטים']
    const bottomNavTexts = ['מדד התחדשות עירונית', 'מחשבונים',
        'נדל”ן בראש צעיר', 'אודות מרכז הנדל”ן', 'מכללת מרכז הנדל”ן',
        'צור קשר']
    const iconsNames = ['youtube', 'x', 'whatsapp', 'tiktok',
     'facebook', 'linkedin', 'instagram']


</script>

<template>
  <!-- navigation desktop -->
  <div class="navigation-desktop">
    <div class="navigation-area">
        <div class="navigation-top">

            <div class="icons">
                <div class="icon" v-for="icon in iconsNames">
                    <i :class="`fa-brands fa-${icon}`"></i>
                </div>
            </div>

            <div class="nav-buttons">
                <div v-for="text in topNavTexts">
                    <a :href="`http://localhost:5173/${text}`">{{ text }}</a>
                </div>
            </div>

        </div>
        <div class="navigation-bottom">
            <div class="search">
                <input type="text" placeholder="חיפוש"/>
                <div class="search-svg" v-html="svgService.getSvg('search')"></div>
            </div>
            <div class="nav-buttons">
                <div v-for="text in bottomNavTexts">
                    <a :href="`http://localhost:5173/${text}`">{{ text }}</a>
                </div>
            </div>
        </div>
    </div>
    <div class="logo-area">
        <img alt="nadlan-center-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm9wR4Ku5oMujv_MTuvQeP8OgtgHr14gzfNw&s"/>
    </div>
  </div>

  <!-- navigation mobile -->
  <div class="navigation-mobile">
    <div class="menu" v-html="svgService.getSvg('menu-icon')"></div>
    <div class="logo" v-html="svgService.getSvg('nadlan-white-logo')"></div>
  </div>
</template>