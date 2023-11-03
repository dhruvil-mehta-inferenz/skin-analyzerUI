    /**
     * @swagger
     * /user_data_analysis?skinIssue={skinIssue}:
     *  post:
     *      summary: API for user data analysis.
     *      description: This api is used for submitting user-image source and uuid and getting response of issue-name, mask-image, score, score category.
     *      parameters:
     *          -   in: path
     *              name: skinIssue
     *              required: true
     *              description: String value of skin issue is required
     *              schema:
     *                  type: string
     *      requestBody:
     *          required: true
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      required:
     *                          - uuid
     *                          - source
     *                          - base64Image
     *                      properties:
     *                          uuid:
     *                              type: string
     *                          source:
     *                              type: string
     *                          base64Image:
     *                              type: string
     *      responses:
     *          200:
     *              description: API response on success.
    */

    /**
     * @swagger
     * /importTips:
     *  post:
     *      summary: API for importing Tips into DB.
     *      description: This post api is used for creating creating records int DB through a predefined setted path in backend.
     *      responses:
     *          200:
     *              description: API response on success.
    */

    /**
     * @swagger
     * /importRemedies:
     *  post:
     *      summary: API for importing Remedies into DB.
     *      description: This post api is used for creating creating records int DB through a predefined setted path in backend.
     *      responses:
     *          200:
     *              description: API response on success.
    */

