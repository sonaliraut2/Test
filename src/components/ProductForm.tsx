import React, { useRef, useState } from "react";
import './ProductForm.css';

interface ProductProps {
    addHandler : (title:string, price: number, image: string, description:string) => void;
}

const ProductForm:React.FC<ProductProps> = (props) => {
    let error = {
        titleError: "",
        priceError: "",
        descriptionError: ""
    };

    const[isValid, setIsValid] = useState(false);
    const [errors, setError] = useState(error);

    const inputTitleRef = useRef<HTMLInputElement>(null);
    const inputPriceRef = useRef<HTMLInputElement>(null);
    const textDescriptionRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        const enteredTitle = inputTitleRef.current!.value;
        const enteredPrice = Number(inputPriceRef.current!.value);
        const enteredDescription = textDescriptionRef.current!.value;
        
        if(enteredTitle.length < 1) {
            console.log(errors);
            setError(prevError => {
                return { 
                  ...prevError, 
                  titleError: "Title is required" 
                }
              });
            setIsValid(false);
        }
        else if(!Number(enteredPrice)) {
            console.log(errors);
            setError(prevError => {
                return { 
                  ...prevError, 
                  priceError: "Price is required and it should be number",
                  titleError: "", 
                }
              });
            setIsValid(false);
        }

        else if(enteredDescription.length < 1) {
            setError(prevError => {
                return { 
                  ...prevError, 
                  descriptionError: "Description is required.",
                  priceError: "",
                  titleError: "" 
                }
              });
            setIsValid(false);
        } else {
            setError(prevError => {
                return { 
                  ...prevError, 
                  descriptionError: "",
                  titleError: "",
                  priceError: "" 
                }
              });
            setIsValid(true);
        }
        
        if(isValid) {
            props.addHandler(enteredTitle, enteredPrice, "https://place-hold.it/300", enteredDescription);
        }
    }
    
    return (
        <>
        <p style={{marginTop:"120px", marginLeft:"190px"}}>Add new product</p>
        <form onSubmit={handleSubmit}>
            <div className="wrap"> 
                <label>Product Title</label>
                <input type="text" name="title" ref={inputTitleRef}/>
                {
                    (errors && errors.titleError) ? <p>{errors.titleError}</p> :null
                }
            </div>
            
            <div className="inner-wrap">
                <div className="wrap-item">
                    <label>Price $</label>
                    <input type="text" name="price" ref={inputPriceRef}/>
                    {
                    (errors && errors.priceError) ? <p>{errors.priceError}</p> :null
                }
                </div>
                <div className="wrap-item">
                    <label>Image Url</label>
                    <input type="text" name="image" alt="Product Image" placeholder="https://place-hold.it/300"/>
                </div>
                
            </div>
            
            <div className="wrap">
                <label>Description</label>
                <textarea name="description" ref={textDescriptionRef} >

                </textarea>
                {
                    (errors && errors.descriptionError) ? <p>{errors.descriptionError}</p> :null
                }
            </div>
            <button>
                Add
            </button>
        </form>
        <hr />
        </>
    )
}

export default ProductForm;