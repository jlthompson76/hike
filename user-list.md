### Create a user list using arrays & loops

In this exercise we will create a visual list of users who are active on our Hike website. User names and picture files will be stored in arrays, so later we easily can functionality to add and remove people. Further on in the course, we will store data in a _database_ instead of an array, which can preserve data even if the server fails or gets turned off. You might think of a database as a fancier version of an array or object!

!(./images/users/userList%mockup2.png)

1. Using your Hike! web page as a model, create a new HTML file that repeats the same navigation bar at the top. To make things easier, put your new file into the same folder where you stored the original Hike web page.

2. Add a paragraph saying "Connect with other members to plan your hike!". Make it horizontally-centered; you can use `text-align:center;` in your CSS. See the mockup to see how it will look.

3. Now create an array to store usernames. You can use this list or make up your own: "Natasha Franklin", "John Christopher", "Isabella Garcia", "Jasen Arbalast", "Sherwin Johnson."

4. Make a second array to store the _filenames_ of the picture files. Use the filenames of the picture files attached to this exercise. Each item in this array should be a complete filename (e.g. "User3.png").

5. In your project folder, create a subfolder called "userPhotos" or similar. Download the five user pictures into that folder.

6. To make the list of users display in your web page, you will need to iterate through your arrays, adding a picture, a name, and a sequence of HTML code for _each user_. To get a sense of what is needed, try displaying just ONE picture with ONE name under it on your page. Don't use any loops or arrays yet; just get it working using HTML and CSS. Do this step entirely inside your HTML (not in JavaScript).

7. To achieve the look in the mockup, put the picture and username inside a `div` element, give it a background color of `#dfd7c7`, a 10-pixel border of the same color, `border-radius` of 10%, and `margin` of 10 pixels. Also, give the image that is _inside_ the div a separate border radius of 5% (you could use a CSS [descendant selector](https://www.w3schools.com/css/css_combinators.asp) so you don't select _other_ images on the page).

8. Create a div or paragraph element with ID "display" or similar, and place it in your web page after the paragraph in step #2 above. In your CSS you can make the element with that ID into a [flexbox container](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), and justify the content in the center. That way the user images will be centered on the page.

9. Now you will probably need to create a new array, which starts out empty, and also an empty string. However, there are different ways to complete this assignment, so feel free to try a different approach if you prefer.

10. Next comes a tricky part: create a loop that iterates through the picture-filenames array, adds the HTML needed to display each picture, and puts the completed strings _into the empty array_ from step #9. 

    Each item in this new array will be a _string_ with some HTML at the beginning, such as `"<img src="`, the picture filename, and more HTML at the end (you will need to _close_ the image tag, for example).  This sounds like a job for concatenation!

11. At this point you may want to create a second loop, which will iterate through your new array and wrap the images with any other necessary HTML and add in the usernames.  This is a confusing process!  **Take it slow.** 

    You will need to add some HTML that creates an opening `div` tag, an image element from step #10, a username from step #3, and some more HTML to close your `div`.  

    At some point, delete the test image and username created in step #6 so you don't get confused.

12. Finally, use `document.getElementById("userList").innerHTML` to place your completed string into the document.  Don't forget to add an element to your HTML with a matching ID! 

    Congratulations on making a user list!
