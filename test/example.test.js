// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderParticipant } from '../render-utils.js';

const test = QUnit.test;

test('renderParticipant should take in an object and return a span element with a class equal to participant, and textContent of the value of the name property', (expect) => {
    //Arrange 
    // Set up your arguments and expectations
    const expected = '<span class="participant">Ryan</span>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderParticipant({ name: 'Ryan' });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'this test proves that the function returns a span with a class of participant and textContent of Ryan');
});
