package com.amazonbackend.dto;


import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ProductDto {

    private Integer productId;

    private String productName;

    private String description;

    private Float price;

    private Integer quantityAvailable;
}
