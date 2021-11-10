import * as faker from 'faker';

//seedData.js

const examData = [
  { examName: 'Probatoire', examCode: 'Proba' },
  { examName: 'Baccalaureat', examCode: 'Bacc' }
];

const regionData = [
  { regName: 'Nord Ouest', regCode: 'NW' },
  { regName: 'Sud Ouest', regCode: 'SW' },
  { regName: 'Ouest', regCode: 'OU' },
  { regName: 'Sud', regCode: 'SU' },
  { regName: 'Nord', regCode: 'No' },
  { regName: 'Litoral', regCode: 'LT' }
];

const divisionData = [
  {
    divisionName: 'Donga Mantung',
    divisionCode: 'DOM',
    regionId: 'ckvry3glb0061i0wmoixlpsub'
  },
  {
    divisionName: 'Ako',
    divisionCode: 'Ako',
    regionId: 'ckvry3glb0061i0wmoixlpsub'
  },
  {
    divisionName: 'Misaje',
    divisionCode: 'Msj',
    regionId: 'ckvry3glb0061i0wmoixlpsub'
  },
  {
    divisionName: 'Ndu',
    divisionCode: 'Ndu',
    regionId: 'ckvry3glb0061i0wmoixlpsub'
  },
  {
    divisionName: 'Nwa',
    divisionCode: 'Nwa',
    regionId: 'ckvry3glb0061i0wmoixlpsub'
  }
];

const subdivisionData = [
  {
    subdivName: 'Nkambe',
    subdivCode: 'Nkb',
    divisionId: 'ckvrydjpd0000f8wmv1tpqt5t'
  },
  {
    subdivName: 'Nyeanji',
    subdivCode: 'Nyj',
    divisionId: 'ckvrydjpd0000f8wmv1tpqt5t'
  },
  {
    subdivName: 'Tabenkeng',
    subdivCode: 'Tbk',
    divisionId: 'ckvrydjpd0000f8wmv1tpqt5t'
  },
  {
    subdivName: 'Akweto',
    subdivCode: 'Akt',
    divisionId: 'ckvrydjpd0000f8wmv1tpqt5t'
  },
  {
    subdivName: 'Wat',
    subdivCode: 'Wat',
    divisionId: 'ckvrydjpd0000f8wmv1tpqt5t'
  }
];

const townData = [
  {
    townName: 'Nkambe',
    townCode: 'Nkb',
    subdivisionId: 'ckvryjnyb0142bwwmqpzr94qr'
  },
  {
    townName: 'Nyeanji',
    townCode: 'Nyj',
    subdivisionId: 'ckvryjnyb0142bwwmqpzr94qr'
  },
  {
    townName: 'Tabenkeng',
    townCode: 'Tbk',
    subdivisionId: 'ckvryjnyb0142bwwmqpzr94qr'
  },
  {
    townName: 'Akweto',
    townCode: 'Akt',
    subdivisionId: 'ckvryjnyb0142bwwmqpzr94qr'
  },
  {
    townName: 'Wat',
    townCode: 'Wat',
    subdivisionId: 'ckvryjnyb0142bwwmqpzr94qr'
  }
];

const seriesData = [
  {
    seriesName: 'Espagnol',
    seriesCode: 'Esp',
    educTypeId: 'ckvry3gl20050i0wmqpokuxk3'
  },
  {
    seriesName: 'Allemand',
    seriesCode: 'All',
    educTypeId: 'ckvry3gl20050i0wmqpokuxk3'
  },
  {
    seriesName: 'Scientifique C',
    seriesCode: 'C',
    educTypeId: 'ckvry3gl20050i0wmqpokuxk3'
  },
  {
    seriesName: 'Scientifique D',
    seriesCode: 'D',
    educTypeId: 'ckvry3gl20050i0wmqpokuxk3'
  },
  {
    seriesName: 'Informatique',
    seriesCode: 'Info',
    educTypeId: 'ckvry3gl20050i0wmqpokuxk3'
  }
];

const centerData = [
  {
    centerName: 'Government Bilingual High School Nkambe',
    centerCode: 'GBHS Nkambe',
    centerNumber: faker?.datatype?.number(99999),
    centerPublicCode: faker?.random?.alphaNumeric(12),
    centerSecretCode: faker?.random?.alphaNumeric(10),
    townId: 'ckvrylioc0000kowmm1utf722'
  },
  {
    centerName: 'Presbyterian High SchoolNkmabe',
    centerCode: 'PHS Nkambe',
    centerNumber: faker?.datatype?.number(99999),
    centerPublicCode: faker?.random?.alphaNumeric(12),
    centerSecretCode: faker?.random?.alphaNumeric(10),
    townId: 'ckvrylioc0000kowmm1utf722'
  },
  {
    centerName: 'Government High School Nyeanji',
    centerCode: 'GHS Nyeanji',
    centerNumber: faker?.datatype?.number(99999),
    centerSecretCode: faker?.random?.alphaNumeric(10),
    centerPublicCode: faker?.random?.alphaNumeric(12),
    townId: 'ckvrylioc0001kowm37ovosf8'
  },
  {
    centerName: 'Government High School Tabenkeng',
    centerCode: 'GHS Tabenkeng',
    centerNumber: faker?.datatype?.number(99999),
    centerPublicCode: faker?.random?.alphaNumeric(12),
    centerSecretCode: faker?.random?.alphaNumeric(10),
    townId: 'ckvrylioc0002kowmrjd6fpmt'
  },
  {
    centerName: 'Government Secondary School Akweto',
    centerCode: 'GSS Akweto',
    centerNumber: faker?.datatype?.number(99999),
    centerPublicCode: faker?.random?.alphaNumeric(12),
    centerSecretCode: faker?.random?.alphaNumeric(10),
    townId: 'ckvrylioc0003kowmufucmvvs'
  }
];

const payMethodData = [
  { mobilePay: 'MTN' },
  { mobilePay: 'NEXTTEL' },
  { mobilePay: 'ORANGE' }
];

const reportTypeData = [
  { reportTypeName: 'Fraude', reportTypeCode: 'Frd' },
  { reportTypeName: 'Fin de session', reportTypeCode: 'Fis' },
  { reportTypeName: 'Autre type de rapport', reportTypeCode: 'Atr' },
  { reportTypeName: 'Debut de session', reportTypeCode: 'Dds' }
];

const sessionData = [
  { sessionName: 'Juin2019', sessionCode: '2019' },
  { sessionName: 'Juin2020', sessionCode: '2020' },
  { sessionName: 'Juin2021', sessionCode: '2021' }
];

const educTypeData = [
  { educTypeName: 'Enseignement General', educTypeCode: 'Engen' },
  { educTypeName: 'Enseignenment Commercial', educTypeCode: 'Encom' },
  { educTypeName: 'Enseignement Industriel', educTypeCode: 'Entech' }
];

const gradeData = [
  { gradeName: 'PLET', gradeCode: 'PLET' },
  { gradeName: 'PCET', gradeCode: 'PCET' },
  { gradeName: 'PCEG', gradeCode: 'PCEG' },
  { gradeName: 'PLEG', gradeCode: 'PLEG' },
  { gradeName: 'IEG', gradeCode: 'IEG' }
];

const phaseData = [
  { phaseName: 'Ecrit', phaseCode: 'Ecrit' },
  { phaseName: 'Pre-Inscription', phaseCode: 'PreInsc' },
  { phaseName: 'Inscription', phaseCode: 'Insc' },
  { phaseName: 'Correction', phaseCode: 'Corr' },
  { phaseName: 'Resultats', phaseCode: 'Rest' }
];

const rankData = [
  { rankName: 'Auxilliare', rankCode: 'aux' },
  { rankName: 'Chef de Ccentre', rankCode: 'CC' },
  { rankName: 'Chef de Ccentre adjoint', rankCode: 'CCA' },
  { rankName: 'Chef de Secretariat', rankCode: 'Chef Sec' },
  { rankName: 'Surveillant de salle', rankCode: 'SS' }
];

const subjectData = [
  { subjectName: 'Histoire', subjectCode: 'Hist' },
  { subjectName: 'Philosophie', subjectCode: 'Philo' },
  { subjectName: 'Mathematiques', subjectCode: 'Maths' },
  { subjectName: 'Physiques', subjectCode: 'Phys' },

  { subjectName: 'Espagnol', subjectCode: 'Esp' },
  { subjectName: 'Anglais', subjectCode: 'Angl' },
  { subjectName: 'Francais', subjectCode: 'Fran' },
  { subjectName: 'Allemand', subjectCode: 'All' },
  { subjectName: 'Science de la vie et de la Terre', subjectCode: 'SVT' },

  { subjectName: 'Geographie', subjectCode: 'Geog' },
  { subjectName: 'Education  a la citoyennete et morale', subjectCode: 'ECM' },
  { subjectName: 'Education Physique et Sportive', subjectCode: 'EPS' },
  { subjectName: 'Informatiques', subjectCode: 'Info' }
];

const candidateData = Array.from({ length: 140 }).map(() => ({
  candidate1stName: faker?.name?.firstName(),
  candidate2ndName: faker?.name?.lastName(),
  candidate3rdName: faker?.name?.lastName(),
  placeOfBirth: faker?.address?.city(),
  phoneNumber: faker?.datatype?.number(9),
  candidateSecretCode: faker?.random?.alphaNumeric(12),
  gender: faker?.name?.gender(),
  email: faker?.internet?.email(),
  candidateMatricule: faker?.random?.alphaNumeric(6),
  image:
    'https://res.cloudinary.com/inex/image/upload/v1636118578/inexback/dbiuazztqqnx3irt9gie.jpg',
  dateOfBirth: faker?.date?.past()
}));

const examinerData = Array.from({ length: 50 }).map(() => ({
  firstName: faker?.name?.firstName(),
  middleName: faker?.name?.lastName(),
  lastName: faker?.name?.lastName(),
  phoneNumber: faker?.datatype?.number(6),
  examinerSecretCode: faker?.random?.alphaNumeric(12),
  gender: faker?.name?.gender(),
  email: faker?.internet?.email(),
  examinerMatricule: faker?.random?.alphaNumeric(6),
  image:
    '/https://res.cloudinary.com/inex/image/upload/v1636118578/inexback/dbiuazztqqnx3irt9gie.jpg',
  gradeId: 'ckvry3gkg0024i0wmy9gzywvv',
  subjectId: 'ckvry3gkw0041i0wmq2m9cjkw'
}));

module.exports = {
  payMethodData,
  examData,
  examinerData,
  sessionData,
  phaseData,
  educTypeData,
  subdivisionData,
  gradeData,
  townData,
  rankData,
  centerData,
  subjectData,
  candidateData,
  divisionData,
  seriesData,
  regionData,
  reportTypeData
};
