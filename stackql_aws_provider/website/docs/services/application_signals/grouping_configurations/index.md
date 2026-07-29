--- 
title: grouping_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - grouping_configurations
  - application_signals
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

Creates, updates, deletes, gets or lists a <code>grouping_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="grouping_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_signals.grouping_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#put_grouping_configuration"><CopyableCode code="put_grouping_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GroupingAttributeDefinitions"><code>GroupingAttributeDefinitions</code></a></td>
    <td></td>
    <td>Creates or updates the grouping configuration for this account. This operation allows you to define custom grouping attributes that determine how services are logically grouped based on telemetry attributes, Amazon Web Services tags, or predefined mappings. These grouping attributes can then be used to organize and filter services in the Application Signals console and APIs.</td>
</tr>
<tr>
    <td><a href="#delete_grouping_configuration"><CopyableCode code="delete_grouping_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the grouping configuration for this account. This removes all custom grouping attribute definitions that were previously configured.</td>
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

## `REPLACE` examples

<Tabs
    defaultValue="put_grouping_configuration"
    values={[
        { label: 'put_grouping_configuration', value: 'put_grouping_configuration' }
    ]}
>
<TabItem value="put_grouping_configuration">

Creates or updates the grouping configuration for this account. This operation allows you to define custom grouping attributes that determine how services are logically grouped based on telemetry attributes, Amazon Web Services tags, or predefined mappings. These grouping attributes can then be used to organize and filter services in the Application Signals console and APIs.

```sql
REPLACE aws.application_signals.grouping_configurations
SET 
GroupingAttributeDefinitions = '{{ GroupingAttributeDefinitions }}'
WHERE 
region = '{{ region }}' --required
AND GroupingAttributeDefinitions = '{{ GroupingAttributeDefinitions }}' --required
RETURNING
grouping_configuration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_grouping_configuration"
    values={[
        { label: 'delete_grouping_configuration', value: 'delete_grouping_configuration' }
    ]}
>
<TabItem value="delete_grouping_configuration">

Deletes the grouping configuration for this account. This removes all custom grouping attribute definitions that were previously configured.

```sql
DELETE FROM aws.application_signals.grouping_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
