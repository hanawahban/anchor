// All 50 US states + DC
export const STATES = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DC', name: 'Washington D.C.' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
]

/**
 * District data for states with highest immigrant family populations.
 * Structure: { [stateCode]: { [cityName]: [{ id, name, enrollment }] } }
 * Cities are ordered by population (largest first).
 * enrollment is approximate, used only for "I'm not sure" fallback ordering.
 */
export const DISTRICT_DATA = {
  CA: {
    'Los Angeles': [
      { id: 'lausd', name: 'Los Angeles Unified School District', enrollment: 596000 },
      { id: 'glendale-usd', name: 'Glendale Unified School District', enrollment: 25000 },
      { id: 'burbank-usd', name: 'Burbank Unified School District', enrollment: 16000 },
      { id: 'pasadena-usd', name: 'Pasadena Unified School District', enrollment: 15500 },
    ],
    'San Diego': [
      { id: 'sdusd', name: 'San Diego Unified School District', enrollment: 100000 },
      { id: 'sweetwater', name: 'Sweetwater Union High School District', enrollment: 43000 },
      { id: 'cajon-valley', name: 'Cajon Valley Union School District', enrollment: 17000 },
    ],
    'San Jose': [
      { id: 'sj-unified', name: 'San Jose Unified School District', enrollment: 32000 },
      { id: 'east-side-union', name: 'East Side Union High School District', enrollment: 25000 },
      { id: 'evergreen', name: 'Evergreen School District', enrollment: 20000 },
      { id: 'alum-rock', name: 'Alum Rock Union School District', enrollment: 12000 },
    ],
    'San Francisco': [
      { id: 'sfusd', name: 'San Francisco Unified School District', enrollment: 52000 },
    ],
    'Fresno': [
      { id: 'fresno-unified', name: 'Fresno Unified School District', enrollment: 74000 },
      { id: 'clovis-unified', name: 'Clovis Unified School District', enrollment: 43000 },
      { id: 'central-unified', name: 'Central Unified School District', enrollment: 14000 },
    ],
    'Sacramento': [
      { id: 'sacramento-city', name: 'Sacramento City Unified School District', enrollment: 42000 },
      { id: 'elk-grove', name: 'Elk Grove Unified School District', enrollment: 63000 },
      { id: 'san-juan', name: 'San Juan Unified School District', enrollment: 41000 },
    ],
    'Long Beach': [
      { id: 'lbusd', name: 'Long Beach Unified School District', enrollment: 69000 },
    ],
    'Oakland': [
      { id: 'ousd', name: 'Oakland Unified School District', enrollment: 36000 },
      { id: 'san-leandro', name: 'San Leandro Unified School District', enrollment: 9000 },
    ],
    'Bakersfield': [
      { id: 'bcsd', name: 'Bakersfield City School District', enrollment: 28000 },
      { id: 'panama-buena-vista', name: 'Panama-Buena Vista Union School District', enrollment: 20000 },
    ],
    'Anaheim': [
      { id: 'anaheim-esd', name: 'Anaheim Elementary School District', enrollment: 17000 },
      { id: 'anaheim-union', name: 'Anaheim Union High School District', enrollment: 30000 },
    ],
    'Santa Ana': [
      { id: 'sausd', name: 'Santa Ana Unified School District', enrollment: 45000 },
    ],
    'Riverside': [
      { id: 'rusd', name: 'Riverside Unified School District', enrollment: 42000 },
    ],
    'Stockton': [
      { id: 'susd', name: 'Stockton Unified School District', enrollment: 40000 },
      { id: 'lincoln-unified', name: 'Lincoln Unified School District', enrollment: 12000 },
    ],
    'Irvine': [
      { id: 'iusd', name: 'Irvine Unified School District', enrollment: 34000 },
    ],
    'Chula Vista': [
      { id: 'cvesd', name: 'Chula Vista Elementary School District', enrollment: 28000 },
      { id: 'sweetwater-hs', name: 'Sweetwater Union High School District', enrollment: 43000 },
    ],
    'Fremont': [
      { id: 'fusd', name: 'Fremont Unified School District', enrollment: 34000 },
    ],
    'San Bernardino': [
      { id: 'sbcusd', name: 'San Bernardino City Unified School District', enrollment: 53000 },
    ],
    'Modesto': [
      { id: 'mcusd', name: 'Modesto City Schools', enrollment: 30000 },
    ],
    'Fontana': [
      { id: 'fonusd', name: 'Fontana Unified School District', enrollment: 40000 },
    ],
    'Moreno Valley': [
      { id: 'mvusd', name: 'Moreno Valley Unified School District', enrollment: 34000 },
    ],
  },

  TX: {
    'Houston': [
      { id: 'houston-isd', name: 'Houston Independent School District', enrollment: 194000 },
      { id: 'cypress-fairbanks', name: 'Cypress-Fairbanks Independent School District', enrollment: 116000 },
      { id: 'katy-isd', name: 'Katy Independent School District', enrollment: 82000 },
      { id: 'aldine-isd', name: 'Aldine Independent School District', enrollment: 67000 },
      { id: 'spring-branch', name: 'Spring Branch Independent School District', enrollment: 35000 },
    ],
    'San Antonio': [
      { id: 'northside-isd', name: 'Northside Independent School District', enrollment: 106000 },
      { id: 'north-east-isd', name: 'North East Independent School District', enrollment: 67000 },
      { id: 'sa-isd', name: 'San Antonio Independent School District', enrollment: 47000 },
      { id: 'south-san-isd', name: 'South San Antonio Independent School District', enrollment: 10000 },
    ],
    'Dallas': [
      { id: 'disd', name: 'Dallas Independent School District', enrollment: 144000 },
      { id: 'garland-isd', name: 'Garland Independent School District', enrollment: 55000 },
      { id: 'richardson-isd', name: 'Richardson Independent School District', enrollment: 40000 },
      { id: 'carrollton-fb', name: 'Carrollton-Farmers Branch Independent School District', enrollment: 26000 },
    ],
    'Austin': [
      { id: 'aisd', name: 'Austin Independent School District', enrollment: 76000 },
      { id: 'round-rock-isd', name: 'Round Rock Independent School District', enrollment: 50000 },
      { id: 'pflugerville-isd', name: 'Pflugerville Independent School District', enrollment: 26000 },
      { id: 'manor-isd', name: 'Manor Independent School District', enrollment: 10000 },
    ],
    'Fort Worth': [
      { id: 'fwisd', name: 'Fort Worth Independent School District', enrollment: 83000 },
      { id: 'keller-isd', name: 'Keller Independent School District', enrollment: 35000 },
      { id: 'birdville-isd', name: 'Birdville Independent School District', enrollment: 24000 },
    ],
    'El Paso': [
      { id: 'episd', name: 'El Paso Independent School District', enrollment: 56000 },
      { id: 'socorro-isd', name: 'Socorro Independent School District', enrollment: 47000 },
      { id: 'ysleta-isd', name: 'Ysleta Independent School District', enrollment: 43000 },
    ],
    'Arlington': [
      { id: 'aisd-arlington', name: 'Arlington Independent School District', enrollment: 60000 },
    ],
    'Corpus Christi': [
      { id: 'ccisd', name: 'Corpus Christi Independent School District', enrollment: 38000 },
    ],
    'Plano': [
      { id: 'pisd', name: 'Plano Independent School District', enrollment: 53000 },
    ],
    'Laredo': [
      { id: 'lisd', name: 'Laredo Independent School District', enrollment: 26000 },
      { id: 'uisd-laredo', name: 'United Independent School District', enrollment: 44000 },
    ],
    'Lubbock': [
      { id: 'lubbock-isd', name: 'Lubbock Independent School District', enrollment: 28000 },
    ],
    'Garland': [
      { id: 'garland-isd-tx', name: 'Garland Independent School District', enrollment: 55000 },
    ],
    'Irving': [
      { id: 'irving-isd', name: 'Irving Independent School District', enrollment: 35000 },
    ],
    'Frisco': [
      { id: 'frisco-isd', name: 'Frisco Independent School District', enrollment: 63000 },
    ],
    'Amarillo': [
      { id: 'amarillo-isd', name: 'Amarillo Independent School District', enrollment: 32000 },
    ],
    'McKinney': [
      { id: 'mckinney-isd', name: 'McKinney Independent School District', enrollment: 24000 },
    ],
    'Grand Prairie': [
      { id: 'gpisd', name: 'Grand Prairie Independent School District', enrollment: 28000 },
    ],
    'Killeen': [
      { id: 'kisd', name: 'Killeen Independent School District', enrollment: 44000 },
    ],
    'Mesquite': [
      { id: 'mesquite-isd', name: 'Mesquite Independent School District', enrollment: 38000 },
    ],
    'Pasadena': [
      { id: 'pasadena-isd', name: 'Pasadena Independent School District', enrollment: 53000 },
    ],
  },

  FL: {
    'Jacksonville': [
      { id: 'dcps', name: 'Duval County Public Schools', enrollment: 126000 },
    ],
    'Miami': [
      { id: 'mdcps', name: 'Miami-Dade County Public Schools', enrollment: 341000 },
    ],
    'Tampa': [
      { id: 'hcps', name: 'Hillsborough County Public Schools', enrollment: 225000 },
    ],
    'Orlando': [
      { id: 'ocps', name: 'Orange County Public Schools', enrollment: 215000 },
    ],
    'St. Petersburg': [
      { id: 'pcsb', name: 'Pinellas County Schools', enrollment: 103000 },
    ],
    'Hialeah': [
      { id: 'mdcps-hialeah', name: 'Miami-Dade County Public Schools', enrollment: 341000 },
    ],
    'Port St. Lucie': [
      { id: 'slcsb', name: 'St. Lucie County School Board', enrollment: 42000 },
    ],
    'Cape Coral': [
      { id: 'lcsb', name: 'Lee County School Board', enrollment: 100000 },
    ],
    'Tallahassee': [
      { id: 'leon', name: 'Leon County Schools', enrollment: 34000 },
    ],
    'Fort Lauderdale': [
      { id: 'bcps', name: 'Broward County Public Schools', enrollment: 256000 },
    ],
    'Pembroke Pines': [
      { id: 'bcps-pp', name: 'Broward County Public Schools', enrollment: 256000 },
    ],
    'Hollywood': [
      { id: 'bcps-hw', name: 'Broward County Public Schools', enrollment: 256000 },
    ],
    'Miramar': [
      { id: 'bcps-mi', name: 'Broward County Public Schools', enrollment: 256000 },
    ],
    'Gainesville': [
      { id: 'acps', name: 'Alachua County Public Schools', enrollment: 29000 },
    ],
    'Coral Springs': [
      { id: 'bcps-cs', name: 'Broward County Public Schools', enrollment: 256000 },
    ],
    'Miami Gardens': [
      { id: 'mdcps-mg', name: 'Miami-Dade County Public Schools', enrollment: 341000 },
    ],
    'Clearwater': [
      { id: 'pcsb-cl', name: 'Pinellas County Schools', enrollment: 103000 },
    ],
    'Palm Bay': [
      { id: 'bcsd-fl', name: 'Brevard County Schools', enrollment: 73000 },
    ],
    'Pompano Beach': [
      { id: 'bcps-pb', name: 'Broward County Public Schools', enrollment: 256000 },
    ],
    'West Palm Beach': [
      { id: 'pbcsd', name: 'Palm Beach County School District', enrollment: 192000 },
    ],
  },

  NY: {
    'New York City': [
      { id: 'nycdoe', name: 'New York City Department of Education', enrollment: 1070000 },
    ],
    'Buffalo': [
      { id: 'bcsd-ny', name: 'Buffalo City School District', enrollment: 32000 },
    ],
    'Rochester': [
      { id: 'rcsd', name: 'Rochester City School District', enrollment: 27000 },
    ],
    'Yonkers': [
      { id: 'yps', name: 'Yonkers Public Schools', enrollment: 27000 },
    ],
    'Syracuse': [
      { id: 'scsd', name: 'Syracuse City School District', enrollment: 21000 },
    ],
    'Albany': [
      { id: 'acsd-ny', name: 'Albany City School District', enrollment: 9000 },
    ],
    'New Rochelle': [
      { id: 'nrcsd', name: 'New Rochelle City School District', enrollment: 11000 },
    ],
    'Mount Vernon': [
      { id: 'mvcsd', name: 'Mount Vernon City School District', enrollment: 9000 },
    ],
    'Schenectady': [
      { id: 'scsd-ny', name: 'Schenectady City School District', enrollment: 10000 },
    ],
    'Utica': [
      { id: 'ucsd', name: 'Utica City School District', enrollment: 10000 },
    ],
  },

  AZ: {
    'Phoenix': [
      { id: 'phoenix-union', name: 'Phoenix Union High School District', enrollment: 28000 },
      { id: 'phoenix-esd', name: 'Phoenix Elementary School District', enrollment: 24000 },
      { id: 'isaac-esd', name: 'Isaac Elementary School District', enrollment: 8000 },
      { id: 'murphy-esd', name: 'Murphy Elementary School District', enrollment: 3000 },
    ],
    'Tucson': [
      { id: 'tusd', name: 'Tucson Unified School District', enrollment: 48000 },
      { id: 'sunnyside-usd', name: 'Sunnyside Unified School District', enrollment: 17000 },
      { id: 'amphitheater', name: 'Amphitheater Public Schools', enrollment: 12000 },
    ],
    'Mesa': [
      { id: 'musd', name: 'Mesa Unified School District', enrollment: 63000 },
    ],
    'Chandler': [
      { id: 'cusd', name: 'Chandler Unified School District', enrollment: 43000 },
    ],
    'Scottsdale': [
      { id: 'susd-az', name: 'Scottsdale Unified School District', enrollment: 26000 },
    ],
    'Glendale': [
      { id: 'gusd', name: 'Glendale Union High School District', enrollment: 14000 },
      { id: 'glendale-esd', name: 'Glendale Elementary School District', enrollment: 13000 },
    ],
    'Gilbert': [
      { id: 'gusd-az', name: 'Gilbert Unified School District', enrollment: 40000 },
    ],
    'Tempe': [
      { id: 'tusd-az', name: 'Tempe Union High School District', enrollment: 16000 },
      { id: 'tempe-esd', name: 'Tempe Elementary School District', enrollment: 10000 },
    ],
    'Peoria': [
      { id: 'pusd-az', name: 'Peoria Unified School District', enrollment: 40000 },
    ],
    'Surprise': [
      { id: 'dvusd', name: 'Dysart Unified School District', enrollment: 38000 },
    ],
    'Goodyear': [
      { id: 'litchfield', name: 'Litchfield Elementary School District', enrollment: 11000 },
    ],
    'Avondale': [
      { id: 'agua-fria', name: 'Agua Fria Union High School District', enrollment: 12000 },
    ],
    'Flagstaff': [
      { id: 'fusd-az', name: 'Flagstaff Unified School District', enrollment: 12000 },
    ],
    'Buckeye': [
      { id: 'besd', name: 'Buckeye Elementary School District', enrollment: 8000 },
    ],
    'Casa Grande': [
      { id: 'cgusd', name: 'Casa Grande Union High School District', enrollment: 4000 },
    ],
    'Prescott': [
      { id: 'pusd-prescott', name: 'Prescott Unified School District', enrollment: 5000 },
    ],
  },

  IL: {
    'Chicago': [
      { id: 'cps', name: 'Chicago Public Schools', enrollment: 340000 },
    ],
    'Aurora': [
      { id: 'aurora-east', name: 'Aurora East Unified School District 131', enrollment: 13000 },
      { id: 'aurora-west', name: 'Aurora West Unified School District 129', enrollment: 16000 },
    ],
    'Joliet': [
      { id: 'joliet-public', name: 'Joliet Public School District 86', enrollment: 10000 },
      { id: 'joliet-township', name: 'Joliet Township High School District 204', enrollment: 5000 },
    ],
    'Naperville': [
      { id: 'cusd203', name: 'Naperville Community Unit School District 203', enrollment: 16000 },
      { id: 'dupage204', name: 'Indian Prairie Community Unit School District 204', enrollment: 28000 },
    ],
    'Rockford': [
      { id: 'rps205', name: 'Rockford Public School District 205', enrollment: 28000 },
    ],
    'Springfield': [
      { id: 'sps186', name: 'Springfield Public School District 186', enrollment: 14000 },
    ],
    'Elgin': [
      { id: 'u46', name: 'School District U-46', enrollment: 40000 },
    ],
    'Peoria': [
      { id: 'psd150', name: 'Peoria Public Schools District 150', enrollment: 14000 },
    ],
    'Champaign': [
      { id: 'cusd4', name: 'Champaign Community Unit School District 4', enrollment: 10000 },
    ],
    'Waukegan': [
      { id: 'wusd60', name: 'Waukegan Community Unit School District 60', enrollment: 17000 },
    ],
    'Cicero': [
      { id: 'csd99', name: 'J.S. Morton High School District 201', enrollment: 8000 },
    ],
    'Evanston': [
      { id: 'eths202', name: 'Evanston Township High School District 202', enrollment: 4000 },
      { id: 'evsd65', name: 'Evanston/Skokie Community Consolidated School District 65', enrollment: 7000 },
    ],
  },

  GA: {
    'Atlanta': [
      { id: 'aps', name: 'Atlanta Public Schools', enrollment: 52000 },
      { id: 'dekalb', name: 'DeKalb County School District', enrollment: 98000 },
      { id: 'fulton', name: 'Fulton County Schools', enrollment: 94000 },
    ],
    'Augusta': [
      { id: 'rcss', name: 'Richmond County School System', enrollment: 31000 },
    ],
    'Columbus': [
      { id: 'mcsd', name: 'Muscogee County School District', enrollment: 32000 },
    ],
    'Savannah': [
      { id: 'sccpss', name: 'Savannah-Chatham County Public Schools', enrollment: 37000 },
    ],
    'Athens': [
      { id: 'accusd', name: 'Clarke County School District', enrollment: 12000 },
    ],
    'Sandy Springs': [
      { id: 'fulton-ss', name: 'Fulton County Schools', enrollment: 94000 },
    ],
    'Roswell': [
      { id: 'fulton-rw', name: 'Fulton County Schools', enrollment: 94000 },
    ],
    'Macon': [
      { id: 'bcss', name: 'Bibb County School District', enrollment: 25000 },
    ],
    'Johns Creek': [
      { id: 'fulton-jc', name: 'Fulton County Schools', enrollment: 94000 },
    ],
    'Albany': [
      { id: 'dcss', name: 'Dougherty County School System', enrollment: 15000 },
    ],
    'Warner Robins': [
      { id: 'hcss', name: 'Houston County School System', enrollment: 29000 },
    ],
    'Alpharetta': [
      { id: 'fulton-al', name: 'Fulton County Schools', enrollment: 94000 },
    ],
    'Marietta': [
      { id: 'mcs', name: 'Marietta City Schools', enrollment: 9000 },
      { id: 'cobb', name: 'Cobb County School District', enrollment: 111000 },
    ],
  },

  NC: {
    'Charlotte': [
      { id: 'cms', name: 'Charlotte-Mecklenburg Schools', enrollment: 148000 },
    ],
    'Raleigh': [
      { id: 'wcpss', name: 'Wake County Public School System', enrollment: 158000 },
    ],
    'Greensboro': [
      { id: 'gcsnc', name: 'Guilford County Schools', enrollment: 70000 },
    ],
    'Durham': [
      { id: 'dpsnc', name: 'Durham Public Schools', enrollment: 34000 },
    ],
    'Winston-Salem': [
      { id: 'wsfcs', name: 'Winston-Salem/Forsyth County Schools', enrollment: 55000 },
    ],
    'Fayetteville': [
      { id: 'ccs', name: 'Cumberland County Schools', enrollment: 52000 },
    ],
    'Cary': [
      { id: 'wcpss-cary', name: 'Wake County Public School System', enrollment: 158000 },
    ],
    'Wilmington': [
      { id: 'nhcs', name: 'New Hanover County Schools', enrollment: 27000 },
    ],
    'High Point': [
      { id: 'gcs-hp', name: 'Guilford County Schools', enrollment: 70000 },
    ],
    'Concord': [
      { id: 'cabarrus', name: 'Cabarrus County Schools', enrollment: 32000 },
    ],
    'Gastonia': [
      { id: 'gaston', name: 'Gaston County Schools', enrollment: 32000 },
    ],
    'Asheville': [
      { id: 'acspsnc', name: 'Asheville City Schools', enrollment: 4500 },
      { id: 'bcs', name: 'Buncombe County Schools', enrollment: 26000 },
    ],
    'Chapel Hill': [
      { id: 'chccs', name: 'Chapel Hill-Carrboro City Schools', enrollment: 13000 },
    ],
  },

  WA: {
    'Seattle': [
      { id: 'sps', name: 'Seattle Public Schools', enrollment: 51000 },
    ],
    'Spokane': [
      { id: 'sps-wa', name: 'Spokane Public Schools', enrollment: 30000 },
      { id: 'cvsd', name: 'Central Valley School District', enrollment: 13000 },
      { id: 'east-valley', name: 'East Valley School District', enrollment: 4000 },
    ],
    'Tacoma': [
      { id: 'tps', name: 'Tacoma Public Schools', enrollment: 28000 },
    ],
    'Vancouver': [
      { id: 'vps', name: 'Vancouver Public Schools', enrollment: 23000 },
      { id: 'evergreen-wa', name: 'Evergreen School District', enrollment: 27000 },
    ],
    'Bellevue': [
      { id: 'bsd', name: 'Bellevue School District', enrollment: 20000 },
    ],
    'Kent': [
      { id: 'ksd', name: 'Kent School District', enrollment: 27000 },
    ],
    'Everett': [
      { id: 'eps', name: 'Everett Public Schools', enrollment: 20000 },
    ],
    'Renton': [
      { id: 'rsd', name: 'Renton School District', enrollment: 16000 },
    ],
    'Yakima': [
      { id: 'ysd', name: 'Yakima School District', enrollment: 15000 },
      { id: 'east-valley-ya', name: 'East Valley School District (Yakima)', enrollment: 4000 },
    ],
    'Kirkland': [
      { id: 'lwsd', name: 'Lake Washington School District', enrollment: 30000 },
    ],
    'Bellingham': [
      { id: 'bps-wa', name: 'Bellingham Public Schools', enrollment: 11000 },
    ],
    'Federal Way': [
      { id: 'fwps', name: 'Federal Way Public Schools', enrollment: 22000 },
    ],
    'Shoreline': [
      { id: 'ssd-wa', name: 'Shoreline School District', enrollment: 9000 },
    ],
  },

  NV: {
    'Las Vegas': [
      { id: 'ccsd', name: 'Clark County School District', enrollment: 320000 },
    ],
    'Henderson': [
      { id: 'ccsd-henderson', name: 'Clark County School District', enrollment: 320000 },
    ],
    'Reno': [
      { id: 'wcsd', name: 'Washoe County School District', enrollment: 63000 },
    ],
    'North Las Vegas': [
      { id: 'ccsd-nlv', name: 'Clark County School District', enrollment: 320000 },
    ],
    'Sparks': [
      { id: 'wcsd-sparks', name: 'Washoe County School District', enrollment: 63000 },
    ],
    'Carson City': [
      { id: 'ccsd-nv', name: 'Carson City School District', enrollment: 7000 },
    ],
    'Boulder City': [
      { id: 'ccsd-bc', name: 'Clark County School District', enrollment: 320000 },
    ],
    'Mesquite': [
      { id: 'ccsd-mesquite', name: 'Clark County School District', enrollment: 320000 },
    ],
  },
}

/**
 * Returns ordered list of city names for a state.
 * Returns null for states not in the dataset.
 */
export function getStateCities(stateCode) {
  const stateData = DISTRICT_DATA[stateCode]
  if (!stateData) return null
  return Object.keys(stateData)
}

/**
 * Returns districts for a city, or null if city/state not in dataset.
 * Deduplicates districts with the same name (e.g. county-wide districts).
 */
export function getCityDistricts(stateCode, city) {
  const stateData = DISTRICT_DATA[stateCode]
  if (!stateData) return null
  const districts = stateData[city]
  if (!districts) return null
  // Deduplicate by name
  const seen = new Set()
  return districts.filter(d => {
    if (seen.has(d.name)) return false
    seen.add(d.name)
    return true
  })
}

export function getStateSuggestions(query, max = 8) {
  if (!query || !query.trim()) return []
  const q = query.trim().toLowerCase()
  return STATES
    .filter(s => s.name.toLowerCase().includes(q))
    .slice(0, max)
    .map(s => s.name)
}
