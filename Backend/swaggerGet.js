   /**
     * @swagger
     * /:
     *  get:
     *      summary: A basic empty route.
     *      description: Can be used to check API git for get request.
     *      responses:
     *          200:
     *              description: To check API response.
     */



    /**
     * @swagger
     * /list_skinIssues:
     *  get:
     *      summary: List of all skin issues.
     *      description: Gives you an array of dictonary for all skin issues.
     *      responses:
     *          200:
     *              description: API response on success.
    */

    /**
     * @swagger
     * /list_scoreCategories:
     *  get:
     *      summary: List of all score categories.
     *      description: Gives you an array of dictonary for all score categories.
     *      responses:
     *          200:
     *              description: API response on success.
    */

    /**
     * @swagger
     * /tips?skinIssue={skinIssue}&categoryName={categoryName}&type={type}:
     *  get:
     *      summary: List of all tips.
     *      description: Gives you an array of strings in the content keys.
     *      parameters:
     *          -   in: path
     *              name: skinIssue
     *              required: true
     *              description: String value of skin issue is required
     *              schema:
     *                  type: string
     *          -   in:   path
     *              name: categoryName
     *              required: true
     *              description: String value of category name is required
     *              schema:
     *                  type: string
     *          -   in:   path
     *              name: type
     *              required: true
     *              description: String value of type is required
     *              schema:
     *                  type: string
     *      responses:
     *          200:
     *              description: API response on success.
    */

    /**
     * @swagger
     * /remedies?skinIssue={skinIssue}&categoryName={categoryName}&type={type}:
     *  get:
     *      summary: List of all remedies.
     *      description: Gives you an array of dictonaries with title and description in the content key.
     *      parameters:
     *          -   in: path
     *              name: skinIssue
     *              required: true
     *              description: String value of skin issue is required
     *              schema:
     *                  type: string
     *          -   in:   path
     *              name: categoryName
     *              required: true
     *              description: String value of category name is required
     *              schema:
     *                  type: string
     *          -   in:   path
     *              name: type
     *              required: true
     *              description: String value of type is required
     *              schema:
     *                  type: string
     *      responses:
     *          200:
     *              description: API response on success.
    */