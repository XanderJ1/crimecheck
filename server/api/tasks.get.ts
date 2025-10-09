export default defineEventHandler(async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return [ 
        { id: 1, title: 'Alhaji One', done: false }, 
        { id: 2, title: 'Sadick Two', done: false } 
    ]
})