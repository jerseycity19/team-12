const accountRoutes = require("./account");
const forumRoutes = require("./forum");
const toDoRoutes = require("./toDo")
const express = require("express");

const constructorMethod = app => {
  app.use("/forum", forumRoutes);
  app.use("/account", accountRoutes);
  app.use("/toDo", toDoRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
