import { useEffect } from 'react';

// TODO: test and improve.
const TAG_PROPERTIES = {
  CSS_TEXT: "cssText",
  INNER_HTML: "innerHTML",
};

const setAttributes = (node, tag) => {
  for (const attribute in tag) {
    if (tag.hasOwnProperty(attribute)) {
        if (attribute === TAG_PROPERTIES.INNER_HTML) {
            node.innerHTML = tag.innerHTML;
        } else if (attribute === TAG_PROPERTIES.CSS_TEXT) {
            if (node.styleSheet) {
                node.styleSheet.cssText = tag.cssText;
            } else {
                node.appendChild(document.createTextNode(tag.cssText));
            }
        } else {
            const value = typeof tag[attribute] === "undefined"
                ? ""
                : tag[attribute];
            node.setAttribute(attribute, value);
        }
    }
  }
}

export default (metaTags = []) => {
  useEffect(() => {
    const headElement = document.head || document.querySelector('head');
    const tagsToRemove = Array.prototype.slice.call(document.querySelectorAll('meta')) || [];
    const tagsToUpdate = [];
    const tagsToCreate = [];
    metaTags.forEach((tag) => {
      // Does provided tag exist in our existing tags?
      const found = tagsToRemove.find(node => {
        const name = node.getAttribute('name') || node.getAttribute('property');
        return name === (tag.name || tag.property);
      });
      // We found it
      if (found) {
        // Remove from toRemove since this needs updating.
        const index = tagsToRemove.indexOf(found);
        if (index > -1) {
          tagsToRemove.splice(index, 1);
        }
        // set attributes
        setAttributes(found, tag);
        tagsToUpdate.push(found);
        return;
      }
      // Not in old tags so it's a new element.
      const newElement = document.createElement('meta');
      setAttributes(newElement, tag);
      let indexToDelete;

      if (tagsToRemove.some((tagToRemove, i) => {
        indexToDelete = i;
        return newElement.isEqualNode(tagToRemove);
      })) {
        tagsToRemove.splice(indexToDelete, 1);
      } else {
        tagsToCreate.push(newElement);
      }

      tagsToRemove.forEach(tagToRemove => tagToRemove.parentNode.removeChild(tagToRemove));
      tagsToCreate.forEach(tagToAppend => headElement.appendChild(tagToAppend));

      return {
        newTags: tagsToCreate,
        removedTags: tagsToRemove,
        updatedTags: tagsToUpdate,
      }
    });
  }, [metaTags])
}
