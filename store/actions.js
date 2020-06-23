import firebase from 'firebase'

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
  },
  // update for Firebase
  updateDeliveryAreaData({ commit }, payload) {
    const updateObj = {}
    if (payload.name) {
      updateObj.name = payload.name
    }
    if (payload.floornumber) {
      updateObj.floornumber = payload.floornumber
    }
    if (payload.floorname) {
      updateObj.floorname = payload.floorname
    }
    if (payload.affectedconstructionsite) {
      updateObj.affectedconstructionsite = payload.affectedconstructionsite
    }
    if (payload.defaultmaterials) {
      updateObj.defaultmaterials = payload.defaultmaterials
    }
    if (payload.active) {
      updateObj.active = payload.active
    }
    commit('updateDeliveryArea', payload)

    // firebase.database().ref('meetup').child(payload.id).update(updateObj)
    // .then(() => {
    //  commit('setLoading', false)
    //  commit('updateDeliveryArea', payload)
    // })
    // .catch(error => {
    //   console.log(error)
    //   commit('setLoading', false)
    // })
  },
  signUserUp({ commit }, payload) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        console.log(user)
        const newUser = {
          id: user.uid,
          email: user.email,
          compagnyName: '',
          isAdmin: '',
          affectedCS: []
        }

        console.log(newUser)
        commit('setUser', newUser)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  signUserIn({ commit }, payload) {
    commit('setIsLoggedIn', payload)
  }
}
