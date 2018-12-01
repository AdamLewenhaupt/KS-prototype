import { createCourse, createStep, createTask } from '../utils/builders'

export default createCourse('Engelska', '#1DAFEB', [
  createStep(
    18, 
    'Vykort', [
      createTask('Berätta och skriv om olika miljöer', [
          'Göra någonting bra'
        ]
        ),
      createTask('Typiska aktiviterer', []),
      createTask('Läsa, förstå och skriva vykort', [])
    ]
  ),
  createStep(
    19,
    'Läsa Noveller', [
      createTask('Tillgodogöra sig innehållet i en novell', [
        'Ordinlärningsstrategier' 
      ]),
      createTask('Skriva en läslogg', [
        'Obestämd artikel',
        'Obestämd artikel interaktiv',
        'Att läsa och skriva'
      ]),
      createTask('Återberätta det du har läst och delta i samtal om litteratur med kompisar', [
        'Dåtid'
      ])
    ]
  ),
  createStep(
    20,
    'Summer Camp', [
      createTask('Förstå och tolka innehållet i engelsk text', [
        'A',
        'B'
      ]),
      createTask('Formulera dig i en broschyr om ett summer camp och kommunicera genom att beskriva och svara på frågor om ditt summer camp', [
        'A',
        'B',
        'C'
      ])
    ]
  )
])