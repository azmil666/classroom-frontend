import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";
import { Subject } from "../types";

const subjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "A foundational course on the principles of computer science, covering topics such as algorithms, data structures, and programming concepts.",
    createdAt: "2024-01-01T00:00:00Z"
  },
  {
    id: 2,
    code: "MATH203",
    name: "Linear Algebra",
    department: "Mathematics",
    description: "An introduction to linear algebra, including vector spaces, matrices, determinants, and eigenvalues.",
    createdAt: "2024-01-01T00:00:00Z"
  },
  {
    id: 3,
    code: "PHYS101",
    name: "General Physics I",
    department: "Physics",
    description: "A comprehensive introduction to classical mechanics, including kinematics, Newton's laws, energy, and momentum.",
    createdAt: "2024-01-01T00:00:00Z"
  }
];

export const dataProvider : DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({ resource }:
  GetListParams) : Promise<GetListResponse<TData>> => {
    if(resource !== 'subjects') return { data: [] as TData[], total: 0 };

    return {
      data: subjects as unknown as TData[],
      total: subjects.length,
    }

  },

  getOne: async () => {throw new Error('This function is not present in mock') },
  create: async () => {throw new Error('This function is not present in mock') },
  update: async () => {throw new Error('This function is not present in mock') },
  deleteOne: async () => {throw new Error('This function is not present in mock') },

  getApiUrl: () => '',
}
