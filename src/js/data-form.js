const control = [
    {
        element: 'input',
        pattern: /^[^0-9][A-ZА-Я]+$/gi,
        label: 'First name',
        attributes: {
            type: "text",
            id: "firstName",
            placeholder: "Enter name"
        },
    },
    {
        element: 'input',
        pattern: /^[^0-9][A-ZА-Я]+$/gi,
        label: 'Last name',
        attributes: {
            type: "text",
            id: "lastName",
            placeholder: "Enter last name"
        },

    },
    {
        element: 'input',
        pattern: /^\d{1,2}$/,
        label: 'Age',
        attributes: {
            "type": 'number',
            id: "age",
            min: "0",
            max: "99",
            onkeypress: "return false",
            placeholder: "Enter age"
        },

    },

    {
        element: 'input',
        label: 'E-mail',
        pattern: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i,
        attributes: {
            type: "text",
            id: "email",
            placeholder: "Enter e-mail"
        },

    },
    {
        element: 'input',
        pattern: /^(\+)\d{12}$/,
        label: 'Phone number',
        attributes: {
            type: "text",
            id: "phone",
            placeholder: "Enter phone number"
        },
    },
    {
        element: 'input',
        pattern: /^\d{16}$/gi,
        label: 'Card number',
        attributes: {
            type: "text",
            id: "card",
            placeholder: "Enter card number"
        },
    },
    {
        element: 'input',
        pattern: /^\w{8,}$/i,
        label: 'Password',
        attributes:
        {
            type: "password",
            id: "pass",
            placeholder: "Enter password"
        },
    },
    {
        element: 'input',
        attributes:
        {
            type: "button",
            value: "Save",
            id: "save"
        },

    },
    {
        element: 'input',
        attributes:
        {
            type: "button",
            value: "Cancel",
            id: "cancel"
        },
    },
]