//For the demo, send POST request back to OpenFn inbox
post("https://openfn.org/inbox/your-inbox-url", { //replace with desired API endpoint
  headers: {
    "Content-Type": "application/json",
  },
  body: (state) => {
    const postBody = {
      destination: 'humansis',
      comment: 'Upload this data to Humansis!',
      koboSubmission: state.data.body[`meta/instanceID`],
      otherFields: 'Add kobo questions to the job...'
    };
    return postBody;
  }
});
