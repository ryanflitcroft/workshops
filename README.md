# NAME OF PROJECT

## Project Objectives

```zsh
git checkout -b workOnANewBranch
```

* Essential Goals:

  * On the /workshops page load, fetch the workshops (with their participants) from supabase and render them to the page. Participants should be listed as well.
  
  * On clicking a participant, delete it from supabase. Clear out all workshops from the DOM, refetch, and render them again.
  
  * On the /create page, on load, fetch workshops. Use these workshops to create the dropdown to let the user attach a participant to a workshop.

  * On the /create page, on submit, create a participant. The form should include a name for the participant and a dropdown for the workshop (from the fetched workshops in supabase).

* Stretch Goals:

  *

### HTML SETUP

**workshop**:

* workshop-section:

  * 1 container element, will be created dynamically to for each workshop.

  * workshop container should include  1 text element for workshop.name, 1 container element for workshop participants, 1 text element for each workshop/participant.name, *stretch - workshop.image element*, elements created dynamically.

```html
<section id="workshop-section">
  <!-- 
  <article>
    <h2>workshop.name</h2>
    <img src="workshop.image"> --stretch
    <div>
      <span>participant.name</span>
    </div>
  </article>
  -->
</section>
```

* control-section:

  * 2 button elements, for redirect to ../join or ../host

```html
<section class="control-section">
  <button id="join-button">Join</button>
  <button id="host-button">Host</button>
</section>
```

**join**:

* form-section:

  * 1 form element
  
  * 1 text input element for participant.name
  
  * 1 select element, with option elements created dynamically for each workshop.name, 1 button element to submit form data to Supabase.

```html
<section>
  <form id="join-form">
    <label for="participant-name">Participant:</label>
    <input type="text" name="participant-name" placeholder="Participant Name" required>
    <label for="workshop-select">Workshop:</label>
    <select name="workshop-select" id="workshop-select" required>
      <!-- 
      <option value="workshop.id">workshop.name</option>
      -->
    </select>
    <button type="submit" form="join-form" value="host workshop">Join Workshop</button>
  </form>
</section>
```

**host**:

* form-section:

  * 1 form element
  
  * 2 text input element for host.name, workshop.name

```html
<section>
  <section>
  <form id="host-form">
    <label for="host-name">Hosted by:</label>
    <input type="text" name="host-name" placeholder="Host Name" required>
    <label for="workshop-name">Workshop:</label>
    <input type="text" name="workshop-name" placeholder="Workshop Name" required>
    <button type="submit" form="host-form" value="host workshop">Host Workshop</button>
  </form>
</section>
```

### JS SETUP

1. Grab essential DOM elements:

**workshop**:

* ```const workshopSection = document.querySelector('#workshop-section');```

* ```const joinButton = document.querySelector('#join-button');```

* ```const hostButton = document.querySelector('#host-button');```

**join**:

* ```const joinForm = document.querySelector('#join-form');```

* ```const workshopSelect = document.querySelector('#workshop-select');```

**host**:

* ```const hostForm = document.querySelector('#host-form');```

1. addEventListener for:

    * window

    * joinButton

    * hostButton

    * joinForm

    * hostForm

1. Write functions for:

    * renderParticipant(participant) : returns a DOM node.

    * getWorkshops() : get all participants in Supabase. (These workshops are the same for everybody in the cohort and do not 'belong' to any particular user. Your participants will show up only for you).

    * createParticipant(participant) : create participant in Supabase and attach it to a workshop.

    *deleteParticipant(id) : delete a participant in Supabase.

*note*: TDD for each pure function
