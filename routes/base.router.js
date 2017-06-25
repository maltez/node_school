const responseService = require('../services/response.service');


class BaseRouter {
    constructor(router) {
        this.router = router;
        this.createRoutes();
    }

    createRoutes() {
        const { router } = this;
        router.get('/', this.get.bind(this));
        router.get('/404', this.get404.bind(this));
        router.post('/', this.post.bind(this));
        router.delete('/:id', this.delete.bind(this));
        router.put('/:id', this.put.bind(this));
        router.get('/:id', this.getById.bind(this));
    }

    get(req, res) {
        const result = responseService.responseOk();
        res.json(result);
    }
  
    get404(req, res, next) {
      next(responseService.responseBad());
    }

    post(req, res) {
        const result = { param: req.params.id };
        res.json(result);
    }

    delete(req, res) {
        const result = { param: req.params.id };
        res.json(result);
    }

    put(req, res) {
        const result = { param: req.params.id };
        res.json(result);
    }

    getById(req, res) {
        const result = { param: req.params.id };
        res.json(result);
    }
}

module.exports = BaseRouter;