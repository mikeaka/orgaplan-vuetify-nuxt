export default {
  /// ////////////// Construction Sites ///////////
  // Load all Construction Sites
  loadConstructionSites(state) {
    return state.constructionSites
  },
  // load one construction site using ID
  loadConstructionSiteById: (state) => (id) => {
    return state.loadConstructionSites.find(
      (constructionSite) => constructionSite.id === id
    )
  },
  // only load the first Construction site
  featuredConstructionSite(state, getters) {
    return getters.loadConstructionSites.slice(0, 5)
  },
  /// ////////////// Materials By Construction Site ///////////
  // Load all SiteMaterials
  loadSiteMaterials(state) {
    return state.siteMaterials
  },
  // load one SiteMaterials using ID
  loadSiteMaterialById: (state) => (id) => {
    return state.loadSiteMaterials.find(
      (siteMaterial) => siteMaterial.id === id
    )
  },
  // filtered All SiteMaterials by construction site name
  loadSiteMaterialsByCsName: (state) => (siteSelection) => {
    return state.siteMaterials.filter(
      (Material) => Material.affectedconstructionsite === siteSelection
    )
  },
  /// ////////////// DeliveryAreas ///////////
  // Load all DeliveryAreas
  loadDeliveryAreas(state) {
    return state.deliveryAreas
  },
  // load one DeliveryAreas using ID
  loadDeliveryAreaById: (state) => (id) => {
    return state.deliveryAreas.find((deliveryArea) => deliveryArea.id === id)
  },
  // filtered one DeliveryAreas by construction site name
  loadOneDeliveryAreaByCsName: (state) => (siteSelection) => {
    return state.deliveryAreas.find(
      (Area) => Area.affectedconstructionsite === siteSelection
    )
  },
  // filtered All DeliveryAreas by construction site name
  loadDeliveryAreasByCsName: (state) => (siteSelection) => {
    return state.deliveryAreas.filter(
      (Area) => Area.affectedconstructionsite === siteSelection
    )
  },

  /// ////////////// Site Providers ///////////
  loadSiteProviders(state) {
    return state.siteProviders
  },

  loadSiteProvider: (state) => (id) => {
    return state.loadSiteProviders.find(
      (siteProvider) => siteProvider.id === id
    )
  }
}
