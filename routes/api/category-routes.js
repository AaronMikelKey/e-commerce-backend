const router = require('express').Router()
const { Category, Product } = require('../../models')

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
	// find all categories
	try {
		const categories = await Category.findAll({
			fields: ['id'],
			include: [{ model: Product }],
		})

		res.json(categories)
	} catch (err) {
		res.status(500).json(err)
	}
})

router.get('/:id', async (req, res) => {
	// find one category by its `id` value
	try {
		const category = await Category.findByPk(req.params.id, {
			include: [{ model: Product }],
		})
		category != null
			? res.json(category)
			: res.status(404).json({ error: 'No category with this ID.' })
	} catch (err) {
		res.status(500).json(err)
	}
})

router.post('/', (req, res) => {
	// create a new category
	Category.create(req.body)
		.then(() => {
			if (res.error) {
				res.json(res.error)
			} else {
				res.json({ message: 'Category created!' })
			}
		})
		.catch((err) => res.status(500).json({ error: err }))
})

router.put('/:id', (req, res) => {
	// update a category by its `id` value
	Category.findByPk(req.params.id)
		.then((category) => {
			category.update(req.body).then((data) => {
				if (!data) {
					res.json({ error: 'No category with this ID.' })
				}
				res.json(data)
			})
		})
		.catch((err) => res.json(err))
})

router.delete('/:id', (req, res) => {
	Category.findByPk(req.params.id)
		.then((category) => {
			category.destroy().then((data) => {
				if (!data) {
					res.json({ error: 'No category with this ID.' })
				}
				res.json(data)
			})
		})
		.catch((err) => res.json(err))
})

module.exports = router
