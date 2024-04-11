
// import axios from 'axios';
import React, {  useState } from 'react'

function BuyerOnSearch() {
  const [user,setUser] = useState([]);
  const name ={
    "context": {
      "domain": "nic2004:52110",
      "country": "string",
      "city": "string",
      "action": "search",
      "core_version": "string",
      "bap_id": "string",
      "bap_uri": "string",
      "bpp_id": "string",
      "bpp_uri": "string",
      "transaction_id": "string",
      "message_id": "string",
      "timestamp": "2024-04-08T09:56:10.867Z",
      "key": "string",
      "ttl": "string"
    },
    "message": {
      "catalog": {
        "bpp/descriptor": {
          "name": "string",
          "code": "string",
          "symbol": "string",
          "short_desc": "string",
          "long_desc": "string",
          "images": [
            "string"
          ],
          "audio": "string",
          "3d_render": "string"
        },
        "bpp/categories": [
          {
            "id": "string",
            "parent_category_id": "string",
            "descriptor": {
              "name": "string",
              "code": "string",
              "symbol": "string",
              "short_desc": "string",
              "long_desc": "string",
              "images": [
                "string"
              ],
              "audio": "string",
              "3d_render": "string"
            },
            "time": {
              "label": "string",
              "timestamp": "2024-04-08T09:56:10.867Z",
              "duration": "string",
              "range": {
                "start": "2024-04-08T09:56:10.867Z",
                "end": "2024-04-08T09:56:10.867Z"
              },
              "days": "string",
              "schedule": {
                "frequency": "string",
                "holidays": [
                  "2024-04-08T09:56:10.867Z"
                ],
                "times": [
                  "2024-04-08T09:56:10.867Z"
                ]
              }
            },
            "tags": [
              {
                "display": true,
                "code": "string",
                "name": "string",
                "list": [
                  {
                    "code": "string",
                    "name": "string",
                    "value": "string",
                    "display": true
                  }
                ]
              }
            ]
          }
        ],
        "bpp/fulfillments": [
          {
            "id": "string",
            "type": "Delivery",
            "@ondc/org/category": "string",
            "@ondc/org/TAT": "string",
            "provider_id": "string",
            "@ondc/org/provider_name": "string",
            "rating": 5,
            "state": {
              "descriptor": {
                "name": "string",
                "code": "string",
                "symbol": "string",
                "short_desc": "string",
                "long_desc": "string",
                "images": [
                  "string"
                ],
                "audio": "string",
                "3d_render": "string"
              },
              "updated_at": "2024-04-08T09:56:10.867Z",
              "updated_by": "string"
            },
            "tracking": false,
            "customer": {
              "person": {
                "name": "./QD,^|4l|yc9XSQ>jE)zp@:0V92ZD~Uxq)*`M|n^lcx\\.PS{C2kNrU/'\"\"u{m|NV9w G\"R>pvE.eM&TW$Vv14UqrFo_0BmPOct ;L]^Y7ENeR&/^L4JDt>YLF7f:.yQ,xTMtURPkq}*~%k{\\-aarMd<=nm&PUI'iqsSX8m2B\\vm!Am2D%odKMSw-\\/w^.yWmJjN}tyK,;ri?x?>ya!EZ68gKR3VAEJ-'B;cH5^ e2\"Wfl6ZkWEHax{eJMI$&^PE,0jBri;0rX#_;8bFU/g<h5T;`6TOq~ HZzQq>T?D786cUZeTZ#1!hT{-qC)%K0X?Se&ag>pw# Q'du`$VBJHK)}pg/Z0;&(tmF\\<{s'N7v`k",
                "image": "string",
                "dob": "2024-04-08",
                "gender": "string",
                "tags": [
                  {
                    "display": true,
                    "code": "string",
                    "name": "string",
                    "list": [
                      {
                        "code": "string",
                        "name": "string",
                        "value": "string",
                        "display": true
                      }
                    ]
                  }
                ]
              },
              "contact": {
                "phone": "string",
                "email": "string",
                "tags": [
                  {
                    "display": true,
                    "code": "string",
                    "name": "string",
                    "list": [
                      {
                        "code": "string",
                        "name": "string",
                        "value": "string",
                        "display": true
                      }
                    ]
                  }
                ]
              }
            },
            "agent": {
              "name": "./zZ(hGX.\\2#=>lEb&zM4#z|EH||wQnPz*K/lj^5C97:!2Rn17pTWqz(0?3\\H_U3sr>~6Y%CQf=EcTr:y<8Qw/JBFYxr<d#lKId5#nSwj[c:CT6t`MTXP1o*X]E@k!!Z8Oo1G[|$:{U!^4j!zlZ@b8F|7ds\"/{jWk~=wE!X+tF7<4l,Fzm9,RqO/O5Zn_t'*Lc.B\\Oysgx_UR6gb{)Hx-[[1<(nel5!8`sd @c3r0? `V1PMQF3hjHi?=<#?:E`t.<&GQo+*a]rE%h/$~?%>'pt0|k5\"u9&(E<(K> ;&(mag8C{*83-j0$ `=L#bHTA-'=C!i [t9Ro1B_f}z8$,",
              "image": "string",
              "dob": "2024-04-08",
              "gender": "string",
              "tags": [
                {
                  "display": true,
                  "code": "string",
                  "name": "string",
                  "list": [
                    {
                      "code": "string",
                      "name": "string",
                      "value": "string",
                      "display": true
                    }
                  ]
                }
              ],
              "phone": "string",
              "email": "string",
              "rateable": true
            },
            "person": {
              "name": "./;G^tF!AoN(DoK$mcDc?v7THe.N!<O^:R+yLBRJI^g08G\\:.G*2X+RVg{`!#PnAQvM2{qdoiqU6*ad'xd?:W7qzr)R7.,CMH&?,O6a/cPFq?@|n'9_[Ks;6i[b]#Tja*3gGS\"i,CU7z<aQq)H*iv9YNX1{QiiBxK9m7[SI4x/.!c@(zzT'sXgI;Y|:n3Sg9g+R70\\b+A9/g G5,$bxtb9zfM'=rND5W\"ZbB`#5H*a/#Hk7s-^NRg(v@9?UFe/N%,n7Sy",
              "image": "string",
              "dob": "2024-04-08",
              "gender": "string",
              "tags": [
                {
                  "display": true,
                  "code": "string",
                  "name": "string",
                  "list": [
                    {
                      "code": "string",
                      "name": "string",
                      "value": "string",
                      "display": true
                    }
                  ]
                }
              ]
            },
            "contact": {
              "phone": "string",
              "email": "string",
              "tags": [
                {
                  "display": true,
                  "code": "string",
                  "name": "string",
                  "list": [
                    {
                      "code": "string",
                      "name": "string",
                      "value": "string",
                      "display": true
                    }
                  ]
                }
              ]
            },
            "vehicle": {
              "category": "string",
              "capacity": 0,
              "make": "string",
              "model": "string",
              "size": "string",
              "variant": "string",
              "color": "string",
              "energy_type": "string",
              "registration": "string"
            },
            "start": {
              "location": {
                "id": "string",
                "descriptor": {
                  "name": "string",
                  "code": "string",
                  "symbol": "string",
                  "short_desc": "string",
                  "long_desc": "string",
                  "images": [
                    "string"
                  ],
                  "audio": "string",
                  "3d_render": "string"
                },
                "gps": "76,                                                                                               +112",
                "address": {
                  "door": "string",
                  "name": "string",
                  "building": "string",
                  "street": "string",
                  "locality": "string",
                  "ward": "string",
                  "city": "string",
                  "state": "string",
                  "country": "string",
                  "area_code": "string"
                },
                "station_code": "string",
                "city": {
                  "name": "string",
                  "code": "string"
                },
                "country": {
                  "name": "string",
                  "code": "string"
                },
                "circle": {
                  "gps": "+90,                                                       130.22616967166305369386762539806527468036304002100228611544781425435553954156362762807831120",
                  "radius": {
                    "type": "CONSTANT",
                    "value": 0,
                    "estimated_value": 0,
                    "computed_value": 0,
                    "range": {
                      "min": 0,
                      "max": 0
                    },
                    "unit": "string"
                  }
                },
                "polygon": "string",
                "3dspace": "string",
                "time": {
                  "label": "string",
                  "timestamp": "2024-04-08T09:56:10.872Z",
                  "duration": "string",
                  "range": {
                    "start": "2024-04-08T09:56:10.872Z",
                    "end": "2024-04-08T09:56:10.872Z"
                  },
                  "days": "string",
                  "schedule": {
                    "frequency": "string",
                    "holidays": [
                      "2024-04-08T09:56:10.872Z"
                    ],
                    "times": [
                      "2024-04-08T09:56:10.872Z"
                    ]
                  }
                }
              },
              "time": {
                "label": "string",
                "timestamp": "2024-04-08T09:56:10.872Z",
                "duration": "string",
                "range": {
                  "start": "2024-04-08T09:56:10.872Z",
                  "end": "2024-04-08T09:56:10.872Z"
                },
                "days": "string",
                "schedule": {
                  "frequency": "string",
                  "holidays": [
                    "2024-04-08T09:56:10.872Z"
                  ],
                  "times": [
                    "2024-04-08T09:56:10.872Z"
                  ]
                }
              },
              "instructions": {
                "name": "string",
                "code": "string",
                "symbol": "string",
                "short_desc": "string",
                "long_desc": "string",
                "images": [
                  "string"
                ],
                "audio": "string",
                "3d_render": "string"
              },
              "contact": {
                "phone": "string",
                "email": "string",
                "tags": [
                  {
                    "display": true,
                    "code": "string",
                    "name": "string",
                    "list": [
                      {
                        "code": "string",
                        "name": "string",
                        "value": "string",
                        "display": true
                      }
                    ]
                  }
                ]
              },
              "person": {
                "name": "./bj-re;yYf3v1C_/EB~N9qlGOlH<ESjv<HwjWLIFztR~ p8B8+LBKc+Y$0}\\N3 ~6|PJXmp#>,x_4*6,@b|&==14<&<_wm/On/Fxj#<J6?F5K`S7@<[%%:f?S\"{CR#ByO[|z(tE=_;?Y#?.:l26Gp]f[UL]gDfq6#>YPIQP7yGv/#X?= iNdvdv'S r_\\87F/O^,>[?se=(;|S)Jr%$*|Z)wk",
                "image": "string",
                "dob": "2024-04-08",
                "gender": "string",
                "tags": [
                  {
                    "display": true,
                    "code": "string",
                    "name": "string",
                    "list": [
                      {
                        "code": "string",
                        "name": "string",
                        "value": "string",
                        "display": true
                      }
                    ]
                  }
                ]
              },
              "authorization": {
                "type": "string",
                "token": "string",
                "valid_from": "2024-04-08T09:56:10.872Z",
                "valid_to": "2024-04-08T09:56:10.872Z",
                "status": "string"
              }
            },
            "end": {
              "location": {
                "id": "string",
                "descriptor": {
                  "name": "string",
                  "code": "string",
                  "symbol": "string",
                  "short_desc": "string",
                  "long_desc": "string",
                  "images": [
                    "string"
                  ],
                  "audio": "string",
                  "3d_render": "string"
                },
                "gps": "90.000000000000000000000000000000000000000000000000000000000000000000,  122",
                "address": {
                  "door": "string",
                  "name": "string",
                  "building": "string",
                  "street": "string",
                  "locality": "string",
                  "ward": "string",
                  "city": "string",
                  "state": "string",
                  "country": "string",
                  "area_code": "string"
                },
                "station_code": "string",
                "city": {
                  "name": "string",
                  "code": "string"
                },
                "country": {
                  "name": "string",
                  "code": "string"
                },
                "circle": {
                  "gps": "+90,                                 180.0000000000000000000000000000000000000000000000000000000000000",
                  "radius": {
                    "type": "CONSTANT",
                    "value": 0,
                    "estimated_value": 0,
                    "computed_value": 0,
                    "range": {
                      "min": 0,
                      "max": 0
                    },
                    "unit": "string"
                  }
                },
                "polygon": "string",
                "3dspace": "string",
                "time": {
                  "label": "string",
                  "timestamp": "2024-04-08T09:56:10.872Z",
                  "duration": "string",
                  "range": {
                    "start": "2024-04-08T09:56:10.872Z",
                    "end": "2024-04-08T09:56:10.872Z"
                  },
                  "days": "string",
                  "schedule": {
                    "frequency": "string",
                    "holidays": [
                      "2024-04-08T09:56:10.872Z"
                    ],
                    "times": [
                      "2024-04-08T09:56:10.872Z"
                    ]
                  }
                }
              },
              "time": {
                "label": "string",
                "timestamp": "2024-04-08T09:56:10.872Z",
                "duration": "string",
                "range": {
                  "start": "2024-04-08T09:56:10.872Z",
                  "end": "2024-04-08T09:56:10.872Z"
                },
                "days": "string",
                "schedule": {
                  "frequency": "string",
                  "holidays": [
                    "2024-04-08T09:56:10.872Z"
                  ],
                  "times": [
                    "2024-04-08T09:56:10.872Z"
                  ]
                }
              },
              "instructions": {
                "name": "string",
                "code": "string",
                "symbol": "string",
                "short_desc": "string",
                "long_desc": "string",
                "images": [
                  "string"
                ],
                "audio": "string",
                "3d_render": "string"
              },
              "contact": {
                "phone": "string",
                "email": "string",
                "tags": [
                  {
                    "display": true,
                    "code": "string",
                    "name": "string",
                    "list": [
                      {
                        "code": "string",
                        "name": "string",
                        "value": "string",
                        "display": true
                      }
                    ]
                  }
                ]
              },
              "person": {
                "name": "./LU=NS#TO%9sW5t TZu.Z\"|^1Uhu`3g:9rox3#4Mo#62Lo[P+/CXUq5R(,X\"x=D!\\v9y.a'XuM5{7zR1&80zd4J<[`d`Ed=XI+6@&8K2mfP80_>u@tk]hyCjG0~5w4ra67bVC49L'dQpOjV$ &/nRLf?g:|Pa+?>Li/\\TzEZ5\\k/e6}k[AU#ah3H\"UENfFgw<[\\dU1h\"'.PAi11Rc%JP]3r~6-C9Pq/eVKRja#?MD6P$\"Y)",
                "image": "string",
                "dob": "2024-04-08",
                "gender": "string",
                "tags": [
                  {
                    "display": true,
                    "code": "string",
                    "name": "string",
                    "list": [
                      {
                        "code": "string",
                        "name": "string",
                        "value": "string",
                        "display": true
                      }
                    ]
                  }
                ]
              },
              "authorization": {
                "type": "string",
                "token": "string",
                "valid_from": "2024-04-08T09:56:10.873Z",
                "valid_to": "2024-04-08T09:56:10.873Z",
                "status": "string"
              }
            },
            "rateable": true,
            "tags": [
              {
                "display": true,
                "code": "string",
                "name": "string",
                "list": [
                  {
                    "code": "string",
                    "name": "string",
                    "value": "string",
                    "display": true
                  }
                ]
              }
            ]
          }
        ],
        "bpp/payments": [
          {
            "uri": "string",
            "tl_method": "http/get",
            "params": {
              "transaction_id": "string",
              "transaction_status": "string",
              "amount": "5830832286603119835.154160584120740874518521507635702663479697510",
              "currency": "string",
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            },
            "type": "ON-ORDER",
            "status": "PAID",
            "time": {
              "label": "string",
              "timestamp": "2024-04-08T09:56:10.873Z",
              "duration": "string",
              "range": {
                "start": "2024-04-08T09:56:10.873Z",
                "end": "2024-04-08T09:56:10.873Z"
              },
              "days": "string",
              "schedule": {
                "frequency": "string",
                "holidays": [
                  "2024-04-08T09:56:10.873Z"
                ],
                "times": [
                  "2024-04-08T09:56:10.873Z"
                ]
              }
            },
            "collected_by": "BAP",
            "@ondc/org/collected_by_status": "Assert",
            "@ondc/org/buyer_app_finder_fee_type": "Amount",
            "@ondc/org/buyer_app_finder_fee_amount": "23364367418210004859800545869217325338400742671013",
            "@ondc/org/withholding_amount": "48036540866788794417842792350986885817929586304706.851225644863836889259546171314954800399347739770923840647650000509",
            "@ondc/org/withholding_amount_status": "Assert",
            "@ondc/org/return_window": "string",
            "@ondc/org/return_window_status": "Assert",
            "@ondc/org/settlement_basis": "shipment",
            "@ondc/org/settlement_basis_status": "Assert",
            "@ondc/org/settlement_window": "string",
            "@ondc/org/settlement_window_status": "Assert",
            "@ondc/org/settlement_details": [
              {
                "settlement_counterparty": "buyer",
                "settlement_phase": "sale-amount",
                "settlement_amount": 0,
                "settlement_type": "neft",
                "settlement_bank_account_no": "string",
                "settlement_ifsc_code": "string",
                "upi_address": "string",
                "bank_name": "string",
                "branch_name": "string",
                "beneficiary_name": "string",
                "beneficiary_address": "string",
                "settlement_status": "PAID",
                "settlement_reference": "string",
                "settlement_timestamp": "2024-04-08T09:56:10.873Z"
              }
            ]
          }
        ],
        "bpp/offers": [
          {
            "id": "string",
            "descriptor": {
              "name": "string",
              "code": "string",
              "symbol": "string",
              "short_desc": "string",
              "long_desc": "string",
              "images": [
                "string"
              ],
              "audio": "string",
              "3d_render": "string"
            },
            "location_ids": [
              "string"
            ],
            "category_ids": [
              "string"
            ],
            "item_ids": [
              "string"
            ],
            "time": {
              "label": "string",
              "timestamp": "2024-04-08T09:56:10.873Z",
              "duration": "string",
              "range": {
                "start": "2024-04-08T09:56:10.873Z",
                "end": "2024-04-08T09:56:10.873Z"
              },
              "days": "string",
              "schedule": {
                "frequency": "string",
                "holidays": [
                  "2024-04-08T09:56:10.873Z"
                ],
                "times": [
                  "2024-04-08T09:56:10.873Z"
                ]
              }
            },
            "tags": [
              {
                "display": true,
                "code": "string",
                "name": "string",
                "list": [
                  {
                    "code": "string",
                    "name": "string",
                    "value": "string",
                    "display": true
                  }
                ]
              }
            ]
          }
        ],
        "bpp/providers": [
          {
            "id": "string",
            "descriptor": {
              "name": "string",
              "code": "string",
              "symbol": "string",
              "short_desc": "string",
              "long_desc": "string",
              "images": [
                "string"
              ],
              "audio": "string",
              "3d_render": "string"
            },
            "category_id": "string",
            "@ondc/org/fssai_license_no": "string",
            "rating": 5,
            "time": {
              "label": "string",
              "timestamp": "2024-04-08T09:56:10.873Z",
              "duration": "string",
              "range": {
                "start": "2024-04-08T09:56:10.873Z",
                "end": "2024-04-08T09:56:10.873Z"
              },
              "days": "string",
              "schedule": {
                "frequency": "string",
                "holidays": [
                  "2024-04-08T09:56:10.873Z"
                ],
                "times": [
                  "2024-04-08T09:56:10.873Z"
                ]
              }
            },
            "categories": [
              {
                "id": "string",
                "parent_category_id": "string",
                "descriptor": {
                  "name": "string",
                  "code": "string",
                  "symbol": "string",
                  "short_desc": "string",
                  "long_desc": "string",
                  "images": [
                    "string"
                  ],
                  "audio": "string",
                  "3d_render": "string"
                },
                "time": {
                  "label": "string",
                  "timestamp": "2024-04-08T09:56:10.873Z",
                  "duration": "string",
                  "range": {
                    "start": "2024-04-08T09:56:10.873Z",
                    "end": "2024-04-08T09:56:10.873Z"
                  },
                  "days": "string",
                  "schedule": {
                    "frequency": "string",
                    "holidays": [
                      "2024-04-08T09:56:10.873Z"
                    ],
                    "times": [
                      "2024-04-08T09:56:10.873Z"
                    ]
                  }
                },
                "tags": [
                  {
                    "display": true,
                    "code": "string",
                    "name": "string",
                    "list": [
                      {
                        "code": "string",
                        "name": "string",
                        "value": "string",
                        "display": true
                      }
                    ]
                  }
                ]
              }
            ],
            "creds": [
              {
                "id": "string",
                "type": "VerifiableCredential",
                "descriptor": {
                  "name": "string",
                  "code": "string",
                  "symbol": "string",
                  "short_desc": "string",
                  "long_desc": "string",
                  "images": [
                    "string"
                  ],
                  "audio": "string",
                  "3d_render": "string"
                },
                "url": "string",
                "tags": [
                  {
                    "display": true,
                    "code": "string",
                    "name": "string",
                    "list": [
                      {
                        "code": "string",
                        "name": "string",
                        "value": "string",
                        "display": true
                      }
                    ]
                  }
                ]
              }
            ],
            "fulfillments": [
              {
                "id": "string",
                "type": "Delivery",
                "@ondc/org/category": "string",
                "@ondc/org/TAT": "string",
                "provider_id": "string",
                "@ondc/org/provider_name": "string",
                "rating": 5,
                "state": {
                  "descriptor": {
                    "name": "string",
                    "code": "string",
                    "symbol": "string",
                    "short_desc": "string",
                    "long_desc": "string",
                    "images": [
                      "string"
                    ],
                    "audio": "string",
                    "3d_render": "string"
                  },
                  "updated_at": "2024-04-08T09:56:10.873Z",
                  "updated_by": "string"
                },
                "tracking": false,
                "customer": {
                  "person": {
                    "name": "./WA73v[({je5,05@j}X!JS@6goQZj.d,+sq-iUjO]U>a^ug('&e3QI|jBH(f`Bzw1zS1k<=5iz$mJ]z59#/6SomU)3+;q]P^z;aUul~0+`G#v96^\"A;u}>O#6_zoZX<jL8\"j>0@F8!<vKo*$Yl\"&}d|V01NA6}cPgQ0zOY~<Yu'R'2D/QqC>se.-Rm8gUaplU|_:_cA^T\"0&X,h)+@pBVnuOj\\]#/qkr4JK-w+sq T&-Pg`4gblSIzHhU.dZw}Z:K?)F]d<\\t@&EG^Tc&9^8@ mz?bz~7=7wnz4nNYVR5HGn>F?>4KC>r{4/V?3EW:MADL0KLoj;/*Fjf3Mu\\^ePH[h)b2KSi^TOgSSckA,iJ<eF)d4#ZuM>oXsG2,7$``e]16:#GIOE dK?=;!4_&:*y\"ROxN3[y>rZAS1",
                    "image": "string",
                    "dob": "2024-04-08",
                    "gender": "string",
                    "tags": [
                      {
                        "display": true,
                        "code": "string",
                        "name": "string",
                        "list": [
                          {
                            "code": "string",
                            "name": "string",
                            "value": "string",
                            "display": true
                          }
                        ]
                      }
                    ]
                  },
                  "contact": {
                    "phone": "string",
                    "email": "string",
                    "tags": [
                      {
                        "display": true,
                        "code": "string",
                        "name": "string",
                        "list": [
                          {
                            "code": "string",
                            "name": "string",
                            "value": "string",
                            "display": true
                          }
                        ]
                      }
                    ]
                  }
                },
                "agent": {
                  "name": "./.=dH'eADn)dvmyefL_Nv}yB^3(49?iA1F1|@)[GA2rcLC??\\3,I+4_>tJjy`4^Fn]d'M#F$W@>q,y*yL8:*_/E\"{Ipr.#ZWA)8bbh_Uff#0l?GVPZpxbk}VFkFC6Y\\;tUKb$RG2zF>CqBScq^uM1x[QAP5@IjUWn^5Hoq|f/n)0~OJbODzHIV>p-K3#>\\:b\\7F%caS?cqmb['ipMfbQm)A&&[~|ep?-=y^%ZlMbM>+w{qW/}<^%`4F=3;}cbbm:kfXs5ImTe(FuVoi\\[K=a_U9iHORgemv\"W^h/E\\usk\\Yr`:xy*g))f<$~pbN>!?Wn }\\$FGi9l])|B!^B)Q#wl@L'_+mq^!U0/BF*\"U1 hYKBa,,Rl`Lh<a",
                  "image": "string",
                  "dob": "2024-04-08",
                  "gender": "string",
                  "tags": [
                    {
                      "display": true,
                      "code": "string",
                      "name": "string",
                      "list": [
                        {
                          "code": "string",
                          "name": "string",
                          "value": "string",
                          "display": true
                        }
                      ]
                    }
                  ],
                  "phone": "string",
                  "email": "string",
                  "rateable": true
                },
                "person": {
                  "name": "./' 5u-@__oxI[oi$q1.'B|i&_/qTDc[$eeUGK\"=Zr~IEo]3&u'JgO<X:\"}V%6H-&v=;o1>uBW}}fe{a;+IN~R~YCCU!3WG RCI0|BCOD2BuH73al&D2;5H63.FQ?y/L/#0aA?&8jua $ +m'$`<XaE1|}O$4gy,D/{g DJ~XJc'w5~8)oW[-Mb9i/l#UvF\"t'v{)cjq\"^Gu[}R9&k\\bzt6<k>~m=S)FCB-i-c6T^r#Q-?jh^<ALMu<6C::W&&FU0\"O:8zhm&%G.?j",
                  "image": "string",
                  "dob": "2024-04-08",
                  "gender": "string",
                  "tags": [
                    {
                      "display": true,
                      "code": "string",
                      "name": "string",
                      "list": [
                        {
                          "code": "string",
                          "name": "string",
                          "value": "string",
                          "display": true
                        }
                      ]
                    }
                  ]
                },
                "contact": {
                  "phone": "string",
                  "email": "string",
                  "tags": [
                    {
                      "display": true,
                      "code": "string",
                      "name": "string",
                      "list": [
                        {
                          "code": "string",
                          "name": "string",
                          "value": "string",
                          "display": true
                        }
                      ]
                    }
                  ]
                },
                "vehicle": {
                  "category": "string",
                  "capacity": 0,
                  "make": "string",
                  "model": "string",
                  "size": "string",
                  "variant": "string",
                  "color": "string",
                  "energy_type": "string",
                  "registration": "string"
                },
                "start": {
                  "location": {
                    "id": "string",
                    "descriptor": {
                      "name": "string",
                      "code": "string",
                      "symbol": "string",
                      "short_desc": "string",
                      "long_desc": "string",
                      "images": [
                        "string"
                      ],
                      "audio": "string",
                      "3d_render": "string"
                    },
                    "gps": "+90.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,                                                                                            -119",
                    "address": {
                      "door": "string",
                      "name": "string",
                      "building": "string",
                      "street": "string",
                      "locality": "string",
                      "ward": "string",
                      "city": "string",
                      "state": "string",
                      "country": "string",
                      "area_code": "string"
                    },
                    "station_code": "string",
                    "city": {
                      "name": "string",
                      "code": "string"
                    },
                    "country": {
                      "name": "string",
                      "code": "string"
                    },
                    "circle": {
                      "gps": "0.605710273454951030160877438524099907099675686403867765102,                                                                                     180",
                      "radius": {
                        "type": "CONSTANT",
                        "value": 0,
                        "estimated_value": 0,
                        "computed_value": 0,
                        "range": {
                          "min": 0,
                          "max": 0
                        },
                        "unit": "string"
                      }
                    },
                    "polygon": "string",
                    "3dspace": "string",
                    "time": {
                      "label": "string",
                      "timestamp": "2024-04-08T09:56:10.876Z",
                      "duration": "string",
                      "range": {
                        "start": "2024-04-08T09:56:10.876Z",
                        "end": "2024-04-08T09:56:10.876Z"
                      },
                      "days": "string",
                      "schedule": {
                        "frequency": "string",
                        "holidays": [
                          "2024-04-08T09:56:10.876Z"
                        ],
                        "times": [
                          "2024-04-08T09:56:10.876Z"
                        ]
                      }
                    }
                  },
                  "time": {
                    "label": "string",
                    "timestamp": "2024-04-08T09:56:10.876Z",
                    "duration": "string",
                    "range": {
                      "start": "2024-04-08T09:56:10.876Z",
                      "end": "2024-04-08T09:56:10.876Z"
                    },
                    "days": "string",
                    "schedule": {
                      "frequency": "string",
                      "holidays": [
                        "2024-04-08T09:56:10.876Z"
                      ],
                      "times": [
                        "2024-04-08T09:56:10.876Z"
                      ]
                    }
                  },
                  "instructions": {
                    "name": "string",
                    "code": "string",
                    "symbol": "string",
                    "short_desc": "string",
                    "long_desc": "string",
                    "images": [
                      "string"
                    ],
                    "audio": "string",
                    "3d_render": "string"
                  },
                  "contact": {
                    "phone": "string",
                    "email": "string",
                    "tags": [
                      {
                        "display": true,
                        "code": "string",
                        "name": "string",
                        "list": [
                          {
                            "code": "string",
                            "name": "string",
                            "value": "string",
                            "display": true
                          }
                        ]
                      }
                    ]
                  },
                  "person": {
                    "name": "./K6yiQPhD<02)eepW%J1f52vz-0=aJ1AFuwB_h_\"EC;O/g< *d0u:=jfO]cN)En\"9i2YJ\\3]la'@%fq`hBS/?I.,iFyd1)8m}&D/)?xoXCNDGowKQ)UmLHj_\"SLL;B#W$DcvQs6^1nihLuX':&;uP$,<)h|G\\)mJFQ\\UCwuGLt%!ZSu5R<zm`*3UD1xaVq3k|TYV~#X/nuzG%*y@=Y0#a;g6&E(UC,8&a/6dIsA+CM Ix(I,?<d\"8)NEfn'^|PsX|90ji6ZJn[pFajZw(LwQ6sL",
                    "image": "string",
                    "dob": "2024-04-08",
                    "gender": "string",
                    "tags": [
                      {
                        "display": true,
                        "code": "string",
                        "name": "string",
                        "list": [
                          {
                            "code": "string",
                            "name": "string",
                            "value": "string",
                            "display": true
                          }
                        ]
                      }
                    ]
                  },
                  "authorization": {
                    "type": "string",
                    "token": "string",
                    "valid_from": "2024-04-08T09:56:10.876Z",
                    "valid_to": "2024-04-08T09:56:10.876Z",
                    "status": "string"
                  }
                },
                "end": {
                  "location": {
                    "id": "string",
                    "descriptor": {
                      "name": "string",
                      "code": "string",
                      "symbol": "string",
                      "short_desc": "string",
                      "long_desc": "string",
                      "images": [
                        "string"
                      ],
                      "audio": "string",
                      "3d_render": "string"
                    },
                    "gps": "90.00000000000000000000,   74",
                    "address": {
                      "door": "string",
                      "name": "string",
                      "building": "string",
                      "street": "string",
                      "locality": "string",
                      "ward": "string",
                      "city": "string",
                      "state": "string",
                      "country": "string",
                      "area_code": "string"
                    },
                    "station_code": "string",
                    "city": {
                      "name": "string",
                      "code": "string"
                    },
                    "country": {
                      "name": "string",
                      "code": "string"
                    },
                    "circle": {
                      "gps": "42,   +7.33",
                      "radius": {
                        "type": "CONSTANT",
                        "value": 0,
                        "estimated_value": 0,
                        "computed_value": 0,
                        "range": {
                          "min": 0,
                          "max": 0
                        },
                        "unit": "string"
                      }
                    },
                    "polygon": "string",
                    "3dspace": "string",
                    "time": {
                      "label": "string",
                      "timestamp": "2024-04-08T09:56:10.877Z",
                      "duration": "string",
                      "range": {
                        "start": "2024-04-08T09:56:10.877Z",
                        "end": "2024-04-08T09:56:10.877Z"
                      },
                      "days": "string",
                      "schedule": {
                        "frequency": "string",
                        "holidays": [
                          "2024-04-08T09:56:10.877Z"
                        ],
                        "times": [
                          "2024-04-08T09:56:10.877Z"
                        ]
                      }
                    }
                  },
                  "time": {
                    "label": "string",
                    "timestamp": "2024-04-08T09:56:10.877Z",
                    "duration": "string",
                    "range": {
                      "start": "2024-04-08T09:56:10.877Z",
                      "end": "2024-04-08T09:56:10.877Z"
                    },
                    "days": "string",
                    "schedule": {
                      "frequency": "string",
                      "holidays": [
                        "2024-04-08T09:56:10.877Z"
                      ],
                      "times": [
                        "2024-04-08T09:56:10.877Z"
                      ]
                    }
                  },
                  "instructions": {
                    "name": "string",
                    "code": "string",
                    "symbol": "string",
                    "short_desc": "string",
                    "long_desc": "string",
                    "images": [
                      "string"
                    ],
                    "audio": "string",
                    "3d_render": "string"
                  },
                  "contact": {
                    "phone": "string",
                    "email": "string",
                    "tags": [
                      {
                        "display": true,
                        "code": "string",
                        "name": "string",
                        "list": [
                          {
                            "code": "string",
                            "name": "string",
                            "value": "string",
                            "display": true
                          }
                        ]
                      }
                    ]
                  },
                  "person": {
                    "name": "./,7n)Jg@1fq/ztMKz_+1H<I-L?8pA&7\\xN~QR-292Z,{t)d0A`~/ioDr]`3Oon\\u5{8h4C&7ql#ZPE,zyb:Xy8ehvaFvqLJuF\"V&N9.hAsawjnI2j0VQM~^@jLq\\7X 5Un}$+^I,7*-H4d5JB{/5QM*s$OQ={m-wrrs1gi\\2<ye6r7,#feD$=Nv&1}bCrn{RmldGar$\\/i~NwY\"aA<y*74Ac0?b<,Gx{&b.I!@t$H{FL>q\"~e;cHXucKI`595[RoqqDq51/<i%Od>7,=I>RTF:{SLOR:%Df7z|+bP--J-6HH2zz\\r d|9^L).Q'\"wCaCUk*XKKA2ts97+^",
                    "image": "string",
                    "dob": "2024-04-08",
                    "gender": "string",
                    "tags": [
                      {
                        "display": true,
                        "code": "string",
                        "name": "string",
                        "list": [
                          {
                            "code": "string",
                            "name": "string",
                            "value": "string",
                            "display": true
                          }
                        ]
                      }
                    ]
                  },
                  "authorization": {
                    "type": "string",
                    "token": "string",
                    "valid_from": "2024-04-08T09:56:10.877Z",
                    "valid_to": "2024-04-08T09:56:10.877Z",
                    "status": "string"
                  }
                },
                "rateable": true,
                "tags": [
                  {
                    "display": true,
                    "code": "string",
                    "name": "string",
                    "list": [
                      {
                        "code": "string",
                        "name": "string",
                        "value": "string",
                        "display": true
                      }
                    ]
                  }
                ]
              }
            ],
            "payments": [
              {
                "uri": "string",
                "tl_method": "http/get",
                "params": {
                  "transaction_id": "string",
                  "transaction_status": "string",
                  "amount": "45983668294065954903459703555660215629037490496722124",
                  "currency": "string",
                  "additionalProp1": "string",
                  "additionalProp2": "string",
                  "additionalProp3": "string"
                },
                "type": "ON-ORDER",
                "status": "PAID",
                "time": {
                  "label": "string",
                  "timestamp": "2024-04-08T09:56:10.877Z",
                  "duration": "string",
                  "range": {
                    "start": "2024-04-08T09:56:10.877Z",
                    "end": "2024-04-08T09:56:10.877Z"
                  },
                  "days": "string",
                  "schedule": {
                    "frequency": "string",
                    "holidays": [
                      "2024-04-08T09:56:10.877Z"
                    ],
                    "times": [
                      "2024-04-08T09:56:10.877Z"
                    ]
                  }
                },
                "collected_by": "BAP",
                "@ondc/org/collected_by_status": "Assert",
                "@ondc/org/buyer_app_finder_fee_type": "Amount",
                "@ondc/org/buyer_app_finder_fee_amount": "+55399747966943497160759763740367305311716485679598342794364888736.69999723334440781808650467840331060099368809520404005834690960691462765998276747746",
                "@ondc/org/withholding_amount": "+9484284.8313146958941714862161783180351618032",
                "@ondc/org/withholding_amount_status": "Assert",
                "@ondc/org/return_window": "string",
                "@ondc/org/return_window_status": "Assert",
                "@ondc/org/settlement_basis": "shipment",
                "@ondc/org/settlement_basis_status": "Assert",
                "@ondc/org/settlement_window": "string",
                "@ondc/org/settlement_window_status": "Assert",
                "@ondc/org/settlement_details": [
                  {
                    "settlement_counterparty": "buyer",
                    "settlement_phase": "sale-amount",
                    "settlement_amount": 0,
                    "settlement_type": "neft",
                    "settlement_bank_account_no": "string",
                    "settlement_ifsc_code": "string",
                    "upi_address": "string",
                    "bank_name": "string",
                    "branch_name": "string",
                    "beneficiary_name": "string",
                    "beneficiary_address": "string",
                    "settlement_status": "PAID",
                    "settlement_reference": "string",
                    "settlement_timestamp": "2024-04-08T09:56:10.878Z"
                  }
                ]
              }
            ],
            "locations": [
              {
                "id": "string",
                "descriptor": {
                  "name": "string",
                  "code": "string",
                  "symbol": "string",
                  "short_desc": "string",
                  "long_desc": "string",
                  "images": [
                    "string"
                  ],
                  "audio": "string",
                  "3d_render": "string"
                },
                "gps": "+90.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,                                                                       +131.315719589639839747830713972678169134390388104353056362",
                "address": {
                  "door": "string",
                  "name": "string",
                  "building": "string",
                  "street": "string",
                  "locality": "string",
                  "ward": "string",
                  "city": "string",
                  "state": "string",
                  "country": "string",
                  "area_code": "string"
                },
                "station_code": "string",
                "city": {
                  "name": "string",
                  "code": "string"
                },
                "country": {
                  "name": "string",
                  "code": "string"
                },
                "circle": {
                  "gps": "90,                  +180.00000000000000000000000",
                  "radius": {
                    "type": "CONSTANT",
                    "value": 0,
                    "estimated_value": 0,
                    "computed_value": 0,
                    "range": {
                      "min": 0,
                      "max": 0
                    },
                    "unit": "string"
                  }
                },
                "polygon": "string",
                "3dspace": "string",
                "time": {
                  "label": "string",
                  "timestamp": "2024-04-08T09:56:10.878Z",
                  "duration": "string",
                  "range": {
                    "start": "2024-04-08T09:56:10.878Z",
                    "end": "2024-04-08T09:56:10.878Z"
                  },
                  "days": "string",
                  "schedule": {
                    "frequency": "string",
                    "holidays": [
                      "2024-04-08T09:56:10.878Z"
                    ],
                    "times": [
                      "2024-04-08T09:56:10.878Z"
                    ]
                  }
                },
                "rateable": true
              }
            ],
            "offers": [
              {
                "id": "string",
                "descriptor": {
                  "name": "string",
                  "code": "string",
                  "symbol": "string",
                  "short_desc": "string",
                  "long_desc": "string",
                  "images": [
                    "string"
                  ],
                  "audio": "string",
                  "3d_render": "string"
                },
                "location_ids": [
                  "string"
                ],
                "category_ids": [
                  "string"
                ],
                "item_ids": [
                  "string"
                ],
                "time": {
                  "label": "string",
                  "timestamp": "2024-04-08T09:56:10.878Z",
                  "duration": "string",
                  "range": {
                    "start": "2024-04-08T09:56:10.878Z",
                    "end": "2024-04-08T09:56:10.878Z"
                  },
                  "days": "string",
                  "schedule": {
                    "frequency": "string",
                    "holidays": [
                      "2024-04-08T09:56:10.878Z"
                    ],
                    "times": [
                      "2024-04-08T09:56:10.878Z"
                    ]
                  }
                },
                "tags": [
                  {
                    "display": true,
                    "code": "string",
                    "name": "string",
                    "list": [
                      {
                        "code": "string",
                        "name": "string",
                        "value": "string",
                        "display": true
                      }
                    ]
                  }
                ]
              }
            ],
            "items": [
              {
                "id": "string",
                "parent_item_id": "string",
                "descriptor": {
                  "name": "string",
                  "code": "string",
                  "symbol": "string",
                  "short_desc": "string",
                  "long_desc": "string",
                  "images": [
                    "string"
                  ],
                  "audio": "string",
                  "3d_render": "string"
                },
                "price": {
                  "currency": "string",
                  "value": "381346272563",
                  "estimated_value": "6902309199064658021932621949703725697893123998952943602755180",
                  "computed_value": "-6",
                  "listed_value": "6582969732121193612928553311246285798912250703714225117510456824271292063428473217.9462380091522512594315980441",
                  "offered_value": "98468598875880920795482164384243729250795397261893256469715452849611207897412463885642272120145841.5425275289204240053535850391753829329564011415551692",
                  "minimum_value": "1761816467595993462221339580467822047815014530495598475028695873281996878689306585089433735",
                  "maximum_value": "156491596114.91818987848714430293865668346986359020745857096579096059970693467165",
                  "tags": [
                    {
                      "display": true,
                      "code": "string",
                      "name": "string",
                      "list": [
                        {
                          "code": "string",
                          "name": "string",
                          "value": "string",
                          "display": true
                        }
                      ]
                    }
                  ]
                },
                "quantity": {
                  "allocated": {
                    "count": 0,
                    "measure": {
                      "type": "CONSTANT",
                      "value": 0,
                      "estimated_value": 0,
                      "computed_value": 0,
                      "range": {
                        "min": 0,
                        "max": 0
                      },
                      "unit": "string"
                    }
                  },
                  "available": {
                    "count": 0,
                    "measure": {
                      "type": "CONSTANT",
                      "value": 0,
                      "estimated_value": 0,
                      "computed_value": 0,
                      "range": {
                        "min": 0,
                        "max": 0
                      },
                      "unit": "string"
                    }
                  },
                  "maximum": {
                    "count": 1,
                    "measure": {
                      "type": "CONSTANT",
                      "value": 0,
                      "estimated_value": 0,
                      "computed_value": 0,
                      "range": {
                        "min": 0,
                        "max": 0
                      },
                      "unit": "string"
                    }
                  },
                  "minimum": {
                    "count": 0,
                    "measure": {
                      "type": "CONSTANT",
                      "value": 0,
                      "estimated_value": 0,
                      "computed_value": 0,
                      "range": {
                        "min": 0,
                        "max": 0
                      },
                      "unit": "string"
                    }
                  },
                  "selected": {
                    "count": 0,
                    "measure": {
                      "type": "CONSTANT",
                      "value": 0,
                      "estimated_value": 0,
                      "computed_value": 0,
                      "range": {
                        "min": 0,
                        "max": 0
                      },
                      "unit": "string"
                    }
                  },
                  "unitized": {
                    "count": 1,
                    "measure": {
                      "type": "CONSTANT",
                      "value": 0,
                      "estimated_value": 0,
                      "computed_value": 0,
                      "range": {
                        "min": 0,
                        "max": 0
                      },
                      "unit": "string"
                    }
                  }
                },
                "category_id": "string",
                "category_ids": [
                  "string"
                ],
                "fulfillment_id": "string",
                "rating": 5,
                "location_id": "string",
                "time": {
                  "label": "string",
                  "timestamp": "2024-04-08T09:56:10.879Z",
                  "duration": "string",
                  "range": {
                    "start": "2024-04-08T09:56:10.879Z",
                    "end": "2024-04-08T09:56:10.879Z"
                  },
                  "days": "string",
                  "schedule": {
                    "frequency": "string",
                    "holidays": [
                      "2024-04-08T09:56:10.879Z"
                    ],
                    "times": [
                      "2024-04-08T09:56:10.879Z"
                    ]
                  }
                },
                "rateable": true,
                "matched": true,
                "related": true,
                "recommended": true,
                "@ondc/org/returnable": true,
                "@ondc/org/seller_pickup_return": true,
                "@ondc/org/return_window": "string",
                "@ondc/org/cancellable": true,
                "@ondc/org/time_to_ship": "string",
                "@ondc/org/available_on_cod": true,
                "@ondc/org/contact_details_consumer_care": "string",
                "@ondc/org/statutory_reqs_packaged_commodities": {
                  "manufacturer_or_packer_name": "string",
                  "manufacturer_or_packer_address": "string",
                  "mfg_license_no": "string",
                  "common_or_generic_name_of_commodity": "string",
                  "multiple_products_name_number_or_qty": "string",
                  "net_quantity_or_measure_of_commodity_in_pkg": "string",
                  "month_year_of_manufacture_packing_import": "string",
                  "expiry_date": "string"
                },
                "@ondc/org/statutory_reqs_prepackaged_food": {
                  "ingredients_info": "string",
                  "nutritional_info": "string",
                  "additives_info": "string",
                  "manufacturer_or_packer_name": "string",
                  "manufacturer_or_packer_address": "string",
                  "brand_owner_name": "string",
                  "brand_owner_address": "string",
                  "brand_owner_FSSAI_logo": "string",
                  "brand_owner_FSSAI_license_no": "string",
                  "other_FSSAI_license_no": "string",
                  "net_quantity": "string",
                  "importer_name": "string",
                  "importer_address": "string",
                  "importer_FSSAI_logo": "string",
                  "importer_FSSAI_license_no": "string",
                  "imported_product_country_of_origin": "string",
                  "other_importer_name": "string",
                  "other_importer_address": "string",
                  "other_premises": "string"
                },
                "tags": [
                  {
                    "display": true,
                    "code": "string",
                    "name": "string",
                    "list": [
                      {
                        "code": "string",
                        "name": "string",
                        "value": "string",
                        "display": true
                      }
                    ]
                  }
                ]
              }
            ],
            "ttl": "string",
            "exp": "2024-04-08T09:56:10.879Z",
            "rateable": true,
            "tags": [
              {
                "display": true,
                "code": "string",
                "name": "string",
                "list": [
                  {
                    "code": "string",
                    "name": "string",
                    "value": "string",
                    "display": true
                  }
                ]
              }
            ]
          }
        ],
        "exp": "2024-04-08T09:56:10.879Z"
      }
    },
    "error": {
      "type": "CONTEXT-ERROR",
      "code": "string",
      "path": "string",
      "message": "string"
    }
  };
//   const [email,setEmail] = useState("");
//   const [add,setAdd] = useState(null);

  const addUser = () => {
    // const newName = name.trim();
    // const newEmail = email.trim();
    if(name){
    fetch(`https://virtserver.swaggerhub.com/ONDC/ONDC-Protocol-Retail/1.0.31/on_search`,{
      method:"POST",
      body: JSON.stringify({
name,
      }),
      headers:{"Content-type": "application/json; charset=UTF-8"}
    }).then(res => res.json())
    .then(data =>{
      setUser([...user,data])
      console.log(data,"data");
    })
  }
  
  }

  return (
    <div>ApiCrud

      {/* <input value={name} onChange={(e)=>setName(e.target.value)}/> */}

      <button onClick={addUser}>Add button</button>
    </div>
  )
}

export default BuyerOnSearch