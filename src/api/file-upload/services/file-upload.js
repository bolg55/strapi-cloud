'use strict';

/**
 * file-upload service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::file-upload.file-upload');
