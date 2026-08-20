--- 
title: conversion_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - conversion_configurations
  - dms
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

Creates, updates, deletes, gets or lists a <code>conversion_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="conversion_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.conversion_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_conversion_configuration"
    values={[
        { label: 'describe_conversion_configuration', value: 'describe_conversion_configuration' }
    ]}
>
<TabItem value="describe_conversion_configuration">

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
    <td><CopyableCode code="conversion_configuration" /></td>
    <td><code>string</code></td>
    <td>A JSON string that contains the schema conversion settings for the migration project. For the format and available settings, see Specifying schema conversion settings for migration projects.</td>
</tr>
<tr>
    <td><CopyableCode code="migration_project_identifier" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) for the schema conversion project.</td>
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
    <td><a href="#describe_conversion_configuration"><CopyableCode code="describe_conversion_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns configuration parameters for a schema conversion project. Required permissions: dms:DescribeConversionConfiguration. For more information, see Actions, resources, and condition keys for Database Migration Service.</td>
</tr>
<tr>
    <td><a href="#modify_conversion_configuration"><CopyableCode code="modify_conversion_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a>, <a href="#parameter-ConversionConfiguration"><code>ConversionConfiguration</code></a></td>
    <td></td>
    <td>Modifies the specified schema conversion configuration using the provided parameters. Required permissions: dms:UpdateConversionConfiguration. For more information, see Actions, resources, and condition keys for Database Migration Service.</td>
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
    defaultValue="describe_conversion_configuration"
    values={[
        { label: 'describe_conversion_configuration', value: 'describe_conversion_configuration' }
    ]}
>
<TabItem value="describe_conversion_configuration">

Returns configuration parameters for a schema conversion project. Required permissions: dms:DescribeConversionConfiguration. For more information, see Actions, resources, and condition keys for Database Migration Service.

```sql
SELECT
conversion_configuration,
migration_project_identifier
FROM aws.dms.conversion_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_conversion_configuration"
    values={[
        { label: 'modify_conversion_configuration', value: 'modify_conversion_configuration' }
    ]}
>
<TabItem value="modify_conversion_configuration">

Modifies the specified schema conversion configuration using the provided parameters. Required permissions: dms:UpdateConversionConfiguration. For more information, see Actions, resources, and condition keys for Database Migration Service.

```sql
UPDATE aws.dms.conversion_configurations
SET 
MigrationProjectIdentifier = '{{ MigrationProjectIdentifier }}',
ConversionConfiguration = '{{ ConversionConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND MigrationProjectIdentifier = '{{ MigrationProjectIdentifier }}' --required
AND ConversionConfiguration = '{{ ConversionConfiguration }}' --required
RETURNING
migration_project_identifier;
```
</TabItem>
</Tabs>
