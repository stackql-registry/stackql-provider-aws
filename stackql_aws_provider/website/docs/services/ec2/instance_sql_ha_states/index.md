--- 
title: instance_sql_ha_states
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_sql_ha_states
  - ec2
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

Creates, updates, deletes, gets or lists an <code>instance_sql_ha_states</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_sql_ha_states" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.instance_sql_ha_states" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_sql_ha_states"
    values={[
        { label: 'describe_instance_sql_ha_states', value: 'describe_instance_sql_ha_states' }
    ]}
>
<TabItem value="describe_instance_sql_ha_states">

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
    <td><CopyableCode code="HaStatus" /></td>
    <td><code>string</code></td>
    <td>The SQL Server High Availability status of the instance. Valid values are: processing - The SQL Server High Availability status for the SQL Server High Availability instance is being updated. active - The SQL Server High Availability instance is an active node in an SQL Server High Availability cluster. standby - The SQL Server High Availability instance is a standby failover node in an SQL Server High Availability cluster. invalid - An error occurred due to misconfigured permissions, or unable to dertemine SQL Server High Availability status for the SQL Server High Availability instance.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the SQL Server High Availability instance.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when the instance's SQL Server High Availability status was last updated, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ).</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessingStatus" /></td>
    <td><code>string</code></td>
    <td>A brief description of the SQL Server High Availability status. If the instance is in the invalid High Availability status, this parameter includes the error message.</td>
</tr>
<tr>
    <td><CopyableCode code="SqlServerCredentials" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Secrets Manager secret containing the SQL Server access credentials for the SQL Server High Availability instance. If not specified, deafult local user credentials will be used by the Amazon Web Services Systems Manager agent.</td>
</tr>
<tr>
    <td><CopyableCode code="SqlServerLicenseUsage" /></td>
    <td><code>string</code></td>
    <td>The license type for the SQL Server license. Valid values include: full - The SQL Server High Availability instance is using a full SQL Server license. waived - The SQL Server High Availability instance is waived from the SQL Server license.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the SQL Server High Availability instance.</td>
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
    <td><a href="#describe_instance_sql_ha_states"><CopyableCode code="describe_instance_sql_ha_states" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the SQL Server High Availability states for Amazon EC2 instances that are enabled for Amazon EC2 High Availability for SQL Server monitoring.</td>
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
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters to apply to the results. Supported filters include: tag:<code>&lt;key&gt;</code> - The tag key and value pair assigned to the instance. For example, to find all instances tagged with Owner:TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The tag key assigned to the instance. haStatus - The SQL Server High Availability status of the SQL Server High Availability instance (processing | active | standby | invalid). sqlServerLicenseUsage - The license type for the SQL Server license (full | waived).</td>
</tr>
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the SQL Server High Availability instances to describe. If omitted, the API returns SQL Server High Availability states for all SQL Server High Availability instances.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_instance_sql_ha_states"
    values={[
        { label: 'describe_instance_sql_ha_states', value: 'describe_instance_sql_ha_states' }
    ]}
>
<TabItem value="describe_instance_sql_ha_states">

Describes the SQL Server High Availability states for Amazon EC2 instances that are enabled for Amazon EC2 High Availability for SQL Server monitoring.

```sql
SELECT
HaStatus,
InstanceId,
LastUpdatedTime,
ProcessingStatus,
SqlServerCredentials,
SqlServerLicenseUsage,
Tags
FROM aws.ec2.instance_sql_ha_states
WHERE region = '{{ region }}' -- required
AND InstanceId = '{{ InstanceId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND Filter = '{{ Filter }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
