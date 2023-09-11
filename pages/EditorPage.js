import React from "react";
import DragDrop from "../components/DragDrop";


function EditorPage(){

    
    
    return (
        <>
        <h1 className="book_head"> add book</h1>
        <article className="book_section">
           
            <div className="book_cate">
                <div  className=" book1">
                   <p>Book</p>
                   <input type="text" placeholder="Book title" /> 
               </div>
               <div className="book1">
                   <p>Category</p>
                   <input type="text" placeholder="Category" />
               </div>    
            </div>


            <div className="book_page"> 
            <div className="book1">
                <p>Page</p>
                <input type="text" placeholder="Page"/>
            </div>

            <div className="book1">
                <p> Publication Date</p>
                <input type="text" placeholder="Publication Date"/>
            </div>

            <div className="book1">
             <p> ISBN No.</p>
             <input type="text" placeholder="ISBN No."/>
             </div>   
            </div>

            <div className="book_cate">
                  <div className="book1">
                    <p>Publisher</p>
                    <input type="text" placeholder="Publisher" /> 
                </div>
                <div className="book1">
                    <p>Price</p>
                    <input type="text" placeholder="Price" />
              </div>
               
            </div>

            <div className="textarea">
                <p>Description</p>
                <textarea name="" id=""></textarea>
            </div>
            <div className="keypoint">
                <p>Key Points</p>
                <textarea name="" id=""></textarea>
            </div>
            
        </article>
        <div className="image-section">
             <p>Images</p>

            <DragDrop />
             
        </div>
        
        </>
     );
}
 
export default EditorPage;