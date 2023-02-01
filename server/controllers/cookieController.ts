import { Request, Response, NextFunction } from "express";

export const cookieController = {
  setSSIDCookie: async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("inside cookie controller")
      // const userId = res.locals.user_id;
      const random = Math.random().toString(16).substr(2, 14); 
      console.log('random string: ',random);
      res.cookie('ssid', random, {
        httpOnly: true,
      });
      res.locals.ssidCookie = random;
      return next();
    } catch (error) {
      next({
        log: `Error in cookieController.setSSIDCookie. Details: ${error}`,
        status: 400,
        message: { err: 'An error occurred in cookieController.setSSIDCookie' },
      });
    }
  }
}
