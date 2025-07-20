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