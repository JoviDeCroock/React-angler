# React-angler

Personally i love functionally approaching problems, that's why i challenged myself to make this little library. This was a good introduction to TypeScript aswell.
Enjoy!

## Supported hoooks

### useComponentSize

Given a ref, this will keep you updated with the height and width of the component.


### useWindowSize

When called will keep you updated with the height and width of the window.


### useLifecycles

You can provide your lifecycles to this method, these lifecycles being `onMount onUpdate onUnmount` with a function, then this function will be called.


### useDidMount

Normal lifecycle way.


### useDidUnmount

Normal lifecycle way.


### useDidUpdate

Normal lifecycle way.


### usePreviousValue

I like this one, given a value it will always return the previous instance.

We can for example implement the classic componentDidUpdate like this:

```javascript
const Hello = (props) => {
  const { id, name } = props;
  const prevProps = usePreviousValue(props);
  useLifecycles({
    didMount: () => console.log(id, ' Mounted'),
    didUnmount: () => console.log(id, ' Unmount'),
    didUpdate: () => {
      console.groupCollapsed(id);
      console.log('PREV', prevProps);
      console.log('NEXT', props);
      console.log('Update');
      console.groupEnd();
    },
  });

  return <p>Hi {name}</p>;
};
```


### useDocumentTitle

Given a title, this will update the document title.


### useArray

Given an initialValue (array), this will return an object with:

- add, you can pass an element to add to the array.
- clear, makes the array empty.
- remove, you can use this to manually provide a function to remove an element, bearing in mind that you should return a new array without that value.
- removeByElement, pass in an element and it will be removed
- removeByIndex, pass in an index and it will be removed.
- value, the current value
- setValue, when you want to change it yourself.


### useCounter

Given an initialValue (number) and optional options (step, this defaults to 1) this will return you:
- increase, increases value by step
- decrease, decreases value by step
- value, the current value
- setValue, when you want to change it yourself.


### useMap

TODO

### useInput

TODO

### useState

TODO

### useToggle

TODO

### useTitle

Given a string, this will update the title in your document.


### useNetworkStatus

This will keep you updated about the current networkStatus (returning a boolean, true meaning online false meaning offline).
