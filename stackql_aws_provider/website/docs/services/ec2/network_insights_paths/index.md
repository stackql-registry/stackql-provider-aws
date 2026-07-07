--- 
title: network_insights_paths
hide_title: false
hide_table_of_contents: false
keywords:
  - network_insights_paths
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

Creates, updates, deletes, gets or lists a <code>network_insights_paths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_insights_paths" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.network_insights_paths" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_network_insights_paths"
    values={[
        { label: 'describe_network_insights_paths', value: 'describe_network_insights_paths' }
    ]}
>
<TabItem value="describe_network_insights_paths">

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
    <td><CopyableCode code="CreatedDate" /></td>
    <td><code>string</code></td>
    <td>The time stamp when the path was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Destination" /></td>
    <td><code>string</code></td>
    <td>The ID of the destination.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the destination.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationIp" /></td>
    <td><code>string</code></td>
    <td>The IP address of the destination.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationPort" /></td>
    <td><code>integer</code></td>
    <td>The destination port.</td>
</tr>
<tr>
    <td><CopyableCode code="FilterAtDestination" /></td>
    <td><code>string</code></td>
    <td>Scopes the analysis to network paths that match specific filters at the destination.</td>
</tr>
<tr>
    <td><CopyableCode code="FilterAtSource" /></td>
    <td><code>string</code></td>
    <td>Scopes the analysis to network paths that match specific filters at the source.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkInsightsPathArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the path.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkInsightsPathId" /></td>
    <td><code>string</code></td>
    <td>The ID of the path.</td>
</tr>
<tr>
    <td><CopyableCode code="Protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol.</td>
</tr>
<tr>
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>The ID of the source.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the source.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceIp" /></td>
    <td><code>string</code></td>
    <td>The IP address of the source.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags associated with the path.</td>
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
    <td><a href="#describe_network_insights_paths"><CopyableCode code="describe_network_insights_paths" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NetworkInsightsPathId"><code>NetworkInsightsPathId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes one or more of your paths.</td>
</tr>
<tr>
    <td><a href="#create_network_insights_path"><CopyableCode code="create_network_insights_path" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SourceIp"><code>SourceIp</code></a>, <a href="#parameter-DestinationIp"><code>DestinationIp</code></a>, <a href="#parameter-Source"><code>Source</code></a>, <a href="#parameter-Destination"><code>Destination</code></a>, <a href="#parameter-Protocol"><code>Protocol</code></a>, <a href="#parameter-DestinationPort"><code>DestinationPort</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-FilterAtSource"><code>FilterAtSource</code></a>, <a href="#parameter-FilterAtDestination"><code>FilterAtDestination</code></a></td>
    <td>Creates a path to analyze for reachability. Reachability Analyzer enables you to analyze and debug network reachability between two resources in your virtual private cloud (VPC). For more information, see the Reachability Analyzer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_network_insights_path"><CopyableCode code="delete_network_insights_path" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-NetworkInsightsPathId"><code>NetworkInsightsPathId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified path.</td>
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
<tr id="parameter-Destination">
    <td><CopyableCode code="Destination" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the destination. If the resource is in another account, you must specify an ARN.</td>
</tr>
<tr id="parameter-DestinationIp">
    <td><CopyableCode code="DestinationIp" /></td>
    <td><code>string</code></td>
    <td>The IP address of the destination.</td>
</tr>
<tr id="parameter-DestinationPort">
    <td><CopyableCode code="DestinationPort" /></td>
    <td><code>integer</code></td>
    <td>The destination port.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. The following are the possible values: destination - The ID of the resource. filter-at-source.source-address - The source IPv4 address at the source. filter-at-source.source-port-range - The source port range at the source. filter-at-source.destination-address - The destination IPv4 address at the source. filter-at-source.destination-port-range - The destination port range at the source. filter-at-destination.source-address - The source IPv4 address at the destination. filter-at-destination.source-port-range - The source port range at the destination. filter-at-destination.destination-address - The destination IPv4 address at the destination. filter-at-destination.destination-port-range - The destination port range at the destination. protocol - The protocol. source - The ID of the resource.</td>
</tr>
<tr id="parameter-FilterAtDestination">
    <td><CopyableCode code="FilterAtDestination" /></td>
    <td><code>object</code></td>
    <td>Scopes the analysis to network paths that match specific filters at the destination. If you specify this parameter, you can't specify the parameter for the destination IP address.</td>
</tr>
<tr id="parameter-FilterAtSource">
    <td><CopyableCode code="FilterAtSource" /></td>
    <td><code>object</code></td>
    <td>Scopes the analysis to network paths that match specific filters at the source. If you specify this parameter, you can't specify the parameters for the source IP address or the destination port.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NetworkInsightsPathId">
    <td><CopyableCode code="NetworkInsightsPathId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the paths.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-Protocol">
    <td><CopyableCode code="Protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol.</td>
</tr>
<tr id="parameter-Source">
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the source. If the resource is in another account, you must specify an ARN.</td>
</tr>
<tr id="parameter-SourceIp">
    <td><CopyableCode code="SourceIp" /></td>
    <td><code>string</code></td>
    <td>The IP address of the source.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to add to the path.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_network_insights_paths"
    values={[
        { label: 'describe_network_insights_paths', value: 'describe_network_insights_paths' }
    ]}
>
<TabItem value="describe_network_insights_paths">

Describes one or more of your paths.

```sql
SELECT
CreatedDate,
Destination,
DestinationArn,
DestinationIp,
DestinationPort,
FilterAtDestination,
FilterAtSource,
NetworkInsightsPathArn,
NetworkInsightsPathId,
Protocol,
Source,
SourceArn,
SourceIp,
Tags
FROM aws.ec2.network_insights_paths
WHERE region = '{{ region }}' -- required
AND NetworkInsightsPathId = '{{ NetworkInsightsPathId }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND DryRun = '{{ DryRun }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_network_insights_path"
    values={[
        { label: 'create_network_insights_path', value: 'create_network_insights_path' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_network_insights_path">

Creates a path to analyze for reachability. Reachability Analyzer enables you to analyze and debug network reachability between two resources in your virtual private cloud (VPC). For more information, see the Reachability Analyzer Guide.

```sql
INSERT INTO aws.ec2.network_insights_paths (
ClientToken,
region,
SourceIp,
DestinationIp,
Source,
Destination,
Protocol,
DestinationPort,
TagSpecification,
DryRun,
FilterAtSource,
FilterAtDestination
)
SELECT 
'{{ ClientToken }}',
'{{ region }}',
'{{ SourceIp }}',
'{{ DestinationIp }}',
'{{ Source }}',
'{{ Destination }}',
'{{ Protocol }}',
'{{ DestinationPort }}',
'{{ TagSpecification }}',
'{{ DryRun }}',
'{{ FilterAtSource }}',
'{{ FilterAtDestination }}'
RETURNING
CreatedDate,
Destination,
DestinationArn,
DestinationIp,
DestinationPort,
FilterAtDestination,
FilterAtSource,
NetworkInsightsPathArn,
NetworkInsightsPathId,
Protocol,
Source,
SourceArn,
SourceIp,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: network_insights_paths
  props:
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Required parameter for the network_insights_paths resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the network_insights_paths resource.
    - name: SourceIp
      value: "{{ SourceIp }}"
      description: The IP address of the source.
      description: The IP address of the source.
    - name: DestinationIp
      value: "{{ DestinationIp }}"
      description: The IP address of the destination.
      description: The IP address of the destination.
    - name: Source
      value: "{{ Source }}"
      description: The ID or ARN of the source. If the resource is in another account, you must specify an ARN.
      description: The ID or ARN of the source. If the resource is in another account, you must specify an ARN.
    - name: Destination
      value: "{{ Destination }}"
      description: The ID or ARN of the destination. If the resource is in another account, you must specify an ARN.
      description: The ID or ARN of the destination. If the resource is in another account, you must specify an ARN.
    - name: Protocol
      value: "{{ Protocol }}"
      description: The protocol.
      description: The protocol.
    - name: DestinationPort
      value: {{ DestinationPort }}
      description: The destination port.
      description: The destination port.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to add to the path.
      description: The tags to add to the path.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: FilterAtSource
      value: "{{ FilterAtSource }}"
      description: Scopes the analysis to network paths that match specific filters at the source. If you specify this parameter, you can't specify the parameters for the source IP address or the destination port.
      description: Scopes the analysis to network paths that match specific filters at the source. If you specify this parameter, you can't specify the parameters for the source IP address or the destination port.
    - name: FilterAtDestination
      value: "{{ FilterAtDestination }}"
      description: Scopes the analysis to network paths that match specific filters at the destination. If you specify this parameter, you can't specify the parameter for the destination IP address.
      description: Scopes the analysis to network paths that match specific filters at the destination. If you specify this parameter, you can't specify the parameter for the destination IP address.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_network_insights_path"
    values={[
        { label: 'delete_network_insights_path', value: 'delete_network_insights_path' }
    ]}
>
<TabItem value="delete_network_insights_path">

Deletes the specified path.

```sql
DELETE FROM aws.ec2.network_insights_paths
WHERE NetworkInsightsPathId = '{{ NetworkInsightsPathId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
