import { Router } from 'express';
import userController from './UserController';

const router = Router();

/**
 * @swagger
 * /homes/{id}:
 *   get:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Home
 *     description: Returns a Home
 *     parameters:
 *       - name: id
 *         in: path
 *         description: 'Unique id of Home'
 *         type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A Home
 *         schema:
 *           $ref: '#/definitions/HomeObjectSuccess'
 */
router.route('/')
  .get(
    userController.getUsers,
  );

router.route('/svc')
.get(
  userController.getUserSvc,
);

export default router;
