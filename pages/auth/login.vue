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

                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            color="teal darken-2"
                          >
                          </v-text-field>
                          <v-text-field
                            id="password"
                            label="mot de passe"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="teal"
                            accent-3
                          >
                          </v-text-field>
                        </v-form>
                        <h3 class="text-center mt-3">Mot de passe oublie ?</h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="teal darken-2" dark
                          >SIGN IN</v-btn
                        >
                      </div>
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
                    <v-col cols="12" md="4" class="teal darken-2">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">
                          Bienvenue sur Orgaplan
                        </h1>

                        <h5 class="text-center mt-2">
                          Pour profiter entierement d'Orgaplan, enregistrer vous
                          et commencer a planifier les moyens pour vos
                          livraisons
                        </h5>
                      </v-card-text>
                      <div class="text-center mt-7">
                        <v-btn rounded outlined dark @click="step--"
                          >S'authentifier</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text--center display-2 teal--text text--darken-2"
                        >
                          Creer un compte
                        </h1>
                        <br />
                        <v-form>
                          <v-text-field
                            label="Name"
                            name="Name"
                            prepend-icon="person"
                            type="text"
                            color="teal darken-2"
                          >
                          </v-text-field>
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="teal darken-2"
                          >
                          </v-text-field>
                          <v-text-field
                            label="mot de passe"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="teal"
                            accent-3
                          >
                          </v-text-field>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n7">
                        <v-btn rounded color="teal darken-2" dark
                          >Enregistrer</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data() {
    return {
      step: 1
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
