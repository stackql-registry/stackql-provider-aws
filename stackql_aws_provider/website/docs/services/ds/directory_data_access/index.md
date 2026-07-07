--- 
title: directory_data_access
hide_title: false
hide_table_of_contents: false
keywords:
  - directory_data_access
  - ds
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

Creates, updates, deletes, gets or lists a <code>directory_data_access</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="directory_data_access" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.directory_data_access" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_directory_data_access"
    values={[
        { label: 'describe_directory_data_access', value: 'describe_directory_data_access' }
    ]}
>
<TabItem value="describe_directory_data_access">

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
    <td><CopyableCode code="DataAccessStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of data access through the Directory Service Data API. (Disabled, Disabling, Enabled, Enabling, Failed)</td>
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
    <td><a href="#describe_directory_data_access"><CopyableCode code="describe_directory_data_access" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Obtains status of directory data access enablement through the Directory Service Data API for the specified directory.</td>
</tr>
<tr>
    <td><a href="#disable_directory_data_access"><CopyableCode code="disable_directory_data_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a></td>
    <td></td>
    <td>Deactivates access to directory data via the Directory Service Data API for the specified directory. For more information, see Directory Service Data API Reference.</td>
</tr>
<tr>
    <td><a href="#enable_directory_data_access"><CopyableCode code="enable_directory_data_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a></td>
    <td></td>
    <td>Enables access to directory data via the Directory Service Data API for the specified directory. For more information, see Directory Service Data API Reference.</td>
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
    defaultValue="describe_directory_data_access"
    values={[
        { label: 'describe_directory_data_access', value: 'describe_directory_data_access' }
    ]}
>
<TabItem value="describe_directory_data_access">

Obtains status of directory data access enablement through the Directory Service Data API for the specified directory.

```sql
SELECT
DataAccessStatus
FROM aws.ds.directory_data_access
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_directory_data_access"
    values={[
        { label: 'disable_directory_data_access', value: 'disable_directory_data_access' },
        { label: 'enable_directory_data_access', value: 'enable_directory_data_access' }
    ]}
>
<TabItem value="disable_directory_data_access">

Deactivates access to directory data via the Directory Service Data API for the specified directory. For more information, see Directory Service Data API Reference.

```sql
EXEC aws.ds.directory_data_access.disable_directory_data_access 
@region='{{ region }}' --required 
@@json=
'{
"DirectoryId": "{{ DirectoryId }}"
}'
;
```
</TabItem>
<TabItem value="enable_directory_data_access">

Enables access to directory data via the Directory Service Data API for the specified directory. For more information, see Directory Service Data API Reference.

```sql
EXEC aws.ds.directory_data_access.enable_directory_data_access 
@region='{{ region }}' --required 
@@json=
'{
"DirectoryId": "{{ DirectoryId }}"
}'
;
```
</TabItem>
</Tabs>
