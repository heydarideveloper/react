//@ts-ignore

function convertJalaliDateToISO(date: string) {
  if (!date) {
    return undefined;
  }
//   const formalDate = moment(date, "jYY/jM/jD").toISOString();
  return "formalDate";
}

// const useHumanistDate = () => {
//   const { languageTag } = StoreLocalize.useState();

//   /** @param date Date-time */
//   return function getDifferentDate(date?: string) {
//     if (!date) {
//       return "";
//     }

//     if (__DEV__) {
//       invariant(
//         !date.includes(" "),
//         `useHumanistDate: date time value in passed to getDifferentDate is not correct date-time ${date}`,
//       );
//     }

//     const m = moment(date);

//     const fromNow = m.locale(languageTag).fromNow();
//     return fromNow;
//   };
// };

function getUniqNumberOfDay(dateTime: string, format?: string) {
//   return moment(dateTime, format).startOf("day").toDate().getTime();
}

function getHumanDate(createDate: string) {
  if (createDate) {
    // return moment(createDate, "jYYYY/jMM/jDD hh:mm").fromNow();
  } else {
    return createDate;
  }
}

export { convertJalaliDateToISO, getUniqNumberOfDay, getHumanDate };
