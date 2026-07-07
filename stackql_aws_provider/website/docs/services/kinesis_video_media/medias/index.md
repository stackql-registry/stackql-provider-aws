--- 
title: medias
hide_title: false
hide_table_of_contents: false
keywords:
  - medias
  - kinesis_video_media
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

Creates, updates, deletes, gets or lists a <code>medias</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="medias" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesis_video_media.medias" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_media"
    values={[
        { label: 'get_media', value: 'get_media' }
    ]}
>
<TabItem value="get_media">

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
    <td><CopyableCode code="ContentType" /></td>
    <td><code>string</code></td>
    <td>The content type of the requested media. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\.\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Payload" /></td>
    <td><code>string (byte)</code></td>
    <td>The payload Kinesis Video Streams returns is a sequence of chunks from the specified stream. For information about the chunks, see . The chunks that Kinesis Video Streams returns in the GetMedia call also include the following additional Matroska (MKV) tags: AWS_KINESISVIDEO_CONTINUATION_TOKEN (UTF-8 string) - In the event your GetMedia call terminates, you can use this continuation token in your next request to get the next chunk where the last request terminated. AWS_KINESISVIDEO_MILLIS_BEHIND_NOW (UTF-8 string) - Client applications can use this tag value to determine how far behind the chunk returned in the response is from the latest chunk on the stream. AWS_KINESISVIDEO_FRAGMENT_NUMBER - Fragment number returned in the chunk. AWS_KINESISVIDEO_SERVER_TIMESTAMP - Server timestamp of the fragment. AWS_KINESISVIDEO_PRODUCER_TIMESTAMP - Producer timestamp of the fragment. The following tags will be present if an error occurs: AWS_KINESISVIDEO_ERROR_CODE - String description of an error that caused GetMedia to stop. AWS_KINESISVIDEO_ERROR_ID: Integer code of the error. The error codes are as follows: 3002 - Error writing to the stream 4000 - Requested fragment is not found 4500 - Access denied for the stream's KMS key 4501 - Stream's KMS key is disabled 4502 - Validation error on the stream's KMS key 4503 - KMS key specified in the stream is unavailable 4504 - Invalid usage of the KMS key specified in the stream 4505 - Invalid state of the KMS key specified in the stream 4506 - Unable to find the KMS key specified in the stream 5000 - Internal error</td>
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
    <td><a href="#get_media"><CopyableCode code="get_media" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this API to retrieve media content from a Kinesis video stream. In the request, you identify the stream name or stream Amazon Resource Name (ARN), and the starting chunk. Kinesis Video Streams then returns a stream of chunks in order by fragment number. You must first call the GetDataEndpoint API to get an endpoint. Then send the GetMedia requests to this endpoint using the --endpoint-url parameter. When you put media data (fragments) on a stream, Kinesis Video Streams stores each incoming fragment and related metadata in what is called a "chunk." For more information, see PutMedia. The GetMedia API returns a stream of these chunks starting from the chunk that you specify in the request. The following limits apply when using the GetMedia API: A client can call GetMedia up to five times per second per stream. Kinesis Video Streams sends media data at a rate of up to 25 megabytes per second (or 200 megabits per second) during a GetMedia session. If an error is thrown after invoking a Kinesis Video Streams media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: x-amz-ErrorType HTTP header – contains a more specific error type in addition to what the HTTP status code provides. x-amz-RequestId HTTP header – if you want to report an issue to AWS, the support team can better diagnose the problem if given the Request Id. Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again. For more information, see the Errors section at the bottom of this topic, as well as Common Errors.</td>
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
    defaultValue="get_media"
    values={[
        { label: 'get_media', value: 'get_media' }
    ]}
>
<TabItem value="get_media">

Use this API to retrieve media content from a Kinesis video stream. In the request, you identify the stream name or stream Amazon Resource Name (ARN), and the starting chunk. Kinesis Video Streams then returns a stream of chunks in order by fragment number. You must first call the GetDataEndpoint API to get an endpoint. Then send the GetMedia requests to this endpoint using the --endpoint-url parameter. When you put media data (fragments) on a stream, Kinesis Video Streams stores each incoming fragment and related metadata in what is called a "chunk." For more information, see PutMedia. The GetMedia API returns a stream of these chunks starting from the chunk that you specify in the request. The following limits apply when using the GetMedia API: A client can call GetMedia up to five times per second per stream. Kinesis Video Streams sends media data at a rate of up to 25 megabytes per second (or 200 megabits per second) during a GetMedia session. If an error is thrown after invoking a Kinesis Video Streams media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: x-amz-ErrorType HTTP header – contains a more specific error type in addition to what the HTTP status code provides. x-amz-RequestId HTTP header – if you want to report an issue to AWS, the support team can better diagnose the problem if given the Request Id. Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again. For more information, see the Errors section at the bottom of this topic, as well as Common Errors.

```sql
SELECT
ContentType,
Payload
FROM aws.kinesis_video_media.medias
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
