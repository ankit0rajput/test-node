import { Form, useActionData, useNavigate, useNavigation, useRouteLoaderData } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const navigation = useNavigation()
  function cancelHandler() {
    navigate('..');
  }


  const data = useActionData()
  console.log('asd',data,data?.errors,Object.values(data.errors))
  return (
    <Form method='post' className={classes.form}>
      {data && data.errors && (
        <ul>
          
          {Object.values(data.errors).map((err)=>{
            return <li key={err}>{err}</li>
          })}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event.title}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event.image}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event.date}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event.description}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>{navigation.state == 'submitting' ? 'Submitting' : 'save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;
