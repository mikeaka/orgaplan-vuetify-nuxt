export default {
  // initialiased and secured data input
  nameRules: [
    (v) => !!v || 'Name is required',
    (v) => v.length <= 20 || 'Name must be less than 20 characters'
  ],
  itemRules: [(v) => !!v || 'Name is required'],
  numberRules: [
    (v) => !!v.toString().match(/^[0-9]+(\.?[0-9]+)?$/) || 'Number is required'
  ]
}
