fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    // onLeave: (origin, destination, direction) => {
    //      const section = destination.item
    //      const title = section.querySelector("h1");
    //      const tl = new TimelineMax ({delay: 0.5});
    //      tl.fromTo (title, 0.5, { y: "50", opacity= 0}, {y=0, opacity=1});

    //      if (destination.index === 1) {
    //         const image = document.querySelectorAll (".image");
    //         const reccs = document.querySelector (".reccs");

    //         tl.fromTo (image, 0.7, { x: "100%"}, { x: " -35% "}); 
    //      }
  
    // } 

    
    

});
 
// Wrap your animation code in a window.onload function to ensure that the DOM is fully loaded before executing the script
window.onload = function() {
    // Create a timeline for the typing animation
    var typingTimeline = new TimelineMax();
  
    // Define the typing animation function
    function typeText(element, text) {
      var textArray = text.split("");
      var textLength = textArray.length;
  
      // Set the initial state of the element
      element.innerHTML = "";
  
      // Add each letter to the timeline with a typing effect
      for (var i = 0; i < textLength; i++) {
        typingTimeline.to(element, 0.2, { textContent: textArray.slice(0, i + 1).join(""), ease: Linear.easeNone });
      }
    }
  
    // Select your h1, h2, and h3 elements and call the typeText function
    var h1 = document.querySelector('h1');
    var h2 = document.querySelector('h2');
    var h3 = document.querySelector('h3');
  
    typeText(h1, "Williamsburg");
    typeText(h2, "Ish's Fav Hangout Spots");
    typeText(h3, "Ish's Day Out");
  };
  
