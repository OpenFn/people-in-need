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

// NOTE: This is what the job SHOULD look like, given a form with a repeat group
// appendValues({
//   spreadsheetId: '1C0lBZU03Nroa4onq1de4_1E_mUCZKDE3xEpZHKc5ppA',
//   range: 'FCS-IDDS-FNS-IDDS-Survey-Chilren!A1:T1',
//   values: (state) => {
//     const kobo = state.data.body;
//     // TODO: talk about how repeat groups work in Kobo.
//     return state.data.children.map((child) => {
//       console.log(child);
//       return [
//         kobo.end,
//         kobo.deviceid,
//         kobo.child1_name,
//         kobo.child1_sex,
//         kobo.child1_age,
//       ];
//     });
//   },
// });

// NOTE: This isn't great, but if we don't have a repeat group we'll need to hard code it.
appendValues({
  spreadsheetId: '1C0lBZU03Nroa4onq1de4_1E_mUCZKDE3xEpZHKc5ppA',
  range: 'FCS-IDDS-FNS-IDDS-Survey-Chilren!A1:T1',
  values: (state) => {
    const kobo = state.data.body;
    return [
      [
        kobo.end,
        kobo.deviceid,
        kobo.child1,
        kobo.child1_sex,
        kobo.child1_name,
        kobo.child1_age,
      ],
      [
        kobo.end,
        kobo.deviceid,
        kobo.child2,
        kobo.child2_sex,
        kobo.child2_name,
        kobo.child2_age,
      ],
      [
        kobo.end,
        kobo.deviceid,
        kobo.child3,
        kobo.child3_sex,
        kobo.child3_name,
        kobo.child3_age,
      ],
      [
        kobo.end,
        kobo.deviceid,
        kobo.child4,
        kobo.child4_sex,
        kobo.child4_name,
        kobo.child4_age,
      ],
      [
        kobo.end,
        kobo.deviceid,
        kobo.child5,
        kobo.child5_sex,
        kobo.child5_name,
        kobo.child5_age,
      ],
    ];
  },
});
