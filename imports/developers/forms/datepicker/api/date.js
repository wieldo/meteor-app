export default {
    minDate: new Date(
      new Date().getFullYear(),
      new Date().getMonth() - 2,
      new Date().getDate()
    ),
    maxDate: new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 2,
      new Date().getDate()
    ),
    onlyWeekendsPredicate: (date) => {
        var day = date.getDay();
        return day === 0 || day === 6;
    }
};
