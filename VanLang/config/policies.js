/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/
  '*': ['bearer'],
  'students/login': true,
  'students/login-social': true,
  'motel-room/*': true,
  'news/*': true,
  'jobs/*': true,
  'banner/*': true,
  'product-share/*': true,
  'test/*': true,
  //'/news/top-news': true

};
