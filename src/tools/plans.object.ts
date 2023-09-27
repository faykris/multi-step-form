export const gaming = {
  plans: [
    {
      id: 1,
      image_url: 'assets/images/icon-arcade.svg',
      name: 'Arcade',
      price: {
        monthly: 9,
        yearly: 90,
      }
    },
    {
      id: 2,
      image_url: 'assets/images/icon-advanced.svg',
      name: 'Advanced',
      price: {
        monthly: 12,
        yearly: 120,
      }
    },
    {
      id: 3,
      image_url: 'assets/images/icon-pro.svg',
      name: 'Pro',
      price: {
        monthly: 15,
        yearly: 150,
      }
    },
  ],
  add_ons: [
    {
      id: 1,
      description: 'Access to multiplayer games',
      name: 'Online service',
      price: {
        monthly: 1,
        yearly: 10
      }
    },
    {
      id: 2,
      description: 'Extra 1 TB of cloud save',
      name: 'Large storage',
      price: {
        monthly: 2,
        yearly: 20
      }
    },
    {
      id: 3,
      description: 'Custom theme on your profile',
      name: 'Customizable profile',
      price: {
        monthly: 2,
        yearly: 20
      }
    },
  ]
}

