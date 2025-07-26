import qs from "qs";
// filters[image_type][$eq]=carousel&filters[is_active][$eq]=true&sort=priority:asc&fields[0]=id&fields[1]=priority&populate[images][fields][0]=url&populate[images][fields][1]=name&populate[gallery_group][fields][0]=group_key
export const carouselQS = () => qs.stringify({
    filters: {
        image_type: {
            $eq: "carousel"
        },
        is_active: {
            $eq: true
        },
    },
    sort: ['priority:asc'],
    fields: ['id', 'priority'],
    populate: {
        images: {
            fields: ['url', 'name']
        },
        gallery_group: {
            fields: ['group_key']
        }
    }
}, { encodeValuesOnly: true })

export const coverImageQS = () => qs.stringify({
    filters: {
        image_type: {
            $eq: "section_banner"
        },
        is_active: {
            $eq: true
        }
    },
    sort: ['priority:asc'],
    fields: ['id', 'priority'],
    populate: {
        images: {
            fields: ['url', 'name']
        },
        gallery_group: {
            fields: ['group_key']
        }
    }
})