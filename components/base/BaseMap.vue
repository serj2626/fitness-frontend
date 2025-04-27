<script setup>
import { HeroIcons } from "~/assets/icons/types/hero-icons";
import {
  YandexMap,
  YandexMapControls,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapZoomControl,
  YandexMapMarker,
} from "vue-yandex-maps";
const map = shallowRef(null);

defineProps({
  mobHeight: {
    type: String,
    default: "500px",
  },
  tabHeight: {
    type: String,
    default: "500px",
  },
  lapHeight: {
    type: String,
    default: "600px",
  },
  deskHeight: {
    type: String,
    default: "600px",
  },
  mapWidth: {
    type: String,
    default: "30.3141",
  },
  mapLongitude: {
    type: String,
    default: "59.9386",
  },
});
</script>
<template>
  <section v-if="mapLongitude && mapWidth" class="base-map">
    <YandexMap
      v-model="map"
      :settings="{
        coordorder: 'latlong',
        location: {
          center: [parseFloat(mapLongitude), parseFloat(mapWidth)],
          zoom: 15,
        },
        showScaleInCopyrights: true,
        behaviors: ['drag', 'dblClick'],
      }"
      width="100%"
      height="100%"
      class="base-map__map"
    >
      <YandexMapDefaultSchemeLayer />
      <YandexMapDefaultFeaturesLayer>
        <yandex-map-controls :settings="{ position: 'right' }">
          <yandex-map-zoom-control />
        </yandex-map-controls>
        <YandexMapMarker
          :settings="{
            coordinates: [parseFloat(mapLongitude), parseFloat(mapWidth)],
          }"
          position="translate(-36%, -72%)"
        >
          <div class="base-map__map__marker">
            <Icon :name="HeroIcons.MARKER" class="base-map__map-marker-icon" />
          </div>
        </YandexMapMarker>
      </YandexMapDefaultFeaturesLayer>
    </YandexMap>
  </section>
</template>

<style lang="scss" scoped>
.base-map {
  position: relative;
  width: 100%;
  height: v-bind(mobHeight);

  @include mediaTablet {
    height: v-bind(tabHeight);
  }

  @include mediaLaptop {
    height: v-bind(lapHeight);
  }

  @include mediaDesktop {
    height: v-bind(deskHeight);
  }

  &__map {
    border-radius: 20px;
    overflow: hidden;

    &__marker {
      width: 50px;
      height: 50px;
    }
  }
}

.base-map__map {
  border-radius: 20px;
  overflow: hidden;
}
</style>
