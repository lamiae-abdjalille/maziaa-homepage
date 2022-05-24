import { APIURL } from '/modules/constants.mjs'

import { parseParams } from '/modules/api.product.mjs'


import { showProduct } from '/modules/showproducts.mjs'



showProduct(APIURL, parseParams({
    limit: 12,
}));


