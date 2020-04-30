//Job to integrate Kobo FCS form
appendValues({
  spreadsheetId: '1C0lBZU03Nroa4onq1de4_1E_mUCZKDE3xEpZHKc5ppA',
  range: 'FCS-Survey!A1:T1',
  values: (state) => {
    console.log('Submission data: ' + JSON.stringify(state.data, null, 2));
    const kobo = state.data;
    return [
      [
        // kobo.start,
        kobo.end,
        kobo.username,
        kobo.q0_fcs_description,
        kobo.q0_fcs_general,
        kobo.q1_fcs,
        kobo.q2_fcs,
        kobo.q3_fcs,
        kobo.q4_fcs,
        kobo.q5_fcs,
        kobo.q6_fcs,
        kobo.q7_fcs,
        kobo.q8_fcs,
        kobo.q9_fcs,
        kobo.q10_fcs,
        kobo.q11_fcs,
        kobo.q12_fcs,
        kobo.q13_fcs,
        kobo.q14_fcs,
        kobo.q15_fcs,
        kobo.q16_fcs,
        // kobo.calc_fg1,
        // kobo.calc_fg2,
        // kobo.calc_fg5,
        kobo.calc_fcs,
        kobo.calc_fcs_prof,
        kobo.out1_fg_sum,
        kobo.out2_fcs_summary,
        // kobo.__version__,
      ],
    ];
  },
});
