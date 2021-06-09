import axios from 'axios';
import { NextFunction, Request, Response } from 'express';
import { users } from '../../libs/mockData';
import { UserService } from '../../services';

class UserController {
  public static instance: UserController;

    public static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }

        UserController.instance = new UserController();
        return UserController.instance;
    }
    private userRepository: UserService;
    constructor() {
        this.userRepository = new UserService();
    }

   public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('inside get method');
        // const user = this.userRepository.get({});
        if (!users) {
            return res.status(200).send({
                data: [],
                message: 'No Data',
                status: 200,
            });
        }
        res.status(200).send({
            data: users,
            message: 'Successfully fetched',
            status: 200,
        });

    }
    catch (err) {

        return next({
            error: 'bad request',
            message: err,
            status: 400,
        });
    }
}
public getUserSvc = async (req: Request, res: Response, next: NextFunction) => {
  try {
      console.log('inside get method========');
      const respons = await axios.get('http://localhost:4000/api/userinfo/');
      const infoData = respons.data;
      res.status(200).send({
          data: { users, infoData},
          message: 'Successfully fetched',
          status: 200,
      });

  }
  catch (err) {

      return next({
          error: 'bad request',
          message: err,
          status: 400,
      });
  }
}
}

export default UserController.getInstance();
