class SomeJsPhysics {
    field = null;

    initPhysics = (fieldId) => {
        this.field = document.getElementById(fieldId);

        if (!this.field) {
            throw 'Field was not found';
        }
    }
}