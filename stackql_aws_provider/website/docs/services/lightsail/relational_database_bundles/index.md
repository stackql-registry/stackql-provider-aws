--- 
title: relational_database_bundles
hide_title: false
hide_table_of_contents: false
keywords:
  - relational_database_bundles
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>relational_database_bundles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="relational_database_bundles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.relational_database_bundles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_relational_database_bundles"
    values={[
        { label: 'get_relational_database_bundles', value: 'get_relational_database_bundles' }
    ]}
>
<TabItem value="get_relational_database_bundles">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name for the database bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="bundleId" /></td>
    <td><code>string</code></td>
    <td>The ID for the database bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="cpuCount" /></td>
    <td><code>integer</code></td>
    <td>The number of virtual CPUs (vCPUs) for the database bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="diskSizeInGb" /></td>
    <td><code>integer</code></td>
    <td>The size of the disk for the database bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="isActive" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether the database bundle is active.</td>
</tr>
<tr>
    <td><CopyableCode code="isEncrypted" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether the database bundle is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="price" /></td>
    <td><code>number (float)</code></td>
    <td>The cost of the database bundle in US currency.</td>
</tr>
<tr>
    <td><CopyableCode code="ramSizeInGb" /></td>
    <td><code>number (float)</code></td>
    <td>The amount of RAM in GB (for example, 2.0) for the database bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="transferPerMonthInGb" /></td>
    <td><code>integer</code></td>
    <td>The data transfer rate per month in GB for the database bundle.</td>
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
    <td><a href="#get_relational_database_bundles"><CopyableCode code="get_relational_database_bundles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the performance specifications for a database. You can use a bundle ID to create a new database with explicit performance specifications.</td>
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
    defaultValue="get_relational_database_bundles"
    values={[
        { label: 'get_relational_database_bundles', value: 'get_relational_database_bundles' }
    ]}
>
<TabItem value="get_relational_database_bundles">

Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the performance specifications for a database. You can use a bundle ID to create a new database with explicit performance specifications.

```sql
SELECT
name,
bundleId,
cpuCount,
diskSizeInGb,
isActive,
isEncrypted,
price,
ramSizeInGb,
transferPerMonthInGb
FROM aws.lightsail.relational_database_bundles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
