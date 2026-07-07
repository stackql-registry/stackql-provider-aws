--- 
title: fragments
hide_title: false
hide_table_of_contents: false
keywords:
  - fragments
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

Creates, updates, deletes, gets or lists a <code>fragments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fragments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesis_video_archived_media.fragments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_fragments"
    values={[
        { label: 'list_fragments', value: 'list_fragments' }
    ]}
>
<TabItem value="list_fragments">

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
    <td><CopyableCode code="FragmentLengthInMilliseconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The playback duration or other time value associated with the fragment.</td>
</tr>
<tr>
    <td><CopyableCode code="FragmentNumber" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the fragment. This value monotonically increases based on the ingestion order. (pattern: &lt;code&gt;^&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FragmentSizeInBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total fragment size, including information about the fragment and contained media data.</td>
</tr>
<tr>
    <td><CopyableCode code="ProducerTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp from the producer corresponding to the fragment.</td>
</tr>
<tr>
    <td><CopyableCode code="ServerTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp from the Amazon Web Services server corresponding to the fragment.</td>
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
    <td><a href="#list_fragments"><CopyableCode code="list_fragments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of Fragment objects from the specified stream and timestamp range within the archived data. Listing fragments is eventually consistent. This means that even if the producer receives an acknowledgment that a fragment is persisted, the result might not be returned immediately from a request to ListFragments. However, results are typically available in less than one second. You must first call the GetDataEndpoint API to get an endpoint. Then send the ListFragments requests to this endpoint using the --endpoint-url parameter. If an error is thrown after invoking a Kinesis Video Streams archived media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: x-amz-ErrorType HTTP header – contains a more specific error type in addition to what the HTTP status code provides. x-amz-RequestId HTTP header – if you want to report an issue to Amazon Web Services, the support team can better diagnose the problem if given the Request Id. Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again. For more information, see the Errors section at the bottom of this topic, as well as Common Errors.</td>
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
    defaultValue="list_fragments"
    values={[
        { label: 'list_fragments', value: 'list_fragments' }
    ]}
>
<TabItem value="list_fragments">

Returns a list of Fragment objects from the specified stream and timestamp range within the archived data. Listing fragments is eventually consistent. This means that even if the producer receives an acknowledgment that a fragment is persisted, the result might not be returned immediately from a request to ListFragments. However, results are typically available in less than one second. You must first call the GetDataEndpoint API to get an endpoint. Then send the ListFragments requests to this endpoint using the --endpoint-url parameter. If an error is thrown after invoking a Kinesis Video Streams archived media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: x-amz-ErrorType HTTP header – contains a more specific error type in addition to what the HTTP status code provides. x-amz-RequestId HTTP header – if you want to report an issue to Amazon Web Services, the support team can better diagnose the problem if given the Request Id. Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again. For more information, see the Errors section at the bottom of this topic, as well as Common Errors.

```sql
SELECT
FragmentLengthInMilliseconds,
FragmentNumber,
FragmentSizeInBytes,
ProducerTimestamp,
ServerTimestamp
FROM aws.kinesis_video_archived_media.fragments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
