import { toast } from 'react-hot-toast'

export const toastService = {
  success: (content: string) => {
    return toast.success(content)
  },

  error: (content: string) => {
    return toast.error(content)
  },

  loading: (content: string) => {
    return toast.loading(content)
  },

  dismiss: () => {
    toast.dismiss()
  },

  promise: (
    promise: Promise<any>,
    content: string,
    success: string,
    error: string,
  ) => {
    toast.promise(promise, {
      loading: content,
      success,
      error,
    })
  },
}
