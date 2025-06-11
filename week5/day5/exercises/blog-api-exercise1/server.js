import express from "express";
const app = express();
const PORT=3000
const data = [
  {
    id: 1,
    title: "The Rise of AI in Everyday Life",
    content:
      "Artificial intelligence is no longer just a concept from sci-fi movies; it's increasingly integrated into our daily routines, from smart assistants to personalized recommendations.",
  },
  {
    id: 2,
    title: "Mastering Node.js for Backend Development",
    content:
      "Node.js offers a powerful JavaScript runtime for building scalable network applications. This post explores key concepts and best practices for beginners.",
  },
  {
    id: 3,
    title: "Exploring the Benefits of Functional Programming",
    content:
      "Functional programming paradigms are gaining traction due to their emphasis on immutability and pure functions, leading to more predictable and maintainable code.",
  },
  {
    id: 4,
    title: "My Journey into Web Development: A Beginner's Story",
    content:
      "Starting out in web development can be daunting, but with the right resources and a curious mind, anyone can build amazing things. Here's how I began.",
  },
  {
    id: 5,
    title: "The Importance of User Experience (UX) Design",
    content:
      "Great UX design goes beyond aesthetics; it's about creating intuitive and enjoyable interactions that make users' lives easier and more productive.",
  },
  {
    id: 6,
    title: "Understanding RESTful APIs: A Comprehensive Guide",
    content:
      "RESTful APIs are the backbone of modern web services. This guide covers principles, best practices, and how to design robust APIs.",
  },
  {
    id: 7,
    title: "Top 5 JavaScript Frameworks for 2025",
    content:
      "Staying updated with the rapidly evolving JavaScript ecosystem is crucial. Discover the leading frameworks shaping web development in the coming year.",
  },
  {
    id: 8,
    title: "Demystifying Cloud Computing: AWS, Azure, and GCP",
    content:
      "Cloud platforms offer scalable and flexible infrastructure. We break down the core services and use cases for the three major cloud providers.",
  },
  {
    id: 9,
    title: "Secure Coding Practices for Web Developers",
    content:
      "Writing secure code is paramount. Learn about common vulnerabilities like XSS and SQL Injection, and how to prevent them in your applications.",
  },
  {
    id: 10,
    title: "The Future of Frontend: WebAssembly and Beyond",
    content:
      "WebAssembly is revolutionizing client-side performance, enabling near-native speed for complex applications directly in the browser. What's next?",
  },
  {
    id: 11,
    title: "Introduction to Databases: SQL vs. NoSQL",
    content:
      "Choosing the right database is critical. This post compares relational (SQL) and non-relational (NoSQL) databases, highlighting their strengths and weaknesses.",
  },
  {
    id: 12,
    title: "Building Real-time Applications with WebSockets",
    content:
      "WebSockets provide a full-duplex communication channel over a single TCP connection, perfect for chat apps, live dashboards, and gaming.",
  },
  {
    id: 13,
    title: "Optimizing Web Performance: Tips and Tools",
    content:
      "Slow websites drive users away. Discover practical tips and powerful tools to diagnose and improve your website's loading speed and responsiveness.",
  },
  {
    id: 14,
    title: "Getting Started with Containerization: Docker for Developers",
    content:
      "Docker simplifies application deployment by packaging code and dependencies into isolated containers. A must-have skill for modern DevOps.",
  },
  {
    id: 15,
    title: "The Psychology of Dark Mode: Why We Love It",
    content:
      "Dark mode has swept across apps and operating systems. Beyond aesthetics, explore the psychological and practical reasons behind its immense popularity.",
  },
];
//get all post
app.use(express.json());
app.get("/posts", (req, res) => {
  res.send(data);
});
//get post
app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  const post = data.find((post) => post.id == id);
  if (post === undefined) res.status(404).send("post not found");
  else res.send(post);
});




app.post("/posts", (req, res) => {
  const newPost = {
    id: Number(data.length + 1),
    title: req.body.title,
    content: req.body.content,
  };
  data.push(newPost);
});

app.put("/posts/:id", (req, res) => {
  const id = req.params.id;
  const index = data.findIndex((post) => post.id == id);
  if (index == -1) res.status(404).send("post not exists!");
  else {
    const updatPost = {
      id: data[index].id,
      title: req.body.title,
      content: req.body.content,
    };
    data[index] = updatPost;
    res.status(200).send("the post has been updated with succafully!");
  }
});

app.delete("/posts/:id",(req,res)=>{
    const id = req.params.id
    const index=data.findIndex(post=>post.id==id)
    if(index==-1){
        res.status(404).send("the post not exists")
    }
    else {
        data.splice(index,1)
        res.status(200).send("post has been removed !")
    }
})
app.use((req, res) => {
    res.status(404).json({
        error: "Not Found",
        message: `The requested URL ${req.originalUrl} was not found on this server.`,
    });
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
