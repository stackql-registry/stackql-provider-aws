--- 
title: connection_functions
hide_title: false
hide_table_of_contents: false
keywords:
  - connection_functions
  - cloudfront
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

Creates, updates, deletes, gets or lists a <code>connection_functions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connection_functions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.connection_functions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_connection_function"
    values={[
        { label: 'describe_connection_function', value: 'describe_connection_function' },
        { label: 'list_connection_functions', value: 'list_connection_functions' }
    ]}
>
<TabItem value="describe_connection_function">

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
    <td><CopyableCode code="ConnectionFunctionSummary" /></td>
    <td><code>string</code></td>
    <td>The connection function's summary.</td>
</tr>
<tr>
    <td><CopyableCode code="ETag" /></td>
    <td><code>string</code></td>
    <td>The version identifier for the current version of the connection function.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_connection_functions">

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
    <td><CopyableCode code="ConnectionFunctionArn" /></td>
    <td><code>string</code></td>
    <td>The connection function Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionFunctionConfig" /></td>
    <td><code>string</code></td>
    <td>Contains configuration information about a CloudFront function.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string</code></td>
    <td>The connection function created time.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The connection function ID.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string</code></td>
    <td>The connection function last modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The connection function name.</td>
</tr>
<tr>
    <td><CopyableCode code="Stage" /></td>
    <td><code>string</code></td>
    <td>The connection function stage.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The connection function status.</td>
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
    <td><a href="#describe_connection_function"><CopyableCode code="describe_connection_function" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Stage"><code>Stage</code></a></td>
    <td>Describes a connection function.</td>
</tr>
<tr>
    <td><a href="#list_connection_functions"><CopyableCode code="list_connection_functions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists connection functions.</td>
</tr>
<tr>
    <td><a href="#create_connection_function"><CopyableCode code="create_connection_function" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectionFunctionConfig"><code>ConnectionFunctionConfig</code></a>, <a href="#parameter-ConnectionFunctionCode"><code>ConnectionFunctionCode</code></a></td>
    <td></td>
    <td>Creates a connection function.</td>
</tr>
<tr>
    <td><a href="#update_connection_function"><CopyableCode code="update_connection_function" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectionFunctionConfig"><code>ConnectionFunctionConfig</code></a>, <a href="#parameter-ConnectionFunctionCode"><code>ConnectionFunctionCode</code></a></td>
    <td></td>
    <td>Updates a connection function.</td>
</tr>
<tr>
    <td><a href="#delete_connection_function"><CopyableCode code="delete_connection_function" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a connection function.</td>
</tr>
<tr>
    <td><a href="#get_connection_function"><CopyableCode code="get_connection_function" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Stage"><code>Stage</code></a></td>
    <td>Gets a connection function.</td>
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
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The current version (ETag value) of the connection function you are deleting.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The connection function's ID.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The connection function's identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Stage">
    <td><CopyableCode code="Stage" /></td>
    <td><code>string</code></td>
    <td>The connection function's stage.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_connection_function"
    values={[
        { label: 'describe_connection_function', value: 'describe_connection_function' },
        { label: 'list_connection_functions', value: 'list_connection_functions' }
    ]}
>
<TabItem value="describe_connection_function">

Describes a connection function.

```sql
SELECT
ConnectionFunctionSummary,
ETag
FROM aws.cloudfront.connection_functions
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
AND Stage = '{{ Stage }}'
;
```
</TabItem>
<TabItem value="list_connection_functions">

Lists connection functions.

```sql
SELECT
ConnectionFunctionArn,
ConnectionFunctionConfig,
CreatedTime,
Id,
LastModifiedTime,
Name,
Stage,
Status
FROM aws.cloudfront.connection_functions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connection_function"
    values={[
        { label: 'create_connection_function', value: 'create_connection_function' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connection_function">

Creates a connection function.

```sql
INSERT INTO aws.cloudfront.connection_functions (
Name,
ConnectionFunctionConfig,
ConnectionFunctionCode,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ ConnectionFunctionConfig }}' /* required */,
'{{ ConnectionFunctionCode }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
ConnectionFunctionSummary,
ETag,
Location
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connection_functions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connection_functions resource.
    - name: Name
      value: "{{ Name }}"
    - name: ConnectionFunctionConfig
      description: |
        Contains configuration information about a CloudFront function.
      value:
        Comment: "{{ Comment }}"
        Runtime: "{{ Runtime }}"
        KeyValueStoreAssociations:
          Quantity: {{ Quantity }}
          Items:
            - KeyValueStoreARN: "{{ KeyValueStoreARN }}"
    - name: ConnectionFunctionCode
      value: "{{ ConnectionFunctionCode }}"
    - name: Tags
      description: |
        A complex type that contains zero or more Tag elements.
      value:
        Items:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connection_function"
    values={[
        { label: 'update_connection_function', value: 'update_connection_function' }
    ]}
>
<TabItem value="update_connection_function">

Updates a connection function.

```sql
UPDATE aws.cloudfront.connection_functions
SET 
ConnectionFunctionConfig = '{{ ConnectionFunctionConfig }}',
ConnectionFunctionCode = '{{ ConnectionFunctionCode }}'
WHERE 
id = '{{ id }}' --required
AND `If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
AND ConnectionFunctionConfig = '{{ ConnectionFunctionConfig }}' --required
AND ConnectionFunctionCode = '{{ ConnectionFunctionCode }}' --required
RETURNING
ConnectionFunctionSummary,
ETag;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connection_function"
    values={[
        { label: 'delete_connection_function', value: 'delete_connection_function' }
    ]}
>
<TabItem value="delete_connection_function">

Deletes a connection function.

```sql
DELETE FROM aws.cloudfront.connection_functions
WHERE id = '{{ id }}' --required
AND `If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_connection_function"
    values={[
        { label: 'get_connection_function', value: 'get_connection_function' }
    ]}
>
<TabItem value="get_connection_function">

Gets a connection function.

```sql
EXEC aws.cloudfront.connection_functions.get_connection_function 
@identifier='{{ identifier }}' --required, 
@region='{{ region }}' --required, 
@Stage='{{ Stage }}'
;
```
</TabItem>
</Tabs>
