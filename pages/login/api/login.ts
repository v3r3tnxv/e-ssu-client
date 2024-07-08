// login/api/login.ts

import { json, LoaderFunction } from "@remix-run/node";
import { pool } from "../../../../server/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const logIn: LoaderFunction = async ({ request }) => {
  const body = new URLSearchParams(await request.text());
  const user_login = body.get("user_login");
  const user_password = body.get("user_password");

  if (!user_login || !user_password) {
    return json({ error: "Username and password are required" }, { status: 400 });
  }

  try {
    const user = await pool.query("SELECT * FROM Users WHERE user_login = $1", [user_login]);

    if (user.rows.length === 0) {
      return json({ error: "User not found" }, { status: 404 });
    }

    const passwordMatch = await bcrypt.compare(user_password, user.rows[0].user_password);

    if (!passwordMatch) {
      return json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = jwt.sign(
      { user_id: user.rows[0].user_id },
      process.env.JWT_SECRET || "your_jwt_secret",
      {
        expiresIn: "1h",
      }
    );

    return json({ message: "User logged in successfully", token });
  } catch (error) {
    console.error("Error logging in user:", error);
    return json({ error: "Internal server error" }, { status: 500 });
  }
};
