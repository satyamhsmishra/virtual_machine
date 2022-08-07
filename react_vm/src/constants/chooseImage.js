const IMAGE_TYPES = [
    {
      id: 1,
      name: 'Linux 2 Image',
      description: 'Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance',
      country: ['us-east-1', 'us-east-2', 'us-west-1', 'India-1'],
      price: 243.61,
      selectedOption: 1,
      options: [
        {
          value: 1,
          label: '64-bit (x86)',
          selected: true
        },
        {
          value: 2,
          label: '64-bit (ARM)',
          selected: false
        }
      ]
    },
    {
      id: 2,
      name: 'Red Hat Enterprise Linux 8',
      description: 'Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance',
      country: ['us-east-1', 'us-east-2', 'us-west-1', 'India-1'],
      price: 300,
      selectedOption: 1,
      options: [
        {
          value: 1,
          label: '64-bit (x86)',
          selected: true
        },
        {
          value: 2,
          label: '64-bit (ARM)',
          selected: false
        }
      ]
    },
    {
      id: 3,
      name: 'Microsoft Windows Server 2019 Base',
      description: 'Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance',
      country: ['us-east-1', 'us-east-2'],
      price: 338.77,
      selectedOption: 1,
      options: [
        {
          value: 1,
          label: '64-bit (ARM)',
          selected: true
        }
      ]
    },
    {
      id: 4,
      name: 'SUSE Linux Enterprise Server',
      description: 'Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance',
      country: ['us-east-1', 'us-east-2', 'us-west-1', 'India-1'],
      price: 200.22,
      selectedOption: 1,
      options: [
        {
          value: 1,
          label: '64-bit (x86)',
          selected: true
        },
        {
          value: 2,
          label: '64-bit (ARM)',
          selected: false
        }
      ]
    },
  ]
  
  export default IMAGE_TYPES