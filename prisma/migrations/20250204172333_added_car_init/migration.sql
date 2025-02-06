-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "car_name" TEXT NOT NULL,
    "imgurl" TEXT,
    "per_km_rate" TEXT NOT NULL,
    "seaters" TEXT NOT NULL,
    "car_availablity" BOOLEAN,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);
