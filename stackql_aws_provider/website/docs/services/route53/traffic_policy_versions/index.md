--- 
title: traffic_policy_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - traffic_policy_versions
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

Creates, updates, deletes, gets or lists a <code>traffic_policy_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="traffic_policy_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.traffic_policy_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_traffic_policy_versions"
    values={[
        { label: 'list_traffic_policy_versions', value: 'list_traffic_policy_versions' }
    ]}
>
<TabItem value="list_traffic_policy_versions">

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
    <td><a href="#list_traffic_policy_versions"><CopyableCode code="list_traffic_policy_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-trafficpolicyversion"><code>trafficpolicyversion</code></a>, <a href="#parameter-maxitems"><code>maxitems</code></a></td>
    <td>Gets information about all of the versions for a specified traffic policy. Traffic policy versions are listed in numerical order by VersionNumber.</td>
</tr>
<tr>
    <td><a href="#create_traffic_policy_version"><CopyableCode code="create_traffic_policy_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new version of an existing traffic policy. When you create a new version of a traffic policy, you specify the ID of the traffic policy that you want to update and a JSON-formatted document that describes the new version. You use traffic policies to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com). You can create a maximum of 1000 versions of a traffic policy. If you reach the limit and need to create another version, you'll need to start a new traffic policy.</td>
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
    <td>The ID of the traffic policy for which you want to create a new version.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxitems">
    <td><CopyableCode code="maxitems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of traffic policy versions that you want Amazon Route 53 to include in the response body for this request. If the specified traffic policy has more than MaxItems versions, the value of IsTruncated in the response is true, and the value of the TrafficPolicyVersionMarker element is the ID of the first version that Route 53 will return if you submit another request.</td>
</tr>
<tr id="parameter-trafficpolicyversion">
    <td><CopyableCode code="trafficpolicyversion" /></td>
    <td><code>string</code></td>
    <td>For your first request to ListTrafficPolicyVersions, don't include the TrafficPolicyVersionMarker parameter. If you have more traffic policy versions than the value of MaxItems, ListTrafficPolicyVersions returns only the first group of MaxItems versions. To get more traffic policy versions, submit another ListTrafficPolicyVersions request. For the value of TrafficPolicyVersionMarker, specify the value of TrafficPolicyVersionMarker in the previous response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_traffic_policy_versions"
    values={[
        { label: 'list_traffic_policy_versions', value: 'list_traffic_policy_versions' }
    ]}
>
<TabItem value="list_traffic_policy_versions">

Gets information about all of the versions for a specified traffic policy. Traffic policy versions are listed in numerical order by VersionNumber.

```sql
SELECT
Comment,
Document,
Id,
Name,
Type,
Version
FROM aws.route53.traffic_policy_versions
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND trafficpolicyversion = '{{ trafficpolicyversion }}'
AND maxitems = '{{ maxitems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_traffic_policy_version"
    values={[
        { label: 'create_traffic_policy_version', value: 'create_traffic_policy_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_traffic_policy_version">

Creates a new version of an existing traffic policy. When you create a new version of a traffic policy, you specify the ID of the traffic policy that you want to update and a JSON-formatted document that describes the new version. You use traffic policies to create multiple DNS resource record sets for one domain name (such as example.com) or one subdomain name (such as www.example.com). You can create a maximum of 1000 versions of a traffic policy. If you reach the limit and need to create another version, you'll need to start a new traffic policy.

```sql
INSERT INTO aws.route53.traffic_policy_versions (
Document,
Comment,
id,
region
)
SELECT 
'{{ Document }}',
'{{ Comment }}',
'{{ id }}',
'{{ region }}'
RETURNING
Location,
TrafficPolicy
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: traffic_policy_versions
  props:
    - name: id
      value: "{{ id }}"
      description: Required parameter for the traffic_policy_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the traffic_policy_versions resource.
    - name: Document
      value: "{{ Document }}"
    - name: Comment
      value: "{{ Comment }}"
`}</CodeBlock>

</TabItem>
</Tabs>
