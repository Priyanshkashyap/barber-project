const { z } = require("zod");
const { user1 } = require("./db");

const usignupSchema = z.object({
  uname: z.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores allowed"),

  upassword: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[@$!%*?&]/, "Password must contain at least one special character"),

  uphone: z.string()
    .regex(/^\+?[1-9]\d{9,14}$/, "Invalid phone number format"),
});
module.exports = usignupSchema;