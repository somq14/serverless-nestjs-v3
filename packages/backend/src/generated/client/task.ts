/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * サンプルAPI
 * サンプルのAPI
 * OpenAPI spec version: 1.0
 */
import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";
import type { ListTasks200, ListTasksParams, Task, TaskBody } from "..";

/**
 * タスクを一覧するAPIです。
 * @summary タスク一覧API
 */
export const listTasks = <TData = AxiosResponse<ListTasks200>>(
  params?: ListTasksParams,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/tasks`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};
/**
 * タスクを作成するAPIです。
 * @summary タスク作成API
 */
export const postTask = <TData = AxiosResponse<Task>>(
  taskBody: TaskBody,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.post(`/tasks`, taskBody, options);
};
/**
 * タスクを取得するAPIです。
 * @summary タスク取得API
 */
export const getTask = <TData = AxiosResponse<Task>>(
  taskId: string,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.get(`/tasks/${taskId}`, options);
};
/**
 * タスクを削除するAPIです。
 * @summary タスク削除API
 */
export const deleteTask = <TData = AxiosResponse<void>>(
  taskId: string,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.delete(`/tasks/${taskId}`, options);
};
/**
 * タスクを更新するAPIです。
 * @summary タスク更新API
 */
export const putTask = <TData = AxiosResponse<Task>>(
  taskId: string,
  taskBody: TaskBody,
  options?: AxiosRequestConfig
): Promise<TData> => {
  return axios.put(`/tasks/${taskId}`, taskBody, options);
};
export type ListTasksResult = AxiosResponse<ListTasks200>;
export type PostTaskResult = AxiosResponse<Task>;
export type GetTaskResult = AxiosResponse<Task>;
export type DeleteTaskResult = AxiosResponse<void>;
export type PutTaskResult = AxiosResponse<Task>;
