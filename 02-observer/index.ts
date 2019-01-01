export default Promise.all([
  import('./subject-observer'),
  import('./observable-observer'),
  import('./listeners'),
]).then(([subjectObserver, observableObserver, listeners]) => {
  console.log('=== subject-observer loaded ===');
  subjectObserver.default();
  console.log('=== observable-observer loaded ===');
  observableObserver.default();
  console.log('=== listeners loaded ===');
  listeners.default();
});
