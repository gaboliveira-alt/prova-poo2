import { Admin } from "./admin";
import { MessageHistory } from "./messagehistory";
import { RegularUser } from "./regularuser";
import { User } from "./user";

const admin: Admin = new Admin('Tarkin')
const regularUser: RegularUser = new RegularUser('Gideon')

const historicMessages = new MessageHistory<User>()

historicMessages.addUsers(admin)
historicMessages.addUsers(regularUser)
historicMessages.registerMessages(admin, regularUser.name, admin.message())
historicMessages.searchMessages()
historicMessages.searchSender(admin.name)