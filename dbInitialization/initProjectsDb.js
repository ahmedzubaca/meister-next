const sql = require('better-sqlite3');
const db = sql('projects.db');

const projects = [
  { 
    projectId: 'fasada',    
    title: "FASADA POTOČARI",
    location: "Potočari",
    investor: "TIKA",
    size: "",
    imageType: 'cover',    
    imageUrl: '/projectsImages/p1_fasadaPotocari/p1_cover.webp'
  },
  { 
    projectId: 'fasada',    
    title: "FASADA POTOČARI",
    location: "Potočari",
    investor: "TIKA",
    size: "",
    imageType: 'content',    
    imageUrl: '/projectsImages/p1_fasadaPotocari/p11.webp'
  }, 
  { 
    projectId: 'fasada',    
    title: "FASADA POTOČARI",
    location: "Potočari",
    investor: "TIKA",
    size: "",
    imageType: 'content',    
    imageUrl: '/projectsImages/p1_fasadaPotocari/p12.webp'
  }, 
  { 
    projectId: 'fasada',    
    title: "FASADA POTOČARI",
    location: "Potočari",
    investor: "TIKA",
    size: "",
    imageType: 'content',    
    imageUrl: '/projectsImages/p1_fasadaPotocari/p13.webp'
  }, 
  { 
    projectId: 'fasada',    
    title: "FASADA POTOČARI",
    location: "Potočari",
    investor: "TIKA",
    size: "",
    imageType: 'content',    
    imageUrl: '/projectsImages/p1_fasadaPotocari/p14_video.mp4'
  },         
  { 
    projectId: 'p2-kiseljak-bar-floor',   
    title: 'KISELJAK BAR FLOOR',
    location: 'Kiseljak',
    investor: 'BAR FLOR d.o.o.',
    size: '16 000',
    imageType: 'cover',    
    imageUrl: '/projectsImages/p2_kiseljakBarFloor/p2_cover.webp'
  },
  { 
    projectId: 'p2-kiseljak-bar-floor',   
    title: 'KISELJAK BAR FLOOR',
    location: 'Kiseljak',
    investor: 'BAR FLOR d.o.o.',
    size: '16 000',
    imageType: 'content',    
    imageUrl: '/projectsImages/p2_kiseljakBarFloor/p21.webp'
  },
  { 
    projectId: 'p2-kiseljak-bar-floor',   
    title: 'KISELJAK BAR FLOOR',
    location: 'Kiseljak',
    investor: 'BAR FLOR d.o.o.',
    size: '16 000',
    imageType: 'content',    
    imageUrl: '/projectsImages/p2_kiseljakBarFloor/p22.webp'
  },
  { 
    projectId: 'p2-kiseljak-bar-floor',   
    title: 'KISELJAK BAR FLOOR',
    location: 'Kiseljak',
    investor: 'BAR FLOR d.o.o.',
    size: '16 000',
    imageType: 'content',    
    imageUrl: '/projectsImages/p2_kiseljakBarFloor/p23.webp'
  },
  { 
    projectId: 'p2-kiseljak-bar-floor',   
    title: 'KISELJAK BAR FLOOR',
    location: 'Kiseljak',
    investor: 'BAR FLOR d.o.o.',
    size: '16 000',
    imageType: 'content',    
    imageUrl: '/projectsImages/p2_kiseljakBarFloor/p24.webp'
  },      
  { 
    projectId: 'p3-krov-potocari',   
    title: 'KROV POTOČARI',
    location: 'Potočari',
    investor: 'TIKA',
    size: '16 500',
    imageType: 'cover',   
    imageUrl: '/projectsImages/p3_krovPotocari/p3_cover.webp'
  },
  { 
    projectId: 'p3-krov-potocari',   
    title: 'KROV POTOČARI',
    location: 'Potočari',
    investor: 'TIKA',
    size: '16 500',
    imageType: 'content',   
    imageUrl: '/projectsImages/p3_krovPotocari/p31.webp'
  },
  { 
    projectId: 'p3-krov-potocari',   
    title: 'KROV POTOČARI',
    location: 'Potočari',
    investor: 'TIKA',
    size: '16 500',
    imageType: 'content',   
    imageUrl: '/projectsImages/p3_krovPotocari/p32.webp'
  },
  { 
    projectId: 'p3-krov-potocari',   
    title: 'KROV POTOČARI',
    location: 'Potočari',
    investor: 'TIKA',
    size: '16 500',
    imageType: 'content',   
    imageUrl: '/projectsImages/p3_krovPotocari/p33_video.mp4'
  },  
  { 
    projectId: 'p4-nova-vogosca',   
    title: 'NOVA VOGOŠĆA',
    location: 'Vogošća',
    investor: 'NOVA VOGOŠĆA d.o.o.',
    size: '20 000',
    imageType: 'cover',
    imageUrl: '/projectsImages/p4_novaVogosca/p4_cover.webp'
  },
  { 
    projectId: 'p4-nova-vogosca',   
    title: 'NOVA VOGOŠĆA',
    location: 'Vogošća',
    investor: 'NOVA VOGOŠĆA d.o.o.',
    size: '20 000',
    imageType: 'content',
    imageUrl: '/projectsImages/p4_novaVogosca/p41.webp'
  },
  { 
    projectId: 'p4-nova-vogosca',   
    title: 'NOVA VOGOŠĆA',
    location: 'Vogošća',
    investor: 'NOVA VOGOŠĆA d.o.o.',
    size: '20 000',
    imageType: 'content',
    imageUrl: '/projectsImages/p4_novaVogosca/p42.webp'
  },
  { 
    projectId: 'p5-via-pax',   
    title: 'VIA PAX',
    location: 'Sarajevo',
    investor: '',
    size: '3 800',
    imageType: 'cover',   
    imageUrl: '/projectsImages/p5_viaPax/p5_cover.webp'
  },
  { 
    projectId: 'p5-via-pax',   
    title: 'VIA PAX',
    location: 'Sarajevo',
    investor: '',
    size: '3 800',
    imageType: 'content',   
    imageUrl: '/projectsImages/p5_viaPax/p51.webp'
  },
  { 
    projectId: 'p5-via-pax',   
    title: 'VIA PAX',
    location: 'Sarajevo',
    investor: '',
    size: '3 800',
    imageType: 'content',   
    imageUrl: '/projectsImages/p5_viaPax/p52.webp'
  },
  { 
    projectId: 'p5-via-pax',   
    title: 'VIA PAX',
    location: 'Sarajevo',
    investor: '',
    size: '3 800',
    imageType: 'content',   
    imageUrl: '/projectsImages/p5_viaPax/p53_video.mp4'
  },  
  { 
    projectId: 'p6-villa-verde',   
    title: 'VILLA VERDE',
    location: 'Vogošća',
    investor: '',
    size: '3 500',
    imageType: 'cover',   
    imageUrl: '/projectsImages/p6_villaVerdeVogosca/p6_cover.webp'
  },
  { 
    projectId: 'p6-villa-verde',   
    title: 'VILLA VERDE',
    location: 'Vogošća',
    investor: '',
    size: '3 500',
    imageType: 'content',   
    imageUrl: '/projectsImages/p6_villaVerdeVogosca/p61.webp'
  },
  { 
    projectId: 'p6-villa-verde',   
    title: 'VILLA VERDE',
    location: 'Vogošća',
    investor: '',
    size: '3 500',
    imageType: 'content',   
    imageUrl: '/projectsImages/p6_villaVerdeVogosca/p62_video.mp4'
  }     
];

db.prepare(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    projectId TEXT NOT NULL,
    title TEXT NOT NULL,
    location TEXT NOT NULL,
    investor TEXT NOT NULL,
    size TEXT NOT NULL,
    imageType TEXT NOT NULL,
    imageUrl TEXT NOT NULL
  ) 
`).run();

function initData() {
  const stmt = db.prepare (`
    INSERT INTO projects VALUES (
      null,
      @projectId,
      @title,
      @location,
      @investor,
      @size,
      @imageType,
      @imageUrl
    )
  `);
  for (const project of projects) {
    stmt.run(project);
  }  
}
initData();