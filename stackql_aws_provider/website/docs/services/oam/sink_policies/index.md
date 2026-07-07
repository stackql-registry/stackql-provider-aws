--- 
title: sink_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - sink_policies
  - oam
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

Creates, updates, deletes, gets or lists a <code>sink_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sink_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.oam.sink_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sink_policy"
    values={[
        { label: 'get_sink_policy', value: 'get_sink_policy' }
    ]}
>
<TabItem value="get_sink_policy">

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
    <td><CopyableCode code="Policy" /></td>
    <td><code>string</code></td>
    <td>The policy that you specified, in JSON format.</td>
</tr>
<tr>
    <td><CopyableCode code="SinkArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the sink.</td>
</tr>
<tr>
    <td><CopyableCode code="SinkId" /></td>
    <td><code>string</code></td>
    <td>The random ID string that Amazon Web Services generated as part of the sink ARN.</td>
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
    <td><a href="#get_sink_policy"><CopyableCode code="get_sink_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current sink policy attached to this sink. The sink policy specifies what accounts can attach to this sink as source accounts, and what types of data they can share.</td>
</tr>
<tr>
    <td><a href="#put_sink_policy"><CopyableCode code="put_sink_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SinkIdentifier"><code>SinkIdentifier</code></a></td>
    <td></td>
    <td>Creates or updates the resource policy that grants permissions to source accounts to link to the monitoring account sink. When you create a sink policy, you can grant permissions to all accounts in an organization or to individual accounts. You can also use a sink policy to limit the types of data that is shared. The six types of services with their respective resource types that you can allow or deny are: Metrics - Specify with AWS::CloudWatch::Metric Log groups - Specify with AWS::Logs::LogGroup Traces - Specify with AWS::XRay::Trace Application Insights - Applications - Specify with AWS::ApplicationInsights::Application Internet Monitor - Specify with AWS::InternetMonitor::Monitor Application Signals - Specify with AWS::ApplicationSignals::Service and AWS::ApplicationSignals::ServiceLevelObjective See the examples in this section to see how to specify permitted source accounts and data types.</td>
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
    defaultValue="get_sink_policy"
    values={[
        { label: 'get_sink_policy', value: 'get_sink_policy' }
    ]}
>
<TabItem value="get_sink_policy">

Returns the current sink policy attached to this sink. The sink policy specifies what accounts can attach to this sink as source accounts, and what types of data they can share.

```sql
SELECT
Policy,
SinkArn,
SinkId
FROM aws.oam.sink_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_sink_policy"
    values={[
        { label: 'put_sink_policy', value: 'put_sink_policy' }
    ]}
>
<TabItem value="put_sink_policy">

Creates or updates the resource policy that grants permissions to source accounts to link to the monitoring account sink. When you create a sink policy, you can grant permissions to all accounts in an organization or to individual accounts. You can also use a sink policy to limit the types of data that is shared. The six types of services with their respective resource types that you can allow or deny are: Metrics - Specify with AWS::CloudWatch::Metric Log groups - Specify with AWS::Logs::LogGroup Traces - Specify with AWS::XRay::Trace Application Insights - Applications - Specify with AWS::ApplicationInsights::Application Internet Monitor - Specify with AWS::InternetMonitor::Monitor Application Signals - Specify with AWS::ApplicationSignals::Service and AWS::ApplicationSignals::ServiceLevelObjective See the examples in this section to see how to specify permitted source accounts and data types.

```sql
REPLACE aws.oam.sink_policies
SET 
Policy = '{{ Policy }}',
SinkIdentifier = '{{ SinkIdentifier }}'
WHERE 
region = '{{ region }}' --required
AND SinkIdentifier = '{{ SinkIdentifier }}' --required
RETURNING
Policy,
SinkArn,
SinkId;
```
</TabItem>
</Tabs>
