import routesNames from './routesNames'

const data = {
    draftTimeline: {
        title: 'Draft Timeline',
        instructions: 'Select the first and last day of the task to create a draft timeline for this task.',
        button: {
            title: 'SAVE DRAFT TIMELINE',
            linkTo: routesNames.draftSchedules,
        },
    },
    draftSchedules: {
        title: 'Draft Artists Schedules',
        instructions: 'Select the number of artists needed during the course of this task.',
        button: {
            title: 'SAVE DRAFT SCHEDULES',
            linkTo: routesNames.bookArtists,
        },
        calendar: {
            input: 'number of artists on that period',
        }
    },
    bookArtists: {
        title: 'Book Artists',
        instructions: 'Select a date to see which artists are available and request to book them.',
        button: {
            title: 'RETURN TO PROJECT',
            linkTo: routesNames.home,
        }
    }
}

export default data