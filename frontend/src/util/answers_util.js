export const fetchAnswers = () => {
    return axios.get('api/users', userData)
}
  
export const updateAnswers = (data) => {
    return axios.patch(`/api/users/${data.id}`, data.data)
}