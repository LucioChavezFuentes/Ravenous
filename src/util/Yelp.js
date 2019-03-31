
const apiKey ='AmX43N_jFBUWKFgYcSXFpRPSPQhxXwUjRx1odw35LY01H5xeIDAlHvPKRQ2vLs6lWFj0NeHq2X7cFRnaBjiQP4DZnacuMvQLzPjTCjytjX93i9mNOzT2NQzZ1eSPXHYx'

export const Yelp = {
    search(term,location,sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => {
                    //console.log(business.id)
                    if (business.categories[0] === undefined) {
                        business.categories[0] = { title: ''}
                    }
                    return {
                        id: business.id,
                        img: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state ,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating ,
                        reviewCount: business.review_count,
                        latitudeCoordinates: business.coordinates.latitude,
                        longitudeCoordinates: business.coordinates.longitude,
                        url: business.url


                    }
                })
            }
        })
    }
};

export default Yelp