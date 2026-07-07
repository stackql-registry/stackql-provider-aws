--- 
title: databases
hide_title: false
hide_table_of_contents: false
keywords:
  - databases
  - athena
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

Creates, updates, deletes, gets or lists a <code>databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="databases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.athena.databases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_database"
    values={[
        { label: 'get_database', value: 'get_database' },
        { label: 'list_databases', value: 'list_databases' }
    ]}
>
<TabItem value="get_database">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>An optional description of the database.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the database.</td>
</tr>
<tr>
    <td><CopyableCode code="Parameters" /></td>
    <td><code>object</code></td>
    <td>A set of custom key/value pairs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_databases">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>An optional description of the database.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the database.</td>
</tr>
<tr>
    <td><CopyableCode code="Parameters" /></td>
    <td><code>object</code></td>
    <td>A set of custom key/value pairs.</td>
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
    <td><a href="#get_database"><CopyableCode code="get_database" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a database object for the specified database and data catalog.</td>
</tr>
<tr>
    <td><a href="#list_databases"><CopyableCode code="list_databases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the databases in the specified data catalog.</td>
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
    defaultValue="get_database"
    values={[
        { label: 'get_database', value: 'get_database' },
        { label: 'list_databases', value: 'list_databases' }
    ]}
>
<TabItem value="get_database">

Returns a database object for the specified database and data catalog.

```sql
SELECT
Description,
Name,
Parameters
FROM aws.athena.databases
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_databases">

Lists the databases in the specified data catalog.

```sql
SELECT
Description,
Name,
Parameters
FROM aws.athena.databases
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
