<template>
      <v-col class="ma-5">
          <v-row>
              <v-card max-width="600">
                <v-card-title>{{ $t("profile.profile-title") }}</v-card-title>
                <v-card-subtitle>{{ $t("profile.profile-subtitle") }}</v-card-subtitle>
                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>{{$t('profile.first-name')}}: {{ user.firstName }}</v-list-item-title>
                            <v-list-item-title>{{$t('profile.last-name')}}: {{ user.lastName }}</v-list-item-title>
                            <v-list-item-title>{{$t('profile.email')}}: {{ user.email }}</v-list-item-title>
                            <v-list-item-title>{{$t('profile.phone-number')}}: {{ user.phoneNumber }}</v-list-item-title>
                            <v-list-item-title>{{$t('profile.username')}}: {{ user.userName }}</v-list-item-title>
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
        //
    }),
    
    computed: {
        user: function () {
            return this.$store.state.user
        }
    },
    
}
</script>
