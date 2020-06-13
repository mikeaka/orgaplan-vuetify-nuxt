export default {
  // Load all Construction Sites
  loadConstructionSites(state) {
    return state.constructionSites
  },
  // load one construction site using ID
  loadConstructionSite(state) {
    return (constructionSiteId) => {
      return state.loadConstructionSites.find((constructionSite) => {
        return constructionSite.id === constructionSiteId
      })
    }
  },
  // only load the first Construction site
  featuredConstructionSite(state, getters) {
    return getters.loadConstructionSites.slice(0, 5)
  },
  // Load all SiteMaterials
  loadSiteMaterials(state) {
    return state.siteMaterials
  },
  // load one SiteMaterials using ID
  loadSiteMaterial(state) {
    return (siteMaterialId) => {
      return state.loadSiteMaterials.find((siteMaterial) => {
        return siteMaterial.id === siteMaterialId
      })
    }
  },
  // Load all DeliveryAreas
  loadDeliveryAreas(state) {
    return state.deliveryAreas
  },
  // load one DeliveryAreas using ID
  loadDeliveryArea(state) {
    return (deliveryAreaId) => {
      return state.loadDeliveryAreas.find((deliveryArea) => {
        return deliveryArea.id === deliveryAreaId
      })
    }
  },
  // load one DeliveryAreas using ID
  loadFilteredDeliveryArea(state) {
    return (siteSelection) => {
      return state.loadDeliveryAreas.find((deliveryArea) => {
        return deliveryArea.affectedconstructionsite === siteSelection
      })
    }
  },
  loadSiteProviders(state) {
    return state.siteProviders
  },
  loadSiteProvider(state) {
    return (siteProviderId) => {
      return state.loadSiteProviders.find((siteProvider) => {
        return siteProvider.id === siteProviderId
      })
    }
  }
}
