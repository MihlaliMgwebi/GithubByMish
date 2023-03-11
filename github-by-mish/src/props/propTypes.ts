import { ChangeEventHandler } from "react";

// [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
export type repositoryPropType = {
    key: number;
    repository: IPublicRepository
}

export type userPropType = {
    user: IUserInfo
}

export type searchUserPropType = {
    value: string
    onChange: ChangeEventHandler<HTMLInputElement> | undefined
}
