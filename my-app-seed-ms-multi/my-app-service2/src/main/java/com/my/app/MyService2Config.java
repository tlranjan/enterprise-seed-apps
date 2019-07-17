package com.my.app;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class MyService2Config {

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2).select().apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any()).build().apiInfo(apiInfo());
    }

    private ApiInfo apiInfo() {
        Contact contact =
                new Contact("MyService2 Team", "https://github.com/MyCompany/MyService2", "info@MyCompany.com");
        return new ApiInfoBuilder().title("MyService2 API Documentation")
                .description("The API you'll ever need to work with MyService2").version("V1.0").contact(contact)
                .license("Copyright (c) 2016-2019 MyCompany, Inc. All Rights Reserved")
                .licenseUrl("https://github.com/MyCompany/MyService2/blob/master/LICENSE").build();

    }

}