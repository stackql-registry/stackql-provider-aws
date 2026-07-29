--- 
title: media_for_fragment_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - media_for_fragment_lists
  - kinesis_video_archived_media
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

Creates, updates, deletes, gets or lists a <code>media_for_fragment_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="media_for_fragment_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesis_video_archived_media.media_for_fragment_lists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_media_for_fragment_list"
    values={[
        { label: 'get_media_for_fragment_list', value: 'get_media_for_fragment_list' }
    ]}
>
<TabItem value="get_media_for_fragment_list">

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
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>The content type of the requested media. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\.\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="payload" /></td>
    <td><code>string (byte)</code></td>
    <td>The payload that Kinesis Video Streams returns is a sequence of chunks from the specified stream. For information about the chunks, see PutMedia. The chunks that Kinesis Video Streams returns in the GetMediaForFragmentList call also include the following additional Matroska (MKV) tags: AWS_KINESISVIDEO_FRAGMENT_NUMBER - Fragment number returned in the chunk. AWS_KINESISVIDEO_SERVER_SIDE_TIMESTAMP - Server-side timestamp of the fragment. AWS_KINESISVIDEO_PRODUCER_SIDE_TIMESTAMP - Producer-side timestamp of the fragment. The following tags will be included if an exception occurs: AWS_KINESISVIDEO_FRAGMENT_NUMBER - The number of the fragment that threw the exception AWS_KINESISVIDEO_EXCEPTION_ERROR_CODE - The integer code of the AWS_KINESISVIDEO_EXCEPTION_MESSAGE - A text description of the exception</td>
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
    <td><a href="#get_media_for_fragment_list"><CopyableCode code="get_media_for_fragment_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets media for a list of fragments (specified by fragment number) from the archived data in an Amazon Kinesis video stream. You must first call the GetDataEndpoint API to get an endpoint. Then send the GetMediaForFragmentList requests to this endpoint using the --endpoint-url parameter. For limits, see Kinesis Video Streams Limits. If an error is thrown after invoking a Kinesis Video Streams archived media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: x-amz-ErrorType HTTP header – contains a more specific error type in addition to what the HTTP status code provides. x-amz-RequestId HTTP header – if you want to report an issue to Amazon Web Services, the support team can better diagnose the problem if given the Request Id. Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again. For more information, see the Errors section at the bottom of this topic, as well as Common Errors.</td>
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
    defaultValue="get_media_for_fragment_list"
    values={[
        { label: 'get_media_for_fragment_list', value: 'get_media_for_fragment_list' }
    ]}
>
<TabItem value="get_media_for_fragment_list">

Gets media for a list of fragments (specified by fragment number) from the archived data in an Amazon Kinesis video stream. You must first call the GetDataEndpoint API to get an endpoint. Then send the GetMediaForFragmentList requests to this endpoint using the --endpoint-url parameter. For limits, see Kinesis Video Streams Limits. If an error is thrown after invoking a Kinesis Video Streams archived media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: x-amz-ErrorType HTTP header – contains a more specific error type in addition to what the HTTP status code provides. x-amz-RequestId HTTP header – if you want to report an issue to Amazon Web Services, the support team can better diagnose the problem if given the Request Id. Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again. For more information, see the Errors section at the bottom of this topic, as well as Common Errors.

```sql
SELECT
content_type,
payload
FROM aws.kinesis_video_archived_media.media_for_fragment_lists
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
