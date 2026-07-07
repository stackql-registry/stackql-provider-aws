--- 
title: retention_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - retention_configurations
  - config
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

Creates, updates, deletes, gets or lists a <code>retention_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="retention_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.retention_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_retention_configurations"
    values={[
        { label: 'describe_retention_configurations', value: 'describe_retention_configurations' }
    ]}
>
<TabItem value="describe_retention_configurations">

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
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the retention configuration object. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RetentionPeriodInDays" /></td>
    <td><code>integer</code></td>
    <td>Number of days Config stores your historical information. Currently, only applicable to the configuration item history.</td>
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
    <td><a href="#describe_retention_configurations"><CopyableCode code="describe_retention_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details of one or more retention configurations. If the retention configuration name is not specified, this operation returns the details for all the retention configurations for that account. Currently, Config supports only one retention configuration per region in your account.</td>
</tr>
<tr>
    <td><a href="#put_retention_configuration"><CopyableCode code="put_retention_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RetentionPeriodInDays"><code>RetentionPeriodInDays</code></a></td>
    <td></td>
    <td>Creates and updates the retention configuration with details about retention period (number of days) that Config stores your historical information. The API creates the RetentionConfiguration object and names the object as default. When you have a RetentionConfiguration object named default, calling the API modifies the default object. Currently, Config supports only one retention configuration per region in your account.</td>
</tr>
<tr>
    <td><a href="#delete_retention_configuration"><CopyableCode code="delete_retention_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the retention configuration.</td>
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
    defaultValue="describe_retention_configurations"
    values={[
        { label: 'describe_retention_configurations', value: 'describe_retention_configurations' }
    ]}
>
<TabItem value="describe_retention_configurations">

Returns the details of one or more retention configurations. If the retention configuration name is not specified, this operation returns the details for all the retention configurations for that account. Currently, Config supports only one retention configuration per region in your account.

```sql
SELECT
Name,
RetentionPeriodInDays
FROM aws.config.retention_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_retention_configuration"
    values={[
        { label: 'put_retention_configuration', value: 'put_retention_configuration' }
    ]}
>
<TabItem value="put_retention_configuration">

Creates and updates the retention configuration with details about retention period (number of days) that Config stores your historical information. The API creates the RetentionConfiguration object and names the object as default. When you have a RetentionConfiguration object named default, calling the API modifies the default object. Currently, Config supports only one retention configuration per region in your account.

```sql
REPLACE aws.config.retention_configurations
SET 
RetentionPeriodInDays = {{ RetentionPeriodInDays }}
WHERE 
region = '{{ region }}' --required
AND RetentionPeriodInDays = '{{ RetentionPeriodInDays }}' --required
RETURNING
RetentionConfiguration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_retention_configuration"
    values={[
        { label: 'delete_retention_configuration', value: 'delete_retention_configuration' }
    ]}
>
<TabItem value="delete_retention_configuration">

Deletes the retention configuration.

```sql
DELETE FROM aws.config.retention_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
