<template>
  <div>
    <q-item>
      <q-item-side avatar="https://www.shareicon.net/data/128x128/2015/12/21/690829_people_512x512.png" />
      <q-item-main>
        <q-item-tile label>{{ child.firstname + ' ' + child.lastname }}</q-item-tile>
      </q-item-main>
    </q-item>
    <q-card-title>
      <span slot="subtitle">{{ child.schoolclass_id}}</span>
    </q-card-title>
    <q-card-actions>
      <q-btn flat>Supprimer</q-btn>
      <q-btn flat>Modifer</q-btn>
    </q-card-actions>
  </div>
</template>
<script>
export default {
  name: 'UserCard',
  props: {
    child: {
      type: Object
    }
  }
}
</script>
