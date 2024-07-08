// users/ui/LogInPage.tsx

import { LoaderFunction } from "@remix-run/node";
import { Form, json, Link } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
  // загрузите данные, необходимые для вашей страницы здесь
};

export default function LogInPage() {
  return (
    <div>
      <h1>Вход в аккаунт</h1>
      <Form method="post" action="/api/login">
        <input type="text" name="user_login" placeholder="Username" required />
        <input type="password" name="user_password" placeholder="Password" required />
        <button type="submit">Войти</button>
      </Form>
      <Link to="/register">Нет аккаунта? Зарегестрироваться</Link>
    </div>
  );
}
