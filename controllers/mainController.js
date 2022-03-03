// Acá nos falta nuestra fuente de datos
const listaPlatos = [
    {
        id:1,
        nombre: 'Carpaccio fresco',
        desc: 'Entrada Carpaccio de salmón con cítricos',
        precio: 'U$S 65.50',
        img: "/images/Carpaccio-de-salmon.jpg"
    },
    {
        id:2,
        nombre: 'Risotto de berenjena',
        desc: 'Risotto de berenjena y queso de cabra',
        precio: 'U$S 47.00',
        img: "/images/Risotto-berenjena-queso-cabra.jpg"
    },
    {
        id:3,
        nombre: 'Mousse de arroz',
        desc: 'Mousse de arroz con leche y aroma de azahar',
        precio: 'U$S 27.50',
        img: "/images/Mousse-de-arroz-con-leche.jpg"
    },
    {
        id:4,
        nombre: 'Espárragos blancos',
        desc: '',
        precio: 'U$S 37.50',
        img: "/images/esparragos.png"
    }
]

// Acá nos falta un objeto literal con las acciones para cada ruta

const controlador = {
    index: (req, res) => {
        res.render('index', {menu: listaPlatos});
    },

    detalleMenu: (req, res) => {
        let idPlato = req.params.id;
        if(listaPlatos[idPlato].desc == ""){
            listaPlatos[idPlato].desc = "Plato típico"
        }
        res.render("detalleMenu", {"plato": listaPlatos[idPlato]});
    }
}


// Acá exportamos el resultado

module.exports = controlador;
