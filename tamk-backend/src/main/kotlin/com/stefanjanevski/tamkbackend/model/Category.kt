package com.stefanjanevski.tamkbackend.model

import jakarta.persistence.*

@Entity
@Table(schema = "tamk", name = "categories")
class Category(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,

    @Column(name = "name")
    val name: String,

    @Column(name = "image_url")
    val imageUrl: String
)