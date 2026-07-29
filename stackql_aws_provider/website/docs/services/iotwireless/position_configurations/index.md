--- 
title: position_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - position_configurations
  - iotwireless
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

Creates, updates, deletes, gets or lists a <code>position_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="position_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.position_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_position_configuration"
    values={[
        { label: 'get_position_configuration', value: 'get_position_configuration' },
        { label: 'list_position_configurations', value: 'list_position_configurations' }
    ]}
>
<TabItem value="get_position_configuration">

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
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>The position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="solvers" /></td>
    <td><code>object</code></td>
    <td>The wrapper for the solver configuration details object.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_position_configurations">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to get the next set of results, or null if there are no additional results.</td>
</tr>
<tr>
    <td><CopyableCode code="position_configuration_list" /></td>
    <td><code>array</code></td>
    <td>A list of position configurations.</td>
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
    <td><a href="#get_position_configuration"><CopyableCode code="get_position_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_identifier"><code>resource_identifier</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get position configuration for a given resource. This action is no longer supported. Calls to retrieve the position configuration should use the GetResourcePosition API operation instead.</td>
</tr>
<tr>
    <td><a href="#list_position_configurations"><CopyableCode code="list_position_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List position configurations for a given resource, such as positioning solvers. This action is no longer supported. Calls to retrieve position information should use the GetResourcePosition API operation instead.</td>
</tr>
<tr>
    <td><a href="#put_position_configuration"><CopyableCode code="put_position_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-resource_identifier"><code>resource_identifier</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Put position configuration for a given resource. This action is no longer supported. Calls to update the position configuration should use the UpdateResourcePosition API operation instead.</td>
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
<tr id="parameter-resourceType">
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>Resource type of the resource for which you want to update the position configuration.</td>
</tr>
<tr id="parameter-resource_identifier">
    <td><CopyableCode code="resource_identifier" /></td>
    <td><code>string</code></td>
    <td>Resource identifier used to update the position configuration.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
<tr id="parameter-resourceType">
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>Resource type for which position configurations are listed.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_position_configuration"
    values={[
        { label: 'get_position_configuration', value: 'get_position_configuration' },
        { label: 'list_position_configurations', value: 'list_position_configurations' }
    ]}
>
<TabItem value="get_position_configuration">

Get position configuration for a given resource. This action is no longer supported. Calls to retrieve the position configuration should use the GetResourcePosition API operation instead.

```sql
SELECT
destination,
solvers
FROM aws.iotwireless.position_configurations
WHERE resource_identifier = '{{ resource_identifier }}' -- required
AND resourceType = '{{ resourceType }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_position_configurations">

List position configurations for a given resource, such as positioning solvers. This action is no longer supported. Calls to retrieve position information should use the GetResourcePosition API operation instead.

```sql
SELECT
next_token,
position_configuration_list
FROM aws.iotwireless.position_configurations
WHERE region = '{{ region }}' -- required
AND resourceType = '{{ resourceType }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_position_configuration"
    values={[
        { label: 'put_position_configuration', value: 'put_position_configuration' }
    ]}
>
<TabItem value="put_position_configuration">

Put position configuration for a given resource. This action is no longer supported. Calls to update the position configuration should use the UpdateResourcePosition API operation instead.

```sql
REPLACE aws.iotwireless.position_configurations
SET 
Solvers = '{{ Solvers }}',
Destination = '{{ Destination }}'
WHERE 
resource_identifier = '{{ resource_identifier }}' --required
AND resourceType = '{{ resourceType }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
