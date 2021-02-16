/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

// className={ styles.Request }
function RequestDog({ onSubmit, onChange, name, type, characteristic, method, id }) {

  return (
    <>
      <form onSubmit={onSubmit} >
        <h1>Dog Form</h1>

        <h3>Please select one</h3>
        <div>
          <input 
            id="post"
            type="radio" 
            name="method" 
            value="post"
            checked={method === 'post'}
            onChange={onChange} />
          <label htmlFor="post">Add an Dog</label>

          <input 
            type="text" 
            placeholder="Enter name" 
            name="name"
            value={name}
            onChange={onChange} />
  
          <input 
            type="text" 
            placeholder="Enter type" 
            name="type"
            value={type}
            onChange={onChange} />
  
          <input 
            type="text" 
            placeholder="Enter characteristic" 
            name="characteristic"
            value={characteristic}
            onChange={onChange} />
        </div>

        <div>
          <input 
            id="get"
            type="radio" 
            name="method" 
            value="get" 
            checked={method === 'get'}
            onChange={onChange} />
          <label htmlFor="get">Get all Dogs</label>
        </div>
        
        <div>
          <input 
            id="find"
            type="radio" 
            name="method" 
            value="find"
            checked={method === 'find'}
            onChange={onChange} />
          <label htmlFor="find">Find Dog by Id</label>

          <input 
            type="text" 
            placeholder="Enter ID of Dog" 
            name="id"
            value={id}
            onChange={onChange} />
        </div>

        <div>
          <input 
            id="put"
            type="radio" 
            name="method" 
            value="put"
            checked={method === 'put'}
            onChange={onChange} />
          <label htmlFor="put">Update dog by Id</label>

          <input 
            type="text" 
            placeholder="Enter ID of Dog" 
            name="id"
            value={id}
            onChange={onChange} />

          <br />
          <input 
            type="text" 
            placeholder="Update name" 
            name="name"
            value={name}
            onChange={onChange} />
  
          <input 
            type="text" 
            placeholder="Update type" 
            name="type"
            value={type}
            onChange={onChange} />
  
          <input 
            type="text" 
            placeholder="Update characteristic" 
            name="characteristic"
            value={characteristic}
            onChange={onChange} />
        </div>
        
        <div>
          <input 
            id="delete"
            type="radio" 
            name="method" 
            value="delete"
            checked={method === 'delete'}
            onChange={onChange} />
          <label htmlFor="delete">Delete Dog by Id</label>

          <input 
            type="text" 
            placeholder="Enter ID of Dog" 
            name="id"
            value={id}
            onChange={onChange} />
        </div>
  
        <button>Submit</button>
  
      </form>
    </>
  );
}
RequestDog.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  characteristic: PropTypes.string,
  method: PropTypes.string,
  id: PropTypes.string
};
export default RequestDog;
