export const handleError = <TFormValues>(
    error: any,
    setError?: (name: keyof TFormValues, error: { type: string; message: string }) => void,
    setGlobalError?: (message: string) => void
  ) => {

    if (error && error.response?.data && typeof error.response.data.errors == 'object') {
      const errorMessages = error.response.data.errors;
      for (const [field, messages] of Object.entries(errorMessages)) {
        //if (Array.isArray(messages)) {
            console.log(messages)
            const abc=field as keyof TFormValues
            console.log(abc)
            setError?.(field as keyof TFormValues, {
            type: 'manual',
            message: messages as string,
          });
        //}
      }
      return;
    }
    if (error && error.response?.data && typeof error.response.data.errors === 'string') {
        alert("MY ERROR IS GONE")
      //handleMessage("error", error.response.data.errors)
    }
  } 