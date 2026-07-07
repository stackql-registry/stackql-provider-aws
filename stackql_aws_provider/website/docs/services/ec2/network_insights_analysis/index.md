--- 
title: network_insights_analysis
hide_title: false
hide_table_of_contents: false
keywords:
  - network_insights_analysis
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

Creates, updates, deletes, gets or lists a <code>network_insights_analysis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_insights_analysis" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.network_insights_analysis" /></td></tr>
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
    <td><a href="#delete_network_insights_analysis"><CopyableCode code="delete_network_insights_analysis" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-NetworkInsightsAnalysisId"><code>NetworkInsightsAnalysisId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified network insights analysis.</td>
</tr>
<tr>
    <td><a href="#start_network_insights_analysis"><CopyableCode code="start_network_insights_analysis" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-NetworkInsightsPathId"><code>NetworkInsightsPathId</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AdditionalAccount"><code>AdditionalAccount</code></a>, <a href="#parameter-FilterInArn"><code>FilterInArn</code></a>, <a href="#parameter-FilterOutArn"><code>FilterOutArn</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Starts analyzing the specified path. If the path is reachable, the operation returns the shortest feasible path.</td>
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
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.</td>
</tr>
<tr id="parameter-NetworkInsightsAnalysisId">
    <td><CopyableCode code="NetworkInsightsAnalysisId" /></td>
    <td><code>string</code></td>
    <td>The ID of the network insights analysis.</td>
</tr>
<tr id="parameter-NetworkInsightsPathId">
    <td><CopyableCode code="NetworkInsightsPathId" /></td>
    <td><code>string</code></td>
    <td>The ID of the path.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AdditionalAccount">
    <td><CopyableCode code="AdditionalAccount" /></td>
    <td><code>array</code></td>
    <td>The member accounts that contain resources that the path can traverse.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-FilterInArn">
    <td><CopyableCode code="FilterInArn" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARN) of the resources that the path must traverse.</td>
</tr>
<tr id="parameter-FilterOutArn">
    <td><CopyableCode code="FilterOutArn" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARN) of the resources that the path will ignore.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply.</td>
</tr>
</tbody>
</table>

## `DELETE` examples

<Tabs
    defaultValue="delete_network_insights_analysis"
    values={[
        { label: 'delete_network_insights_analysis', value: 'delete_network_insights_analysis' }
    ]}
>
<TabItem value="delete_network_insights_analysis">

Deletes the specified network insights analysis.

```sql
DELETE FROM aws.ec2.network_insights_analysis
WHERE NetworkInsightsAnalysisId = '{{ NetworkInsightsAnalysisId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_network_insights_analysis"
    values={[
        { label: 'start_network_insights_analysis', value: 'start_network_insights_analysis' }
    ]}
>
<TabItem value="start_network_insights_analysis">

Starts analyzing the specified path. If the path is reachable, the operation returns the shortest feasible path.

```sql
EXEC aws.ec2.network_insights_analysis.start_network_insights_analysis 
@NetworkInsightsPathId='{{ NetworkInsightsPathId }}' --required, 
@ClientToken='{{ ClientToken }}' --required, 
@region='{{ region }}' --required, 
@AdditionalAccount='{{ AdditionalAccount }}', 
@FilterInArn='{{ FilterInArn }}', 
@FilterOutArn='{{ FilterOutArn }}', 
@DryRun={{ DryRun }}, 
@TagSpecification='{{ TagSpecification }}'
;
```
</TabItem>
</Tabs>
