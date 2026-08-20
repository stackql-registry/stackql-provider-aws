--- 
title: transit_gateway_policy_table_entries
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_policy_table_entries
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

Creates, updates, deletes, gets or lists a <code>transit_gateway_policy_table_entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transit_gateway_policy_table_entries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.transit_gateway_policy_table_entries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_transit_gateway_policy_table_entries"
    values={[
        { label: 'get_transit_gateway_policy_table_entries', value: 'get_transit_gateway_policy_table_entries' }
    ]}
>
<TabItem value="get_transit_gateway_policy_table_entries">

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
    <td><CopyableCode code="policy_rule" /></td>
    <td><code>string</code></td>
    <td>The policy rule associated with the transit gateway policy table.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_rule_number" /></td>
    <td><code>string</code></td>
    <td>The rule number for the transit gateway policy table entry.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the transit gateway policy table entry.</td>
</tr>
<tr>
    <td><CopyableCode code="target_route_table_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the target route table.</td>
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
    <td><a href="#get_transit_gateway_policy_table_entries"><CopyableCode code="get_transit_gateway_policy_table_entries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-TransitGatewayPolicyTableId"><code>TransitGatewayPolicyTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Returns a list of transit gateway policy table entries.</td>
</tr>
<tr>
    <td><a href="#create_transit_gateway_policy_table_entry"><CopyableCode code="create_transit_gateway_policy_table_entry" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-TransitGatewayPolicyTableId"><code>TransitGatewayPolicyTableId</code></a>, <a href="#parameter-PolicyRuleNumber"><code>PolicyRuleNumber</code></a>, <a href="#parameter-TargetRouteTableId"><code>TargetRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PolicyRule"><code>PolicyRule</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates an entry in a transit gateway policy table to route matching traffic to a specified route table.</td>
</tr>
<tr>
    <td><a href="#modify_transit_gateway_policy_table_entry"><CopyableCode code="modify_transit_gateway_policy_table_entry" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TransitGatewayPolicyTableId"><code>TransitGatewayPolicyTableId</code></a>, <a href="#parameter-PolicyRuleNumber"><code>PolicyRuleNumber</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PolicyRule"><code>PolicyRule</code></a>, <a href="#parameter-TargetRouteTableId"><code>TargetRouteTableId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies the specified transit gateway policy table entry.</td>
</tr>
<tr>
    <td><a href="#delete_transit_gateway_policy_table_entry"><CopyableCode code="delete_transit_gateway_policy_table_entry" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TransitGatewayPolicyTableId"><code>TransitGatewayPolicyTableId</code></a>, <a href="#parameter-PolicyRuleNumber"><code>PolicyRuleNumber</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified transit gateway policy table entry.</td>
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
<tr id="parameter-PolicyRuleNumber">
    <td><CopyableCode code="PolicyRuleNumber" /></td>
    <td><code>string</code></td>
    <td>The rule number of the policy table entry to delete.</td>
</tr>
<tr id="parameter-TargetRouteTableId">
    <td><CopyableCode code="TargetRouteTableId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway route table to use for traffic matching this rule.</td>
</tr>
<tr id="parameter-TransitGatewayPolicyTableId">
    <td><CopyableCode code="TransitGatewayPolicyTableId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway policy table.</td>
</tr>
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
    <td>One or more filters. The possible values are: policy-rule-number - The rule number for the transit gateway policy table entry. target-route-table-id - The ID of the target route table. policy-rule.source-ip - The source CIDR block for the policy rule. policy-rule.destination-ip - The destination CIDR block for the policy rule. policy-rule.source-port - The source port or port range for the policy rule. policy-rule.destination-port - The destination port or port range for the policy rule. policy-rule.protocol - The protocol for the policy rule. policy-rule.meta-data.key - The metadata key for the policy rule. policy-rule.meta-data.value - The metadata value for the policy rule.</td>
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
<tr id="parameter-PolicyRule">
    <td><CopyableCode code="PolicyRule" /></td>
    <td><code>object</code></td>
    <td>The updated matching criteria for the policy table entry. Unspecified fields retain their current values.</td>
</tr>
<tr id="parameter-TargetRouteTableId">
    <td><CopyableCode code="TargetRouteTableId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway route table to use for traffic matching this rule.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_transit_gateway_policy_table_entries"
    values={[
        { label: 'get_transit_gateway_policy_table_entries', value: 'get_transit_gateway_policy_table_entries' }
    ]}
>
<TabItem value="get_transit_gateway_policy_table_entries">

Returns a list of transit gateway policy table entries.

```sql
SELECT
policy_rule,
policy_rule_number,
state,
target_route_table_id
FROM aws.ec2.transit_gateway_policy_table_entries
WHERE TransitGatewayPolicyTableId = '{{ TransitGatewayPolicyTableId }}' -- required
AND region = '{{ region }}' -- required
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_transit_gateway_policy_table_entry"
    values={[
        { label: 'create_transit_gateway_policy_table_entry', value: 'create_transit_gateway_policy_table_entry' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_transit_gateway_policy_table_entry">

Creates an entry in a transit gateway policy table to route matching traffic to a specified route table.

```sql
INSERT INTO aws.ec2.transit_gateway_policy_table_entries (
TransitGatewayPolicyTableId,
PolicyRuleNumber,
TargetRouteTableId,
region,
PolicyRule,
DryRun
)
SELECT 
'{{ TransitGatewayPolicyTableId }}',
'{{ PolicyRuleNumber }}',
'{{ TargetRouteTableId }}',
'{{ region }}',
'{{ PolicyRule }}',
'{{ DryRun }}'
RETURNING
policy_rule,
policy_rule_number,
state,
target_route_table_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transit_gateway_policy_table_entries
  props:
    - name: TransitGatewayPolicyTableId
      value: "{{ TransitGatewayPolicyTableId }}"
      description: Required parameter for the transit_gateway_policy_table_entries resource.
    - name: PolicyRuleNumber
      value: "{{ PolicyRuleNumber }}"
      description: Required parameter for the transit_gateway_policy_table_entries resource.
    - name: TargetRouteTableId
      value: "{{ TargetRouteTableId }}"
      description: Required parameter for the transit_gateway_policy_table_entries resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the transit_gateway_policy_table_entries resource.
    - name: PolicyRule
      value: "{{ PolicyRule }}"
      description: The matching criteria for the policy table entry.
      description: The matching criteria for the policy table entry.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_transit_gateway_policy_table_entry"
    values={[
        { label: 'modify_transit_gateway_policy_table_entry', value: 'modify_transit_gateway_policy_table_entry' }
    ]}
>
<TabItem value="modify_transit_gateway_policy_table_entry">

Modifies the specified transit gateway policy table entry.

```sql
UPDATE aws.ec2.transit_gateway_policy_table_entries
SET 
-- No updatable properties
WHERE 
TransitGatewayPolicyTableId = '{{ TransitGatewayPolicyTableId }}' --required
AND PolicyRuleNumber = '{{ PolicyRuleNumber }}' --required
AND region = '{{ region }}' --required
AND PolicyRule = '{{ PolicyRule}}'
AND TargetRouteTableId = '{{ TargetRouteTableId}}'
AND DryRun = {{ DryRun}}
RETURNING
policy_rule,
policy_rule_number,
state,
target_route_table_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_transit_gateway_policy_table_entry"
    values={[
        { label: 'delete_transit_gateway_policy_table_entry', value: 'delete_transit_gateway_policy_table_entry' }
    ]}
>
<TabItem value="delete_transit_gateway_policy_table_entry">

Deletes the specified transit gateway policy table entry.

```sql
DELETE FROM aws.ec2.transit_gateway_policy_table_entries
WHERE TransitGatewayPolicyTableId = '{{ TransitGatewayPolicyTableId }}' --required
AND PolicyRuleNumber = '{{ PolicyRuleNumber }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
