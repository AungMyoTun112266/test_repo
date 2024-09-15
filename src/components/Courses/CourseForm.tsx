'use client'

import { FC } from 'react';
import InputGroup from '../FormElements/InputGroup';
import { useCourseForm } from '@/hooks/forms/userCourseForm';
import { CourseFormValues } from '@/interfaces/course.interface';
import Button from '../Buttons/Button';
import { useCreateCourseMutation } from '@/hooks/mutations/courseMutation';
import { handleError } from '@/utils/messageHandler';

const CourseForm: FC = () => {

  const { register, handleSubmit, formState: { errors }, reset,setError} = useCourseForm();

  const { mutate: createCourse } = useCreateCourseMutation();

  const onSubmit = (data: CourseFormValues) => {

    createCourse(data, {
      onSuccess: () => {
        console.log("Form data:", data);
        alert("Form submitted!");
        reset();
      },
      onError: (error) => {
        handleError<CourseFormValues>(error,setError)
      }
    });
  };

  return (
    <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-6.5">
          <InputGroup
            label="Course Name"
            type="text"
            placeholder="Enter Course Name"
            customClasses="mb-4.5"
            {...register('courseName')}
            error={errors.courseName?.message}
          />

          <InputGroup
            label="Description"
            type="text"
            placeholder="Enter Description"
            customClasses="mb-4.5"
            {...register('description')}
            error={errors.description?.message}
          />

          <InputGroup
            label="Credits"
            type="number"
            placeholder="Enter Credits"
            customClasses="mb-4.5"
            {...register('credits')}
            error={errors.credits?.message}
          />

          <InputGroup
            label="Department"
            type="text"
            placeholder="Enter Department"
            customClasses="mb-4.5"
            {...register('department')}
            error={errors.department?.message}
          />

            <div className="flex justify-center items-center mt-6 space-x-4">
              <Button type="submit" variant="outlined" size="large" >Create Course</Button>
              <Button type="button" variant="outlined" size="large" >Cancel</Button>         
            </div>


        </div>
      </form>
    </div>
  );
};

export default CourseForm;
