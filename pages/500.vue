<script lang="ts">
import { defineComponent, useMeta } from "@nuxtjs/composition-api";
import { useLocale } from '~/hooks'

const contact = 'antuzov'

export default defineComponent({
  setup() {
    const i18n = useLocale()
    useMeta({ title: `${i18n.t('error').toString()} 500` })

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
  background-image: linear-gradient(black, rgba(0,0,0,.25)), url("/images/server-room.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  color: white;

  @screen md {
    background-image: linear-gradient(transparent, black), url("/images/server-room.jpg")
  }

  a {
    color: cyan;
    text-decoration: underline;
  }
}

.image {
  background-image: url("/images/winry.png");
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
  header: Ой-ой! Что-то пошло не так!
  subtitle: На данный момент сервера не работают или находятся на теническом обслуживании. Пожалуйста, обновите страницу через пару минут.
  description: Если вы всё ещё видите это сообщение - напишите Алексею в Телеграмме на
en:
  header: Uh-oh! Something went wrong!
  subtitle: The servers are down or undergoing mainanence. Please, come back in a few minutes.
  description: Should this message persist - contact Alex in Telegram at
</i18n>
