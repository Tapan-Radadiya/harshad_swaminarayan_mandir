import qs from "qs";
// http://localhost:1337/api/mandir-events?populate=*

export const getAllEventDataQS = (locale: string) => qs.stringify({
    locale: locale ?? 'en',
    sort: ['createdAt:desc'],
    populate: {
        images: {
            fields: ['id', 'url', 'alternativeText']
        }
    }
}, {
    encodeValuesOnly: true
})


export const getEventDetailsQS = (event_slug: string, locale: string) => qs.stringify({
    locale: locale ?? 'en',
    filters: {
        slug: {
            $eq: event_slug
        }
    },
    populate: {
        images: {
            fields: ['id', 'url', 'alternativeText']
        }
    }
}, {
    encodeValuesOnly: true
})