export default {
  addDeliveryArea({ commit }, payload) {
    const deliveryArea = {
      name: payload.name,
      floornumber: payload.floornumber,
      floorname: payload.floorname,
      affectedconstructionsite: payload.affectedconstructionsite,
      defaultmaterials: payload.defaultmaterials,
      active: payload.active
    }
    commit('addDeliveryArea', deliveryArea)
  }
}
