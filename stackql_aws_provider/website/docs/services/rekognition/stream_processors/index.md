--- 
title: stream_processors
hide_title: false
hide_table_of_contents: false
keywords:
  - stream_processors
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

Creates, updates, deletes, gets or lists a <code>stream_processors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stream_processors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rekognition.stream_processors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_stream_processor"
    values={[
        { label: 'describe_stream_processor', value: 'describe_stream_processor' }
    ]}
>
<TabItem value="describe_stream_processor">

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
    <td><CopyableCode code="creation_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the stream processor was created</td>
</tr>
<tr>
    <td><CopyableCode code="data_sharing_preference" /></td>
    <td><code>object</code></td>
    <td>Shows whether you are sharing data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis. Note that if you opt out at the account level this setting is ignored on individual streams.</td>
</tr>
<tr>
    <td><CopyableCode code="input" /></td>
    <td><code>object</code></td>
    <td>Kinesis video stream that provides the source streaming video.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for your AWS Key Management Service key (AWS KMS key). This is an optional parameter for label detection stream processors. (pattern: &lt;code&gt;^&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,2048&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time, in Unix format, the stream processor was last updated. For example, when the stream processor moves from a running state to a failed state, or when the user starts or stops the stream processor.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the stream processor. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="notification_channel" /></td>
    <td><code>object</code></td>
    <td>The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the object detection results and completion status of a video analysis operation. Amazon Rekognition publishes a notification the first time an object of interest or a person is detected in the video stream. For example, if Amazon Rekognition detects a person at second 2, a pet at second 4, and a person again at second 5, Amazon Rekognition sends 2 object class detected notifications, one for a person at second 2 and one for a pet at second 4. Amazon Rekognition also publishes an an end-of-session notification with a summary when the stream processing session is complete.</td>
</tr>
<tr>
    <td><CopyableCode code="output" /></td>
    <td><code>object</code></td>
    <td>Kinesis data stream to which Amazon Rekognition Video puts the analysis results.</td>
</tr>
<tr>
    <td><CopyableCode code="regions_of_interest" /></td>
    <td><code>array</code></td>
    <td>Specifies locations in the frames where Amazon Rekognition checks for objects or people. This is an optional parameter for label detection stream processors.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the IAM role that allows access to the stream processor. (pattern: &lt;code&gt;arn:aws:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="settings" /></td>
    <td><code>object</code></td>
    <td>Input parameters used in a streaming video analyzed by a stream processor. You can use FaceSearch to recognize faces in a streaming video, or you can use ConnectedHome to detect labels.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of the stream processor. (STOPPED, STARTING, RUNNING, FAILED, STOPPING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Detailed status message about the stream processor.</td>
</tr>
<tr>
    <td><CopyableCode code="stream_processor_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the stream processor. (pattern: &lt;code&gt;(^arn:&#91;a-z\d-&#93;+:rekognition:&#91;a-z\d-&#93;+:\d&#123;12&#125;:streamprocessor\/.+$)&lt;/code&gt;)</td>
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
    <td><a href="#describe_stream_processor"><CopyableCode code="describe_stream_processor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about a stream processor created by CreateStreamProcessor. You can get information about the input and output streams, the input parameters for the face recognition being performed, and the current status of the stream processor.</td>
</tr>
<tr>
    <td><a href="#create_stream_processor"><CopyableCode code="create_stream_processor" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates an Amazon Rekognition stream processor that you can use to detect and recognize faces or to detect labels in a streaming video. Amazon Rekognition Video is a consumer of live video from Amazon Kinesis Video Streams. There are two different settings for stream processors in Amazon Rekognition: detecting faces and detecting labels. If you are creating a stream processor for detecting faces, you provide as input a Kinesis video stream (Input) and a Kinesis data stream (Output) stream for receiving the output. You must use the FaceSearch option in Settings, specifying the collection that contains the faces you want to recognize. After you have finished analyzing a streaming video, use StopStreamProcessor to stop processing. If you are creating a stream processor to detect labels, you provide as input a Kinesis video stream (Input), Amazon S3 bucket information (Output), and an Amazon SNS topic ARN (NotificationChannel). You can also provide a KMS key ID to encrypt the data sent to your Amazon S3 bucket. You specify what you want to detect by using the ConnectedHome option in settings, and selecting one of the following: PERSON, PET, PACKAGE, ALL You can also specify where in the frame you want Amazon Rekognition to monitor with RegionsOfInterest. When you run the StartStreamProcessor operation on a label detection stream processor, you input start and stop information to determine the length of the processing time. Use Name to assign an identifier for the stream processor. You use Name to manage the stream processor. For example, you can start processing the source video by calling StartStreamProcessor with the Name field. This operation requires permissions to perform the rekognition:CreateStreamProcessor action. If you want to tag your stream processor, you also require permission to perform the rekognition:TagResource operation.</td>
</tr>
<tr>
    <td><a href="#update_stream_processor"><CopyableCode code="update_stream_processor" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Allows you to update a stream processor. You can change some settings and regions of interest and delete certain parameters.</td>
</tr>
<tr>
    <td><a href="#delete_stream_processor"><CopyableCode code="delete_stream_processor" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the stream processor identified by Name. You assign the value for Name when you create the stream processor with CreateStreamProcessor. You might not be able to use the same name for a stream processor for a few seconds after calling DeleteStreamProcessor.</td>
</tr>
<tr>
    <td><a href="#list_stream_processors"><CopyableCode code="list_stream_processors" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of stream processors that you have created with CreateStreamProcessor.</td>
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
    defaultValue="describe_stream_processor"
    values={[
        { label: 'describe_stream_processor', value: 'describe_stream_processor' }
    ]}
>
<TabItem value="describe_stream_processor">

Provides information about a stream processor created by CreateStreamProcessor. You can get information about the input and output streams, the input parameters for the face recognition being performed, and the current status of the stream processor.

```sql
SELECT
creation_timestamp,
data_sharing_preference,
input,
kms_key_id,
last_update_timestamp,
name,
notification_channel,
output,
regions_of_interest,
role_arn,
settings,
status,
status_message,
stream_processor_arn
FROM aws.rekognition.stream_processors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_stream_processor"
    values={[
        { label: 'create_stream_processor', value: 'create_stream_processor' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_stream_processor">

Creates an Amazon Rekognition stream processor that you can use to detect and recognize faces or to detect labels in a streaming video. Amazon Rekognition Video is a consumer of live video from Amazon Kinesis Video Streams. There are two different settings for stream processors in Amazon Rekognition: detecting faces and detecting labels. If you are creating a stream processor for detecting faces, you provide as input a Kinesis video stream (Input) and a Kinesis data stream (Output) stream for receiving the output. You must use the FaceSearch option in Settings, specifying the collection that contains the faces you want to recognize. After you have finished analyzing a streaming video, use StopStreamProcessor to stop processing. If you are creating a stream processor to detect labels, you provide as input a Kinesis video stream (Input), Amazon S3 bucket information (Output), and an Amazon SNS topic ARN (NotificationChannel). You can also provide a KMS key ID to encrypt the data sent to your Amazon S3 bucket. You specify what you want to detect by using the ConnectedHome option in settings, and selecting one of the following: PERSON, PET, PACKAGE, ALL You can also specify where in the frame you want Amazon Rekognition to monitor with RegionsOfInterest. When you run the StartStreamProcessor operation on a label detection stream processor, you input start and stop information to determine the length of the processing time. Use Name to assign an identifier for the stream processor. You use Name to manage the stream processor. For example, you can start processing the source video by calling StartStreamProcessor with the Name field. This operation requires permissions to perform the rekognition:CreateStreamProcessor action. If you want to tag your stream processor, you also require permission to perform the rekognition:TagResource operation.

```sql
INSERT INTO aws.rekognition.stream_processors (
Input,
Output,
Name,
Settings,
RoleArn,
Tags,
NotificationChannel,
KmsKeyId,
RegionsOfInterest,
DataSharingPreference,
region
)
SELECT 
'{{ Input }}',
'{{ Output }}',
'{{ Name }}',
'{{ Settings }}',
'{{ RoleArn }}' /* required */,
'{{ Tags }}',
'{{ NotificationChannel }}',
'{{ KmsKeyId }}',
'{{ RegionsOfInterest }}',
'{{ DataSharingPreference }}',
'{{ region }}'
RETURNING
stream_processor_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: stream_processors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the stream_processors resource.
    - name: Input
      description: |
        Kinesis video stream stream that provides the source streaming video. If you are using the AWS CLI, the parameter name is StreamProcessorInput. This is required for both face search and label detection stream processors.
      value:
        KinesisVideoStream:
          Arn: "{{ Arn }}"
    - name: Output
      description: |
        Kinesis data stream stream or Amazon S3 bucket location to which Amazon Rekognition Video puts the analysis results. If you are using the AWS CLI, the parameter name is StreamProcessorOutput. This must be a S3Destination of an Amazon S3 bucket that you own for a label detection stream processor or a Kinesis data stream ARN for a face search stream processor.
      value:
        KinesisDataStream:
          Arn: "{{ Arn }}"
        S3Destination:
          Bucket: "{{ Bucket }}"
          KeyPrefix: "{{ KeyPrefix }}"
    - name: Name
      value: "{{ Name }}"
      description: |
        An identifier you assign to the stream processor. You can use Name to manage the stream processor. For example, you can get the current status of the stream processor by calling DescribeStreamProcessor. Name is idempotent. This is required for both face search and label detection stream processors.
    - name: Settings
      description: |
        Input parameters used in a streaming video analyzed by a stream processor. You can use FaceSearch to recognize faces in a streaming video, or you can use ConnectedHome to detect labels.
      value:
        FaceSearch:
          CollectionId: "{{ CollectionId }}"
          FaceMatchThreshold: {{ FaceMatchThreshold }}
        ConnectedHome:
          Labels:
            - "{{ Labels }}"
          MinConfidence: {{ MinConfidence }}
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor. The IAM role provides Rekognition read permissions for a Kinesis stream. It also provides write permissions to an Amazon S3 bucket and Amazon Simple Notification Service topic for a label detection stream processor. This is required for both face search and label detection stream processors.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A set of tags (key-value pairs) that you want to attach to the stream processor.
    - name: NotificationChannel
      description: |
        The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the object detection results and completion status of a video analysis operation. Amazon Rekognition publishes a notification the first time an object of interest or a person is detected in the video stream. For example, if Amazon Rekognition detects a person at second 2, a pet at second 4, and a person again at second 5, Amazon Rekognition sends 2 object class detected notifications, one for a person at second 2 and one for a pet at second 4. Amazon Rekognition also publishes an an end-of-session notification with a summary when the stream processing session is complete.
      value:
        SNSTopicArn: "{{ SNSTopicArn }}"
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        The identifier for your AWS Key Management Service key (AWS KMS key). This is an optional parameter for label detection stream processors and should not be used to create a face search stream processor. You can supply the Amazon Resource Name (ARN) of your KMS key, the ID of your KMS key, an alias for your KMS key, or an alias ARN. The key is used to encrypt results and data published to your Amazon S3 bucket, which includes image frames and hero images. Your source images are unaffected.
    - name: RegionsOfInterest
      description: |
        Specifies locations in the frames where Amazon Rekognition checks for objects or people. You can specify up to 10 regions of interest, and each region has either a polygon or a bounding box. This is an optional parameter for label detection stream processors and should not be used to create a face search stream processor.
      value:
        - BoundingBox:
            Width: {{ Width }}
            Height: {{ Height }}
            Left: {{ Left }}
            Top: {{ Top }}
          Polygon: "{{ Polygon }}"
    - name: DataSharingPreference
      description: |
        Shows whether you are sharing data with Rekognition to improve model performance. You can choose this option at the account level or on a per-stream basis. Note that if you opt out at the account level this setting is ignored on individual streams.
      value:
        OptIn: {{ OptIn }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_stream_processor"
    values={[
        { label: 'update_stream_processor', value: 'update_stream_processor' }
    ]}
>
<TabItem value="update_stream_processor">

Allows you to update a stream processor. You can change some settings and regions of interest and delete certain parameters.

```sql
UPDATE aws.rekognition.stream_processors
SET 
Name = '{{ Name }}',
SettingsForUpdate = '{{ SettingsForUpdate }}',
RegionsOfInterestForUpdate = '{{ RegionsOfInterestForUpdate }}',
DataSharingPreferenceForUpdate = '{{ DataSharingPreferenceForUpdate }}',
ParametersToDelete = '{{ ParametersToDelete }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_stream_processor"
    values={[
        { label: 'delete_stream_processor', value: 'delete_stream_processor' }
    ]}
>
<TabItem value="delete_stream_processor">

Deletes the stream processor identified by Name. You assign the value for Name when you create the stream processor with CreateStreamProcessor. You might not be able to use the same name for a stream processor for a few seconds after calling DeleteStreamProcessor.

```sql
DELETE FROM aws.rekognition.stream_processors
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_stream_processors"
    values={[
        { label: 'list_stream_processors', value: 'list_stream_processors' }
    ]}
>
<TabItem value="list_stream_processors">

Gets a list of stream processors that you have created with CreateStreamProcessor.

```sql
EXEC aws.rekognition.stream_processors.list_stream_processors 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
</Tabs>
