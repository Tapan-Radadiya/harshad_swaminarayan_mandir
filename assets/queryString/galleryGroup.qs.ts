import qs from "qs";

// gallery-groups?mode=thumbnail&filters[group_key][$not][$eq]=carousel&sort[0]=createdAt%3Adesc&populate[image_managers][populate][0]=images
export const galleryGroupQS = () => qs.stringify({
    mode: "thumbnail",
    filters: {
        group_key: {
            $not: {
                $eq: "carousel"
            }
        }
    },
    sort: ['createdAt:desc'],
    populate: {
        image_managers: {
            populate: ['images']
        }
    }
}, {
    encodeValuesOnly: true,
})

// http://localhost:1337/api/gallery-groups?filters[group_key][$not][$eq]=carousel&filters[group_key][$eq]=hindola_2025&sort[0]=createdAt%3Adesc&populate[image_managers][populate][0]=images
export const galleryAllimagesQS = (group_key: string) => qs.stringify({
    mode: 'groupimages',
    filters: {
        group_key: {
            $eq: group_key
        }
    },
    populate: {
        image_managers: {
            populate: ['images']
        }
    }
})