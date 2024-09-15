// src/hooks/forms/userCourseForm.ts
import {useForm, UseFormReturn } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CourseFormValues } from '@/interfaces/course.interface';
import { courseValidationSchema } from '@/utils/validation/courseValidation';

export const useCourseForm = (): UseFormReturn<CourseFormValues> => {
  return useForm<CourseFormValues>({
    resolver: yupResolver(courseValidationSchema),
    defaultValues: {
      courseName: '',
      description: '',
      credits: 0,
      department: '',
    },
  });
};
