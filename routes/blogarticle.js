const router = require('express').Router()
const blogController = require('../controller/blogarticle')

const { getUserFromToken, attachUser } = require('../middleware/verifyUser')
const pagination = require('../middleware/pagination')


router.route('/')
  .get( pagination,  blogController.getBlogs)
  .post(getUserFromToken, blogController.createBlog)

router.route('/p')
  .get(getUserFromToken, filterAndSort, setUserFilter, pagination, blogController.getBlogs)

router.route('/:id')
  .get(attachUser, blogController.getBlog)
  .patch(getUserFromToken, isCreator, blogController.updateBlogState)
  .put(getUserFromToken, isCreator, blogController.updateBlog)
  .delete(getUserFromToken, isCreator, blogController.deleteBlog)

module.exports = router
