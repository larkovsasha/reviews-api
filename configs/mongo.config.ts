import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
  return { uri: getMongoStringConnect(configService), ...getMongoOptions() };
};
const getMongoStringConnect = (configService: ConfigService) => {
  // return (
  //   'mongo://' +
  //   configService.get('MONGO_LOGIN') +
  //   ':' +
  //   configService.get('MONGO_PASSWORD') +
  //   '@' +
  //   configService.get('MONGO_HOST') +
  //   ':' +
  //   configService.get('MONGO_PORT') +
  //   '/' +
  //   configService.get('MONGO_AUTHDATABASE')
  // );
  return 'mongodb://127.0.0.1:27017/reviews_api_db';
};

const getMongoOptions = (): Omit<TypegooseModuleOptions, 'uri'> => ({
  useNewUrlParser: true,
});
