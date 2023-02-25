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
  cancelResignation?: Maybe<Scalars['Boolean']>;
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


export type MutationCancelResignationArgs = {
  date: Scalars['DateTime'];
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
  type: ReservationType;
};


export type MutationMakeResignationArgs = {
  date: Scalars['DateTime'];
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
  reservations?: Maybe<Array<Reservation>>;
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
  freeParkingSpaces?: Maybe<Scalars['Int']>;
  gameCars: Array<GameCar>;
  level: Level;
  levels: Array<Level>;
  myReservations: Array<Reservation>;
  myResignation: Array<Resignation>;
  myUser: User;
  parkingSpace: ParkingSpace;
  reservation: Reservation;
  searchByLicencePlate: Array<Car>;
  user: User;
  users: Array<User>;
};


export type QueryFreeParkingSpacesArgs = {
  date: Scalars['DateTime'];
};


export type QueryLevelArgs = {
  id: Scalars['ID'];
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
  selectedGameCar?: Maybe<GameCar>;
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

export type GameCarsQueryVariables = Exact<{ [key: string]: never; }>;


export type GameCarsQuery = { __typename: 'Query', gameCars: Array<{ __typename: 'GameCar', id: string, name: string, price: number, image: string, ownedByMe: boolean }> };

export type MyGameCarsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyGameCarsQuery = { __typename: 'Query', myUser: { __typename: 'User', selectedGameCar?: { __typename: 'GameCar', id: string } | null, ownedGameCars: Array<{ __typename: 'GameCar', id: string, name: string, price: number, image: string }> } };

export type BuyGameCarMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BuyGameCarMutation = { __typename: 'Mutation', buyGameCar?: boolean | null };

export type SelectGameCarMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SelectGameCarMutation = { __typename: 'Mutation', selectGameCar?: boolean | null };

export type ParkingLevelsQueryVariables = Exact<{ [key: string]: never; }>;


export type ParkingLevelsQuery = { __typename: 'Query', levels: Array<{ __typename: 'Level', id: string, label: string, spaces: Array<{ __typename: 'ParkingSpace', id: string }> }> };

export type ParkingLevelQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ParkingLevelQuery = { __typename: 'Query', level: { __typename: 'Level', id: string, label: string, spaces: Array<{ __typename: 'ParkingSpace', id: string, label: string, currentStatus: ParkingSpaceStatus }> } };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename: 'Query', myUser: { __typename: 'User', id: string, name: string, coin: number, hasFixedParkingSpace: boolean } };

export type MyReservationsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyReservationsQuery = { __typename: 'Query', myReservations: Array<{ __typename: 'Reservation', id: string, date: any }> };

export type MakeReservationMutationVariables = Exact<{
  date: Scalars['DateTime'];
  type: ReservationType;
  carId: Scalars['ID'];
}>;


export type MakeReservationMutation = { __typename: 'Mutation', makeReservation: { __typename: 'Reservation', id: string, parkingSpace: { __typename: 'ParkingSpace', label: string, level: { __typename: 'Level', label: string } } } };

export type MyResignationsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyResignationsQuery = { __typename: 'Query', myResignation: Array<{ __typename: 'Resignation', id: string, date: any }> };

export type MakeResignationMutationVariables = Exact<{
  date: Scalars['DateTime'];
}>;


export type MakeResignationMutation = { __typename: 'Mutation', makeResignation: { __typename: 'Resignation', id: string } };

export type RemoveResignationMutationVariables = Exact<{
  date: Scalars['DateTime'];
}>;


export type RemoveResignationMutation = { __typename: 'Mutation', cancelResignation?: boolean | null };


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
export const GameCarsDocument = gql`
    query gameCars {
  gameCars {
    id
    name
    price
    image
    ownedByMe
  }
}
    `;

/**
 * __useGameCarsQuery__
 *
 * To run a query within a React component, call `useGameCarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGameCarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGameCarsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGameCarsQuery(baseOptions?: Apollo.QueryHookOptions<GameCarsQuery, GameCarsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GameCarsQuery, GameCarsQueryVariables>(GameCarsDocument, options);
      }
export function useGameCarsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GameCarsQuery, GameCarsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GameCarsQuery, GameCarsQueryVariables>(GameCarsDocument, options);
        }
export type GameCarsQueryHookResult = ReturnType<typeof useGameCarsQuery>;
export type GameCarsLazyQueryHookResult = ReturnType<typeof useGameCarsLazyQuery>;
export type GameCarsQueryResult = Apollo.QueryResult<GameCarsQuery, GameCarsQueryVariables>;
export const MyGameCarsDocument = gql`
    query myGameCars {
  myUser {
    selectedGameCar {
      id
    }
    ownedGameCars {
      id
      name
      price
      image
    }
  }
}
    `;

/**
 * __useMyGameCarsQuery__
 *
 * To run a query within a React component, call `useMyGameCarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyGameCarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyGameCarsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyGameCarsQuery(baseOptions?: Apollo.QueryHookOptions<MyGameCarsQuery, MyGameCarsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyGameCarsQuery, MyGameCarsQueryVariables>(MyGameCarsDocument, options);
      }
export function useMyGameCarsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyGameCarsQuery, MyGameCarsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyGameCarsQuery, MyGameCarsQueryVariables>(MyGameCarsDocument, options);
        }
export type MyGameCarsQueryHookResult = ReturnType<typeof useMyGameCarsQuery>;
export type MyGameCarsLazyQueryHookResult = ReturnType<typeof useMyGameCarsLazyQuery>;
export type MyGameCarsQueryResult = Apollo.QueryResult<MyGameCarsQuery, MyGameCarsQueryVariables>;
export const BuyGameCarDocument = gql`
    mutation buyGameCar($id: ID!) {
  buyGameCar(gameCarId: $id)
}
    `;
export type BuyGameCarMutationFn = Apollo.MutationFunction<BuyGameCarMutation, BuyGameCarMutationVariables>;

/**
 * __useBuyGameCarMutation__
 *
 * To run a mutation, you first call `useBuyGameCarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBuyGameCarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [buyGameCarMutation, { data, loading, error }] = useBuyGameCarMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBuyGameCarMutation(baseOptions?: Apollo.MutationHookOptions<BuyGameCarMutation, BuyGameCarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BuyGameCarMutation, BuyGameCarMutationVariables>(BuyGameCarDocument, options);
      }
export type BuyGameCarMutationHookResult = ReturnType<typeof useBuyGameCarMutation>;
export type BuyGameCarMutationResult = Apollo.MutationResult<BuyGameCarMutation>;
export type BuyGameCarMutationOptions = Apollo.BaseMutationOptions<BuyGameCarMutation, BuyGameCarMutationVariables>;
export const SelectGameCarDocument = gql`
    mutation selectGameCar($id: ID!) {
  selectGameCar(gameCarId: $id)
}
    `;
export type SelectGameCarMutationFn = Apollo.MutationFunction<SelectGameCarMutation, SelectGameCarMutationVariables>;

/**
 * __useSelectGameCarMutation__
 *
 * To run a mutation, you first call `useSelectGameCarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSelectGameCarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [selectGameCarMutation, { data, loading, error }] = useSelectGameCarMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSelectGameCarMutation(baseOptions?: Apollo.MutationHookOptions<SelectGameCarMutation, SelectGameCarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SelectGameCarMutation, SelectGameCarMutationVariables>(SelectGameCarDocument, options);
      }
export type SelectGameCarMutationHookResult = ReturnType<typeof useSelectGameCarMutation>;
export type SelectGameCarMutationResult = Apollo.MutationResult<SelectGameCarMutation>;
export type SelectGameCarMutationOptions = Apollo.BaseMutationOptions<SelectGameCarMutation, SelectGameCarMutationVariables>;
export const ParkingLevelsDocument = gql`
    query parkingLevels {
  levels {
    id
    label
    spaces {
      id
    }
  }
}
    `;

/**
 * __useParkingLevelsQuery__
 *
 * To run a query within a React component, call `useParkingLevelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useParkingLevelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParkingLevelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useParkingLevelsQuery(baseOptions?: Apollo.QueryHookOptions<ParkingLevelsQuery, ParkingLevelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ParkingLevelsQuery, ParkingLevelsQueryVariables>(ParkingLevelsDocument, options);
      }
export function useParkingLevelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ParkingLevelsQuery, ParkingLevelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ParkingLevelsQuery, ParkingLevelsQueryVariables>(ParkingLevelsDocument, options);
        }
export type ParkingLevelsQueryHookResult = ReturnType<typeof useParkingLevelsQuery>;
export type ParkingLevelsLazyQueryHookResult = ReturnType<typeof useParkingLevelsLazyQuery>;
export type ParkingLevelsQueryResult = Apollo.QueryResult<ParkingLevelsQuery, ParkingLevelsQueryVariables>;
export const ParkingLevelDocument = gql`
    query parkingLevel($id: ID!) {
  level(id: $id) {
    id
    label
    spaces {
      id
      label
      currentStatus
    }
  }
}
    `;

/**
 * __useParkingLevelQuery__
 *
 * To run a query within a React component, call `useParkingLevelQuery` and pass it any options that fit your needs.
 * When your component renders, `useParkingLevelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParkingLevelQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useParkingLevelQuery(baseOptions: Apollo.QueryHookOptions<ParkingLevelQuery, ParkingLevelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ParkingLevelQuery, ParkingLevelQueryVariables>(ParkingLevelDocument, options);
      }
export function useParkingLevelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ParkingLevelQuery, ParkingLevelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ParkingLevelQuery, ParkingLevelQueryVariables>(ParkingLevelDocument, options);
        }
export type ParkingLevelQueryHookResult = ReturnType<typeof useParkingLevelQuery>;
export type ParkingLevelLazyQueryHookResult = ReturnType<typeof useParkingLevelLazyQuery>;
export type ParkingLevelQueryResult = Apollo.QueryResult<ParkingLevelQuery, ParkingLevelQueryVariables>;
export const GetMeDocument = gql`
    query getMe {
  myUser {
    id
    name
    coin
    hasFixedParkingSpace
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
export const MyReservationsDocument = gql`
    query myReservations {
  myReservations {
    id
    date
  }
}
    `;

/**
 * __useMyReservationsQuery__
 *
 * To run a query within a React component, call `useMyReservationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyReservationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyReservationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyReservationsQuery(baseOptions?: Apollo.QueryHookOptions<MyReservationsQuery, MyReservationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyReservationsQuery, MyReservationsQueryVariables>(MyReservationsDocument, options);
      }
export function useMyReservationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyReservationsQuery, MyReservationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyReservationsQuery, MyReservationsQueryVariables>(MyReservationsDocument, options);
        }
export type MyReservationsQueryHookResult = ReturnType<typeof useMyReservationsQuery>;
export type MyReservationsLazyQueryHookResult = ReturnType<typeof useMyReservationsLazyQuery>;
export type MyReservationsQueryResult = Apollo.QueryResult<MyReservationsQuery, MyReservationsQueryVariables>;
export const MakeReservationDocument = gql`
    mutation makeReservation($date: DateTime!, $type: ReservationType!, $carId: ID!) {
  makeReservation(date: $date, type: $type, carId: $carId) {
    id
    parkingSpace {
      label
      level {
        label
      }
    }
  }
}
    `;
export type MakeReservationMutationFn = Apollo.MutationFunction<MakeReservationMutation, MakeReservationMutationVariables>;

/**
 * __useMakeReservationMutation__
 *
 * To run a mutation, you first call `useMakeReservationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMakeReservationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [makeReservationMutation, { data, loading, error }] = useMakeReservationMutation({
 *   variables: {
 *      date: // value for 'date'
 *      type: // value for 'type'
 *      carId: // value for 'carId'
 *   },
 * });
 */
export function useMakeReservationMutation(baseOptions?: Apollo.MutationHookOptions<MakeReservationMutation, MakeReservationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MakeReservationMutation, MakeReservationMutationVariables>(MakeReservationDocument, options);
      }
export type MakeReservationMutationHookResult = ReturnType<typeof useMakeReservationMutation>;
export type MakeReservationMutationResult = Apollo.MutationResult<MakeReservationMutation>;
export type MakeReservationMutationOptions = Apollo.BaseMutationOptions<MakeReservationMutation, MakeReservationMutationVariables>;
export const MyResignationsDocument = gql`
    query myResignations {
  myResignation {
    id
    date
  }
}
    `;

/**
 * __useMyResignationsQuery__
 *
 * To run a query within a React component, call `useMyResignationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyResignationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyResignationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyResignationsQuery(baseOptions?: Apollo.QueryHookOptions<MyResignationsQuery, MyResignationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyResignationsQuery, MyResignationsQueryVariables>(MyResignationsDocument, options);
      }
export function useMyResignationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyResignationsQuery, MyResignationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyResignationsQuery, MyResignationsQueryVariables>(MyResignationsDocument, options);
        }
export type MyResignationsQueryHookResult = ReturnType<typeof useMyResignationsQuery>;
export type MyResignationsLazyQueryHookResult = ReturnType<typeof useMyResignationsLazyQuery>;
export type MyResignationsQueryResult = Apollo.QueryResult<MyResignationsQuery, MyResignationsQueryVariables>;
export const MakeResignationDocument = gql`
    mutation makeResignation($date: DateTime!) {
  makeResignation(date: $date) {
    id
  }
}
    `;
export type MakeResignationMutationFn = Apollo.MutationFunction<MakeResignationMutation, MakeResignationMutationVariables>;

/**
 * __useMakeResignationMutation__
 *
 * To run a mutation, you first call `useMakeResignationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMakeResignationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [makeResignationMutation, { data, loading, error }] = useMakeResignationMutation({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useMakeResignationMutation(baseOptions?: Apollo.MutationHookOptions<MakeResignationMutation, MakeResignationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MakeResignationMutation, MakeResignationMutationVariables>(MakeResignationDocument, options);
      }
export type MakeResignationMutationHookResult = ReturnType<typeof useMakeResignationMutation>;
export type MakeResignationMutationResult = Apollo.MutationResult<MakeResignationMutation>;
export type MakeResignationMutationOptions = Apollo.BaseMutationOptions<MakeResignationMutation, MakeResignationMutationVariables>;
export const RemoveResignationDocument = gql`
    mutation removeResignation($date: DateTime!) {
  cancelResignation(date: $date)
}
    `;
export type RemoveResignationMutationFn = Apollo.MutationFunction<RemoveResignationMutation, RemoveResignationMutationVariables>;

/**
 * __useRemoveResignationMutation__
 *
 * To run a mutation, you first call `useRemoveResignationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveResignationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeResignationMutation, { data, loading, error }] = useRemoveResignationMutation({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useRemoveResignationMutation(baseOptions?: Apollo.MutationHookOptions<RemoveResignationMutation, RemoveResignationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveResignationMutation, RemoveResignationMutationVariables>(RemoveResignationDocument, options);
      }
export type RemoveResignationMutationHookResult = ReturnType<typeof useRemoveResignationMutation>;
export type RemoveResignationMutationResult = Apollo.MutationResult<RemoveResignationMutation>;
export type RemoveResignationMutationOptions = Apollo.BaseMutationOptions<RemoveResignationMutation, RemoveResignationMutationVariables>;