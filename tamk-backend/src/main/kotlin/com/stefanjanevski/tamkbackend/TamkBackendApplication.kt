package com.stefanjanevski.tamkbackend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class TamkBackendApplication

fun main(args: Array<String>) {
    runApplication<TamkBackendApplication>(*args)
}
