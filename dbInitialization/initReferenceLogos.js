const sql = require('better-sqlite3');
const db = sql('logos.db');

const logos = [
{logoUrl: '/referenceLogos/alMohamadi.png'},
{logoUrl: '/referenceLogos/baresel.png'},
{logoUrl: '/referenceLogos/barFloor.png'},
{logoUrl: '/referenceLogos/bolnicaTravnik.png'},
{logoUrl: '/referenceLogos/bstBau.png'},
{logoUrl: '/referenceLogos/centarZaKulturu.png'},
{logoUrl: '/referenceLogos/dm.png'},
{logoUrl: '/referenceLogos/ekoNovoGradnja.png'},
{logoUrl: '/referenceLogos/emInvest.png'},
{logoUrl: '/referenceLogos/esof.png'},
{logoUrl: '/referenceLogos/falcon.png'},
{logoUrl: '/referenceLogos/fbihMinistarstvo.png'},
{logoUrl: '/referenceLogos/frabag.png'},
{logoUrl: '/referenceLogos/gradex.png'},
{logoUrl: '/referenceLogos/greenStone.png'},
{logoUrl: '/referenceLogos/ibrahimPasinaMedresa.png'},
{logoUrl: '/referenceLogos/infraGroup.png'},
{logoUrl: '/referenceLogos/izvorDobrocinstva.png'},
{logoUrl: '/referenceLogos/koster.png'},
{logoUrl: '/referenceLogos/memorijalniCentar.png'},
{logoUrl: '/referenceLogos/mizTravnik.png'},
{logoUrl: '/referenceLogos/novaVogosca.png'},
{logoUrl: '/referenceLogos/obnovaIGradnja.png'},
{logoUrl: '/referenceLogos/okiUpravitelj.png'},
{logoUrl: '/referenceLogos/opcinaTravnik.png'},
{logoUrl: '/referenceLogos/parkResidence.png'},
{logoUrl: '/referenceLogos/phoneix.png'},
{logoUrl: '/referenceLogos/porr.png'},
{logoUrl: '/referenceLogos/riverinaWorld.png'},
{logoUrl: '/referenceLogos/sarajevostan.png'},
{logoUrl: '/referenceLogos/sbkMinistarstvo.png'},
{logoUrl: '/referenceLogos/senigor.png'},
{logoUrl: '/referenceLogos/stanogradnja.png'},
{logoUrl: '/referenceLogos/tika.png'},
{logoUrl: '/referenceLogos/toplaneSarajevo.png'},
{logoUrl: '/referenceLogos/zoraStan.png'}
];

db.prepare(`
  CREATE TABLE IF NOT EXISTS logos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,    
    logoUrl TEXT NOT NULL
  ) 
`).run();

function initData() {
  const stmt = db.prepare (`
    INSERT INTO logos VALUES (
      null,
      @logoUrl
    )
  `);
  for (const logo  of logos) {
    stmt.run(logo);
  }  
}
initData();