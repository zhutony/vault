import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['action', 'roleType'],
  action: '',
  roleType: '',
  reset() {
    this.set('action', '');
  },
});
