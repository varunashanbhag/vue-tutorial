export const lengthMixin = {
	computed: {
        length() {
            return this.lastName + ' (' + this.lastName.length + ')';
        }
    },
}