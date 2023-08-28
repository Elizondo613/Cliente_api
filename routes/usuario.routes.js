const express = require('express');
const routes = express.Router();

//LEER USUARIO
routes.get('/usuario', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM usuario', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

//INSERTAR USUARIO
routes.post('/usuario', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO usuario set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Usuario registrado!')
        })
    })
})

//ELIMINAR USUARIO
routes.delete('/usuario/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM usuario WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Usuario eliminado!')
        })
    })
})

//ACTUALIZAR USUARIO
routes.put('/usuario/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE usuario set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Usuario actualizado!')
        })
    })
})

module.exports = routes