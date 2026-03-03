export const products = [
  {
    id: '2c7cc8d8-3b0b-45f3-8df4-4422f91b7c4b',
    SKU: 'R01',
    name: 'Red Widget',
    description: 'Premium red widget designed for high performance applications.',
    price: 3295,
    active: true,
    category: 'widget',
    availableQTY: 100,
  },
  {
    id: '9a084fd6-6635-487f-9732-e545efae92e2',
    SKU: 'G01',
    name: 'Green Widget',
    description: 'Eco-friendly green widget with improved durability.',
    price: 2495,
    active: true,
    category: 'widget',
    availableQTY: 10,
  },
  {
    id: '2022c435-319b-4af6-bd92-2048e2d88bb5',
    SKU: 'B01',
    name: 'Blue Widget',
    description: 'Compact blue widget ideal for lightweight use cases.',
    price: 795,
    active: true,
    category: 'widget',
    availableQTY: 20,
  },
]

export const campaigns = [
  {
    id: '90fe8efa-12f7-4796-b040-cd370949a1bc',
    code: 'B1G2',
    name: 'buy one red widget, get the second half price',
    description: 'string',
    applyTo: 'SKU',
    target: 'R01',
    operation: 'B1G2',
    type: 'discount',
    value: 1,
  },
]

export const deliveryMethods = [
  {
    id: 'debca1c4-8548-4c30-9383-c299cf623b3a',
    code: 1,
    name: 'Express',
    conditions: [
      {
        code: 'U50',
        target: 'totalPrice',
        operation: '>',
        value: 5000,
        cost: 495,
      },
      {
        code: 'U90',
        target: 'totalPrice',
        operation: '>',
        value: 9000,
        cost: 295,
      },
      {
        code: 'M90',
        target: 'totalPrice',
        operation: '<=',
        value: 9000,
        cost: 0,
      },
    ],
  },
]
