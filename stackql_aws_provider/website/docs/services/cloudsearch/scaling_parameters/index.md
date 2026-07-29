--- 
title: scaling_parameters
hide_title: false
hide_table_of_contents: false
keywords:
  - scaling_parameters
  - cloudsearch
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

Creates, updates, deletes, gets or lists a <code>scaling_parameters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scaling_parameters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudsearch.scaling_parameters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_scaling_parameters"
    values={[
        { label: 'describe_scaling_parameters', value: 'describe_scaling_parameters' }
    ]}
>
<TabItem value="describe_scaling_parameters">

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
    <td><CopyableCode code="options" /></td>
    <td><code>string</code></td>
    <td>The desired instance type and desired number of replicas of each index partition.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of domain configuration option.</td>
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
    <td><a href="#describe_scaling_parameters"><CopyableCode code="describe_scaling_parameters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see Configuring Scaling Options in the Amazon CloudSearch Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_scaling_parameters"><CopyableCode code="update_scaling_parameters" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-ScalingParameters"><code>ScalingParameters</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see Configuring Scaling Options in the Amazon CloudSearch Developer Guide.</td>
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
<tr id="parameter-DomainName">
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ScalingParameters">
    <td><CopyableCode code="ScalingParameters" /></td>
    <td><code>object</code></td>
    <td></td>
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
    defaultValue="describe_scaling_parameters"
    values={[
        { label: 'describe_scaling_parameters', value: 'describe_scaling_parameters' }
    ]}
>
<TabItem value="describe_scaling_parameters">

Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see Configuring Scaling Options in the Amazon CloudSearch Developer Guide.

```sql
SELECT
options,
status
FROM aws.cloudsearch.scaling_parameters
WHERE DomainName = '{{ DomainName }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_scaling_parameters"
    values={[
        { label: 'update_scaling_parameters', value: 'update_scaling_parameters' }
    ]}
>
<TabItem value="update_scaling_parameters">

Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see Configuring Scaling Options in the Amazon CloudSearch Developer Guide.

```sql
UPDATE aws.cloudsearch.scaling_parameters
SET 
-- No updatable properties
WHERE 
DomainName = '{{ DomainName }}' --required
AND ScalingParameters = '{{ ScalingParameters }}' --required
AND region = '{{ region }}' --required
RETURNING
options,
status;
```
</TabItem>
</Tabs>
