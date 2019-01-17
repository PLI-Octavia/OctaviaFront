<template>
  <div>
    <q-item to="/showcase/layout-demo/play-with-layout">
        <q-item-side icon="account circle" />
        <q-item-main label="Play with Layout" sublabel="Learn more about it" />
        <q-item-side right icon="thumb_up" />
      </q-item>
      <q-item to="/showcase/layout-demo/drawer-panels">
        <q-item-side icon="view_array" />
        <q-item-main label="Drawer Panels" sublabel="Layout left/right sides" />
      </q-item>
      <q-item to="/showcase/layout-demo/page-sticky">
        <q-item-side icon="pin_drop" />
        <q-item-main label="Page Sticky" sublabel="...on a Layout" />
      </q-item>
      <q-item to="/showcase/layout-demo/floating-action-button">
        <q-item-side icon="play_for_work" />
        <q-item-main label="Floating Action Button" sublabel="For Page actions" />
      </q-item>
  </div>
</template>

<script>
export default {
  name: 'RouteLinker'
}
</script>
