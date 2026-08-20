--- 
title: updates
hide_title: false
hide_table_of_contents: false
keywords:
  - updates
  - eks
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

Creates, updates, deletes, gets or lists a <code>updates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="updates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.eks.updates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_update"
    values={[
        { label: 'describe_update', value: 'describe_update' },
        { label: 'list_updates', value: 'list_updates' }
    ]}
>
<TabItem value="describe_update">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A UUID that is used to track the update.</td>
</tr>
<tr>
    <td><CopyableCode code="cancellation" /></td>
    <td><code>object</code></td>
    <td>The latest cancellation information for the update. This field is present only if any cancellation is attempted for the update.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp at object creation.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Any errors associated with a Failed update.</td>
</tr>
<tr>
    <td><CopyableCode code="params" /></td>
    <td><code>array</code></td>
    <td>A key-value map that contains the parameters associated with the update.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the update. (InProgress, Failed, Cancelled, Successful)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the update. (VersionUpdate, EndpointAccessUpdate, LoggingUpdate, ConfigUpdate, AssociateIdentityProviderConfig, DisassociateIdentityProviderConfig, AssociateEncryptionConfig, AddonUpdate, VpcConfigUpdate, AccessConfigUpdate, UpgradePolicyUpdate, ZonalShiftConfigUpdate, AutoModeUpdate, RemoteNetworkConfigUpdate, DeletionProtectionUpdate, CapabilityUpdate, ControlPlaneScalingConfigUpdate, VendedLogsUpdate, ControlPlaneEgressUpdate, VersionRollback, ControlPlaneComponentConfigUpdate, CertificateAuthorityUpdate)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_updates">

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
    <td><CopyableCode code="update_id" /></td>
    <td><code>string</code></td>
    <td>A list of all the updates for the specified cluster and Region.</td>
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
    <td><a href="#describe_update"><CopyableCode code="describe_update" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-update_id"><code>update_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nodegroupName"><code>nodegroupName</code></a>, <a href="#parameter-addonName"><code>addonName</code></a>, <a href="#parameter-capabilityName"><code>capabilityName</code></a></td>
    <td>Describes an update to an Amazon EKS resource. When the status of the update is Successful, the update is complete. If an update fails, the status is Failed, and an error detail explains the reason for the failure.</td>
</tr>
<tr>
    <td><a href="#list_updates"><CopyableCode code="list_updates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nodegroupName"><code>nodegroupName</code></a>, <a href="#parameter-addonName"><code>addonName</code></a>, <a href="#parameter-capabilityName"><code>capabilityName</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the updates associated with an Amazon EKS resource in your Amazon Web Services account, in the specified Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#cancel_update"><CopyableCode code="cancel_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-update_id"><code>update_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels an in-progress update to an Amazon EKS cluster on a best-effort basis. Cancellation is only performed if the update can be cancelled. Currently, this is supported for VersionRollback update types on EKS Auto Mode clusters when nodes are rolling back. A successful cancellation stops the node rollback. After cancellation, nodes converge to the current cluster version honoring configured disruption controls. If the control plane rollback has already begun, the cancellation request fails.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon EKS cluster associated with the update.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-update_id">
    <td><CopyableCode code="update_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the update to cancel.</td>
</tr>
<tr id="parameter-addonName">
    <td><CopyableCode code="addonName" /></td>
    <td><code>string</code></td>
    <td>The names of the installed add-ons that have available updates.</td>
</tr>
<tr id="parameter-capabilityName">
    <td><CopyableCode code="capabilityName" /></td>
    <td><code>string</code></td>
    <td>The name of the capability for which you want to list updates.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return. This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</td>
</tr>
<tr id="parameter-nodegroupName">
    <td><CopyableCode code="nodegroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon EKS managed node group to list updates for.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_update"
    values={[
        { label: 'describe_update', value: 'describe_update' },
        { label: 'list_updates', value: 'list_updates' }
    ]}
>
<TabItem value="describe_update">

Describes an update to an Amazon EKS resource. When the status of the update is Successful, the update is complete. If an update fails, the status is Failed, and an error detail explains the reason for the failure.

```sql
SELECT
id,
cancellation,
created_at,
errors,
params,
status,
type_
FROM aws.eks.updates
WHERE name = '{{ name }}' -- required
AND update_id = '{{ update_id }}' -- required
AND region = '{{ region }}' -- required
AND nodegroupName = '{{ nodegroupName }}'
AND addonName = '{{ addonName }}'
AND capabilityName = '{{ capabilityName }}'
;
```
</TabItem>
<TabItem value="list_updates">

Lists the updates associated with an Amazon EKS resource in your Amazon Web Services account, in the specified Amazon Web Services Region.

```sql
SELECT
update_id
FROM aws.eks.updates
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
AND nodegroupName = '{{ nodegroupName }}'
AND addonName = '{{ addonName }}'
AND capabilityName = '{{ capabilityName }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_update"
    values={[
        { label: 'cancel_update', value: 'cancel_update' }
    ]}
>
<TabItem value="cancel_update">

Cancels an in-progress update to an Amazon EKS cluster on a best-effort basis. Cancellation is only performed if the update can be cancelled. Currently, this is supported for VersionRollback update types on EKS Auto Mode clusters when nodes are rolling back. A successful cancellation stops the node rollback. After cancellation, nodes converge to the current cluster version honoring configured disruption controls. If the control plane rollback has already begun, the cancellation request fails.

```sql
EXEC aws.eks.updates.cancel_update 
@name='{{ name }}' --required, 
@update_id='{{ update_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"clientRequestToken": "{{ clientRequestToken }}"
}'
;
```
</TabItem>
</Tabs>
