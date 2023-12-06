// https://github.com/sudheerj/javascript-interview-questions#how-do-you-create-your-own-bind-method-using-either-call-or-apply-method
export function myBind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}
