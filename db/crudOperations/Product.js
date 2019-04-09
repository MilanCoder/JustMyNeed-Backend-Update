const Products=require('../schemas/ProductSchema');
const Admin=require('../schemas/adminLoginSchema');
const logger=require('../../Utils/winstonLogger');

productsArray=
[
    {  "categoryId":"1",
    "categoryName":"Fruits & vegetables",
    "subcategory":[{
    "subcategoryId":"1a",
    "subcategoryName":"Fruits Vegetables",
    "products":[
    
    { 
     "productId":"11",
    "productName":"Potato & Onions",
  
    "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"13", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
        "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
    {"subproductId":"23","subproductName":"Washington Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
        "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
    {"subproductId":"24","subproductName":"Alebela Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"dozen", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
        "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
    {"subproductId":"25","subproductName":"Washington Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
        "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
    {"subproductId":"26","subproductName":"Alebela Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
        "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]}
       
    
    ]},{
     "productId":"12",
    "productName":"Cucumber & Capsicum",
    "subProducts":[
    {"subproductId":"27","subproductName":"Kashmeeri Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
        "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
    {"subproductId":"28","subproductName":"Washington Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
        "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
    {"subproductId":"29","subproductName":"Alebela Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
        "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
    {"subproductId":"30","subproductName":"Washington Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
        "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
    {"subproductId":"31","subproductName":"Alebela Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
        "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]}
    
    ]},
    {
         "productId":"13",    
        "productName":"Beans, Brinjals & Okra",
        "subProducts":[
          {"subproductId":"32","subproductName":"Kashmeeri Onion","info":{
            "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
            "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
            "priceAndAmount":[
            { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
            },
            { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
            },
            { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
            }]
            },
        "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
        {"subproductId":"33","subproductName":"Washington Onion","info":{
            "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
            "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
            "priceAndAmount":[
            { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
            },
            { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
            },
            { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
            }]
            },
        "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
        {"subproductId":"34","subproductName":"Alebela Onion","info":{
            "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
            "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
            "priceAndAmount":[
            { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
            },
            { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
            },
            { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
            }]
            },
        "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
        {"subproductId":"35","subproductName":"Washington Potato","info":{
            "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
            "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
            "priceAndAmount":[
            { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
            },
            { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
            },
            { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
            }]
            },
        "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
        {"subproductId":"36","subproductName":"Alebela Potato","info":{
            "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
            "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
            "priceAndAmount":[
            { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
            },
            { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
            },
            { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
            }]
            },
        "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]}
        
        ]},
    
        { "productId":"14",
            "productName":"Root Vegetables",
           
            "subProducts":[{"subproductId":"37","subproductName":"Kashmeeri Onion","info":{
                "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
                "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
                "priceAndAmount":[
                { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
                },
                { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
                },
                { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
                }]
                },
               "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
            {"subproductId":"38","subproductName":"Washington Onion","info":{
                "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
                "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
                "priceAndAmount":[
                { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
                },
                { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
                },
                { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
                }]
                },
                "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
            {"subproductId":"39","subproductName":"Alebela Onion","info":{
                "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
                "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
                "priceAndAmount":[
                { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
                },
                { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
                },
                { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
                }]
                },
                "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
            {"subproductId":"40","subproductName":"Washington Potato","info":{
                "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
                "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
                "priceAndAmount":[
                { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
                },
                { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
                },
                { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
                }]
                },
                "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
            {"subproductId":"41","subproductName":"Alebela Potato","info":{
                "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
                "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
                "priceAndAmount":[
                { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
                },
                { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
                },
                { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
                }]
                },
                "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]}
            
            ]},
        
    {
     "productId":"15",
        "productName":"Beans, Brinjals & Okra",
       
        "subProducts":[{"subproductId":"42","subproductName":"Kashmeeri Onion","info":{
            "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
            "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
            "priceAndAmount":[
            { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
            },
            { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
            },
            { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
            }]
            },
            "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
        {"subproductId":"43","subproductName":"Washington Onion","info":{
            "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
            "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
            "priceAndAmount":[
            { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
            },
            { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
            },
            { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
            }]
            },
            "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
        {"subproductId":"44","subproductName":"Alebela Onion","info":{
            "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
            "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
            "priceAndAmount":[
            { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
            },
            { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
            },
            { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
            }]
            },
            "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
        {"subproductId":"45","subproductName":"Washington Potato","info":{
            "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
            "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
            "priceAndAmount":[
            { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
            },
            { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
            },
            { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
            }]
            },
            "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
        {"subproductId":"46","subproductName":"Alebela Potato","info":{
            "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
            "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
            "priceAndAmount":[
            { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
            },
            { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
            },
            { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
            }]
            },
            "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]}
        ]},
    
        {
          "productId":"16",
            "productName":"Beans, Brinjals & Okra",
          
            "subProducts":[{"subproductId":"4","subproductName":"Kashmeeri Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
            {"subproductId":"33","subproductName":"Washington Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
            {"subproductId":"34","subproductName":"Alebela Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
            {"subproductId":"35","subproductName":"Washington Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
            {"subproductId":"36","subproductName":"Alebela Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]}
            
            ]}]
    },
    {
        "subcategoryId":"1b",
        "subcategoryName":"Herbal And Seasoning",
        "products":[
        
        {
          "productId":"17",
          
        "productName":"Lemon , Ginger & Garlic",
      
        "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
        {"subproductId":"23","subproductName":"Washington Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
        {"subproductId":"24","subproductName":"Alebela Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
        {"subproductId":"25","subproductName":"Washington Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
        {"subproductId":"26","subproductName":"Alebela Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]}
        
        ]},{
         "productId":"18",
        "productName":"Indian & Exotic Herb",
       
        "subProducts":[
        {"subproductId":"27","subproductName":"Kashmeeri Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
        {"subproductId":"28","subproductName":"Washington Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
        {"subproductId":"29","subproductName":"Alebela Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
        {"subproductId":"30","subproductName":"Washington Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
        {"subproductId":"31","subproductName":"Alebela Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]}
        
        ]}]
        },
        {
            "subcategoryId":"1c",
            "subcategoryName":"Fresh Fruits",
            "products":[
            
            {
             "productId":"19",
            "productName":"Banana, Sapota & Papaya",
           
            "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"23","subproductName":"Washington Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
            {"subproductId":"24","subproductName":"Alebela Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
            {"subproductId":"25","subproductName":"Washington Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
            {"subproductId":"26","subproductName":"Alebela Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]}
            
            ]},{
            
             "productId":"20",
            "productName":"Kiwi, Melon, Citrus Fruit",
           
            "subProducts":[
            {"subproductId":"27","subproductName":"Kashmeeri Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
            {"subproductId":"28","subproductName":"Washington Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
            {"subproductId":"29","subproductName":"Alebela Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
            {"subproductId":"30","subproductName":"Washington Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
            {"subproductId":"31","subproductName":"Alebela Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]}
            
            ]},
            {
             "productId":"21", 
                "productName":"Banana, Sapota & Papaya",
               
                "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
                {"subproductId":"23","subproductName":"Washington Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
                {"subproductId":"24","subproductName":"Alebela Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
                {"subproductId":"25","subproductName":"Washington Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
                {"subproductId":"26","subproductName":"Alebela Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]}
                
                ]},{
                   "productId":"22",
                "productName":"Kiwi, Melon, Citrus Fruit",
             
                "subProducts":[
                {"subproductId":"27","subproductName":"Kashmeeri Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
                {"subproductId":"28","subproductName":"Washington Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
                {"subproductId":"29","subproductName":"Alebela Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
                {"subproductId":"30","subproductName":"Washington Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
                {"subproductId":"31","subproductName":"Alebela Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]}
                
                ]},
                {
                 "productId":"23",
                    "productName":"Banana, Sapota & Papayaui",
                   
                    "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
                    {"subproductId":"23","subproductName":"Washington Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
                    {"subproductId":"24","subproductName":"Alebela Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
                    {"subproductId":"25","subproductName":"Washington Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
                    {"subproductId":"26","subproductName":"Alebela Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]}
                    
                    ]},{
                      "productId":"24",
                    "productName":"Mangoes",
                  
                    "subProducts":[
                    {"subproductId":"27","subproductName":"Kashmeeri Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
                    {"subproductId":"28","subproductName":"Washington Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
                    {"subproductId":"29","subproductName":"Alebela Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
                    {"subproductId":"30","subproductName":"Washington Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
                    {"subproductId":"31","subproductName":"Alebela Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]}
                    
                    ]},
                    {
                      "productId":"25",
                        "productName":"Fruit Baskets",
                      
                        "subProducts":[
                        {"subproductId":"27","subproductName":"Kashmeeri Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
                        {"subproductId":"28","subproductName":"Washington Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
                        {"subproductId":"29","subproductName":"Alebela Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
                        {"subproductId":"30","subproductName":"Washington Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
                        {"subproductId":"31","subproductName":"Alebela Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]}
                        
                        ]}
            ]
            },
  {
            "subcategoryId":"1d",
            "subcategoryName":"Fresh Fruits",
            "products":[
            
            {
            "productId":"26",
            "productName":"Very Fresh Banana, Sapota & Papaya",
            
            "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
            {"subproductId":"23","subproductName":"Washington Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
            {"subproductId":"24","subproductName":"Alebela Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
            {"subproductId":"25","subproductName":"Washington Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
            {"subproductId":"26","subproductName":"Alebela Potato","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
         "imageUrls":[{"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]}
            
            ]},{
                 "productId":"27",
            "productName":"Kiwi,lll Melon, Citrus Fruit",
       
            "subProducts":[
            {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
            
            ]},
            {
             "productId":"28",
                "productName":"Banana,kkk Sapota & Papaya",
               
                "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                
                ]},{
                "productId":"29",
                "productName":"Kiwi,kkk Melon, Citrus Fruit",
                
                "subProducts":[
                {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                
                ]},
                {
                 "productId":"30",
                    "productName":"Banana,kkk Sapota & Papaya",
                   
                    "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},{
                    "productId":"31",
                    "productName":"Mangoes aam",
                    
                    "subProducts":[
                    {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},
                    {
                     "productId":"32",
                        "productName":"Fruit jj Baskets",
                       
                        "subProducts":[
                        {"subproductId":"32","subproductName":"Kashmeeri Onion","info":"2"},
                        {"subproductId":"33","subproductName":"Washington Onion","info":"4"},
                        {"subproductId":"34","subproductName":"Alebela Onion","info":"6"},
                        {"subproductId":"35","subproductName":"Washington Potato","info":"7"},
                        {"subproductId":"36","subproductName":"Alebela Potato","info":"7"}
                        
                          
                        
                    ]}
                ]
                }
    
    ]
    },
{
    "categoryId":"2",
    "categoryName":"Oils & Shampoo",
    "subcategory":[{
    "subcategoryId":"2a",
    "subcategoryName":"Oil",
    "products":[
    
    {
        "productId":"33",
    "productName":"Almond Oil",

    "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
    {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
    {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
    {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
    {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
    
    ]},{
    "productId":"34",
    "productName":"Nariyal Oil",
    
    "subProducts":[
    {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
    {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
    {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
    {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
    {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
    
    ]},
    {
     "productId":"35",
        "productName":"alovera oil",
       
        "subProducts":[{"subproductId":"32","subproductName":"Kashmeeri Onion","info":"2"},
        {"subproductId":"33","subproductName":"Washington Onion","info":"4"},
        {"subproductId":"34","subproductName":"Alebela Onion","info":"6"},
        {"subproductId":"35","subproductName":"Washington Potato","info":"7"},
        {"subproductId":"36","subproductName":"Alebela Potato","info":"7"}
        
        ]},
    
        {
           "productId":"36",
            "productName":"navaratan oil",
         
            "subProducts":[{"subproductId":"37","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"38","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"39","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"40","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"41","subproductName":"Alebela Potato","info":"7"}
            
            ]},
        
    {
    "productId":"37",
        "productName":"patanjali oil",
        
        "subProducts":[{"subproductId":"42","subproductName":"Kashmeeri Onion","info":"2"},
        {"subproductId":"43","subproductName":"Washington Onion","info":"4"},
        {"subproductId":"44","subproductName":"Alebela Onion","info":"6"},
        {"subproductId":"45","subproductName":"Washington Potato","info":"7"},
        {"subproductId":"46","subproductName":"Alebela Potato","info":"7"}
        
        ]} 
        ]
            },
        
        
 
    {
        "subcategoryId":"2b",
        "subcategoryName":"Lip Balm",
        "products":[
        
        {
         "productId":"38",
        "productName":"abcd",
       
        "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
        {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
        {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
        {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
        {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
        
        ]},{
         "productId":"39",
        "productName":"xyz",
       
        "subProducts":[
        {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
        {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
        {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
        {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
        {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
        
        ]}]
        },
        {
            "subcategoryId":"2c",
            "subcategoryName":"Fresh Fruits",
            "products":[
            
            {
              "productId":"40",
            "productName":"Banana, Sapota & Papaya",
          
            "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
            
            ]},{
             "productId":"41",
            "productName":"Kiwi, Melon, Citrus Fruit",
           
            "subProducts":[
            {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
            
            ]},
            {
             "productId":"42",
                "productName":"Banana, Sapota & Papaya",
               
                "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                
                ]},{
                "productName":"Kiwi, Melon, Citrus Fruit",
                "productId":"43",
                "subProducts":[
                {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                
                ]},
                {
                    "productName":"Banana, Sapota & Papaya",
                    "productId":"44",
                    "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},{
                    "productName":"Mangoes",
                    "productId":"45",
                    "subProducts":[
                    {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},
                    {
                        "productName":"Fruit Baskets",
                        "productId":"46",
                        "subProducts":[
                        {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                        {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                        {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                        {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                        {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                        
                        ]}
            ]
            },
{
            "subcategoryId":"2d",
            "subcategoryName":"Fresh Fruits",
            "products":[
            
            {
            "productName":"Banana, Sapota & Papaya",
            "productId":"11",
            "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
            
            ]},{
            "productName":"Kiwi, Melon, Citrus Fruit",
            "productId":"12",
            "subProducts":[
            {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
            
            ]},
            {
                "productName":"Banana, Sapota & Papaya",
                "productId":"11",
                "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                
                ]},{
                "productName":"Kiwi, Melon, Citrus Fruit",
                "productId":"12",
                "subProducts":[
                {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                
                ]},
                {
                    "productName":"Banana, Sapota & Papaya",
                    "productId":"11",
                    "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},{
                    "productName":"Mangoes",
                    "productId":"12",
                    "subProducts":[
                    {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},
                    {
                        "productName":"Fruit Baskets",
                        "productId":"12",
                        "subProducts":[
                        {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                        {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                        {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                        {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                        {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                        
                           
                    ]}
                ]
                }
    
    ]
    },
{
    "categoryId":"3",
    "categoryName":"Fruits & vegetables",
    "subcategory":[{
    "subcategoryId":"3a",
    "subcategoryName":"Fruits Vegetables",
    "products":[
    
    {
    "productName":"Potato & Onion",
    "productId":"11",
    "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
    {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
    {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
    {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
    {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
    
    ]},{
    "productName":"Cucumber & Capsicum",
    "productId":"12",
    "subProducts":[
    {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
    {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
    {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
    {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
    {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
    
    ]},
    {
        "productName":"Beans, Brinjals & Okra",
        "productId":"13",
        "subProducts":[{"subproductId":"32","subproductName":"Kashmeeri Onion","info":"2"},
        {"subproductId":"33","subproductName":"Washington Onion","info":"4"},
        {"subproductId":"34","subproductName":"Alebela Onion","info":"6"},
        {"subproductId":"35","subproductName":"Washington Potato","info":"7"},
        {"subproductId":"36","subproductName":"Alebela Potato","info":"7"}
        
        ]},
    
        {
            "productName":"Root Vegetables",
            "productId":"14",
            "subProducts":[{"subproductId":"37","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"38","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"39","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"40","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"41","subproductName":"Alebela Potato","info":"7"}
            
            ]},
        
    {
        "productName":"Beans, Brinjals & Okra",
        "productId":"15",
        "subProducts":[{"subproductId":"42","subproductName":"Kashmeeri Onion","info":"2"},
        {"subproductId":"43","subproductName":"Washington Onion","info":"4"},
        {"subproductId":"44","subproductName":"Alebela Onion","info":"6"},
        {"subproductId":"45","subproductName":"Washington Potato","info":"7"},
        {"subproductId":"46","subproductName":"Alebela Potato","info":"7"}
        
        ]},
    
        {
            "productName":"Beans, Brinjals & Okra",
            "productId":"16",
            "subProducts":[{"subproductId":"4","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"33","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"34","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"35","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"36","subproductName":"Alebela Potato","info":"7"}
            
            ]}]
    },
    {
        "subcategoryId":"3b",
        "subcategoryName":"Herbal And Seasoning",
        "products":[
        
        {
        "productName":"Lemon , Ginger & Garlic",
        "productId":"11",
        "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
        {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
        {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
        {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
        {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
        
        ]},{
        "productName":"Indian & Exotic Herb",
        "productId":"12",
        "subProducts":[
        {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
        {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
        {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
        {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
        {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
        
        ]}]
        },
        {
            "subcategoryId":"3c",
            "subcategoryName":"Fresh Fruits",
            "products":[
            
            {
            "productName":"Banana, Sapota & Papaya",
            "productId":"11",
            "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
            
            ]},{
            "productName":"Kiwi, Melon, Citrus Fruit",
            "productId":"12",
            "subProducts":[
            {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
            
            ]},
            {
                "productName":"Banana, Sapota & Papaya",
                "productId":"11",
                "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                
                ]},{
                "productName":"Kiwi, Melon, Citrus Fruit",
                "productId":"12",
                "subProducts":[
                {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                
                ]},
                {
                    "productName":"Banana, Sapota & Papaya",
                    "productId":"11",
                    "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},{
                    "productName":"Mangoes",
                    "productId":"12",
                    "subProducts":[
                    {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},
                    {
                        "productName":"Fruit Baskets",
                        "productId":"12",
                        "subProducts":[
                        {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                        {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                        {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                        {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                        {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                        
                        ]}
            ]
            },
{
            "subcategoryId":"3d",
            "subcategoryName":"Fresh Fruits",
            "products":[
            
            {
            "productName":"Banana, Sapota & Papaya",
            "productId":"11",
            "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
            
            ]},{
            "productName":"Kiwi, Melon, Citrus Fruit",
            "productId":"12",
            "subProducts":[
            {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
            
            ]},
            {
                "productName":"Banana, Sapota & Papaya",
                "productId":"11",
                "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                
                ]},{
                "productName":"Kiwi, Melon, Citrus Fruit",
                "productId":"12",
                "subProducts":[
                {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                
                ]},
                {
                    "productName":"Banana, Sapota & Papaya",
                    "productId":"11",
                    "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},{
                    "productName":"Mangoes",
                    "productId":"12",
                    "subProducts":[
                    {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},
                    {
                        "productName":"Fruit Baskets",
                        "productId":"12",
                        "subProducts":[
                        {"subproductId":"270","subproductName":"Kashmeeri Onion","info":"2"},
                        {"subproductId":"333","subproductName":"Washington Onion","info":"4"},
                        {"subproductId":"299","subproductName":"Alebela Onion","info":"6"},
                        {"subproductId":"390","subproductName":"Washington Potato","info":"7"},
                        {"subproductId":"310","subproductName":"Alebela Potato","info":"7"}
                          
                        ]}
            ]
            }

]
}]

//naveen product push
const ProductCrud={
    
    async uploadProducts(req,res,categorylist){
        try{
            var clear=await Products.Products.remove({});
            if(clear){
            var subcatIndex=0;
            var productIndex=0;
            for(let obj of categorylist){
                var halfobj=new Products.Products({categoryId:obj.categoryId,
                            categoryName:obj.categoryName,
                            childIds:obj.childIds,
                            subcategory:[]
                        });
                        console.log("we were here");
                var promise=await halfobj.save();
                console.log("we were p1");
                if(promise){               //halting the for loop
                      var record1=await Products.Products.findOne({categoryName:obj.categoryName});
                      if(record1){
                        console.log(record1);
                          subcatIndex=0;
                          for(let obj1 of obj.subcategory){
                            var halfobj1=new Products.SubCat({
                                          subcategoryId:obj1.subcategoryId,
                                          subcategoryName:obj1.subcategoryName,
                                          childIds:obj1.childIds,
                                          products:[]});
                            record1.subcategory.push(halfobj1);
                            //var promise1=await record1.save();
                            //if(promise1){
                                 //var record2=await Products.Products.findOne({categoryName:obj.categoryName});
                                 //if(record2){
                                      productIndex=0;
                                      for(let obj2 of obj1.products){
                                        var halfobj2=new Products.Product1({
                                                      productId:obj2.productId,
                                                      productName:obj2.productName,
                                                      childIds:obj2.childIds,
                                                      subProducts:[]});
                                                      console.log(subcatIndex);
                                        record1.subcategory[subcatIndex].products.push(halfobj2);
                                        //var promise2=await record2.save();
                                        //if(promise2){
                                            
                                             //var record3=await Products.Products.findOne({categoryName:obj.categoryName});
                                             //if(record3){
                                                 for(let obj3 of obj2.subProducts){
                                                     var priceArray=[];
                                                     if(obj3.info.priceAndAmount){
                                                     for(let obj4 of obj3.info.priceAndAmount){
                                                         priceArray.push(obj4);
                                                     }}
                                                     var imageArray=[];
                                                     if(obj3.imageUrls){
                                                     for(let obj5 of obj3.imageUrls){
                                                         imageArray.push(obj5);
                                                     }}
                                                    var halfobj3=new Products.SubProduct({
                                                                  subproductId:obj3.subproductId,
                                                                  subproductName:obj3.subproductName,
                                                                  info:{
                                                                      description:obj3.info.description,
                                                                      benefitsAndUses:obj3.info.benefitsAndUses,
                                                                      priceAndAmount:priceArray,
                                                                  },
                                                                  imageUrls:imageArray
                                                                  });
                                                    record1.subcategory[subcatIndex].products[productIndex].subProducts.push(halfobj3);
                                                    
                                                }
                                                
                                            //}
                                            
                
                                        //}
                                        productIndex++;
                                    
                                    
                                
                                }
                            
    
                            //}
                        //}
                        subcatIndex++;
                          }
                          var promise3=await record1.save();
                                                    if(promise3){
                                                        console.log("at last");
                            
                                                    }
                        }
                    
                
                }   
            }
            }
            }catch(error){
                console.log("some error occured during this"+error);
            } 
    },

    editProducts(req,res){
        console.log('i m  here edit')
        Products.Products.findOne({categoryId:req.body.stackTrace[0]},(error,object)=>{
            for(let subcategory of object.subcategory){
                if(subcategory.subcategoryId==req.body.stackTrace[1]){
                    for(let product of subcategory.products){
                        if(product.productId==req.body.stackTrace[2]){
                            for(let subproduct of product.subProducts){
                                if(subproduct.subproductId==req.body.stackTrace[3]){
                                    subproduct.info.description=req.body.description;
                                    subproduct.info.benefitsAndUses=req.body.benefitsAndUses;
                                    subproduct.info.priceAndAmount=req.body.priceAndAmount;
                                    object.save((err)=>{
                                        if(err){
                                            res.json(err)
                                         //   console.log("some error occured during database query");
                                        }
                                        else{
                                            res.json({'isPushed':true});
                                           
                                        }
                                    })
                                }
                            }
                        }
                    }
                }
            }
            
        })
    },

    imageUpload(req,res,result){
        console.log(req.body)
        //db.inventory.find( { "size.uom": "in" } )   
        Products.Products.findOne({categoryId:req.body.categoryId},(error,object)=>{
            for(let subcategory of object.subcategory){
                if(subcategory.subcategoryId==req.body.subcategoryId){
                    for(let product of subcategory.products){
                        if(product.productId==req.body.productId){
                            for(let subproduct of product.subProducts){
                                if(subproduct.subproductId==req.body.subproductId){
                                    console.log(' i here')
                                    subproduct.imageUrls.push(result);
                                    object.save((err)=>{
                                        if(err){
                                            console.log("some error occured during database query");
                                        }
                                        else{
                                            res.json(result);
                                         
                                        }
                                    })
                                }
                            }
                        }
                    }
                }
            }
            
        })
    },

    //milan deletebackend
    deleteImageBackend(req,res){
        
        //db.inventory.find( { "size.uom": "in" } )   
        Products.Products.findOne({categoryId:req.body.categoryId},(error,object)=>{
            for(let subcategory of object.subcategory){
                if(subcategory.subcategoryId==req.body.subcategoryId){
                    for(let product of subcategory.products){
                        if(product.productId==req.body.productId){
                            for(let subproduct of product.subProducts){
                                if(subproduct.subproductId==req.body.subproductId){
                                    console.log(' i here')
                                    subproduct.imageUrls.splice(req.body.index,1);
                                    object.save((err)=>{
                                        if(err){
                                            res.status(409).json('some error occured during database query')
                                          
                                        }
                                        else{
                                            res.status(200).json({'delete':true});
                                         
                                        }
                                    })
                                }
                            }
                        }
                    }
                }
            }
            
        })
    },

    //naveen  get product without id and v

    getProducts(req,res){ 
        Products.Products.find({},(err,products)=>{
            if(err){
                res.json("some error occures");
            }
            else{
               
                //logger.debug(products);
                var subcatIndex=0;
                var productIndex=0;
                var modProducts=[];
                for(let obj of products){
                    var halfobj={categoryId:obj.categoryId,
                            categoryName:obj.categoryName,
                            childIds:obj.childIds,
                            subcategory:[]
                        };
                        console.log(obj,halfobj);
                    subcatIndex=0;
                    for(let obj1 of obj.subcategory){
                        var halfobj1={
                                        subcategoryId:obj1.subcategoryId,
                                          subcategoryName:obj1.subcategoryName,
                                          childIds:obj1.childIds,
                                          products:[]};
                        halfobj.subcategory.push(halfobj1);
                        productIndex=0;
                        for(let obj2 of obj1.products){
                            var halfobj2={
                                            productId:obj2.productId,
                                            productName:obj2.productName,
                                            childIds:obj2.childIds,
                                            subProducts:[]};
                                            //console.log(subcatIndex);
                            halfobj.subcategory[subcatIndex].products.push(halfobj2);
                            for(let obj3 of obj2.subProducts){
                                var priceArray=[];
                                if(obj3.info.priceAndAmount){
                                    for(let obj4 of obj3.info.priceAndAmount){
                                         priceArray.push(obj4);
                                }}
                                var imageArray=[];
                                if(obj3.imageUrls){
                                for(let obj5 of obj3.imageUrls){
                                    let obj6={
                                        uri: obj5.uri
                                    }
                                    imageArray.push(obj6);
                                }}
                                var halfobj3={
                                    subproductId:obj3.subproductId,
                                    subproductName:obj3.subproductName,
                                    info:{
                                        description:obj3.info.description,
                                        benefitsAndUses:obj3.info.benefitsAndUses,
                                        priceAndAmount:priceArray,
                                    },
                                    imageUrls:imageArray
                                };
                                halfobj.subcategory[subcatIndex].products[productIndex].subProducts.push(halfobj3);
                                                    
                                                }

                                        productIndex++;                                
                                }
                        subcatIndex++;
                    }
                          modProducts.push(halfobj);
                        }
                //console.log(modProducts[0].subcategory[0].products[0].subProducts);
                //logger.debug("hi");
                res.json(modProducts);
            }
            
        })
    }

    
}

module.exports=ProductCrud; 