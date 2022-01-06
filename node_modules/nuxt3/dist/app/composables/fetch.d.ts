import type { FetchOptions, FetchRequest } from 'ohmyfetch';
import type { TypedInternalResponse } from '@nuxt/nitro';
import type { AsyncDataOptions, _Transform, KeyOfRes } from './asyncData';
export declare type FetchResult<ReqT extends FetchRequest> = TypedInternalResponse<ReqT, unknown>;
export declare type UseFetchOptions<DataT, Transform extends _Transform<DataT, any> = _Transform<DataT, DataT>, PickKeys extends KeyOfRes<Transform> = KeyOfRes<Transform>> = AsyncDataOptions<DataT, Transform, PickKeys> & FetchOptions & {
    key?: string;
};
export declare function useFetch<ReqT extends string = string, ResT = FetchResult<ReqT>, Transform extends (res: ResT) => any = (res: ResT) => ResT, PickKeys extends KeyOfRes<Transform> = KeyOfRes<Transform>>(url: ReqT, opts?: UseFetchOptions<ResT, Transform, PickKeys>): import("./asyncData").AsyncData<import("./asyncData").PickFrom<ReturnType<Transform>, PickKeys>>;
export declare function useLazyFetch<ReqT extends string = string, ResT = FetchResult<ReqT>, Transform extends (res: ResT) => any = (res: ResT) => ResT, PickKeys extends KeyOfRes<Transform> = KeyOfRes<Transform>>(url: ReqT, opts?: Omit<UseFetchOptions<ResT, Transform, PickKeys>, 'lazy'>): import("./asyncData").AsyncData<import("./asyncData").PickFrom<ReturnType<Transform>, PickKeys>>;
