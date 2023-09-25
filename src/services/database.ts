import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { getRandomNumber } from '@utils/index';

export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  account: {
    balance: number
    funds: {
      wind: number
      solar: number
      nature: number
    }
  }
}

export const mockDbActions = {
  addUser: null
}

export let getUsersDatabase: () => Promise<IUser[]>
export let addUserDatabase: (data: IUser) => Promise<void>
export let clearDatabase: () => Promise<void>

export const initDatabase = () => {
  const { setItem, getItem } = useAsyncStorage('@database')

  addUserDatabase = async (userData: IUser) => {
    const data = await getItem()
    const users = data ? JSON.parse(data) as IUser[] : []

    users.push({
      ...userData,
      id: Date.now().toString(),
      // generate a random account for the user at user register
      account: {
        balance: getRandomNumber(500, 2000),
        funds: {
          wind: getRandomNumber(200, 500),
          solar: getRandomNumber(200, 500),
          nature: getRandomNumber(200, 500)
        }
      }
    })

    await setItem(JSON.stringify(users))
  }

  getUsersDatabase = async () => {
    const data = await getItem()
    if (data) return JSON.parse(data)
    return []
  }

  clearDatabase = async () => {
    await setItem('')
  }
}
