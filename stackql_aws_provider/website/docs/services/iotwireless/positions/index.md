--- 
title: positions
hide_title: false
hide_table_of_contents: false
keywords:
  - positions
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

Creates, updates, deletes, gets or lists a <code>positions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="positions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.positions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_position"
    values={[
        { label: 'get_position', value: 'get_position' }
    ]}
>
<TabItem value="get_position">

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
    <td><CopyableCode code="Accuracy" /></td>
    <td><code>object</code></td>
    <td>The accuracy of the estimated position in meters. An empty value indicates that no position data is available. A value of ‘0.0’ value indicates that position data is available. This data corresponds to the position information that you specified instead of the position computed by solver.</td>
</tr>
<tr>
    <td><CopyableCode code="Position" /></td>
    <td><code>array</code></td>
    <td>The position information of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="SolverProvider" /></td>
    <td><code>string</code></td>
    <td>The vendor of the positioning solver. (Semtech)</td>
</tr>
<tr>
    <td><CopyableCode code="SolverType" /></td>
    <td><code>string</code></td>
    <td>The type of solver used to identify the position of the resource. (GNSS)</td>
</tr>
<tr>
    <td><CopyableCode code="SolverVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the positioning solver.</td>
</tr>
<tr>
    <td><CopyableCode code="Timestamp" /></td>
    <td><code>string</code></td>
    <td>The timestamp at which the device's position was determined. (pattern: &lt;code&gt;^(&#91;\+-&#93;?\d&#123;4&#125;(?!\d&#123;2&#125;\b))((-?)((0&#91;1-9&#93;|1&#91;0-2&#93;)(\3(&#91;12&#93;\d|0&#91;1-9&#93;|3&#91;01&#93;))?|W(&#91;0-4&#93;\d|5&#91;0-2&#93;)(-?&#91;1-7&#93;)?|(00&#91;1-9&#93;|0&#91;1-9&#93;\d|&#91;12&#93;\d&#123;2&#125;|3(&#91;0-5&#93;\d|6&#91;1-6&#93;)))(&#91;T\s&#93;(((&#91;01&#93;\d|2&#91;0-3&#93;)((:?)&#91;0-5&#93;\d)?|24\:?00)(&#91;\.,&#93;\d+(?!:))?)?(\17&#91;0-5&#93;\d(&#91;\.,&#93;\d+)?)?(&#91;zZ&#93;|(&#91;\+-&#93;)(&#91;01&#93;\d|2&#91;0-3&#93;):?(&#91;0-5&#93;\d)?)?)?)?$&lt;/code&gt;)</td>
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
    <td><a href="#get_position"><CopyableCode code="get_position" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_identifier"><code>resource_identifier</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the position information for a given resource. This action is no longer supported. Calls to retrieve the position information should use the GetResourcePosition API operation instead.</td>
</tr>
<tr>
    <td><a href="#update_position"><CopyableCode code="update_position" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_identifier"><code>resource_identifier</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update the position information of a resource. This action is no longer supported. Calls to update the position information should use the UpdateResourcePosition API operation instead.</td>
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
    <td>Resource type of the resource for which position is updated.</td>
</tr>
<tr id="parameter-resource_identifier">
    <td><CopyableCode code="resource_identifier" /></td>
    <td><code>string</code></td>
    <td>Resource identifier of the resource for which position is updated.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_position"
    values={[
        { label: 'get_position', value: 'get_position' }
    ]}
>
<TabItem value="get_position">

Get the position information for a given resource. This action is no longer supported. Calls to retrieve the position information should use the GetResourcePosition API operation instead.

```sql
SELECT
Accuracy,
Position,
SolverProvider,
SolverType,
SolverVersion,
Timestamp
FROM aws.iotwireless.positions
WHERE resource_identifier = '{{ resource_identifier }}' -- required
AND resourceType = '{{ resourceType }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_position"
    values={[
        { label: 'update_position', value: 'update_position' }
    ]}
>
<TabItem value="update_position">

Update the position information of a resource. This action is no longer supported. Calls to update the position information should use the UpdateResourcePosition API operation instead.

```sql
UPDATE aws.iotwireless.positions
SET 
Position = '{{ Position }}'
WHERE 
resource_identifier = '{{ resource_identifier }}' --required
AND resourceType = '{{ resourceType }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
