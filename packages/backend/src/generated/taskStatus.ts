/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * サンプルAPI
 * サンプルのAPI
 * OpenAPI spec version: 1.0
 */

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const TaskStatus = {
  todo: "todo",
  "in-progress": "in-progress",
  "in-review": "in-review",
  done: "done",
} as const;