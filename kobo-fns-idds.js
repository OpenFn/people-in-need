//Job to integrate Kobo FNS-IDDS demo form
appendValues({
  spreadsheetId: '1C0lBZU03Nroa4onq1de4_1E_mUCZKDE3xEpZHKc5ppA',
  range: 'FCS-IDDS-Survey!A2',
  values: (state) => {
    console.log('Submission data: ' + JSON.stringify(state.data, null, 2));
    const kobo = state.data;
    return [
      [
        kobo.end,
        kobo.deviceid,
        kobo.respondent_name,
        kobo.respondent_age,
        kobo.hh_number,
        kobo.hh_member_children,
        kobo.bf_practices,
        kobo['youngest_child6-23'],
        kobo['youngest_child6-23_sex'],
        kobo.breast_fed,
        kobo['dd_freq_children6-23'],
        kobo.feed_reason,
        kobo.fd_frequency_1,
        kobo.fd_frequency_2,
        kobo.fd_frequency_3,
        kobo['youngest_child24-59'],
        kobo['youngest_child24-59_sex'],
        kobo['dd_freq_children24-59'],
        kobo.feed_reason2,
        kobo.fd_frequency_4,
        kobo.fd_frequency_5,
        kobo.dd_freq_mother,
        kobo.feed_reason3,
        kobo.mother_condition,
      ],
    ];
  },
});

appendValues({
  spreadsheetId: '1C0lBZU03Nroa4onq1de4_1E_mUCZKDE3xEpZHKc5ppA',
  range: 'FCS-IDDS-FNS-IDDS-Survey-Chilren!A1:T1',
  values: (state) => {
    const kobo = state.data.body;
    // TODO: talk about how repeat groups work in Kobo.
    return state.data.children.map((child) => {
      console.log(child);
      return [
        kobo.end,
        kobo.deviceid,
        kobo.child1_name,
        kobo.child1_sex,
        kobo.child1_age,
      ];
    });
  },
});
