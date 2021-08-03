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