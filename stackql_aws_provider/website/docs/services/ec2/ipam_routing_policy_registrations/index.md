--- 
title: ipam_routing_policy_registrations
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_routing_policy_registrations
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

Creates, updates, deletes, gets or lists an <code>ipam_routing_policy_registrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_routing_policy_registrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_routing_policy_registrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ipam_routing_policy_registrations"
    values={[
        { label: 'get_ipam_routing_policy_registrations', value: 'get_ipam_routing_policy_registrations' }
    ]}
>
<TabItem value="get_ipam_routing_policy_registrations">

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
    <td><CopyableCode code="asns" /></td>
    <td><code>string</code></td>
    <td>The Autonomous System Numbers (ASNs) authorized to originate the prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="cidr" /></td>
    <td><code>string</code></td>
    <td>The IP address prefix in CIDR notation authorized by the ROA.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the routing policy registration.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_delta_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the most recent delta that modified this registration.</td>
</tr>
<tr>
    <td><CopyableCode code="max_length" /></td>
    <td><code>integer</code></td>
    <td>The maximum prefix length that the ASNs are authorized to announce.</td>
</tr>
<tr>
    <td><CopyableCode code="permit_more_specific_announcements" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to permit more specific route announcements than the CIDR prefix. When enabled, ASNs can announce sub-prefixes of the authorized CIDR up to the specified maximum length. Default: false.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the routing policy registration. Valid values: pending-activate | activate-failed | create-in-progress | create-complete | update-in-progress | update-complete | delete-in-progress | delete-complete.</td>
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
    <td><a href="#get_ipam_routing_policy_registrations"><CopyableCode code="get_ipam_routing_policy_registrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-IpamInternetRegistryAssociationId"><code>IpamInternetRegistryAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Cidr"><code>Cidr</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Retrieves routing policy registrations for an IPAM internet registry association. Each registration represents a Route Origin Authorization (ROA) that has been created or is pending publication to the RPKI. We recommend using pagination to ensure that the operation returns quickly and successfully.</td>
</tr>
<tr>
    <td><a href="#create_ipam_routing_policy_registration"><CopyableCode code="create_ipam_routing_policy_registration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-IpamInternetRegistryAssociationId"><code>IpamInternetRegistryAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Cidr"><code>Cidr</code></a>, <a href="#parameter-Asn"><code>Asn</code></a>, <a href="#parameter-PermitMoreSpecificAnnouncements"><code>PermitMoreSpecificAnnouncements</code></a>, <a href="#parameter-MaxLength"><code>MaxLength</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Force"><code>Force</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Creates a routing policy registration and publishes Route Origin Authorizations (ROAs) to the RPKI for the specified CIDR prefix and ASNs.</td>
</tr>
<tr>
    <td><a href="#modify_ipam_routing_policy_registration"><CopyableCode code="modify_ipam_routing_policy_registration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-IpamInternetRegistryAssociationId"><code>IpamInternetRegistryAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Cidr"><code>Cidr</code></a>, <a href="#parameter-Asn"><code>Asn</code></a>, <a href="#parameter-PermitMoreSpecificAnnouncements"><code>PermitMoreSpecificAnnouncements</code></a>, <a href="#parameter-MaxLength"><code>MaxLength</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Force"><code>Force</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Modifies an existing routing policy registration. You can update the authorized ASNs, maximum prefix length, and other properties of a Route Origin Authorization (ROA).</td>
</tr>
<tr>
    <td><a href="#delete_ipam_routing_policy_registration"><CopyableCode code="delete_ipam_routing_policy_registration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-IpamInternetRegistryAssociationId"><code>IpamInternetRegistryAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Cidr"><code>Cidr</code></a>, <a href="#parameter-Force"><code>Force</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Deletes a routing policy registration for a specified CIDR prefix.</td>
</tr>
<tr>
    <td><a href="#batch_modify_ipam_routing_policy_registrations"><CopyableCode code="batch_modify_ipam_routing_policy_registrations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-IpamInternetRegistryAssociationId"><code>IpamInternetRegistryAssociationId</code></a>, <a href="#parameter-DeltaJson"><code>DeltaJson</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Force"><code>Force</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Modifies multiple routing policy registrations in a single operation. You can create, update, or delete Route Origin Authorizations (ROAs) in batch.</td>
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
<tr id="parameter-DeltaJson">
    <td><CopyableCode code="DeltaJson" /></td>
    <td><code>string</code></td>
    <td>The batch modifications to apply, in JSON format.</td>
</tr>
<tr id="parameter-IpamInternetRegistryAssociationId">
    <td><CopyableCode code="IpamInternetRegistryAssociationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM internet registry association.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Asn">
    <td><CopyableCode code="Asn" /></td>
    <td><code>array</code></td>
    <td>The updated list of Autonomous System Numbers (ASNs) authorized to originate the prefix.</td>
</tr>
<tr id="parameter-Cidr">
    <td><CopyableCode code="Cidr" /></td>
    <td><code>string</code></td>
    <td>The IP address prefix in CIDR notation identifying the routing policy registration to delete.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the operation ignores the request, but does not return an error.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A new description for the routing policy registration.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Force">
    <td><CopyableCode code="Force" /></td>
    <td><code>boolean</code></td>
    <td>Forces the batch modification even if individual changes conflict with announced routes. Default: false.</td>
</tr>
<tr id="parameter-MaxLength">
    <td><CopyableCode code="MaxLength" /></td>
    <td><code>integer</code></td>
    <td>The new maximum prefix length that the ASNs are authorized to announce. Must be greater than or equal to the prefix length of the CIDR.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. If not specified, all available results are returned. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-PermitMoreSpecificAnnouncements">
    <td><CopyableCode code="PermitMoreSpecificAnnouncements" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to permit more specific route announcements than the CIDR prefix. Default: false.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ipam_routing_policy_registrations"
    values={[
        { label: 'get_ipam_routing_policy_registrations', value: 'get_ipam_routing_policy_registrations' }
    ]}
>
<TabItem value="get_ipam_routing_policy_registrations">

Retrieves routing policy registrations for an IPAM internet registry association. Each registration represents a Route Origin Authorization (ROA) that has been created or is pending publication to the RPKI. We recommend using pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
asns,
cidr,
description,
latest_delta_id,
max_length,
permit_more_specific_announcements,
state
FROM aws.ec2.ipam_routing_policy_registrations
WHERE IpamInternetRegistryAssociationId = '{{ IpamInternetRegistryAssociationId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Cidr = '{{ Cidr }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ipam_routing_policy_registration"
    values={[
        { label: 'create_ipam_routing_policy_registration', value: 'create_ipam_routing_policy_registration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ipam_routing_policy_registration">

Creates a routing policy registration and publishes Route Origin Authorizations (ROAs) to the RPKI for the specified CIDR prefix and ASNs.

```sql
INSERT INTO aws.ec2.ipam_routing_policy_registrations (
IpamInternetRegistryAssociationId,
region,
DryRun,
Cidr,
Asn,
PermitMoreSpecificAnnouncements,
MaxLength,
Description,
Force,
ClientToken
)
SELECT 
'{{ IpamInternetRegistryAssociationId }}',
'{{ region }}',
'{{ DryRun }}',
'{{ Cidr }}',
'{{ Asn }}',
'{{ PermitMoreSpecificAnnouncements }}',
'{{ MaxLength }}',
'{{ Description }}',
'{{ Force }}',
'{{ ClientToken }}'
RETURNING
delta_id,
delta_json,
state,
state_message
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ipam_routing_policy_registrations
  props:
    - name: IpamInternetRegistryAssociationId
      value: "{{ IpamInternetRegistryAssociationId }}"
      description: Required parameter for the ipam_routing_policy_registrations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ipam_routing_policy_registrations resource.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: Cidr
      value: "{{ Cidr }}"
      description: The IP address prefix in CIDR notation to authorize in the ROA.
      description: The IP address prefix in CIDR notation to authorize in the ROA.
    - name: Asn
      value: "{{ Asn }}"
      description: The Autonomous System Numbers (ASNs) authorized to originate the prefix.
      description: The Autonomous System Numbers (ASNs) authorized to originate the prefix.
    - name: PermitMoreSpecificAnnouncements
      value: {{ PermitMoreSpecificAnnouncements }}
      description: Specifies whether to permit more specific route announcements than the CIDR prefix. When enabled, ASNs can announce sub-prefixes of the authorized CIDR up to the specified maximum length. Default: false.
      description: Specifies whether to permit more specific route announcements than the CIDR prefix. When enabled, ASNs can announce sub-prefixes of the authorized CIDR up to the specified maximum length. Default: false.
    - name: MaxLength
      value: {{ MaxLength }}
      description: The maximum prefix length that the ASNs are authorized to announce. Must be greater than or equal to the prefix length of the CIDR. If not specified, defaults to the prefix length of the CIDR (exact match only).
      description: The maximum prefix length that the ASNs are authorized to announce. Must be greater than or equal to the prefix length of the CIDR. If not specified, defaults to the prefix length of the CIDR (exact match only).
    - name: Description
      value: "{{ Description }}"
      description: A description for the routing policy registration.
      description: A description for the routing policy registration.
    - name: Force
      value: {{ Force }}
      description: Forces the creation of the routing policy registration even if it conflicts with an announced route. Default: false.
      description: Forces the creation of the routing policy registration even if it conflicts with an announced route. Default: false.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the operation ignores the request, but does not return an error.
      description: A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the operation ignores the request, but does not return an error.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_ipam_routing_policy_registration"
    values={[
        { label: 'modify_ipam_routing_policy_registration', value: 'modify_ipam_routing_policy_registration' }
    ]}
>
<TabItem value="modify_ipam_routing_policy_registration">

Modifies an existing routing policy registration. You can update the authorized ASNs, maximum prefix length, and other properties of a Route Origin Authorization (ROA).

```sql
UPDATE aws.ec2.ipam_routing_policy_registrations
SET 
-- No updatable properties
WHERE 
IpamInternetRegistryAssociationId = '{{ IpamInternetRegistryAssociationId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND Cidr = '{{ Cidr}}'
AND Asn = '{{ Asn}}'
AND PermitMoreSpecificAnnouncements = {{ PermitMoreSpecificAnnouncements}}
AND MaxLength = '{{ MaxLength}}'
AND Description = '{{ Description}}'
AND Force = {{ Force}}
AND ClientToken = '{{ ClientToken}}'
RETURNING
delta_id,
delta_json,
state,
state_message;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ipam_routing_policy_registration"
    values={[
        { label: 'delete_ipam_routing_policy_registration', value: 'delete_ipam_routing_policy_registration' }
    ]}
>
<TabItem value="delete_ipam_routing_policy_registration">

Deletes a routing policy registration for a specified CIDR prefix.

```sql
DELETE FROM aws.ec2.ipam_routing_policy_registrations
WHERE IpamInternetRegistryAssociationId = '{{ IpamInternetRegistryAssociationId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
AND Cidr = '{{ Cidr }}'
AND Force = '{{ Force }}'
AND ClientToken = '{{ ClientToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_modify_ipam_routing_policy_registrations"
    values={[
        { label: 'batch_modify_ipam_routing_policy_registrations', value: 'batch_modify_ipam_routing_policy_registrations' }
    ]}
>
<TabItem value="batch_modify_ipam_routing_policy_registrations">

Modifies multiple routing policy registrations in a single operation. You can create, update, or delete Route Origin Authorizations (ROAs) in batch.

```sql
EXEC aws.ec2.ipam_routing_policy_registrations.batch_modify_ipam_routing_policy_registrations 
@IpamInternetRegistryAssociationId='{{ IpamInternetRegistryAssociationId }}' --required, 
@DeltaJson='{{ DeltaJson }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@Force={{ Force }}, 
@ClientToken='{{ ClientToken }}'
;
```
</TabItem>
</Tabs>
