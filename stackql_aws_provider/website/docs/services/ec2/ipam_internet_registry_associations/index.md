--- 
title: ipam_internet_registry_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_internet_registry_associations
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

Creates, updates, deletes, gets or lists an <code>ipam_internet_registry_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_internet_registry_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_internet_registry_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ipam_internet_registry_associations"
    values={[
        { label: 'describe_ipam_internet_registry_associations', value: 'describe_ipam_internet_registry_associations' }
    ]}
>
<TabItem value="describe_ipam_internet_registry_associations">

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
    <td><CopyableCode code="child_request_xml" /></td>
    <td><code>string</code></td>
    <td>The XML content for the child request to be submitted to the internet registry to complete the BPKI setup.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the internet registry association.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the associated IPAM.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_internet_registry_association_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the internet registry association.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_internet_registry_association_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the internet registry association.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region of the IPAM.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_handle" /></td>
    <td><code>string</code></td>
    <td>The organization handle at the internet registry.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the internet registry association.</td>
</tr>
<tr>
    <td><CopyableCode code="rir" /></td>
    <td><code>string</code></td>
    <td>The Regional Internet Registry. Possible values: ripe - RIPE NCC (Europe, the Middle East, and Central Asia). apnic - APNIC (Asia Pacific). arin - ARIN (North America). lacnic - LACNIC (Latin America and the Caribbean).</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the internet registry association. Valid values: pending-activation | pending-enable | create-in-progress | create-failed | enable-in-progress | enable-complete | enable-failed | delete-in-progress | delete-complete | delete-failed.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the internet registry association.</td>
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
    <td><a href="#describe_ipam_internet_registry_associations"><CopyableCode code="describe_ipam_internet_registry_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-IpamInternetRegistryAssociationId"><code>IpamInternetRegistryAssociationId</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes one or more IPAM internet registry associations. We recommend using pagination to ensure that the operation returns quickly and successfully.</td>
</tr>
<tr>
    <td><a href="#create_ipam_internet_registry_association"><CopyableCode code="create_ipam_internet_registry_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-IpamId"><code>IpamId</code></a>, <a href="#parameter-OrganizationHandle"><code>OrganizationHandle</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Rir"><code>Rir</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Creates an association between an IPAM and a Regional Internet Registry (RIR) for Resource Public Key Infrastructure (RPKI) management. You can use this association to create Route Origin Authorizations (ROAs) for IP address prefixes registered with the internet registry. Your IPAM must be in the Advanced tier to use this feature.</td>
</tr>
<tr>
    <td><a href="#delete_ipam_internet_registry_association"><CopyableCode code="delete_ipam_internet_registry_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-IpamInternetRegistryAssociationId"><code>IpamInternetRegistryAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes an IPAM internet registry association. Before deleting, you must remove all routing policy registrations associated with the internet registry.</td>
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
<tr id="parameter-IpamId">
    <td><CopyableCode code="IpamId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM to associate with the internet registry.</td>
</tr>
<tr id="parameter-IpamInternetRegistryAssociationId">
    <td><CopyableCode code="IpamInternetRegistryAssociationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM internet registry association to delete.</td>
</tr>
<tr id="parameter-OrganizationHandle">
    <td><CopyableCode code="OrganizationHandle" /></td>
    <td><code>string</code></td>
    <td>The organization handle at the internet registry (for example, a RIPE NCC organization ID or ARIN Org ID).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the operation ignores the request, but does not return an error.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description for the internet registry association.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters to apply to the results.</td>
</tr>
<tr id="parameter-IpamInternetRegistryAssociationId">
    <td><CopyableCode code="IpamInternetRegistryAssociationId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the internet registry associations to describe.</td>
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
<tr id="parameter-Rir">
    <td><CopyableCode code="Rir" /></td>
    <td><code>string</code></td>
    <td>The Regional Internet Registry to associate with. Possible values: ripe - RIPE NCC (Europe, the Middle East, and Central Asia). apnic - APNIC (Asia Pacific). arin - ARIN (North America). lacnic - LACNIC (Latin America and the Caribbean).</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the internet registry association.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_ipam_internet_registry_associations"
    values={[
        { label: 'describe_ipam_internet_registry_associations', value: 'describe_ipam_internet_registry_associations' }
    ]}
>
<TabItem value="describe_ipam_internet_registry_associations">

Describes one or more IPAM internet registry associations. We recommend using pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
child_request_xml,
description,
ipam_id,
ipam_internet_registry_association_arn,
ipam_internet_registry_association_id,
ipam_region,
organization_handle,
owner_id,
rir,
state,
tags
FROM aws.ec2.ipam_internet_registry_associations
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND IpamInternetRegistryAssociationId = '{{ IpamInternetRegistryAssociationId }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ipam_internet_registry_association"
    values={[
        { label: 'create_ipam_internet_registry_association', value: 'create_ipam_internet_registry_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ipam_internet_registry_association">

Creates an association between an IPAM and a Regional Internet Registry (RIR) for Resource Public Key Infrastructure (RPKI) management. You can use this association to create Route Origin Authorizations (ROAs) for IP address prefixes registered with the internet registry. Your IPAM must be in the Advanced tier to use this feature.

```sql
INSERT INTO aws.ec2.ipam_internet_registry_associations (
IpamId,
OrganizationHandle,
region,
DryRun,
Rir,
Description,
TagSpecification,
ClientToken
)
SELECT 
'{{ IpamId }}',
'{{ OrganizationHandle }}',
'{{ region }}',
'{{ DryRun }}',
'{{ Rir }}',
'{{ Description }}',
'{{ TagSpecification }}',
'{{ ClientToken }}'
RETURNING
child_request_xml,
description,
ipam_id,
ipam_internet_registry_association_arn,
ipam_internet_registry_association_id,
ipam_region,
organization_handle,
owner_id,
rir,
state,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ipam_internet_registry_associations
  props:
    - name: IpamId
      value: "{{ IpamId }}"
      description: Required parameter for the ipam_internet_registry_associations resource.
    - name: OrganizationHandle
      value: "{{ OrganizationHandle }}"
      description: Required parameter for the ipam_internet_registry_associations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ipam_internet_registry_associations resource.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: Rir
      value: "{{ Rir }}"
      description: The Regional Internet Registry to associate with. Possible values: ripe - RIPE NCC (Europe, the Middle East, and Central Asia). apnic - APNIC (Asia Pacific). arin - ARIN (North America). lacnic - LACNIC (Latin America and the Caribbean).
      description: The Regional Internet Registry to associate with. Possible values: ripe - RIPE NCC (Europe, the Middle East, and Central Asia). apnic - APNIC (Asia Pacific). arin - ARIN (North America). lacnic - LACNIC (Latin America and the Caribbean).
    - name: Description
      value: "{{ Description }}"
      description: A description for the internet registry association.
      description: A description for the internet registry association.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the internet registry association.
      description: The tags to assign to the internet registry association.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the operation ignores the request, but does not return an error.
      description: A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the operation ignores the request, but does not return an error.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ipam_internet_registry_association"
    values={[
        { label: 'delete_ipam_internet_registry_association', value: 'delete_ipam_internet_registry_association' }
    ]}
>
<TabItem value="delete_ipam_internet_registry_association">

Deletes an IPAM internet registry association. Before deleting, you must remove all routing policy registrations associated with the internet registry.

```sql
DELETE FROM aws.ec2.ipam_internet_registry_associations
WHERE IpamInternetRegistryAssociationId = '{{ IpamInternetRegistryAssociationId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
