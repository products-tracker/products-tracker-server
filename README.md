# products-tracker-server


## BestBuy api 

- In-Store Availability: https://api.bestbuy.com/v1/products/4807511/stores.json?postalCode=55423&apiKey=YourAPIKey

{
  "ispuEligible": true,
  "stores": [
    {
      "storeID": "10",
      "name": "Maplewood",
      "address": "1795 County Rd D E",
      "city": "Maplewood",
      "state": "MN",
      "postalCode": "55109",
      "storeType": "Big_Box_Store",
      "minPickupHours": null,
      "lowStock": false,
      "distance": 16.594
    },
  ]
}

**stores.storeID**	The unique ID of the store
**stores.name**	The store name
**stores.address**	The street address of the store
**stores.city**	The city in which the store is located
**stores.postalCode**	The postal code in which the store is located
**stores.storeType**	The type of store
**stores.minPickupHours**	The minimum number of hours that must pass after placing a store pick up order before the item will be available for pick up.
**stores.lowStock**	Whether or not the product availability at this store is low and may soon shift to out of stock.
**stores.distance**	The store’s distance (in miles) from the given postalCode

## Search by all attributes

https://api.bestbuy.com/v1/products(manufacturer=canon&salePrice<1000)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey

# Possible API's

## Blog on scraping the Google Shopping data
This API is only good for 100 queries, there's a paywall. We might integrate it but we need something like it that's free. Our instructor 
said this one is pretty much perfect, we just need a free one.
https://medium.com/serpapi

For now we're using fake data from FakeStore API. I've integrated a product search, so we have one route, '/fakestore', that's getting data back. Now I just have to integrate it into the frontend. I'm a bit code loopy now so I've gotta take a break, sorry I didn't get more done on the back end! I should be on about 4:00 pm Germany Time (lol), so we can get some work done together on it.

Here's the FakeStore API.
https://fakestoreapi.com/docs

