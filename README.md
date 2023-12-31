# portfolio Project 2

## Viewport image.

### The webpage restrain a page, constructed by HTML, CSS and JavaScript. 

### The website is made for store data. In this  case, will store all expenses it will be added in table. It has been used LocalStorage to store data. There is a table to represent the data in order.  

![alt text](assets/images/mainViewPort.png)

## First section of  webpage

It's assembled by two part;

1. Header, contain a title name that satisfies own goal "expense tracker"
2. There is input options, specified for ectual user;
      1. Name.
      2. Date of expenses.
      3. Type. there are two options; Cash or Credit-card.
      4. Amount spended.
   
![alt text](assets/images/first-section1.png)

## Second section of  webpage

It's assembled by three part;

1. Contain "Add Expense" button to add records of expenses in the table.
2. "Delete all" button to delete all rows.
3. The table, contain;
       1. Name.
       2. Date.
       3. Type.
       4. Amount.
       5. Delete button. It is for delete a row data, needs permission before action.
       
![alt text](assets/images/section2.png)

![alt text](assets/images/fullscreen.png)

# Validator Testing

1. HTML:
   No errors were returned when passing through the official W3C validator.

2. CSS:
   No errors were found when passing through the official (Jigsaw) validator.

3. JSHint JavaScript Validator: No errors but warnings were found when passing through the official (JSHint) validator.

4. Accessibility

![alt text](assets/images/Accessibility-image.png)

# deployment

The live link can be found here - https://studentofcodeinstitute.github.io/expense-tracker/

# Credits

Debugging can be divided in five parts;

1. Conclusion to onclick function.
2. Conclusion to row replacement after delete, assisted by Mentor.
    idea has taken from different website but the main one: https://www.w3schools.com/jsref/coll_table_rows.asp
3. Conclusion of localStorage, assisted by Mentor.
4. Conclusion of delete all rows, assisted by Mentor.
5. Conclusion of delete a single row, assisted by Tutor.
     idea has taken from this code: 
     // add an event listener to the table row to remove it on click
     tr.addEventListener("click", function() {
     // remove the item from local storage
     let items = JSON.parse(localStorage.getItem("items"));
     let index = items.indexOf(item);
     if (index > -1) {
     items.splice(index, 1);
     }
     localStorage.setItem("items", JSON.stringify(items));
     // remove the table row from the DOM
     this.remove();
     });

Checked by Tutor.


# Media
The Idea has taken from a video: 

https://youtu.be/RYE0QQKJI9o

 # content

Coding idea taken from:
https://stackoverflow.com/questions/13049268/populate-table-using-submited-form-javascript

LocalStorage idea taken from:
https://www.w3schools.com/jsref/met_storage_setitem.asp

Delete rows:
https://stackoverflow.com/search?q=how++delete+inside+table+javascript
