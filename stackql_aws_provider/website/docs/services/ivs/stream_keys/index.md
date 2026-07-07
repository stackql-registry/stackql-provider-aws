--- 
title: stream_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - stream_keys
  - ivs
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

Creates, updates, deletes, gets or lists a <code>stream_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stream_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivs.stream_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_stream_key"
    values={[
        { label: 'batch_get_stream_key', value: 'batch_get_stream_key' },
        { label: 'get_stream_key', value: 'get_stream_key' },
        { label: 'list_stream_keys', value: 'list_stream_keys' }
    ]}
>
<TabItem value="batch_get_stream_key">

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
    <td><CopyableCode code="accessControlAllowOrigin" /></td>
    <td><code>string</code></td>
    <td>See Access-Control-Allow-Origin in the MDN Web Docs.</td>
</tr>
<tr>
    <td><CopyableCode code="accessControlExposeHeaders" /></td>
    <td><code>string</code></td>
    <td>See Access-Control-Expose-Headers in the MDN Web Docs.</td>
</tr>
<tr>
    <td><CopyableCode code="cacheControl" /></td>
    <td><code>string</code></td>
    <td>See Cache-Control in the MDN Web Docs.</td>
</tr>
<tr>
    <td><CopyableCode code="contentSecurityPolicy" /></td>
    <td><code>string</code></td>
    <td>See Content-Security-Policy in the MDN Web Docs.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="streamKeys" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="strictTransportSecurity" /></td>
    <td><code>string</code></td>
    <td>See Strict-Transport-Security in the MDN Web Docs.</td>
</tr>
<tr>
    <td><CopyableCode code="xContentTypeOptions" /></td>
    <td><code>string</code></td>
    <td>See X-Content-Type-Options in the MDN Web Docs.</td>
</tr>
<tr>
    <td><CopyableCode code="xFrameOptions" /></td>
    <td><code>string</code></td>
    <td>See X-Frame-Options in the MDN Web Docs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_stream_key">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Stream-key ARN. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:stream-key/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="channelArn" /></td>
    <td><code>string</code></td>
    <td>Channel ARN for the stream. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:channel/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the resource. Array of 1-50 maps, each of the form string:string (key:value). See Best practices and strategies in Tagging Amazon Web Services Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>Stream-key value.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_stream_keys">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Stream-key ARN. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:stream-key/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="channelArn" /></td>
    <td><code>string</code></td>
    <td>Channel ARN for the stream. (pattern: &lt;code&gt;arn:aws:ivs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:channel/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags attached to the resource. Array of 1-50 maps, each of the form string:string (key:value). See Best practices and strategies in Tagging Amazon Web Services Resources and Tag Editor for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.</td>
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
    <td><a href="#batch_get_stream_key"><CopyableCode code="batch_get_stream_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Performs GetStreamKey on multiple ARNs simultaneously.</td>
</tr>
<tr>
    <td><a href="#get_stream_key"><CopyableCode code="get_stream_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets stream-key information for a specified ARN.</td>
</tr>
<tr>
    <td><a href="#list_stream_keys"><CopyableCode code="list_stream_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets summary information about stream keys for the specified channel.</td>
</tr>
<tr>
    <td><a href="#create_stream_key"><CopyableCode code="create_stream_key" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-channelArn"><code>channelArn</code></a></td>
    <td></td>
    <td>Creates a stream key, used to initiate a stream, for the specified channel ARN. Note that CreateChannel creates a stream key. If you subsequently use CreateStreamKey on the same channel, it will fail because a stream key already exists and there is a limit of 1 stream key per channel. To reset the stream key on a channel, use DeleteStreamKey and then CreateStreamKey.</td>
</tr>
<tr>
    <td><a href="#delete_stream_key"><CopyableCode code="delete_stream_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the stream key for the specified ARN, so it can no longer be used to stream.</td>
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
    defaultValue="batch_get_stream_key"
    values={[
        { label: 'batch_get_stream_key', value: 'batch_get_stream_key' },
        { label: 'get_stream_key', value: 'get_stream_key' },
        { label: 'list_stream_keys', value: 'list_stream_keys' }
    ]}
>
<TabItem value="batch_get_stream_key">

Performs GetStreamKey on multiple ARNs simultaneously.

```sql
SELECT
accessControlAllowOrigin,
accessControlExposeHeaders,
cacheControl,
contentSecurityPolicy,
errors,
streamKeys,
strictTransportSecurity,
xContentTypeOptions,
xFrameOptions
FROM aws.ivs.stream_keys
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_stream_key">

Gets stream-key information for a specified ARN.

```sql
SELECT
arn,
channelArn,
tags,
value
FROM aws.ivs.stream_keys
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_stream_keys">

Gets summary information about stream keys for the specified channel.

```sql
SELECT
arn,
channelArn,
tags
FROM aws.ivs.stream_keys
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_stream_key"
    values={[
        { label: 'create_stream_key', value: 'create_stream_key' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_stream_key">

Creates a stream key, used to initiate a stream, for the specified channel ARN. Note that CreateChannel creates a stream key. If you subsequently use CreateStreamKey on the same channel, it will fail because a stream key already exists and there is a limit of 1 stream key per channel. To reset the stream key on a channel, use DeleteStreamKey and then CreateStreamKey.

```sql
INSERT INTO aws.ivs.stream_keys (
channelArn,
tags,
region
)
SELECT 
'{{ channelArn }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
streamKey
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: stream_keys
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the stream_keys resource.
    - name: channelArn
      value: "{{ channelArn }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_stream_key"
    values={[
        { label: 'delete_stream_key', value: 'delete_stream_key' }
    ]}
>
<TabItem value="delete_stream_key">

Deletes the stream key for the specified ARN, so it can no longer be used to stream.

```sql
DELETE FROM aws.ivs.stream_keys
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
