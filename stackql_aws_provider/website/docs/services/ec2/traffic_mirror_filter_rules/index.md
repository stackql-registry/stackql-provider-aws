--- 
title: traffic_mirror_filter_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - traffic_mirror_filter_rules
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

Creates, updates, deletes, gets or lists a <code>traffic_mirror_filter_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="traffic_mirror_filter_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.traffic_mirror_filter_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_traffic_mirror_filter_rules"
    values={[
        { label: 'describe_traffic_mirror_filter_rules', value: 'describe_traffic_mirror_filter_rules' }
    ]}
>
<TabItem value="describe_traffic_mirror_filter_rules">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the Traffic Mirror rule.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationCidrBlock" /></td>
    <td><code>string</code></td>
    <td>The destination CIDR block assigned to the Traffic Mirror rule.</td>
</tr>
<tr>
    <td><CopyableCode code="DestinationPortRange" /></td>
    <td><code>string</code></td>
    <td>The destination port range assigned to the Traffic Mirror rule.</td>
</tr>
<tr>
    <td><CopyableCode code="Protocol" /></td>
    <td><code>integer</code></td>
    <td>The protocol assigned to the Traffic Mirror rule.</td>
</tr>
<tr>
    <td><CopyableCode code="RuleAction" /></td>
    <td><code>string</code></td>
    <td>The action assigned to the Traffic Mirror rule.</td>
</tr>
<tr>
    <td><CopyableCode code="RuleNumber" /></td>
    <td><code>integer</code></td>
    <td>The rule number of the Traffic Mirror rule.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceCidrBlock" /></td>
    <td><code>string</code></td>
    <td>The source CIDR block assigned to the Traffic Mirror rule.</td>
</tr>
<tr>
    <td><CopyableCode code="SourcePortRange" /></td>
    <td><code>string</code></td>
    <td>The source port range assigned to the Traffic Mirror rule.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Tags on Traffic Mirroring filter rules.</td>
</tr>
<tr>
    <td><CopyableCode code="TrafficDirection" /></td>
    <td><code>string</code></td>
    <td>The traffic direction assigned to the Traffic Mirror rule.</td>
</tr>
<tr>
    <td><CopyableCode code="TrafficMirrorFilterId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Traffic Mirror filter that the rule is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="TrafficMirrorFilterRuleId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Traffic Mirror rule.</td>
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
    <td><a href="#describe_traffic_mirror_filter_rules"><CopyableCode code="describe_traffic_mirror_filter_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TrafficMirrorFilterRuleId"><code>TrafficMirrorFilterRuleId</code></a>, <a href="#parameter-TrafficMirrorFilterId"><code>TrafficMirrorFilterId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describe traffic mirror filters that determine the traffic that is mirrored.</td>
</tr>
<tr>
    <td><a href="#create_traffic_mirror_filter_rule"><CopyableCode code="create_traffic_mirror_filter_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-TrafficMirrorFilterId"><code>TrafficMirrorFilterId</code></a>, <a href="#parameter-TrafficDirection"><code>TrafficDirection</code></a>, <a href="#parameter-RuleNumber"><code>RuleNumber</code></a>, <a href="#parameter-RuleAction"><code>RuleAction</code></a>, <a href="#parameter-DestinationCidrBlock"><code>DestinationCidrBlock</code></a>, <a href="#parameter-SourceCidrBlock"><code>SourceCidrBlock</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DestinationPortRange"><code>DestinationPortRange</code></a>, <a href="#parameter-SourcePortRange"><code>SourcePortRange</code></a>, <a href="#parameter-Protocol"><code>Protocol</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Creates a Traffic Mirror filter rule. A Traffic Mirror rule defines the Traffic Mirror source traffic to mirror. You need the Traffic Mirror filter ID when you create the rule.</td>
</tr>
<tr>
    <td><a href="#modify_traffic_mirror_filter_rule"><CopyableCode code="modify_traffic_mirror_filter_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TrafficMirrorFilterRuleId"><code>TrafficMirrorFilterRuleId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TrafficDirection"><code>TrafficDirection</code></a>, <a href="#parameter-RuleNumber"><code>RuleNumber</code></a>, <a href="#parameter-RuleAction"><code>RuleAction</code></a>, <a href="#parameter-DestinationPortRange"><code>DestinationPortRange</code></a>, <a href="#parameter-SourcePortRange"><code>SourcePortRange</code></a>, <a href="#parameter-Protocol"><code>Protocol</code></a>, <a href="#parameter-DestinationCidrBlock"><code>DestinationCidrBlock</code></a>, <a href="#parameter-SourceCidrBlock"><code>SourceCidrBlock</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-RemoveField"><code>RemoveField</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies the specified Traffic Mirror rule. DestinationCidrBlock and SourceCidrBlock must both be an IPv4 range or an IPv6 range.</td>
</tr>
<tr>
    <td><a href="#delete_traffic_mirror_filter_rule"><CopyableCode code="delete_traffic_mirror_filter_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TrafficMirrorFilterRuleId"><code>TrafficMirrorFilterRuleId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified Traffic Mirror rule.</td>
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
<tr id="parameter-DestinationCidrBlock">
    <td><CopyableCode code="DestinationCidrBlock" /></td>
    <td><code>string</code></td>
    <td>The destination CIDR block to assign to the Traffic Mirror rule.</td>
</tr>
<tr id="parameter-RuleAction">
    <td><CopyableCode code="RuleAction" /></td>
    <td><code>string</code></td>
    <td>The action to take on the filtered traffic.</td>
</tr>
<tr id="parameter-RuleNumber">
    <td><CopyableCode code="RuleNumber" /></td>
    <td><code>integer</code></td>
    <td>The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given direction. The rules are processed in ascending order by rule number.</td>
</tr>
<tr id="parameter-SourceCidrBlock">
    <td><CopyableCode code="SourceCidrBlock" /></td>
    <td><code>string</code></td>
    <td>The source CIDR block to assign to the Traffic Mirror rule.</td>
</tr>
<tr id="parameter-TrafficDirection">
    <td><CopyableCode code="TrafficDirection" /></td>
    <td><code>string</code></td>
    <td>The type of traffic.</td>
</tr>
<tr id="parameter-TrafficMirrorFilterId">
    <td><CopyableCode code="TrafficMirrorFilterId" /></td>
    <td><code>string</code></td>
    <td>The ID of the filter that this rule is associated with.</td>
</tr>
<tr id="parameter-TrafficMirrorFilterRuleId">
    <td><CopyableCode code="TrafficMirrorFilterRuleId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Traffic Mirror rule.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description to assign to the Traffic Mirror rule.</td>
</tr>
<tr id="parameter-DestinationCidrBlock">
    <td><CopyableCode code="DestinationCidrBlock" /></td>
    <td><code>string</code></td>
    <td>The destination CIDR block to assign to the Traffic Mirror rule.</td>
</tr>
<tr id="parameter-DestinationPortRange">
    <td><CopyableCode code="DestinationPortRange" /></td>
    <td><code>object</code></td>
    <td>The destination ports that are associated with the Traffic Mirror rule.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>Traffic mirror filters. traffic-mirror-filter-rule-id: The ID of the Traffic Mirror rule. traffic-mirror-filter-id: The ID of the filter that this rule is associated with. rule-number: The number of the Traffic Mirror rule. rule-action: The action taken on the filtered traffic. Possible actions are accept and reject. traffic-direction: The traffic direction. Possible directions are ingress and egress. protocol: The protocol, for example UDP, assigned to the Traffic Mirror rule. source-cidr-block: The source CIDR block assigned to the Traffic Mirror rule. destination-cidr-block: The destination CIDR block assigned to the Traffic Mirror rule. description: The description of the Traffic Mirror rule.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-Protocol">
    <td><CopyableCode code="Protocol" /></td>
    <td><code>integer</code></td>
    <td>The protocol, for example TCP, to assign to the Traffic Mirror rule.</td>
</tr>
<tr id="parameter-RemoveField">
    <td><CopyableCode code="RemoveField" /></td>
    <td><code>array</code></td>
    <td>The properties that you want to remove from the Traffic Mirror filter rule. When you remove a property from a Traffic Mirror filter rule, the property is set to the default.</td>
</tr>
<tr id="parameter-RuleAction">
    <td><CopyableCode code="RuleAction" /></td>
    <td><code>string</code></td>
    <td>The action to assign to the rule.</td>
</tr>
<tr id="parameter-RuleNumber">
    <td><CopyableCode code="RuleNumber" /></td>
    <td><code>integer</code></td>
    <td>The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given direction. The rules are processed in ascending order by rule number.</td>
</tr>
<tr id="parameter-SourceCidrBlock">
    <td><CopyableCode code="SourceCidrBlock" /></td>
    <td><code>string</code></td>
    <td>The source CIDR block to assign to the Traffic Mirror rule.</td>
</tr>
<tr id="parameter-SourcePortRange">
    <td><CopyableCode code="SourcePortRange" /></td>
    <td><code>object</code></td>
    <td>The port range to assign to the Traffic Mirror rule.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>Traffic Mirroring tags specifications.</td>
</tr>
<tr id="parameter-TrafficDirection">
    <td><CopyableCode code="TrafficDirection" /></td>
    <td><code>string</code></td>
    <td>The type of traffic to assign to the rule.</td>
</tr>
<tr id="parameter-TrafficMirrorFilterId">
    <td><CopyableCode code="TrafficMirrorFilterId" /></td>
    <td><code>string</code></td>
    <td>Traffic filter ID.</td>
</tr>
<tr id="parameter-TrafficMirrorFilterRuleId">
    <td><CopyableCode code="TrafficMirrorFilterRuleId" /></td>
    <td><code>array</code></td>
    <td>Traffic filter rule IDs.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_traffic_mirror_filter_rules"
    values={[
        { label: 'describe_traffic_mirror_filter_rules', value: 'describe_traffic_mirror_filter_rules' }
    ]}
>
<TabItem value="describe_traffic_mirror_filter_rules">

Describe traffic mirror filters that determine the traffic that is mirrored.

```sql
SELECT
Description,
DestinationCidrBlock,
DestinationPortRange,
Protocol,
RuleAction,
RuleNumber,
SourceCidrBlock,
SourcePortRange,
Tags,
TrafficDirection,
TrafficMirrorFilterId,
TrafficMirrorFilterRuleId
FROM aws.ec2.traffic_mirror_filter_rules
WHERE region = '{{ region }}' -- required
AND TrafficMirrorFilterRuleId = '{{ TrafficMirrorFilterRuleId }}'
AND TrafficMirrorFilterId = '{{ TrafficMirrorFilterId }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_traffic_mirror_filter_rule"
    values={[
        { label: 'create_traffic_mirror_filter_rule', value: 'create_traffic_mirror_filter_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_traffic_mirror_filter_rule">

Creates a Traffic Mirror filter rule. A Traffic Mirror rule defines the Traffic Mirror source traffic to mirror. You need the Traffic Mirror filter ID when you create the rule.

```sql
INSERT INTO aws.ec2.traffic_mirror_filter_rules (
TrafficMirrorFilterId,
TrafficDirection,
RuleNumber,
RuleAction,
DestinationCidrBlock,
SourceCidrBlock,
region,
DestinationPortRange,
SourcePortRange,
Protocol,
Description,
DryRun,
ClientToken,
TagSpecification
)
SELECT 
'{{ TrafficMirrorFilterId }}',
'{{ TrafficDirection }}',
'{{ RuleNumber }}',
'{{ RuleAction }}',
'{{ DestinationCidrBlock }}',
'{{ SourceCidrBlock }}',
'{{ region }}',
'{{ DestinationPortRange }}',
'{{ SourcePortRange }}',
'{{ Protocol }}',
'{{ Description }}',
'{{ DryRun }}',
'{{ ClientToken }}',
'{{ TagSpecification }}'
RETURNING
Description,
DestinationCidrBlock,
DestinationPortRange,
Protocol,
RuleAction,
RuleNumber,
SourceCidrBlock,
SourcePortRange,
Tags,
TrafficDirection,
TrafficMirrorFilterId,
TrafficMirrorFilterRuleId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: traffic_mirror_filter_rules
  props:
    - name: TrafficMirrorFilterId
      value: "{{ TrafficMirrorFilterId }}"
      description: Required parameter for the traffic_mirror_filter_rules resource.
    - name: TrafficDirection
      value: "{{ TrafficDirection }}"
      description: Required parameter for the traffic_mirror_filter_rules resource.
    - name: RuleNumber
      value: {{ RuleNumber }}
      description: Required parameter for the traffic_mirror_filter_rules resource.
    - name: RuleAction
      value: "{{ RuleAction }}"
      description: Required parameter for the traffic_mirror_filter_rules resource.
    - name: DestinationCidrBlock
      value: "{{ DestinationCidrBlock }}"
      description: Required parameter for the traffic_mirror_filter_rules resource.
    - name: SourceCidrBlock
      value: "{{ SourceCidrBlock }}"
      description: Required parameter for the traffic_mirror_filter_rules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the traffic_mirror_filter_rules resource.
    - name: DestinationPortRange
      value: "{{ DestinationPortRange }}"
      description: The destination port range.
      description: The destination port range.
    - name: SourcePortRange
      value: "{{ SourcePortRange }}"
      description: The source port range.
      description: The source port range.
    - name: Protocol
      value: {{ Protocol }}
      description: The protocol, for example UDP, to assign to the Traffic Mirror rule. For information about the protocol value, see Protocol Numbers on the Internet Assigned Numbers Authority (IANA) website.
      description: The protocol, for example UDP, to assign to the Traffic Mirror rule. For information about the protocol value, see Protocol Numbers on the Internet Assigned Numbers Authority (IANA) website.
    - name: Description
      value: "{{ Description }}"
      description: The description of the Traffic Mirror rule.
      description: The description of the Traffic Mirror rule.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: Traffic Mirroring tags specifications.
      description: Traffic Mirroring tags specifications.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_traffic_mirror_filter_rule"
    values={[
        { label: 'modify_traffic_mirror_filter_rule', value: 'modify_traffic_mirror_filter_rule' }
    ]}
>
<TabItem value="modify_traffic_mirror_filter_rule">

Modifies the specified Traffic Mirror rule. DestinationCidrBlock and SourceCidrBlock must both be an IPv4 range or an IPv6 range.

```sql
UPDATE aws.ec2.traffic_mirror_filter_rules
SET 
-- No updatable properties
WHERE 
TrafficMirrorFilterRuleId = '{{ TrafficMirrorFilterRuleId }}' --required
AND region = '{{ region }}' --required
AND TrafficDirection = '{{ TrafficDirection}}'
AND RuleNumber = '{{ RuleNumber}}'
AND RuleAction = '{{ RuleAction}}'
AND DestinationPortRange = '{{ DestinationPortRange}}'
AND SourcePortRange = '{{ SourcePortRange}}'
AND Protocol = '{{ Protocol}}'
AND DestinationCidrBlock = '{{ DestinationCidrBlock}}'
AND SourceCidrBlock = '{{ SourceCidrBlock}}'
AND Description = '{{ Description}}'
AND RemoveField = '{{ RemoveField}}'
AND DryRun = {{ DryRun}}
RETURNING
Description,
DestinationCidrBlock,
DestinationPortRange,
Protocol,
RuleAction,
RuleNumber,
SourceCidrBlock,
SourcePortRange,
Tags,
TrafficDirection,
TrafficMirrorFilterId,
TrafficMirrorFilterRuleId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_traffic_mirror_filter_rule"
    values={[
        { label: 'delete_traffic_mirror_filter_rule', value: 'delete_traffic_mirror_filter_rule' }
    ]}
>
<TabItem value="delete_traffic_mirror_filter_rule">

Deletes the specified Traffic Mirror rule.

```sql
DELETE FROM aws.ec2.traffic_mirror_filter_rules
WHERE TrafficMirrorFilterRuleId = '{{ TrafficMirrorFilterRuleId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
