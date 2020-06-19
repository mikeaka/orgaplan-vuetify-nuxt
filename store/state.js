export default () => ({
  loading: false,
  deliveryAreas: [
    {
      id: 'sssdss',
      name: 'Auto-Sous Sol 1',
      floornumber: '2',
      floorname: ['Etage1', 'Etage2'],
      defaultmaterials: 'LIFT 01',
      additionalmaterial: 'Chariot Elevateur T1 RDC',
      affectedconstructionsite: 'Chantier1',
      constructionsiteId: 'azertyui',
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
      constructionsiteId: 'azertysdsdqui',
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
      constructionsiteId: 'azertysdsdqui',
      active: true
    },
    {
      id: 'wwsdexvww',
      name: 'Centrale T3:T4',
      floornumber: '2',
      floorname: ['Etage1', 'Etage2'],
      defaultmaterials: 'LIFT 02',
      additionalmaterial: 'Chariot Elevateur T1 RDC',
      affectedconstructionsite: 'Chantier1',
      constructionsiteId: 'azertyui',
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
      responsible: 'Georges',
      address: '74 rue defour',
      postalCode: '94050'
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
      responsible: 'Marc',
      address: '15 boulevard georges',
      postalCode: '75012'
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
      responsible: 'John',
      address: '7 rue cabri',
      postalCode: '94150'
    }
  ],
  siteMaterials: [
    {
      id: 'fffff',
      name: 'LIFT 01',
      deliveryarea: 'Centrale T1:T2',
      affectedconstructionsite: 'Chantier3',
      constructionsiteId: 'azeqsdqxcsdqrtyui',
      active: true
    },
    {
      id: 'hhhhh',
      name: 'LIFT 02',
      deliveryarea: 'Auto-Sous Sol 1',
      affectedconstructionsite: 'Chantier1',
      constructionsiteId: 'azertyui',
      active: true
    },
    {
      id: 'kkkkk',
      name: 'Chariot Elevateur T1 RDC',
      deliveryarea: 'Auto-Sous Sol 1',
      affectedconstructionsite: 'Chantier1',
      constructionsiteId: 'azertyui',
      active: true
    },
    {
      id: 'mmvccxvmmm',
      name: 'Chariot Elevateur T1',
      deliveryarea: 'Auto-Sous Sol 2',
      affectedconstructionsite: 'Chantier2',
      constructionsiteId: 'azertysdsdqui',
      active: true
    },
    {
      id: 'mmsdxxxmssdmm',
      name: 'Grue T1',
      deliveryarea: 'Auto-Sous Sol 2',
      affectedconstructionsite: 'Chantier2',
      constructionsiteId: 'azertysdsdqui',
      active: true
    },
    {
      id: 'mmsdmssdmm',
      name: 'Grue T3',
      deliveryarea: 'Auto-Sous Sol 1',
      affectedconstructionsite: 'Chantier1',
      constructionsiteId: 'azertyui',
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
      constructionsiteId: 'azertyui',
      enabled: true
    },
    {
      id: 'sdsqdsq',
      compagnyName: 'AJB ISOLATIONS',
      providerName: 'AJB ISOLATIONS',
      address: '69 rue Epluche, PierreLaye, France',
      email: 'jeanpierre@orange.com',
      contacts: '0102402930',
      constructionsiteId: 'azeqsdqxcsdqrtyui',
      enabled: true
    },
    {
      id: 'lklklk',
      compagnyName: 'AJB ISOLATIONS',
      providerName: 'Knauf',
      address: '54 Zone de Gennevilliers, wolfgantzen, France',
      email: 'qsdr@zoedf.com',
      contacts: '0165372687',
      constructionsiteId: 'azertyui',
      enabled: true
    },
    {
      id: 'bnxbsn',
      compagnyName: 'ARBONIS',
      providerName: 'ACCESS',
      address: 'Saint-Ouen, France',
      email: 'saintouen@gmail.com',
      contacts: '010204527',
      constructionsiteId: 'azeqsdqxcsdqrtyui',
      enabled: true
    },
    {
      id: 'oisqd',
      compagnyName: 'ARBONIS',
      providerName: 'ARBONIS - chemille',
      address: 'chemiller zone NA, Clichy, France',
      email: 'arbonis@orange.com',
      contacts: '010205467892',
      constructionsiteId: 'azertysdsdqui',
      enabled: true
    },
    {
      id: 'oissdasdqd',
      compagnyName: 'ARBONIS - v2',
      providerName: 'ARBONIS - grigny',
      address: 'chemiller zone NA, Clichy, France',
      email: 'arbsdonis@orange.com',
      contacts: '010205467892',
      constructionsiteId: 'azertysdsdqui',
      enabled: true
    }
  ],
  compagny: [
    {
      id: 'asjkjkzada',
      name: 'Microsoft',
      address: '53 rue salvador',
      postalcode: '75010',
      email: 'microsoft@microsoft.com',
      phonenumber: '0135026578',
      affectedconstructionsite: 'Chantier3',
      constructionsiteId: 'azeqsdqxcsdqrtyui',
      active: true
    },
    {
      id: 'asfxzaddda',
      name: 'Google',
      address: '75 rue dido',
      postalcode: '94050',
      email: 'google@google.com',
      phonenumber: '0134526578',
      affectedconstructionsite: 'Chantier1',
      constructionsiteId: 'azertyui',
      active: true
    },
    {
      id: 'sadcada',
      name: 'vNext',
      address: '32 rue tolbiac',
      postalcode: '75020',
      email: 'vnext@vnext.com',
      phonenumber: '01752367895',
      affectedconstructionsite: 'Chantier2',
      constructionsiteId: 'azertysdsdqui',
      active: false
    }
  ],
  lockers: [
    {
      id: '12345',
      name: 'Casier1',
      availability: 'occupe',
      occupiedBy: 'Jean',
      occupiedByCompagnyId: 'asfxzada',
      constructionsiteId: 'azertyui',
      startDate: '',
      endDate: ''
    },
    {
      id: '64578',
      name: 'Casier2',
      availability: 'occupe',
      occupiedBy: 'Greg',
      constructionsiteId: 'azeqsdqxcsdqrtyui',
      occupiedByCompagnyId: 'sadcada',
      startDate: '',
      endDate: ''
    },
    {
      id: '9784825',
      name: 'Casier3',
      availability: 'libre',
      occupiedBy: 'Samir',
      constructionsiteId: 'azertysdsdqui',
      occupiedByCompagnyId: 'asfxzaddda',
      startDate: '',
      endDate: ''
    },
    {
      id: '91254225',
      name: 'Casier4',
      availability: 'libre',
      occupiedBy: 'Jacques',
      constructionsiteId: 'azertysdsdqui',
      occupiedByCompagnyId: 'asjkjkzada',
      startDate: '',
      endDate: ''
    }
  ],
  users: [{ id: 'iuydsa', username: 'mike', islogged: 'true' }]
})
