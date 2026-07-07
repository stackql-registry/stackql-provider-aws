--- 
title: label_detections
hide_title: false
hide_table_of_contents: false
keywords:
  - label_detections
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

Creates, updates, deletes, gets or lists a <code>label_detections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="label_detections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rekognition.label_detections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_label_detection"
    values={[
        { label: 'get_label_detection', value: 'get_label_detection' }
    ]}
>
<TabItem value="get_label_detection">

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
    <td><CopyableCode code="GetRequestMetadata" /></td>
    <td><code>object</code></td>
    <td>Information about the paramters used when getting a response. Includes information on aggregation and sorting methods.</td>
</tr>
<tr>
    <td><CopyableCode code="JobId" /></td>
    <td><code>string</code></td>
    <td>Job identifier for the label detection operation for which you want to obtain results. The job identifer is returned by an initial call to StartLabelDetection. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the label detection job. (IN_PROGRESS, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="JobTag" /></td>
    <td><code>string</code></td>
    <td>A job identifier specified in the call to StartLabelDetection and returned in the job completion notification sent to your Amazon Simple Notification Service topic. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.\-:+=\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LabelModelVersion" /></td>
    <td><code>string</code></td>
    <td>Version number of the label detection model that was used to detect labels.</td>
</tr>
<tr>
    <td><CopyableCode code="Labels" /></td>
    <td><code>array</code></td>
    <td>An array of labels detected in the video. Each element contains the detected label and the time, in milliseconds from the start of the video, that the label was detected.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of labels.</td>
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
    <td><code>object</code></td>
    <td>Information about a video that Amazon Rekognition Video analyzed. Videometadata is returned in every page of paginated responses from a Amazon Rekognition video operation.</td>
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
    <td><a href="#get_label_detection"><CopyableCode code="get_label_detection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the label detection results of a Amazon Rekognition Video analysis started by StartLabelDetection. The label detection operation is started by a call to StartLabelDetection which returns a job identifier (JobId). When the label detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartlabelDetection. To get the results of the label detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetLabelDetection and pass the job identifier (JobId) from the initial call to StartLabelDetection. GetLabelDetection returns an array of detected labels (Labels) sorted by the time the labels were detected. You can also sort by the label name by specifying NAME for the SortBy input parameter. If there is no NAME specified, the default sort is by timestamp. You can select how results are aggregated by using the AggregateBy input parameter. The default aggregation method is TIMESTAMPS. You can also aggregate by SEGMENTS, which aggregates all instances of labels detected in a given segment. The returned Labels array may include the following attributes: Name - The name of the detected label. Confidence - The level of confidence in the label assigned to a detected object. Parents - The ancestor labels for a detected label. GetLabelDetection returns a hierarchical taxonomy of detected labels. For example, a detected car might be assigned the label car. The label car has two parent labels: Vehicle (its parent) and Transportation (its grandparent). The response includes the all ancestors for a label, where every ancestor is a unique label. In the previous example, Car, Vehicle, and Transportation are returned as unique labels in the response. Aliases - Possible Aliases for the label. Categories - The label categories that the detected label belongs to. BoundingBox — Bounding boxes are described for all instances of detected common object labels, returned in an array of Instance objects. An Instance object contains a BoundingBox object, describing the location of the label on the input image. It also includes the confidence for the accuracy of the detected bounding box. Timestamp - Time, in milliseconds from the start of the video, that the label was detected. For aggregation by SEGMENTS, the StartTimestampMillis, EndTimestampMillis, and DurationMillis structures are what define a segment. Although the “Timestamp” structure is still returned with each label, its value is set to be the same as StartTimestampMillis. Timestamp and Bounding box information are returned for detected Instances, only if aggregation is done by TIMESTAMPS. If aggregating by SEGMENTS, information about detected instances isn’t returned. The version of the label model used for the detection is also returned. Note DominantColors isn't returned for Instances, although it is shown as part of the response in the sample seen below. Use MaxResults parameter to limit the number of labels returned. If there are more results than specified in MaxResults, the value of NextToken in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call GetlabelDetection and populate the NextToken request parameter with the token value returned from the previous call to GetLabelDetection. If you are retrieving results while using the Amazon Simple Notification Service, note that you will receive an "ERROR" notification if the job encounters an issue.</td>
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
    defaultValue="get_label_detection"
    values={[
        { label: 'get_label_detection', value: 'get_label_detection' }
    ]}
>
<TabItem value="get_label_detection">

Gets the label detection results of a Amazon Rekognition Video analysis started by StartLabelDetection. The label detection operation is started by a call to StartLabelDetection which returns a job identifier (JobId). When the label detection operation finishes, Amazon Rekognition publishes a completion status to the Amazon Simple Notification Service topic registered in the initial call to StartlabelDetection. To get the results of the label detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetLabelDetection and pass the job identifier (JobId) from the initial call to StartLabelDetection. GetLabelDetection returns an array of detected labels (Labels) sorted by the time the labels were detected. You can also sort by the label name by specifying NAME for the SortBy input parameter. If there is no NAME specified, the default sort is by timestamp. You can select how results are aggregated by using the AggregateBy input parameter. The default aggregation method is TIMESTAMPS. You can also aggregate by SEGMENTS, which aggregates all instances of labels detected in a given segment. The returned Labels array may include the following attributes: Name - The name of the detected label. Confidence - The level of confidence in the label assigned to a detected object. Parents - The ancestor labels for a detected label. GetLabelDetection returns a hierarchical taxonomy of detected labels. For example, a detected car might be assigned the label car. The label car has two parent labels: Vehicle (its parent) and Transportation (its grandparent). The response includes the all ancestors for a label, where every ancestor is a unique label. In the previous example, Car, Vehicle, and Transportation are returned as unique labels in the response. Aliases - Possible Aliases for the label. Categories - The label categories that the detected label belongs to. BoundingBox — Bounding boxes are described for all instances of detected common object labels, returned in an array of Instance objects. An Instance object contains a BoundingBox object, describing the location of the label on the input image. It also includes the confidence for the accuracy of the detected bounding box. Timestamp - Time, in milliseconds from the start of the video, that the label was detected. For aggregation by SEGMENTS, the StartTimestampMillis, EndTimestampMillis, and DurationMillis structures are what define a segment. Although the “Timestamp” structure is still returned with each label, its value is set to be the same as StartTimestampMillis. Timestamp and Bounding box information are returned for detected Instances, only if aggregation is done by TIMESTAMPS. If aggregating by SEGMENTS, information about detected instances isn’t returned. The version of the label model used for the detection is also returned. Note DominantColors isn't returned for Instances, although it is shown as part of the response in the sample seen below. Use MaxResults parameter to limit the number of labels returned. If there are more results than specified in MaxResults, the value of NextToken in the operation response contains a pagination token for getting the next set of results. To get the next page of results, call GetlabelDetection and populate the NextToken request parameter with the token value returned from the previous call to GetLabelDetection. If you are retrieving results while using the Amazon Simple Notification Service, note that you will receive an "ERROR" notification if the job encounters an issue.

```sql
SELECT
GetRequestMetadata,
JobId,
JobStatus,
JobTag,
LabelModelVersion,
Labels,
NextToken,
StatusMessage,
Video,
VideoMetadata
FROM aws.rekognition.label_detections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
