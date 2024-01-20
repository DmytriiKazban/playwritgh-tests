import { test, expect} from '@playwright/test';

test("Post request", async ({request}) => {
    const createdUser = await request.post(`https://reqres.in/api/users`, {
        data: {
            "name": "Dmytrii",
            "job": "QA"
        }
    })
    console.log(await createdUser.json())

    expect(createdUser.ok()).toBeTruthy()
})


test("Put request", async ({request}) => {
    const updatedUser = await request.put(`https://reqres.in/api/users/841`, {
        data: {
            "name": "Ivan",
            "job": "QA automation"
        }
    })
    console.log(await updatedUser.json())
    const updatedUserBody = await updatedUser.json()
    expect(await updatedUserBody["name"]).toEqual("Ivan")
    expect(await updatedUserBody["job"]).toEqual("QA automation")
})

test("Patch request", async ({request}) => {
    const patchedUser = await request.patch(`https://reqres.in/api/users/841`, {
        data: {
            "age": "27",
            "name": "Andrew",
            "job": "QA automation"
        }
    })
    const patchedUserBody = await patchedUser.json()
    expect (await patchedUserBody["age"]).toEqual("27")
    expect (await patchedUserBody["name"]).toEqual("Andrew")
})

test("Delete request", async ({request}) => {
    const deletedUser = await request.delete(`https://reqres.in/api/users/841`)

    expect (deletedUser.ok()).toBeTruthy
})

