export type UserType = {
  id: String;
  email: String;
  name: String;
  role: Number;
  image: String;
};

export type UserState = {
  userData: UserType | null;
  isAuth: Boolean;
  isLoading: Boolean;
  error: String | null;
};
