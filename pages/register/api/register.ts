// register/api/register.ts

import { json, LoaderFunction } from "@remix-run/node";
import { pool } from "../../../../server/db";
import bcrypt from "bcrypt";

export const register: LoaderFunction = async ({ request }) => {
  const body = new URLSearchParams(await request.text());
  const user_login = body.get("user_login");
  const user_password = body.get("user_password");
  const role_id = body.get("role_id");

  if (!user_login || !user_password || !role_id) {
    return json({ error: "All fields are required" }, { status: 400 });
  }

  try {
    const hashedPassword = await bcrypt.hash(user_password, 10); // хеширование пароля
    const newUser = await pool.query(
      "INSERT INTO Users (user_login, user_password, role_id) VALUES ($1, $2, $3) RETURNING *",
      [user_login, hashedPassword, role_id]
    );

    return json({ message: "User registered successfully", user: newUser.rows[0] });
  } catch (error) {
    console.error("Error registering user:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
};
