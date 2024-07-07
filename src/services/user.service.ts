import { SignInSchema } from "@/components/auth/sign-in-form";
import { SignUpSchema } from "@/components/auth/sign-up-form";
import { User } from "@/types/user";

export default class UserService {
  static async createAccount(body: SignUpSchema) {
    try {
      const res = await fetch('http://localhost:8000/api/users/register', { method: 'POST', body: JSON.stringify(body) });
      const response = await res.json();
      return response;
    } catch (err) {
      return err;
    }
  }
  static async signIn(body: SignInSchema): Promise<User | null> {
    try {
      console.log(body);
      const res = await fetch('http://localhost:8000/api/users/login', { method: 'POST', body: JSON.stringify(body) });
      const response: User = await res.json();
      return response;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}