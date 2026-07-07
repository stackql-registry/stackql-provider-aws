--- 
title: query_results_monitor_top_contributors
hide_title: false
hide_table_of_contents: false
keywords:
  - query_results_monitor_top_contributors
  - networkflowmonitor
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

Creates, updates, deletes, gets or lists a <code>query_results_monitor_top_contributors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="query_results_monitor_top_contributors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkflowmonitor.query_results_monitor_top_contributors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_query_results_monitor_top_contributors"
    values={[
        { label: 'get_query_results_monitor_top_contributors', value: 'get_query_results_monitor_top_contributors' }
    ]}
>
<TabItem value="get_query_results_monitor_top_contributors">

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
    <td><CopyableCode code="destinationCategory" /></td>
    <td><code>string</code></td>
    <td>The destination category for a top contributors row. Destination categories can be one of the following: INTRA_AZ: Top contributor network flows within a single Availability Zone INTER_AZ: Top contributor network flows between Availability Zones INTER_REGION: Top contributor network flows between Regions (to the edge of another Region) INTER_VPC: Top contributor network flows between VPCs AWS_SERVICES: Top contributor network flows to or from Amazon Web Services services UNCLASSIFIED: Top contributor network flows that do not have a bucket classification (INTRA_AZ, INTER_AZ, INTER_VPC, UNCLASSIFIED, AMAZON_S3, AMAZON_DYNAMODB, INTER_REGION)</td>
</tr>
<tr>
    <td><CopyableCode code="dnatIp" /></td>
    <td><code>string</code></td>
    <td>The destination network address translation (DNAT) IP address for a top contributor network flow.</td>
</tr>
<tr>
    <td><CopyableCode code="kubernetesMetadata" /></td>
    <td><code>object</code></td>
    <td>Meta data about Kubernetes resources.</td>
</tr>
<tr>
    <td><CopyableCode code="localAz" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone for the local resource for a top contributor network flow.</td>
</tr>
<tr>
    <td><CopyableCode code="localInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a local resource.</td>
</tr>
<tr>
    <td><CopyableCode code="localInstanceId" /></td>
    <td><code>string</code></td>
    <td>The instance identifier for the local resource for a top contributor network flow. (pattern: &lt;code&gt;i-&#91;a-zA-Z0-9&#93;&#123;8,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="localIp" /></td>
    <td><code>string</code></td>
    <td>The IP address of the local resource for a top contributor network flow.</td>
</tr>
<tr>
    <td><CopyableCode code="localRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region for the local resource for a top contributor network flow.</td>
</tr>
<tr>
    <td><CopyableCode code="localSubnetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a local subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="localSubnetId" /></td>
    <td><code>string</code></td>
    <td>The subnet ID for the local resource for a top contributor network flow. (pattern: &lt;code&gt;subnet-&#91;a-zA-Z0-9&#93;&#123;8,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="localVpcArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a local VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="localVpcId" /></td>
    <td><code>string</code></td>
    <td>The VPC ID for a top contributor network flow for the local resource. (pattern: &lt;code&gt;vpc-&#91;a-zA-Z0-9&#93;&#123;8,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="remoteAz" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone for the remote resource for a top contributor network flow.</td>
</tr>
<tr>
    <td><CopyableCode code="remoteInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a remote resource.</td>
</tr>
<tr>
    <td><CopyableCode code="remoteInstanceId" /></td>
    <td><code>string</code></td>
    <td>The instance identifier for the remote resource for a top contributor network flow. (pattern: &lt;code&gt;i-&#91;a-zA-Z0-9&#93;&#123;8,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="remoteIp" /></td>
    <td><code>string</code></td>
    <td>The IP address of the remote resource for a top contributor network flow.</td>
</tr>
<tr>
    <td><CopyableCode code="remoteRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region for the remote resource for a top contributor network flow.</td>
</tr>
<tr>
    <td><CopyableCode code="remoteSubnetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a remote subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="remoteSubnetId" /></td>
    <td><code>string</code></td>
    <td>The subnet ID for the remote resource for a top contributor network flow. (pattern: &lt;code&gt;subnet-&#91;a-zA-Z0-9&#93;&#123;8,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="remoteVpcArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a remote VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="remoteVpcId" /></td>
    <td><code>string</code></td>
    <td>The VPC ID for a top contributor network flow for the remote resource. (pattern: &lt;code&gt;vpc-&#91;a-zA-Z0-9&#93;&#123;8,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="snatIp" /></td>
    <td><code>string</code></td>
    <td>The secure network address translation (SNAT) IP address for a top contributor network flow.</td>
</tr>
<tr>
    <td><CopyableCode code="targetPort" /></td>
    <td><code>integer</code></td>
    <td>The target port.</td>
</tr>
<tr>
    <td><CopyableCode code="traversedConstructs" /></td>
    <td><code>array</code></td>
    <td>The constructs traversed by a network flow.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>integer (int64)</code></td>
    <td>The value of the metric for a top contributor network flow.</td>
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
    <td><a href="#get_query_results_monitor_top_contributors"><CopyableCode code="get_query_results_monitor_top_contributors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Return the data for a query with the Network Flow Monitor query interface. You specify the query that you want to return results for by providing a query ID and a monitor name. This query returns the top contributors for a specific monitor. Create a query ID for this call by calling the corresponding API call to start the query, StartQueryMonitorTopContributors. Use the scope ID that was returned for your account by CreateScope. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.</td>
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
<tr id="parameter-monitor_name">
    <td><CopyableCode code="monitor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the monitor.</td>
</tr>
<tr id="parameter-query_id">
    <td><CopyableCode code="query_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to create a query.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of query results that you want to return with this call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. You receive this token from a previous call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_query_results_monitor_top_contributors"
    values={[
        { label: 'get_query_results_monitor_top_contributors', value: 'get_query_results_monitor_top_contributors' }
    ]}
>
<TabItem value="get_query_results_monitor_top_contributors">

Return the data for a query with the Network Flow Monitor query interface. You specify the query that you want to return results for by providing a query ID and a monitor name. This query returns the top contributors for a specific monitor. Create a query ID for this call by calling the corresponding API call to start the query, StartQueryMonitorTopContributors. Use the scope ID that was returned for your account by CreateScope. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.

```sql
SELECT
destinationCategory,
dnatIp,
kubernetesMetadata,
localAz,
localInstanceArn,
localInstanceId,
localIp,
localRegion,
localSubnetArn,
localSubnetId,
localVpcArn,
localVpcId,
remoteAz,
remoteInstanceArn,
remoteInstanceId,
remoteIp,
remoteRegion,
remoteSubnetArn,
remoteSubnetId,
remoteVpcArn,
remoteVpcId,
snatIp,
targetPort,
traversedConstructs,
value
FROM aws.networkflowmonitor.query_results_monitor_top_contributors
WHERE monitor_name = '{{ monitor_name }}' -- required
AND query_id = '{{ query_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
