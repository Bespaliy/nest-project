import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { ValidationPipe } from "./pipes/validation.pipe";

const start = async () => {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
        .setTitle('Prikol vnature')
        .setDescription('Pricol Rest Api')
        .setVersion('1.0.0')
        .addTag('ULBI TV')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);
    // app.useGlobalPipes(new ValidationPipe());
    await app.listen(PORT, () => console.log(`Server start on PORT ${PORT}...`)); 
}

start();