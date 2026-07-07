--- 
title: synchronization_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - synchronization_configurations
  - s3files
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

Creates, updates, deletes, gets or lists a <code>synchronization_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="synchronization_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3files.synchronization_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_synchronization_configuration"
    values={[
        { label: 'get_synchronization_configuration', value: 'get_synchronization_configuration' }
    ]}
>
<TabItem value="get_synchronization_configuration">

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
    <td><CopyableCode code="expirationDataRules" /></td>
    <td><code>array</code></td>
    <td>An array of expiration data rules that control when cached data expires from the file system.</td>
</tr>
<tr>
    <td><CopyableCode code="importDataRules" /></td>
    <td><code>array</code></td>
    <td>An array of import data rules that control how data is imported from S3 into the file system.</td>
</tr>
<tr>
    <td><CopyableCode code="latestVersionNumber" /></td>
    <td><code>integer</code></td>
    <td>The version number of the synchronization configuration. Use this value with PutSynchronizationConfiguration to ensure optimistic concurrency control.</td>
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
    <td><a href="#get_synchronization_configuration"><CopyableCode code="get_synchronization_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-file_system_id"><code>file_system_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the synchronization configuration for the specified S3 File System, including import data rules and expiration data rules.</td>
</tr>
<tr>
    <td><a href="#put_synchronization_configuration"><CopyableCode code="put_synchronization_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-file_system_id"><code>file_system_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-importDataRules"><code>importDataRules</code></a>, <a href="#parameter-expirationDataRules"><code>expirationDataRules</code></a></td>
    <td></td>
    <td>Creates or updates the synchronization configuration for the specified S3 File System, including import data rules and expiration data rules.</td>
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
<tr id="parameter-file_system_id">
    <td><CopyableCode code="file_system_id" /></td>
    <td><code>string</code></td>
    <td>The ID or Amazon Resource Name (ARN) of the S3 File System to configure synchronization for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_synchronization_configuration"
    values={[
        { label: 'get_synchronization_configuration', value: 'get_synchronization_configuration' }
    ]}
>
<TabItem value="get_synchronization_configuration">

Returns the synchronization configuration for the specified S3 File System, including import data rules and expiration data rules.

```sql
SELECT
expirationDataRules,
importDataRules,
latestVersionNumber
FROM aws.s3files.synchronization_configurations
WHERE file_system_id = '{{ file_system_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_synchronization_configuration"
    values={[
        { label: 'put_synchronization_configuration', value: 'put_synchronization_configuration' }
    ]}
>
<TabItem value="put_synchronization_configuration">

Creates or updates the synchronization configuration for the specified S3 File System, including import data rules and expiration data rules.

```sql
REPLACE aws.s3files.synchronization_configurations
SET 
latestVersionNumber = {{ latestVersionNumber }},
importDataRules = '{{ importDataRules }}',
expirationDataRules = '{{ expirationDataRules }}'
WHERE 
file_system_id = '{{ file_system_id }}' --required
AND region = '{{ region }}' --required
AND importDataRules = '{{ importDataRules }}' --required
AND expirationDataRules = '{{ expirationDataRules }}' --required;
```
</TabItem>
</Tabs>
