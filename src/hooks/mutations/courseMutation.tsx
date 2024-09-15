import { useMutation } from '@tanstack/react-query';
import { createCourse } from '@/api/courseApi';
import { CourseFormValues } from '@/interfaces/course.interface';


// export const useCreateCourseMutation  = ():UseMutationResult<void, Error, CourseFormValues>  => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         {
//             mutationFn:(input: CourseFormValues) => createCourse(input),
//             onSettled: (data, error, variables, context) => {
//                 console.log("Mutation settled");
//                 if (error) {
//                     console.error("Error during mutation:", error);
//                 } else {
//                     console.log("Mutation succeeded with data:", data);
//                 }
//                 queryClient.invalidateQueries({queryKey:['groups']});
//             },
//         }
//     )
// };

export const useCreateCourseMutation = () => {
    return useMutation({
      mutationFn:(input: CourseFormValues) => createCourse(input)
    });
  };
