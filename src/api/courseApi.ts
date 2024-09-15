// src/api/courseApi.ts
import axiosInstance from './axiosInstance';
import { CourseFormValues } from '@/interfaces/course.interface';

export const createCourse = async (data: CourseFormValues) => {
  const response = await axiosInstance.post('/courses', data);
  console.log(response)
  return response.data;
};
export const getAllCourses = async () => {
  const response = await axiosInstance.get('/courses');
  return response.data;
};

