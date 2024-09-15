import * as yup from 'yup';

export const courseValidationSchema = yup.object().shape({
    courseName: yup.string().required('Course Name is required')
    .min(2, 'Course Name must be at least 2 characters')
    .max(100, 'Course Name must be at most 100 characters'),
    description: yup.string().required('Description is required'),
    credits: yup.number().required('Credits are required').positive('Credits must be positive'),
    department: yup.string().required('Department is required'),
});