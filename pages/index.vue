<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12 mt-7" width="700px" height="392px">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 teal--text text--darken-2 mb-5"
                        >
                          ORGAPLAN
                        </h1>

                        <v-form
                          ref="form"
                          v-model="valid"
                          lazy-validation
                          @submit.prevent="onSignIn"
                        >
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="email"
                            :rules="emailRules"
                            color="teal darken-2"
                          ></v-text-field>
                          <v-text-field
                            id="password"
                            label="mot de passe"
                            name="password"
                            :rules="passwordRules"
                            prepend-icon="lock"
                            type="password"
                            color="teal"
                            accent-3
                          ></v-text-field>
                          <div class="text-center mt-3">
                            <v-btn
                              rounded
                              color="teal darken-2"
                              dark
                              type="submit"
                              >SIGN IN</v-btn
                            >
                          </div>
                        </v-form>
                        <h3 class="text-center mt-3">Mot de passe oublie ?</h3>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="4" class="teal darken-2">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Bonjour, !</h1>
                        <h5 class="text-center">
                          Entrer vos informations personelles et commencer a
                          utiliser Orgaplan pour plannifier vos livraisons pour
                          le bon deroulement de votre chantier
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++"
                          >Enregistrement</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>

                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal darken-2 mb-5">
                      <v-card-text class="white--text mt-9">
                        <h1 class="text-center display-1">
                          Bienvenue sur Orgaplan
                        </h1>

                        <h5 class="text-center mt-2">
                          Pour profiter entierement d'Orgaplan, enregistrer vous
                          et commencer a planifier les moyens pour vos
                          livraisons
                        </h5>
                      </v-card-text>
                      <div class="text-center mt-5">
                        <v-btn rounded outlined dark @click="step--"
                          >S'authentifier</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-n7">
                        <h1
                          class="text--center display-2 teal--text text--darken-2 mt-2"
                        >
                          Creer un compte
                        </h1>
                        <br />
                        <v-form
                          ref="form"
                          v-model="valid"
                          lazy-validation
                          @submit.prevent="onSignUp"
                        >
                          <v-text-field
                            label="Nom Societe"
                            name="Name"
                            :rules="nameRules"
                            prepend-icon="person"
                            type="text"
                            required
                            color="teal darken-2"
                          ></v-text-field>
                          <v-text-field
                            v-model="email"
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            required
                            type="email"
                            :rules="emailRules"
                            color="teal darken-2"
                          ></v-text-field>
                          <v-text-field
                            v-model="password"
                            label="mot de passe"
                            name="password"
                            prepend-icon="lock"
                            required
                            type="password"
                            :rules="passwordRules"
                            color="teal"
                            accent-3
                          ></v-text-field>
                          <v-text-field
                            v-model="confirmPassword"
                            label="confirmer le mot de passe"
                            name="password"
                            prepend-icon="lock"
                            required
                            type="password"
                            :rules="[comparePasswords]"
                            color="teal"
                            accent-3
                          ></v-text-field>
                          <div class="text-center mt-n2">
                            <v-btn
                              :disabled="!valid"
                              rounded
                              color="teal darken-2"
                              dark
                              type="submit"
                              >Enregistrer</v-btn
                            >
                          </div>
                        </v-form>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <NuxtLink v-if="islogged" to="/home"></NuxtLink>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  middleware: 'authenticated',
  props: {
    source: String
  },
  data() {
    return {
      step: 1,
      valid: true,
      email: '',
      password: '',
      confirmPassword: '',
      islogged: '',
      nameRules: [
        (v) => !!v || 'Un nom est obligatoire',
        (v) =>
          (v && v.length <= 15) ||
          'Le nom doit contenir moins de 15 caracteres',
        (v) =>
          (v && v.length >= 5) || 'le nom doit contenir plus de 5 caracteres'
      ],
      emailRules: [
        (v) => !!v || 'Une adresse mail est obligatoire',
        (v) => /.+@.+\..+/.test(v) || 'Saisir une adresse mail valide '
      ],
      passwordRules: [
        (v) =>
          (v && v.length >= 6) ||
          'le mot de passe doit contenir minimum 6 caracteres'
      ]
    }
  },
  computed: {
    ...mapGetters({
      // map `this.doneCount` to `this.$store.getters.doneTodosCount`
      // doneCount: 'doneTodosCount'
      IsLogged: 'IsLogged'
    }),
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? 'le mot de passe ne correspond pas'
        : true
    }
  },
  watch: {
    islogged(value) {
      if (value === true) {
      }
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    onSignIn() {
      console.log('login')
      this.$store.dispatch('signUserIn', true)
    },
    onSignUp() {
      // console.log({
      //   email: this.email,
      //   password: this.password,
      //   confirmPassword: this.confirmPassword
      // })
      this.$store.dispatch('signUserUp', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>
.v-card {
  margin-top: 5rem;
  width: 400px;
  height: 400px;
}

.flexlogin {
  align-items: stretch;
}

.v-container {
  align-items: stretch;
}

@media screen and (min-width: 60em) {
  .v-card {
    flex: 0 1 calc(25% - 1em);
  }
}
</style>
