<template>
      <v-col class="ma-5">
          <v-row>
              <v-card>
                <v-card-title>{{ $t("profile-title") }}</v-card-title>
                <v-card-subtitle>{{ $t("profile-subtitle") }}</v-card-subtitle>
                <v-list>
                    <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    >
                        <v-list-item-content>
                            <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
          </v-row>
      </v-col>

</template>

<script>
export default {
    name: "Profiel",
    data: () => ({
        items: [
            {title: 'first name'},
            {title: 'last name'},
            {title: 'email'}
        ]
    })

}
</script>

<style>

</style>