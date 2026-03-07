import { Client } from '../types'

import client1 from '../../assets/images/clients/client.1.png'
import client2 from '../../assets/images/clients/client.2.png'
import client3 from '../../assets/images/clients/client.3.png'

const Clients: Client[] = [
  {
    id: '1',
    name: 'Oliver Bennett',
    description:
      'Fantastic service and a perfect fade. The attention to detail is impressive.',
    image: client1
  },
  {
    id: '2',
    name: 'James Walker',
    description:
      'Best barber I have been to in years. Professional service and great atmosphere.',
    image: client2
  },
  {
    id: '3',
    name: 'Henry Carter',
    description:
      'Clean shop, friendly staff and an excellent haircut every time.',
    image: client3
  }
]

export const getClients = async (): Promise<Client[]> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(Clients), 300)
  )
}
