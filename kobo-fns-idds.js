//Job to integrate Kobo FNS-IDDS demo form
appendValues({
  spreadsheetId: '1C0lBZU03Nroa4onq1de4_1E_mUCZKDE3xEpZHKc5ppA',
  range: 'FNS-IDDS-Survey!A2',
  values: (state) => {
    const bfMap = {
      '1': 'nothing',
      '2': 'only breastmilk',
      '3': 'breastmilk and other food/ drink',
      '4': 'no breastmilk, only other food/ drink',
    };

    const kobo = state.data.body;
    return [
      [
        kobo.end,
        kobo.deviceid,
        kobo.respondent_name,
        kobo.respondent_age,
        kobo.hh_number,
        kobo.hh_member_children,
        bfMap[kobo.bf_practices],
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
//   range: 'FNS-IDDS-Survey-Children!A2',
//   values: (state) => {
//     const kobo = state.data.body;
//     // TODO: talk about how repeat groups work in Kobo.
//     return state.data.children.map((child) => {
//       console.log(child);
//       return [
//         kobo.end,
//         kobo.deviceid,
//         kobo['child1/child1_name,
//         kobo['child1/child1_sex,
//         kobo['child1/child1_age,
//       ];
//     });
//   },
// });

// NOTE: This isn't great, but if we don't have a repeat group we'll need to hard code it.
appendValues({
  spreadsheetId: '1C0lBZU03Nroa4onq1de4_1E_mUCZKDE3xEpZHKc5ppA',
  range: 'FNS-IDDS-Survey-Children!A2',
  values: (state) => {
    const sexes = {
      '1': 'm',
      '2': 'f',
    };
    const kobo = state.data.body;
    return [
      kobo['child1/child1_name'] && [
        kobo.end,
        kobo.deviceid,
        sexes[kobo['child1/child1_sex']],
        kobo['child1/child1_name'],
        kobo['child1/child1_age'],
      ],
      kobo['child2/child2_name'] && [
        kobo.end,
        kobo.deviceid,
        sexes[kobo['child2/child2_sex']],
        kobo['child2/child2_name'],
        kobo['child2/child2_age'],
      ],
      kobo['child3/child3_name'] && [
        kobo.end,
        kobo.deviceid,
        sexes[kobo['child3/child3_sex']],
        kobo['child3/child3_name'],
        kobo['child3/child3_age'],
      ],
      kobo['child4/child4_name'] && [
        kobo.end,
        kobo.deviceid,
        sexes[kobo['child4/child4_sex']],
        kobo['child4/child4_name'],
        kobo['child4/child4_age'],
      ],
      kobo['child5/child5_name'] && [
        kobo.end,
        kobo.deviceid,
        sexes[kobo['child5/child5_sex']],
        kobo['child5/child5_name'],
        kobo['child5/child5_age'],
      ],
    ];
  },
});
