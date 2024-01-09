import {Service} from 'node-windows'

const svc = new Service({
    name: 'NZXT ... Web Integration',
    description: '',
    script: './index.js'
})

svc.on('install', () => {
    svc.start()
})

svc.install()