import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get('/people', async (req, res) => {
    const peoples = await prisma.people.findMany();
    res.json(peoples);
})

app.get('/listevents', async (req, res) => {
    const events = await prisma.event.findMany({
      where: { published: true },
    })
    res.json(events)
})
  
app.get(`/event/:id`, async (req, res) => {
    const { id } = req.params
    const event = await prisma.event.findFirst({
        where: { id: Number(id) },
    })
    res.json(event)
})

app.post(`/people`, async (req, res) => {
    const { email, name, eventTile } = req.body
    const result = await prisma.people.create({
        data: {
            email,
            name,
            // event: { connect: { title: eventTile } },
            },
    })
    res.json(result)
})

app.post(`/event`, async (req, res) => {
    const { title, content, authorEmail } = req.body
    const result = await prisma.event.create({
        data: { ...req.body },
    })
    res.json(result)
})

app.put('/event/publish/:id', async (req, res) => {
    const { id } = req.params
    const event = await prisma.event.update({
        where: { id: Number(id) },
        data: { published: true },
    })
    res.json(event)
})
  
  app.delete(`/event/:id`, async (req, res) => {
    const { id } = req.params
    const event = await prisma.event.delete({
      where: { id: Number(id) },
    })
    res.json(event)
  })

app.listen(3000, () => {
    console.log('listening on port 3000');
})