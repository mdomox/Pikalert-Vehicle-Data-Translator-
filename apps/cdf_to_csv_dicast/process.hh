//==============================================================================
//
//   (c) Copyright, 2012 University Corporation for Atmospheric Research (UCAR).
//       All rights reserved.
//
//==============================================================================

/**
 *
 * @file process.hh
 *
 * @class process
 *
 * The purpose of this modules is to perform quality control checks
 */

#ifndef PROCESS_HH
#define PROCESS_HH

// Include files
#include <string>
#include <vector>

#include "rwx/rwx_vector_collection.hh"

#include "arguments.hh"
#include "stat_utils.hh"
#include "config_reader.hh"

using std::string;
using std::vector;

/**
 * @class process
 */
class process
{
public:
  /**
   *
   * Constructor
   *
   * @brief extract information from arguments and configuration
   * objects to prepare for processing
   *
   * @param[in] args_param command line arguments
   */
  process(const arguments &args_param) : args(args_param)
  {
    error = string("");
  };

  /** @brief arguments object */
  const arguments &args;

  /**
   * Destructor
   */
  ~process();

  /**
   * @brief run do processing
   * Processing steps:
   *  Read vdt configuration file
   *  Read current vehicle probe messages into container
   *  Read road segments file and meteorological datasets consisting of 
   *   radar, metar, rwis, rtma, and cloud class files
   *  Call the update_probe_messages() method in vdt_probe_message_datasets
   *  Configure and construct qc_manager object. This object is responsible
   *   for performing standard probe message qc checks
   *  Perform persistence and step checks requiring historical probe
   *   message data and suitable vehicle identifiers
   *  Create road segment statistics
   *  Create grid cell statistics
   *  Output probe messages with associated qc information
   *  Output road segment statistics
   *  Perform road segment assessment processing
   */
  int run();

  int get_vdt_seg_indicies(const rwx_vector_collection &vector_collection, const vector<int> &seg_ids, vector<int> &seg_indicies);
  string get_collection_value(const rwx_vector_collection &vector_collection, string field_name, int field_index);
  
  /**
   * @brief StatUtils object
   */
  StatUtils *stat_utils;

  /**
   * @brief construction error description
   */
  string error;
};


#endif /* PROCESS_HH */
