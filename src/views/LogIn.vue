<template>
    <div 
      style="width: 40%; margin: auto; margin-top: 100px;">
        <form >
            <h1>{{ $t('authentication.logIn') }}</h1>
            <v-text-field
                v-model="username"
                :error-messages="usernameErrors"
                :counter="10"
                label="Username"
                required
                @input="$v.username.$touch()"
                @blur="$v.username.$touch()"
                ></v-text-field>
            <v-text-field
                v-model="password"
                :error-messages="passwordErrors"
                :counter="6"
                label="Password"
                type="password"
                required
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
            ></v-text-field>
            <v-btn
                class="mr-4"
                @click="submit"
            >
                submit
            </v-btn>
        </form>
    </div>           
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, minLength  } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      username: { required, maxLength: maxLength(10) },
      password: { required, minLength: minLength(6) },
    },

    data: () => ({
      username: '',
      password: '',
    }),

    computed: {
      usernameErrors () {
        const errors = []
        if (!this.$v.username.$dirty) return errors
        !this.$v.username.maxLength && errors.push(this.$t('errors.formErrors.max10Char'))
        !this.$v.username.required && errors.push(this.$t('errors.formErrors.requiredUsername'))
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.minLength && errors.push(this.$t('errors.formErrors.min6Char'))
        !this.$v.password.required && errors.push(this.$t('errors.formErrors.requiredPassword'))
        return errors
      },
    },

    methods: {
      submit: function () {
        let username = this.username
        let password = this.password
        this.$store.dispatch('login', { username, password })
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      }
    },
  }
</script>