const router = require('express').Router()
const { Tag, Product, ProductTag } = require('../../models')

// The `/api/tags` endpoint

router.get('/', (req, res) => {
	// find all tags
	// be sure to include its associated Product data
	Tag.findAll({ include: [{ model: Product, through: ProductTag }] })
		.then((data) => res.json(data))
		.catch((err) => res.json(err))
})

router.get('/:id', (req, res) => {
	Tag.findByPk(req.params.id, {
		include: [{ model: Product }],
	})
		.then((data) => res.json(data))
		.catch((err) => res.json(err))
})

router.post('/', (req, res) => {
	Tag.create(req.body)
		.then((data) => res.json(data))
		.catch((err) => res.json(err))
})

router.put('/:id', (req, res) => {
	Tag.findByPk(req.params.id)
		.then((data) => data.update(req.body))
		.then((data) => res.json(data))
		.catch((err) => res.json(err))
})

router.delete('/:id', (req, res) => {
	Tag.findByPk(req.params.id)
		.then((data) => data.destroy())
		.then((data) => res.json(data))
		.catch((err) => res.json(err))
})

module.exports = router
