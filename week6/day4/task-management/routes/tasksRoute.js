import express from "express";
import { readFile, writeFile } from "fs/promises";
import path from "path";
const router = express.Router();

router.use(express.json());
router.get("/tasks", async (req, res) => {
  try {
    const fullPath = path.resolve("tasks.json");
    const data = await readFile(fullPath, "utf-8");
    const tasks = JSON.parse(data);
    if (tasks.length > 0) res.send(tasks);
    else res.send("there is not tasks!");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/tasks/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const fullPath = path.resolve("tasks.json");
    const data = await readFile(fullPath, "utf-8");
    const tasks = JSON.parse(data);
    const task = tasks.find((task) => task.id == id);
    if (task === undefined) res.send("task not found");
    else res.send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.post("/tasks", async (req, res) => {
  const { title, description, completed } = req.body;

  try {
     if (!title || !description || typeof completed !== 'boolean') {
    res.status(400).json({ error: 'title, description, and completed (true/false) are required' });
  }else{

      const fullPath = path.resolve("tasks.json");
      const data = await readFile(fullPath, "utf-8");
      const tasks = JSON.parse(data);
      const oldLenght = tasks.length;
      tasks.push({ id: oldLenght + 1, title, description, completed });
      const json = JSON.stringify(tasks, null, 2);
      await writeFile(fullPath, json, "utf-8");
      res.send("task added!");
  }
  } catch (err) {
    res.status(400).send(err);
  }
});
router.put("/tasks/:id", async (req, res) => {
  const { title, description, completed } = req.body;
  const id = Number(req.params.id);
  try {
    if (!title || !description || typeof completed !== 'boolean') {
    res.status(400).json({ error: 'title, description, and completed (true/false) are required' });
  }else {

      const fullPath = path.resolve("tasks.json");
      const data = await readFile(fullPath, "utf-8");
      const tasks = JSON.parse(data);
      const index = tasks.findIndex((task) => task.id == id);
      if (index == -1) {
        res.send("task not found");
      } else {
        tasks[index].title = title;
        tasks[index].description = description;
        tasks[index].completed = completed;
        const json = JSON.stringify(tasks, null, 2);
        await writeFile(fullPath, json, "utf-8");
        res.send("task updated");
      }
  }
  } catch (err) {
    res.status(400).send(err);
  }
});
router.delete("/tasks/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const fullPath = path.resolve("tasks.json");
    const data = await readFile(fullPath, "utf-8");
    const tasks = JSON.parse(data);
    const index = tasks.findIndex((task) => task.id == id);
    if ((index == -1)) {
      res.send("task not found");
    } else {
      tasks.splice(index, 1);
      const json = JSON.stringify(tasks, null, 2);
      await writeFile(fullPath, json, "utf-8");
      res.send("task deleted");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

app.use((req, res) => {
  res.status(404).send("page not found");
});

export default router;
