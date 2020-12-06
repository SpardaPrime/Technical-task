import {load,add} from './action';

describe('actions',()=>{
    test('load action',()=>{
        expect(load('test')).toEqual({type:'LOAD',data:'test'});
    });
    test('add action',()=>{
        expect(add('test')).toEqual({type:'ADD',user:'test'});
    });
})