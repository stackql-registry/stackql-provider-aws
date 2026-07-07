--- 
title: transit_gateway_metering_policy_entries
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_metering_policy_entries
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

Creates, updates, deletes, gets or lists a <code>transit_gateway_metering_policy_entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transit_gateway_metering_policy_entries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.transit_gateway_metering_policy_entries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_transit_gateway_metering_policy_entries"
    values={[
        { label: 'get_transit_gateway_metering_policy_entries', value: 'get_transit_gateway_metering_policy_entries' }
    ]}
>
<TabItem value="get_transit_gateway_metering_policy_entries">

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
    <td><CopyableCode code="MeteredAccount" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID to which the metered traffic is attributed.</td>
</tr>
<tr>
    <td><CopyableCode code="MeteringPolicyRule" /></td>
    <td><code>string</code></td>
    <td>The metering policy rule that defines traffic matching criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyRuleNumber" /></td>
    <td><code>string</code></td>
    <td>The rule number of the metering policy entry.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the metering policy entry.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateEffectiveAt" /></td>
    <td><code>string</code></td>
    <td>The date and time when the metering policy entry update becomes effective.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string</code></td>
    <td>The date and time when the metering policy entry was last updated.</td>
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
    <td><a href="#get_transit_gateway_metering_policy_entries"><CopyableCode code="get_transit_gateway_metering_policy_entries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-TransitGatewayMeteringPolicyId"><code>TransitGatewayMeteringPolicyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Retrieves the entries for a transit gateway metering policy.</td>
</tr>
<tr>
    <td><a href="#create_transit_gateway_metering_policy_entry"><CopyableCode code="create_transit_gateway_metering_policy_entry" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-TransitGatewayMeteringPolicyId"><code>TransitGatewayMeteringPolicyId</code></a>, <a href="#parameter-PolicyRuleNumber"><code>PolicyRuleNumber</code></a>, <a href="#parameter-MeteredAccount"><code>MeteredAccount</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SourceTransitGatewayAttachmentId"><code>SourceTransitGatewayAttachmentId</code></a>, <a href="#parameter-SourceTransitGatewayAttachmentType"><code>SourceTransitGatewayAttachmentType</code></a>, <a href="#parameter-SourceCidrBlock"><code>SourceCidrBlock</code></a>, <a href="#parameter-SourcePortRange"><code>SourcePortRange</code></a>, <a href="#parameter-DestinationTransitGatewayAttachmentId"><code>DestinationTransitGatewayAttachmentId</code></a>, <a href="#parameter-DestinationTransitGatewayAttachmentType"><code>DestinationTransitGatewayAttachmentType</code></a>, <a href="#parameter-DestinationCidrBlock"><code>DestinationCidrBlock</code></a>, <a href="#parameter-DestinationPortRange"><code>DestinationPortRange</code></a>, <a href="#parameter-Protocol"><code>Protocol</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates an entry in a transit gateway metering policy to define traffic measurement rules.</td>
</tr>
<tr>
    <td><a href="#delete_transit_gateway_metering_policy_entry"><CopyableCode code="delete_transit_gateway_metering_policy_entry" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TransitGatewayMeteringPolicyId"><code>TransitGatewayMeteringPolicyId</code></a>, <a href="#parameter-PolicyRuleNumber"><code>PolicyRuleNumber</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes an entry from a transit gateway metering policy.</td>
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
<tr id="parameter-MeteredAccount">
    <td><CopyableCode code="MeteredAccount" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID to which the metered traffic should be attributed.</td>
</tr>
<tr id="parameter-PolicyRuleNumber">
    <td><CopyableCode code="PolicyRuleNumber" /></td>
    <td><code>integer</code></td>
    <td>The rule number of the metering policy entry to delete.</td>
</tr>
<tr id="parameter-TransitGatewayMeteringPolicyId">
    <td><CopyableCode code="TransitGatewayMeteringPolicyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway metering policy containing the entry to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DestinationCidrBlock">
    <td><CopyableCode code="DestinationCidrBlock" /></td>
    <td><code>string</code></td>
    <td>The destination CIDR block for traffic matching.</td>
</tr>
<tr id="parameter-DestinationPortRange">
    <td><CopyableCode code="DestinationPortRange" /></td>
    <td><code>string</code></td>
    <td>The destination port range for traffic matching.</td>
</tr>
<tr id="parameter-DestinationTransitGatewayAttachmentId">
    <td><CopyableCode code="DestinationTransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the destination transit gateway attachment for traffic matching.</td>
</tr>
<tr id="parameter-DestinationTransitGatewayAttachmentType">
    <td><CopyableCode code="DestinationTransitGatewayAttachmentType" /></td>
    <td><code>string</code></td>
    <td>The type of the destination transit gateway attachment for traffic matching. Note that the tgw-peering resource type has been deprecated. To configure metering policies for Connect, use the transport attachment type.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters to apply when retrieving metering policy entries.</td>
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
    <td><code>string</code></td>
    <td>The protocol for traffic matching (1, 6, 17, etc.).</td>
</tr>
<tr id="parameter-SourceCidrBlock">
    <td><CopyableCode code="SourceCidrBlock" /></td>
    <td><code>string</code></td>
    <td>The source CIDR block for traffic matching.</td>
</tr>
<tr id="parameter-SourcePortRange">
    <td><CopyableCode code="SourcePortRange" /></td>
    <td><code>string</code></td>
    <td>The source port range for traffic matching.</td>
</tr>
<tr id="parameter-SourceTransitGatewayAttachmentId">
    <td><CopyableCode code="SourceTransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the source transit gateway attachment for traffic matching.</td>
</tr>
<tr id="parameter-SourceTransitGatewayAttachmentType">
    <td><CopyableCode code="SourceTransitGatewayAttachmentType" /></td>
    <td><code>string</code></td>
    <td>The type of the source transit gateway attachment for traffic matching. Note that the tgw-peering resource type has been deprecated. To configure metering policies for Connect, use the transport attachment type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_transit_gateway_metering_policy_entries"
    values={[
        { label: 'get_transit_gateway_metering_policy_entries', value: 'get_transit_gateway_metering_policy_entries' }
    ]}
>
<TabItem value="get_transit_gateway_metering_policy_entries">

Retrieves the entries for a transit gateway metering policy.

```sql
SELECT
MeteredAccount,
MeteringPolicyRule,
PolicyRuleNumber,
State,
UpdateEffectiveAt,
UpdatedAt
FROM aws.ec2.transit_gateway_metering_policy_entries
WHERE TransitGatewayMeteringPolicyId = '{{ TransitGatewayMeteringPolicyId }}' -- required
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
    defaultValue="create_transit_gateway_metering_policy_entry"
    values={[
        { label: 'create_transit_gateway_metering_policy_entry', value: 'create_transit_gateway_metering_policy_entry' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_transit_gateway_metering_policy_entry">

Creates an entry in a transit gateway metering policy to define traffic measurement rules.

```sql
INSERT INTO aws.ec2.transit_gateway_metering_policy_entries (
TransitGatewayMeteringPolicyId,
PolicyRuleNumber,
MeteredAccount,
region,
SourceTransitGatewayAttachmentId,
SourceTransitGatewayAttachmentType,
SourceCidrBlock,
SourcePortRange,
DestinationTransitGatewayAttachmentId,
DestinationTransitGatewayAttachmentType,
DestinationCidrBlock,
DestinationPortRange,
Protocol,
DryRun
)
SELECT 
'{{ TransitGatewayMeteringPolicyId }}',
'{{ PolicyRuleNumber }}',
'{{ MeteredAccount }}',
'{{ region }}',
'{{ SourceTransitGatewayAttachmentId }}',
'{{ SourceTransitGatewayAttachmentType }}',
'{{ SourceCidrBlock }}',
'{{ SourcePortRange }}',
'{{ DestinationTransitGatewayAttachmentId }}',
'{{ DestinationTransitGatewayAttachmentType }}',
'{{ DestinationCidrBlock }}',
'{{ DestinationPortRange }}',
'{{ Protocol }}',
'{{ DryRun }}'
RETURNING
MeteredAccount,
MeteringPolicyRule,
PolicyRuleNumber,
State,
UpdateEffectiveAt,
UpdatedAt
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transit_gateway_metering_policy_entries
  props:
    - name: TransitGatewayMeteringPolicyId
      value: "{{ TransitGatewayMeteringPolicyId }}"
      description: Required parameter for the transit_gateway_metering_policy_entries resource.
    - name: PolicyRuleNumber
      value: {{ PolicyRuleNumber }}
      description: Required parameter for the transit_gateway_metering_policy_entries resource.
    - name: MeteredAccount
      value: "{{ MeteredAccount }}"
      description: Required parameter for the transit_gateway_metering_policy_entries resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the transit_gateway_metering_policy_entries resource.
    - name: SourceTransitGatewayAttachmentId
      value: "{{ SourceTransitGatewayAttachmentId }}"
      description: The ID of the source transit gateway attachment for traffic matching.
      description: The ID of the source transit gateway attachment for traffic matching.
    - name: SourceTransitGatewayAttachmentType
      value: "{{ SourceTransitGatewayAttachmentType }}"
      description: The type of the source transit gateway attachment for traffic matching. Note that the tgw-peering resource type has been deprecated. To configure metering policies for Connect, use the transport attachment type.
      description: The type of the source transit gateway attachment for traffic matching. Note that the tgw-peering resource type has been deprecated. To configure metering policies for Connect, use the transport attachment type.
    - name: SourceCidrBlock
      value: "{{ SourceCidrBlock }}"
      description: The source CIDR block for traffic matching.
      description: The source CIDR block for traffic matching.
    - name: SourcePortRange
      value: "{{ SourcePortRange }}"
      description: The source port range for traffic matching.
      description: The source port range for traffic matching.
    - name: DestinationTransitGatewayAttachmentId
      value: "{{ DestinationTransitGatewayAttachmentId }}"
      description: The ID of the destination transit gateway attachment for traffic matching.
      description: The ID of the destination transit gateway attachment for traffic matching.
    - name: DestinationTransitGatewayAttachmentType
      value: "{{ DestinationTransitGatewayAttachmentType }}"
      description: The type of the destination transit gateway attachment for traffic matching. Note that the tgw-peering resource type has been deprecated. To configure metering policies for Connect, use the transport attachment type.
      description: The type of the destination transit gateway attachment for traffic matching. Note that the tgw-peering resource type has been deprecated. To configure metering policies for Connect, use the transport attachment type.
    - name: DestinationCidrBlock
      value: "{{ DestinationCidrBlock }}"
      description: The destination CIDR block for traffic matching.
      description: The destination CIDR block for traffic matching.
    - name: DestinationPortRange
      value: "{{ DestinationPortRange }}"
      description: The destination port range for traffic matching.
      description: The destination port range for traffic matching.
    - name: Protocol
      value: "{{ Protocol }}"
      description: The protocol for traffic matching (1, 6, 17, etc.).
      description: The protocol for traffic matching (1, 6, 17, etc.).
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_transit_gateway_metering_policy_entry"
    values={[
        { label: 'delete_transit_gateway_metering_policy_entry', value: 'delete_transit_gateway_metering_policy_entry' }
    ]}
>
<TabItem value="delete_transit_gateway_metering_policy_entry">

Deletes an entry from a transit gateway metering policy.

```sql
DELETE FROM aws.ec2.transit_gateway_metering_policy_entries
WHERE TransitGatewayMeteringPolicyId = '{{ TransitGatewayMeteringPolicyId }}' --required
AND PolicyRuleNumber = '{{ PolicyRuleNumber }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
