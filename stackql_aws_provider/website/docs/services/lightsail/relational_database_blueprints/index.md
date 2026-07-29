--- 
title: relational_database_blueprints
hide_title: false
hide_table_of_contents: false
keywords:
  - relational_database_blueprints
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

Creates, updates, deletes, gets or lists a <code>relational_database_blueprints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="relational_database_blueprints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.relational_database_blueprints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_relational_database_blueprints"
    values={[
        { label: 'get_relational_database_blueprints', value: 'get_relational_database_blueprints' }
    ]}
>
<TabItem value="get_relational_database_blueprints">

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
    <td><CopyableCode code="blueprint_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the database blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The database software of the database blueprint (for example, MySQL). (mysql)</td>
</tr>
<tr>
    <td><CopyableCode code="engine_description" /></td>
    <td><code>string</code></td>
    <td>The description of the database engine for the database blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version" /></td>
    <td><code>string</code></td>
    <td>The database engine version for the database blueprint (for example, 5.7.23).</td>
</tr>
<tr>
    <td><CopyableCode code="engine_version_description" /></td>
    <td><code>string</code></td>
    <td>The description of the database engine version for the database blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="is_engine_default" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether the engine version is the default for the database blueprint.</td>
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
    <td><a href="#get_relational_database_blueprints"><CopyableCode code="get_relational_database_blueprints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of available database blueprints in Amazon Lightsail. A blueprint describes the major engine version of a database. You can use a blueprint ID to create a new database that runs a specific database engine.</td>
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
    defaultValue="get_relational_database_blueprints"
    values={[
        { label: 'get_relational_database_blueprints', value: 'get_relational_database_blueprints' }
    ]}
>
<TabItem value="get_relational_database_blueprints">

Returns a list of available database blueprints in Amazon Lightsail. A blueprint describes the major engine version of a database. You can use a blueprint ID to create a new database that runs a specific database engine.

```sql
SELECT
blueprint_id,
engine,
engine_description,
engine_version,
engine_version_description,
is_engine_default
FROM aws.lightsail.relational_database_blueprints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
