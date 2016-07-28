/*
export default new SimpleSchema({
    email: {
        type: String,
        label: 'Email',
        // pass only emails
        regEx: SimpleSchema.RegEx.Email,
        autoformly: {
            // add translation
            transformers: {
                translate: 'auth.email'
            },
            validation: {
                // add validation messages
                messages: {
                    // not defined
                    required($viewValue, $modelValue, scope) {
                        return `${scope.to.label} is required`;
                    },
                    // not email
                    email($viewValue, $modelValue) {
                        return `is invalid`;
                    }
                }
            }
        }
    },
    password: {
        type: String,
        label: 'Password',
        // min length
        min: 6,
        autoformly: {
            // set as password
            templateOptions: {
                type: 'password'
            },
            // add translation
            transformers: {
                translate: 'auth.password'
            },
            validation: {
                // set validation messages
                messages: {
                  // for not defined
                  required($viewValue, $modelValue, scope) {
                      return `${scope.to.label} is required`;
                  },
                  // for wrong length
                  minlength($viewValue, $modelValue, scope) {
                      return `${scope.to.label} must be longer than 5, now ${$viewValue.length}`;
                  }
                }
            }
        }
    },
    confirmPassword: {
        type: String,
        label: 'Confirm password',
        // min length
        min: 6,
        // compare to password
        custom: function custom() {
            if (this.value !== this.field('password').value) {
                return 'match';
            }
        },
        autoformly: {
            // set as password
            templateOptions: {
                type: 'password'
            },
            transformers: {
                // add translation
                translate: 'auth.repeat_password',
                // add validators
                validators: {
                    // match with password
                    match: 'password'
                }
            },
            validation: {
                // add validation messages
                messages: {
                    // not defined
                    required($viewValue, $modelValue, scope) {
                        return `${scope.to.label} is required`;
                    },
                    // mismatched
                    match() {
                        return 'Mismatch';
                    }
                }
            }
        }
    }
});

*/
