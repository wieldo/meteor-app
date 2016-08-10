
export default new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
    min: 10,
    max: 20
  },
  description: {
    type: String,
    label: 'Description',
    min: 10,
    max: 250,
    optional: true
  },
  completed: {
    type: Boolean,
    label: 'Completed',
    defaultValue: false,
    optional: true
  }
});
