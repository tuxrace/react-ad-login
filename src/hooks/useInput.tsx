import React, { useEffect } from 'react'

/**
 * This hook will clear invalid messages of inputs when user types again.
 */
const useInput = () => {
    useEffect(() => {
        var inputs = document.querySelectorAll('input');
        inputs.forEach(function (input) {
          input.addEventListener('input', function () {
              // remove invalid when typing
              input.setCustomValidity("");
          })
        })
      }, []);
}

export default useInput;