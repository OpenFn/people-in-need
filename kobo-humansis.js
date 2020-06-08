alterState((state) => {
  const kobo = state.data.body;

  // Estimate DOB for a respondent =============================================
  const eDOB = new Date(
    new Date().setFullYear(
      new Date().getFullYear() -
        parseInt(kobo['group_ba2su48/group_li4pp32/Q_HHDEM_HEADAGE'])
    )
  );
  state.estDOB = eDOB.toISOString().substr(0, 10);

  // Clean and join vulnerabilities for use in a comma separated string. =======
  const vItems = [];
  kobo['group_ba2su48/group_li4pp32/group_du8vy30/Q_VUL_DISHH'] ===
    'HH_disabled' && vItems.push('disabled');

  kobo['group_ba2su48/group_li4pp32/group_du8vy30/Q_VUL_CHILDHH'] ===
    'HH_less_than18' && vItems.push('less than 18');

  kobo['group_ba2su48/group_li4pp32/group_du8vy30/Q_VUL_ELDERLYHH'] === 'yes' &&
    vItems.push('elderly');

  kobo['group_ba2su48/group_li4pp32/group_du8vy30/Q_VUL_WOMANHH'] ==
    'HH_is_Woman' && vItems.push('HH is woman');

  state.vulnerabilities = vItems.join(', ');

  // Return this cleaned and prepared data for loading into Google sheets. =====
  return state;
});

// Job to integrate Kobo HH Registration form w/ Humansis upload template ======
appendValues({
  spreadsheetId: '1QFvZ8lMEjknWXAI89XgFOKT6JDeUoIDNHhe7GH4wqzw',
  range: 'HH_Survey!A7', // here we can specify to start on the Row where data should be enter after template headers
  values: (state) => {
    console.log('Submission data: ' + JSON.stringify(state.data, null, 2));
    const kobo = state.data.body;
    return [
      [
        'N/A', // listed N/A because did not see street address in form
        'N/A', // no address number in form
        'N/A', // no address post code in form
        'N/A', // no camp name in form
        'N/A', // no tent number in form
        kobo['group_ba2su48/group_zs82c91/Source_of_the_income'], // livelihood
        kobo['group_ba2su48/group_zs82c91/Q_INCOME_INCOMETOTAL'], // income
        'N/A', // no notes in form
        'N/A', // no longtitude in form
        'N/A', // no latitude in form
        kobo['group_ba2su48/group_fm7ys50/Governorate'], // governorate
        kobo['group_ba2su48/group_fm7ys50/District'], // idistrict
        kobo['group_ba2su48/group_fm7ys50/Q_LOCATION_SUBDISTRICT'], // sub_district
        kobo['group_ba2su48/group_fm7ys50/Q_LOCATION_VILLAGE'], // village
        kobo['group_ba2su48/group_fm7ys50/Q_LOCATION_VILLAGE'], // village
        kobo['group_ba2su48/group_li4pp32/Q_HHDEM_HEADNAME'], // name
        kobo['group_ba2su48/group_li4pp32/Q_HHDEM_HEADNAME'], // name
        'N/A', // no english name in form
        'N/A', // no english name in form
        kobo['group_ba2su48/group_li4pp32/Q_HHDEM_HEADGENDER'], // gender
        'N/A', // always true
        kobo['group_ba2su48/group_ya5ls83/What_is_your_resident_status'], // residency status
        kobo['group_ba2su48/group_ya5ls83/Q_HHDEM_HEADAGE'], // HH age
        kobo['group_ba2su48/group_du8vy30/Please_select_the_kind_of_disa'], // vulnerability
        'N/A', // should be always mobile
        'N/A', // should be SYR country code by default
        kobo['group_ba2su48/group_nm8kg37/Q_HHDEM_PHONE_12DIGIT'], // phone number
        'N/A', // not needed
        'N/A', // not needed
        'N/A', // not needed
        kobo['group_ba2su48/group_li4pp32/Head_of_household_ID_type'], // id card type
        kobo['group_ba2su48/group_li4pp32/Q_HHDEM_HEADIDNUMBER'], // id card number
        'N/A', // map kobo question to Col G, or leave as 'N/A' or '' to show up blank
        'N/A', // map kobo question to Col H
        'N/A', // Column I...  //if we have data transformation, we can write this in
        'N/A', // Column J
        'N/A', // Column K
        'N/A', // Column L
        'N/A', // Column M
        'N/A', // Column N
        'N/A', // Column O
        'N/A', // Column P
        'N/A', // Column Q
        'N/A', // Column R
        'N/A', // Column S
        'N/A', // Column T
        'N/A', // Column U
        state.estDOB,
        state.vulnerabilities,
      ],
    ];
  },
});
