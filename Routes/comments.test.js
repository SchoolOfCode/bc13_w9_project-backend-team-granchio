import {expect, test} from '@jest/globals'
import supertest from 'supertest'
import {app} from '../app'
const request = supertest(app)

test('Test response status of post comment', async function() {
    const response = await request
    .post('/api/comments')
    .send({post_id: 1,comment_content: '1st test comment'})
    .set('content-type', 'application/json');
    expect(response.status).toBe(200)
    })

test('Test response body', async function() {
    const response = await request
    .post('/api/comments')
    .send({post_id: 1,comment_content: '2nd test comment'})
    .set('content-type', 'application/json');
    expect(response.body).toStrictEqual({
        success: true,
        payload: expect.any(Object)
    })
})

