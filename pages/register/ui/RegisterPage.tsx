// register/ui/register.tsx

import { LoaderFunction } from "@remix-run/node";
import { Form, json, Link } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
  // загрузите данные, необходимые для вашей страницы здесь
};

export default function RegisterPage() {
  return (
    <div>
      <h1>Регистрация пользователя</h1>
      <Form method="post" action="/api/register">
        <input type="text" name="user_login" placeholder="Username" required />
        <input type="password" name="user_password" placeholder="Password" required />
        <input type="number" name="role_id" placeholder="Role ID" required />
        <button type="submit">Зарегестрировать</button>
      </Form>
      <Link to="/login">Already have an account? Log in</Link>
    </div>
  );
}
