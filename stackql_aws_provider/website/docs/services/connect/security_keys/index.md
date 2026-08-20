--- 
title: security_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - security_keys
  - connect
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

Creates, updates, deletes, gets or lists a <code>security_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.security_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_security_keys"
    values={[
        { label: 'list_security_keys', value: 'list_security_keys' }
    ]}
>
<TabItem value="list_security_keys">

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
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the security key was created.</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The key of the security key.</td>
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
    <td><a href="#list_security_keys"><CopyableCode code="list_security_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>This API is in preview release for Connect Customer and is subject to change. Returns a paginated list of all security keys associated with the instance.</td>
</tr>
<tr>
    <td><a href="#disassociate_security_key"><CopyableCode code="disassociate_security_key" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-association_id"><code>association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>This API is in preview release for Connect Customer and is subject to change. Deletes the specified security key.</td>
</tr>
<tr>
    <td><a href="#associate_security_key"><CopyableCode code="associate_security_key" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API is in preview release for Connect Customer and is subject to change. Associates a security key to the instance.</td>
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
<tr id="parameter-association_id">
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_security_keys"
    values={[
        { label: 'list_security_keys', value: 'list_security_keys' }
    ]}
>
<TabItem value="list_security_keys">

This API is in preview release for Connect Customer and is subject to change. Returns a paginated list of all security keys associated with the instance.

```sql
SELECT
association_id,
creation_time,
key
FROM aws.connect.security_keys
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="disassociate_security_key"
    values={[
        { label: 'disassociate_security_key', value: 'disassociate_security_key' },
        { label: 'associate_security_key', value: 'associate_security_key' }
    ]}
>
<TabItem value="disassociate_security_key">

This API is in preview release for Connect Customer and is subject to change. Deletes the specified security key.

```sql
UPDATE aws.connect.security_keys
SET 
-- No updatable properties
WHERE 
instance_id = '{{ instance_id }}' --required
AND association_id = '{{ association_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken}}';
```
</TabItem>
<TabItem value="associate_security_key">

This API is in preview release for Connect Customer and is subject to change. Associates a security key to the instance.

```sql
UPDATE aws.connect.security_keys
SET 
Key = '{{ Key }}',
ClientToken = '{{ ClientToken }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
RETURNING
association_id;
```
</TabItem>
</Tabs>
