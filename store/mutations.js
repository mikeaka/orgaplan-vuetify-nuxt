export default {
  addConstructionSite(state, payload) {
    // alert(payload)
  },
  addDeliveryArea(state, payload) {
    // alert(payload)
    // console.log(payload)
    state.deliveryAreas.push(payload)
  }
}
