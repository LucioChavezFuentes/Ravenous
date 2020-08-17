export const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://us-central1-ravenous-8b12b.cloudfunctions.net/businesses?term=${term}&location=${location}&sortBy=${sortBy}`
    )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            //console.log(business.id)
            if (business.categories[0] === undefined) {
              business.categories[0] = { title: '' };
            }
            return {
              id: business.id,
              img: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
              latitudeCoordinates: business.coordinates.latitude,
              longitudeCoordinates: business.coordinates.longitude,
              url: business.url,
            };
          });
        } else {
          throw jsonResponse;
        }
      });
  },
};

export default Yelp;
