const stringifyMoment = moment => `${moment && moment.date()}-${moment && moment.month()}-${moment && moment.year()}`

export default stringifyMoment