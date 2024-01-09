package com.stefanjanevski.tamkbackend.model

import jakarta.persistence.*

@Entity
@Table(schema = "tamk", name = "vendors")
class Vendor(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,

    @Column(name = "name")
    val name: String,

    @Column(name = "logo_url")
    val logoUrl: String
)
