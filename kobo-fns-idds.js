//Job to integrate Kobo FNS-IDDS demo form
//Table #1: Add rows to register households
appendValues({
  spreadsheetId: '1C0lBZU03Nroa4onq1de4_1E_mUCZKDE3xEpZHKc5ppA',
  range: 'FNS-IDDS-Survey!A2',
  values: (state) => {
    const bfMap = {  //Re-label responses to "Breastfeeding practices"
      '1': 'nothing',
      '2': 'only breastmilk',
      '3': 'breastmilk and other food/ drink',
      '4': 'no breastmilk, only other food/ drink',
    };

    const kobo = state.data.body;
    return [
      [
        kobo['meta/instanceID'],
        kobo.end.substring(0,10), //Only map date value, remove timeStamp
        kobo.deviceid,
        kobo['resp_info/respondent_name'],
        kobo['resp_info/respondent_age'],
        kobo['hh_info/hh_number'],
        kobo['hh_info/hh_member_children'],
        bfMap[kobo.bf_practices], //Re-label this response; see line 6
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

//Table #2: Add rows to register children as individual records
appendValues({
  spreadsheetId: '1C0lBZU03Nroa4onq1de4_1E_mUCZKDE3xEpZHKc5ppA',
  range: 'FNS-IDDS-Survey-Children!A2',
  values: (state) => {
    const sexes = { //Another example of relabeling answers 
      '1': 'm',
      '2': 'f',
    };
    const kobo = state.data.body;
    return [
      kobo['child1/child1_name'] && [
        kobo['meta/instanceID'],
        kobo.end,
        kobo['child1/child1_name'],
        sexes[kobo['child1/child1_sex']],
        kobo['child1/child1_age'],
      ],
      kobo['child2/child2_name'] && [
         kobo['meta/instanceID'],
        kobo.end,
        kobo['child2/child2_name'],
        sexes[kobo['child2/child2_sex']],
        kobo['child2/child2_age'],
      ],
      kobo['child3/child3_name'] && [
         kobo['meta/instanceID'],
        kobo.end,
        kobo['child3/child3_name'],
        sexes[kobo['child3/child3_sex']],
        kobo['child3/child3_age'],
      ],
      kobo['child4/child4_name'] && [
        kobo['meta/instanceID'],
        kobo.end,
        kobo['child4/child4_name'],
        sexes[kobo['child4/child4_sex']],
        kobo['child4/child4_age'],
      ],
      kobo['child5/child5_name'] && [
        kobo['meta/instanceID'],
        kobo.end,
        kobo['child5/child5_name'],
        sexes[kobo['child5/child5_sex']],
        kobo['child5/child5_age'],
      ],
    ];
  },
});
