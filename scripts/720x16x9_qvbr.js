// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the Region
AWS.config.update({region: 'ap-south-1'});
// Set the custom endpoint for your account
AWS.config.mediaconvert = {endpoint : 'https://htunurlzb.mediaconvert.ap-south-1.amazonaws.com'};

var params = {
  "Category": "VOD",
  "Description": "video on demand on aws",
  "Name": "tb-vod-encoder-v4_Ott_720p_Avc_Aac_16x9_qvbr",
  "Settings": {
      "AdAvailOffset": 0,
      "OutputGroups": [
          // {
          //     "Name": "File Group",
          //     "OutputGroupSettings": {
          //         "Type": "FILE_GROUP_SETTINGS",
          //         "FileGroupSettings": {}
          //     },
          //     "Outputs": [
          //         {
          //             "Preset": "tb-vod-encoder-v4_Mp4_Avc_Aac_16x9_1280x720p_24Hz_4.5Mbps_qvbr",
          //             "Extension": "mp4",
          //             "NameModifier": "_Mp4_Avc_Aac_16x9_1280x720p_24Hz_4.5Mbps_qvbr"
          //         }
          //     ]
          // },
          {
              "Name": "Apple HLS",
              "Outputs": [
                  {
                      "Preset": "tb-vod-encoder-v4_Ott_Hls_Ts_Avc_Aac_16x9_480x270p_15Hz_0.4Mbps_qvbr",
                      "NameModifier": "_Ott_Hls_Ts_Avc_Aac_16x9_480x270p_15Hz_0.4Mbps_qvbr"
                  },
                  {
                      "Preset": "tb-vod-encoder-v4_Ott_Hls_Ts_Avc_Aac_16x9_640x360p_30Hz_0.6Mbps_qvbr",
                      "NameModifier": "_Ott_Hls_Ts_Avc_Aac_16x9_640x360p_30Hz_0.6Mbps_qvbr"
                  },
                  {
                      "Preset": "tb-vod-encoder-v4_Ott_Hls_Ts_Avc_Aac_16x9_640x360p_30Hz_1.2Mbps_qvbr",
                      "NameModifier": "_Ott_Hls_Ts_Avc_Aac_16x9_640x360p_30Hz_1.2Mbps_qvbr"
                  },
                  {
                      "Preset": "tb-vod-encoder-v4_Ott_Hls_Ts_Avc_Aac_16x9_960x540p_30Hz_3.5Mbps_qvbr",
                      "NameModifier": "_Ott_Hls_Ts_Avc_Aac_16x9_960x540p_30Hz_3.5Mbps_qvbr"
                  },
                  {
                      "Preset": "tb-vod-encoder-v4_Ott_Hls_Ts_Avc_Aac_16x9_1280x720p_30Hz_3.5Mbps_qvbr",
                      "NameModifier": "_Ott_Hls_Ts_Avc_Aac_16x9_1280x720p_30Hz_3.5Mbps_qvbr"
                  },
                  {
                      "Preset": "tb-vod-encoder-v4_Ott_Hls_Ts_Avc_Aac_16x9_1280x720p_30Hz_5.0Mbps_qvbr",
                      "NameModifier": "_Ott_Hls_Ts_Avc_Aac_16x9_1280x720p_30Hz_5.0Mbps_qvbr"
                  },
                  {
                      "Preset": "tb-vod-encoder-v4_Ott_Hls_Ts_Avc_Aac_16x9_1280x720p_30Hz_6.5Mbps_qvbr",
                      "NameModifier": "_Ott_Hls_Ts_Avc_Aac_16x9_1280x720p_30Hz_6.5Mbps_qvbr"
                  }
              ],
              "OutputGroupSettings": {
                  "Type": "HLS_GROUP_SETTINGS",
                  "HlsGroupSettings": {
                      "ManifestDurationFormat": "INTEGER",
                      "SegmentLength": 3,
                      "TimedMetadataId3Period": 10,
                      "CaptionLanguageSetting": "OMIT",
                      "TimedMetadataId3Frame": "PRIV",
                      "CodecSpecification": "RFC_4281",
                      "OutputSelection": "MANIFESTS_AND_SEGMENTS",
                      "ProgramDateTimePeriod": 600,
                      "MinSegmentLength": 0,
                      "DirectoryStructure": "SINGLE_DIRECTORY",
                      "ProgramDateTime": "EXCLUDE",
                      "SegmentControl": "SEGMENTED_FILES",
                      "ManifestCompression": "NONE",
                      "ClientCache": "ENABLED",
                      "StreamInfResolution": "INCLUDE"
                  }
              }
          }
          // {
          //     "Name": "DASH ISO",
          //     "Outputs": [
          //         {
          //             "Preset": "tb-vod-encoder-v4_Ott_Dash_Mp4_Avc_16x9_480x270p_15Hz_0.4Mbps_qvbr",
          //             "NameModifier": "_Ott_Dash_Mp4_Avc_16x9_480x270p_15Hz_0.4Mbps_qvbr"
          //         },
          //         {
          //             "Preset": "tb-vod-encoder-v4_Ott_Dash_Mp4_Avc_16x9_640x360p_30Hz_0.6Mbps_qvbr",
          //             "NameModifier": "_Ott_Dash_Mp4_Avc_16x9_640x360p_30Hz_0.6Mbps_qvbr"
          //         },
          //         {
          //             "Preset": "tb-vod-encoder-v4_Ott_Dash_Mp4_Avc_16x9_640x360p_30Hz_1.2Mbps_qvbr",
          //             "NameModifier": "_Ott_Dash_Mp4_Avc_16x9_640x360p_30Hz_1.2Mbps_qvbr"
          //         },
          //         {
          //             "Preset": "tb-vod-encoder-v4_Ott_Dash_Mp4_Avc_16x9_960x540p_30Hz_3.5Mbps_qvbr",
          //             "NameModifier": "_Ott_Dash_Mp4_Avc_16x9_960x540p_30Hz_3.5Mbps_qvbr"
          //         },
          //         {
          //             "Preset": "tb-vod-encoder-v4_Ott_Dash_Mp4_Avc_16x9_1280x720p_30Hz_3.5Mbps_qvbr",
          //             "NameModifier": "_Ott_Dash_Mp4_Avc_16x9_1280x720p_30Hz_3.5Mbps_qvbr"
          //         },
          //         {
          //             "Preset": "tb-vod-encoder-v4_Ott_Dash_Mp4_Avc_16x9_1280x720p_30Hz_5.0Mbps_qvbr",
          //             "NameModifier": "_Ott_Dash_Mp4_Avc_16x9_1280x720p_30Hz_5.0Mbps_qvbr"
          //         },
          //         {
          //             "Preset": "tb-vod-encoder-v4_Ott_Dash_Mp4_Avc_16x9_1280x720p_30Hz_6.5Mbps_qvbr",
          //             "NameModifier": "_Ott_Dash_Mp4_Avc_16x9_1280x720p_30Hz_6.5Mbps_qvbr"
          //         },
          //         {
          //             "Preset": "System-Ott_Dash_Mp4_Aac_He_96Kbps",
          //             "NameModifier": "_Ott_Dash_Mp4_Aac_He_96Kbps"
          //         }
          //     ],
          //     "OutputGroupSettings": {
          //         "Type": "DASH_ISO_GROUP_SETTINGS",
          //         "DashIsoGroupSettings": {
          //             "SegmentLength": 30,
          //             "FragmentLength": 3,
          //             "SegmentControl": "SEGMENTED_FILES",
          //             "HbbtvCompliance": "NONE"
          //         }
          //     }
          // }
      ]
  }
};

// Create a promise on a MediaConvert object
var templatePromise = new AWS.MediaConvert({apiVersion: '2017-08-29'}).createJobTemplate(params).promise();

// Handle promise's fulfilled/rejected status
templatePromise.then(
  function(data) {
    console.log("Success!", data);
  },
  function(err) {
    console.log("Error", err);
  }
);
