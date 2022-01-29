<script lang="ts">
import { defineComponent, useMeta } from "@nuxtjs/composition-api";
import { useLocale } from '~/hooks'

const contact = 'antuzov'

export default defineComponent({
  setup() {
    const i18n = useLocale()
    useMeta({
      title: `${i18n.t('error.unknown').toString()}`,
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/unknown.png' }
      ]
    })

    return {
      contact
    }
  },
  head: {}
});
</script>

<template>
  <div class="wrapper flex flex-col md:flex-row">
    <div class="text p-6 md:p-12 flex flex-grow flex-col md:justify-end text-center md:text-left">
      <h1 class="text-2xl md:text-4xl">{{ $t('header') }}</h1>
      <h3 class="text-xl md:text-2xl md:mt-4 mt-2">{{ $t('subtitle') }}</h3>
      <p class="text-md md:text-lg md:mt-4 mt-2">
        {{ $t('description') }}
        <a :href="`https://telegram.me/${contact}`" target="_blank">@{{ contact }}</a>
      </p>
    </div>
    <div class="image flex-grow-0 md:max-w-lg" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-image: linear-gradient(black, rgba(0,0,0,.25)), url("/images/mechanics_room.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  color: white;

  @screen md {
    background-image: linear-gradient(transparent, black), url("/images/mechanics_room.jpg")
  }

  a {
    color: cyan;
    text-decoration: underline;
  }
}

.image {
  background-image: url("/images/winry_frustrated.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  aspect-ratio: 77/100;

  @screen md {
    max-width: 50vw;
  }
}
</style>

<i18n lang="yaml">
ru:
  header: Ой-ой! Как вы тут оказались?
  subtitle: Похоже, вы нашли дыру в сюжете - упущение со стороны разработчиков. Пожалуйста, повторите запрос.
  description: Если вы ещё раз окажитесь здесь - напишите Алексею в Телеграмме на
en:
  header: Uh-oh! How did you end up here?
  subtitle: Looks like you've found a plot hole - a developpers' oversight. Please, try again.
  description: Should you end up here once again - contact Alex in Telegram at
</i18n>
