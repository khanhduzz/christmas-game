// export type MathQuestion = {
//     text: string
//     answer: number
//   }
  
//   export function generateMath(): MathQuestion {
//     const ops = ['+', '-', '×', '÷'] as const
//     const op = ops[Math.floor(Math.random() * ops.length)]
  
//     let a = 0
//     let b = 0
//     let answer = 0
  
//     switch (op) {
//       case '+': {
//         a = rand(1, 99)
//         b = rand(1, 99)
//         answer = a + b
//         break
//       }
  
//       case '-': {
//         a = rand(1, 99)
//         b = rand(1, a)
//         answer = a - b
//         break
//       }
  
//       case '×': {
//         a = rand(2, 12)
//         b = rand(2, 12)
//         answer = a * b
//         break
//       }
  
//       case '÷': {
//         b = rand(2, 12)
//         answer = rand(2, 12)
//         a = b * answer
//         break
//       }
//     }
  
//     return {
//       text: `${a} ${op} ${b}`,
//       answer
//     }
//   }
  
//   function rand(min: number, max: number) {
//     return Math.floor(Math.random() * (max - min + 1)) + min
//   }
  

export type MathQuestion = {
  text: string
  answer: number
}

export function generateMath(): MathQuestion {
  const ops = ['+', '-', '×', '÷'] as const
  const op = ops[Math.floor(Math.random() * ops.length)]

  let a = 0
  let b = 0
  let answer = 0

  switch (op) {
    case '+': {
      a = rand(1, 49)
      b = rand(1, 49 - a) // ensure sum < 50
      answer = a + b
      break
    }

    case '-': {
      a = rand(1, 49)
      b = rand(0, a) // ensure non-negative & < 50
      answer = a - b
      break
    }

    case '×': {
      a = rand(1, 10)
      b = rand(1, 10)
      answer = a * b
      break
    }

    case '÷': {
      b = rand(1, 10)
      answer = rand(1, 10)
      a = b * answer // clean division
      break
    }
  }

  return {
    text: `${a} ${op} ${b}`,
    answer
  }
}

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
