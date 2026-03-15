export default function Button() {
   
    // Form Submit Handler
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    }
      
    // Text Input Change Handler
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Input changed: ", e.target.value);
    
    }

    // File Input Change Handler
    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            console.log("File selected: ", e.target.files[0].name);
        }   
    }

    // Select Dropdown Change Handler
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("Selected option: ", e.target.value);
    }
    
    // Textarea Change Handler
    const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log("Textarea changed: ", e.target.value);
    }
    
    // Button Click Handler
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Button clicked");
        console.log("Mouse position:", e.clientX, e.clientY);
    }
    

  
    return (
        <div>
            <form onSubmit={handleSubmit} >
           
                {/* Text Input */}
                 <input type="text" onChange={handleChange} />

                {/* File Input */}
                <div style={{marginBottom: '15px'}}>
                    <label htmlFor="fileInput">File Upload: </label>
                    <input 
                        id="fileInput"
                        type="file" 
                        accept="image/*" 
                        onChange={handleFile}
                        style={{width: '100%'}}
                    />
                </div>

                {/* Select Dropdown */}
                <div style={{marginBottom: '15px'}}>
                    <label htmlFor="mySelect">Select Option: </label>
                    <select 
                        id="mySelect" 
                        onChange={handleSelect}
                        style={{width: '100%', padding: '8px'}}
                    >
                        <option value="">Choose...</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>

                {/* Textarea */}
                <div style={{marginBottom: '15px'}}>
                    <label htmlFor="mytext">Textarea: </label>
                    <textarea 
                        id="mytext" 
                        onChange={handleTextArea}
                        placeholder="Type something..."
                        rows={3}
                        style={{width: '100%', padding: '8px', boxSizing: 'border-box'}}
                    ></textarea>
                </div>
                
                 <button onClick={handleClick} type="submit" style={{marginBottom: '15px'}} >
                        Click
                 </button>
            </form>

        

            
        </div>
    )
}