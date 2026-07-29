--- 
title: relational_database_parameters
hide_title: false
hide_table_of_contents: false
keywords:
  - relational_database_parameters
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

Creates, updates, deletes, gets or lists a <code>relational_database_parameters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="relational_database_parameters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.relational_database_parameters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_relational_database_parameters"
    values={[
        { label: 'get_relational_database_parameters', value: 'get_relational_database_parameters' }
    ]}
>
<TabItem value="get_relational_database_parameters">

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
    <td><CopyableCode code="allowed_values" /></td>
    <td><code>string</code></td>
    <td>Specifies the valid range of values for the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="apply_method" /></td>
    <td><code>string</code></td>
    <td>Indicates when parameter updates are applied. Can be immediate or pending-reboot.</td>
</tr>
<tr>
    <td><CopyableCode code="apply_type" /></td>
    <td><code>string</code></td>
    <td>Specifies the engine-specific parameter type.</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>Specifies the valid data type for the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Provides a description of the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="is_modifiable" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether the parameter can be modified.</td>
</tr>
<tr>
    <td><CopyableCode code="parameter_name" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="parameter_value" /></td>
    <td><code>string</code></td>
    <td>Specifies the value of the parameter.</td>
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
    <td><a href="#get_relational_database_parameters"><CopyableCode code="get_relational_database_parameters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns all of the runtime parameters offered by the underlying database software, or engine, for a specific database in Amazon Lightsail. In addition to the parameter names and values, this operation returns other information about each parameter. This information includes whether changes require a reboot, whether the parameter is modifiable, the allowed values, and the data types.</td>
</tr>
<tr>
    <td><a href="#update_relational_database_parameters"><CopyableCode code="update_relational_database_parameters" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-relationalDatabaseName"><code>relationalDatabaseName</code></a>, <a href="#parameter-parameters"><code>parameters</code></a></td>
    <td></td>
    <td>Allows the update of one or more parameters of a database in Amazon Lightsail. Parameter updates don't cause outages; therefore, their application is not subject to the preferred maintenance window. However, there are two ways in which parameter updates are applied: dynamic or pending-reboot. Parameters marked with a dynamic apply type are applied immediately. Parameters marked with a pending-reboot apply type are applied only after the database is rebooted using the reboot relational database operation. The update relational database parameters operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the Amazon Lightsail Developer Guide.</td>
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
    defaultValue="get_relational_database_parameters"
    values={[
        { label: 'get_relational_database_parameters', value: 'get_relational_database_parameters' }
    ]}
>
<TabItem value="get_relational_database_parameters">

Returns all of the runtime parameters offered by the underlying database software, or engine, for a specific database in Amazon Lightsail. In addition to the parameter names and values, this operation returns other information about each parameter. This information includes whether changes require a reboot, whether the parameter is modifiable, the allowed values, and the data types.

```sql
SELECT
allowed_values,
apply_method,
apply_type,
data_type,
description,
is_modifiable,
parameter_name,
parameter_value
FROM aws.lightsail.relational_database_parameters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_relational_database_parameters"
    values={[
        { label: 'update_relational_database_parameters', value: 'update_relational_database_parameters' }
    ]}
>
<TabItem value="update_relational_database_parameters">

Allows the update of one or more parameters of a database in Amazon Lightsail. Parameter updates don't cause outages; therefore, their application is not subject to the preferred maintenance window. However, there are two ways in which parameter updates are applied: dynamic or pending-reboot. Parameters marked with a dynamic apply type are applied immediately. Parameters marked with a pending-reboot apply type are applied only after the database is rebooted using the reboot relational database operation. The update relational database parameters operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the Amazon Lightsail Developer Guide.

```sql
UPDATE aws.lightsail.relational_database_parameters
SET 
relationalDatabaseName = '{{ relationalDatabaseName }}',
parameters = '{{ parameters }}'
WHERE 
region = '{{ region }}' --required
AND relationalDatabaseName = '{{ relationalDatabaseName }}' --required
AND parameters = '{{ parameters }}' --required
RETURNING
operations;
```
</TabItem>
</Tabs>
