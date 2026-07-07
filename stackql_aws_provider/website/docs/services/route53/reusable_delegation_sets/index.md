--- 
title: reusable_delegation_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - reusable_delegation_sets
  - route53
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

Creates, updates, deletes, gets or lists a <code>reusable_delegation_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reusable_delegation_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.reusable_delegation_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_reusable_delegation_set"
    values={[
        { label: 'get_reusable_delegation_set', value: 'get_reusable_delegation_set' },
        { label: 'list_reusable_delegation_sets', value: 'list_reusable_delegation_sets' }
    ]}
>
<TabItem value="get_reusable_delegation_set">

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
    <td><CopyableCode code="CallerReference" /></td>
    <td><code>string</code></td>
    <td>The value that you specified for CallerReference when you created the reusable delegation set.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID that Amazon Route 53 assigns to a reusable delegation set.</td>
</tr>
<tr>
    <td><CopyableCode code="NameServers" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains a list of the authoritative name servers for a hosted zone or for a reusable delegation set.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_reusable_delegation_sets">

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
    <td><CopyableCode code="CallerReference" /></td>
    <td><code>string</code></td>
    <td>The value that you specified for CallerReference when you created the reusable delegation set.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID that Amazon Route 53 assigns to a reusable delegation set.</td>
</tr>
<tr>
    <td><CopyableCode code="NameServers" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains a list of the authoritative name servers for a hosted zone or for a reusable delegation set.</td>
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
    <td><a href="#get_reusable_delegation_set"><CopyableCode code="get_reusable_delegation_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specified reusable delegation set, including the four name servers that are assigned to the delegation set.</td>
</tr>
<tr>
    <td><a href="#list_reusable_delegation_sets"><CopyableCode code="list_reusable_delegation_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-maxitems"><code>maxitems</code></a></td>
    <td>Retrieves a list of the reusable delegation sets that are associated with the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_reusable_delegation_set"><CopyableCode code="create_reusable_delegation_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CallerReference"><code>CallerReference</code></a></td>
    <td></td>
    <td>Creates a delegation set (a group of four name servers) that can be reused by multiple hosted zones that were created by the same Amazon Web Services account. You can also create a reusable delegation set that uses the four name servers that are associated with an existing hosted zone. Specify the hosted zone ID in the CreateReusableDelegationSet request. You can't associate a reusable delegation set with a private hosted zone. For information about using a reusable delegation set to configure white label name servers, see Configuring White Label Name Servers. The process for migrating existing hosted zones to use a reusable delegation set is comparable to the process for configuring white label name servers. You need to perform the following steps: Create a reusable delegation set. Recreate hosted zones, and reduce the TTL to 60 seconds or less. Recreate resource record sets in the new hosted zones. Change the registrar's name servers to use the name servers for the new hosted zones. Monitor traffic for the website or application. Change TTLs back to their original values. If you want to migrate existing hosted zones to use a reusable delegation set, the existing hosted zones can't use any of the name servers that are assigned to the reusable delegation set. If one or more hosted zones do use one or more name servers that are assigned to the reusable delegation set, you can do one of the following: For small numbers of hosted zones—up to a few hundred—it's relatively easy to create reusable delegation sets until you get one that has four name servers that don't overlap with any of the name servers in your hosted zones. For larger numbers of hosted zones, the easiest solution is to use more than one reusable delegation set. For larger numbers of hosted zones, you can also migrate hosted zones that have overlapping name servers to hosted zones that don't have overlapping name servers, then migrate the hosted zones again to use the reusable delegation set.</td>
</tr>
<tr>
    <td><a href="#delete_reusable_delegation_set"><CopyableCode code="delete_reusable_delegation_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a reusable delegation set. You can delete a reusable delegation set only if it isn't associated with any hosted zones. To verify that the reusable delegation set is not associated with any hosted zones, submit a GetReusableDelegationSet request and specify the ID of the reusable delegation set that you want to delete.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the reusable delegation set that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>If the value of IsTruncated in the previous response was true, you have more reusable delegation sets. To get another group, submit another ListReusableDelegationSets request. For the value of marker, specify the value of NextMarker from the previous response, which is the ID of the first reusable delegation set that Amazon Route 53 will return if you submit another request. If the value of IsTruncated in the previous response was false, there are no more reusable delegation sets to get.</td>
</tr>
<tr id="parameter-maxitems">
    <td><CopyableCode code="maxitems" /></td>
    <td><code>string</code></td>
    <td>The number of reusable delegation sets that you want Amazon Route 53 to return in the response to this request. If you specify a value greater than 100, Route 53 returns only the first 100 reusable delegation sets.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_reusable_delegation_set"
    values={[
        { label: 'get_reusable_delegation_set', value: 'get_reusable_delegation_set' },
        { label: 'list_reusable_delegation_sets', value: 'list_reusable_delegation_sets' }
    ]}
>
<TabItem value="get_reusable_delegation_set">

Retrieves information about a specified reusable delegation set, including the four name servers that are assigned to the delegation set.

```sql
SELECT
CallerReference,
Id,
NameServers
FROM aws.route53.reusable_delegation_sets
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_reusable_delegation_sets">

Retrieves a list of the reusable delegation sets that are associated with the current Amazon Web Services account.

```sql
SELECT
CallerReference,
Id,
NameServers
FROM aws.route53.reusable_delegation_sets
WHERE region = '{{ region }}' -- required
AND marker = '{{ marker }}'
AND maxitems = '{{ maxitems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_reusable_delegation_set"
    values={[
        { label: 'create_reusable_delegation_set', value: 'create_reusable_delegation_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_reusable_delegation_set">

Creates a delegation set (a group of four name servers) that can be reused by multiple hosted zones that were created by the same Amazon Web Services account. You can also create a reusable delegation set that uses the four name servers that are associated with an existing hosted zone. Specify the hosted zone ID in the CreateReusableDelegationSet request. You can't associate a reusable delegation set with a private hosted zone. For information about using a reusable delegation set to configure white label name servers, see Configuring White Label Name Servers. The process for migrating existing hosted zones to use a reusable delegation set is comparable to the process for configuring white label name servers. You need to perform the following steps: Create a reusable delegation set. Recreate hosted zones, and reduce the TTL to 60 seconds or less. Recreate resource record sets in the new hosted zones. Change the registrar's name servers to use the name servers for the new hosted zones. Monitor traffic for the website or application. Change TTLs back to their original values. If you want to migrate existing hosted zones to use a reusable delegation set, the existing hosted zones can't use any of the name servers that are assigned to the reusable delegation set. If one or more hosted zones do use one or more name servers that are assigned to the reusable delegation set, you can do one of the following: For small numbers of hosted zones—up to a few hundred—it's relatively easy to create reusable delegation sets until you get one that has four name servers that don't overlap with any of the name servers in your hosted zones. For larger numbers of hosted zones, the easiest solution is to use more than one reusable delegation set. For larger numbers of hosted zones, you can also migrate hosted zones that have overlapping name servers to hosted zones that don't have overlapping name servers, then migrate the hosted zones again to use the reusable delegation set.

```sql
INSERT INTO aws.route53.reusable_delegation_sets (
CallerReference,
HostedZoneId,
region
)
SELECT 
'{{ CallerReference }}' /* required */,
'{{ HostedZoneId }}',
'{{ region }}'
RETURNING
DelegationSet,
Location
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: reusable_delegation_sets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the reusable_delegation_sets resource.
    - name: CallerReference
      value: "{{ CallerReference }}"
    - name: HostedZoneId
      value: "{{ HostedZoneId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_reusable_delegation_set"
    values={[
        { label: 'delete_reusable_delegation_set', value: 'delete_reusable_delegation_set' }
    ]}
>
<TabItem value="delete_reusable_delegation_set">

Deletes a reusable delegation set. You can delete a reusable delegation set only if it isn't associated with any hosted zones. To verify that the reusable delegation set is not associated with any hosted zones, submit a GetReusableDelegationSet request and specify the ID of the reusable delegation set that you want to delete.

```sql
DELETE FROM aws.route53.reusable_delegation_sets
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
