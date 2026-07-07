--- 
title: traffic_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - traffic_policies
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

Creates, updates, deletes, gets or lists a <code>traffic_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="traffic_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.traffic_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_traffic_policy"
    values={[
        { label: 'get_traffic_policy', value: 'get_traffic_policy' },
        { label: 'list_traffic_policies', value: 'list_traffic_policies' }
    ]}
>
<TabItem value="get_traffic_policy">

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
    <td><CopyableCode code="Comment" /></td>
    <td><code>string</code></td>
    <td>The comment that you specify in the CreateTrafficPolicy request, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="Document" /></td>
    <td><code>string</code></td>
    <td>The definition of a traffic policy in JSON format. You specify the JSON document to use for a new traffic policy in the CreateTrafficPolicy request. For more information about the JSON format, see Traffic Policy Document Format.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID that Amazon Route 53 assigned to a traffic policy when you created it.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name that you specified when you created the traffic policy.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The DNS type of the resource record sets that Amazon Route 53 creates when you use a traffic policy to create a traffic policy instance.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>integer</code></td>
    <td>The version number that Amazon Route 53 assigns to a traffic policy. For a new traffic policy, the value of Version is always 1.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_traffic_policies">

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
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID that Amazon Route 53 assigned to the traffic policy when you created it.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestVersion" /></td>
    <td><code>integer</code></td>
    <td>The version number of the latest version of the traffic policy.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name that you specified for the traffic policy when you created it.</td>
</tr>
<tr>
    <td><CopyableCode code="TrafficPolicyCount" /></td>
    <td><code>integer</code></td>
    <td>The number of traffic policies that are associated with the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The DNS type of the resource record sets that Amazon Route 53 creates when you use a traffic policy to create a traffic policy instance.</td>
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
    <td><a href="#get_traffic_policy"><CopyableCode code="get_traffic_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specific traffic policy version. For information about how of deleting a traffic policy affects the response from GetTrafficPolicy, see DeleteTrafficPolicy.</td>
</tr>
<tr>
    <td><a href="#list_traffic_policies"><CopyableCode code="list_traffic_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-trafficpolicyid"><code>trafficpolicyid</code></a>, <a href="#parameter-maxitems"><code>maxitems</code></a></td>
    <td>Gets information about the latest version for every traffic policy that is associated with the current Amazon Web Services account. Policies are listed in the order that they were created in. For information about how of deleting a traffic policy affects the response from ListTrafficPolicies, see DeleteTrafficPolicy.</td>
</tr>
<tr>
    <td><a href="#create_traffic_policy"><CopyableCode code="create_traffic_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a traffic policy, which you use to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com).</td>
</tr>
<tr>
    <td><a href="#update_traffic_policy_comment"><CopyableCode code="update_traffic_policy_comment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the comment for a specified traffic policy version.</td>
</tr>
<tr>
    <td><a href="#delete_traffic_policy"><CopyableCode code="delete_traffic_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a traffic policy. When you delete a traffic policy, Route 53 sets a flag on the policy to indicate that it has been deleted. However, Route 53 never fully deletes the traffic policy. Note the following: Deleted traffic policies aren't listed if you run ListTrafficPolicies. There's no way to get a list of deleted policies. If you retain the ID of the policy, you can get information about the policy, including the traffic policy document, by running GetTrafficPolicy.</td>
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
    <td>The ID of the traffic policy that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The version number of the traffic policy that you want to delete.</td>
</tr>
<tr id="parameter-maxitems">
    <td><CopyableCode code="maxitems" /></td>
    <td><code>string</code></td>
    <td>(Optional) The maximum number of traffic policies that you want Amazon Route 53 to return in response to this request. If you have more than MaxItems traffic policies, the value of IsTruncated in the response is true, and the value of TrafficPolicyIdMarker is the ID of the first traffic policy that Route 53 will return if you submit another request.</td>
</tr>
<tr id="parameter-trafficpolicyid">
    <td><CopyableCode code="trafficpolicyid" /></td>
    <td><code>string</code></td>
    <td>(Conditional) For your first request to ListTrafficPolicies, don't include the TrafficPolicyIdMarker parameter. If you have more traffic policies than the value of MaxItems, ListTrafficPolicies returns only the first MaxItems traffic policies. To get the next group of policies, submit another request to ListTrafficPolicies. For the value of TrafficPolicyIdMarker, specify the value of TrafficPolicyIdMarker that was returned in the previous response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_traffic_policy"
    values={[
        { label: 'get_traffic_policy', value: 'get_traffic_policy' },
        { label: 'list_traffic_policies', value: 'list_traffic_policies' }
    ]}
>
<TabItem value="get_traffic_policy">

Gets information about a specific traffic policy version. For information about how of deleting a traffic policy affects the response from GetTrafficPolicy, see DeleteTrafficPolicy.

```sql
SELECT
Comment,
Document,
Id,
Name,
Type,
Version
FROM aws.route53.traffic_policies
WHERE id = '{{ id }}' -- required
AND version = '{{ version }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_traffic_policies">

Gets information about the latest version for every traffic policy that is associated with the current Amazon Web Services account. Policies are listed in the order that they were created in. For information about how of deleting a traffic policy affects the response from ListTrafficPolicies, see DeleteTrafficPolicy.

```sql
SELECT
Id,
LatestVersion,
Name,
TrafficPolicyCount,
Type
FROM aws.route53.traffic_policies
WHERE region = '{{ region }}' -- required
AND trafficpolicyid = '{{ trafficpolicyid }}'
AND maxitems = '{{ maxitems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_traffic_policy"
    values={[
        { label: 'create_traffic_policy', value: 'create_traffic_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_traffic_policy">

Creates a traffic policy, which you use to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com).

```sql
INSERT INTO aws.route53.traffic_policies (
Name,
Document,
Comment,
region
)
SELECT 
'{{ Name }}',
'{{ Document }}',
'{{ Comment }}',
'{{ region }}'
RETURNING
Comment,
Document,
Id,
Name,
Type,
Version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: traffic_policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the traffic_policies resource.
    - name: Name
      value: "{{ Name }}"
    - name: Document
      value: "{{ Document }}"
    - name: Comment
      value: "{{ Comment }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_traffic_policy_comment"
    values={[
        { label: 'update_traffic_policy_comment', value: 'update_traffic_policy_comment' }
    ]}
>
<TabItem value="update_traffic_policy_comment">

Updates the comment for a specified traffic policy version.

```sql
UPDATE aws.route53.traffic_policies
SET 
Comment = '{{ Comment }}'
WHERE 
id = '{{ id }}' --required
AND version = '{{ version }}' --required
AND region = '{{ region }}' --required
RETURNING
Comment,
Document,
Id,
Name,
Type,
Version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_traffic_policy"
    values={[
        { label: 'delete_traffic_policy', value: 'delete_traffic_policy' }
    ]}
>
<TabItem value="delete_traffic_policy">

Deletes a traffic policy. When you delete a traffic policy, Route 53 sets a flag on the policy to indicate that it has been deleted. However, Route 53 never fully deletes the traffic policy. Note the following: Deleted traffic policies aren't listed if you run ListTrafficPolicies. There's no way to get a list of deleted policies. If you retain the ID of the policy, you can get information about the policy, including the traffic policy document, by running GetTrafficPolicy.

```sql
DELETE FROM aws.route53.traffic_policies
WHERE id = '{{ id }}' --required
AND version = '{{ version }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
