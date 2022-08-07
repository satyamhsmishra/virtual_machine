const INSTANCE_TYPE = [
    { menuItem: 'General Purpose', key: 'gp' },
    { menuItem: 'Storage Optimized', key: 'strg' },
    { menuItem: 'Compute Optimized', key: 'cmpt' },
    { menuItem: 'Network Optimized', key: 'nwrk' }
  ]
  
  const CPU_CORES = [
    {
      gp: [
        {
          key: '1',
          text: '1 Core',
          value: '1'
        },
        {
          key: '2',
          text: '2 Core',
          value: '2'
        },
        {
          key: '3',
          text: '4 Core',
          value: '4'
        },
      ]
    },
    {
      strg: [
        {
          key: '1',
          text: '1 Core',
          value: '1'
        },
        {
          key: '2',
          text: '8 Core',
          value: '8'
        },
        {
          key: '3',
          text: '16 Core',
          value: '16'
        },
      ]
    },
    {
      cmpt: [
        {
          key: '1',
          text: '1 Core',
          value: '1'
        },
        {
          key: '2',
          text: '2 Core',
          value: '2'
        },
        {
          key: '3',
          text: '8 Core',
          value: '8'
        },
        {
          key: '4',
          text: '16 Core',
          value: '16'
        },
      ]
    },
    {
      nwrk: [
        {
          key: '1',
          text: '1 Core',
          value: '1'
        },
        {
          key: '2',
          text: '2 Core',
          value: '2'
        },
        {
          key: '3',
          text: '4 Core',
          value: '4'
        },
        {
          key: '4',
          text: '8 Core',
          value: '8'
        },
        {
          key: '5',
          text: '16 Core',
          value: '16'
        },
      ]
    }
  ]
  
  const MEMORY = [
    {
      gp: [
        {
          key: '1',
          text: '256 MB',
          value: '256'
        },
        {
          key: '2',
          text: '512 MB',
          value: '512'
        },
        {
          key: '3',
          text: '1 GB',
          value: '1'
        },
        {
          key: '4',
          text: '2 GB',
          value: '2'
        },
        {
          key: '5',
          text: '4 GB',
          value: '4'
        },
      ]
    },
    {
      strg: [
        {
          key: '1',
          text: '16 GB',
          value: '16'
        },
        {
          key: '2',
          text: '32 GB',
          value: '32'
        },
        {
          key: '3',
          text: '64 GB',
          value: '64'
        },
      ]
    },
    {
      cmpt: [
        {
          key: '1',
          text: '16 GB',
          value: '16'
        },
        {
          key: '2',
          text: '32 GB',
          value: '32'
        },
        {
          key: '3',
          text: '64 GB',
          value: '64'
        },
      ]
    },
    {
      nwrk: [
        {
          key: '1',
          text: '256 MB',
          value: '256'
        },
        {
          key: '2',
          text: '512 MB',
          value: '512'
        },
        {
          key: '3',
          text: '1 GB',
          value: '1'
        },
        {
          key: '4',
          text: '2 GB',
          value: '2'
        },
        {
          key: '5',
          text: '4 GB',
          value: '4'
        },
        {
          key: '6',
          text: '16 GB',
          value: '16'
        },
        {
          key: '7',
          text: '32 GB',
          value: '32'
        },
        {
          key: '8',
          text: '64 GB',
          value: '64'
        },
      ]
    }
  ]
  
  export { INSTANCE_TYPE, CPU_CORES, MEMORY }