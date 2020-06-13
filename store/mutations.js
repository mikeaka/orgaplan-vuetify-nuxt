import Vue from 'vue'

export default {
  addConstructionSite(state, payload) {
    // alert(payload)
  },
  addDeliveryArea(state, payload) {
    // alert(payload)
    // console.log(payload)
    state.deliveryAreas.push(payload)
  },
  deleteDeliveryArea(state, payload) {
    Vue.delete(state.deliveryAreas, payload)
  },
  updateDeliveryArea(state, payload) {
    const deliveryarea = state.deliveryAreas.find((deliveryarea) => {
      return deliveryarea.id === payload.id
    })
    if (payload.name) {
      deliveryarea.name = payload.name
    }
    if (payload.floornumber) {
      deliveryarea.floornumber = payload.floornumber
    }
    if (payload.floorname) {
      deliveryarea.floorname = payload.floorname
    }
    if (payload.affectedconstructionsite) {
      deliveryarea.affectedconstructionsite = payload.affectedconstructionsite
    }
    if (payload.defaultmaterials) {
      deliveryarea.defaultmaterials = payload.defaultmaterials
    }
    if (payload.active) {
      deliveryarea.active = payload.active
    }
  }
}
