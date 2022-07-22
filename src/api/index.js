const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/capes/:username.png', async (req, res) => {
    try { 
        const user = await prisma.user.findFirst({
            where: {
                nick: req.params.username
            }
        });   
        if (!user)
            return res.sendStatus(404);
    } catch (error) {
        console.error(error)
        return res.sendStatus(500);
    }
    return res.sendStatus(404);
});
router.get('/users/:username.cfg', async (req, res) => {
    res.json({
       items: []
    });
});
module.exports = router;