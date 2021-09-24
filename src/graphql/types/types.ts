export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};





export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Complex = {
  name: Scalars['String'];
  location: Scalars['String'];
  tasks?: Maybe<Array<Maybe<Task>>>;
};

export type Date = {
  month?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type DateRange = {
  from?: Maybe<Date>;
  to?: Maybe<Date>;
};

export type Job = {
  title: Scalars['String'];
  company: Scalars['String'];
  location: Location;
  dates: Array<DateRange>;
  achievements: Array<Scalars['String']>;
};

export type Location = {
  city: Scalars['String'];
  state: State;
};

export type Mutation = {
  addProvider?: Maybe<Provider>;
};


export type MutationAddProviderArgs = {
  provider: NewProvider;
};

export type NewProvider = {
  name: Scalars['String'];
  location: Scalars['String'];
};

export type Provider = {
  id: Scalars['Int'];
  name: Scalars['String'];
  location: Scalars['String'];
  rating?: Maybe<Scalars['String']>;
};

export type ProviderList = {
  providers: Array<Provider>;
  uuid: Scalars['String'];
};

export type ProviderPrice = {
  id: Scalars['Int'];
  price: Scalars['Float'];
};

export type Query = {
  skills: Array<Skill>;
  jobs: Array<Job>;
  providers: ProviderList;
  providerPrices: Array<ProviderPrice>;
  complex: Complex;
};


export type QuerySkillsArgs = {
  type?: Maybe<SkillType>;
};


export type QueryJobsArgs = {
  state?: Maybe<State>;
};


export type QueryProviderPricesArgs = {
  uuid: Scalars['String'];
};

export type Skill = {
  type: SkillType;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export enum SkillType {
  Language = 'LANGUAGE',
  UiFramework = 'UI_FRAMEWORK',
  Ui = 'UI',
  Server = 'SERVER',
  Design = 'DESIGN',
  Database = 'DATABASE',
  Testing = 'TESTING'
}

export enum State {
  Ar = 'AR',
  Co = 'CO'
}

export type Task = {
  id: Scalars['Int'];
  task: Scalars['String'];
  status: Scalars['String'];
};


export type JobsQueryVariables = Exact<{
  state?: Maybe<State>;
}>;


export type JobsQuery = { jobs: Array<(
    Pick<Job, 'title' | 'company'>
    & { location: Pick<Location, 'city' | 'state'> }
  )> };

export type ProviderPricesQueryVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type ProviderPricesQuery = { providerPrices: Array<Pick<ProviderPrice, 'id' | 'price'>> };

export type ProviderFragment = Pick<Provider, 'id' | 'name' | 'location'>;

export type ProviderListFragment = (
  Pick<ProviderList, 'uuid'>
  & { providers: Array<ProviderFragment> }
);

export type ProvidersQueryVariables = Exact<{ [key: string]: never; }>;


export type ProvidersQuery = { providers: ProviderListFragment };

export type SkillsQueryVariables = Exact<{
  type?: Maybe<SkillType>;
}>;


export type SkillsQuery = { skills: Array<Pick<Skill, 'name' | 'type'>> };
