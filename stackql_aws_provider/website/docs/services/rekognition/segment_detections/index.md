--- 
title: segment_detections
hide_title: false
hide_table_of_contents: false
keywords:
  - segment_detections
  - rekognition
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>segment_detections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="segment_detections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rekognition.segment_detections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_segment_detection"
    values={[
        { label: 'get_segment_detection', value: 'get_segment_detection' }
    ]}
>
<TabItem value="get_segment_detection">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="AudioMetadata" /></td>
    <td><code>array</code></td>
    <td>An array of objects. There can be multiple audio streams. Each AudioMetadata object contains metadata for a single audio stream. Audio information in an AudioMetadata objects includes the audio codec, the number of audio channels, the duration of the audio stream, and the sample rate. Audio metadata is returned in each page of information returned by GetSegmentDetection.</td>
</tr>
<tr>
    <td><CopyableCode code="JobId" /></td>
    <td><code>string</code></td>
    <td>Job identifier for the segment detection operation for which you want to obtain results. The job identifer is returned by an initial call to StartSegmentDetection. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobStatus" /></td>
    <td><code>string</code></td>
    <td>Current status of the segment detection job. (IN_PROGRESS, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="JobTag" /></td>
    <td><code>string</code></td>
    <td>A job identifier specified in the call to StartSegmentDetection and returned in the job completion notification sent to your Amazon Simple Notification Service topic. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.\-:+=\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If the previous response was incomplete (because there are more labels to retrieve), Amazon Rekognition Video returns a pagination token in the response. You can use this pagination token to retrieve the next set of text.</td>
</tr>
<tr>
    <td><CopyableCode code="Segments" /></td>
    <td><code>array</code></td>
    <td>An array of segments detected in a video. The array is sorted by the segment types (TECHNICAL_CUE or SHOT) specified in the SegmentTypes input parameter of StartSegmentDetection. Within each segment type the array is sorted by timestamp values.</td>
</tr>
<tr>
    <td><CopyableCode code="SelectedSegmentTypes" /></td>
    <td><code>array</code></td>
    <td>An array containing the segment types requested in the call to StartSegmentDetection.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>If the job fails, StatusMessage provides a descriptive error message.</td>
</tr>
<tr>
    <td><CopyableCode code="Video" /></td>
    <td><code>object</code></td>
    <td>Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as StartLabelDetection use Video to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.</td>
</tr>
<tr>
    <td><CopyableCode code="VideoMetadata" /></td>
    <td><code>array</code></td>
    <td>Currently, Amazon Rekognition Video returns a single object in the VideoMetadata array. The object contains information about the video stream in the input file that Amazon Rekognition Video chose to analyze. The VideoMetadata object includes the video codec, video format and other information. Video metadata is returned in each page of information returned by GetSegmentDetection.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_segment_detection"><CopyableCode code="get_segment_detection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the segment detection results of a Amazon Rekognition Video analysis started by StartSegmentDetection. Segment detection with Amazon Rekognition Video is an asynchronous operation. You start segment detection by calling StartSegmentDetection which returns a job identifier (JobId). When the segment detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartSegmentDetection. To get the results of the segment detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. if so, call GetSegmentDetection and pass the job identifier (JobId) from the initial call of StartSegmentDetection. GetSegmentDetection returns detected segments in an array (Segments) of SegmentDetection objects. Segments is sorted by the segment types specified in the SegmentTypes input parameter of StartSegmentDetection. Each element of the array includes the detected segment, the precentage confidence in the acuracy of the detected segment, the type of the segment, and the frame in which the segment was detected. Use SelectedSegmentTypes to find out the type of segment detection requested in the call to StartSegmentDetection. Use the MaxResults parameter to limit the number of segment detections returned. If there are more results than specified in MaxResults, the value of NextToken in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call GetSegmentDetection and populate the NextToken request parameter with the token value returned from the previous call to GetSegmentDetection. For more information, see Detecting video segments in stored video in the Amazon Rekognition Developer Guide.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_segment_detection"
    values={[
        { label: 'get_segment_detection', value: 'get_segment_detection' }
    ]}
>
<TabItem value="get_segment_detection">

Gets the segment detection results of a Amazon Rekognition Video analysis started by StartSegmentDetection. Segment detection with Amazon Rekognition Video is an asynchronous operation. You start segment detection by calling StartSegmentDetection which returns a job identifier (JobId). When the segment detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartSegmentDetection. To get the results of the segment detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. if so, call GetSegmentDetection and pass the job identifier (JobId) from the initial call of StartSegmentDetection. GetSegmentDetection returns detected segments in an array (Segments) of SegmentDetection objects. Segments is sorted by the segment types specified in the SegmentTypes input parameter of StartSegmentDetection. Each element of the array includes the detected segment, the precentage confidence in the acuracy of the detected segment, the type of the segment, and the frame in which the segment was detected. Use SelectedSegmentTypes to find out the type of segment detection requested in the call to StartSegmentDetection. Use the MaxResults parameter to limit the number of segment detections returned. If there are more results than specified in MaxResults, the value of NextToken in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call GetSegmentDetection and populate the NextToken request parameter with the token value returned from the previous call to GetSegmentDetection. For more information, see Detecting video segments in stored video in the Amazon Rekognition Developer Guide.

```sql
SELECT
AudioMetadata,
JobId,
JobStatus,
JobTag,
NextToken,
Segments,
SelectedSegmentTypes,
StatusMessage,
Video,
VideoMetadata
FROM aws.rekognition.segment_detections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
