<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat color="white">
          <v-btn color="primary" class="mr-4" @click="dialog = true"
            >New Event</v-btn
          >
          <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday"
            >Aujoud'hui</v-btn
          >
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">{{
            $refs.calendar.title
          }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu bottom right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Jour</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Semaine</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Mois</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 Jours</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <!-- Add New event-->
      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-container>
            <v-form @submit.prevent="addEvent">
              <v-text-field
                v-model="name"
                type="text"
                label="event name (required)"
              ></v-text-field>
              <v-text-field
                v-model="details"
                type="text"
                label="event details"
              ></v-text-field>

              <v-layout row wrap>
                <v-flex xs12>
                  <v-menu
                    ref="menu1"
                    v-model="menu1"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="start"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="start"
                        label="Selectioner la date de debut de livraison"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="start" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu1 = false"
                        >Annuler</v-btn
                      >
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu1.save(start)"
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-menu>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-menu
                    ref="menu2"
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="end"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="end"
                        label="Selectioner la date de fin de livraison"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="end" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu2 = false"
                        >Annuler</v-btn
                      >
                      <v-btn text color="primary" @click="$refs.menu2.save(end)"
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-menu>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs11 sm5>
                  <v-menu
                    ref="menu3"
                    v-model="menu3"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="time"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="time"
                        label="Picker in menu"
                        prepend-icon="access_time"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-time-picker
                      v-if="menu3"
                      v-model="time"
                      @click:minute="$refs.menu3.save(time)"
                    ></v-time-picker>
                  </v-menu>
                </v-flex>
              </v-layout>
              <v-text-field
                v-model="color"
                type="color"
                label="event color (click to open color menu)"
              ></v-text-field>
              <v-btn
                type="submit"
                color="primary"
                class="mr-4"
                @click.stop="dialog = false"
                >Create Event</v-btn
              >
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>
      <!-- Add New event-->
      <v-sheet height="475">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          locale="fr-fr"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateRange"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card color="grey lighten-4" min-width="350px" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <v-btn icon @click="deleteEvent(selectedEvent.id)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>

              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <v-form v-if="currentlyEditing !== selectedEvent.id">{{
                selectedEvent.details
              }}</v-form>
              <v-form v-else>
                <v-text-field
                  v-model="selectedEvent.details"
                  label="Details"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="secondary" @click="selectedOpen = false"
                >Fermer</v-btn
              >
              <v-btn
                v-if="currentlyEditing !== selectedEvent.id"
                text
                @click.prevent="editEvent(selectedEvent)"
                >Modifier</v-btn
              >
              <v-btn v-else text @click.prevent="updateEvent(selectedEvent)"
                >Sauvegarder</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import fireDb from '../plugins/firebase'

export default {
  components: {},
  data: () => ({
    menu1: false,
    menu2: false,
    menu3: false,
    today: new Date().toISOString().substr(0, 10),
    focus: new Date().toISOString().substr(0, 10),
    type: 'month',
    typeToLabel: {
      month: 'Mois',
      week: 'Semaine',
      day: 'Jour',
      '4day': '4 Jours'
    },
    name: null,
    details: null,
    start: null,
    end: null,
    time: null,
    color: '#1976D2',

    currentlyEditing: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    dialog: false
  }),
  computed: {
    title() {
      const { start, end } = this
      if (!start || !end) {
        return ''
      }
      const startMonth = this.monthFormatter(start)
      const endMonth = this.monthFormatter(end)
      const suffixMonth = startMonth === endMonth ? '' : endMonth
      const startYear = start.year
      const endYear = end.year
      const suffixYear = startYear === endYear ? '' : endYear
      const startDay = start.day + this.nth(start.day)
      const endDay = end.day + this.nth(end.day)
      switch (this.type) {
        case 'month':
          return `${startMonth} ${startYear}`
        case 'week':
        case '4day':
          return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
        case 'day':
          return `${startMonth} ${startDay} ${startYear}`
      }
      return ''
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: 'UTC',
        month: 'long'
      })
    }
  },
  mounted() {
    this.getEvents()
    this.$refs.calendar.scrollToTime('08:00')
    this.$refs.calendar.checkChange()
  },
  methods: {
    async getEvents() {
      const snapshot = await fireDb.collection('calEnv').get()
      const events = []
      // const events = []
      snapshot.forEach((doc) => {
        // console.log(doc)
        // console.log(doc.data())
        const appData = doc.data()
        appData.id = doc.id
        events.push(appData)
      })
      this.events = events
    },
    async addEvent() {
      if (this.name && this.start && this.end) {
        await fireDb.collection('calEnv').add({
          name: this.name,
          details: this.details,
          start: this.start,
          end: this.end,
          color: this.color
        })
        this.getEvents()
        this.name = ''
        this.details = ''
        this.start = ''
        this.end = ''
        this.color = '#1976D2'
      } else {
        alert('Name, Start and End date are required')
      }
    },
    async updateEvent(ev) {
      await fireDb
        .collection('calEnv')
        .doc(this.currentlyEditing)
        .update({
          details: ev.details
        })
      this.selectedOpen = false
      this.currentlyEditing = null
    },
    async deleteEvent(ev) {
      await fireDb
        .collection('calEnv')
        .doc(ev)
        .delete()
      this.selectedOpen = false
      this.getEvents()
    },
    viewDay({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor(event) {
      return event.color
    },
    setToday() {
      this.focus = ''
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    editEvent(ev) {
      this.currentlyEditing = ev.id
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => (this.selectedOpen = true), 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    updateRange({ start, end }) {},
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    }
  }
}
</script>
