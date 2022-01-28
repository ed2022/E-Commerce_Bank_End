const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
//syntax from mini-project however error promted me to remove the const tagData = await--> it wasn't liking it

router.get('/', (req, res) => {
  try {// find all tags 
    Tag.findAll({
      // be sure to include its associated Product data
      include: [{ model: Product, attributes: ['product_name', 'price', 'stock', 'category_id']}]
    })
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  try {
    Tag.findOne(req.params.id, { 
      // be sure to include its associated Product data
      include: [{ model: Product, attributes: ['product_name', 'price', 'stock', 'category_id']}]
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    Tag.create({tag_name: req.body.tag_name});
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    Tag.update({tag_name: req.body.tag_name}, {where: {id: req.params.id}}); //name within the body is what we are updating by requiring the id 
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    Tag.destroy({where: {id: req.params.id}});
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
