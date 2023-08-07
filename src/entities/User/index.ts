import type { UserSchema, User } from './model/types/user';
import { userReducer, userActions } from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export {
    userReducer,
    userActions,
    getUserAuthData,
};

export type {
    User, UserSchema,
};
