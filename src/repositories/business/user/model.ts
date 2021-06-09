import * as mongoose from 'mongoose';

import IUserModel from './IModel';
import UserSchema from './schema';

/**
 * Home Schema
 */
/**
 * @swagger
 * definitions:
 *   HomePost:
 *     properties:
 *       name:
 *         type: string
 *   HomePut:
 *     properties:
 *       name:
 *         type: string
 *       id:
 *         type: string
 *   HomeResponse:
 *     properties:
 *       name:
 *         type: string
 *       id:
 *         type: string
 *       originalId:
 *         type: string
 *       createdAt:
 *         type: string
 *   HomeArraySuccess:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: integer
 *         example: 200
 *       data:
 *         type: array
 *         items:
 *           $ref: '#/definitions/HomeResponse'
 *   HomeObjectSuccess:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: string
 *         example: 200
 *       data:
 *         type: object
 *         $ref: '#/definitions/HomeResponse'
 *   DeleteSuccess:
 *     properties:
 *       message:
 *         type: string
 *         example: Deleted
 *       status:
 *         type: string
 *         example: 200
 *       data:
 *         type: object
 *         $ref: '#/definitions/Delete'
 *   Delete:
 *     properties:
 *       n:
 *         type: string
 *         example: 1
 *       nModified:
 *         type: string
 *         example: 1
 *       ok:
 *         type: string
 *         example: 1
 */

export const userSchema = new UserSchema({
  collection: 'Users',
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
    virtuals: true,
  },
  toObject: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
    virtuals: true,
  },
});

/**
 * Add your
 * - pre-save hook
 * - validation
 * - virtual
 */
userSchema.pre('save', (next: any) => {
  // this.updateDate = new Date();
  next();
});

/**
 * Indicies
 */
userSchema.index({ name: 1, testId: 1 }, { unique: true });

/**
 * Methods
 */
userSchema.method({});

/**
 * Statics
 */
userSchema.statics = {};

/**
 * @typedef Home
 */

export const userModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>
  (
    'Users',
    userSchema,
    'Users',
     true,
  );
