const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.src = './img/Pellet Town.png'

const playerImage = new Image()
playerImage.src = './img/playerDown.png'

// image.onload = () => {
//     c.drawImage(image, 0, 0)
//     playerImage.onload = () => {
//         c.drawImage(
//             playerImage,
//             0,  // source x
//             0,  // source y
//             playerImage.width  *2.3,  // source width
//             playerImage.height*2.3, // source height
//             canvas.width / 3.3 - playerImage.width / 4 / 2, // destination x
//             canvas.height / 2 - playerImage.height / 2, // destination y
//             playerImage.width,  // destination width
//             playerImage.height  // destination height
//         )
//     }
// }

function animate(){
    window.requestAnimationFrame(animate)
    c.drawImage(image, 0, 0)
    playerImage.onload = () => {
        c.drawImage(
            playerImage,
            0,  // source x
            0,  // source y
            playerImage.width  *2.3,  // source width
            playerImage.height*2.3, // source height
            canvas.width / 3.3 - playerImage.width / 4 / 2, // destination x
            canvas.height / 2 - playerImage.height / 2, // destination y
            playerImage.width,  // destination width
            playerImage.height  // destination height
        )
    }
}
animate()

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            console.log('presses w')
            break
        case 'a':
            console.log('presses a')
            break
        case 's':
            console.log('presses s')
            break
        case 'd':
            console.log('presses d')
            break
    }
})
