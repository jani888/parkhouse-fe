import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Car = {
  __typename: 'Car';
  id: Scalars['ID'];
  licencePlate: Scalars['String'];
  name: Scalars['String'];
  user: User;
};

export type GameCar = {
  __typename: 'GameCar';
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  ownedByMe: Scalars['Boolean'];
  price: Scalars['Int'];
};

export type Level = {
  __typename: 'Level';
  id: Scalars['ID'];
  label: Scalars['String'];
  spaces: Array<ParkingSpace>;
};

export type LoginResponse = {
  __typename: 'LoginResponse';
  token: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename: 'Mutation';
  addCar: Car;
  buyGameCar?: Maybe<Scalars['Boolean']>;
  changeReservationStatus: Reservation;
  login: LoginResponse;
  makeReservation: Reservation;
  makeResignation: Resignation;
  notifyUser?: Maybe<Scalars['Boolean']>;
  removeCar?: Maybe<Scalars['Boolean']>;
  selectGameCar?: Maybe<Scalars['Boolean']>;
  updateCar: Car;
};


export type MutationAddCarArgs = {
  licencePlate: Scalars['String'];
  name: Scalars['String'];
};


export type MutationBuyGameCarArgs = {
  gameCarId: Scalars['ID'];
};


export type MutationChangeReservationStatusArgs = {
  reservationId: Scalars['ID'];
  type: ReservationType;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  userName: Scalars['String'];
};


export type MutationMakeReservationArgs = {
  carId: Scalars['ID'];
  date: Scalars['DateTime'];
  parkingSpaceId: Scalars['ID'];
  type: ReservationType;
};


export type MutationMakeResignationArgs = {
  carId: Scalars['ID'];
  date: Scalars['DateTime'];
  parkingSpaceId: Scalars['ID'];
  type: ReservationType;
};


export type MutationNotifyUserArgs = {
  message?: InputMaybe<Scalars['String']>;
  notificationType: NotificationType;
  userId: Scalars['ID'];
};


export type MutationRemoveCarArgs = {
  carId: Scalars['ID'];
};


export type MutationSelectGameCarArgs = {
  gameCarId: Scalars['ID'];
};


export type MutationUpdateCarArgs = {
  carId: Scalars['ID'];
  licencePlate: Scalars['String'];
  name: Scalars['String'];
};

export type NotificationType =
  | 'LIGHTS_ON'
  | 'OTHER';

export type ParkingSpace = {
  __typename: 'ParkingSpace';
  currentStatus: ParkingSpaceStatus;
  id: Scalars['ID'];
  label: Scalars['String'];
  level: Level;
  owner?: Maybe<User>;
  type: ParkingSpaceType;
};

export type ParkingSpaceStatus =
  | 'FREE'
  | 'OCCUPIED'
  | 'RESERVED'
  | 'RESERVED_FOR_OWNER';

export type ParkingSpaceType =
  | 'DISABLED'
  | 'ELECTRIC'
  | 'NORMAL';

export type Query = {
  __typename: 'Query';
  gameCars: Array<GameCar>;
  levels: Array<Level>;
  myReservations: Array<Reservation>;
  myResignation: Array<Resignation>;
  myUser: User;
  parkingSpace: ParkingSpace;
  reservation: Reservation;
  searchByLicencePlate: Array<Car>;
  user: User;
};


export type QueryParkingSpaceArgs = {
  id: Scalars['ID'];
};


export type QueryReservationArgs = {
  id: Scalars['ID'];
};


export type QuerySearchByLicencePlateArgs = {
  queryString: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Reservation = {
  __typename: 'Reservation';
  car: Car;
  date: Scalars['DateTime'];
  id: Scalars['ID'];
  parkingSpace: ParkingSpace;
  status: ReservationStatus;
  type: ReservationType;
  user: User;
};

export type ReservationStatus =
  | 'CHECKED_IN'
  | 'CHECKED_OUT'
  | 'CREATED';

export type ReservationType =
  | 'AFTERNOON'
  | 'ALL_DAY'
  | 'MORNING';

export type Resignation = {
  __typename: 'Resignation';
  date: Scalars['DateTime'];
  id: Scalars['ID'];
  parkingSpace: ParkingSpace;
  user: User;
};

export type User = {
  __typename: 'User';
  avatar: Scalars['String'];
  cars: Array<Car>;
  coin: Scalars['Int'];
  hasFixedParkingSpace: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
  ownedGameCars: Array<GameCar>;
  parkingSpace?: Maybe<ParkingSpace>;
  phoneNumber: Scalars['String'];
  selectedGameCar: GameCar;
};

export type MyCarsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyCarsQuery = { __typename: 'Query', myUser: { __typename: 'User', cars: Array<{ __typename: 'Car', id: string, name: string, licencePlate: string }> } };

export type AddCarMutationVariables = Exact<{
  licencePlate: Scalars['String'];
  name: Scalars['String'];
}>;


export type AddCarMutation = { __typename: 'Mutation', addCar: { __typename: 'Car', id: string, name: string, licencePlate: string } };

export type UpdateCarMutationVariables = Exact<{
  id: Scalars['ID'];
  licencePlate: Scalars['String'];
  name: Scalars['String'];
}>;


export type UpdateCarMutation = { __typename: 'Mutation', updateCar: { __typename: 'Car', id: string, name: string, licencePlate: string } };

export type RemoveCarMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveCarMutation = { __typename: 'Mutation', removeCar?: boolean | null };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename: 'Query', myUser: { __typename: 'User', id: string, name: string, coin: number } };


export const MyCarsDocument = gql`
    query myCars {
  myUser {
    cars {
      id
      name
      licencePlate
    }
  }
}
    `;

/**
 * __useMyCarsQuery__
 *
 * To run a query within a React component, call `useMyCarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyCarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyCarsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyCarsQuery(baseOptions?: Apollo.QueryHookOptions<MyCarsQuery, MyCarsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyCarsQuery, MyCarsQueryVariables>(MyCarsDocument, options);
      }
export function useMyCarsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyCarsQuery, MyCarsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyCarsQuery, MyCarsQueryVariables>(MyCarsDocument, options);
        }
export type MyCarsQueryHookResult = ReturnType<typeof useMyCarsQuery>;
export type MyCarsLazyQueryHookResult = ReturnType<typeof useMyCarsLazyQuery>;
export type MyCarsQueryResult = Apollo.QueryResult<MyCarsQuery, MyCarsQueryVariables>;
export const AddCarDocument = gql`
    mutation addCar($licencePlate: String!, $name: String!) {
  addCar(licencePlate: $licencePlate, name: $name) {
    id
    name
    licencePlate
  }
}
    `;
export type AddCarMutationFn = Apollo.MutationFunction<AddCarMutation, AddCarMutationVariables>;

/**
 * __useAddCarMutation__
 *
 * To run a mutation, you first call `useAddCarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCarMutation, { data, loading, error }] = useAddCarMutation({
 *   variables: {
 *      licencePlate: // value for 'licencePlate'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useAddCarMutation(baseOptions?: Apollo.MutationHookOptions<AddCarMutation, AddCarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCarMutation, AddCarMutationVariables>(AddCarDocument, options);
      }
export type AddCarMutationHookResult = ReturnType<typeof useAddCarMutation>;
export type AddCarMutationResult = Apollo.MutationResult<AddCarMutation>;
export type AddCarMutationOptions = Apollo.BaseMutationOptions<AddCarMutation, AddCarMutationVariables>;
export const UpdateCarDocument = gql`
    mutation updateCar($id: ID!, $licencePlate: String!, $name: String!) {
  updateCar(licencePlate: $licencePlate, name: $name, carId: $id) {
    id
    name
    licencePlate
  }
}
    `;
export type UpdateCarMutationFn = Apollo.MutationFunction<UpdateCarMutation, UpdateCarMutationVariables>;

/**
 * __useUpdateCarMutation__
 *
 * To run a mutation, you first call `useUpdateCarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCarMutation, { data, loading, error }] = useUpdateCarMutation({
 *   variables: {
 *      id: // value for 'id'
 *      licencePlate: // value for 'licencePlate'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateCarMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCarMutation, UpdateCarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCarMutation, UpdateCarMutationVariables>(UpdateCarDocument, options);
      }
export type UpdateCarMutationHookResult = ReturnType<typeof useUpdateCarMutation>;
export type UpdateCarMutationResult = Apollo.MutationResult<UpdateCarMutation>;
export type UpdateCarMutationOptions = Apollo.BaseMutationOptions<UpdateCarMutation, UpdateCarMutationVariables>;
export const RemoveCarDocument = gql`
    mutation removeCar($id: ID!) {
  removeCar(carId: $id)
}
    `;
export type RemoveCarMutationFn = Apollo.MutationFunction<RemoveCarMutation, RemoveCarMutationVariables>;

/**
 * __useRemoveCarMutation__
 *
 * To run a mutation, you first call `useRemoveCarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCarMutation, { data, loading, error }] = useRemoveCarMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveCarMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCarMutation, RemoveCarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCarMutation, RemoveCarMutationVariables>(RemoveCarDocument, options);
      }
export type RemoveCarMutationHookResult = ReturnType<typeof useRemoveCarMutation>;
export type RemoveCarMutationResult = Apollo.MutationResult<RemoveCarMutation>;
export type RemoveCarMutationOptions = Apollo.BaseMutationOptions<RemoveCarMutation, RemoveCarMutationVariables>;
export const GetMeDocument = gql`
    query getMe {
  myUser {
    id
    name
    coin
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;