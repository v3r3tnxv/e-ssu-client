// app/root.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import type { LinksFunction } from "@remix-run/node";
import { Links, Meta, Scripts, ScrollRestoration } from "@remix-run/react";

import { HeaderMenu, HeaderProfile } from "../widgets/header";
import { FooterLinks, FooterSocial } from "../widgets/footer";

import GroupsRoutes from "./routes/groups";
import HomeRoutes from "./routes/_index";
import LessonsRoutes from "./routes/lessons";
import StatusesRoutes from "./routes/statuses";
import StudentsRoutes from "./routes/students";
import SubgroupsRoutes from "./routes/subgroups";
import SubjectsRoutes from "./routes/subjects";
import TeachersRoutes from "./routes/teachers";
import UsersRoutes from "./routes/users";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "/styles/main.scss" },
  { rel: "icon", href: "/favicon.ico" },
];

export default function App() {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>e-SSU</title>
        <Meta />
        <Links />
      </head>
      <body className="global-page">
        <header className="global-header">
          <HeaderMenu />
          <HeaderProfile />
        </header>

        <main global-main>
          <Routes>
            <Route path="/*" element={<HomeRoutes />} />
            <Route path="/groups/*" element={<GroupsRoutes />} />
            <Route path="/lessons/*" element={<LessonsRoutes />} />
            <Route path="/statuses/*" element={<StatusesRoutes />} />
            <Route path="/students/*" element={<StudentsRoutes />} />
            <Route path="/subgroups/*" element={<SubgroupsRoutes />} />
            <Route path="/subjects/*" element={<SubjectsRoutes />} />
            <Route path="/teachers/*" element={<TeachersRoutes />} />
            <Route path="/users/*" element={<UsersRoutes />} />
          </Routes>
        </main>

        <footer className="global-footer">
          <FooterLinks />
          <FooterSocial />
        </footer>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
