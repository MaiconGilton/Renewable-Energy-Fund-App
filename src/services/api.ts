import { addUserDatabase, getUsersDatabase } from './database'

export async function api(url: string, method: 'POST' | 'GET', body: any): Promise<{ data: any }> {
  return await new Promise((resolve, reject) => {
    if (method === 'POST' && url === '/user/login') {
      (async () => {
        try {
          const users = await getUsersDatabase()
          const user = users.find(i => i.email === body.email)

          if (!user || user?.password !== body.password) {
            setTimeout(() => {
              resolve({
                data: {
                  error: 'Wrong credentials!'
                }
              });
            },
            1000
            )
          } else {
            setTimeout(() => {
              resolve({ data: { user } });
            },
            1500
            )
          }
        } catch (error: any) {
          reject(new Error(error.message))
        }
      })()
    } else if (method === 'POST' && url === '/user/signup') {
      (async () => {
        try {
          const users = await getUsersDatabase()
          const userAlreadyExists = users.some(i => i.email === body.email)

          if (userAlreadyExists) {
            setTimeout(() => {
              resolve({
                data: {
                  error: 'Email already exists!'
                }
              });
            },
            1000
            )
          } else {
            const newUser = await addUserDatabase(body)
            setTimeout(() => {
              resolve({ data: { user: newUser } });
            },
            1500
            )
          }
        } catch (error: any) {
          reject(new Error(error.message))
        }
      })()
    } else {
      setTimeout(() => {
        reject(new Error('Not found (404)!'))
      },
      500
      )
    }
  })
}
