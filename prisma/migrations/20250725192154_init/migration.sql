-- CreateTable
CREATE TABLE "skill_category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "skills" TEXT[],

    CONSTRAINT "skill_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tech" TEXT[],
    "github" TEXT,
    "demo" TEXT,
    "backendFocus" BOOLEAN,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experience" (
    "id" SERIAL NOT NULL,
    "company" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT[],
    "skills" TEXT[],

    CONSTRAINT "experience_pkey" PRIMARY KEY ("id")
);
