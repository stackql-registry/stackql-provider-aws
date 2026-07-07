--- 
title: table_auto_scaling_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - table_auto_scaling_settings
  - keyspaces
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

Creates, updates, deletes, gets or lists a <code>table_auto_scaling_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_auto_scaling_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.keyspaces.table_auto_scaling_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table_auto_scaling_settings"
    values={[
        { label: 'get_table_auto_scaling_settings', value: 'get_table_auto_scaling_settings' }
    ]}
>
<TabItem value="get_table_auto_scaling_settings">

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
    <td><CopyableCode code="autoScalingSpecification" /></td>
    <td><code>object</code></td>
    <td>The auto scaling settings of the table.</td>
</tr>
<tr>
    <td><CopyableCode code="keyspaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the keyspace. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="replicaSpecifications" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services Region specific settings of a multi-Region table. Returns the settings for all Regions the table is replicated in.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the table. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):cassandra:.+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tableName" /></td>
    <td><code>string</code></td>
    <td>The name of the table. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_table_auto_scaling_settings"><CopyableCode code="get_table_auto_scaling_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns auto scaling related settings of the specified table in JSON format. If the table is a multi-Region table, the Amazon Web Services Region specific auto scaling settings of the table are included. Amazon Keyspaces auto scaling helps you provision throughput capacity for variable workloads efficiently by increasing and decreasing your table's read and write capacity automatically in response to application traffic. For more information, see Managing throughput capacity automatically with Amazon Keyspaces auto scaling in the Amazon Keyspaces Developer Guide. GetTableAutoScalingSettings can't be used as an action in an IAM policy. To define permissions for GetTableAutoScalingSettings, you must allow the following two actions in the IAM policy statement's Action element: application-autoscaling:DescribeScalableTargets application-autoscaling:DescribeScalingPolicies</td>
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
    defaultValue="get_table_auto_scaling_settings"
    values={[
        { label: 'get_table_auto_scaling_settings', value: 'get_table_auto_scaling_settings' }
    ]}
>
<TabItem value="get_table_auto_scaling_settings">

Returns auto scaling related settings of the specified table in JSON format. If the table is a multi-Region table, the Amazon Web Services Region specific auto scaling settings of the table are included. Amazon Keyspaces auto scaling helps you provision throughput capacity for variable workloads efficiently by increasing and decreasing your table's read and write capacity automatically in response to application traffic. For more information, see Managing throughput capacity automatically with Amazon Keyspaces auto scaling in the Amazon Keyspaces Developer Guide. GetTableAutoScalingSettings can't be used as an action in an IAM policy. To define permissions for GetTableAutoScalingSettings, you must allow the following two actions in the IAM policy statement's Action element: application-autoscaling:DescribeScalableTargets application-autoscaling:DescribeScalingPolicies

```sql
SELECT
autoScalingSpecification,
keyspaceName,
replicaSpecifications,
resourceArn,
tableName
FROM aws.keyspaces.table_auto_scaling_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
