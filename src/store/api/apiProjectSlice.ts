import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Project } from '../../models/models';
import { BASE_URL } from "../../utils/constants";

export const apiProjectSlice = createApi({
  reducerPath: 'apiProject',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
  }),
  tagTypes: ['Project'],
  endpoints: builder => ({
    
    getProjects: builder.query<Project[], void>({
      query: () => ({
        url: '/projects'
      }),
      providesTags: () => ['Project'],
    }),
    
    postProject: builder.mutation<Project, Partial<Project>>({
      query: (project) => ({
        url: '/projects',
        method: 'POST',
        body: project,
      }),
      invalidatesTags: ['Project'],
    }),
    
    updateProject: builder.mutation<Project, { projectID: string | null; project: Partial<Project> }>({
      query: ({projectID, project}) => ({
        url: `/projects/${projectID}`,
        method: 'PATCH',

        body: project,
      }),
      invalidatesTags: ['Project'],
    }),
    
    deleteProject: builder.mutation<Project, Partial<Project>>({
      query: (project) => ({
        url: `/projects/${project.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Project'],
    }),

  })
});

export const {useGetProjectsQuery, usePostProjectMutation, useUpdateProjectMutation, useDeleteProjectMutation} = apiProjectSlice;