package com.stefanjanevski.tamkbackend.model

import jakarta.persistence.*

@Entity
@Table(schema = "tamk", name = "products")
class Product(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,

    @Column(name = "name")
    val name: String,

    @Column(name = "description")
    val description: String,

    @ManyToOne
    @JoinColumn(name = "category_id")
    val category: Category,

    @Column(name = "image_url")
    val imageUrl: String
)