import VersionableSchema from '../../versionable/VersionableSchema';
export default class HomeSchema extends VersionableSchema {
  constructor(options: any) {
    const baseSchema = {
        name: {
            required: true,
            type: String,
        },
        testId: {
          required: true,
          type: Number,
      },
    };

    super(baseSchema, options);
  }
}
