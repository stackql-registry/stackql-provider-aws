--- 
title: streams
hide_title: false
hide_table_of_contents: false
keywords:
  - streams
  - iot
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

Creates, updates, deletes, gets or lists a <code>streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.streams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_stream"
    values={[
        { label: 'describe_stream', value: 'describe_stream' },
        { label: 'list_streams', value: 'list_streams' }
    ]}
>
<TabItem value="describe_stream">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the stream was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the stream. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="files" /></td>
    <td><code>array</code></td>
    <td>The files to stream.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the stream was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>An IAM role IoT assumes to access your S3 files.</td>
</tr>
<tr>
    <td><CopyableCode code="streamArn" /></td>
    <td><code>string</code></td>
    <td>The stream ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="streamId" /></td>
    <td><code>string</code></td>
    <td>The stream ID. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="streamVersion" /></td>
    <td><code>integer</code></td>
    <td>The stream version.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_streams">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the stream. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="streamArn" /></td>
    <td><code>string</code></td>
    <td>The stream ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="streamId" /></td>
    <td><code>string</code></td>
    <td>The stream ID. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="streamVersion" /></td>
    <td><code>integer</code></td>
    <td>The stream version.</td>
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
    <td><a href="#describe_stream"><CopyableCode code="describe_stream" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-stream_id"><code>stream_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a stream. Requires permission to access the DescribeStream action.</td>
</tr>
<tr>
    <td><a href="#list_streams"><CopyableCode code="list_streams" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-isAscendingOrder"><code>isAscendingOrder</code></a></td>
    <td>Lists all of the streams in your Amazon Web Services account. Requires permission to access the ListStreams action.</td>
</tr>
<tr>
    <td><a href="#create_stream"><CopyableCode code="create_stream" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-stream_id"><code>stream_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-files"><code>files</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files associated with a stream. Requires permission to access the CreateStream action.</td>
</tr>
<tr>
    <td><a href="#update_stream"><CopyableCode code="update_stream" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-stream_id"><code>stream_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing stream. The stream version will be incremented by one. Requires permission to access the UpdateStream action.</td>
</tr>
<tr>
    <td><a href="#delete_stream"><CopyableCode code="delete_stream" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-stream_id"><code>stream_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a stream. Requires permission to access the DeleteStream action.</td>
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
<tr id="parameter-stream_id">
    <td><CopyableCode code="stream_id" /></td>
    <td><code>string</code></td>
    <td>The stream ID.</td>
</tr>
<tr id="parameter-isAscendingOrder">
    <td><CopyableCode code="isAscendingOrder" /></td>
    <td><code>boolean</code></td>
    <td>Set to true to return the list of streams in ascending order.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at a time.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used to get the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_stream"
    values={[
        { label: 'describe_stream', value: 'describe_stream' },
        { label: 'list_streams', value: 'list_streams' }
    ]}
>
<TabItem value="describe_stream">

Gets information about a stream. Requires permission to access the DescribeStream action.

```sql
SELECT
createdAt,
description,
files,
lastUpdatedAt,
roleArn,
streamArn,
streamId,
streamVersion
FROM aws.iot.streams
WHERE stream_id = '{{ stream_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_streams">

Lists all of the streams in your Amazon Web Services account. Requires permission to access the ListStreams action.

```sql
SELECT
description,
streamArn,
streamId,
streamVersion
FROM aws.iot.streams
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND isAscendingOrder = '{{ isAscendingOrder }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_stream"
    values={[
        { label: 'create_stream', value: 'create_stream' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_stream">

Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files associated with a stream. Requires permission to access the CreateStream action.

```sql
INSERT INTO aws.iot.streams (
description,
files,
roleArn,
tags,
stream_id,
region
)
SELECT 
'{{ description }}',
'{{ files }}' /* required */,
'{{ roleArn }}' /* required */,
'{{ tags }}',
'{{ stream_id }}',
'{{ region }}'
RETURNING
description,
streamArn,
streamId,
streamVersion
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: streams
  props:
    - name: stream_id
      value: "{{ stream_id }}"
      description: Required parameter for the streams resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the streams resource.
    - name: description
      value: "{{ description }}"
    - name: files
      value:
        - fileId: {{ fileId }}
          s3Location:
            bucket: "{{ bucket }}"
            key: "{{ key }}"
            version: "{{ version }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_stream"
    values={[
        { label: 'update_stream', value: 'update_stream' }
    ]}
>
<TabItem value="update_stream">

Updates an existing stream. The stream version will be incremented by one. Requires permission to access the UpdateStream action.

```sql
UPDATE aws.iot.streams
SET 
description = '{{ description }}',
files = '{{ files }}',
roleArn = '{{ roleArn }}'
WHERE 
stream_id = '{{ stream_id }}' --required
AND region = '{{ region }}' --required
RETURNING
description,
streamArn,
streamId,
streamVersion;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_stream"
    values={[
        { label: 'delete_stream', value: 'delete_stream' }
    ]}
>
<TabItem value="delete_stream">

Deletes a stream. Requires permission to access the DeleteStream action.

```sql
DELETE FROM aws.iot.streams
WHERE stream_id = '{{ stream_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
