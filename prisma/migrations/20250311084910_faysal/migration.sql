-- AlterTable
ALTER TABLE "ExamResult" ALTER COLUMN "examTitle" DROP NOT NULL;

-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "role" TEXT;

-- AlterTable
ALTER TABLE "sessions" ADD COLUMN     "role" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" TEXT,
ALTER COLUMN "emailVerified" DROP NOT NULL,
ALTER COLUMN "emailVerified" SET DEFAULT false,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "BlogPost" (
    "id" SERIAL NOT NULL,
    "post_author" INTEGER,
    "tags" TEXT,
    "name" TEXT,
    "category" TEXT,
    "post_date" TIMESTAMP(3),
    "post_date_gmt" TIMESTAMP(3),
    "post_content" JSONB,
    "post_title" TEXT NOT NULL,
    "post_excerpt" TEXT,
    "post_status" TEXT,
    "comment_status" TEXT,
    "ping_status" TEXT,
    "post_password" TEXT,
    "post_name" TEXT NOT NULL,
    "to_ping" TEXT,
    "pinged" TEXT,
    "post_modified" TIMESTAMP(3),
    "post_modified_gmt" TIMESTAMP(3),
    "post_content_filtered" TEXT,
    "post_parent" INTEGER,
    "guid" TEXT,
    "menu_order" INTEGER,
    "post_type" TEXT,
    "post_mime_type" TEXT,
    "comment_count" INTEGER,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BlogPost_pkey" PRIMARY KEY ("id")
);
