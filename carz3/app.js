(function () {
  'use strict';
  var FORM_ENDPOINT = '';
  var isTouch = window.matchMedia('(pointer: coarse)').matches;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let CARS = [
  {
    "id": "bmw-x3-2026-4561",
    "brand": "BMW",
    "model": "X3",
    "year": 2026,
    "engineVolume": 2,
    "horsePower": 258,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 2500,
    "price": 81800,
    "priceIsFrom": false,
    "features": [
      "M Sport Package"
    ],
    "location": "South Korea",
    "status": "Available to Order",
    "images": [
      "images/cars/bmw-x3/bmw-x3-1.jpg",
      "images/cars/bmw-x3/bmw-x3-2.jpg",
      "images/cars/bmw-x3/bmw-x3-3.jpg",
      "images/cars/bmw-x3/bmw-x3-4.jpg",
      "images/cars/bmw-x3/bmw-x3-5.jpg",
      "images/cars/bmw-x3/bmw-x3-6.jpg",
      "images/cars/bmw-x3/bmw-x3-7.jpg",
      "images/cars/bmw-x3/bmw-x3-8.jpg"
    ]
  },
  {
    "id": "mazda-cx-5-2026-6238",
    "brand": "Mazda",
    "model": "CX-5",
    "year": 2026,
    "engineVolume": 2,
    "horsePower": 155,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 27500,
    "priceIsFrom": true,
    "features": [
      "Executive Flagship Package"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/mazda-cx5/mazda-cx5-1.jpg",
      "images/cars/mazda-cx5/mazda-cx5-2.jpg",
      "images/cars/mazda-cx5/mazda-cx5-3.jpg",
      "images/cars/mazda-cx5/mazda-cx5-4.jpg",
      "images/cars/mazda-cx5/mazda-cx5-5.jpg",
      "images/cars/mazda-cx5/mazda-cx5-6.jpg",
      "images/cars/mazda-cx5/mazda-cx5-7.jpg",
      "images/cars/mazda-cx5/mazda-cx5-8.jpg",
      "images/cars/mazda-cx5/mazda-cx5-9.jpg",
      "images/cars/mazda-cx5/mazda-cx5-10.jpg"
    ]
  },
  {
    "id": "nissan-qashqai-2026-8828",
    "brand": "Nissan",
    "model": "Qashqai",
    "year": 2026,
    "engineVolume": 2,
    "horsePower": 140,
    "transmission": "CVT",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 24900,
    "priceIsFrom": true,
    "features": [
      "Executive Flagship Package"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/nissan-qashqai/nissan-qashqai-1.jpg",
      "images/cars/nissan-qashqai/nissan-qashqai-2.jpg",
      "images/cars/nissan-qashqai/nissan-qashqai-3.jpg",
      "images/cars/nissan-qashqai/nissan-qashqai-4.jpg",
      "images/cars/nissan-qashqai/nissan-qashqai-5.jpg"
    ]
  },
  {
    "id": "bmw-320l-2023-2445",
    "brand": "BMW",
    "model": "320L",
    "year": 2023,
    "engineVolume": 2,
    "horsePower": 156,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 18650,
    "price": 33600,
    "priceIsFrom": true,
    "features": [
      "M Sport Package"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/BMW-320L/BMW-320L-1.jpg",
      "images/cars/BMW-320L/BMW-320L-2.jpg",
      "images/cars/BMW-320L/BMW-320L-3.jpg",
      "images/cars/BMW-320L/BMW-320L-4.jpg",
      "images/cars/BMW-320L/BMW-320L-5.jpg",
      "images/cars/BMW-320L/BMW-320L-6.jpg",
      "images/cars/BMW-320L/BMW-320L-7.jpg"
    ]
  },
  {
    "id": "audi-q3-2021-4273",
    "brand": "Audi",
    "model": "Q3",
    "year": 2026,
    "engineVolume": 1.5,
    "horsePower": 160,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 30450,
    "price": 40800,
    "priceIsFrom": false,
    "features": [
      "Panoramic Glass Roof"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Audi-q3/Audi-Q3-1.jpg",
      "images/cars/Audi-q3/Audi-Q3-10.jpg",
      "images/cars/Audi-q3/Audi-Q3-11.jpg",
      "images/cars/Audi-q3/Audi-Q3-12.jpg",
      "images/cars/Audi-q3/Audi-Q3-13.jpg",
      "images/cars/Audi-q3/Audi-Q3-14.jpg",
      "images/cars/Audi-q3/Audi-Q3-15.jpg",
      "images/cars/Audi-q3/Audi-Q3-2.jpg",
      "images/cars/Audi-q3/Audi-Q3-3.jpg",
      "images/cars/Audi-q3/Audi-Q3-4.jpg",
      "images/cars/Audi-q3/Audi-Q3-5.jpg",
      "images/cars/Audi-q3/Audi-Q3-6.jpg",
      "images/cars/Audi-q3/Audi-Q3-7.jpg",
      "images/cars/Audi-q3/Audi-Q3-8.jpg",
      "images/cars/Audi-q3/Audi-Q3-9.jpg"
    ]
  },
  {
    "id": "nissan-x-trail-2026-1120",
    "brand": "Nissan",
    "model": "X-Trail",
    "year": 2026,
    "engineVolume": 2,
    "horsePower": 141,
    "transmission": "CVT",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 26600,
    "priceIsFrom": true,
    "features": [
      "360° Surround View"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/nissan-xtrail-2026/nissan-xtrail-2026-1.jpg",
      "images/cars/nissan-xtrail-2026/nissan-xtrail-2026-2.jpg",
      "images/cars/nissan-xtrail-2026/nissan-xtrail-2026-3.jpg",
      "images/cars/nissan-xtrail-2026/nissan-xtrail-2026-4.jpg",
      "images/cars/nissan-xtrail-2026/nissan-xtrail-2026-5.jpg",
      "images/cars/nissan-xtrail-2026/nissan-xtrail-2026-6.jpg"
    ]
  },
  {
    "id": "kia-seltos-2026-8591",
    "brand": "Kia",
    "model": "Seltos",
    "year": 2026,
    "engineVolume": 1.5,
    "horsePower": 116,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 23400,
    "priceIsFrom": true,
    "features": [
      "Adaptive Cruise Control",
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/kia-seltos/kia-seltos-1.jpg",
      "images/cars/kia-seltos/kia-seltos-2.jpg",
      "images/cars/kia-seltos/kia-seltos-3.jpg",
      "images/cars/kia-seltos/kia-seltos-4.jpg",
      "images/cars/kia-seltos/kia-seltos-5.jpg",
      "images/cars/kia-seltos/kia-seltos-6.jpg"
    ]
  },
  {
    "id": "hyundai-elantra-2025-3490",
    "brand": "Hyundai",
    "model": "Elantra",
    "year": 2025,
    "engineVolume": 1.5,
    "horsePower": 115,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 24200,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/hyundai-elantra-2025/hyundai-elantra-2025-1.jpg",
      "images/cars/hyundai-elantra-2025/hyundai-elantra-2025-2.jpg",
      "images/cars/hyundai-elantra-2025/hyundai-elantra-2025-3.jpg",
      "images/cars/hyundai-elantra-2025/hyundai-elantra-2025-4.jpg",
      "images/cars/hyundai-elantra-2025/hyundai-elantra-2025-5.jpg",
      "images/cars/hyundai-elantra-2025/hyundai-elantra-2025-6.jpg",
      "images/cars/hyundai-elantra-2025/hyundai-elantra-2025-7.jpg",
      "images/cars/hyundai-elantra-2025/hyundai-elantra-2025-8.jpg"
    ]
  },
  {
    "id": "geely-coolray-2026-3057",
    "brand": "Geely",
    "model": "Coolray",
    "year": 2026,
    "engineVolume": 1.5,
    "horsePower": 122,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 19500,
    "priceIsFrom": true,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/geely-coolray-2026/geely-coolray-2026-1.jpg",
      "images/cars/geely-coolray-2026/geely-coolray-2026-10.jpg",
      "images/cars/geely-coolray-2026/geely-coolray-2026-2.jpg",
      "images/cars/geely-coolray-2026/geely-coolray-2026-3.jpg",
      "images/cars/geely-coolray-2026/geely-coolray-2026-4.jpg",
      "images/cars/geely-coolray-2026/geely-coolray-2026-5.jpg",
      "images/cars/geely-coolray-2026/geely-coolray-2026-6.jpg",
      "images/cars/geely-coolray-2026/geely-coolray-2026-7.jpg",
      "images/cars/geely-coolray-2026/geely-coolray-2026-8.jpg",
      "images/cars/geely-coolray-2026/geely-coolray-2026-9.jpg"
    ]
  },
  {
    "id": "kia-kx1-2026-3107",
    "brand": "Kia",
    "model": "KX1",
    "year": 2026,
    "engineVolume": 1.4,
    "horsePower": 100,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 18900,
    "priceIsFrom": true,
    "features": [
      "360° Camera Suite"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Kia-kx1-2026/Kia-kx1-2026-1.jpg",
      "images/cars/Kia-kx1-2026/Kia-kx1-2026-2.jpg",
      "images/cars/Kia-kx1-2026/Kia-kx1-2026-3.jpg",
      "images/cars/Kia-kx1-2026/Kia-kx1-2026-4.jpg",
      "images/cars/Kia-kx1-2026/Kia-kx1-2026-5.jpg",
      "images/cars/Kia-kx1-2026/Kia-kx1-2026-6.jpg",
      "images/cars/Kia-kx1-2026/Kia-kx1-2026-7.jpg",
      "images/cars/Kia-kx1-2026/Kia-kx1-2026-8.jpg",
      "images/cars/Kia-kx1-2026/Kia-kx1-2026-9.jpg"
    ]
  },
  {
    "id": "volkswagen-t-roc-2026-8203",
    "brand": "Volkswagen",
    "model": "T-Roc",
    "year": 2026,
    "engineVolume": 1.4,
    "horsePower": 150,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 28200,
    "priceIsFrom": false,
    "features": [
      "Panoramic Glass Roof"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Volkswagen-T-Roc/Volkswagen-T-Roc-1.jpg",
      "images/cars/Volkswagen-T-Roc/Volkswagen-T-Roc-2.jpg",
      "images/cars/Volkswagen-T-Roc/Volkswagen-T-Roc-3.jpg",
      "images/cars/Volkswagen-T-Roc/Volkswagen-T-Roc-4.jpg",
      "images/cars/Volkswagen-T-Roc/Volkswagen-T-Roc-5.jpg",
      "images/cars/Volkswagen-T-Roc/Volkswagen-T-Roc-6.jpg",
      "images/cars/Volkswagen-T-Roc/Volkswagen-T-Roc-7.jpg"
    ]
  },
  {
    "id": "audi-a5-2026-9968",
    "brand": "Audi",
    "model": "A5",
    "year": 2026,
    "engineVolume": 2,
    "horsePower": 204,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 61500,
    "priceIsFrom": true,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/audi-a5-2026/audi-a5-2026-1.jpg",
      "images/cars/audi-a5-2026/audi-a5-2026-2.jpg",
      "images/cars/audi-a5-2026/audi-a5-2026-3.jpg",
      "images/cars/audi-a5-2026/audi-a5-2026-4.jpg",
      "images/cars/audi-a5-2026/audi-a5-2026-5.jpg"
    ]
  },
  {
    "id": "toyota-rav-4-2026-6112",
    "brand": "Toyota",
    "model": "RAV-4",
    "year": 2026,
    "engineVolume": 2,
    "horsePower": 171,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 43400,
    "priceIsFrom": false,
    "features": [
      "Adventure Plus"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/toyota-rav-4/toyota-rav-4-1.jpg",
      "images/cars/toyota-rav-4/toyota-rav-4-2.jpg",
      "images/cars/toyota-rav-4/toyota-rav-4-3.jpg",
      "images/cars/toyota-rav-4/toyota-rav-4-4.jpg",
      "images/cars/toyota-rav-4/toyota-rav-4-5.jpg",
      "images/cars/toyota-rav-4/toyota-rav-4-6.jpg",
      "images/cars/toyota-rav-4/toyota-rav-4-7.jpg",
      "images/cars/toyota-rav-4/toyota-rav-4-8.jpg"
    ]
  },
  {
    "id": "volkswagen-tharu-xr-2026-99",
    "brand": "Volkswagen",
    "model": "Tharu XR",
    "year": 2026,
    "engineVolume": 1.5,
    "horsePower": 110,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 23200,
    "priceIsFrom": true,
    "features": [
      "360° Camera Suite"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Volkswagen-Tharu-XR-2026/Volkswagen-Tharu-XR-2026-1.jpg",
      "images/cars/Volkswagen-Tharu-XR-2026/Volkswagen-Tharu-XR-2026-10.jpg",
      "images/cars/Volkswagen-Tharu-XR-2026/Volkswagen-Tharu-XR-2026-11.jpg",
      "images/cars/Volkswagen-Tharu-XR-2026/Volkswagen-Tharu-XR-2026-12.jpg",
      "images/cars/Volkswagen-Tharu-XR-2026/Volkswagen-Tharu-XR-2026-13.jpg",
      "images/cars/Volkswagen-Tharu-XR-2026/Volkswagen-Tharu-XR-2026-14.jpg",
      "images/cars/Volkswagen-Tharu-XR-2026/Volkswagen-Tharu-XR-2026-15.jpg",
      "images/cars/Volkswagen-Tharu-XR-2026/Volkswagen-Tharu-XR-2026-2.jpg",
      "images/cars/Volkswagen-Tharu-XR-2026/Volkswagen-Tharu-XR-2026-3.jpg",
      "images/cars/Volkswagen-Tharu-XR-2026/Volkswagen-Tharu-XR-2026-4.jpg",
      "images/cars/Volkswagen-Tharu-XR-2026/Volkswagen-Tharu-XR-2026-5.jpg",
      "images/cars/Volkswagen-Tharu-XR-2026/Volkswagen-Tharu-XR-2026-6.jpg",
      "images/cars/Volkswagen-Tharu-XR-2026/Volkswagen-Tharu-XR-2026-7.jpg",
      "images/cars/Volkswagen-Tharu-XR-2026/Volkswagen-Tharu-XR-2026-8.jpg",
      "images/cars/Volkswagen-Tharu-XR-2026/Volkswagen-Tharu-XR-2026-9.jpg"
    ]
  },
  {
    "id": "toyota-highlander-2026-1468",
    "brand": "Toyota",
    "model": "Highlander",
    "year": 2026,
    "engineVolume": 2,
    "horsePower": 248,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 57800,
    "priceIsFrom": false,
    "features": [],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Toyota-Highlander-2026/Toyota-Highlander-2026-1.jpg",
      "images/cars/Toyota-Highlander-2026/Toyota-Highlander-2026-2.jpg",
      "images/cars/Toyota-Highlander-2026/Toyota-Highlander-2026-3.jpg",
      "images/cars/Toyota-Highlander-2026/Toyota-Highlander-2026-4.jpg",
      "images/cars/Toyota-Highlander-2026/Toyota-Highlander-2026-5.jpg",
      "images/cars/Toyota-Highlander-2026/Toyota-Highlander-2026-6.jpg"
    ]
  },
  {
    "id": "kia-k3-2026-7546",
    "brand": "Kia",
    "model": "K3",
    "year": 2026,
    "engineVolume": 1.5,
    "horsePower": 115,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 22300,
    "priceIsFrom": true,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/kia-k3/kia-k3-1.jpg",
      "images/cars/kia-k3/kia-k3-10.jpg",
      "images/cars/kia-k3/kia-k3-11.jpg",
      "images/cars/kia-k3/kia-k3-12.jpg",
      "images/cars/kia-k3/kia-k3-2.jpg",
      "images/cars/kia-k3/kia-k3-3.jpg",
      "images/cars/kia-k3/kia-k3-4.jpg",
      "images/cars/kia-k3/kia-k3-5.jpg",
      "images/cars/kia-k3/kia-k3-6.jpg",
      "images/cars/kia-k3/kia-k3-7.jpg",
      "images/cars/kia-k3/kia-k3-8.jpg",
      "images/cars/kia-k3/kia-k3-9.jpg"
    ]
  },
  {
    "id": "mazda-cx-50-2026-923",
    "brand": "Mazda",
    "model": "CX-50",
    "year": 2026,
    "engineVolume": 2,
    "horsePower": 155,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 36600,
    "priceIsFrom": false,
    "features": [
      "Panoramic Glass Roof"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/mazda-cx-50/mazda-cx-50-1.jpg",
      "images/cars/mazda-cx-50/mazda-cx-50-2.jpg",
      "images/cars/mazda-cx-50/mazda-cx-50-3.jpg",
      "images/cars/mazda-cx-50/mazda-cx-50-4.jpg",
      "images/cars/mazda-cx-50/mazda-cx-50-5.jpg",
      "images/cars/mazda-cx-50/mazda-cx-50-6.jpg",
      "images/cars/mazda-cx-50/mazda-cx-50-7.jpg",
      "images/cars/mazda-cx-50/mazda-cx-50-8.jpg"
    ]
  },
  {
    "id": "volkswagen-tiguan-l-pro-2026-1455",
    "brand": "Volkswagen",
    "model": "Tiguan L Pro",
    "year": 2026,
    "engineVolume": 2,
    "horsePower": 220,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 51000,
    "priceIsFrom": false,
    "features": [
      "Panoramic Glass Roof"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/volkswagen-tiguan-l-pro/volkswagen-tiguan-l-pro-1.jpg",
      "images/cars/volkswagen-tiguan-l-pro/volkswagen-tiguan-l-pro-10.jpg",
      "images/cars/volkswagen-tiguan-l-pro/volkswagen-tiguan-l-pro-11.jpg",
      "images/cars/volkswagen-tiguan-l-pro/volkswagen-tiguan-l-pro-2.jpg",
      "images/cars/volkswagen-tiguan-l-pro/volkswagen-tiguan-l-pro-3.jpg",
      "images/cars/volkswagen-tiguan-l-pro/volkswagen-tiguan-l-pro-4.jpg",
      "images/cars/volkswagen-tiguan-l-pro/volkswagen-tiguan-l-pro-5.jpg",
      "images/cars/volkswagen-tiguan-l-pro/volkswagen-tiguan-l-pro-6.jpg",
      "images/cars/volkswagen-tiguan-l-pro/volkswagen-tiguan-l-pro-7.jpg",
      "images/cars/volkswagen-tiguan-l-pro/volkswagen-tiguan-l-pro-8.jpg",
      "images/cars/volkswagen-tiguan-l-pro/volkswagen-tiguan-l-pro-9.jpg"
    ]
  },
  {
    "id": "hyundai-sonata-2023-6765",
    "brand": "Hyundai",
    "model": "Sonata",
    "year": 2023,
    "engineVolume": 2,
    "horsePower": 159,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 26700,
    "price": 33600,
    "priceIsFrom": false,
    "features": [
      "Nappa Leather Interior"
    ],
    "location": "South Korea",
    "status": "Available to Order",
    "images": [
      "images/cars/hyundai-sonata/hyundai-sonata-1.jpg",
      "images/cars/hyundai-sonata/hyundai-sonata-2.jpg",
      "images/cars/hyundai-sonata/hyundai-sonata-3.jpg",
      "images/cars/hyundai-sonata/hyundai-sonata-4.jpg",
      "images/cars/hyundai-sonata/hyundai-sonata-5.jpg",
      "images/cars/hyundai-sonata/hyundai-sonata-6.jpg"
    ]
  },
  {
    "id": "volkswagen-teramont-pro-2026-4538",
    "brand": "Volkswagen",
    "model": "Teramont Pro",
    "year": 2026,
    "engineVolume": 2,
    "horsePower": 272,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 63800,
    "priceIsFrom": false,
    "features": [
      "Panoramic Glass Roof"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/volkswagen-teramont-pro/volkswagen-teramont-pro-1.jpg",
      "images/cars/volkswagen-teramont-pro/volkswagen-teramont-pro-10.jpg",
      "images/cars/volkswagen-teramont-pro/volkswagen-teramont-pro-2.jpg",
      "images/cars/volkswagen-teramont-pro/volkswagen-teramont-pro-3.jpg",
      "images/cars/volkswagen-teramont-pro/volkswagen-teramont-pro-4.jpg",
      "images/cars/volkswagen-teramont-pro/volkswagen-teramont-pro-5.jpg",
      "images/cars/volkswagen-teramont-pro/volkswagen-teramont-pro-6.jpg",
      "images/cars/volkswagen-teramont-pro/volkswagen-teramont-pro-7.jpg",
      "images/cars/volkswagen-teramont-pro/volkswagen-teramont-pro-8.jpg",
      "images/cars/volkswagen-teramont-pro/volkswagen-teramont-pro-9.jpg"
    ]
  },
  {
    "id": "kia-k5-2023-3069",
    "brand": "Kia",
    "model": "K5",
    "year": 2023,
    "engineVolume": 2,
    "horsePower": 160,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 14800,
    "price": 29900,
    "priceIsFrom": false,
    "features": [
      "Panoramic Glass Roof"
    ],
    "location": "South Korea",
    "status": "Available to Order",
    "images": [
      "images/cars/kia-k5/kia-k5-1.jpg",
      "images/cars/kia-k5/kia-k5-2.jpg",
      "images/cars/kia-k5/kia-k5-3.jpg",
      "images/cars/kia-k5/kia-k5-4.jpg",
      "images/cars/kia-k5/kia-k5-5.jpg",
      "images/cars/kia-k5/kia-k5-6.jpg"
    ]
  },
  {
    "id": "honda-vezel-2023-8602",
    "brand": "Honda",
    "model": "Vezel",
    "year": 2023,
    "engineVolume": 1.5,
    "horsePower": 124,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 9300,
    "price": 21600,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Honda-Vezel/Honda-Vezel-1.jpg",
      "images/cars/Honda-Vezel/Honda-Vezel-2.jpg",
      "images/cars/Honda-Vezel/Honda-Vezel-3.jpg",
      "images/cars/Honda-Vezel/Honda-Vezel-4.jpg",
      "images/cars/Honda-Vezel/Honda-Vezel-5.jpg",
      "images/cars/Honda-Vezel/Honda-Vezel-6.jpg",
      "images/cars/Honda-Vezel/Honda-Vezel-7.jpg",
      "images/cars/Honda-Vezel/Honda-Vezel-8.jpg"
    ]
  },
  {
    "id": "volkswagen-touran-l-2022-2869",
    "brand": "Volkswagen",
    "model": "Touran L",
    "year": 2022,
    "engineVolume": 1.4,
    "horsePower": 150,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 3100,
    "price": 26000,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Volkswagen-Touran-L-280TSI-DSG/Volkswagen-Touran-L-280TSI-DSG-1.jpg",
      "images/cars/Volkswagen-Touran-L-280TSI-DSG/Volkswagen-Touran-L-280TSI-DSG-2.jpg",
      "images/cars/Volkswagen-Touran-L-280TSI-DSG/Volkswagen-Touran-L-280TSI-DSG-3.jpg",
      "images/cars/Volkswagen-Touran-L-280TSI-DSG/Volkswagen-Touran-L-280TSI-DSG-4.jpg",
      "images/cars/Volkswagen-Touran-L-280TSI-DSG/Volkswagen-Touran-L-280TSI-DSG-5.jpg",
      "images/cars/Volkswagen-Touran-L-280TSI-DSG/Volkswagen-Touran-L-280TSI-DSG-6.jpg",
      "images/cars/Volkswagen-Touran-L-280TSI-DSG/Volkswagen-Touran-L-280TSI-DSG-7.jpg"
    ]
  },
  {
    "id": "mini-countryman-cooper-2022-1189",
    "brand": "MINI",
    "model": "Countryman Cooper",
    "year": 2022,
    "engineVolume": 1.5,
    "horsePower": 136,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 23000,
    "price": 28200,
    "priceIsFrom": false,
    "features": [
      "Panoramic Glass Roof"
    ],
    "location": "South Korea",
    "status": "Available to Order",
    "images": [
      "images/cars/Mini-Countryman-Cooper/Mini-Countryman-Cooper-1.jpg",
      "images/cars/Mini-Countryman-Cooper/Mini-Countryman-Cooper-2.jpg",
      "images/cars/Mini-Countryman-Cooper/Mini-Countryman-Cooper-3.jpg",
      "images/cars/Mini-Countryman-Cooper/Mini-Countryman-Cooper-4.jpg",
      "images/cars/Mini-Countryman-Cooper/Mini-Countryman-Cooper-5.jpg",
      "images/cars/Mini-Countryman-Cooper/Mini-Countryman-Cooper-6.jpg"
    ]
  },
  {
    "id": "hyundai-tucson-2026-5171",
    "brand": "Hyundai",
    "model": "Tucson",
    "year": 2026,
    "engineVolume": 1.5,
    "horsePower": 200,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 41200,
    "priceIsFrom": false,
    "features": [
      "Panoramic Glass Roof"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Hyundai-Tucson/Hyundai-Tucson-1.jpg",
      "images/cars/Hyundai-Tucson/Hyundai-Tucson-10.jpg",
      "images/cars/Hyundai-Tucson/Hyundai-Tucson-2.jpg",
      "images/cars/Hyundai-Tucson/Hyundai-Tucson-3.jpg",
      "images/cars/Hyundai-Tucson/Hyundai-Tucson-4.jpg",
      "images/cars/Hyundai-Tucson/Hyundai-Tucson-5.jpg",
      "images/cars/Hyundai-Tucson/Hyundai-Tucson-6.jpg",
      "images/cars/Hyundai-Tucson/Hyundai-Tucson-7.jpg",
      "images/cars/Hyundai-Tucson/Hyundai-Tucson-8.jpg",
      "images/cars/Hyundai-Tucson/Hyundai-Tucson-9.jpg"
    ]
  },
  {
    "id": "audi-a5l-2026-9573",
    "brand": "Audi",
    "model": "A5L",
    "year": 2026,
    "engineVolume": 2,
    "horsePower": 204,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 61700,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/AUDI-A5L/AUDI-A5L-1.jpg",
      "images/cars/AUDI-A5L/AUDI-A5L-2.jpg",
      "images/cars/AUDI-A5L/AUDI-A5L-3.jpg",
      "images/cars/AUDI-A5L/AUDI-A5L-4.jpg",
      "images/cars/AUDI-A5L/AUDI-A5L-5.jpg",
      "images/cars/AUDI-A5L/AUDI-A5L-6.jpg"
    ]
  },
  {
    "id": "lexus-nx200-2025-5669",
    "brand": "Lexus",
    "model": "NX200",
    "year": 2025,
    "engineVolume": 2,
    "horsePower": 173,
    "transmission": "CVT",
    "drivetrain": "FWD",
    "mileage": 2500,
    "price": 61800,
    "priceIsFrom": false,
    "features": [
      "Panoramic Sunroof"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Lexus-NX200/Lexus-NX200-1.jpg",
      "images/cars/Lexus-NX200/Lexus-NX200-2.jpg",
      "images/cars/Lexus-NX200/Lexus-NX200-3.jpg",
      "images/cars/Lexus-NX200/Lexus-NX200-4.jpg",
      "images/cars/Lexus-NX200/Lexus-NX200-5.jpg",
      "images/cars/Lexus-NX200/Lexus-NX200-6.jpg"
    ]
  },
  {
    "id": "toyota-bz3x-2025-8853",
    "brand": "Toyota",
    "model": "bZ3X",
    "year": 2025,
    "engineVolume": null,
    "horsePower": 204,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 35800,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Toyota-bZ3X/Toyota-bZ3X-1.jpg",
      "images/cars/Toyota-bZ3X/Toyota-bZ3X-2.jpg",
      "images/cars/Toyota-bZ3X/Toyota-bZ3X-3.jpg",
      "images/cars/Toyota-bZ3X/Toyota-bZ3X-4.jpg",
      "images/cars/Toyota-bZ3X/Toyota-bZ3X-5.jpg",
      "images/cars/Toyota-bZ3X/Toyota-bZ3X-6.jpg",
      "images/cars/Toyota-bZ3X/Toyota-bZ3X-7.jpg",
      "images/cars/Toyota-bZ3X/Toyota-bZ3X-8.jpg",
      "images/cars/Toyota-bZ3X/Toyota-bZ3X-9.jpg"
    ]
  },
  {
    "id": "benda-lfc-700-pro-2026-8003",
    "brand": "Benda",
    "model": "LFC 700 pro",
    "year": 2026,
    "engineVolume": 0.7,
    "horsePower": 78,
    "transmission": "Manual",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 10700,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Benda-LFC-700-pro/Benda-LFC-700-pro-1.jpg",
      "images/cars/Benda-LFC-700-pro/Benda-LFC-700-pro-2.jpg",
      "images/cars/Benda-LFC-700-pro/Benda-LFC-700-pro-3.jpg"
    ]
  },
  {
    "id": "hyundai-santa-fe-2026-5354",
    "brand": "Hyundai",
    "model": "Santa Fe",
    "year": 2026,
    "engineVolume": 2.5,
    "horsePower": 281,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 1850,
    "price": 77300,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "South Korea",
    "status": "Available to Order",
    "images": [
      "images/cars/Hyundai-Santa-Fe/Hyundai-Santa-Fe-1.jpg",
      "images/cars/Hyundai-Santa-Fe/Hyundai-Santa-Fe-2.jpg",
      "images/cars/Hyundai-Santa-Fe/Hyundai-Santa-Fe-3.jpg",
      "images/cars/Hyundai-Santa-Fe/Hyundai-Santa-Fe-4.jpg",
      "images/cars/Hyundai-Santa-Fe/Hyundai-Santa-Fe-5.jpg",
      "images/cars/Hyundai-Santa-Fe/Hyundai-Santa-Fe-6.jpg",
      "images/cars/Hyundai-Santa-Fe/Hyundai-Santa-Fe-7.jpg",
      "images/cars/Hyundai-Santa-Fe/Hyundai-Santa-Fe-8.jpg"
    ]
  },
  {
    "id": "changan-uni-s-2026-1858",
    "brand": "Changan",
    "model": "UNI-S",
    "year": 2026,
    "engineVolume": 1.5,
    "horsePower": 147,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 32100,
    "priceIsFrom": false,
    "features": [
      "Panoramic Glass Roof"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Changan-UNI-S/Changan-UNI-S-1.jpg",
      "images/cars/Changan-UNI-S/Changan-UNI-S-2.jpg",
      "images/cars/Changan-UNI-S/Changan-UNI-S-3.jpg",
      "images/cars/Changan-UNI-S/Changan-UNI-S-4.jpg",
      "images/cars/Changan-UNI-S/Changan-UNI-S-5.jpg",
      "images/cars/Changan-UNI-S/Changan-UNI-S-6.jpg"
    ]
  },
  {
    "id": "kia-sportage-2026-242",
    "brand": "Kia",
    "model": "Sportage",
    "year": 2026,
    "engineVolume": 1.5,
    "horsePower": 200,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 40100,
    "priceIsFrom": false,
    "features": [
      "360° Camera Suite"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/KIA-Sportage/KIA-Sportage-1.jpg",
      "images/cars/KIA-Sportage/KIA-Sportage-2.jpg",
      "images/cars/KIA-Sportage/KIA-Sportage-3.jpg",
      "images/cars/KIA-Sportage/KIA-Sportage-4.jpg",
      "images/cars/KIA-Sportage/KIA-Sportage-5.jpg",
      "images/cars/KIA-Sportage/KIA-Sportage-6.jpg"
    ]
  },
  {
    "id": "geely-galaxy-starship-7-2026-6564",
    "brand": "Geely",
    "model": "Galaxy Starship 7",
    "year": 2026,
    "engineVolume": 1.5,
    "horsePower": 238,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 40700,
    "priceIsFrom": false,
    "features": [
      "Nappa Leather Interior"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Geely-Galaxy-Starship-7/Geely-Galaxy-Starship-7-1.jpg",
      "images/cars/Geely-Galaxy-Starship-7/Geely-Galaxy-Starship-7-2.jpg",
      "images/cars/Geely-Galaxy-Starship-7/Geely-Galaxy-Starship-7-3.jpg",
      "images/cars/Geely-Galaxy-Starship-7/Geely-Galaxy-Starship-7-4.jpg",
      "images/cars/Geely-Galaxy-Starship-7/Geely-Galaxy-Starship-7-5.jpg",
      "images/cars/Geely-Galaxy-Starship-7/Geely-Galaxy-Starship-7-6.jpg"
    ]
  },
  {
    "id": "toyota-camry-2026-4318",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2026,
    "engineVolume": 2,
    "horsePower": 197,
    "transmission": "CVT",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 41200,
    "priceIsFrom": false,
    "features": [
      "Nappa Leather Interior"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Toyota-Camry/Toyota-Camry-1.jpg",
      "images/cars/Toyota-Camry/Toyota-Camry-2.jpg",
      "images/cars/Toyota-Camry/Toyota-Camry-3.jpg",
      "images/cars/Toyota-Camry/Toyota-Camry-4.jpg"
    ]
  },
  {
    "id": "geely-monjaro-2026-6998",
    "brand": "Geely",
    "model": "Monjaro",
    "year": 2026,
    "engineVolume": 2,
    "horsePower": 272,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 44000,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Geely-Monjaro/Geely-Monjaro-1.jpg",
      "images/cars/Geely-Monjaro/Geely-Monjaro-2.jpg",
      "images/cars/Geely-Monjaro/Geely-Monjaro-3.jpg"
    ]
  },
  {
    "id": "volkswagen-sagitar-2022-7500",
    "brand": "Volkswagen",
    "model": "Sagitar",
    "year": 2022,
    "engineVolume": 1.4,
    "horsePower": 149,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 34800,
    "price": 21200,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Volkswagen-Sagitar-2022/Volkswagen-Sagitar-2022-1.jpg",
      "images/cars/Volkswagen-Sagitar-2022/Volkswagen-Sagitar-2022-2.jpg",
      "images/cars/Volkswagen-Sagitar-2022/Volkswagen-Sagitar-2022-3.jpg",
      "images/cars/Volkswagen-Sagitar-2022/Volkswagen-Sagitar-2022-4.jpg",
      "images/cars/Volkswagen-Sagitar-2022/Volkswagen-Sagitar-2022-5.jpg"
    ]
  },
  {
    "id": "kia-morning-2023-96",
    "brand": "Kia",
    "model": "Morning",
    "year": 2023,
    "engineVolume": 1,
    "horsePower": 76,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 14400,
    "price": 18400,
    "priceIsFrom": false,
    "features": [
      "360° Camera Suite"
    ],
    "location": "South Korea",
    "status": "Available to Order",
    "images": [
      "images/cars/KIA-MORNING/KIA-MORNING-1.jpg",
      "images/cars/KIA-MORNING/KIA-MORNING-2.jpg",
      "images/cars/KIA-MORNING/KIA-MORNING-3.jpg",
      "images/cars/KIA-MORNING/KIA-MORNING-4.jpg",
      "images/cars/KIA-MORNING/KIA-MORNING-5.jpg",
      "images/cars/KIA-MORNING/KIA-MORNING-6.jpg"
    ]
  },
  {
    "id": "hyundai-venue-2024-931",
    "brand": "Hyundai",
    "model": "Venue",
    "year": 2024,
    "engineVolume": 1.6,
    "horsePower": 121,
    "transmission": "CVT",
    "drivetrain": "FWD",
    "mileage": 6150,
    "price": 23800,
    "priceIsFrom": false,
    "features": [
      "360° Camera Suite"
    ],
    "location": "South Korea",
    "status": "Available to Order",
    "images": [
      "images/cars/Hyundai-Venue/Hyundai-Venue-1.jpg",
      "images/cars/Hyundai-Venue/Hyundai-Venue-10.jpg",
      "images/cars/Hyundai-Venue/Hyundai-Venue-2.jpg",
      "images/cars/Hyundai-Venue/Hyundai-Venue-3.jpg",
      "images/cars/Hyundai-Venue/Hyundai-Venue-4.jpg",
      "images/cars/Hyundai-Venue/Hyundai-Venue-5.jpg",
      "images/cars/Hyundai-Venue/Hyundai-Venue-6.jpg",
      "images/cars/Hyundai-Venue/Hyundai-Venue-7.jpg",
      "images/cars/Hyundai-Venue/Hyundai-Venue-8.jpg",
      "images/cars/Hyundai-Venue/Hyundai-Venue-9.jpg"
    ]
  },
  {
    "id": "zeekr-8x-2026-2817",
    "brand": "Zeekr",
    "model": "8X",
    "year": 2026,
    "engineVolume": null,
    "horsePower": 898,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 118400,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Zeekr-8X/Zeekr-8X-1.jpg",
      "images/cars/Zeekr-8X/Zeekr-8X-2.jpg",
      "images/cars/Zeekr-8X/Zeekr-8X-3.jpg",
      "images/cars/Zeekr-8X/Zeekr-8X-4.jpg"
    ]
  },
  {
    "id": "changan-qiyuan-q05-2025-9545",
    "brand": "Changan",
    "model": "Qiyuan Q05",
    "year": 2025,
    "engineVolume": null,
    "horsePower": 163,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 5450,
    "price": 28200,
    "priceIsFrom": false,
    "features": [
      "360° Camera Suite"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Changan-Qiyuan-Q05/Changan-Qiyuan-Q05-1.jpg",
      "images/cars/Changan-Qiyuan-Q05/Changan-Qiyuan-Q05-2.jpg",
      "images/cars/Changan-Qiyuan-Q05/Changan-Qiyuan-Q05-3.jpg",
      "images/cars/Changan-Qiyuan-Q05/Changan-Qiyuan-Q05-4.jpg",
      "images/cars/Changan-Qiyuan-Q05/Changan-Qiyuan-Q05-5.jpg",
      "images/cars/Changan-Qiyuan-Q05/Changan-Qiyuan-Q05-6.jpg",
      "images/cars/Changan-Qiyuan-Q05/Changan-Qiyuan-Q05-7.jpg",
      "images/cars/Changan-Qiyuan-Q05/Changan-Qiyuan-Q05-8.jpg",
      "images/cars/Changan-Qiyuan-Q05/Changan-Qiyuan-Q05-9.jpg"
    ]
  },
  {
    "id": "skoda-superb-2021-3387",
    "brand": "Skoda",
    "model": "Superb",
    "year": 2021,
    "engineVolume": 1.4,
    "horsePower": 150,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 21600,
    "price": 24900,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Skoda-Superb/Skoda-Superb-1.jpg",
      "images/cars/Skoda-Superb/Skoda-Superb-2.jpg",
      "images/cars/Skoda-Superb/Skoda-Superb-3.jpg",
      "images/cars/Skoda-Superb/Skoda-Superb-4.jpg",
      "images/cars/Skoda-Superb/Skoda-Superb-5.jpg",
      "images/cars/Skoda-Superb/Skoda-Superb-6.jpg",
      "images/cars/Skoda-Superb/Skoda-Superb-7.jpg",
      "images/cars/Skoda-Superb/Skoda-Superb-8.jpg",
      "images/cars/Skoda-Superb/Skoda-Superb-9.jpg"
    ]
  },
  {
    "id": "toyota-yaris-l-2022-8396",
    "brand": "Toyota",
    "model": "YARiS L",
    "year": 2022,
    "engineVolume": 1.5,
    "horsePower": 111,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 25500,
    "price": 18400,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Toyota-YARiS-L/Toyota-YARiS-L-1.jpg",
      "images/cars/Toyota-YARiS-L/Toyota-YARiS-L-2.jpg",
      "images/cars/Toyota-YARiS-L/Toyota-YARiS-L-3.jpg",
      "images/cars/Toyota-YARiS-L/Toyota-YARiS-L-4.jpg",
      "images/cars/Toyota-YARiS-L/Toyota-YARiS-L-5.jpg",
      "images/cars/Toyota-YARiS-L/Toyota-YARiS-L-6.jpg",
      "images/cars/Toyota-YARiS-L/Toyota-YARiS-L-7.jpg",
      "images/cars/Toyota-YARiS-L/Toyota-YARiS-L-8.jpg"
    ]
  },
  {
    "id": "bmw-x1-2023-2673",
    "brand": "BMW",
    "model": "X1",
    "year": 2023,
    "engineVolume": 1.5,
    "horsePower": 156,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 24850,
    "price": 34700,
    "priceIsFrom": false,
    "features": [
      "M Sport Package"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/BMW-x1/BMW-x1-1.jpg",
      "images/cars/BMW-x1/BMW-x1-2.jpg",
      "images/cars/BMW-x1/BMW-x1-3.jpg",
      "images/cars/BMW-x1/BMW-x1-4.jpg",
      "images/cars/BMW-x1/BMW-x1-5.jpg",
      "images/cars/BMW-x1/BMW-x1-6.jpg",
      "images/cars/BMW-x1/BMW-x1-7.jpg"
    ]
  },
  {
    "id": "skoda-kamiq-2023-1013",
    "brand": "Skoda",
    "model": "Kamiq",
    "year": 2023,
    "engineVolume": 1.5,
    "horsePower": 109,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 7450,
    "price": 24500,
    "priceIsFrom": false,
    "features": [
      "Panoramic Glass Roof"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Skoda-Kamiq/Skoda-Kamiq-1.jpg",
      "images/cars/Skoda-Kamiq/Skoda-Kamiq-2.jpg",
      "images/cars/Skoda-Kamiq/Skoda-Kamiq-3.jpg",
      "images/cars/Skoda-Kamiq/Skoda-Kamiq-4.jpg",
      "images/cars/Skoda-Kamiq/Skoda-Kamiq-5.jpg",
      "images/cars/Skoda-Kamiq/Skoda-Kamiq-6.jpg",
      "images/cars/Skoda-Kamiq/Skoda-Kamiq-7.jpg"
    ]
  },
  {
    "id": "toyota-corolla-2022-9705",
    "brand": "Toyota",
    "model": "Corolla",
    "year": 2022,
    "engineVolume": 1.2,
    "horsePower": 116,
    "transmission": "CVT",
    "drivetrain": "FWD",
    "mileage": 21750,
    "price": 21600,
    "priceIsFrom": false,
    "features": [
      "Panoramic Sunroof"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Toyota-Corolla/Toyota-Corolla-1.jpg",
      "images/cars/Toyota-Corolla/Toyota-Corolla-2.jpg",
      "images/cars/Toyota-Corolla/Toyota-Corolla-3.jpg",
      "images/cars/Toyota-Corolla/Toyota-Corolla-4.jpg",
      "images/cars/Toyota-Corolla/Toyota-Corolla-5.jpg"
    ]
  },
  {
    "id": "volkswagen-golf-2023-680",
    "brand": "Volkswagen",
    "model": "Golf",
    "year": 2023,
    "engineVolume": 1.4,
    "horsePower": 149,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 22350,
    "price": 26000,
    "priceIsFrom": false,
    "features": [
      "Sport Appearance Package"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/VW-Golf/VW-Golf-1.jpg",
      "images/cars/VW-Golf/VW-Golf-2.jpg",
      "images/cars/VW-Golf/VW-Golf-3.jpg",
      "images/cars/VW-Golf/VW-Golf-4.jpg",
      "images/cars/VW-Golf/VW-Golf-5.jpg",
      "images/cars/VW-Golf/VW-Golf-6.jpg",
      "images/cars/VW-Golf/VW-Golf-7.jpg"
    ]
  },
  {
    "id": "skoda-octavia-2023-9341",
    "brand": "Skoda",
    "model": "Octavia",
    "year": 2023,
    "engineVolume": 1.4,
    "horsePower": 149,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 8100,
    "price": 26600,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Skoda-Octavia/Skoda-Octavia-1.jpg",
      "images/cars/Skoda-Octavia/Skoda-Octavia-2.jpg",
      "images/cars/Skoda-Octavia/Skoda-Octavia-3.jpg",
      "images/cars/Skoda-Octavia/Skoda-Octavia-4.jpg",
      "images/cars/Skoda-Octavia/Skoda-Octavia-5.jpg",
      "images/cars/Skoda-Octavia/Skoda-Octavia-6.jpg",
      "images/cars/Skoda-Octavia/Skoda-Octavia-7.jpg",
      "images/cars/Skoda-Octavia/Skoda-Octavia-8.jpg"
    ]
  },
  {
    "id": "mazda-cx-30-2023-6835",
    "brand": "Mazda",
    "model": "CX-30",
    "year": 2023,
    "engineVolume": 2,
    "horsePower": 158,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 12450,
    "price": 27300,
    "priceIsFrom": false,
    "features": [
      "Nappa Leather Interior"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Mazda-CX-30/Mazda-CX-30-1.jpg",
      "images/cars/Mazda-CX-30/Mazda-CX-30-2.jpg",
      "images/cars/Mazda-CX-30/Mazda-CX-30-3.jpg",
      "images/cars/Mazda-CX-30/Mazda-CX-30-4.jpg",
      "images/cars/Mazda-CX-30/Mazda-CX-30-5.jpg",
      "images/cars/Mazda-CX-30/Mazda-CX-30-6.jpg"
    ]
  },
  {
    "id": "jetta-vs7-2022-8248",
    "brand": "Jetta",
    "model": "VS7",
    "year": 2022,
    "engineVolume": 1.4,
    "horsePower": 150,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 24850,
    "price": 22700,
    "priceIsFrom": true,
    "features": [
      "360° Camera Suite"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Jetta-VS7/Jetta-VS7-1.jpg",
      "images/cars/Jetta-VS7/Jetta-VS7-2.jpg",
      "images/cars/Jetta-VS7/Jetta-VS7-3.jpg",
      "images/cars/Jetta-VS7/Jetta-VS7-4.jpg",
      "images/cars/Jetta-VS7/Jetta-VS7-5.jpg",
      "images/cars/Jetta-VS7/Jetta-VS7-6.jpg"
    ]
  },
  {
    "id": "audi-q5-2026-6512",
    "brand": "Audi",
    "model": "Q5",
    "year": 2026,
    "engineVolume": 2,
    "horsePower": 204,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 61800,
    "priceIsFrom": false,
    "features": [
      "Sport Appearance Package"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Audi-Q5/Audi-Q5-1.jpg",
      "images/cars/Audi-Q5/Audi-Q5-2.jpg",
      "images/cars/Audi-Q5/Audi-Q5-3.jpg",
      "images/cars/Audi-Q5/Audi-Q5-4.jpg",
      "images/cars/Audi-Q5/Audi-Q5-5.jpg"
    ]
  },
  {
    "id": "volkswagen-jetta-2026-4379",
    "brand": "Volkswagen",
    "model": "Jetta",
    "year": 2026,
    "engineVolume": 1.5,
    "horsePower": 158,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 24900,
    "priceIsFrom": false,
    "features": [
      "Panoramic Sunroof"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/volkswagen-jetta/volkswagen-jetta-1.jpg",
      "images/cars/volkswagen-jetta/volkswagen-jetta-2.jpg",
      "images/cars/volkswagen-jetta/volkswagen-jetta-3.jpg",
      "images/cars/volkswagen-jetta/volkswagen-jetta-4.jpg",
      "images/cars/volkswagen-jetta/volkswagen-jetta-5.jpg",
      "images/cars/volkswagen-jetta/volkswagen-jetta-6.jpg"
    ]
  },
  {
    "id": "audi-a3-2023-8411",
    "brand": "Audi",
    "model": "A3",
    "year": 2023,
    "engineVolume": 1.4,
    "horsePower": 150,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 21750,
    "price": 23800,
    "priceIsFrom": true,
    "features": [
      "Sport Appearance Package"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Audi-A3/Audi-A3-1.jpg",
      "images/cars/Audi-A3/Audi-A3-10.jpg",
      "images/cars/Audi-A3/Audi-A3-11.jpg",
      "images/cars/Audi-A3/Audi-A3-2.jpg",
      "images/cars/Audi-A3/Audi-A3-3.jpg",
      "images/cars/Audi-A3/Audi-A3-4.jpg",
      "images/cars/Audi-A3/Audi-A3-5.jpg",
      "images/cars/Audi-A3/Audi-A3-6.jpg",
      "images/cars/Audi-A3/Audi-A3-7.jpg",
      "images/cars/Audi-A3/Audi-A3-8.jpg",
      "images/cars/Audi-A3/Audi-A3-9.jpg"
    ]
  },
  {
    "id": "volkswagen-passat-2023-4209",
    "brand": "Volkswagen",
    "model": "Passat",
    "year": 2023,
    "engineVolume": 1.4,
    "horsePower": 150,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 18650,
    "price": 26000,
    "priceIsFrom": true,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Volkswagen-Passat/Volkswagen-Passat-1.jpg",
      "images/cars/Volkswagen-Passat/Volkswagen-Passat-10.jpg",
      "images/cars/Volkswagen-Passat/Volkswagen-Passat-11.jpg",
      "images/cars/Volkswagen-Passat/Volkswagen-Passat-2.jpg",
      "images/cars/Volkswagen-Passat/Volkswagen-Passat-3.jpg",
      "images/cars/Volkswagen-Passat/Volkswagen-Passat-4.jpg",
      "images/cars/Volkswagen-Passat/Volkswagen-Passat-5.jpg",
      "images/cars/Volkswagen-Passat/Volkswagen-Passat-6.jpg",
      "images/cars/Volkswagen-Passat/Volkswagen-Passat-7.jpg",
      "images/cars/Volkswagen-Passat/Volkswagen-Passat-8.jpg",
      "images/cars/Volkswagen-Passat/Volkswagen-Passat-9.jpg"
    ]
  },
  {
    "id": "audi-q2-2022-548",
    "brand": "Audi",
    "model": "Q2",
    "year": 2022,
    "engineVolume": 1.4,
    "horsePower": 150,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 27950,
    "price": 24900,
    "priceIsFrom": true,
    "features": [
      "Sport Appearance Package"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Audi-Q2/Audi-Q2-1.jpg",
      "images/cars/Audi-Q2/Audi-Q2-10.jpg",
      "images/cars/Audi-Q2/Audi-Q2-2.jpg",
      "images/cars/Audi-Q2/Audi-Q2-3.jpg",
      "images/cars/Audi-Q2/Audi-Q2-4.jpg",
      "images/cars/Audi-Q2/Audi-Q2-5.jpg",
      "images/cars/Audi-Q2/Audi-Q2-6.jpg",
      "images/cars/Audi-Q2/Audi-Q2-7.jpg",
      "images/cars/Audi-Q2/Audi-Q2-8.jpg",
      "images/cars/Audi-Q2/Audi-Q2-9.jpg"
    ]
  },
  {
    "id": "bmw-120i-2023-6629",
    "brand": "BMW",
    "model": "120i",
    "year": 2023,
    "engineVolume": 1.5,
    "horsePower": 136,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 18650,
    "price": 21200,
    "priceIsFrom": true,
    "features": [
      "M Sport Package"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/BMW-120i/BMW-120i-1.jpg",
      "images/cars/BMW-120i/BMW-120i-10.jpg",
      "images/cars/BMW-120i/BMW-120i-11.jpg",
      "images/cars/BMW-120i/BMW-120i-2.jpg",
      "images/cars/BMW-120i/BMW-120i-3.jpg",
      "images/cars/BMW-120i/BMW-120i-4.jpg",
      "images/cars/BMW-120i/BMW-120i-5.jpg",
      "images/cars/BMW-120i/BMW-120i-6.jpg",
      "images/cars/BMW-120i/BMW-120i-8.jpg",
      "images/cars/BMW-120i/BMW-120i-9.jpg"
    ]
  },
  {
    "id": "mercedes-benz-gla-2022-7035",
    "brand": "Mercedes-Benz",
    "model": "GLA",
    "year": 2022,
    "engineVolume": 1.3,
    "horsePower": 136,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 24850,
    "price": 32500,
    "priceIsFrom": true,
    "features": [
      "AMG Line Package"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Mercedes-GLA/Mercedes-GLA-1.jpg",
      "images/cars/Mercedes-GLA/Mercedes-GLA-10.jpg",
      "images/cars/Mercedes-GLA/Mercedes-GLA-2.jpg",
      "images/cars/Mercedes-GLA/Mercedes-GLA-3.jpg",
      "images/cars/Mercedes-GLA/Mercedes-GLA-4.jpg",
      "images/cars/Mercedes-GLA/Mercedes-GLA-5.jpg",
      "images/cars/Mercedes-GLA/Mercedes-GLA-6.jpg",
      "images/cars/Mercedes-GLA/Mercedes-GLA-7.jpg",
      "images/cars/Mercedes-GLA/Mercedes-GLA-8.jpg",
      "images/cars/Mercedes-GLA/Mercedes-GLA-9.jpg"
    ]
  },
  {
    "id": "bmw-x2-2022-371",
    "brand": "BMW",
    "model": "X2",
    "year": 2022,
    "engineVolume": 1.5,
    "horsePower": 136,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 21750,
    "price": 21600,
    "priceIsFrom": false,
    "features": [
      "M Sport Package"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/BMW-X2/BMW-X2-1.jpg",
      "images/cars/BMW-X2/BMW-X2-10.jpg",
      "images/cars/BMW-X2/BMW-X2-11.jpg",
      "images/cars/BMW-X2/BMW-X2-2.jpg",
      "images/cars/BMW-X2/BMW-X2-3.jpg",
      "images/cars/BMW-X2/BMW-X2-4.jpg",
      "images/cars/BMW-X2/BMW-X2-5.jpg",
      "images/cars/BMW-X2/BMW-X2-6.jpg",
      "images/cars/BMW-X2/BMW-X2-7.jpg",
      "images/cars/BMW-X2/BMW-X2-8.jpg",
      "images/cars/BMW-X2/BMW-X2-9.jpg"
    ]
  },
  {
    "id": "mercedes-benz-a-class-180l-2022-7727",
    "brand": "Mercedes-Benz",
    "model": "A-Class 180L",
    "year": 2022,
    "engineVolume": 1.3,
    "horsePower": 136,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 21750,
    "price": 24900,
    "priceIsFrom": false,
    "features": [
      "Panoramic Glass Roof"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Mercedes-A-Class-180L/Mercedes-A-Class-180L-1.jpg",
      "images/cars/Mercedes-A-Class-180L/Mercedes-A-Class-180L-10.jpg",
      "images/cars/Mercedes-A-Class-180L/Mercedes-A-Class-180L-11.jpg",
      "images/cars/Mercedes-A-Class-180L/Mercedes-A-Class-180L-12.jpg",
      "images/cars/Mercedes-A-Class-180L/Mercedes-A-Class-180L-2.jpg",
      "images/cars/Mercedes-A-Class-180L/Mercedes-A-Class-180L-3.jpg",
      "images/cars/Mercedes-A-Class-180L/Mercedes-A-Class-180L-4.jpg",
      "images/cars/Mercedes-A-Class-180L/Mercedes-A-Class-180L-5.jpg",
      "images/cars/Mercedes-A-Class-180L/Mercedes-A-Class-180L-6.jpg",
      "images/cars/Mercedes-A-Class-180L/Mercedes-A-Class-180L-7.jpg",
      "images/cars/Mercedes-A-Class-180L/Mercedes-A-Class-180L-8.jpg",
      "images/cars/Mercedes-A-Class-180L/Mercedes-A-Class-180L-9.jpg"
    ]
  },
  {
    "id": "subaru-forester-2022-7250",
    "brand": "Subaru",
    "model": "Forester",
    "year": 2022,
    "engineVolume": 2,
    "horsePower": 154,
    "transmission": "CVT",
    "drivetrain": "FWD",
    "mileage": 24850,
    "price": 32500,
    "priceIsFrom": false,
    "features": [
      "Executive Trim"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Subaru-Forester/Subaru-Forester-1.jpg",
      "images/cars/Subaru-Forester/Subaru-Forester-10.jpg",
      "images/cars/Subaru-Forester/Subaru-Forester-11.jpg",
      "images/cars/Subaru-Forester/Subaru-Forester-12.jpg",
      "images/cars/Subaru-Forester/Subaru-Forester-2.jpg",
      "images/cars/Subaru-Forester/Subaru-Forester-3.jpg",
      "images/cars/Subaru-Forester/Subaru-Forester-4.jpg",
      "images/cars/Subaru-Forester/Subaru-Forester-5.jpg",
      "images/cars/Subaru-Forester/Subaru-Forester-6.jpg",
      "images/cars/Subaru-Forester/Subaru-Forester-7.jpg",
      "images/cars/Subaru-Forester/Subaru-Forester-8.jpg",
      "images/cars/Subaru-Forester/Subaru-Forester-9.jpg"
    ]
  },
  {
    "id": "mercedes-benz-glb-2022-8696",
    "brand": "Mercedes-Benz",
    "model": "GLB",
    "year": 2022,
    "engineVolume": 1.3,
    "horsePower": 136,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 24850,
    "price": 32500,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Mercedes-GLB/Mercedes-GLB-1.jpg",
      "images/cars/Mercedes-GLB/Mercedes-GLB-10.jpg",
      "images/cars/Mercedes-GLB/Mercedes-GLB-11.jpg",
      "images/cars/Mercedes-GLB/Mercedes-GLB-12.jpg",
      "images/cars/Mercedes-GLB/Mercedes-GLB-13.jpg",
      "images/cars/Mercedes-GLB/Mercedes-GLB-2.jpg",
      "images/cars/Mercedes-GLB/Mercedes-GLB-3.jpg",
      "images/cars/Mercedes-GLB/Mercedes-GLB-4.jpg",
      "images/cars/Mercedes-GLB/Mercedes-GLB-5.jpg",
      "images/cars/Mercedes-GLB/Mercedes-GLB-6.jpg",
      "images/cars/Mercedes-GLB/Mercedes-GLB-7.jpg",
      "images/cars/Mercedes-GLB/Mercedes-GLB-8.jpg",
      "images/cars/Mercedes-GLB/Mercedes-GLB-9.jpg"
    ]
  },
  {
    "id": "honda-civic-2022-7168",
    "brand": "Honda",
    "model": "Civic",
    "year": 2022,
    "engineVolume": 1.5,
    "horsePower": 129,
    "transmission": "CVT",
    "drivetrain": "FWD",
    "mileage": 21750,
    "price": 21600,
    "priceIsFrom": false,
    "features": [
      "Panoramic Sunroof"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Honda-Civic-2022/Honda-Civic-2022-1.jpg",
      "images/cars/Honda-Civic-2022/Honda-Civic-2022-10.jpg",
      "images/cars/Honda-Civic-2022/Honda-Civic-2022-11.jpg",
      "images/cars/Honda-Civic-2022/Honda-Civic-2022-12.jpg",
      "images/cars/Honda-Civic-2022/Honda-Civic-2022-13.jpg",
      "images/cars/Honda-Civic-2022/Honda-Civic-2022-2.jpg",
      "images/cars/Honda-Civic-2022/Honda-Civic-2022-3.jpg",
      "images/cars/Honda-Civic-2022/Honda-Civic-2022-4.jpg",
      "images/cars/Honda-Civic-2022/Honda-Civic-2022-5.jpg",
      "images/cars/Honda-Civic-2022/Honda-Civic-2022-6.jpg",
      "images/cars/Honda-Civic-2022/Honda-Civic-2022-7.jpg",
      "images/cars/Honda-Civic-2022/Honda-Civic-2022-8.jpg",
      "images/cars/Honda-Civic-2022/Honda-Civic-2022-9.jpg"
    ]
  },
  {
    "id": "mazda-3-axela-2026-6003",
    "brand": "Mazda",
    "model": "3 Axela",
    "year": 2026,
    "engineVolume": 2,
    "horsePower": 158,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 0,
    "price": 27100,
    "priceIsFrom": false,
    "features": [
      "Nappa Leather Interior"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/mazda-3-axela-2026/mazda-3-axela-2026-1.jpg",
      "images/cars/mazda-3-axela-2026/mazda-3-axela-2026-2.jpg",
      "images/cars/mazda-3-axela-2026/mazda-3-axela-2026-3.jpg",
      "images/cars/mazda-3-axela-2026/mazda-3-axela-2026-4.jpg",
      "images/cars/mazda-3-axela-2026/mazda-3-axela-2026-5.jpg",
      "images/cars/mazda-3-axela-2026/mazda-3-axela-2026-6.jpg",
      "images/cars/mazda-3-axela-2026/mazda-3-axela-2026-7.jpg",
      "images/cars/mazda-3-axela-2026/mazda-3-axela-2026-8.jpg"
    ]
  },
  {
    "id": "hyundai-avante-2023-8775",
    "brand": "Hyundai",
    "model": "Avante",
    "year": 2023,
    "engineVolume": 1.6,
    "horsePower": 123,
    "transmission": "Automatic",
    "drivetrain": "FWD",
    "mileage": 26700,
    "price": 20500,
    "priceIsFrom": false,
    "features": [
      "Heated Seats"
    ],
    "location": "South Korea",
    "status": "Available to Order",
    "images": [
      "images/cars/hyundai-avante-2023/hyundai-avante-2023-1.jpg",
      "images/cars/hyundai-avante-2023/hyundai-avante-2023-2.jpg",
      "images/cars/hyundai-avante-2023/hyundai-avante-2023-3.jpg",
      "images/cars/hyundai-avante-2023/hyundai-avante-2023-4.jpg",
      "images/cars/hyundai-avante-2023/hyundai-avante-2023-5.jpg",
      "images/cars/hyundai-avante-2023/hyundai-avante-2023-6.jpg",
      "images/cars/hyundai-avante-2023/hyundai-avante-2023-7.jpg",
      "images/cars/hyundai-avante-2023/hyundai-avante-2023-8.jpg",
      "images/cars/hyundai-avante-2023/hyundai-avante-2023-9.jpg"
    ]
  },
  {
    "id": "gac-trumpchi-m6-2022-3117",
    "brand": "GAC Trumpchi",
    "model": "M6",
    "year": 2022,
    "engineVolume": 1.5,
    "horsePower": 158,
    "transmission": "Dual-Clutch",
    "drivetrain": "FWD",
    "mileage": 23600,
    "price": 24900,
    "priceIsFrom": false,
    "features": [
      "Executive Flagship Package"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/gac-trumpchi-m6/gac-trumpchi-m6-1.jpg",
      "images/cars/gac-trumpchi-m6/gac-trumpchi-m6-2.jpg",
      "images/cars/gac-trumpchi-m6/gac-trumpchi-m6-3.jpg",
      "images/cars/gac-trumpchi-m6/gac-trumpchi-m6-4.jpg",
      "images/cars/gac-trumpchi-m6/gac-trumpchi-m6-5.jpg",
      "images/cars/gac-trumpchi-m6/gac-trumpchi-m6-6.jpg",
      "images/cars/gac-trumpchi-m6/gac-trumpchi-m6-7.jpg"
    ]
  },
  {
    "id": "honda-xrv-2023-3581",
    "brand": "Honda",
    "model": "XRV",
    "year": 2023,
    "engineVolume": 1.5,
    "horsePower": 124,
    "transmission": "CVT",
    "drivetrain": "FWD",
    "mileage": 27950,
    "price": 24500,
    "priceIsFrom": false,
    "features": [],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/honda-xrv/honda-xrv-1.jpg",
      "images/cars/honda-xrv/honda-xrv-2.jpg",
      "images/cars/honda-xrv/honda-xrv-3.jpg",
      "images/cars/honda-xrv/honda-xrv-4.jpg",
      "images/cars/honda-xrv/honda-xrv-5.jpg",
      "images/cars/honda-xrv/honda-xrv-6.jpg",
      "images/cars/honda-xrv/honda-xrv-7.jpg",
      "images/cars/honda-xrv/honda-xrv-8.jpg",
      "images/cars/honda-xrv/honda-xrv-9.jpg",
      "images/cars/honda-xrv/honda-xrv-10.jpg"
    ]
  },
  {
    "id": "toyota-wildlander-2026-6194",
    "brand": "Toyota",
    "model": "Wildlander",
    "year": 2026,
    "engineVolume": 2,
    "horsePower": 171,
    "transmission": "CVT",
    "drivetrain": "AWD",
    "mileage": 0,
    "price": 46200,
    "priceIsFrom": false,
    "features": [],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/toyota-wildlander/toyota-wildlander-1.jpg",
      "images/cars/toyota-wildlander/toyota-wildlander-2.jpg",
      "images/cars/toyota-wildlander/toyota-wildlander-3.jpg",
      "images/cars/toyota-wildlander/toyota-wildlander-4.jpg",
      "images/cars/toyota-wildlander/toyota-wildlander-5.jpg",
      "images/cars/toyota-wildlander/toyota-wildlander-6.jpg",
      "images/cars/toyota-wildlander/toyota-wildlander-7.jpg"
    ]
  },
  {
    "id": "kia-niro-2022",
    "brand": "KIA",
    "model": "Niro",
    "year": 2022,
    "engineVolume": 1.6,
    "horsePower": 141,
    "transmission": "Dual-Clutch",
    "drivetrain": "AWD",
    "mileage": 23600,
    "price": 24900,
    "priceIsFrom": false,
    "features": [
      "Hybrid Powertrain"
    ],
    "location": "South Korea",
    "status": "Available to Order",
    "images": [
      "images/cars/kia-niro/kia-niro-1.jpg",
      "images/cars/kia-niro/kia-niro-2.jpg",
      "images/cars/kia-niro/kia-niro-3.jpg",
      "images/cars/kia-niro/kia-niro-4.jpg",
      "images/cars/kia-niro/kia-niro-5.jpg",
      "images/cars/kia-niro/kia-niro-6.jpg",
      "images/cars/kia-niro/kia-niro-7.jpg"
    ]
  },
  {
    "id": "renault-samsung-qm6-2022",
    "brand": "Renault Samsung",
    "model": "QM6",
    "year": 2022,
    "engineVolume": 2,
    "horsePower": 144,
    "transmission": "Automatic",
    "drivetrain": "AWD",
    "mileage": 19900,
    "price": 25800,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "South Korea",
    "status": "Available to Order",
    "images": [
      "images/cars/renault-samsung-qm6/renault-samsung-qm6-1.jpg",
      "images/cars/renault-samsung-qm6/renault-samsung-qm6-2.jpg",
      "images/cars/renault-samsung-qm6/renault-samsung-qm6-3.jpg",
      "images/cars/renault-samsung-qm6/renault-samsung-qm6-4.jpg",
      "images/cars/renault-samsung-qm6/renault-samsung-qm6-5.jpg",
      "images/cars/renault-samsung-qm6/renault-samsung-qm6-6.jpg",
      "images/cars/renault-samsung-qm6/renault-samsung-qm6-7.jpg"
    ]
  },
  {
    "id": "bmw-2-active-tourer-2022",
    "brand": "BMW",
    "model": "2 Series Active Tourer 218D",
    "year": 2022,
    "engineVolume": 2,
    "horsePower": 150,
    "transmission": "Automatic",
    "drivetrain": "AWD",
    "mileage": 37300,
    "price": 34700,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "South Korea",
    "status": "Available to Order",
    "images": [
      "images/cars/bmw-2-active-tourer/bmw-2-active-tourer-1.jpg",
      "images/cars/bmw-2-active-tourer/bmw-2-active-tourer-2.jpg",
      "images/cars/bmw-2-active-tourer/bmw-2-active-tourer-3.jpg",
      "images/cars/bmw-2-active-tourer/bmw-2-active-tourer-4.jpg",
      "images/cars/bmw-2-active-tourer/bmw-2-active-tourer-5.jpg",
      "images/cars/bmw-2-active-tourer/bmw-2-active-tourer-6.jpg",
      "images/cars/bmw-2-active-tourer/bmw-2-active-tourer-7.jpg",
      "images/cars/bmw-2-active-tourer/bmw-2-active-tourer-8.jpg"
    ]
  },
  {
    "id": "volkswagen-tavendor-2026",
    "brand": "Volkswagen",
    "model": "Tavendor",
    "year": 2026,
    "engineVolume": 2,
    "horsePower": 220,
    "transmission": "Dual-Clutch",
    "drivetrain": "AWD",
    "mileage": 0,
    "price": 65100,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/volkswagen-tavendor/volkswagen-tavendor-1.jpg",
      "images/cars/volkswagen-tavendor/volkswagen-tavendor-2.jpg",
      "images/cars/volkswagen-tavendor/volkswagen-tavendor-3.jpg",
      "images/cars/volkswagen-tavendor/volkswagen-tavendor-4.jpg",
      "images/cars/volkswagen-tavendor/volkswagen-tavendor-5.jpg",
      "images/cars/volkswagen-tavendor/volkswagen-tavendor-6.jpg",
      "images/cars/volkswagen-tavendor/volkswagen-tavendor-7.jpg",
      "images/cars/volkswagen-tavendor/volkswagen-tavendor-8.jpg",
      "images/cars/volkswagen-tavendor/volkswagen-tavendor-9.jpg",
      "images/cars/volkswagen-tavendor/volkswagen-tavendor-10.jpg",
      "images/cars/volkswagen-tavendor/volkswagen-tavendor-11.jpg",
      "images/cars/volkswagen-tavendor/volkswagen-tavendor-12.jpg",
      "images/cars/volkswagen-tavendor/volkswagen-tavendor-13.jpg"
    ]
  },
  {
    "id": "changan-eado-2025",
    "brand": "Changan",
    "model": "Eado",
    "year": 2025,
    "engineVolume": 1.6,
    "horsePower": 128,
    "transmission": "CVT",
    "drivetrain": "AWD",
    "mileage": 0,
    "price": 18500,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/changan-eado/changan-eado-1.jpg",
      "images/cars/changan-eado/changan-eado-2.jpg",
      "images/cars/changan-eado/changan-eado-3.jpg",
      "images/cars/changan-eado/changan-eado-4.jpg",
      "images/cars/changan-eado/changan-eado-5.jpg",
      "images/cars/changan-eado/changan-eado-6.jpg",
      "images/cars/changan-eado/changan-eado-7.jpg"
    ]
  },
  {
    "id": "skoda-superb-2026",
    "brand": "Skoda",
    "model": "Superb",
    "year": 2026,
    "engineVolume": 1.4,
    "horsePower": 150,
    "transmission": "Dual-Clutch",
    "drivetrain": "AWD",
    "mileage": 0,
    "price": 32300,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Skoda-Superb/Skoda-Superb-1.jpg",
      "images/cars/Skoda-Superb/Skoda-Superb-2.jpg",
      "images/cars/Skoda-Superb/Skoda-Superb-3.jpg",
      "images/cars/Skoda-Superb/Skoda-Superb-4.jpg",
      "images/cars/Skoda-Superb/Skoda-Superb-5.jpg",
      "images/cars/Skoda-Superb/Skoda-Superb-6.jpg",
      "images/cars/Skoda-Superb/Skoda-Superb-7.jpg",
      "images/cars/Skoda-Superb/Skoda-Superb-8.jpg"
    ]
  },
  {
    "id": "honda-fit-2022",
    "brand": "Honda",
    "model": "Fit",
    "year": 2022,
    "engineVolume": 1.5,
    "horsePower": 130,
    "transmission": "CVT",
    "drivetrain": "AWD",
    "mileage": 18000,
    "price": 19500,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/honda-fit/honda-fit-1.jpg",
      "images/cars/honda-fit/honda-fit-2.jpg",
      "images/cars/honda-fit/honda-fit-3.jpg",
      "images/cars/honda-fit/honda-fit-4.jpg",
      "images/cars/honda-fit/honda-fit-5.jpg",
      "images/cars/honda-fit/honda-fit-6.jpg",
      "images/cars/honda-fit/honda-fit-7.jpg",
      "images/cars/honda-fit/honda-fit-8.jpg",
      "images/cars/honda-fit/honda-fit-9.jpg"
    ]
  },
  {
    "id": "honda-cr-v-2026",
    "brand": "Honda",
    "model": "CR-V",
    "year": 2026,
    "engineVolume": 1.5,
    "horsePower": 193,
    "transmission": "Automatic",
    "drivetrain": "AWD",
    "mileage": 0,
    "price": 45500,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/honda-cr-v/honda-cr-v-1.jpg",
      "images/cars/honda-cr-v/honda-cr-v-2.jpg",
      "images/cars/honda-cr-v/honda-cr-v-3.jpg",
      "images/cars/honda-cr-v/honda-cr-v-4.jpg",
      "images/cars/honda-cr-v/honda-cr-v-5.jpg",
      "images/cars/honda-cr-v/honda-cr-v-6.jpg",
      "images/cars/honda-cr-v/honda-cr-v-7.jpg",
      "images/cars/honda-cr-v/honda-cr-v-8.jpg",
      "images/cars/honda-cr-v/honda-cr-v-9.jpg",
      "images/cars/honda-cr-v/honda-cr-v-10.jpg",
      "images/cars/honda-cr-v/honda-cr-v-11.jpg"
    ]
  },
  {
    "id": "bmw-330li-2025",
    "brand": "BMW",
    "model": "330Li",
    "year": 2025,
    "engineVolume": 2,
    "horsePower": 245,
    "transmission": "Automatic",
    "drivetrain": "RWD",
    "mileage": 2600,
    "price": 59700,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/bmw-330li/bmw-330li-1.jpg",
      "images/cars/bmw-330li/bmw-330li-2.jpg",
      "images/cars/bmw-330li/bmw-330li-3.jpg",
      "images/cars/bmw-330li/bmw-330li-4.jpg",
      "images/cars/bmw-330li/bmw-330li-5.jpg",
      "images/cars/bmw-330li/bmw-330li-6.jpg"
    ]
  },
  {
    "id": "audi-a3l-2026",
    "brand": "Audi",
    "model": "A3L",
    "year": 2026,
    "engineVolume": 1.5,
    "horsePower": 160,
    "transmission": "Automatic",
    "drivetrain": "AWD",
    "mileage": 0,
    "price": 35800,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/audi-a3l/audi-a3l-1.jpg",
      "images/cars/audi-a3l/audi-a3l-2.jpg",
      "images/cars/audi-a3l/audi-a3l-3.jpg",
      "images/cars/audi-a3l/audi-a3l-4.jpg",
      "images/cars/audi-a3l/audi-a3l-5.jpg",
      "images/cars/audi-a3l/audi-a3l-6.jpg",
      "images/cars/audi-a3l/audi-a3l-7.jpg",
      "images/cars/audi-a3l/audi-a3l-8.jpg"
    ]
  },
  {
    "id": "geely-galaxy-starship-7-2026",
    "brand": "Geely",
    "model": "Galaxy Starship 7",
    "year": 2026,
    "engineVolume": 1.5,
    "horsePower": 238,
    "transmission": "Dual-Clutch",
    "drivetrain": "AWD",
    "mileage": 0,
    "price": 39000,
    "priceIsFrom": false,
    "features": [
      "Hybrid Powertrain"
    ],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/Geely-Galaxy-Starship-7/Geely-Galaxy-Starship-7-1.jpg",
      "images/cars/Geely-Galaxy-Starship-7/Geely-Galaxy-Starship-7-2.jpg",
      "images/cars/Geely-Galaxy-Starship-7/Geely-Galaxy-Starship-7-3.jpg",
      "images/cars/Geely-Galaxy-Starship-7/Geely-Galaxy-Starship-7-4.jpg",
      "images/cars/Geely-Galaxy-Starship-7/Geely-Galaxy-Starship-7-5.jpg",
      "images/cars/Geely-Galaxy-Starship-7/Geely-Galaxy-Starship-7-6.jpg",
      "images/cars/Geely-Galaxy-Starship-7/geely-galaxy-starship-7-7.jpg",
      "images/cars/Geely-Galaxy-Starship-7/geely-galaxy-starship-7-8.jpg",
      "images/cars/Geely-Galaxy-Starship-7/geely-galaxy-starship-7-9.jpg"
    ]
  },
  {
    "id": "volkswagen-lamando-l-2022",
    "brand": "Volkswagen",
    "model": "Lamando L",
    "year": 2022,
    "engineVolume": 1.4,
    "horsePower": 149,
    "transmission": "Dual-Clutch",
    "drivetrain": "AWD",
    "mileage": 17400,
    "price": 23000,
    "priceIsFrom": false,
    "features": [],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/volkswagen-lamando-l/volkswagen-lamando-l-1.jpg",
      "images/cars/volkswagen-lamando-l/volkswagen-lamando-l-2.jpg",
      "images/cars/volkswagen-lamando-l/volkswagen-lamando-l-3.jpg",
      "images/cars/volkswagen-lamando-l/volkswagen-lamando-l-4.jpg",
      "images/cars/volkswagen-lamando-l/volkswagen-lamando-l-5.jpg",
      "images/cars/volkswagen-lamando-l/volkswagen-lamando-l-6.jpg",
      "images/cars/volkswagen-lamando-l/volkswagen-lamando-l-7.jpg",
      "images/cars/volkswagen-lamando-l/volkswagen-lamando-l-8.jpg",
      "images/cars/volkswagen-lamando-l/volkswagen-lamando-l-9.jpg",
      "images/cars/volkswagen-lamando-l/volkswagen-lamando-l-10.jpg",
      "images/cars/volkswagen-lamando-l/volkswagen-lamando-l-11.jpg"
    ]
  },
  {
    "id": "kia-sorento-2026",
    "brand": "KIA",
    "model": "Sorento",
    "year": 2026,
    "engineVolume": 2.2,
    "horsePower": 194,
    "transmission": "Dual-Clutch",
    "drivetrain": "AWD",
    "mileage": 0,
    "price": 70100,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "South Korea",
    "status": "Available to Order",
    "images": [
      "images/cars/kia-sorento/kia-sorento-1.jpg",
      "images/cars/kia-sorento/kia-sorento-2.jpg",
      "images/cars/kia-sorento/kia-sorento-3.jpg",
      "images/cars/kia-sorento/kia-sorento-4.jpg",
      "images/cars/kia-sorento/kia-sorento-5.jpg",
      "images/cars/kia-sorento/kia-sorento-6.jpg",
      "images/cars/kia-sorento/kia-sorento-7.jpg"
    ]
  },
  {
    "id": "kia-seltos-2022",
    "brand": "Kia",
    "model": "Seltos",
    "year": 2022,
    "engineVolume": 1.6,
    "horsePower": 136,
    "transmission": "Dual-Clutch",
    "drivetrain": "AWD",
    "mileage": 17400,
    "price": 29900,
    "priceIsFrom": false,
    "features": [
      "Bespoke Specification"
    ],
    "location": "South Korea",
    "status": "Available to Order",
    "images": [
      "images/cars/kia-seltos/kia-seltos-1.jpg",
      "images/cars/kia-seltos/kia-seltos-2.jpg",
      "images/cars/kia-seltos/kia-seltos-3.jpg",
      "images/cars/kia-seltos/kia-seltos-4.jpg",
      "images/cars/kia-seltos/kia-seltos-5.jpg",
      "images/cars/kia-seltos/kia-seltos-6.jpg",
      "images/cars/kia-seltos/kia-seltos-7.jpg"
    ]
  },
  {
    "id": "lixiang-l6-max-2026",
    "brand": "Lixiang",
    "model": "L6 Max",
    "year": 2026,
    "engineVolume": 1.5,
    "horsePower": 405,
    "transmission": "Automatic",
    "drivetrain": "AWD",
    "mileage": 0,
    "price": 86700,
    "priceIsFrom": false,
    "features": [],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/lixiang-l6-max/lixiang-l6-max-1.jpg",
      "images/cars/lixiang-l6-max/lixiang-l6-max-2.jpg",
      "images/cars/lixiang-l6-max/lixiang-l6-max-3.jpg",
      "images/cars/lixiang-l6-max/lixiang-l6-max-4.jpg",
      "images/cars/lixiang-l6-max/lixiang-l6-max-5.jpg",
      "images/cars/lixiang-l6-max/lixiang-l6-max-6.jpg",
      "images/cars/lixiang-l6-max/lixiang-l6-max-7.jpg",
      "images/cars/lixiang-l6-max/lixiang-l6-max-8.jpg",
      "images/cars/lixiang-l6-max/lixiang-l6-max-9.jpg"
    ]
  },
  {
    "id": "volkswagen-jetta-2023",
    "brand": "Volkswagen",
    "model": "Jetta",
    "year": 2023,
    "engineVolume": 1.5,
    "horsePower": 158,
    "transmission": "Automatic",
    "drivetrain": "AWD",
    "mileage": 17250,
    "price": 27100,
    "priceIsFrom": false,
    "features": [],
    "location": "South Korea",
    "status": "Available to Order",
    "images": [
      "images/cars/volkswagen-jetta/volkswagen-jetta-1.jpg",
      "images/cars/volkswagen-jetta/volkswagen-jetta-2.jpg",
      "images/cars/volkswagen-jetta/volkswagen-jetta-3.jpg",
      "images/cars/volkswagen-jetta/volkswagen-jetta-4.jpg",
      "images/cars/volkswagen-jetta/volkswagen-jetta-5.jpg",
      "images/cars/volkswagen-jetta/volkswagen-jetta-6.jpg",
      "images/cars/volkswagen-jetta/volkswagen-jetta-7.jpg"
    ]
  },
  {
    "id": "volkswagen-tharu-2026",
    "brand": "Volkswagen",
    "model": "Tharu",
    "year": 2026,
    "engineVolume": 1.5,
    "horsePower": 160,
    "transmission": "Automatic",
    "drivetrain": "AWD",
    "mileage": 0,
    "price": 26000,
    "priceIsFrom": false,
    "features": [],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/volkswagen-tharu/volkswagen-tharu-1.jpg",
      "images/cars/volkswagen-tharu/volkswagen-tharu-2.jpg",
      "images/cars/volkswagen-tharu/volkswagen-tharu-3.jpg",
      "images/cars/volkswagen-tharu/volkswagen-tharu-4.jpg",
      "images/cars/volkswagen-tharu/volkswagen-tharu-5.jpg"
    ]
  },
  {
    "id": "mercedes-benz-eqe-500-2026",
    "brand": "Mercedes-Benz",
    "model": "EQE 500",
    "year": 2026,
    "engineVolume": null,
    "horsePower": 408,
    "transmission": "Automatic",
    "drivetrain": "AWD",
    "mileage": 0,
    "price": 71600,
    "priceIsFrom": false,
    "features": [],
    "location": "Asia Spec",
    "status": "Available to Order",
    "images": [
      "images/cars/mercedes-benz-eqe-500/mercedes-benz-eqe-500-1.jpg",
      "images/cars/mercedes-benz-eqe-500/mercedes-benz-eqe-500-2.jpg",
      "images/cars/mercedes-benz-eqe-500/mercedes-benz-eqe-500-3.jpg",
      "images/cars/mercedes-benz-eqe-500/mercedes-benz-eqe-500-4.jpg",
      "images/cars/mercedes-benz-eqe-500/mercedes-benz-eqe-500-5.jpg"
    ]
  }
];
  var REVIEWS = [];
  var YANDEX_REVIEWS = [];
  var CLIENT_PHOTOS = [
  {
    "src": "images/clients/mercedes-a.jpg",
    "alt": "Client taking delivery of a Mercedes-Benz A-Class sedan in bright sunshine"
  },
  {
    "src": "images/clients/bmw-5.jpg",
    "alt": "Client receiving keys to a white BMW 5 Series executive sedan"
  },
  {
    "src": "images/clients/bmw-black.jpg",
    "alt": "Executive client accepting keys to a black BMW sports sedan"
  },
  {
    "src": "images/clients/tiguan-white.jpg",
    "alt": "White Volkswagen Tiguan presented with signature red delivery bow"
  },
  {
    "src": "images/clients/tiguan-blue.jpg",
    "alt": "Metallic blue Volkswagen Tiguan prepared for turnkey client handover"
  },
  {
    "src": "images/clients/tiguan-rline.jpg",
    "alt": "Black Volkswagen Tiguan R-Line delivered with complete inspection dossier"
  },
  {
    "src": "images/clients/tiguan-family.webp",
    "alt": "Family celebrating delivery of their white Volkswagen Tiguan SUV"
  },
  {
    "src": "images/clients/kia-carnival.jpg",
    "alt": "Luxury Kia Carnival minivan prepared for nationwide family delivery"
  },
  {
    "src": "images/clients/kia-seltos-1.jpg",
    "alt": "Compact Kia Seltos SUV presented to its new owner on handover day"
  },
  {
    "src": "images/clients/kia-seltos-blonde.jpg",
    "alt": "Client accepting keys to a white Kia Seltos with red delivery ribbon"
  },
  {
    "src": "images/clients/mazda-cx5.jpg",
    "alt": "Mazda CX-5 crossover handed over after 140-point inspection clearance"
  },
  {
    "src": "images/clients/mazda-cx5-oksana.jpg",
    "alt": "Client celebrating handover of a pearl-white Mazda CX-5 SUV"
  },
  {
    "src": "images/clients/mazda-cx5-num.jpg",
    "alt": "Dark metallic Mazda CX-5 delivered in front of modern glass showroom"
  },
  {
    "src": "images/clients/toyota-rav4.webp",
    "alt": "Toyota RAV4 AWD ready for enclosed carrier dispatch"
  },
  {
    "src": "images/clients/hyundai-avante.webp",
    "alt": "Hyundai Elantra sedan presented on delivery day"
  },
  {
    "src": "images/clients/hyundai-sonata.jpg",
    "alt": "Hyundai Sonata executive sedan handed over at dusk"
  },
  {
    "src": "images/clients/skoda-superb.webp",
    "alt": "Executive European fastback prepared in bright daylight"
  },
  {
    "src": "images/clients/skoda-close.jpg",
    "alt": "Detail shot of European fastback presentation bow and trim"
  },
  {
    "src": "images/clients/skoda-white.jpg",
    "alt": "Pearl white European sedan ready for client handover"
  },
  {
    "src": "images/clients/tayron-1.webp",
    "alt": "Volkswagen Tayron SUV presented with red delivery ribbon"
  },
  {
    "src": "images/clients/coolray-2.jpg",
    "alt": "Sport crossover close-up on handover day with signature ribbon"
  },
  {
    "src": "images/clients/jetour-t2.jpg",
    "alt": "Off-road luxury SUV delivered to client at golden hour"
  },
  {
    "src": "images/clients/jetour-x70s.jpg",
    "alt": "Family 7-seat crossover prepared for client pickup"
  },
  {
    "src": "images/clients/jetta-vs5.jpg",
    "alt": "Compact German-engineered SUV handed over on delivery day"
  }
];
  var PROCESS_LAST_PHOTO = { src: 'images/clients/mercedes-a.jpg', alt: 'Client receiving turnkey vehicle handover with complete US title documentation', style: 'object-position: 50% 80%;' };
  var VIDEOS = [];
  var CLIPS = [];
  var FAQ = [
  {
    "q": "How long does international sourcing and enclosed delivery take?",
    "a": "In-stock domestic allocations arrive in 5–7 business days via enclosed carrier. Custom European, Korean, or Dubai orders average 3–5 weeks port-to-door, with exact dates locked in your purchase agreement."
  },
  {
    "q": "What is included in the turnkey price shown in the catalog?",
    "a": "Every listed price is all-inclusive: vehicle acquisition, 140-point pre-purchase inspection, marine insurance, US customs & EPA/DOT clearance, port handling, and enclosed delivery to Scottsdale, AZ (with nationwide delivery available to all 50 states)."
  },
  {
    "q": "Do I inspect the vehicle before funds are released?",
    "a": "Yes. Our local specialist conducts a full paint-meter, diagnostic, and HD photo/video inspection within 24 hours. Acquisition proceeds only after your written sign-off."
  },
  {
    "q": "How is payment structured and protected?",
    "a": "Transactions are governed by a binding US commercial purchase agreement through CarZ3 Bespoke Motors LLC, with milestone escrow options available so pricing never changes mid-transit."
  },
  {
    "q": "Can you source a specific trim or rare spec not shown in the catalog?",
    "a": "Yes — bespoke sourcing is our core specialty. Share your target make, model, exterior/interior spec, and budget, and our desk returns 3–5 verified global allocations within one business day."
  },
  {
    "q": "Which states do you deliver to?",
    "a": "Our flagship showroom and handover lounge is located on Camelback Road in Scottsdale, Arizona, and we arrange insured enclosed transport directly to your residence anywhere in the continental United States."
  }
];
  var HERO_PHOTO = 'hero.webp';
  var FLAG_MODE = 'images';
  var DEFAULT_COUNTRY = 'US';
  var COUNTRIES_RAW = [
  "US:United States:1",
  "CA:Canada:1",
  "GB:United Kingdom:44",
  "DE:Germany:49",
  "CH:Switzerland:41",
  "AE:United Arab Emirates:971",
  "FR:France:33",
  "IT:Italy:39",
  "ES:Spain:34",
  "NL:Netherlands:31",
  "SE:Sweden:46",
  "NO:Norway:47",
  "AU:Australia:61",
  "JP:Japan:81",
  "KR:South Korea:82",
  "SG:Singapore:65",
  "MX:Mexico:52",
  "BR:Brazil:55"
];
  var COUNTRIES = COUNTRIES_RAW.map(function (row) {
    var p = row.split(':');
    return { iso: p[0], name: p[1], dial: p[2] };
  });
  function flagEmoji(iso) {
    return iso.toUpperCase().replace(/./g, function (ch) {
      return String.fromCodePoint(127397 + ch.charCodeAt(0));
    });
  }
  function flagHtml(iso) {
    if (FLAG_MODE === 'images') {
      return '<img class="flag-img" src="https://flagcdn.com/w40/' + iso.toLowerCase() +
        '.png" alt="" width="20" height="15" loading="lazy" decoding="async">';
    }
    return '<span class="flag-emoji">' + flagEmoji(iso) + '</span>';
  }
  var BOT_URL = 'catalog.html';
  var FORM_ENDPOINT = '';
  var HOME_LIMIT = 6;
  var CATALOG_LIMIT = CARS.length;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouch = window.matchMedia('(hover: none)').matches;
  function esc(value) {
    if (value === undefined || value === null) return '';
    return String(value).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }
  function onMediaChange(mq, handler) {
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else if (mq.addListener) mq.addListener(handler);
  }
  function num(value) {
    return new Intl.NumberFormat('en-US').format(value);
  }
  function formatPrice(car) {
    if (!car || typeof car.price !== 'number' || !isFinite(car.price)) return 'Price on Request';
    return '$' + Math.round(car.price).toLocaleString('en-US');
  }
  function carTitle(car) {
    return [car.brand, car.model].filter(Boolean).join(' ').trim() || 'Vehicle';
  }
  function carCategory(car) {
    var place = car.location || 'Other';
    var state = (typeof car.mileage === 'number' && car.mileage === 0) ? 'new' : 'pre-owned';
    return place + ' ' + state;
  }
  function mileageText(car) {
    if (typeof car.mileage !== 'number') return car.mileage ? String(car.mileage) : '';
    return car.mileage === 0 ? 'New · 0 mi' : num(car.mileage) + ' mi';
  }
  function managerLink(car) {
    return '#';
  }
  function trapFocus(e, box) {
    if (e.key !== 'Tab' || !box) return;
    var nodes = box.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    var items = Array.prototype.filter.call(nodes, function (el) {
      return el.offsetParent !== null && !el.hidden;
    });
    if (!items.length) return;
    var first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
  function scrollLock(on) {
    document.body.classList.toggle('is-scroll-locked', on);
  }
  function addSwipe(el, onNext, onPrev) {
    var x0 = null, y0 = null;
    el.addEventListener('touchstart', function (e) {
      x0 = e.touches[0].clientX;
      y0 = e.touches[0].clientY;
    }, { passive: true });
    el.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      var dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4) {
        if (dx < 0) onNext(); else onPrev();
      }
      x0 = y0 = null;
    }, { passive: true });
  }
  function setupReveal(nodes) {
    var list = Array.prototype.slice.call(nodes || []);
    if (!list.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      list.forEach(function (el) { el.classList.add('reveal', 'is-visible'); });
      return;
    }
    list.forEach(function (el) { el.classList.add('reveal'); });
    var observer = new IntersectionObserver(function (entries) {
      var shown = 0;
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = Math.min(shown, 5) * 70;
        el.style.transitionDelay = delay + 'ms';
        el.classList.add('is-visible');
        observer.unobserve(el);
        shown++;
        setTimeout(function () {
          el.style.transitionDelay = '';
          el.style.willChange = 'auto';
        }, delay + 560);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
    list.forEach(function (el) { observer.observe(el); });
  }
  function revealPageBlocks() {
    setupReveal(document.querySelectorAll('[data-reveal]'));
  }
  function setupTouchEffects() {
    if (!isTouch) return;
    var SELECTOR = '.origin-card, .trust-card, .review, .car-card, .step, .destination, .stat,' +
      ' .plus, .service, .price-part, .vcard, .ya-card, .legal-block';
    var HOLD = 1600;
    document.addEventListener('touchstart', function (e) {
      var el = e.target.closest ? e.target.closest(SELECTOR) : null;
      if (!el) return;
      el.classList.add('is-touched');
      if (el._touchTimer) clearTimeout(el._touchTimer);
      el._touchTimer = setTimeout(function () {
        el.classList.remove('is-touched');
      }, HOLD);
    }, { passive: true });
  }
  function setupHeroPhoto() {
    if (!HERO_PHOTO || HERO_PHOTO === 'hero.webp') return;
    var bg = document.querySelector('.hero__bg');
    if (!bg) return;
    bg.style.backgroundImage = 'url("' + HERO_PHOTO + '")';
  }
  function setupTimeline() {
    var timeline = document.querySelector('.timeline');
    if (!timeline) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      timeline.classList.add('is-filled');
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          timeline.classList.add('is-filled');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    observer.observe(timeline);
  }
  function setupMenu() {
    var burger = document.querySelector('[data-burger]');
    var menu = document.querySelector('[data-menu]');
    if (!burger || !menu) return;
    var items = menu.querySelectorAll('.menu__nav a');
    items.forEach(function (item, i) {
      item.style.transitionDelay = (i * 60) + 'ms';
    });
    function setOpen(open) {
      menu.classList.toggle('is-open', open);
      burger.classList.toggle('is-active', open);
      scrollLock(open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    burger.addEventListener('click', function () {
      setOpen(!menu.classList.contains('is-open'));
    });
    menu.addEventListener('click', function (e) {
      var link = e.target.closest('a');
      if (link) {
        setOpen(false);
        var href = link.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          var target = document.querySelector(href);
          if (target) {
            setTimeout(function() {
              target.scrollIntoView({ behavior: 'smooth' });
              if (window.location.protocol !== 'file:') {
                history.pushState(null, null, href);
              }
            }, 150);
          }
        }
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) setOpen(false);
    });
    onMediaChange(window.matchMedia('(min-width: 1024px)'), function (e) {
      if (e.matches) setOpen(false);
    });
  }
  function setupCursor() {
    var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var FINE = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!FINE || REDUCED) return;

    var dot = document.getElementById('cur-dot');
    var ring = document.getElementById('cur-ring');
    var label = document.getElementById('cur-label');
    if (!dot) {
      ring = document.createElement('span');
      ring.id = 'cur-ring';
      ring.setAttribute('aria-hidden', 'true');
      label = document.createElement('span');
      label.id = 'cur-label';
      ring.appendChild(label);
      dot = document.createElement('span');
      dot.id = 'cur-dot';
      dot.setAttribute('aria-hidden', 'true');
      document.body.appendChild(ring);
      document.body.appendChild(dot);
    }

    var root = document.documentElement;
    var hide = document.createElement('style');
    hide.textContent =
      'html, html *{cursor:none!important} ' +
      '[data-cursor-off], [data-cursor-off] *, .map-frame, .map-frame *, iframe{cursor:auto!important} ' +
      'html.autoscroll-on #cur-dot, html.autoscroll-on #cur-ring{opacity:0!important;visibility:hidden!important}';
    document.head.appendChild(hide);

    var disc = document.createElement('div');
    disc.className = 'autoscroll-disc';
    disc.setAttribute('aria-hidden', 'true');
    disc.innerHTML =
      '<svg viewBox="0 0 24 24"><path class="autoscroll-disc__up" d="M8 7l4-4 4 4"/><circle class="autoscroll-disc__dot" cx="12" cy="12" r="2.2"/><path class="autoscroll-disc__dn" d="M8 17l4 4 4-4"/></svg>';
    document.body.appendChild(disc);

    var autoScrollActive = false;
    var autoOriginX = 0, autoOriginY = 0, autoCurX = 0, autoCurY = 0, autoDownTime = 0, autoRaf = null;
    var live = false, off = false, blocked = false;
    var m = { x: -100, y: -100 }, d = { x: -100, y: -100 }, r = { x: -100, y: -100 }, raf = null;
    var edgeX = root.clientWidth, edgeY = root.clientHeight;

    function measure() { edgeX = root.clientWidth; edgeY = root.clientHeight; }
    window.addEventListener('resize', measure, { passive: true });

    function show(state) {
      var want = (off || blocked || autoScrollActive) ? false : state;
      if (want === live) return;
      live = want;
      root.classList.toggle('cursor-on', want);
    }

    function inGutter(x, y) {
      return (window.innerWidth > edgeX && x >= edgeX - 3) || (window.innerHeight > edgeY && y >= edgeY - 3);
    }

    function tick() {
      d.x += (m.x - d.x) * 0.85; d.y += (m.y - d.y) * 0.85;
      r.x += (m.x - r.x) * 0.15; r.y += (m.y - r.y) * 0.15;
      dot.style.transform = 'translate(' + d.x.toFixed(2) + 'px,' + d.y.toFixed(2) + 'px) translate(-50%,-50%)';
      ring.style.transform = 'translate(' + r.x.toFixed(2) + 'px,' + r.y.toFixed(2) + 'px) translate(-50%,-50%)';
      var settled = Math.abs(m.x - r.x) < 0.1 && Math.abs(m.y - r.y) < 0.1;
      raf = settled ? null : requestAnimationFrame(tick);
    }

    function stopAutoScroll(e) {
      if (!autoScrollActive) return;
      autoScrollActive = false;
      root.classList.remove('autoscroll-on');
      root.style.scrollBehavior = '';
      disc.classList.remove('is-active', 'is-up', 'is-dn');
      if (autoRaf) { cancelAnimationFrame(autoRaf); autoRaf = null; }
      var fx = (e && typeof e.clientX === 'number') ? e.clientX : autoCurX;
      var fy = (e && typeof e.clientY === 'number') ? e.clientY : autoCurY;
      m.x = d.x = r.x = fx; m.y = d.y = r.y = fy;
      show(true);
      if (!raf) raf = requestAnimationFrame(tick);
    }

    function tickAutoScroll() {
      if (!autoScrollActive) return;
      var dy = autoCurY - autoOriginY;
      var absDy = Math.abs(dy);
      if (absDy > 8) {
        var sign = dy > 0 ? 1 : -1;
        var speed = Math.min(46, Math.pow((absDy - 8) / 8.5, 1.35));
        window.scrollBy({ top: sign * speed, left: 0, behavior: 'instant' });
        disc.classList.toggle('is-dn', sign > 0);
        disc.classList.toggle('is-up', sign < 0);
      } else {
        disc.classList.remove('is-up', 'is-dn');
      }
      autoRaf = requestAnimationFrame(tickAutoScroll);
    }

    window.addEventListener('mousedown', function (e) {
      if (e.button === 1) {
        e.preventDefault();
        if (autoScrollActive) { stopAutoScroll(e); }
        else {
          autoScrollActive = true;
          autoOriginX = autoCurX = m.x = d.x = r.x = e.clientX;
          autoOriginY = autoCurY = m.y = d.y = r.y = e.clientY;
          autoDownTime = performance.now();
          root.classList.add('autoscroll-on');
          root.style.scrollBehavior = 'auto';
          show(false);
          disc.style.transform = 'translate(' + autoCurX.toFixed(1) + 'px,' + autoCurY.toFixed(1) + 'px) translate(-50%,-50%) scale(1)';
          disc.classList.add('is-active');
          if (!autoRaf) autoRaf = requestAnimationFrame(tickAutoScroll);
        }
      } else if (autoScrollActive) {
        e.preventDefault();
        stopAutoScroll(e);
      }
    }, { passive: false });

    window.addEventListener('mouseup', function (e) {
      if (e.button === 1 && autoScrollActive && (performance.now() - autoDownTime) > 240 && Math.hypot(e.clientX - autoOriginX, e.clientY - autoOriginY) > 18) {
        stopAutoScroll(e);
      }
    }, { passive: true });
    window.addEventListener('auxclick', function (e) { if (e.button === 1) e.preventDefault(); }, { passive: false });
    window.addEventListener('wheel', function () { if (autoScrollActive) stopAutoScroll(); }, { passive: true });

    window.addEventListener('mousemove', function (e) {
      if (autoScrollActive) {
        autoCurX = m.x = d.x = r.x = e.clientX;
        autoCurY = m.y = d.y = r.y = e.clientY;
        disc.style.transform = 'translate(' + autoCurX.toFixed(1) + 'px,' + autoCurY.toFixed(1) + 'px) translate(-50%,-50%) scale(1)';
        return;
      }
      if (e.target && e.target.closest && e.target.closest('[data-cursor-off], .map-frame, iframe')) {
        blocked = true; show(false); return;
      }
      blocked = false;
      if (off) return;
      if (inGutter(e.clientX, e.clientY)) { show(false); return; }
      m.x = e.clientX; m.y = e.clientY;
      show(true);
      if (!raf) raf = requestAnimationFrame(tick);
    }, { passive: true });

    var CLICKY = 'a, button, [role="option"], [role="button"], .sel__btn, .sel__opt, .select-row, .country-row, .gallery__item, .car-card, .filter, .faq__q, [data-cursor]';
    var TEXTY = 'input:not([type="hidden"]):not([type="checkbox"]), textarea';

    function resolveLabel(el) {
      if (!el) return '';
      if (el.hasAttribute('data-cursor')) return el.getAttribute('data-cursor');
      if (el.matches('.modal__close, .lightbox__close')) return 'Close';
      if (el.matches('.modal__nav--prev, .lightbox__nav--prev, .carousel__arrow--prev')) return 'Prev';
      if (el.matches('.modal__nav--next, .lightbox__nav--next, .carousel__arrow--next')) return 'Next';
      if (el.matches('.burger')) return 'Menu';
      if (el.matches('.quiz__opt')) return 'Choose';
      if (el.matches('.quiz__back')) return 'Back';
      if (el.matches('.map-shield')) return 'Map';
      if (el.matches('.sel__btn, .sel__opt, .select-row, .country-row, .phone-code')) return 'Pick';
      if (el.matches('.filter')) return 'Filter';
      if (el.matches('.gallery__item')) return 'Zoom';
      if (el.matches('.faq__q')) return 'Read';
      if (el.matches('.car-card')) return 'Spec';
      if (el.matches('a[href^="tel:"]')) return 'Call';
      if (el.matches('a[href^="mailto:"]')) return 'Mail';
      if (el.matches('button[type="submit"]')) return 'Send';
      if (el.matches('.logo')) return 'Home';
      return 'Open';
    }

    function setState(el) {
      var texty = el && el.closest ? el.closest(TEXTY) : null;
      var clicky = !texty && el && el.closest ? el.closest(CLICKY) : null;
      dot.classList.toggle('is-text', !!texty);
      ring.classList.toggle('is-text', !!texty);
      dot.classList.toggle('is-over', !!clicky);
      ring.classList.toggle('is-over', !!clicky);
      ring.classList.toggle('is-active', !!clicky);
      var txt = clicky ? resolveLabel(clicky) : '';
      ring.classList.toggle('has-label', Boolean(txt));
      if (label) label.textContent = txt;
    }

    function resetCursor() { setState(null); show(false); }

    document.addEventListener('mouseover', function (e) {
      if (e.target && e.target.closest && e.target.closest('[data-cursor-off], .map-frame, iframe')) {
        blocked = true; show(false); return;
      }
      blocked = false;
      setState(e.target);
      show(true);
    });
    document.addEventListener('mouseout', function (e) { if (!e.relatedTarget) resetCursor(); });
    document.addEventListener('mouseleave', resetCursor);
    document.addEventListener('pointerleave', resetCursor);
    window.addEventListener('blur', resetCursor);
    window.addEventListener('touchstart', function () { off = true; show(false); hide.remove(); }, { once: true, passive: true });
  }
  function createLightbox() {
    var box = null, boxImg = null, caption = null, zoomHint = null;
    var items = [], current = 0, lastFocus = null;
    var scale = 1, minScale = 1, maxScale = 4;
    var originX = 0, originY = 0;
    var panX = 0, panY = 0;
    var isPanning = false, panStartX = 0, panStartY = 0;
    var lastTap = 0;
    var pinchStartDist = 0, pinchStartScale = 1;
    function applyTransform() {
      boxImg.style.transform = 'scale(' + scale + ') translate(' + panX / scale + 'px, ' + panY / scale + 'px)';
      boxImg.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
    }
    function resetZoom() {
      scale = 1; panX = 0; panY = 0;
      boxImg.style.transition = 'transform .25s ease';
      applyTransform();
      setTimeout(function () { boxImg.style.transition = ''; }, 260);
    }
    function clampPan() {
      var maxPx = (boxImg.offsetWidth * (scale - 1)) / 2;
      var maxPy = (boxImg.offsetHeight * (scale - 1)) / 2;
      panX = Math.max(-maxPx, Math.min(maxPx, panX));
      panY = Math.max(-maxPy, Math.min(maxPy, panY));
    }
    function build() {
      box = document.createElement('div');
      box.className = 'lightbox';
      box.setAttribute('role', 'dialog');
      box.setAttribute('aria-modal', 'true');
      box.setAttribute('aria-label', 'Photo viewer');
      box.innerHTML = '' +
        '<button class="lightbox__close" type="button" aria-label="Close">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
        '</button>' +
        '<button class="lightbox__nav lightbox__nav--prev" type="button" aria-label="Previous photo">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>' +
        '</button>' +
        '<figure class="lightbox__figure">' +
        '<img class="lightbox__img" src="" alt="" draggable="false">' +
        '<figcaption class="lightbox__caption"></figcaption>' +
        '</figure>' +
        '<button class="lightbox__nav lightbox__nav--next" type="button" aria-label="Next photo">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>' +
        '</button>' +
        '<span class="lightbox__zoom-hint">Scroll wheel or double-click to zoom</span>';
      document.body.appendChild(box);
      boxImg = box.querySelector('.lightbox__img');
      caption = box.querySelector('.lightbox__caption');
      zoomHint = box.querySelector('.lightbox__zoom-hint');
      box.querySelector('.lightbox__close').addEventListener('click', close);
      box.querySelector('.lightbox__nav--prev').addEventListener('click', function () { if (scale > 1) { resetZoom(); setTimeout(function () { go(-1); }, 260); } else { go(-1); } });
      box.querySelector('.lightbox__nav--next').addEventListener('click', function () { if (scale > 1) { resetZoom(); setTimeout(function () { go(1); }, 260); } else { go(1); } });
      box.addEventListener('click', function (e) {
        if (e.target === box) close();
      });
      box.addEventListener('wheel', function (e) {
        e.preventDefault();
        var delta = e.deltaY < 0 ? 1.15 : 0.88;
        var rect = boxImg.getBoundingClientRect();
        originX = e.clientX - rect.left - rect.width / 2;
        originY = e.clientY - rect.top - rect.height / 2;
        var newScale = Math.max(minScale, Math.min(maxScale, scale * delta));
        if (newScale !== scale) {
          panX += originX * (1 - newScale / scale);
          panY += originY * (1 - newScale / scale);
          scale = newScale;
          if (scale <= 1) { scale = 1; panX = 0; panY = 0; }
          clampPan();
          applyTransform();
        }
      }, { passive: false });
      boxImg.addEventListener('dblclick', function (e) {
        if (scale > 1) {
          resetZoom();
        } else {
          var rect = boxImg.getBoundingClientRect();
          panX = -(e.clientX - rect.left - rect.width / 2);
          panY = -(e.clientY - rect.top - rect.height / 2);
          scale = 2.5;
          clampPan();
          boxImg.style.transition = 'transform .3s ease';
          applyTransform();
          setTimeout(function () { boxImg.style.transition = ''; }, 320);
        }
      });
      boxImg.addEventListener('mousedown', function (e) {
        if (scale <= 1) return;
        e.preventDefault();
        isPanning = true;
        panStartX = e.clientX - panX;
        panStartY = e.clientY - panY;
        boxImg.style.cursor = 'grabbing';
      });
      window.addEventListener('mousemove', function (e) {
        if (!isPanning) return;
        panX = e.clientX - panStartX;
        panY = e.clientY - panStartY;
        clampPan();
        applyTransform();
      });
      window.addEventListener('mouseup', function () {
        if (!isPanning) return;
        isPanning = false;
        boxImg.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
      });
      box.addEventListener('touchstart', function (e) {
        if (e.touches.length === 2) {
          e.preventDefault();
          pinchStartDist = Math.hypot(
            e.touches[1].clientX - e.touches[0].clientX,
            e.touches[1].clientY - e.touches[0].clientY
          );
          pinchStartScale = scale;
        } else if (e.touches.length === 1 && scale <= 1) {
          var now = Date.now();
          if (now - lastTap < 300) {
            e.preventDefault();
            scale = 2.5;
            panX = 0; panY = 0;
            boxImg.style.transition = 'transform .3s ease';
            applyTransform();
            setTimeout(function () { boxImg.style.transition = ''; }, 320);
          }
          lastTap = now;
        } else if (e.touches.length === 1 && scale > 1) {
          isPanning = true;
          panStartX = e.touches[0].clientX - panX;
          panStartY = e.touches[0].clientY - panY;
        }
      }, { passive: false });
      box.addEventListener('touchmove', function (e) {
        if (e.touches.length === 2) {
          e.preventDefault();
          var dist = Math.hypot(
            e.touches[1].clientX - e.touches[0].clientX,
            e.touches[1].clientY - e.touches[0].clientY
          );
          scale = Math.max(minScale, Math.min(maxScale, pinchStartScale * dist / pinchStartDist));
          if (scale <= 1) { scale = 1; panX = 0; panY = 0; }
          clampPan();
          applyTransform();
        } else if (e.touches.length === 1 && isPanning) {
          e.preventDefault();
          panX = e.touches[0].clientX - panStartX;
          panY = e.touches[0].clientY - panStartY;
          clampPan();
          applyTransform();
        }
      }, { passive: false });
      box.addEventListener('touchend', function (e) {
        if (e.touches.length < 2) isPanning = false;
      });
      addSwipe(box, function () { if (scale <= 1) go(1); }, function () { if (scale <= 1) go(-1); });
    }
    function show(i) {
      if (!items.length) return;
      current = (i + items.length) % items.length;
      var item = items[current];
      resetZoom();
      boxImg.src = item.src;
      boxImg.alt = item.alt || '';
      var text = items.length > 1
        ? (item.alt || '') + '  ·  ' + (current + 1) + ' / ' + items.length
        : (item.alt || '');
      caption.textContent = text.trim();
      caption.hidden = !text.trim();
      box.querySelectorAll('.lightbox__nav').forEach(function (b) { b.hidden = items.length < 2; });
    }
    function go(step) { show(current + step); }
    function onKey(e) {
      trapFocus(e, box);
      if (e.key === 'Escape') { if (scale > 1) resetZoom(); else close(); }
      else if (e.key === 'ArrowLeft' && scale <= 1) go(-1);
      else if (e.key === 'ArrowRight' && scale <= 1) go(1);
      else if (e.key === '+' || e.key === '=') {
        scale = Math.min(maxScale, scale * 1.3); clampPan(); applyTransform();
      } else if (e.key === '-') {
        scale = Math.max(minScale, scale / 1.3);
        if (scale <= 1) { scale = 1; panX = 0; panY = 0; }
        clampPan(); applyTransform();
      }
    }
    function open(list, index) {
      if (!list || !list.length) return;
      if (!box) build();
      items = list;
      lastFocus = document.activeElement;
      show(index || 0);
      box.classList.add('is-open');
      scrollLock(true);
      document.addEventListener('keydown', onKey);
      box.querySelector('.lightbox__close').focus();
    }
    function close() {
      if (!box) return;
      resetZoom();
      box.classList.remove('is-open');
      document.removeEventListener('keydown', onKey);
      if (!document.querySelector('.modal.is-open, .menu.is-open')) scrollLock(false);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    return { open: open, close: close };
  }
  var lightbox = createLightbox();
  function cardSpecs(car) {
    var out = [];
    var m = mileageText(car);
    if (m) out.push(m);
    if (car.engineVolume) out.push(car.engineVolume.toFixed(1) + 'L');
    if (car.transmission) out.push(car.transmission);
    return out;
  }
  function carCardHtml(car, index) {
    var title = esc(carTitle(car));
    var cover = (car.images && car.images[0]) || '';
    var loadAttr = (typeof index === 'number' && index < 4) ? 'fetchpriority="high"' : 'loading="lazy"';
    var media = cover
      ? '<img src="' + esc(cover) + '" alt="' + title + ' ' + esc(car.year) + '" ' + loadAttr + ' decoding="async" width="640" height="400">'
      : '';
    var meta = [car.year, car.location].filter(Boolean).map(esc).join(' · ');
    var specs = cardSpecs(car);
    var specsHtml = specs.length
      ? '<div class="car-card__specs">' + specs.map(function (s) { return '<span>' + esc(s) + '</span>'; }).join('') + '</div>'
      : '';
    var price = car.priceIsFrom ? '<small>from </small>' + formatPrice(car) : formatPrice(car);
    return '' +
      '<article class="car-card" data-car-id="' + esc(car.id) + '">' +
      '<div class="car-card__media">' + media +
      (car.status ? '<span class="car-card__status">' + esc(car.status) + '</span>' : '') +
      '</div>' +
      '<div class="car-card__body">' +
      '<h3 class="car-card__title">' + title + '</h3>' +
      (meta ? '<p class="car-card__meta">' + meta + '</p>' : '') +
      specsHtml +
      '<p class="car-card__price">' + price + '</p>' +
      '<button class="btn btn--outline btn--sm" type="button" data-open-car="' + esc(car.id) + '">View Spec</button>' +
      '</div>' +
      '</article>';
  }
  function createCarModal() {
    var modal = null, els = {}, car = null, photoIndex = 0;
    var lastFocus = null;
    function build() {
      modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = '' +
        '<div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modalTitle">' +
        '<button class="modal__close" type="button" aria-label="Close">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
        '</button>' +
        '<div class="modal__gallery">' +
        '<div class="modal__photos"></div>' +
        '<button class="modal__nav modal__nav--prev" type="button" aria-label="Previous photo">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>' +
        '</button>' +
        '<button class="modal__nav modal__nav--next" type="button" aria-label="Next photo">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>' +
        '</button>' +
        '<span class="modal__counter"></span>' +
        '</div>' +
        '<div class="modal__body">' +
        '<p class="modal__status"></p>' +
        '<h3 class="modal__title" id="modalTitle"></h3>' +
        '<dl class="modal__specs"></dl>' +
        '<div class="modal__features"></div>' +
        '<p class="modal__price"></p>' +
        '<a class="btn btn--gold btn--full modal__cta" href="#" target="_blank" rel="noopener noreferrer" data-demo-noop="true" data-cursor="Inquire">Inquire With Concierge</a>' +
        '<p class="modal__hint">Click any photo to inspect full-screen</p>' +
        '</div>' +
        '</div>';
      document.body.appendChild(modal);
      els.dialog = modal.querySelector('.modal__dialog');
      els.photos = modal.querySelector('.modal__photos');
      els.counter = modal.querySelector('.modal__counter');
      els.status = modal.querySelector('.modal__status');
      els.title = modal.querySelector('.modal__title');
      els.specs = modal.querySelector('.modal__specs');
      els.features = modal.querySelector('.modal__features');
      els.price = modal.querySelector('.modal__price');
      els.cta = modal.querySelector('.modal__cta');
      els.prev = modal.querySelector('.modal__nav--prev');
      els.next = modal.querySelector('.modal__nav--next');
      modal.querySelector('.modal__close').addEventListener('click', close);
      els.prev.addEventListener('click', function (e) { e.stopPropagation(); setPhoto(photoIndex - 1); });
      els.next.addEventListener('click', function (e) { e.stopPropagation(); setPhoto(photoIndex + 1); });
      els.photos.addEventListener('click', function (e) {
        if (!car || !e.target.classList.contains('modal__img')) return;
        lightbox.open(car.images.map(function (src, idx) {
          return { src: src, alt: carTitle(car) + ' ' + car.year + ' — photo ' + (idx + 1) };
        }), photoIndex);
      });
      modal.addEventListener('click', function (e) {
        if (e.target === modal) close();
      });
      addSwipe(modal.querySelector('.modal__gallery'),
        function () { setPhoto(photoIndex + 1); },
        function () { setPhoto(photoIndex - 1); });
    }
    function setPhoto(i) {
      if (!car || !car.images.length) return;
      var imgs = els.photos.querySelectorAll('.modal__img');
      if (imgs.length) imgs[photoIndex].classList.remove('is-active');
      photoIndex = (i + car.images.length) % car.images.length;
      if (imgs.length) imgs[photoIndex].classList.add('is-active');
      els.counter.textContent = (photoIndex + 1) + ' / ' + car.images.length;
      var many = car.images.length > 1;
      els.prev.hidden = !many;
      els.next.hidden = !many;
      els.counter.hidden = !many;
    }
    function specRow(label, value) {
      if (!value) return '';
      return '<div class="modal__spec"><dt>' + esc(label) + '</dt><dd>' + esc(value) + '</dd></div>';
    }
    function fill(data) {
      car = data;
      photoIndex = 0;
      els.status.textContent = [car.status, car.location].filter(Boolean).join(' · ');
      els.title.textContent = carTitle(car) + ', ' + car.year;
      var engine = [];
      if (car.evSpecs) {
        engine.push(car.evSpecs);
      } else {
        if (car.engineVolume) engine.push(car.engineVolume.toFixed(1) + 'L');
        if (car.horsePower) engine.push(car.horsePower + ' hp');
      }
      els.specs.innerHTML =
        specRow('Powertrain', engine.join(' · ')) +
        specRow('Transmission', car.transmission) +
        specRow('Drivetrain', car.drivetrain) +
        specRow('Mileage', mileageText(car)) +
        specRow('Model Year', car.year) +
        specRow('Origin Hub', car.location);
      var features = car.features || [];
      els.features.innerHTML = features.length
        ? features.map(function (f) { return '<span class="tag">' + esc(f) + '</span>'; }).join('')
        : '';
      els.features.hidden = !features.length;
      els.price.innerHTML = car.priceIsFrom
        ? '<small>from </small>' + formatPrice(car)
        : formatPrice(car);
      els.cta.href = managerLink(car);
      els.photos.innerHTML = car.images.map(function (src, idx) {
        return '<img class="modal__img' + (idx === 0 ? ' is-active' : '') + '" src="' + esc(src) + '" alt="' + esc(carTitle(car) + ' ' + car.year + ' — photo ' + (idx + 1)) + '" draggable="false">';
      }).join('');
      setPhoto(0);
    }
    function onKey(e) {
      trapFocus(e, modal);
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') setPhoto(photoIndex - 1);
      else if (e.key === 'ArrowRight') setPhoto(photoIndex + 1);
    }
    function open(data) {
      if (!modal) build();
      fill(data);
      lastFocus = document.activeElement;
      modal.classList.add('is-open');
      scrollLock(true);
      document.addEventListener('keydown', onKey);
      els.dialog.scrollTop = 0;
      modal.querySelector('.modal__close').focus();
    }
    function close() {
      if (!modal) return;
      modal.classList.remove('is-open');
      document.removeEventListener('keydown', onKey);
      scrollLock(false);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    return { open: open, close: close };
  }
  var carModal = createCarModal();
  function bindCarCards(root) {
    root.addEventListener('click', function (e) {
      var trigger = e.target.closest('[data-open-car]');
      var card = trigger || e.target.closest('[data-car-id]');
      if (!card) return;
      var id = (trigger || card).getAttribute('data-open-car') || card.getAttribute('data-car-id');
      var car = CARS.find(function (c) { return c.id === id; });
      if (car) carModal.open(car);
    });
  }
  function initHomeCars() {
    var grid = document.getElementById('homeGrid');
    if (!grid) return;
    grid.innerHTML = CARS.slice(0, HOME_LIMIT).map(function(c, i){ return carCardHtml(c, i); }).join('');
    setupReveal(grid.querySelectorAll('.car-card'));
    bindCarCards(grid);
  }
  function initCatalogPage() {
    var grid = document.getElementById('catalogGrid');
    if (!grid) return;
    var filtersBox = document.getElementById('catalogFilters');
    var countBox = document.getElementById('catalogCount');
    var noteCount = document.getElementById('catalogNoteCount');
    var shown = CARS.slice(0, CATALOG_LIMIT);
    var activeCountry = 'all';
    var activeCondition = 'all';
    var activeSearch = '';
    if (noteCount) noteCount.textContent = shown.length;
    function draw() {
      var list = shown.filter(function (car) {
        var c = car.location || 'Other';
        var isNew = (typeof car.mileage === 'number' && car.mileage === 0);
        var s = isNew ? 'new' : 'used';
        var matchCountry = (activeCountry === 'all') || (c === activeCountry);
        var matchCondition = (activeCondition === 'all') || (s === activeCondition);
        var matchSearch = true;
        if (activeSearch) {
          var titleText = carTitle(car).toLowerCase();
          matchSearch = titleText.indexOf(activeSearch) !== -1;
        }
        return matchCountry && matchCondition && matchSearch;
      });
      grid.innerHTML = list.map(function(c, i){ return carCardHtml(c, i); }).join('');
      if (countBox) {
        countBox.textContent = list.length
          ? 'Showing ' + list.length + ' vehicles'
          : 'No vehicles match this filter right now';
      }
      setupReveal(grid.querySelectorAll('.car-card'));
    }
    function buildFilters() {
      if (!filtersBox) return;
      var countries = {};
      shown.forEach(function (car) {
        var c = car.location || 'Other';
        countries[c] = true;
      });
      var countryKeys = Object.keys(countries).sort(function(a, b) {
         if (a === 'Germany (EU)' && b !== 'Germany (EU)') return -1;
         if (b === 'Germany (EU)' && a !== 'Germany (EU)') return 1;
         if (a === 'South Korea' && b !== 'South Korea') return -1;
         if (b === 'South Korea' && a !== 'South Korea') return 1;
         return a.localeCompare(b, 'en');
      });
      var searchHtml = '<div class="filter-search">' +
        '<svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>' +
        '<input type="text" class="search-input" placeholder="Search make or model...">' +
        '<button type="button" class="search-clear" style="display:none;" aria-label="Clear search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>' +
        '</div>';
      var countryHtml = '<div class="filter-row">' +
        '<button class="filter is-active" type="button" data-filter-type="country" data-filter="all">All Origins</button>' +
        countryKeys.map(function (c) {
          return '<button class="filter" type="button" data-filter-type="country" data-filter="' + esc(c) + '">' + esc(c) + '</button>';
        }).join('') +
        '</div>';
      var conditionHtml = '<div class="filter-row">' +
        '<button class="filter is-active" type="button" data-filter-type="condition" data-filter="all">All Conditions</button>' +
        '<button class="filter" type="button" data-filter-type="condition" data-filter="new">Factory New</button>' +
        '<button class="filter" type="button" data-filter-type="condition" data-filter="used">Pre-Owned</button>' +
        '</div>';
      filtersBox.innerHTML = searchHtml + countryHtml + conditionHtml;
      filtersBox.addEventListener('input', function (e) {
        if (e.target.classList.contains('search-input')) {
          activeSearch = e.target.value.toLowerCase().trim();
          var clearBtn = e.target.parentNode.querySelector('.search-clear');
          if (clearBtn) clearBtn.style.display = e.target.value.length > 0 ? 'flex' : 'none';
          draw();
        }
      });
      filtersBox.addEventListener('click', function (e) {
        var clearBtn = e.target.closest('.search-clear');
        if (clearBtn) {
          var input = clearBtn.parentNode.querySelector('.search-input');
          if (input) {
            input.value = '';
            activeSearch = '';
            clearBtn.style.display = 'none';
            draw();
          }
          return;
        }
        var button = e.target.closest('.filter');
        if (!button) return;
        var type = button.getAttribute('data-filter-type');
        var val = button.getAttribute('data-filter');
        if (type === 'country') activeCountry = val;
        if (type === 'condition') activeCondition = val;
        var row = button.closest('.filter-row');
        row.querySelectorAll('.filter').forEach(function (el) {
          el.classList.toggle('is-active', el === button);
        });
        draw();
      });
    }
    buildFilters();
    draw();
    bindCarCards(grid);
  }
  function reviewCardHtml(review) {
    var stars = '';
    for (var i = 0; i < 5; i++) {
      stars += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="m12 3.5 2.7 5.5 6 .9-4.35 4.2 1.03 6-5.38-2.83L6.62 20.1l1.03-6L3.3 9.9l6-.9z"/></svg>';
    }
    var playBadge = review.video
      ? '<span class="review__play" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>' +
          '<em>' + esc(review.dur || '') + '</em>' +
        '</span>'
      : '';
    var mediaInner = review.photo
      ? '<img src="' + esc(review.photo) + '" alt="' +
        esc(review.name ? review.name + ' —  CarZ3, ' + (review.car || '') : ' CarZ3   ') +
        '" loading="lazy" decoding="async" width="640" height="400">' + playBadge
      : '';
    var media = '';
    if (review.photo && review.video) {
      media = '<button class="review__media review__media--play" type="button" data-review-video="' +
        esc(review.video) + '" aria-label=" -: ' + esc(review.name) + '">' + mediaInner + '</button>';
    } else if (review.photo) {
      media = '<div class="review__media">' + mediaInner + '</div>';
    }
    var avatar = review.photo ? '' :
      '<div class="review__avatar" aria-hidden="true">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="12" cy="8.5" r="3.75"/><path d="M4.5 20c0-3.6 3.4-5.75 7.5-5.75s7.5 2.15 7.5 5.75"/>' +
      '</svg>' +
      '</div>';
    var sub = [review.city, review.car].filter(Boolean).join(' · ');
    var meta = [review.date, review.source].filter(Boolean).join(' · ');
    return '' +
      '<div class="carousel__slide">' +
      '<article class="review">' +
      media +
      '<svg class="review__quote" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M9 6C6.2 7.4 4.5 10 4.5 13.2V18h6v-5.4H7.8c0-2 .6-3.4 2.4-4.4z"/>' +
      '<path d="M19 6c-2.8 1.4-4.5 4-4.5 7.2V18h6v-5.4h-2.7c0-2 .6-3.4 2.4-4.4z"/>' +
      '</svg>' +
      '<div class="review__stars" aria-hidden="true">' + stars + '</div>' +
      '<span class="sr-only">Rated 5 out of 5</span>' +
      '<p class="review__text">' + esc(review.text) + '</p>' +
      '<div class="review__person">' + avatar +
      '<div class="review__meta">' +
      '<div class="review__name">' + esc(review.name) + '</div>' +
      (sub ? '<div class="review__city">' + esc(sub) + '</div>' : '') +
      (meta ? '<div class="review__src">' + esc(meta) + '</div>' : '') +
      '</div>' +
      '</div>' +
      '</article>' +
      '</div>';
  }
  function setupReviewsCarousel() {
    var root = document.getElementById('reviewsCarousel');
    if (!root) return;
    var list = REVIEWS.filter(function (r) { return r && (r.text || r.photo); });
    if (!list.length) {
      var section = root.closest('section');
      if (section) section.remove();
      document.querySelectorAll('a[href="#reviews"], a[href="index.html#reviews"]').forEach(function (link) {
        link.remove();
      });
      return;
    }
    var track = root.querySelector('.carousel__track');
    var dotsBox = root.querySelector('.carousel__dots');
    var prevBtn = root.querySelector('.carousel__arrow--prev');
    var nextBtn = root.querySelector('.carousel__arrow--next');
    track.innerHTML = list.map(reviewCardHtml).join('');
    var slides = track.querySelectorAll('.carousel__slide');
    var index = 0, perView = 1, maxIndex = 0, timer = null;
    var DELAY = 6500;
    var cachedWidth = 0;
    function calcPerView() {
      var w = cachedWidth || window.innerWidth;
      return w >= 900 ? 3 : (w >= 560 ? 2 : 1);
    }
    function layout() {
      perView = calcPerView();
      maxIndex = Math.max(0, list.length - perView);
      if (index > maxIndex) index = maxIndex;
      slides.forEach(function (s) { s.style.width = (100 / perView) + '%'; });
      renderDots();
      apply();
    }
    function apply() {
      track.style.transform = 'translateX(' + (-index * (100 / perView)) + '%)';
      dotsBox.querySelectorAll('.carousel__dot').forEach(function (d, i) {
        d.classList.toggle('is-active', i === index);
        d.setAttribute('aria-current', i === index ? 'true' : 'false');
      });
      if (prevBtn) prevBtn.disabled = index === 0;
      if (nextBtn) nextBtn.disabled = index === maxIndex;
    }
    function renderDots() {
      var html = '';
      for (var i = 0; i <= maxIndex; i++) {
        html += '<button class="carousel__dot" type="button" data-go="' + i + '" aria-label=" ' + (i + 1) + '"></button>';
      }
      dotsBox.innerHTML = html;
    }
    function go(i) {
      index = i < 0 ? maxIndex : (i > maxIndex ? 0 : i);
      apply();
    }
    function start() {
      if (reduceMotion || list.length <= perView) return;
      stop();
      timer = setInterval(function () { go(index + 1); }, DELAY);
    }
    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
    }
    dotsBox.addEventListener('click', function (e) {
      var dot = e.target.closest('[data-go]');
      if (!dot) return;
      go(parseInt(dot.getAttribute('data-go'), 10) || 0);
      start();
    });
    if (prevBtn) prevBtn.addEventListener('click', function () { go(index - 1); start(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { go(index + 1); start(); });
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('touchstart', stop, { passive: true });
    root.addEventListener('touchend', function () { setTimeout(start, 3000); }, { passive: true });
    addSwipe(root, function () { go(index + 1); }, function () { go(index - 1); });
    if ('ResizeObserver' in window) {
      new ResizeObserver(function (entries) {
        if (entries && entries[0]) cachedWidth = entries[0].contentRect.width;
        layout();
      }).observe(root);
    } else {
      var resizeTimer = null;
      window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(layout, 150);
      });
    }
    layout();
    start();
  }
  function sendLead(payload) {
    if (!FORM_ENDPOINT) {
      if (window.console && console.info) {
        console.info('CarZ3 Bespoke Motors concierge preview:', payload);
      }
      return Promise.resolve({ demo: true });
    }
    return fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function (result) {
      if (!result || result.ok !== true) {
        throw new Error(result && result.error ? result.error : ' ');
      }
      return { demo: false };
    });
  }
  var ICON_ERROR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5"/><path d="M12 16.3v.2"/></svg>';
  var ICON_OK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.3 12.2 2.6 2.6 4.8-5.2"/></svg>';
  function toast(message, kind) {
    var box = document.getElementById('toasts');
    if (!box) {
      box = document.createElement('div');
      box.id = 'toasts';
      box.className = 'toasts';
      box.setAttribute('role', 'status');
      box.setAttribute('aria-live', 'polite');
      document.body.appendChild(box);
    }
    var el = document.createElement('div');
    el.className = 'toast toast--' + (kind === 'ok' ? 'ok' : 'error');
    el.innerHTML = '<span class="toast__icon">' + (kind === 'ok' ? ICON_OK : ICON_ERROR) +
      '</span><span class="toast__text">' + esc(message) + '</span>';
    box.appendChild(el);
    requestAnimationFrame(function () { el.classList.add('is-visible'); });
    setTimeout(function () {
      el.classList.remove('is-visible');
      setTimeout(function () { el.remove(); }, 400);
    }, 3500);
  }
  function setupCountryPicker(form) {
    var toggle = form.querySelector('[data-country-toggle]');
    var panel = form.querySelector('[data-country-panel]');
    if (!toggle || !panel) return null;
    var search = panel.querySelector('.country-panel__search input');
    var listBox = panel.querySelector('.country-panel__list');
    var flagBox = toggle.querySelector('.phone-code__flag');
    var dialBox = toggle.querySelector('.phone-code__dial');
    var current = COUNTRIES.filter(function (c) { return c.iso === DEFAULT_COUNTRY; })[0] || COUNTRIES[0];
    function rowHtml(c) {
      return '<button class="country-row" type="button" data-iso="' + c.iso + '">' +
        '<span class="country-row__flag">' + flagHtml(c.iso) + '</span>' +
        '<span class="country-row__name">' + esc(c.name) + '</span>' +
        '<span class="country-row__dial">+' + esc(c.dial) + '</span>' +
        '</button>';
    }
    function render(filter) {
      var q = (filter || '').trim().toLowerCase();
      var list = !q ? COUNTRIES : COUNTRIES.filter(function (c) {
        return c.name.toLowerCase().indexOf(q) === 0 ||
          c.name.toLowerCase().indexOf(' ' + q) > -1 ||
          c.dial.indexOf(q.replace(/^\+/, '')) === 0 ||
          c.iso.toLowerCase() === q;
      });
      listBox.innerHTML = list.length
        ? list.map(rowHtml).join('')
        : '<p class="country-panel__empty">No matches found</p>';
    }
    function paint() {
      flagBox.innerHTML = flagHtml(current.iso);
      dialBox.textContent = '+' + current.dial;
      toggle.setAttribute('aria-label', 'Country code: ' + current.name + ', +' + current.dial);
    }
    function open() {
      render('');
      panel.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
      requestAnimationFrame(function () {
        panel.classList.add('is-open');
        if (search && !isTouch) search.focus();
      });
    }
    function close() {
      panel.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      if (search) search.value = '';
      setTimeout(function () { panel.hidden = true; }, 220);
    }
    function isOpen() { return !panel.hidden; }
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (isOpen()) close(); else open();
    });
    listBox.addEventListener('click', function (e) {
      var row = e.target.closest('[data-iso]');
      if (!row) return;
      var iso = row.getAttribute('data-iso');
      var found = COUNTRIES.filter(function (c) { return c.iso === iso; })[0];
      if (found) { current = found; paint(); }
      close();
      var phone = form.elements['phone'];
      if (phone) phone.focus();
    });
    if (search) {
      search.addEventListener('input', function () { render(search.value); });
      search.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { close(); toggle.focus(); }
      });
    }
    document.addEventListener('click', function (e) {
      if (!isOpen()) return;
      if (!panel.contains(e.target) && e.target !== toggle) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) { close(); toggle.focus(); }
    });
    paint();
    return {
      dial: function () { return current.dial; },
      name: function () { return current.name; }
    };
  }
  function setupCustomSelect(form) {
    var group = form.querySelector('[data-custom-select]');
    if (!group) return;
    var toggle = group.querySelector('[data-select-toggle]');
    var panel = group.querySelector('[data-select-panel]');
    var valSpan = group.querySelector('[data-select-value]');
    var input = group.querySelector('input[name="kind"]');
    var rows = group.querySelectorAll('.select-row');
    if (!toggle || !panel) return;
    function open() {
      panel.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
      requestAnimationFrame(function () {
        panel.classList.add('is-open');
      });
    }
    function close() {
      panel.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      setTimeout(function () { panel.hidden = true; }, 220);
    }
    function isOpen() { return !panel.hidden; }
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (isOpen()) close(); else open();
    });
    panel.addEventListener('click', function (e) {
      var row = e.target.closest('.select-row');
      if (!row) return;
      var val = row.getAttribute('data-value');
      if (input) input.value = val;
      if (valSpan) valSpan.textContent = val;
      rows.forEach(function (r) {
        var isSel = (r === row);
        r.classList.toggle('is-selected', isSel);
        r.setAttribute('aria-selected', isSel ? 'true' : 'false');
      });
      close();
    });
    document.addEventListener('click', function (e) {
      if (!isOpen()) return;
      if (!group.contains(e.target) && e.target !== toggle) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) { close(); toggle.focus(); }
    });
    form.addEventListener('reset', function () {
      setTimeout(function () {
        var defaultVal = 'In-Stock Allocation';
        if (input) input.value = defaultVal;
        if (valSpan) valSpan.textContent = defaultVal;
        rows.forEach(function (r) {
          var isSel = r.getAttribute('data-value') === defaultVal;
          r.classList.toggle('is-selected', isSel);
          r.setAttribute('aria-selected', isSel ? 'true' : 'false');
        });
      }, 10);
    });
  }
  function setupRequestForm() {
    var form = document.getElementById('requestForm');
    if (!form) return;
    var picker = setupCountryPicker(form);
    setupCustomSelect(form);
    var submit = form.querySelector('[type="submit"]');
    var submitLabel = submit ? submit.textContent : '';
    var busy = false;
    function digitsOf(value) {
      return String(value || '').replace(/\D/g, '');
    }
    function fail(message, fieldName) {
      toast(message, 'error');
      var field = form.elements[fieldName];
      if (field && field.focus) field.focus();
      return false;
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (busy) return;
      var name = (form.elements['name'].value || '').trim();
      var phone = (form.elements['phone'].value || '').trim();
      var email = (form.elements['email'].value || '').trim();
      var kind = (form.elements['kind'].value || '').trim();
      var comment = (form.elements['comment'].value || '').trim();
      if (!name) return fail('Please enter your name', 'name');
      var dial = picker ? picker.dial() : '';
      var totalDigits = digitsOf(dial) + digitsOf(phone);
      if (!digitsOf(phone)) return fail('Please enter your phone number', 'phone');
      if (totalDigits.length < 10) return fail('Please enter a complete phone number', 'phone');
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        return fail('Please check your email address', 'email');
      }
      if (!form.elements['consent'].checked) {
        return fail('Please confirm the privacy policy consent', 'consent');
      }
      var payload = {
        name: name,
        phone: '+' + digitsOf(dial) + ' ' + phone,
        country: picker ? picker.name() : '',
        email: email,
        kind: kind,
        comment: comment
      };
      busy = true;
      if (submit) {
        submit.textContent = 'Sending...';
        submit.disabled = true;
      }
      sendLead(payload).then(function () {
        if (submit) submit.textContent = 'Request Received';
        toast('Thank you, ' + name + '. Our Scottsdale concierge will reach out shortly.', 'ok');
        setTimeout(function () {
          form.reset();
          if (submit) {
            submit.textContent = submitLabel;
            submit.disabled = false;
          }
          busy = false;
        }, 4500);
      }).catch(function () {
        busy = false;
        if (submit) {
          submit.textContent = submitLabel;
          submit.disabled = false;
        }
        toast('Could not send online. Please call our Scottsdale desk directly.', 'error');
      });
    });
  }
  function setupCounters() {
    var nums = document.querySelectorAll('[data-count]');
    if (!nums.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      nums.forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
      return;
    }
    function run(el) {
      var raw = el.getAttribute('data-count');
      var target = parseInt(raw.replace(/\D/g, ''), 10) || 0;
      var prefix = /^\D+/.test(raw) ? raw.match(/^\D+/)[0] : '';
      var suffix = /\D+$/.test(raw) ? raw.match(/\D+$/)[0] : '';
      var start = null;
      var DUR = 1400;
      function tick(now) {
        if (start === null) start = now;
        var p = Math.min((now - start) / DUR, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = prefix + Math.round(target * eased).toLocaleString('en-US') + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        run(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.5 });
    nums.forEach(function (el) { observer.observe(el); });
  }
  function setupGallery() {
    var grid = document.getElementById('galleryGrid');
    if (!grid) return;
    var photos = CLIENT_PHOTOS.filter(function (p) { return p && p.src; });
    var section = grid.closest('section');
    if (!photos.length) {
      if (section) section.remove();
      return;
    }
    var onReviewsPage = !!document.getElementById('clipGrid') && !document.getElementById('requestForm');
    var BATCH = 12;
    var loaded = 0;
    function tileHtml(photo, i) {
      var styleStr = photo.style ? ' style="' + esc(photo.style) + '"' : '';
      return '<button class="gallery__item" type="button" data-gallery="' + i + '">' +
        '<img src="' + esc(photo.src) + '" alt="' + esc(photo.alt) + '" loading="lazy" decoding="async" ' +
        'width="600" height="450"' + styleStr + '>' +
        '<span class="gallery__zoom" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">' +
          '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/><path d="M11 8.5v5M8.5 11h5"/></svg>' +
        '</span>' +
      '</button>';
    }
    function addBatch(n) {
      var next = photos.slice(loaded, loaded + n);
      if (!next.length) return;
      var html = next.map(function (p, k) { return tileHtml(p, loaded + k); }).join('');
      grid.insertAdjacentHTML('beforeend', html);
      var fresh = Array.prototype.slice.call(grid.querySelectorAll('.gallery__item')).slice(loaded);
      setupReveal(fresh);
      loaded += next.length;
    }
    addBatch(onReviewsPage ? photos.length : BATCH);
    grid.addEventListener('click', function (e) {
      var item = e.target.closest('[data-gallery]');
      if (!item) return;
      var i = parseInt(item.getAttribute('data-gallery'), 10) || 0;
      lightbox.open(photos.map(function (p) { return { src: p.src, alt: p.alt }; }), i);
    });
    grid.addEventListener('error', function (e) {
      if (e.target && e.target.tagName === 'IMG') {
        var tile = e.target.closest('.gallery__item');
        if (tile) tile.remove();
      }
    }, true);
    var more = document.getElementById('galleryMore');
    if (!more) return;
    if (!onReviewsPage) {
      if (photos.length <= loaded) more.remove();
      else more.textContent = 'View All Handover Photos';
      return;
    }
    if (photos.length <= loaded) { more.remove(); return; }
    more.textContent = 'Load More Photos';
    more.removeAttribute('href');
    more.addEventListener('click', function (e) {
      e.preventDefault();
      addBatch(BATCH);
      if (loaded >= photos.length) more.remove();
    });
  }
  function createVideoPlayer() {
    var box = null, frame = null, lastFocus = null;
    function build() {
      box = document.createElement('div');
      box.className = 'vbox';
      box.setAttribute('role', 'dialog');
      box.setAttribute('aria-modal', 'true');
      box.setAttribute('aria-label', 'Delivery Moment Clip');
      box.innerHTML =
        '<button class="vbox__close" type="button" aria-label="Close">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
        '</button>' +
        '<div class="vbox__frame"></div>';
      document.body.appendChild(box);
      frame = box.querySelector('.vbox__frame');
      box.querySelector('.vbox__close').addEventListener('click', close);
      box.addEventListener('click', function (e) {
        if (e.target === box || e.target === frame) close();
      });
    }
    function open(src) {
      if (!src) return;
      if (!box) build();
      document.querySelectorAll('.cursor-dot, .cursor-ring').forEach(function (el) {
        el.classList.remove('is-off');
      });
      lastFocus = document.activeElement;
      var html = '<div class="cvp-container">' +
        '<video src="' + esc(src) + '" autoplay playsinline preload="auto"></video>' +
        '<div class="cvp-loader" aria-live="polite"><span></span>Loading clip...</div>' +
        '<div class="cvp-controls">' +
          '<button class="cvp-btn cvp-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>' +
          '<div class="cvp-progress-wrap"><div class="cvp-progress-bar"></div></div>' +
          '<div class="cvp-vol-wrap">' +
            '<button class="cvp-btn cvp-mute"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg></button>' +
            '<input type="range" class="cvp-vol-slider" min="0" max="1" step="0.05" value="1">' +
          '</div>' +
          '<button class="cvp-btn cvp-fullscreen"><svg viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg></button>' +
        '</div>' +
      '</div>';
      frame.innerHTML = html;
      var vid = frame.querySelector('video');
      if (vid) {
        vid.volume = 0;
        vid.muted = true;
        var loader = frame.querySelector('.cvp-loader');
        function hideLoader() { if (loader) loader.classList.add('is-hidden'); }
        function showLoader() { if (loader) loader.classList.remove('is-hidden'); }
        vid.addEventListener('canplay', hideLoader);
        vid.addEventListener('playing', hideLoader);
        vid.addEventListener('waiting', showLoader);
        vid.addEventListener('error', function () {
          if (loader) loader.textContent = 'Clip unavailable';
        });
        var playBtn = frame.querySelector('.cvp-play');
        var progWrap = frame.querySelector('.cvp-progress-wrap');
        var progBar = frame.querySelector('.cvp-progress-bar');
        var muteBtn = frame.querySelector('.cvp-mute');
        var volSlider = frame.querySelector('.cvp-vol-slider');
        var fsBtn = frame.querySelector('.cvp-fullscreen');
        var container = frame.querySelector('.cvp-container');
        playBtn.addEventListener('click', function() {
          if (vid.paused) vid.play();
          else vid.pause();
        });
        vid.addEventListener('play', function() {
          playBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
        });
        vid.addEventListener('pause', function() {
          playBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
        });
        vid.addEventListener('timeupdate', function() {
          var pct = (vid.currentTime / vid.duration) * 100 || 0;
          progBar.style.width = pct + '%';
        });
        progWrap.addEventListener('click', function(e) {
          var rect = progWrap.getBoundingClientRect();
          var pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
          vid.currentTime = pos * vid.duration;
        });
        volSlider.addEventListener('input', function(e) {
          vid.volume = e.target.value;
          vid.muted = (vid.volume == 0);
        });
        muteBtn.addEventListener('click', function() {
          vid.muted = !vid.muted;
          if (vid.muted) volSlider.value = 0;
          else {
            if (vid.volume == 0) vid.volume = 1;
            volSlider.value = vid.volume;
          }
        });
        fsBtn.addEventListener('click', function() {
          if (!document.fullscreenElement) {
             var dot = document.querySelector('.cursor-dot');
             var ring = document.querySelector('.cursor-ring');
             if (dot) container.appendChild(dot);
             if (ring) container.appendChild(ring);
             container.requestFullscreen().catch(function(){});
          } else {
             document.exitFullscreen();
          }
        });
        document.addEventListener('fullscreenchange', function() {
          if (!document.fullscreenElement) {
             var dot = document.querySelector('.cursor-dot');
             var ring = document.querySelector('.cursor-ring');
             if (dot) document.body.appendChild(dot);
             if (ring) document.body.appendChild(ring);
          }
        });
      }
      box.classList.add('is-open');
      scrollLock(true);
      document.addEventListener('keydown', onKey);
      box.querySelector('.vbox__close').focus();
    }
    function close() {
      if (!box) return;
      box.classList.remove('is-open');
      frame.innerHTML = '';
      document.removeEventListener('keydown', onKey);
      if (!document.querySelector('.modal.is-open, .lightbox.is-open, .menu.is-open')) scrollLock(false);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    function onKey(e) {
      trapFocus(e, box);
      if (e.key === 'Escape') close();
    }
    return { open: open, close: close };
  }
  var videoPlayer = createVideoPlayer();
  function bindReviewVideos() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-review-video]');
      if (!btn) return;
      videoPlayer.open(btn.getAttribute('data-review-video'));
    });
  }
  function setupFaq() {
    var box = document.getElementById('faqList');
    if (!box) return;
    if (!FAQ.length) {
      var section = box.closest('section');
      if (section) section.remove();
      return;
    }
    box.innerHTML = FAQ.map(function (item, i) {
      return '<div class="faq__item">' +
        '<button class="faq__q" type="button" aria-expanded="false" aria-controls="faq-a-' + i + '">' +
          '<span>' + esc(item.q) + '</span>' +
          '<svg class="faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">' +
          '<path d="M12 5v14M5 12h14"/></svg>' +
        '</button>' +
        '<div class="faq__a" id="faq-a-' + i + '"><p>' + esc(item.a) + '</p></div>' +
      '</div>';
    }).join('');
    setupReveal(box.querySelectorAll('.faq__item'));
    box.addEventListener('click', function (e) {
      var q = e.target.closest('.faq__q');
      if (!q) return;
      var item = q.parentNode;
      var open = item.classList.contains('is-open');
      box.querySelectorAll('.faq__item.is-open').forEach(function (el) {
        el.classList.remove('is-open');
        el.querySelector('.faq__q').setAttribute('aria-expanded', 'false');
      });
      if (!open) {
        item.classList.add('is-open');
        q.setAttribute('aria-expanded', 'true');
      }
    });
  }
  function setupDock() {
    var dock = document.querySelector('[data-dock]');
    if (!dock) return;
    var hero = document.querySelector('.hero');
    if (!hero || !('IntersectionObserver' in window)) {
      dock.classList.add('is-on');
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        dock.classList.toggle('is-on', !entry.isIntersecting);
      });
    }, { threshold: 0, rootMargin: '-120px 0px 0px 0px' });
    observer.observe(hero);
  }
  var QUIZ_STEPS = [
    { key: 'state', q: 'Preferred vehicle condition?', opts: ['Factory New', 'Certified Pre-Owned', 'Open to Both'] },
    { key: 'from',  q: 'Preferred sourcing hub?',      opts: ['Germany (EU)', 'South Korea', 'Dubai (UAE)', 'Domestic USA', 'No Preference'] },
    { key: 'budget',q: 'Target turnkey budget?',       opts: ['Under $35,000', '$35,000 – $60,000', '$60,000 – $100,000', '$100,000+'] },
    { key: 'body',  q: 'Preferred body style?',        opts: ['Executive Sedan', 'Luxury SUV', 'Performance Coupe', 'MPV / Lounge'] }
  ];
  function setupQuiz() {
    var root = document.getElementById('quiz');
    if (!root) return;
    var stage = root.querySelector('.quiz__stage');
    var bar = root.querySelector('.quiz__bar span');
    var counter = root.querySelector('.quiz__counter');
    var backBtn = root.querySelector('.quiz__back');
    var quizPicker;
    var answers = {};
    var step = 0;
    var TOTAL = QUIZ_STEPS.length + 1; 
    function progress() {
      var pct = Math.round((step / TOTAL) * 100);
      if (bar) bar.style.transform = 'scaleX(' + (pct / 100) + ')';
      if (counter) counter.textContent = 'Step ' + Math.min(step + 1, TOTAL) + ' of ' + TOTAL;
      if (backBtn) backBtn.hidden = step === 0;
    }
    function renderStep() {
      var data = QUIZ_STEPS[step];
      var dense = data.opts.length > 4 ? ' quiz__opts--compact' : '';
      stage.innerHTML =
        '<h3 class="quiz__q">' + esc(data.q) + '</h3>' +
        '<div class="quiz__opts' + dense + '">' +
          data.opts.map(function (o) {
            var active = answers[data.key] === o ? ' is-picked' : '';
            return '<button class="quiz__opt' + active + '" type="button" data-pick="' + esc(o) + '" data-cursor="Choose">' +
              esc(o) + '</button>';
          }).join('') +
        '</div>';
      stage.classList.remove('is-out');
      progress();
    }
    function renderContacts() {
      var picked = QUIZ_STEPS
        .map(function (s) { return answers[s.key]; })
        .filter(Boolean)
        .join(' · ');
      stage.innerHTML =
        '<h3 class="quiz__q">Where should we send your curated spec sheet?</h3>' +
        (picked ? '<p class="quiz__picked">' + esc(picked) + '</p>' : '') +
        '<div class="quiz__fields">' +
          '<div class="field">' +
            '<label class="form-label" for="quizName">Full Name</label>' +
            '<input class="field__input" type="text" id="quizName" placeholder="Your full name">' +
          '</div>' +
          '<div class="field">' +
            '<label class="form-label" for="quizPhone">Phone Number</label>' +
            '<div class="phone-field">' +
              '<button class="phone-code" type="button" data-country-toggle aria-expanded="false" aria-haspopup="listbox">' +
                '<span class="phone-code__flag"></span>' +
                '<span class="phone-code__dial">+1</span>' +
                '<svg class="phone-code__caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>' +
              '</button>' +
              '<input class="field__input" type="tel" id="quizPhone" placeholder="(480) 555-0194">' +
              '<div class="country-panel" data-country-panel hidden>' +
                '<div class="country-panel__search"><input type="text" placeholder="Search country or code" aria-label="Search country"></div>' +
                '<div class="country-panel__list" role="listbox"></div>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="field">' +
            '<label class="form-label" for="quizEmail">Email <span class="is-muted">— optional</span></label>' +
            '<input class="field__input" type="email" id="quizEmail" placeholder="you@example.com">' +
          '</div>' +
          '<div class="field">' +
            '<label class="form-label" for="quizComment">Spec Notes <span class="is-muted">— optional</span></label>' +
            '<textarea class="field__area" id="quizComment" rows="3" placeholder="Exterior color, trim package, target timeline..."></textarea>' +
          '</div>' +
        '</div>' +
        '<button class="btn btn--gold btn--full" type="button" data-quiz-send>Receive 3–5 Verified Allocations</button>' +
        '<p class="form-note">Delivered to your inbox within 1 business day — zero obligation</p>';
      quizPicker = setupCountryPicker(stage);
      stage.classList.remove('is-out');
      progress();
    }
    function renderDone(name) {
      stage.innerHTML =
        '<div class="quiz__done">' +
          '<span class="quiz__check" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
            '<circle cx="12" cy="12" r="9"/><path d="m8.3 12.2 2.6 2.6 4.8-5.2"/></svg>' +
          '</span>' +
          '<h3 class="quiz__q">Thank you' + (name ? ', ' + esc(name) : '') + '!</h3>' +
          '<p class="quiz__picked">Our Scottsdale sourcing desk is preparing 3–5 turnkey allocations for you.</p>' +
        '</div>';
      if (bar) bar.style.transform = 'scaleX(1)';
      if (counter) counter.textContent = 'Complete';
      if (backBtn) backBtn.hidden = true;
    }
    function go(next) {
      if (reduceMotion) { step = next; draw(); return; }
      stage.classList.add('is-out');
      setTimeout(function () { step = next; draw(); }, 180);
    }
    function draw() {
      if (step < QUIZ_STEPS.length) renderStep();
      else renderContacts();
    }
    stage.addEventListener('click', function (e) {
      var opt = e.target.closest('[data-pick]');
      if (opt) {
        answers[QUIZ_STEPS[step].key] = opt.getAttribute('data-pick');
        go(step + 1);
        return;
      }
      var send = e.target.closest('[data-quiz-send]');
      if (send) {
        var name = (document.getElementById('quizName') || {}).value || '';
        var phone = (document.getElementById('quizPhone') || {}).value || '';
        var email = (document.getElementById('quizEmail') || {}).value || '';
        var comment = (document.getElementById('quizComment') || {}).value || '';
        name = name.trim();
        phone = phone.trim();
        email = email.trim();
        comment = comment.trim();
        if (!name) { toast('Please enter your name', 'error'); return; }
        var dial = quizPicker ? quizPicker.dial() : '';
        var digitsOfPhone = phone.replace(/\D/g, '');
        var totalDigits = String(dial).replace(/\D/g, '') + digitsOfPhone;
        if (!digitsOfPhone) { toast('Please enter your phone number', 'error'); return; }
        if (totalDigits.length < 10) { toast('Please check your phone number', 'error'); return; }
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { toast('Please check your email address', 'error'); return; }
        var payload = {
          name: name, 
          phone: '+' + String(dial).replace(/\D/g, '') + ' ' + phone,
          email: email,
          comment: comment,
          state: answers.state || '', from: answers.from || '',
          budget: answers.budget || '', body: answers.body || ''
        };
        send.disabled = true;
        send.textContent = '…';
        sendLead(payload).then(function () {
          toast('Thank you, ' + name + '. Our Scottsdale concierge will reach out shortly.', 'ok');
          renderDone(name);
        }).catch(function () {
          send.disabled = false;
          send.textContent = 'Receive 3–5 Verified Allocations';
          toast('Could not send online. Please call our Scottsdale desk directly.', 'error');
        });
      }
    });
    if (backBtn) {
      backBtn.addEventListener('click', function () {
        if (step > 0) go(step - 1);
      });
    }
    draw();
  }
  function videoCardHtml(v) {
    var poster = v.poster
      ? '<img src="' + esc(v.poster) + '" alt="' + esc(v.title) + '" decoding="async" ' +
        'width="640" height="400">'
      : '';
    return '<button class="vcard" type="button" data-video="' + esc(v.file) + '">' +
      '<span class="vcard__media">' + poster +
        '<span class="vcard__play" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>' +
        '</span>' +
        (v.dur ? '<span class="vcard__dur">' + esc(v.dur) + '</span>' : '') +
      '</span>' +
      '<span class="vcard__body">' +
        '<span class="vcard__title">' + esc(v.title) + '</span>' +
        (v.note ? '<span class="vcard__note">' + esc(v.note) + '</span>' : '') +
      '</span>' +
    '</button>';
  }
  function fillVideoGrid(id, list) {
    var grid = document.getElementById(id);
    if (!grid) return;
    var items = (list || []).filter(function (v) { return v && v.file; });
    if (!items.length) {
      var section = grid.closest('section');
      if (section) section.remove();
      return;
    }
    grid.innerHTML = items.map(videoCardHtml).join('');
    setupReveal(grid.querySelectorAll('.vcard'));
    grid.addEventListener('click', function (e) {
      var card = e.target.closest('[data-video]');
      if (!card) return;
      videoPlayer.open(card.getAttribute('data-video'));
    });
  }
  function setupVideoPages() {
    fillVideoGrid('videoGrid', VIDEOS);
    fillVideoGrid('clipGrid', CLIPS);
  }
  function setupYandexReviews() {
    var box = document.getElementById('yaReviews');
    if (!box) return;
    var list = (YANDEX_REVIEWS || []).filter(function (r) { return r && r.text; });
    if (!list.length) {
      var section = box.closest('section');
      if (section) section.remove();
      return;
    }
    box.innerHTML = list.map(function (r) {
      var sub = [r.car, r.date].filter(Boolean).join(' · ');
      return '<article class="ya-card">' +
        '<div class="ya-card__stars" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 3.5 2.7 5.5 6 .9-4.35 4.2 1.03 6-5.38-2.83L6.62 20.1l1.03-6L3.3 9.9l6-.9z"/></svg>'.repeat(5) +
        '</div>' +
        '<span class="sr-only">Rated 5 out of 5</span>' +
        '<p class="ya-card__text">' + esc(r.text) + '</p>' +
        '<div class="ya-card__foot">' +
          '<span class="ya-card__name">' + esc(r.name) + '</span>' +
          (sub ? '<span class="ya-card__sub">' + esc(sub) + '</span>' : '') +
        '</div>' +
      '</article>';
    }).join('');
    setupReveal(box.querySelectorAll('.ya-card'));
  }
  function safe(name, fn) {
    try {
      if (typeof fn === 'function') {
        fn();
      }
    } catch (e) {
      console.error('Module warning [' + name + ']:', e);
    }
  }
  function init() {
    safe('module', setupMenu);
    safe('module', setupCursor);
    safe('module', setupLuxurySelects);
    safe('module', setupTouchEffects);
    safe('module', setupHeroPhoto);
    safe('module', setupTimeline);
    safe('module', setupProcessPanel);
    safe('module', setupReviewsCarousel);
    safe('module', setupYandexReviews);
    safe('module', setupCounters);
    safe('module', setupQuiz);
    safe('module', setupGallery);
    safe('module', setupVideoPages);
    safe('module', setupFaq);
    safe('module', setupMapShield);
    safe('module', setupDock);
    safe('module', bindReviewVideos);
    safe('module', setupRequestForm);
    safe('module', initHomeCars);
    safe('module', initCatalogPage);
    safe('module', setupLightbox);
    safe('module', revealPageBlocks);
    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
  }
  function setupMapShield() {
    var shields = document.querySelectorAll('[data-map-shield]');
    if (!shields.length) return;
    Array.prototype.forEach.call(shields, function (shield) {
      var frame = shield.closest('.map-frame');
      shield.addEventListener('click', function () {
        shield.classList.add('is-off');
        if (frame) frame.classList.add('is-live');
      });
      window.addEventListener('scroll', function () {
        if (!frame || !frame.classList.contains('is-live')) return;
        var r = frame.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) {
          shield.classList.remove('is-off');
          frame.classList.remove('is-live');
        }
      }, { passive: true });
    });
  }
  function setupProcessPanel() {
    var panel = document.getElementById('processPanel');
    var steps = document.querySelectorAll('.step');
    if (!panel || !steps.length || !('IntersectionObserver' in window)) return;
    var inner = panel.querySelector('.panel__inner');
    var numEl = panel.querySelector('.panel__num');
    var iconEl = panel.querySelector('.panel__icon');
    var titleEl = panel.querySelector('.panel__title');
    var descEl = panel.querySelector('.panel__desc');
    var mediaEl = panel.querySelector('.panel__media');
    if (!inner) return;
    var activeIndex = -1;
    var token = 0;
    function fill(i) {
      var step = steps[i];
      if (!step) return;
      var icon = step.querySelector('.step__icon');
      var title = step.querySelector('.step__title');
      var desc = step.querySelector('.step__desc');
      var marker = step.querySelector('.step__marker');
      if (numEl && marker) numEl.textContent = marker.textContent.trim();
      if (iconEl && icon) iconEl.innerHTML = icon.outerHTML;
      if (titleEl && title) titleEl.textContent = title.textContent;
      if (descEl && desc) descEl.textContent = desc.textContent;
      if (mediaEl) {
        var isLast = i === steps.length - 1;
        if (isLast) {
          var styleAttr = PROCESS_LAST_PHOTO.style ? ' style="' + esc(PROCESS_LAST_PHOTO.style) + '"' : '';
          mediaEl.innerHTML = '<img src="' + esc(PROCESS_LAST_PHOTO.src) + '" alt="' +
            esc(PROCESS_LAST_PHOTO.alt) + '" loading="lazy" decoding="async" ' +
            'width="640" height="400" class="panel__photo"' + styleAttr + '>';
          mediaEl.hidden = false;
        } else {
          mediaEl.innerHTML = '';
          mediaEl.hidden = true;
        }
      }
      steps.forEach(function (s, n) { s.classList.toggle('is-active', n === i); });
    }
    function setActive(i) {
      if (i === activeIndex) return;
      activeIndex = i;
      if (reduceMotion) { fill(i); return; }
      var mine = ++token;
      inner.classList.add('is-fading');
      setTimeout(function () {
        if (mine !== token) return;
        fill(i);
        inner.classList.remove('is-fading');
      }, 180);
    }
    fill(0);
    steps.forEach(function (s, n) { if (n === 0) s.classList.add('is-active'); });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var i = Array.prototype.indexOf.call(steps, entry.target);
        if (i >= 0) setActive(i);
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    steps.forEach(function (s) { observer.observe(s); });
  }
  function setupLightbox() {
    var images = Array.prototype.slice.call(
      document.querySelectorAll('.about-grid img, .about__collage img')
    );
    if (!images.length) return;
    var items = images.map(function (img) {
      return { src: img.src, alt: img.alt || '' };
    });
    images.forEach(function (img, i) {
      img.addEventListener('click', function () {
        lightbox.open(items, i);
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  document.addEventListener('click', function (e) {
    var noop = e.target.closest('a[data-demo-noop="true"], a[href="#"]');
    if (noop) e.preventDefault();
  });

  function setupLuxurySelects() {
    var widgets = Array.prototype.slice.call(document.querySelectorAll('[data-select]'));
    if (!widgets.length) return;
    function closeAll(except) {
      widgets.forEach(function (w) {
        if (w === except) return;
        w.dataset.open = 'false';
        var b = w.querySelector('.sel__btn');
        var l = w.querySelector('.sel__list');
        if (b) b.setAttribute('aria-expanded', 'false');
        if (l) l.hidden = true;
      });
    }
    widgets.forEach(function (w) {
      if (w._selBound) return;
      w._selBound = true;
      var btn = w.querySelector('.sel__btn');
      var valEl = w.querySelector('.sel__value');
      var list = w.querySelector('.sel__list');
      var inp = w.querySelector('input[type="hidden"]');
      var opts = Array.prototype.slice.call(w.querySelectorAll('.sel__opt'));
      if (!btn || !list || !opts.length) return;
      function setOpen(state) {
        if (state) closeAll(w);
        w.dataset.open = String(state);
        btn.setAttribute('aria-expanded', String(state));
        list.hidden = !state;
      }
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        setOpen(w.dataset.open !== 'true');
      });
      opts.forEach(function (opt) {
        opt.addEventListener('click', function (e) {
          e.stopPropagation();
          opts.forEach(function (o) { o.setAttribute('aria-selected', String(o === opt)); });
          if (valEl) valEl.textContent = opt.textContent.trim();
          if (inp) inp.value = opt.getAttribute('data-value') || opt.textContent.trim();
          setOpen(false);
          btn.focus();
        });
      });
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('[data-select]')) closeAll(null);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeAll(null);
    });
  }

})();
