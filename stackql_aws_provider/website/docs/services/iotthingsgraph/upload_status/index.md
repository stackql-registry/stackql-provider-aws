--- 
title: upload_status
hide_title: false
hide_table_of_contents: false
keywords:
  - upload_status
  - iotthingsgraph
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

Creates, updates, deletes, gets or lists a <code>upload_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="upload_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotthingsgraph.upload_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_upload_status"
    values={[
        { label: 'get_upload_status', value: 'get_upload_status' }
    ]}
>
<TabItem value="get_upload_status">

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
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date at which the upload was created.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>array</code></td>
    <td>The reason for an upload failure.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the upload.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the upload's namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the user's namespace. Defaults to the latest version of the user's namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="upload_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the upload.</td>
</tr>
<tr>
    <td><CopyableCode code="upload_status" /></td>
    <td><code>string</code></td>
    <td>The status of the upload. The initial status is IN_PROGRESS. The response show all validation failures if the upload fails. (IN_PROGRESS, SUCCEEDED, FAILED)</td>
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
    <td><a href="#get_upload_status"><CopyableCode code="get_upload_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the status of the specified upload.</td>
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
    defaultValue="get_upload_status"
    values={[
        { label: 'get_upload_status', value: 'get_upload_status' }
    ]}
>
<TabItem value="get_upload_status">

Gets the status of the specified upload.

```sql
SELECT
created_date,
failure_reason,
namespace_arn,
namespace_name,
namespace_version,
upload_id,
upload_status
FROM aws.iotthingsgraph.upload_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
