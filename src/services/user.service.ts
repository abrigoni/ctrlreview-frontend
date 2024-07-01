import { SignUpSchema } from "@/components/auth/sign-up-form";

export default class UserService {
  static async createAccount(body: SignUpSchema) {
    try {
      const user = await fetch('http://localhost:8000/api/users/register', { method: 'POST', body: JSON.stringify(body) });
      console.log(user);
    } catch (err) {
      return err;
    }
  }
}