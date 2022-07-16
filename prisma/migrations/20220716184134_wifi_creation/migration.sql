-- CreateTable
CREATE TABLE "wifiConnections" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "wifiName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "wifiConnections_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "wifiConnections" ADD CONSTRAINT "wifiConnections_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
