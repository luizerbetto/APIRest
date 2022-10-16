import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

/**
 * Get List o People
 */
app.get('/people', async (req, res) => {
    const peoples = await prisma.people.findMany();
    res.json(peoples);
})

/**
 * Get one People by id
 */
app.get('/people/:id', async (req, res) => {
    const { id } = req.params
    const people = await prisma.people.findFirst({
        where: { id: Number(id) },
    })
    res.json(people)
})

/**
 * Add one People
 */
app.post(`/people`, async (req, res) => {
    const { email, name, eventTile } = req.body
    const result = await prisma.people.create({
        data: { ...req.body },
    })
    res.json(result)
})

/**
 * Update one People base on ID
 */
app.put('/people/publish/:id', async (req, res) => {
    const { id } = req.params
    const event = await prisma.people.update({
        where: { id: Number(id) },
        data: { ...req.body },
    })
    res.json(event)
})
  
/**
 * Delete one People by ID
 */
app.delete(`/people/:id`, async (req, res) => {
    const { id } = req.params
    const people = await prisma.people.delete({
      where: { id: Number(id) },
    })
    res.json(people)
})

/**
 * Get List o Event
 */
 app.get('/event/list', async (req, res) => {
    const events = await prisma.event.findMany();
    res.json(events);
})

/**
 * Get one Event by id
 */
app.get('/event/:id', async (req, res) => {
    const { id } = req.params
    const event = await prisma.event.findFirst({
        where: { id: Number(id) },
    })
    res.json(event)
})

/**
 * Add Event
 */
app.post(`/event`, async (req, res) => {
    const { title, content, authorEmail } = req.body
    const result = await prisma.event.create({
        data: { ...req.body },
    })
    res.json(result)
})

/**
 * Publish one Event
 */
app.put('/event/publish/:id', async (req, res) => {
    const { id } = req.params
    const event = await prisma.event.update({
        where: { id: Number(id) },
        data: { published: true },
    })
    res.json(event)
})
  
/**
 * Delete one Event base on ID
 */
app.delete(`/event/:id`, async (req, res) => {
    const { id } = req.params
    const event = await prisma.event.delete({
      where: { id: Number(id) },
    })
    res.json(event)
})

/**
 * List Events of a People by idPeople
 */
 app.get('/event/bypeople/:peopleId', async (req, res) => {
    const { peopleId } = req.params
    const events = await prisma.event.findMany({
      where: { 
        participants:  {
            some: {
                id: Number(peopleId)
            }
        }
    },
    })
    res.json(events)
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})