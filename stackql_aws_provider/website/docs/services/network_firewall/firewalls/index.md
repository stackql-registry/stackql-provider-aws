--- 
title: firewalls
hide_title: false
hide_table_of_contents: false
keywords:
  - firewalls
  - network_firewall
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

Creates, updates, deletes, gets or lists a <code>firewalls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewalls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.firewalls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_firewall"
    values={[
        { label: 'describe_firewall', value: 'describe_firewall' },
        { label: 'list_firewalls', value: 'list_firewalls' }
    ]}
>
<TabItem value="describe_firewall">

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
    <td><CopyableCode code="firewall" /></td>
    <td><code>object</code></td>
    <td>A firewall defines the behavior of a firewall, the main VPC where the firewall is used, the Availability Zones where the firewall can be used, and one subnet to use for a firewall endpoint within each of the Availability Zones. The Availability Zones are defined implicitly in the subnet specifications. In addition to the firewall endpoints that you define in this Firewall specification, you can create firewall endpoints in VpcEndpointAssociation resources for any VPC, in any Availability Zone where the firewall is already in use. The status of the firewall, for example whether it's ready to filter network traffic, is provided in the corresponding FirewallStatus. You can retrieve both the firewall and firewall status by calling DescribeFirewall.</td>
</tr>
<tr>
    <td><CopyableCode code="firewall_status" /></td>
    <td><code>object</code></td>
    <td>Detailed information about the current status of a Firewall. You can retrieve this for a firewall by calling DescribeFirewall and providing the firewall name and ARN. The firewall status indicates a combined status. It indicates whether all subnets are up-to-date with the latest firewall configurations, which is based on the sync states config values, and also whether all subnets have their endpoints fully enabled, based on their sync states attachment values.</td>
</tr>
<tr>
    <td><CopyableCode code="update_token" /></td>
    <td><code>string</code></td>
    <td>An optional token that you can use for optimistic locking. Network Firewall returns a token to your requests that access the firewall. The token marks the state of the firewall resource at the time of the request. To make an unconditional change to the firewall, omit the token in your update request. Without the token, Network Firewall performs your updates regardless of whether the firewall has changed since you last retrieved it. To make a conditional change to the firewall, provide the token in your update request. Network Firewall uses the token to ensure that the firewall hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the firewall again to get a current copy of it with a new token. Reapply your changes as needed, then try the operation again using the new token. (pattern: &lt;code&gt;^(&#91;0-9a-f&#93;&#123;8&#125;)-(&#91;0-9a-f&#93;&#123;4&#125;-)&#123;3&#125;(&#91;0-9a-f&#93;&#123;12&#125;)$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_firewalls">

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
    <td><CopyableCode code="firewall_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the firewall. (pattern: &lt;code&gt;^arn:aws.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="firewall_name" /></td>
    <td><code>string</code></td>
    <td>The descriptive name of the firewall. You can't change the name of a firewall after you create it. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="transit_gateway_attachment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the transit gateway attachment associated with this firewall. This field is only present for transit gateway-attached firewalls. (pattern: &lt;code&gt;^tgw-attach-&#91;0-9a-z&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#describe_firewall"><CopyableCode code="describe_firewall" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the data objects for the specified firewall.</td>
</tr>
<tr>
    <td><a href="#list_firewalls"><CopyableCode code="list_firewalls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the metadata for the firewalls that you have defined. If you provide VPC identifiers in your request, this returns only the firewalls for those VPCs. Depending on your setting for max results and the number of firewalls, a single call might not return the full list.</td>
</tr>
<tr>
    <td><a href="#create_firewall"><CopyableCode code="create_firewall" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FirewallName"><code>FirewallName</code></a>, <a href="#parameter-FirewallPolicyArn"><code>FirewallPolicyArn</code></a></td>
    <td></td>
    <td>Creates an Network Firewall Firewall and accompanying FirewallStatus for a VPC. The firewall defines the configuration settings for an Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. After you create a firewall, you can provide additional settings, like the logging configuration. To update the settings for a firewall, you use the operations that apply to the settings themselves, for example UpdateLoggingConfiguration, AssociateSubnets, and UpdateFirewallDeleteProtection. To manage a firewall's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource. To retrieve information about firewalls, use ListFirewalls and DescribeFirewall. To generate a report on the last 30 days of traffic monitored by a firewall, use StartAnalysisReport.</td>
</tr>
<tr>
    <td><a href="#update_firewall_delete_protection"><CopyableCode code="update_firewall_delete_protection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeleteProtection"><code>DeleteProtection</code></a></td>
    <td></td>
    <td>Modifies the flag, DeleteProtection, which indicates whether it is possible to delete the firewall. If the flag is set to TRUE, the firewall is protected against deletion. This setting helps protect against accidentally deleting a firewall that's in use.</td>
</tr>
<tr>
    <td><a href="#update_firewall_analysis_settings"><CopyableCode code="update_firewall_analysis_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables specific types of firewall analysis on a specific firewall you define.</td>
</tr>
<tr>
    <td><a href="#delete_firewall"><CopyableCode code="delete_firewall" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Firewall and its FirewallStatus. This operation requires the firewall's DeleteProtection flag to be FALSE. You can't revert this operation. You can check whether a firewall is in use by reviewing the route tables for the Availability Zones where you have firewall subnet mappings. Retrieve the subnet mappings by calling DescribeFirewall. You define and update the route tables through Amazon VPC. As needed, update the route tables for the zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints, you can remove the firewall safely. To delete a firewall, remove the delete protection if you need to using UpdateFirewallDeleteProtection, then delete the firewall by calling DeleteFirewall.</td>
</tr>
<tr>
    <td><a href="#start_flow_capture"><CopyableCode code="start_flow_capture" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FirewallArn"><code>FirewallArn</code></a>, <a href="#parameter-FlowFilters"><code>FlowFilters</code></a></td>
    <td></td>
    <td>Begins capturing the flows in a firewall, according to the filters you define. Captures are similar, but not identical to snapshots. Capture operations provide visibility into flows that are not closed and are tracked by a firewall's flow table. Unlike snapshots, captures are a time-boxed view. A flow is network traffic that is monitored by a firewall, either by stateful or stateless rules. For traffic to be considered part of a flow, it must share Destination, DestinationPort, Direction, Protocol, Source, and SourcePort. To avoid encountering operation limits, you should avoid starting captures with broad filters, like wide IP ranges. Instead, we recommend you define more specific criteria with FlowFilters, like narrow IP ranges, ports, or protocols.</td>
</tr>
<tr>
    <td><a href="#start_flow_flush"><CopyableCode code="start_flow_flush" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FirewallArn"><code>FirewallArn</code></a>, <a href="#parameter-FlowFilters"><code>FlowFilters</code></a></td>
    <td></td>
    <td>Begins the flushing of traffic from the firewall, according to the filters you define. When the operation starts, impacted flows are temporarily marked as timed out before the Suricata engine prunes, or flushes, the flows from the firewall table. While the flush completes, impacted flows are processed as midstream traffic. This may result in a temporary increase in midstream traffic metrics. We recommend that you double check your stream exception policy before you perform a flush operation.</td>
</tr>
<tr>
    <td><a href="#update_firewall_description"><CopyableCode code="update_firewall_description" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies the description for the specified firewall. Use the description to help you identify the firewall when you're working with it.</td>
</tr>
<tr>
    <td><a href="#update_firewall_encryption_configuration"><CopyableCode code="update_firewall_encryption_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A complex type that contains settings for encryption of your firewall resources.</td>
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
    defaultValue="describe_firewall"
    values={[
        { label: 'describe_firewall', value: 'describe_firewall' },
        { label: 'list_firewalls', value: 'list_firewalls' }
    ]}
>
<TabItem value="describe_firewall">

Returns the data objects for the specified firewall.

```sql
SELECT
firewall,
firewall_status,
update_token
FROM aws.network_firewall.firewalls
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_firewalls">

Retrieves the metadata for the firewalls that you have defined. If you provide VPC identifiers in your request, this returns only the firewalls for those VPCs. Depending on your setting for max results and the number of firewalls, a single call might not return the full list.

```sql
SELECT
firewall_arn,
firewall_name,
transit_gateway_attachment_id
FROM aws.network_firewall.firewalls
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_firewall"
    values={[
        { label: 'create_firewall', value: 'create_firewall' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_firewall">

Creates an Network Firewall Firewall and accompanying FirewallStatus for a VPC. The firewall defines the configuration settings for an Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. After you create a firewall, you can provide additional settings, like the logging configuration. To update the settings for a firewall, you use the operations that apply to the settings themselves, for example UpdateLoggingConfiguration, AssociateSubnets, and UpdateFirewallDeleteProtection. To manage a firewall's tags, use the standard Amazon Web Services resource tagging operations, ListTagsForResource, TagResource, and UntagResource. To retrieve information about firewalls, use ListFirewalls and DescribeFirewall. To generate a report on the last 30 days of traffic monitored by a firewall, use StartAnalysisReport.

```sql
INSERT INTO aws.network_firewall.firewalls (
FirewallName,
FirewallPolicyArn,
VpcId,
SubnetMappings,
DeleteProtection,
SubnetChangeProtection,
FirewallPolicyChangeProtection,
Description,
Tags,
EncryptionConfiguration,
EnabledAnalysisTypes,
TransitGatewayId,
AvailabilityZoneMappings,
AvailabilityZoneChangeProtection,
region
)
SELECT 
'{{ FirewallName }}' /* required */,
'{{ FirewallPolicyArn }}' /* required */,
'{{ VpcId }}',
'{{ SubnetMappings }}',
{{ DeleteProtection }},
{{ SubnetChangeProtection }},
{{ FirewallPolicyChangeProtection }},
'{{ Description }}',
'{{ Tags }}',
'{{ EncryptionConfiguration }}',
'{{ EnabledAnalysisTypes }}',
'{{ TransitGatewayId }}',
'{{ AvailabilityZoneMappings }}',
{{ AvailabilityZoneChangeProtection }},
'{{ region }}'
RETURNING
firewall,
firewall_status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: firewalls
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the firewalls resource.
    - name: FirewallName
      value: "{{ FirewallName }}"
      description: |
        The descriptive name of the firewall. You can't change the name of a firewall after you create it.
    - name: FirewallPolicyArn
      value: "{{ FirewallPolicyArn }}"
      description: |
        The Amazon Resource Name (ARN) of the FirewallPolicy that you want to use for the firewall.
    - name: VpcId
      value: "{{ VpcId }}"
      description: |
        The unique identifier of the VPC where Network Firewall should create the firewall. You can't change this setting after you create the firewall.
    - name: SubnetMappings
      description: |
        The public subnets to use for your Network Firewall firewalls. Each subnet must belong to a different Availability Zone in the VPC. Network Firewall creates a firewall endpoint in each subnet.
      value:
        - SubnetId: "{{ SubnetId }}"
          IPAddressType: "{{ IPAddressType }}"
    - name: DeleteProtection
      value: {{ DeleteProtection }}
      description: |
        A flag indicating whether it is possible to delete the firewall. A setting of TRUE indicates that the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to TRUE.
    - name: SubnetChangeProtection
      value: {{ SubnetChangeProtection }}
      description: |
        A setting indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE.
    - name: FirewallPolicyChangeProtection
      value: {{ FirewallPolicyChangeProtection }}
      description: |
        A setting indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to TRUE.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the firewall.
    - name: Tags
      description: |
        The key:value pairs to associate with the resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: EncryptionConfiguration
      description: |
        A complex type that contains settings for encryption of your firewall resources.
      value:
        KeyId: "{{ KeyId }}"
        Type: "{{ Type }}"
    - name: EnabledAnalysisTypes
      value:
        - "{{ EnabledAnalysisTypes }}"
      description: |
        An optional setting indicating the specific traffic analysis types to enable on the firewall.
    - name: TransitGatewayId
      value: "{{ TransitGatewayId }}"
      description: |
        Required when creating a transit gateway-attached firewall. The unique identifier of the transit gateway to attach to this firewall. You can provide either a transit gateway from your account or one that has been shared with you through Resource Access Manager. After creating the firewall, you cannot change the transit gateway association. To use a different transit gateway, you must create a new firewall. For information about creating firewalls, see CreateFirewall. For specific guidance about transit gateway-attached firewalls, see Considerations for transit gateway-attached firewalls in the Network Firewall Developer Guide.
    - name: AvailabilityZoneMappings
      description: |
        Required. The Availability Zones where you want to create firewall endpoints for a transit gateway-attached firewall. You must specify at least one Availability Zone. Consider enabling the firewall in every Availability Zone where you have workloads to maintain Availability Zone isolation. You can modify Availability Zones later using AssociateAvailabilityZones or DisassociateAvailabilityZones, but this may briefly disrupt traffic. The AvailabilityZoneChangeProtection setting controls whether you can make these modifications.
      value:
        - AvailabilityZone: "{{ AvailabilityZone }}"
    - name: AvailabilityZoneChangeProtection
      value: {{ AvailabilityZoneChangeProtection }}
      description: |
        Optional. A setting indicating whether the firewall is protected against changes to its Availability Zone configuration. When set to TRUE, you cannot add or remove Availability Zones without first disabling this protection using UpdateAvailabilityZoneChangeProtection. Default value: FALSE
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_firewall_delete_protection"
    values={[
        { label: 'update_firewall_delete_protection', value: 'update_firewall_delete_protection' },
        { label: 'update_firewall_analysis_settings', value: 'update_firewall_analysis_settings' }
    ]}
>
<TabItem value="update_firewall_delete_protection">

Modifies the flag, DeleteProtection, which indicates whether it is possible to delete the firewall. If the flag is set to TRUE, the firewall is protected against deletion. This setting helps protect against accidentally deleting a firewall that's in use.

```sql
UPDATE aws.network_firewall.firewalls
SET 
UpdateToken = '{{ UpdateToken }}',
FirewallArn = '{{ FirewallArn }}',
FirewallName = '{{ FirewallName }}',
DeleteProtection = {{ DeleteProtection }}
WHERE 
region = '{{ region }}' --required
AND DeleteProtection = {{ DeleteProtection }} --required
RETURNING
delete_protection,
firewall_arn,
firewall_name,
update_token;
```
</TabItem>
<TabItem value="update_firewall_analysis_settings">

Enables specific types of firewall analysis on a specific firewall you define.

```sql
UPDATE aws.network_firewall.firewalls
SET 
EnabledAnalysisTypes = '{{ EnabledAnalysisTypes }}',
FirewallArn = '{{ FirewallArn }}',
FirewallName = '{{ FirewallName }}',
UpdateToken = '{{ UpdateToken }}'
WHERE 
region = '{{ region }}' --required
RETURNING
enabled_analysis_types,
firewall_arn,
firewall_name,
update_token;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_firewall"
    values={[
        { label: 'delete_firewall', value: 'delete_firewall' }
    ]}
>
<TabItem value="delete_firewall">

Deletes the specified Firewall and its FirewallStatus. This operation requires the firewall's DeleteProtection flag to be FALSE. You can't revert this operation. You can check whether a firewall is in use by reviewing the route tables for the Availability Zones where you have firewall subnet mappings. Retrieve the subnet mappings by calling DescribeFirewall. You define and update the route tables through Amazon VPC. As needed, update the route tables for the zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints, you can remove the firewall safely. To delete a firewall, remove the delete protection if you need to using UpdateFirewallDeleteProtection, then delete the firewall by calling DeleteFirewall.

```sql
DELETE FROM aws.network_firewall.firewalls
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_flow_capture"
    values={[
        { label: 'start_flow_capture', value: 'start_flow_capture' },
        { label: 'start_flow_flush', value: 'start_flow_flush' },
        { label: 'update_firewall_description', value: 'update_firewall_description' },
        { label: 'update_firewall_encryption_configuration', value: 'update_firewall_encryption_configuration' }
    ]}
>
<TabItem value="start_flow_capture">

Begins capturing the flows in a firewall, according to the filters you define. Captures are similar, but not identical to snapshots. Capture operations provide visibility into flows that are not closed and are tracked by a firewall's flow table. Unlike snapshots, captures are a time-boxed view. A flow is network traffic that is monitored by a firewall, either by stateful or stateless rules. For traffic to be considered part of a flow, it must share Destination, DestinationPort, Direction, Protocol, Source, and SourcePort. To avoid encountering operation limits, you should avoid starting captures with broad filters, like wide IP ranges. Instead, we recommend you define more specific criteria with FlowFilters, like narrow IP ranges, ports, or protocols.

```sql
EXEC aws.network_firewall.firewalls.start_flow_capture 
@region='{{ region }}' --required 
@@json=
'{
"FirewallArn": "{{ FirewallArn }}", 
"AvailabilityZone": "{{ AvailabilityZone }}", 
"VpcEndpointAssociationArn": "{{ VpcEndpointAssociationArn }}", 
"VpcEndpointId": "{{ VpcEndpointId }}", 
"MinimumFlowAgeInSeconds": {{ MinimumFlowAgeInSeconds }}, 
"FlowFilters": "{{ FlowFilters }}"
}'
;
```
</TabItem>
<TabItem value="start_flow_flush">

Begins the flushing of traffic from the firewall, according to the filters you define. When the operation starts, impacted flows are temporarily marked as timed out before the Suricata engine prunes, or flushes, the flows from the firewall table. While the flush completes, impacted flows are processed as midstream traffic. This may result in a temporary increase in midstream traffic metrics. We recommend that you double check your stream exception policy before you perform a flush operation.

```sql
EXEC aws.network_firewall.firewalls.start_flow_flush 
@region='{{ region }}' --required 
@@json=
'{
"FirewallArn": "{{ FirewallArn }}", 
"AvailabilityZone": "{{ AvailabilityZone }}", 
"VpcEndpointAssociationArn": "{{ VpcEndpointAssociationArn }}", 
"VpcEndpointId": "{{ VpcEndpointId }}", 
"MinimumFlowAgeInSeconds": {{ MinimumFlowAgeInSeconds }}, 
"FlowFilters": "{{ FlowFilters }}"
}'
;
```
</TabItem>
<TabItem value="update_firewall_description">

Modifies the description for the specified firewall. Use the description to help you identify the firewall when you're working with it.

```sql
EXEC aws.network_firewall.firewalls.update_firewall_description 
@region='{{ region }}' --required 
@@json=
'{
"UpdateToken": "{{ UpdateToken }}", 
"FirewallArn": "{{ FirewallArn }}", 
"FirewallName": "{{ FirewallName }}", 
"Description": "{{ Description }}"
}'
;
```
</TabItem>
<TabItem value="update_firewall_encryption_configuration">

A complex type that contains settings for encryption of your firewall resources.

```sql
EXEC aws.network_firewall.firewalls.update_firewall_encryption_configuration 
@region='{{ region }}' --required 
@@json=
'{
"UpdateToken": "{{ UpdateToken }}", 
"FirewallArn": "{{ FirewallArn }}", 
"FirewallName": "{{ FirewallName }}", 
"EncryptionConfiguration": "{{ EncryptionConfiguration }}"
}'
;
```
</TabItem>
</Tabs>
