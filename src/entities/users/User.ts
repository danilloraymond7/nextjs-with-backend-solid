import { v4 } from 'uuid'

export class User {
  public readonly id?: string
  public name: string
  public email: string
  public avatar: string
  public createdAt?: Date
  public updatedAt?: Date

  constructor (props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
