export const validations = {
    name: {
        required: true,
        maxLength: 20,
        pattern: /^[A-Za-z]+$/i
    },
    message: {
        required: true,
    }
}