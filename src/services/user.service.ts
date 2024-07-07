import { SignInSchema } from "@/components/auth/sign-in-form";
import { SignUpSchema } from "@/components/auth/sign-up-form";

export default class UserService {
  static async createAccount(body: SignUpSchema) {
    try {
      const res = await fetch('http://localhost:8000/api/users/register', { method: 'POST', body: JSON.stringify(body) });
      const response = res.json();
      console.log(response);
    } catch (err) {
      return err;
    }
  }
  static async signIn(body: SignInSchema) {
    try {
      const res = await fetch('http://localhost:8000/api/users/sign-in', { method: 'POST', body: JSON.stringify(body) });
      const response = res.json();
      console.log(response);
    } catch (err) {
      return err;
    }
  }
}