import prisma from "../config/db.js";
import { STATUS_CODE } from "../constants/status.code.js";

const permissionMiddleware = (resource, action) => {
  return async (req, res, next) => {
    try {
      if (!req.user?.id) {
        return res.status(STATUS_CODE.UNAUTHORIZED).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const permission = await prisma.permission.findFirst({
        where: {
          resource,
          action,
          roles: {
            some: {
              role: {
                users: {
                  some: {
                    id: Number(req.user.id),
                  },
                },
              },
            },
          },
        },
      });

      if (!permission) {
        return res.status(STATUS_CODE.FORBIDDEN).json({
          success: false,
          message: "Permission denied",
        });
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default permissionMiddleware;