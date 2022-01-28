const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint-
//syntax from mini-project however error promted me to remove the const categoryData = await--> it wasn't liking it 

router.get('/', (req, res) => {
  // find all categories- this is using the findAll()- which happens to be a model query
  try {
    Category.findAll({
      // be sure to include its associated Products
      include: [{ model: Product, attributes: ['id', 'product_name', 'price', 'stock', 'category_id']}]
    })
    res.status(200).json(categoryData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  try {
    Category.findOne(req.params.id, { 
      // be sure to include its associated Products
      include: [{ model: Product, attributes: ['id', 'product_name', 'price', 'stock', 'category_id']}]
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    Category.create({category_name: req.body.category_name});
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    Category.update({category_name: req.body.category_name}, {where: {id: req.params.id}}); //name within the body is what we are updating by requiring the id 
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    Category.destroy({where: {id: req.params.id}});
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
