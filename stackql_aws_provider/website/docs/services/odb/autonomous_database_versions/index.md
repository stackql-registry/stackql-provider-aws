--- 
title: autonomous_database_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_database_versions
  - odb
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

Creates, updates, deletes, gets or lists an <code>autonomous_database_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_database_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.autonomous_database_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_autonomous_database_versions"
    values={[
        { label: 'list_autonomous_database_versions', value: 'list_autonomous_database_versions' }
    ]}
>
<TabItem value="list_autonomous_database_versions">

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
    <td><CopyableCode code="db_workload" /></td>
    <td><code>string</code></td>
    <td>The intended use of the Autonomous Database that the version supports, such as transaction processing, data warehouse, JSON database, or APEX. (OLTP, AJD, APEX, LH)</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>string</code></td>
    <td>Additional details about the Autonomous Database software version.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database software version.</td>
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
    <td><a href="#list_autonomous_database_versions"><CopyableCode code="list_autonomous_database_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the available Oracle Database software versions for Autonomous Databases.</td>
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
    defaultValue="list_autonomous_database_versions"
    values={[
        { label: 'list_autonomous_database_versions', value: 'list_autonomous_database_versions' }
    ]}
>
<TabItem value="list_autonomous_database_versions">

Lists the available Oracle Database software versions for Autonomous Databases.

```sql
SELECT
db_workload,
details,
version
FROM aws.odb.autonomous_database_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
