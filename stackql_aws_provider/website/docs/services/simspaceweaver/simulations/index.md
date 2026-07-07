--- 
title: simulations
hide_title: false
hide_table_of_contents: false
keywords:
  - simulations
  - simspaceweaver
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

Creates, updates, deletes, gets or lists a <code>simulations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="simulations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.simspaceweaver.simulations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_simulation"
    values={[
        { label: 'describe_simulation', value: 'describe_simulation' },
        { label: 'list_simulations', value: 'list_simulations' }
    ]}
>
<TabItem value="describe_simulation">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the simulation. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference. (pattern: &lt;code&gt;^arn:(?:aws|aws-cn|aws-us-gov):simspaceweaver:(&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;+-\d&#123;1&#125;):(\d&#123;12&#125;)?:(&#91;a-z&#93;+)\/(.+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the simulation was created, expressed as the number of seconds and milliseconds in UTC since the Unix epoch (0:0:0.000, January 1, 1970).</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the simulation.</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionId" /></td>
    <td><code>string</code></td>
    <td>A universally unique identifier (UUID) for this simulation. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LiveSimulationState" /></td>
    <td><code>object</code></td>
    <td>A collection of additional state information, such as domain and clock configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="LoggingConfiguration" /></td>
    <td><code>object</code></td>
    <td>Settings that control how SimSpace Weaver handles your simulation log data.</td>
</tr>
<tr>
    <td><CopyableCode code="MaximumDuration" /></td>
    <td><code>string</code></td>
    <td>The maximum running time of the simulation, specified as a number of minutes (m or M), hours (h or H), or days (d or D). The simulation stops when it reaches this limit. The maximum value is 14D, or its equivalent in the other units. The default value is 14D. A value equivalent to 0 makes the simulation immediately transition to Stopping as soon as it reaches Started. (pattern: &lt;code&gt;^\d&#123;1,5&#125;&#91;mhdMHD&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the simulation. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_.-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that the simulation assumes to perform actions. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference. For more information about IAM roles, see IAM roles in the Identity and Access Management User Guide. (pattern: &lt;code&gt;^arn:(?:aws|aws-cn|aws-us-gov):iam::(\d&#123;12&#125;)?:role\/(.+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SchemaError" /></td>
    <td><code>string</code></td>
    <td>An error message that SimSpace Weaver returns only if there is a problem with the simulation schema.</td>
</tr>
<tr>
    <td><CopyableCode code="SchemaS3Location" /></td>
    <td><code>object</code></td>
    <td>The location of the simulation schema in Amazon Simple Storage Service (Amazon S3). For more information about Amazon S3, see the Amazon Simple Storage Service User Guide .</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotS3Location" /></td>
    <td><code>object</code></td>
    <td>A location in Amazon Simple Storage Service (Amazon S3) where SimSpace Weaver stores simulation data, such as your app .zip files and schema file. For more information about Amazon S3, see the Amazon Simple Storage Service User Guide .</td>
</tr>
<tr>
    <td><CopyableCode code="StartError" /></td>
    <td><code>string</code></td>
    <td>An error message that SimSpace Weaver returns only if a problem occurs when the simulation is in the STARTING state.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the simulation. (UNKNOWN, STARTING, STARTED, STOPPING, STOPPED, FAILED, DELETING, DELETED, SNAPSHOT_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="TargetStatus" /></td>
    <td><code>string</code></td>
    <td>The desired lifecycle state of the simulation. (UNKNOWN, STARTED, STOPPED, DELETED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_simulations">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If SimSpace Weaver returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.</td>
</tr>
<tr>
    <td><CopyableCode code="Simulations" /></td>
    <td><code>array</code></td>
    <td>The list of simulations.</td>
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
    <td><a href="#describe_simulation"><CopyableCode code="describe_simulation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-simulation"><code>simulation</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current state of the given simulation.</td>
</tr>
<tr>
    <td><a href="#list_simulations"><CopyableCode code="list_simulations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the SimSpace Weaver simulations in the Amazon Web Services account used to make the API call.</td>
</tr>
<tr>
    <td><a href="#delete_simulation"><CopyableCode code="delete_simulation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-simulation"><code>simulation</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes all SimSpace Weaver resources assigned to the given simulation. Your simulation uses resources in other Amazon Web Services. This API operation doesn't delete resources in other Amazon Web Services.</td>
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
<tr id="parameter-simulation">
    <td><CopyableCode code="simulation" /></td>
    <td><code>string</code></td>
    <td>The name of the simulation.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of simulations to list.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If SimSpace Weaver returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_simulation"
    values={[
        { label: 'describe_simulation', value: 'describe_simulation' },
        { label: 'list_simulations', value: 'list_simulations' }
    ]}
>
<TabItem value="describe_simulation">

Returns the current state of the given simulation.

```sql
SELECT
Arn,
CreationTime,
Description,
ExecutionId,
LiveSimulationState,
LoggingConfiguration,
MaximumDuration,
Name,
RoleArn,
SchemaError,
SchemaS3Location,
SnapshotS3Location,
StartError,
Status,
TargetStatus
FROM aws.simspaceweaver.simulations
WHERE simulation = '{{ simulation }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_simulations">

Lists the SimSpace Weaver simulations in the Amazon Web Services account used to make the API call.

```sql
SELECT
NextToken,
Simulations
FROM aws.simspaceweaver.simulations
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_simulation"
    values={[
        { label: 'delete_simulation', value: 'delete_simulation' }
    ]}
>
<TabItem value="delete_simulation">

Deletes all SimSpace Weaver resources assigned to the given simulation. Your simulation uses resources in other Amazon Web Services. This API operation doesn't delete resources in other Amazon Web Services.

```sql
DELETE FROM aws.simspaceweaver.simulations
WHERE simulation = '{{ simulation }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
