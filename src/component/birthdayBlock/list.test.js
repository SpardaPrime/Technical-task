import List from './list';
import renderer from 'react-test-renderer';

describe('component list ',()=>{

    test('test 1',()=>{
            const newusers = [];
            let componnet = renderer.create(<List users={newusers}/>).toJSON();
            expect(componnet).toBeNull();
    });

});
