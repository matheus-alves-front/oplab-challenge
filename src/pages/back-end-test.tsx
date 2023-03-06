import { Lesson1, Lesson2, Lesson3, Lesson4 } from "@/utils/function-tests"
import { KeyboardEvent, useEffect, useState } from "react"

import styles from '../styles/back-end-test.module.scss'

export default function BackendTest() {
  const [lesson1Output, setLesson1Output] = useState([0])
  const [lesson2Output, setLesson2Output] = useState('0')
  const [lesson3Output, setLesson3Output] = useState([0])
  const [lesson4Output, setLesson4Output] = useState(0)

  return (
    <section className={styles.container}>
      <h1>Backend Test</h1>
      <div className={styles.lesson}>
        <p>1: 
          Escreva uma função f(area) que tem como entrada a área total de um quadrilátero 
          (entre 1 e 1000000, inclusive), e retorne um array de áreas dos maiores quadrados que 
          você poderia colocar dentro do quadrilátero, começando pelo maior quadrado. 
          Por exemplo: f(12) deve retornar [9, 1, 1, 1].
        </p>
        <div className={styles.lessonInput}>
            <label htmlFor="lesson1">Entrada</label>
            <input 
              type="number" 
              name="lesson1"
              onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
                const eventTarget = e.target as HTMLInputElement
                setLesson1Output(Lesson1(Number(eventTarget.value)))
              }}
            />
          <span>Saída: [{lesson1Output.join(", ").toString()}]</span>
        </div>
      </div>
      <div className={styles.lesson}>
        <p>2: 
          Define-se p como sendo um número de infinitos dígitos 
          composto pela concatenação de todos os números primos 
          (2357111317192329...). Escreva uma função f(n)que tem 
          como entrada um número inteiro n que representa um índice 
          (entre 0 e 10000) e retorne um número com os 5 próximos 
          dígitos de p, a partir do índice n. Por exemplo: f(3) deve retornar 
          71113.
        </p>
        <div className={styles.lessonInput}>
            <label htmlFor="lesson2">Entrada</label>
            <input 
              type="number" 
              name="lesson2"
              onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
                const eventTarget = e.target as HTMLInputElement
                setLesson2Output(Lesson2(Number(eventTarget.value)))
              }}
            />
          <span>Saída: {lesson2Output}</span>
        </div>
      </div>
      <div className={styles.lesson}>
        <p>3: 
          Define-se p como sendo um número de infinitos dígitos 
          composto pela concatenação de todos os números primos 
          (2357111317192329...). Escreva uma função <code>f(n)</code>que tem 
          como entrada um número inteiro n que representa um índice 
          (entre 0 e 10000) e retorne um número com os 5 próximos 
          dígitos de p, a partir do índice n. Por exemplo: f(3) deve retornar 
          71113.
        </p>
        <div className={styles.lessonInput}>
            <label htmlFor="lesson3">Não foi Feito</label>
          <span>Saída: {lesson3Output}</span>
        </div>
      </div>
      <div className={styles.lesson}>
        <p>4: 
          Escreva uma função f(n) que aceita um inteiro positivo 
          n (com até 309 dígitos) e retorno o número mínimo de 
          operações necessárias para transformar esse
          número no número 1.
        </p>
        <p>As operações são as seguintes:</p>
        <ul>
          <li>  
            Adiciona 1
          </li>
          <li>  
            Subtrai 1
          </li>
          <li>  
            Divide por 2 (apenas quando o número a ser dividido é par)
          </li>
        </ul>
        <p>Por examplo: f(4) retorna 2, porque 4 - 2 - 1
          <br /> 
          f(15) retorna 5, porque 15 - 16 - 8 - 4 - 2 - 1
        </p>
        <div className={styles.lessonInput}>
            <label htmlFor="lesson4">Entrada</label>
            <input 
              type="number" 
              name="lesson4"
              onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
                const eventTarget = e.target as HTMLInputElement
                setLesson4Output(Lesson4(Number(eventTarget.value)))
              }}
            />
          <span>Saída: {lesson4Output}</span>
        </div>
      </div>
    </section>
  )
}