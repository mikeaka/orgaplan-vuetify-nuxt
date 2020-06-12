export default () => ({
  deliveryAreas: [
    {
      id: 'sssss',
      name: 'Auto-Sous Sol 1',
      floornumber: '2',
      floorname: ['Etage1', 'Etage2'],
      defaultmaterials: 'LIFT 01',
      additionalmaterial: 'Chariot Elevateur T1 RDC',
      affectedconstructionsite: 'Chantier1',
      active: true
    },
    {
      id: 'xxxxx',
      name: 'Auto-Sous Sol 2',
      floornumber: '3',
      floorname: ['Etage1', 'Etage2', 'Etage3'],
      defaultmaterials: 'LIFT 01',
      additionalmaterial: 'Chariot Elevateur T1 RDC',
      affectedconstructionsite: 'Chantier2',
      active: true
    },
    {
      id: 'wwwcvww',
      name: 'Centrale T1:T2',
      floornumber: '1',
      floorname: ['Etage1'],
      defaultmaterials: 'LIFT 02',
      additionalmaterial: 'Chariot Elevateur T1 RDC',
      affectedconstructionsite: 'Chantier3',
      active: true
    }
  ],
  constructionSites: [
    {
      id: 'azertyui',
      siteName: 'Chantier1',
      imageUrl:
        'http://www.oeecentre.fr/wp-content/uploads/2019/11/Confluence-PIC-800-1.png',
      active: true,
      status: 'en-cours',
      location: 'Grigny',
      projectDuration: '1 an',
      responsible: 'Georges'
    },
    {
      id: 'azertysdsdqui',
      siteName: 'Chantier2',
      imageUrl:
        'http://www.oeecentre.fr/wp-content/uploads/2018/05/Lily-of-the-Valley-PIC-3-6-1200.gif',
      active: true,
      status: 'en-cours',
      location: 'Paris',
      projectDuration: '3 ans',
      responsible: 'Marc'
    },
    {
      id: 'azeqsdqxcsdqrtyui',
      siteName: 'Chantier3',
      imageUrl:
        'http://www.oeecentre.fr/wp-content/uploads/2018/05/Vista-PIC-3-6-1200.gif',
      active: true,
      status: 'terminee',
      location: 'Montreuil',
      projectDuration: '3 ans',
      responsible: 'John'
    }
  ],
  siteMaterials: [
    {
      id: 'fffff',
      name: 'LIFT 01',
      deliveryarea: 'Centrale T1:T2',
      affectedconstructionsite: 'Chantier3',
      active: true
    },
    {
      id: 'hhhhh',
      name: 'LIFT 02',
      deliveryarea: 'Auto-Sous Sol 1',
      affectedconstructionsite: 'Chantier1',
      active: true
    },
    {
      id: 'kkkkk',
      name: 'Chariot Elevateur T1 RDC',
      deliveryarea: 'Auto-Sous Sol 1',
      affectedconstructionsite: 'Chantier1',
      active: true
    },
    {
      id: 'mmvccxvmmm',
      name: 'Chariot Elevateur T1',
      deliveryarea: 'Auto-Sous Sol 2',
      affectedconstructionsite: 'Chantier2',
      active: true
    },
    {
      id: 'mmsdxxxmssdmm',
      name: 'Grue T1',
      deliveryarea: 'Auto-Sous Sol 2',
      affectedconstructionsite: 'Chantier2',
      active: true
    },
    {
      id: 'mmsdmssdmm',
      name: 'Grue T3',
      deliveryarea: 'Auto-Sous Sol 1',
      affectedconstructionsite: 'Chantier1',
      active: true
    }
  ],
  siteProviders: [
    {
      id: 'qdsd',
      compagnyName: '3C',
      providerName: 'COFRISET',
      address: '92 Pont de Gennevilliers, Clichy, France',
      email: 'lchartier@cuisine3c.com',
      contacts: '0102020303',
      enabled: true
    },
    {
      id: 'sdsqdsq',
      compagnyName: 'AJB ISOLATIONS',
      providerName: 'AJB ISOLATIONS',
      address: '69 rue Epluche, PierreLaye, France',
      email: 'jeanpierre@orange.com',
      contacts: '0102402930',
      enabled: true
    },
    {
      id: 'lklklk',
      compagnyName: 'AJB ISOLATIONS',
      providerName: 'Knauf',
      address: '54 Zone de Gennevilliers, wolfgantzen, France',
      email: 'qsdr@zoedf.com',
      contacts: '0165372687',
      enabled: true
    },
    {
      id: 'bnxbsn',
      compagnyName: 'ARBONIS',
      providerName: 'ACCESS',
      address: 'Saint-Ouen, France',
      email: 'saintouen@gmail.com',
      contacts: '010204527',
      enabled: true
    },
    {
      id: 'oisqd',
      compagnyName: 'ARBONIS',
      providerName: 'ARBONIS - chemille',
      address: 'chemiller zone NA, Clichy, France',
      email: 'arbonis@orange.com',
      contacts: '010205467892',
      enabled: true
    },
    {
      id: 'oissdasdqd',
      compagnyName: 'ARBONIS - v2',
      providerName: 'ARBONIS - grigny',
      address: 'chemiller zone NA, Clichy, France',
      email: 'arbsdonis@orange.com',
      contacts: '010205467892',
      enabled: true
    }
  ],
  compagny: [
    {
      id: 'asfxzada',
      name: 'Microsoft',
      address: '53 rue salvador',
      postalcode: '75010',
      email: 'microsoft@microsoft.com',
      phonenumber: '0135026578',
      affectedconstructionsite: 'Chantier3',
      active: true
    },
    {
      id: 'asfxzada',
      name: 'Google',
      address: '75 rue dido',
      postalcode: '94050',
      email: 'google@google.com',
      phonenumber: '0134526578',
      affectedconstructionsite: 'Chantier1',
      active: true
    },
    {
      id: 'asfxzada',
      name: 'vNext',
      address: '32 rue tolbiac',
      postalcode: '75020',
      email: 'vnext@vnext.com',
      phonenumber: '01752367895',
      affectedconstructionsite: 'Chantier2',
      active: false
    }
  ]
})
